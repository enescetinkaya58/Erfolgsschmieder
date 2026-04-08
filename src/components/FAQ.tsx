"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Was kostet das Erstgespräch?",
    answer:
      "Nichts. Das Erstgespräch ist komplett kostenlos und unverbindlich. Wir möchten Sie und Ihre Situation kennenlernen, bevor wir über eine Zusammenarbeit sprechen. Kein Kleingedrucktes, kein Haken.",
  },
  {
    question: "Ich habe schon einen Berater gehabt – warum sollte es bei euch anders sein?",
    answer:
      'Weil wir keine PowerPoint-Friedhöfe liefern. Viele Berater analysieren wochenlang und übergeben dann einen Bericht, den keiner umsetzt. Bei uns ist das anders: Wir packen mit an, setzen gemeinsam um und messen die Ergebnisse. Wenn es nicht funktioniert, passen wir sofort an. Unser Testimonial von der Emsal Gruppe sagt es am besten: „In 3 Monaten mehr bewegt als die letzte Beratung in einem Jahr."',
  },
  {
    question: "Für wen ist Erfolgsschmieder geeignet?",
    answer:
      "Für mittelständische Unternehmer und Geschäftsführer, die wachsen wollen, aber das Gefühl haben, auf der Stelle zu treten. Besonders gut können wir helfen, wenn Sie in der Gastronomie, im Handwerk, im Dienstleistungsbereich oder in der Energiebranche tätig sind. Aber auch Unternehmen aus anderen Branchen profitieren von unserer 360°-Beratung.",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer:
      "Erste Veränderungen spüren die meisten Kunden bereits in den ersten 4-6 Wochen. Das können klarere Prozesse sein, bessere Teamdynamik oder konkret neue Kunden. Unser Ziel ist es, schnell sichtbare Quick Wins zu erzielen und gleichzeitig langfristige Strukturen aufzubauen.",
  },
  {
    question: "Was genau passiert im Erstgespräch?",
    answer:
      "Sie füllen zunächst unseren kurzen Fragebogen aus, damit wir uns vorbereiten können. Im Gespräch selbst (ca. 15 Minuten) analysieren wir gemeinsam Ihre aktuelle Situation, identifizieren die größten Hebel und geben Ihnen eine ehrliche Einschätzung, ob und wie wir helfen können. Kein Verkaufsdruck – versprochen.",
  },
  {
    question: "Muss ich mich langfristig binden?",
    answer:
      "Nein. Wir arbeiten auf Basis von klar definierten Projekten mit messbaren Meilensteinen. Wenn die Ergebnisse stimmen, arbeiten viele Kunden langfristig mit uns – aber das ist Ihre Entscheidung, nicht unsere Vertragsbedingung.",
  },
  {
    question: "Ihr bietet auch Versicherung und Solar an – ist das seriös?",
    answer:
      "Absolut. Unser Geschäftsführer Emre Enes Cetinkaya ist zertifizierter Sachverständiger für Photovoltaik und erfahrener Versicherungsmakler. Die 360°-Beratung bedeutet, dass wir Unternehmer ganzheitlich unterstützen – auch bei Investitionsentscheidungen, die über das Tagesgeschäft hinausgehen. Sie bekommen alles aus einer Hand, statt mit fünf verschiedenen Beratern zu jonglieren.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-3">
            Häufige Fragen
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight">
            Noch unsicher? Das ist normal.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Hier finden Sie Antworten auf die häufigsten Fragen.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
              >
                <span className="text-brand-dark font-semibold pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-brand shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
