const steps = [
  {
    number: "01",
    title: "Analyse & Strategie",
    text: "Wir analysieren Ihre Bedürfnisse und entwickeln eine maßgeschneiderte Strategie.",
  },
  {
    number: "02",
    title: "Umsetzung & Entwicklung",
    text: "Unsere Experten setzen die Strategie mit modernsten Tools um.",
  },
  {
    number: "03",
    title: "Optimierung & Support",
    text: "Wir überwachen den Erfolg und bieten kontinuierlichen Support für langfristigen Erfolg.",
  },
];

export default function Prozess() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Intro – große Kachel links */}
          <div className="md:row-span-2 bg-white rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-gray-200 rounded-full text-gray-500 mb-8">
                Unser Prozess
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-dark tracking-tight leading-tight">
                So arbeiten wir
                <br />
                für Ihren Erfolg
              </h2>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Wir begleiten Sie Schritt für Schritt, um Ihre Ziele effizient
                zu erreichen.
              </p>
            </div>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-blue hover:bg-blue-light rounded-xl transition-colors w-fit"
            >
              Jetzt starten
            </a>
          </div>

          {/* Schritt 01 */}
          <div className="bg-white rounded-2xl p-8">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-gray-200 rounded-full text-gray-500 mb-6">
              Schritt {steps[0].number}
            </span>
            <h3 className="text-xl font-bold text-blue-dark">
              {steps[0].title}
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              {steps[0].text}
            </p>
          </div>

          {/* Bild rechts oben */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl overflow-hidden relative min-h-[200px]">
            {/* Ersetze mit: <Image src="/images/prozess.jpg" alt="Beratung" fill className="object-cover" /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Bild einfügen</p>
                <p className="text-gray-300 text-xs">/images/prozess.jpg</p>
              </div>
            </div>
          </div>

          {/* Schritt 02 + 03 */}
          {steps.slice(1).map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-gray-200 rounded-full text-gray-500 mb-6">
                Schritt {step.number}
              </span>
              <h3 className="text-xl font-bold text-blue-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
