import Image from "next/image";

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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Intro */}
          <div className="md:row-span-2 bg-surface rounded-2xl p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-gray-200 rounded-full text-gray-500 mb-8">
                Unser Prozess
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
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
              href="/funnel"
              className="mt-8 inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-brand-dark hover:bg-brand rounded-xl transition-colors w-fit"
            >
              Jetzt starten
            </a>
          </div>

          {/* Schritt 01 */}
          <div className="bg-surface rounded-2xl p-8">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-gray-200 rounded-full text-gray-500 mb-6">
              Schritt {steps[0].number}
            </span>
            <h3 className="text-xl font-bold text-brand-dark">{steps[0].title}</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">{steps[0].text}</p>
          </div>

          {/* Bild */}
          <div className="rounded-2xl overflow-hidden relative min-h-[200px]">
            <Image
              src="/images/prozess.jpg"
              alt="Unser Prozess"
              fill
              className="object-cover"
              quality={100}
              unoptimized
              sizes="33vw"
            />
          </div>

          {steps.slice(1).map((step) => (
            <div key={step.number} className="bg-surface rounded-2xl p-8">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-gray-200 rounded-full text-gray-500 mb-6">
                Schritt {step.number}
              </span>
              <h3 className="text-xl font-bold text-brand-dark">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
