export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "text-center mx-auto" : ""}`}>
      <p className="text-brand font-semibold tracking-widest uppercase text-sm mb-3">
        {label}
      </p>
      <h2
        className={`font-serif text-3xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? "text-gray-300" : "text-gray-500"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
