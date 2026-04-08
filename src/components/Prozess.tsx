import { ArrowRightIcon } from "./icons";

const steps = [
  {
    number: "01",
    title: "Kostenloses Erstgespräch",
    text: "Sie füllen unseren kurzen Fragebogen aus. Wir melden uns innerhalb von 24 Stunden und lernen Ihre Situation kennen. Kein Verkaufsdruck – nur ehrliche Analyse.",
    detail: "15 Minuten, die alles verändern können",
  },
  {
    number: "02",
    title: "Individuelle Strategie",
    text: "Basierend auf Ihrer Situation entwickeln wir einen konkreten Fahrplan mit klaren Meilensteinen. Sie wissen genau, was wann passiert und welche Ergebnisse Sie erwarten können.",
    detail: "Ihr persönlicher Wachstumsplan",
  },
  {
    number: "03",
    title: "Umsetzung & Ergebnisse",
    text: "Wir setzen gemeinsam um – Seite an Seite. Kein Bericht, der in der Schublade verschwindet. Regelmäßige Check-ins stellen sicher, dass Sie messbare Fortschritte sehen.",
    detail: "Ergebnisse statt PowerPoint-Friedhöfe",
  },
];

export default function Prozess() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-3">
            So funktioniert es
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight">
            In 3 Schritten zum Erfolg
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Kein komplizierter Prozess. Kein Papierkram. Einfach anfangen.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-brand/20 to-transparent z-0" />
              )}

              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center text-lg font-bold shrink-0">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-brand-dark">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1">
                  {step.text}
                </p>

                <div className="mt-5 pt-5 border-t border-gray-100">
                  <p className="text-sm text-accent-dark font-semibold">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/funnel"
            className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-accent hover:bg-accent-dark rounded-full transition-all shadow-lg shadow-accent/25"
          >
            Jetzt Schritt 1 machen
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-3 text-xs text-gray-400">
            Kostenlos &middot; Unverbindlich &middot; In 2 Minuten ausgefüllt
          </p>
        </div>
      </div>
    </section>
  );
}
