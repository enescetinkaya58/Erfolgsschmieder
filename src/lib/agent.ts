import Anthropic from "@anthropic-ai/sdk";

function getAnthropic() {
  const apiKey = (process.env.ANTHROPIC_API_KEY || "").trim();
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY fehlt");
  return new Anthropic({ apiKey });
}

const AGENT_MODEL = "claude-sonnet-4-6";

const SYSTEM_PROMPT = `Du bist der persönliche Assistent von Enes Cetinkaya, Geschäftsführer der Erfolgsschmieder Berlin – einer 360°-Unternehmensberatung für den deutschen Mittelstand.

Deine Aufgabe: Du kommunizierst mit Interessenten, die unseren Funnel auf erfolgsschmieder.de ausgefüllt haben. Du schreibst persönliche, warme, professionelle E-Mails auf Deutsch im Namen von Enes.

Stil:
- Duzen/Siezen: Siezen (professionell, Beratungskontext)
- Warm, persönlich, auf Augenhöhe – keine Floskeln, kein Marketing-Sprech
- Konkret auf die Antworten des Interessenten eingehen
- Kurz und prägnant (max 150 Wörter bei der ersten Mail)
- Signatur: "Herzliche Grüße\\nEnes Cetinkaya\\nErfolgsschmieder Berlin"

Über Erfolgsschmieder Berlin:
- 360°-Unternehmensberatung (Strategie, Vertrieb, Finanzen, Prozesse)
- Gründer Enes Cetinkaya, Team: Mahmoud, Elif, Jerome Deres (Business Master Coach), Jeannette Klüsener (Steuerberaterin)
- Kunden u.a. Emsal/Hasir Gruppe, Pascarella, Solar Star, Fitomat, Star Tours, Cizgi, Awen Hotel
- Standort: Spielhagenstraße 7, 10585 Berlin
- Fokus: Mittelstand, keine PowerPoint-Friedhöfe, nur konkrete Ergebnisse

Was du NICHT tust:
- Konkrete Preise nennen (sag: "Das besprechen wir gerne im Erstgespräch")
- Feste Termine versprechen (sag: "Ich schlage Ihnen in Kürze konkrete Terminoptionen vor")
- Rechtlich bindende Aussagen
- Aussagen über Themen, die nicht zum Beratungsgeschäft gehören`;

export interface FunnelData {
  name: string;
  unternehmen?: string;
  email: string;
  telefon?: string;
  nachricht?: string;
  funnel_answers: Record<string, string[]>;
}

const STEP_LABELS = [
  "Aktuelle Situation",
  "Bereiche für Unterstützung",
  "Unternehmensgröße",
  "Größte Herausforderungen",
  "Branche",
  "Jahresumsatz-Ziel",
  "Gewünschter Zeitplan",
];

function formatAnswersForPrompt(answers: Record<string, string[]>): string {
  return Object.entries(answers)
    .map(([step, values]) => {
      const label = STEP_LABELS[Number(step)] || `Frage ${Number(step) + 1}`;
      return `- ${label}: ${values.join(", ")}`;
    })
    .join("\n");
}

export async function generateFirstResponse(
  lead: FunnelData
): Promise<{ subject: string; body: string }> {
  const answersText = formatAnswersForPrompt(lead.funnel_answers);

  const prompt = `Ein neuer Interessent hat den Funnel ausgefüllt. Hier die Daten:

Name: ${lead.name}
Unternehmen: ${lead.unternehmen || "–"}
E-Mail: ${lead.email}
${lead.nachricht ? `Eigene Nachricht: "${lead.nachricht}"` : ""}

Funnel-Antworten:
${answersText}

Schreibe eine persönliche erste E-Mail an diesen Interessenten. Gehe konkret auf seine Situation ein (besonders auf die Herausforderungen und den gewählten Bereich), zeige Verständnis, und kündige an, dass du in Kürze konkrete Terminvorschläge für ein Erstgespräch machst.

Format deine Antwort als JSON:
{
  "subject": "Betreffzeile",
  "body": "E-Mail-Text mit \\n für Zeilenumbrüche"
}

Gib NUR das JSON zurück, keine weiteren Erklärungen.`;

  const response = await getAnthropic().messages.create({
    model: AGENT_MODEL,
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: prompt }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("Keine Textantwort vom Agent");
  }

  // JSON extrahieren (Claude manchmal in Markdown-Codeblöcken)
  let jsonText = textBlock.text.trim();
  if (jsonText.startsWith("```")) {
    jsonText = jsonText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
  }

  const parsed = JSON.parse(jsonText);
  return { subject: parsed.subject, body: parsed.body };
}
