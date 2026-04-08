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
  {
    quote:
      "Die Kombination aus strategischer Beratung und praktischer Umsetzung ist einzigartig. Wir hätten viel früher anfangen sollen.",
    name: "Geschäftsführer",
    company: "Solar Star GmbH",
  },
];

const stats = [
  { value: "2017", label: "Unternehmer seit" },
  { value: "5,0", label: "Google Bewertung" },
  { value: "8+", label: "bekannte Kundenunternehmen" },
  { value: "360°", label: "Beratungsansatz" },
];

const FIVE_STARS = Array.from({ length: 5 });

export default function Referenzen() {
  return (
    <section id="ergebnisse" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Kundenstimmen"
          title="Was unsere Kunden sagen"
          subtitle="Ergebnisse sprechen lauter als Versprechen."
        />

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 bg-surface rounded-2xl"
            >
              <p className="text-3xl lg:text-4xl font-bold text-brand">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="bg-surface rounded-2xl p-8 border border-gray-100 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {FIVE_STARS.map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>
              <blockquote className="text-brand-dark leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                  <span className="text-brand text-sm font-bold">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark">
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
