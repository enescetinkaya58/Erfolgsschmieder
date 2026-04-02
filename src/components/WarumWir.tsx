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
    <section id="ueber-uns" className="py-20 lg:py-28 bg-blue-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden relative">
              {/* Ersetze mit: <Image src="/images/team.jpg" alt="Team" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/40 text-sm">Team-Bild einfügen</p>
                  <p className="text-white/20 text-xs mt-1">/images/team.jpg</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
              Warum Erfolgsschmieder
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Wir liefern keine
              <br />
              PowerPoint-Friedhöfe.
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Andere Berater analysieren wochenlang und liefern Berichte, die
              keiner liest. Bei uns gibt es Ergebnisse, keine Ausreden. Wir
              packen mit an – als wäre es unser eigenes Unternehmen.
            </p>

            <div className="mt-10 space-y-6">
              {usps.map((usp) => (
                <div key={usp.title} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{usp.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{usp.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
