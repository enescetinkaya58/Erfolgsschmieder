"use client";

import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/">
            <BrandLogo textClass={scrolled ? "text-brand-dark" : "text-brand-dark"} />
          </a>

          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:03012108372"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand transition-colors"
              title="030 1210 8372"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>030 1210 8372</span>
            </a>
            <a
              href="mailto:info@erfolgsschmieder.de"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand transition-colors"
              title="info@erfolgsschmieder.de"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>info@erfolgsschmieder.de</span>
            </a>
            <a
              href="/funnel"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-full transition-all shadow-md shadow-accent/20"
            >
              Kostenloses Erstgespräch
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü"
          >
            <span
              className={`block w-6 h-0.5 transition-all bg-brand-dark ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all bg-brand-dark ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all bg-brand-dark ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 flex flex-col gap-4 bg-white rounded-2xl p-6 mt-2 shadow-xl">
            <a
              href="tel:03012108372"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              030 1210 8372
            </a>
            <a
              href="mailto:info@erfolgsschmieder.de"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-brand font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              info@erfolgsschmieder.de
            </a>
            <a
              href="/funnel"
              onClick={() => setOpen(false)}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-accent rounded-full text-center"
            >
              Kostenloses Erstgespräch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
