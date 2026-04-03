import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-6">
              Exklusiv für Unternehmer
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.1] tracking-tight">
              Ihr Business.
              <br />
              <span className="text-brand italic">Ihr Erfolg.</span>
            </h1>

            <p className="mt-8 text-lg text-gray-500 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Maßgeschneiderte Strategien und persönliche Beratung – für
              mittelständische Unternehmen, die mehr wollen.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/funnel"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-brand-dark hover:bg-brand rounded-full transition-all"
              >
                Jetzt starten
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase text-brand-dark border border-brand-dark/20 hover:border-brand-dark/40 rounded-full transition-colors"
              >
                Mehr erfahren
              </a>
            </div>

            {/* Trust badge */}
            <div className="mt-8 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-brand-dark">50+ Unternehmen</span> vertrauen uns
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Erfolgsschmieder Berlin"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  unoptimized
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
