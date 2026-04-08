import Image from "next/image";
import { CheckIcon } from "./icons";

const credentials = [
  "Gründer & Geschäftsführer der CTN GmbH",
  "Seit 2017 unternehmerisch tätig – Versicherung, Vertrieb & Beratung",
  "Zertifizierter Sachverständiger für Photovoltaik & Stromspeicher",
  "Kunden u.a. Hasir, Emsal Gruppe, Solar Star GmbH",
  "Experte für Versicherung, Immobilien & Skalierung",
];

export default function AboutEmre() {
  return (
    <section id="ueber-emre" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Emre Enes Cetinkaya – Gründer von Erfolgsschmieder Berlin"
                fill
                className="object-cover object-top"
                quality={100}
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-5 left-6 right-6 bg-brand-dark rounded-2xl p-5 flex items-center justify-around text-center shadow-xl">
              <div>
                <p className="text-2xl font-bold text-accent">2017</p>
                <p className="text-xs text-gray-400 mt-1">Unternehmer seit</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-accent">2021</p>
                <p className="text-xs text-gray-400 mt-1">CTN GmbH gegründet</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-accent">5,0</p>
                <p className="text-xs text-gray-400 mt-1">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-3">
              Ihr Berater
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
              Emre Enes Cetinkaya
            </h2>
            <p className="mt-2 text-brand font-medium">
              Gründer &amp; Geschäftsführer, Erfolgsschmieder Berlin
            </p>

            <div className="mt-8 space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ich weiß, wie es sich anfühlt, ein Unternehmen aufzubauen und
                gleichzeitig das Gefühl zu haben, auf der Stelle zu treten.
                Nicht, weil ich es in einem Lehrbuch gelesen habe &ndash;
                sondern weil ich es selbst erlebt habe.
              </p>
              <p>
                Seit 2017 bin ich als Unternehmer in Berlin aktiv. Mit der
                Gründung der CTN GmbH habe ich ein Unternehmen aufgebaut, das
                heute in den Bereichen Unternehmensberatung, Versicherung,
                Immobilien und erneuerbare Energien tätig ist. Auf diesem Weg
                habe ich jede Hürde selbst gemeistert, die unsere Kunden heute
                beschreiben.
              </p>
              <p>
                Erfolgsschmieder ist aus einer einfachen Überzeugung entstanden:
                Unternehmer brauchen keine PowerPoint-Berater, die analysieren
                und dann verschwinden. Sie brauchen jemanden, der{" "}
                <span className="text-brand-dark font-semibold">
                  mit anpackt
                </span>
                , der die Sprache des Mittelstands spricht und der Ergebnisse
                liefert &ndash; nicht Berichte.
              </p>
              <p>
                Gemeinsam mit meinem Team aus Strategieberatern,
                Business-Coaches und Steuerexperten begleite ich Unternehmer
                dabei, aus Stagnation echtes Wachstum zu machen. Persönlich,
                direkt und auf Augenhöhe.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-accent-dark" />
                  </div>
                  <span className="text-sm text-brand-dark font-medium">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
