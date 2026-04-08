import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    label: "Einstieg",
    title: "Kostenloses Erstgespräch",
    result: "Klarheit über Ihre Situation in 15 Minuten",
    description:
      "Kein Verkaufsgespräch, sondern echte Analyse. Wir hören zu, stellen die richtigen Fragen und zeigen Ihnen, wo die größten Hebel liegen. Danach wissen Sie genau, ob und wie wir Ihnen helfen können.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    label: "Kernleistung",
    title: "Strategische Unternehmensberatung",
    result: "Klare Roadmap mit messbaren Meilensteinen",
    description:
      "Wir analysieren Ihr Geschäftsmodell, finden die Wachstumshebel und bauen eine Strategie, die wirklich umsetzbar ist. Keine Theorie – sondern ein konkreter Plan, der sich in Ihren Zahlen widerspiegelt.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    label: "Vertrieb",
    title: "Vertrieb & Skalierung",
    result: "Planbar neue Kunden gewinnen",
    description:
      "Wir bauen Vertriebsstrukturen, die systematisch und planbar neue Kunden bringen. Von der Lead-Generierung bis zum Abschluss – ohne dass Sie sich verbiegen müssen.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "Persönlich",
    title: "Coaching & Mentoring",
    result: "Souveräne Führung, klare Entscheidungen",
    description:
      "Unser Business Master Coach arbeitet direkt mit Ihnen an Ihrer Führungskompetenz. Damit Sie nicht nur Ihr Unternehmen führen, sondern es souverän und mit klarem Kopf lenken.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    label: "360° Service",
    title: "Solar, Versicherung & Immobilien",
    result: "Alle wichtigen Entscheidungen aus einer Hand",
    description:
      "Als zertifizierter Sachverständiger für Photovoltaik und erfahrener Versicherungsmakler beraten wir Sie auch bei Investitionsentscheidungen, die über das klassische Tagesgeschäft hinausgehen.",
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Was wir anbieten"
          title="Alles was Ihr Unternehmen braucht"
          subtitle="Eine Beratung. Alle Lösungen. Von der Strategie bis zur Umsetzung."
        />

        <div className="mt-16 space-y-5">
          {/* Erstgespräch highlight */}
          {services
            .filter((s) => s.highlight)
            .map((s) => (
              <div
                key={s.title}
                className="bg-brand-dark rounded-2xl p-8 lg:p-10 border-2 border-accent/30"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                        {s.label}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-bold bg-accent text-brand-dark rounded-full">
                        KOSTENLOS
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-gray-400 leading-relaxed max-w-2xl">
                      {s.description}
                    </p>
                  </div>
                  <a
                    href="/funnel"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-brand-dark bg-accent hover:bg-accent-light rounded-full transition-colors shrink-0"
                  >
                    Jetzt sichern
                  </a>
                </div>
              </div>
            ))}

          {/* Other services */}
          <div className="grid md:grid-cols-2 gap-5">
            {services
              .filter((s) => !s.highlight)
              .map((s) => (
                <div
                  key={s.title}
                  className="group bg-surface rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    {s.icon}
                  </div>

                  <span className="inline-block mt-4 text-xs font-semibold tracking-widest uppercase text-brand/60">
                    {s.label}
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-brand-dark">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand/5">
                    <svg
                      className="w-4 h-4 text-brand shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-brand font-medium">
                      {s.result}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
