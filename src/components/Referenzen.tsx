import SectionHeading from "./SectionHeading";
import { StarIcon } from "./icons";

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
    <section id="ergebnisse" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Kundenstimmen"
          title="Was unsere Kunden sagen"
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {FIVE_STARS.map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>
              <blockquote className="text-brand-dark leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-brand text-sm font-bold">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">{t.name}</p>
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
