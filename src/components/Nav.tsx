"use client";

import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Ergebnisse", href: "/#ergebnisse" },
];

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
            <BrandLogo textClass={scrolled ? "text-brand-dark" : "text-white"} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-brand"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/funnel"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-brand hover:bg-brand-light rounded-full transition-all"
            >
              Erstgespräch sichern
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menü"
          >
            <span
              className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-brand-dark" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-brand-dark" : "bg-white"} ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-brand-dark" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 flex flex-col gap-4 bg-white rounded-2xl p-6 mt-2 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-600 hover:text-brand font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/funnel"
              onClick={() => setOpen(false)}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-brand rounded-full text-center"
            >
              Erstgespräch sichern
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
