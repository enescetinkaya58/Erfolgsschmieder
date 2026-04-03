import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const benefits = [
  "Persönliche Beratung",
  "Maßgeschneiderte Lösungen",
  "Transparente Preise",
  "Langfristige Partnerschaft",
];

export default function CTA() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-brand rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
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
                    <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="text-white font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/funnel"
                className="mt-10 inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-brand-dark hover:bg-brand-dark/80 rounded-xl transition-colors w-fit group"
              >
                Kostenloses Gespräch buchen
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative min-h-[300px] lg:min-h-0">
              <Image
                src="/images/cta.jpg"
                alt="Erfolgsschmieder Beratung"
                fill
                className="object-cover"
                quality={100}
                unoptimized
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
