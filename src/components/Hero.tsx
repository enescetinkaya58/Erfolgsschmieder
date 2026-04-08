import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-brand font-medium">
                Nur noch wenige Beratungsplätze frei
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark leading-[1.1] tracking-tight">
              Ihr Unternehmen
              <br />
              wächst nicht mehr?
            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-500 max-w-xl leading-relaxed mx-auto lg:mx-0">
              Wir zeigen Ihnen in einem kostenlosen Erstgespräch, welche{" "}
              <span className="text-brand-dark font-semibold">
                3 Hebel
              </span>{" "}
              Ihr Unternehmen sofort nach vorne bringen &ndash; ohne mehr zu
              arbeiten, sondern smarter.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/funnel"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase text-white bg-accent hover:bg-accent-dark rounded-full transition-all shadow-lg shadow-accent/25"
              >
                Kostenloses Erstgespräch sichern
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-400 text-center lg:text-left">
              Unverbindlich &middot; Kostenlos &middot; Dauert nur 15 Minuten
            </p>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  5,0 Google
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <span className="text-sm text-gray-500">
                Vertrauen von <span className="font-semibold text-brand-dark">Hasir, Emsal &amp; mehr</span>
              </span>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-sm text-gray-500 hidden sm:inline">
                Berlin &amp; deutschlandweit
              </span>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/A_candid_authentic_low-angle_s_Nano_Banana_2_93549.jpg"
                  alt="Erfolgsschmieder Berlin – Unternehmensberatung"
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  unoptimized
                  sizes="50vw"
                />
              </div>
              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl max-w-xs border border-gray-100">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-brand-dark leading-relaxed">
                  &ldquo;In 3 Monaten mehr bewegt als unsere letzte Beratung in
                  einem Jahr.&rdquo;
                </p>
                <p className="mt-2 text-xs text-gray-400">
                  Geschäftsführung, Emsal Gruppe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
