import Image from "next/image";

type Variant = "dark" | "light";

export default function BrandLogo({
  variant = "dark",
  height = 48,
}: {
  variant?: Variant;
  height?: number;
}) {
  const src =
    variant === "light"
      ? "/ctn-schmiede-logo-light.svg"
      : "/ctn-schmiede-logo.svg";

  // Logo aspect ratio = 760 / 220 ≈ 3.4545
  const width = Math.round(height * (760 / 220));

  return (
    <Image
      src={src}
      alt="CTN Schmiede · Unternehmensberatung Berlin"
      width={width}
      height={height}
      priority
      className="block"
    />
  );
}
