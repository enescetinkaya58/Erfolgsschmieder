import { CheckIcon } from "./icons";

const usps = [
  {
    title: "Mittelstand-DNA",
    text: "Wir sind selbst Unternehmer. Wir verstehen Ihre Probleme, weil wir sie kennen.",
  },
  {
    title: "Ergebnisorientiert",
    text: "Keine Theorie. Jede Maßnahme muss sich in Ihren Zahlen widerspiegeln.",
  },
  {
    title: "Partnerschaft auf Augenhöhe",
    text: "Wir beraten nicht von oben herab. Wir arbeiten mit Ihnen – Seite an Seite.",
  },
];

export default function WarumWir() {
  return (
    <section id="ueber-uns" className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
            Warum Erfolgsschmieder
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Wir liefern keine PowerPoint-Friedhöfe.
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            Andere Berater analysieren wochenlang und liefern Berichte, die
            keiner liest. Bei uns gibt es Ergebnisse, keine Ausreden. Wir
            packen mit an – als wäre es unser eigenes Unternehmen.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {usps.map((usp) => (
            <div key={usp.title} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <CheckIcon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-white font-semibold text-lg">{usp.title}</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">{usp.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
