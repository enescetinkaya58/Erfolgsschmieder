import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { generateFirstResponse } from "@/lib/agent";

const resend = new Resend(process.env.RESEND_API_KEY);

const STEP_LABELS = [
  "Aktuelle Situation",
  "Bereiche",
  "Unternehmensgröße",
  "Herausforderungen",
  "Branche",
  "Umsatzziel",
  "Zeitplan",
];

export async function POST(req: Request) {
  try {
    const { answers, contact } = await req.json();

    // 1. Lead in Datenbank speichern
    const { data: lead, error: dbError } = await supabaseAdmin
      .from("leads")
      .insert({
        name: contact.name,
        unternehmen: contact.unternehmen || null,
        email: contact.email,
        telefon: contact.telefon || null,
        nachricht: contact.nachricht || null,
        funnel_answers: answers,
        status: "in_progress",
      })
      .select()
      .single();

    if (dbError) {
      console.error("DB error:", dbError);
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    // 2. Admin-Benachrichtigung an Enes
    const answersHtml = Object.entries(answers)
      .map(
        ([step, values]) =>
          `<tr>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;vertical-align:top;">${STEP_LABELS[Number(step)] || `Frage ${Number(step) + 1}`}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${(values as string[]).join(", ")}</td>
          </tr>`
      )
      .join("");

    const adminHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1e3a5f;padding:24px;border-radius:12px 12px 0 0;">
          <h1 style="color:#c9a84c;margin:0;font-size:22px;">Neue Funnel-Anfrage</h1>
          <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;">Der Agent übernimmt automatisch die erste Antwort</p>
        </div>
        <div style="background:#fff;padding:24px;border:1px solid #eee;">
          <h2 style="color:#1e3a5f;font-size:16px;margin:0 0 16px;">Kontaktdaten</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.name}</td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Unternehmen</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.unternehmen || "–"}</td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">E-Mail</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${contact.telefon}">${contact.telefon}</a></td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Nachricht</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.nachricht || "–"}</td></tr>
          </table>
          <h2 style="color:#1e3a5f;font-size:16px;margin:24px 0 16px;">Funnel-Antworten</h2>
          <table style="width:100%;border-collapse:collapse;">${answersHtml}</table>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Erfolgsschmieder Funnel <funnel@send.erfolgsschmieder.de>",
      to: ["info@erfolgsschmieder.de"],
      replyTo: contact.email,
      subject: `Neue Anfrage von ${contact.name}${contact.unternehmen ? ` (${contact.unternehmen})` : ""}`,
      html: adminHtml,
    });

    // 3. Agent generiert persönliche erste Antwort an den Lead
    try {
      const agentResponse = await generateFirstResponse({
        name: contact.name,
        unternehmen: contact.unternehmen,
        email: contact.email,
        telefon: contact.telefon,
        nachricht: contact.nachricht,
        funnel_answers: answers,
      });

      // HTML-Version mit Zeilenumbrüchen
      const bodyHtml = agentResponse.body
        .split("\n")
        .map((line) => `<p style="margin:0 0 12px;line-height:1.6;color:#333;">${line || "&nbsp;"}</p>`)
        .join("");

      const leadEmailHtml = `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          ${bodyHtml}
        </div>
      `;

      const { data: sendResult, error: sendError } = await resend.emails.send({
        from: "Enes Cetinkaya <enes@send.erfolgsschmieder.de>",
        to: [contact.email],
        replyTo: "info@erfolgsschmieder.de",
        subject: agentResponse.subject,
        html: leadEmailHtml,
        text: agentResponse.body,
      });

      if (sendError) {
        console.error("Agent send error:", sendError);
      }

      // 4. Konversation in DB speichern
      await supabaseAdmin.from("conversations").insert({
        lead_id: lead.id,
        direction: "outbound",
        sender: "enes@send.erfolgsschmieder.de",
        recipient: contact.email,
        subject: agentResponse.subject,
        body: agentResponse.body,
        author: "agent",
        message_id: sendResult?.id || null,
      });
    } catch (agentError) {
      console.error("Agent error:", agentError);
      // Lead ist trotzdem gespeichert, Admin ist benachrichtigt
      await supabaseAdmin
        .from("leads")
        .update({ status: "awaiting_human" })
        .eq("id", lead.id);
    }

    return NextResponse.json({ success: true, leadId: lead.id });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
