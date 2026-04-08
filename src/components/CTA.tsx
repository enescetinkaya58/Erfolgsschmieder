import { ArrowRightIcon, CheckIcon } from "./icons";

const benefits = [
  "Kostenlose & unverbindliche Erstanalyse",
  "Persönlicher Ansprechpartner – kein Callcenter",
  "Konkrete Handlungsempfehlungen ab Tag 1",
  "Bekannte Berliner Unternehmen als Kunden",
];

export default function CTA() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-brand-dark rounded-3xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative p-10 lg:p-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">
                Begrenzte Beratungsplätze verfügbar
              </span>
            </div>

            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Bereit, Ihr Unternehmen
              <br />
              auf das nächste Level zu bringen?
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Sie haben bis hierhin gelesen – das zeigt, dass Sie es ernst
              meinen. Lassen Sie uns in einem kostenlosen Erstgespräch gemeinsam
              herausfinden, welche Hebel Ihr Unternehmen sofort nach vorne
              bringen.
            </p>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-white/80">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="/funnel"
                className="group inline-flex items-center justify-center px-10 py-5 text-base font-bold text-brand-dark bg-accent hover:bg-accent-light rounded-full transition-all shadow-lg shadow-accent/25"
              >
                Kostenloses Erstgespräch sichern
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Kostenlos &middot; Unverbindlich &middot; Antwort innerhalb von 24
              Stunden
            </p>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span>Frohnauer Str. 3, 13467 Berlin</span>
              <span className="hidden sm:inline">&middot;</span>
              <a
                href="tel:03012108372"
                className="hover:text-white transition-colors"
              >
                030 1210 8372
              </a>
              <span className="hidden sm:inline">&middot;</span>
              <a
                href="mailto:info@erfolgsschmieder.de"
                className="hover:text-white transition-colors"
              >
                info@erfolgsschmieder.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
