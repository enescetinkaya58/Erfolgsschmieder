import { Resend } from "resend";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { generateFirstResponse } from "@/lib/agent";
import { STEP_LABELS_DE } from "@/components/funnel/questions";

export const dynamic = "force-dynamic";

function getResend() {
  return new Resend((process.env.RESEND_API_KEY || "").trim());
}

// Legacy-Labels (alte Leads mit numerischen Keys "0".."6")
const LEGACY_STEP_LABELS = [
  "Aktuelle Situation",
  "Bereiche",
  "Unternehmensgröße",
  "Herausforderungen",
  "Branche",
  "Umsatzziel",
  "Zeitplan",
];

function labelForKey(key: string): string {
  if (/^\d+$/.test(key)) {
    return LEGACY_STEP_LABELS[Number(key)] ?? `Frage ${Number(key) + 1}`;
  }
  return STEP_LABELS_DE[key] ?? key;
}

const PATH_LABELS: Record<string, string> = {
  strategy: "Strategische Beratung",
  process: "Prozesse verbessern",
  founding: "Neugründung",
  scaling: "Skalieren",
};

export async function POST(req: Request) {
  try {
    const { answers, contact, path, consent } = await req.json();

    // Pfad und Consent als Meta-Properties in funnel_answers speichern
    // (jsonb erlaubt schemalose Erweiterung – alte Leads bleiben gültig)
    const enrichedAnswers = {
      ...answers,
      ...(path ? { _path: path } : {}),
      ...(consent?.given_at
        ? { _consent_given_at: consent.given_at }
        : {}),
    };

    // 1. Lead in Datenbank speichern
    const { data: lead, error: dbError } = await supabaseAdmin()
      .from("leads")
      .insert({
        name: contact.name,
        unternehmen: contact.unternehmen || null,
        email: contact.email,
        telefon: contact.telefon || null,
        nachricht: contact.nachricht || null,
        funnel_answers: enrichedAnswers,
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
      .filter(([key]) => !key.startsWith("_"))
      .map(
        ([key, values]) =>
          `<tr>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#006039;vertical-align:top;">${labelForKey(key)}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${(values as string[]).join(", ")}</td>
          </tr>`
      )
      .join("");

    const pathLabel = path && PATH_LABELS[path] ? PATH_LABELS[path] : null;
    const pathRowHtml = pathLabel
      ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#007a45;vertical-align:top;">Pfad</td><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;">${pathLabel}</td></tr>`
      : "";

    const consentRowHtml = consent?.given_at
      ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#006039;">DSGVO-Einwilligung</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">Erteilt am ${new Date(consent.given_at).toLocaleString("de-DE")}</td></tr>`
      : "";

    const adminHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#006039;padding:24px;border-radius:12px 12px 0 0;">
          <h1 style="color:#007a45;margin:0;font-size:22px;">Neue Funnel-Anfrage</h1>
          <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;">Der Agent übernimmt automatisch die erste Antwort</p>
        </div>
        <div style="background:#fff;padding:24px;border:1px solid #eee;">
          <h2 style="color:#006039;font-size:16px;margin:0 0 16px;">Kontaktdaten</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#006039;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.name}</td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#006039;">Unternehmen</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.unternehmen || "–"}</td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#006039;">E-Mail</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#006039;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${contact.telefon}">${contact.telefon}</a></td></tr>
            <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#006039;">Nachricht</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.nachricht || "–"}</td></tr>
            ${consentRowHtml}
          </table>
          <h2 style="color:#006039;font-size:16px;margin:24px 0 16px;">Funnel-Antworten</h2>
          <table style="width:100%;border-collapse:collapse;">${pathRowHtml}${answersHtml}</table>
        </div>
      </div>
    `;

    // Admin-Mail nicht-blockierend (bounce soll den Flow nicht killen)
    try {
      await getResend().emails.send({
        from: "Erfolgsschmieder Funnel <funnel@erfolgsschmieder.de>",
        to: ["info@erfolgsschmieder.de"],
        replyTo: contact.email,
        subject: `Neue Anfrage von ${contact.name}${contact.unternehmen ? ` (${contact.unternehmen})` : ""}`,
        html: adminHtml,
      });
    } catch (adminMailError) {
      console.error("Admin mail error (non-blocking):", adminMailError);
    }

    // 3. Agent generiert persönliche erste Antwort an den Lead
    try {
      const agentResponse = await generateFirstResponse({
        name: contact.name,
        unternehmen: contact.unternehmen,
        email: contact.email,
        telefon: contact.telefon,
        nachricht: contact.nachricht,
        funnel_answers: answers,
        funnel_path: path,
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

      const { data: sendResult, error: sendError } = await getResend().emails.send({
        from: "Enes Cetinkaya <enes@erfolgsschmieder.de>",
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
      await supabaseAdmin().from("conversations").insert({
        lead_id: lead.id,
        direction: "outbound",
        sender: "enes@erfolgsschmieder.de",
        recipient: contact.email,
        subject: agentResponse.subject,
        body: agentResponse.body,
        author: "agent",
        message_id: sendResult?.id || null,
      });
    } catch (agentError) {
      console.error("Agent error:", agentError);
      // Lead ist trotzdem gespeichert, Admin ist benachrichtigt
      await supabaseAdmin()
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
