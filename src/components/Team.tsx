import SectionHeading from "./SectionHeading";

const team = [
  {
    name: "Jerome Deres",
    role: "Business Master Coach & Strategieberater",
    image: "/images/team-jerome.jpg",
    description:
      "Mein Ziel ist es, Sie in souveräner Selbstführung zu entwickeln. Die Klarheit und Entscheidungsstärke, die Sie dadurch gewinnen, führt direkt zu messbaren Leistungsverbesserungen und nachhaltigem Umsatzwachstum.",
    featured: true,
  },
  {
    name: "E. Cetinkaya",
    role: "Geschäftsführer",
    subtitle: "Head Of Sales",
    image: "/images/team-emre.jpg",
    description:
      "Wenn jemand Kundenkontakt liebt, dann ist es Emre. Er ist unsere Anlaufstelle für alles, was mit Kundenbeziehungen zu tun hat und sorgt dafür, dass Ihre Anliegen stets Gehör finden.",
  },
  {
    name: "J. Klüsener",
    role: "Dipl.-Finw. (FH)",
    subtitle: "Steuerberaterin",
    image: "/images/team-jeannette.jpg",
    description:
      "Jeannette sorgt dafür, dass unsere finanziellen Lösungen stets auf dem neuesten Stand und absolut zuverlässig sind.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Unser Team"
          title="Die Köpfe hinter Ihrem Erfolg"
          subtitle="Lernen Sie die Experten kennen, die Ihre Visionen in die Realität umsetzen."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className={`bg-gray-50 rounded-2xl overflow-hidden ${
                member.featured ? "md:row-span-1" : ""
              }`}
            >
              {/* Bild-Platzhalter – ersetze mit echtem Foto */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-100 relative overflow-hidden">
                {/* Wenn Bild vorhanden:
                <Image src={member.image} alt={member.name} fill className="object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-blue/10 flex items-center justify-center mb-2">
                      <span className="text-blue text-2xl font-bold">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">Foto einfügen</p>
                    <p className="text-[10px] text-gray-300">{member.image}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-dark">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                {member.subtitle && (
                  <p className="text-sm text-gold font-medium mt-1">
                    {member.subtitle}
                  </p>
                )}
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
