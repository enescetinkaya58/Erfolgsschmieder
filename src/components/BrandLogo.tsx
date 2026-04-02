import Image from "next/image";

export default function BrandLogo({ textClass = "text-white" }: { textClass?: string }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/Erfolgsschmieder logo.jpg"
        alt="Erfolgsschmieder"
        width={40}
        height={40}
        className="rounded-lg object-cover"
      />
      <span className={`font-bold text-lg tracking-tight ${textClass}`}>
        Erfolgsschmieder
      </span>
    </div>
  );
}
