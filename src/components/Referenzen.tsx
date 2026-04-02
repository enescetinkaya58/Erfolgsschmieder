import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./icons";

const partners = [
  {
    name: "Emsal Gastro",
    logo: "/images/Emsalgastro Logo.png",
    width: 120,
    height: 50,
  },
  {
    name: "Hasir Nollendorfplatz",
    logo: "/images/Hasir nollendorfplatz logo.png",
    width: 120,
    height: 50,
  },
  {
    name: "Beef & Grill Club by Hasir",
    logo: "/images/Beef and grill club by hasir logo.jpg",
    width: 120,
    height: 50,
  },
  {
    name: "Pascarella",
    logo: "/images/Pascarella Schlüter str logo.jpg",
    width: 120,
    height: 50,
  },
  {
    name: "Solar Star GmbH",
    logo: "/images/cropped-Solar_Star_GmbH-logo.webp",
    width: 120,
    height: 50,
  },
  {
    name: "Fitomat",
    logo: "/images/fitomat logo.png",
    width: 100,
    height: 40,
  },
];

const testimonials = [
  {
    quote:
      "Erfolgsschmieder hat in 3 Monaten mehr bewegt als unsere letzte Beratung in einem Jahr. Konkret, direkt, wirksam.",
    name: "Geschäftsführung",
    company: "Emsal Gruppe",
  },
  {
    quote:
      "Endlich ein Berater, der nicht nur redet, sondern Ergebnisse liefert. Unsere Prozesse laufen jetzt reibungslos.",
    name: "Inhaber",
    company: "Gastronomie Berlin",
  },
];

const FIVE_STARS = Array.from({ length: 5 });

export default function Referenzen() {
  return (
    <section id="ergebnisse" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Vertrauen"
          title="Unternehmen, die uns vertrauen"
        />

        {/* Partner-Logos */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="object-contain h-12 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {FIVE_STARS.map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold" />
                ))}
              </div>
              <blockquote className="text-blue-dark leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center">
                  <span className="text-blue text-sm font-bold">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-dark">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
