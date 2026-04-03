"use client";

import Image from "next/image";

const partners = [
  { name: "Emsal Gastro", logo: "/images/Emsalgastro Logo.png", width: 160, height: 70, dark: false },
  { name: "Hasir Nollendorfplatz", logo: "/images/Hasir nollendorfplatz logo.png", width: 160, height: 70, dark: false },
  { name: "Beef & Grill Club by Hasir", logo: "/images/Beef and grill club by hasir logo.jpg", width: 160, height: 70, dark: false },
  { name: "Pascarella", logo: "/images/Pascarella Schlüter str logo.jpg", width: 160, height: 70, dark: false },
  { name: "Solar Star GmbH", logo: "/images/cropped-Solar_Star_GmbH-logo.webp", width: 160, height: 70, dark: false },
  { name: "Fitomat", logo: "/images/fitomat logo.png", width: 140, height: 60, dark: false },
  { name: "Star Tours", logo: "/images/star-tours-logo.png", width: 160, height: 70, dark: false },
  { name: "Cizgi Rent a Car", logo: "/images/cizgi-logo.webp", width: 160, height: 70, dark: false },
  { name: "Awen Hotel", logo: "/images/awenhotel-logo.png", width: 160, height: 70, dark: true },
  { name: "Bex", logo: "/images/bex-logo.webp", width: 160, height: 70, dark: true },
];

export default function LogoBar() {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 font-medium">5,0 auf Google</span>
        </div>
      </div>

      {/* Sliding logos */}
      <div className="relative">
        <div className="flex animate-slide gap-16 w-max">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className={`shrink-0 flex items-center justify-center rounded-xl px-4 py-2 ${
                p.dark ? "bg-brand-dark" : ""
              }`}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="object-contain h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
