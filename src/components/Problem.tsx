import { ArrowRightIcon } from "./icons";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
      </svg>
    ),
    title: "Umsatz stagniert trotz Dauerstress",
    text: "Sie arbeiten 60+ Stunden die Woche, aber unterm Strich bleibt nicht mehr übrig. Mehr Einsatz bringt nicht mehr Ergebnis.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Team zieht nicht mit",
    text: "Mitarbeiter machen Dienst nach Vorschrift. Motivation fehlt, Fluktuation steigt. Sie fühlen sich als Einzelkämpfer.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Keine klare Strategie",
    text: "Sie haben 100 Ideen, aber keinen roten Faden. Jede Woche eine neue Priorität – echte Fortschritte bleiben aus.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Alles hängt an Ihnen",
    text: "Ohne Sie läuft nichts. Urlaub? Undenkbar. Ihr Unternehmen ist komplett von Ihnen abhängig – und das merken Sie jeden Tag.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Geld bleibt auf der Straße liegen",
    text: "Sie verschenken Umsatz durch fehlende Vertriebsstrukturen, ungenutzte Förderungen oder die falsche Versicherungsstrategie.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-3">
            Hand aufs Herz
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight">
            Kommt Ihnen das bekannt vor?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Die meisten Unternehmer, die zu uns kommen, stecken in mindestens
            zwei dieser Situationen fest.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`bg-surface rounded-2xl p-7 hover:shadow-lg transition-all duration-300 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand/5 text-brand flex items-center justify-center">
                {p.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-dark">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-xl text-brand-dark font-semibold font-serif">
            Das muss nicht so bleiben.
          </p>
          <p className="mt-2 text-gray-500">
            In einem kostenlosen Erstgespräch zeigen wir Ihnen den Weg raus.
          </p>
          <a
            href="/funnel"
            className="mt-6 group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-accent hover:bg-accent-dark rounded-full transition-all shadow-lg shadow-accent/25"
          >
            Jetzt Erstgespräch sichern
            <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
