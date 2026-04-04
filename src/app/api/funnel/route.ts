import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { answers, contact } = await req.json();

    const stepsLabels = [
      "Aktuelle Situation",
      "Bereiche",
      "Unternehmensgröße",
      "Herausforderungen",
      "Branche",
      "Umsatzziel",
      "Zeitplan",
    ];

    const answersHtml = Object.entries(answers)
      .map(
        ([step, values]) =>
          `<tr>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;vertical-align:top;">${stepsLabels[Number(step)] || `Frage ${Number(step) + 1}`}</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${(values as string[]).join(", ")}</td>
          </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#1e3a5f;padding:24px;border-radius:12px 12px 0 0;">
          <h1 style="color:#c9a84c;margin:0;font-size:22px;">Neue Funnel-Anfrage</h1>
          <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;">erfolgsschmieder.de</p>
        </div>

        <div style="background:#fff;padding:24px;border:1px solid #eee;">
          <h2 style="color:#1e3a5f;font-size:16px;margin:0 0 16px;">Kontaktdaten</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Name</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Unternehmen</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.unternehmen || "–"}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">E-Mail</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${contact.email}">${contact.email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Telefon</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${contact.telefon}">${contact.telefon}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;color:#1e3a5f;">Nachricht</td>
              <td style="padding:8px 12px;border-bottom:1px solid #eee;">${contact.nachricht || "–"}</td>
            </tr>
          </table>

          <h2 style="color:#1e3a5f;font-size:16px;margin:24px 0 16px;">Funnel-Antworten</h2>
          <table style="width:100%;border-collapse:collapse;">
            ${answersHtml}
          </table>
        </div>

        <div style="background:#f8f7f4;padding:16px 24px;border-radius:0 0 12px 12px;border:1px solid #eee;border-top:none;">
          <p style="color:#999;font-size:12px;margin:0;">Diese Anfrage wurde über den Funnel auf erfolgsschmieder.de gesendet.</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Erfolgsschmieder Funnel <funnel@erfolgsschmieder.de>",
      to: ["info@erfolgsschmieder.de"],
      subject: `Neue Anfrage von ${contact.name}${contact.unternehmen ? ` (${contact.unternehmen})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
