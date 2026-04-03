import { ChevronDownIcon } from "./icons";

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
      </svg>
    ),
    title: "Umsatz stagniert",
    text: "Sie arbeiten mehr, aber der Umsatz bewegt sich nicht. Irgendwo geht Potenzial verloren.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Chaos im Alltag",
    text: "Keine klaren Prozesse, ständiges Feuerlöschen. Ihr Team kämpft – statt zu performen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Keine klare Richtung",
    text: "Viele Ideen, aber kein roter Faden. Entscheidungen werden aufgeschoben oder revidiert.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight">
            Kommt Ihnen das bekannt vor?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Die meisten Unternehmer, die zu uns kommen, kennen mindestens eins
            dieser Probleme.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-surface rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
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
          <p className="text-lg text-brand-dark font-medium">
            Das muss nicht so bleiben.
          </p>
          <ChevronDownIcon className="w-6 h-6 text-brand mx-auto mt-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
