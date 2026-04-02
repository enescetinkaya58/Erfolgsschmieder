import { ArrowRightIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-dark via-blue to-blue-light" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-light/20 blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gold/80 border-2 border-blue-dark" />
                <div className="w-6 h-6 rounded-full bg-gold-light/80 border-2 border-blue-dark" />
                <div className="w-6 h-6 rounded-full bg-gold-dark/80 border-2 border-blue-dark" />
              </div>
              <span className="text-xs text-white/70">
                Bereits <span className="text-gold font-semibold">30+</span>{" "}
                Unternehmen beraten
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Ihr Unternehmen wächst –<br />
              <span className="text-gold">aber Ihr Umsatz nicht?</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
              Die meisten Mittelständler verlieren Geld durch fehlende
              Strukturen, unklare Prozesse und verschenkte Potenziale. Wir
              ändern das – mit einem System, das nachweislich funktioniert.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-dark bg-gold hover:bg-gold-light rounded-full transition-all hover:shadow-xl hover:shadow-gold/25"
              >
                Kostenloses Erstgespräch sichern
                <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <p className="mt-3 text-xs text-white/40">
              Begrenzte Plätze pro Monat · Unverbindlich · In 30 Sek. gebucht
            </p>

            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              {[
                { value: "360°", label: "Beratungsansatz" },
                { value: "100%", label: "Umsetzungsfokus" },
                { value: "Berlin", label: "Standort" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-white/10 -ml-8" />}
                  <div>
                    <p className="text-2xl font-bold text-gold">{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gold/20 flex items-center justify-center mb-4">
                    <span className="text-gold text-3xl font-bold">E</span>
                  </div>
                  <p className="text-white/40 text-sm">
                    Hier kommt dein Hero-Bild hin
                  </p>
                  <p className="text-white/20 text-xs mt-1">
                    /public/images/hero.jpg
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl">
                <p className="text-xs text-gray-400">Durchschnittlich</p>
                <p className="text-2xl font-bold text-blue-dark">
                  +27% <span className="text-sm text-gold">Umsatz</span>
                </p>
                <p className="text-xs text-gray-400">
                  bei unseren Klienten im 1. Jahr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
