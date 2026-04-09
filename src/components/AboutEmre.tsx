import Image from "next/image";
import { CheckIcon } from "./icons";

const credentials = [
  "Gründer & Geschäftsführer der CTN GmbH",
  "Seit 2017 unternehmerisch tätig – Versicherung, Vertrieb & Beratung",
  "Zertifizierter Sachverständiger für Photovoltaik & Stromspeicher",
  "Kunden u.a. Hasir, Emsal Gruppe, Solar Star GmbH",
  "Experte für Versicherung, Immobilien & Skalierung",
];

const team = [
  {
    name: "Jerome Deres",
    role: "Business Master Coach & Strategieberater",
    image: "/images/team-jerome.jpg",
    description:
      "Coach, Speaker und Trainer mit Fokus auf Clarity, Leadership und Scale. Jerome begleitet Unternehmer auf dem Weg zu souveräner Selbstführung – die Klarheit und Entscheidungsstärke, die daraus entsteht, führt direkt zu messbaren Leistungsverbesserungen und nachhaltigem Wachstum.",
  },
  {
    name: "Jeannette Klüsener",
    role: "Dipl.-Finw. (FH) · Steuerberaterin",
    image: "/images/team-jeannette.jpg",
    description:
      "Erfahrene Steuerberaterin mit umfassender Expertise in Bilanzen, Jahresabschlüssen, Existenzgründung und steuerlicher Optimierung. Jeannette sorgt dafür, dass Ihre finanziellen Lösungen stets auf dem neuesten Stand und absolut zuverlässig sind.",
  },
];

export default function AboutEmre() {
  return (
    <section id="ueber-uns" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl text-center mx-auto mb-16">
          <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-3">
            Über uns
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-brand-dark">
            Die Menschen hinter Erfolgsschmieder
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Erfahrene Unternehmer, Coaches und Experten – vereint durch eine
            gemeinsame Mission: Ihren Erfolg.
          </p>
        </div>

        {/* Emre – Gründerprofil */}
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
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Gründer & Geschäftsführer
            </p>
            <h3 className="font-serif text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight">
              Emre Enes Cetinkaya
            </h3>
            <p className="mt-2 text-brand font-medium">
              Erfolgsschmieder Berlin
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

        {/* Team-Mitglieder */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
              Unser Team
            </p>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-brand-dark tracking-tight">
              Die Experten an Ihrer Seite
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    quality={100}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-brand-dark">
                    {member.name}
                  </h4>
                  <p className="text-sm text-brand font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
