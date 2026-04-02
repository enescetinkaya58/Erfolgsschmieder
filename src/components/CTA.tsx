import { ArrowRightIcon } from "./icons";

const benefits = [
  "Persönliche Beratung",
  "Maßgeschneiderte Lösungen",
  "Transparente Preise",
  "Langfristige Partnerschaft",
];

export default function CTA() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-blue rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left – Text */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Bereit für den
                <br />
                nächsten Schritt?
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Vereinbaren Sie noch heute ein kostenloses Erstgespräch mit
                unseren Experten und erfahren Sie, wie wir Ihr Unternehmen
                voranbringen können.
              </p>

              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                    <span className="text-white font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:info@erfolgsschmieder.de"
                className="mt-10 inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-blue-dark hover:bg-blue-dark/80 rounded-xl transition-colors w-fit group"
              >
                Kostenloses Gespräch buchen
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right – Bild */}
            <div className="relative min-h-[300px] lg:min-h-0 bg-gradient-to-br from-blue-light/50 to-blue/30">
              {/* Ersetze mit: <Image src="/images/cta.jpg" alt="Beratung" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 m-8 border border-white/20">
                  <div className="text-center">
                    <p className="text-white/60 text-sm">Bild einfügen</p>
                    <p className="text-white/30 text-xs mt-1">/images/cta.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
