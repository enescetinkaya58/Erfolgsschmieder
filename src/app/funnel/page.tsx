"use client";

import { useState } from "react";

const steps = [
  {
    label: "Frage 1 von 7",
    question: "Was beschreibt Ihre aktuelle Situation am besten?",
    multiple: false,
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    options: [
      "Ich bin Unternehmer und suche strategische Beratung",
      "Ich bin Geschäftsführer und möchte Prozesse verbessern",
      "Ich stehe vor einer Neugründung",
      "Ich möchte mein bestehendes Geschäft skalieren",
    ],
  },
  {
    label: "Frage 2 von 7",
    question: "In welchen Bereichen benötigen Sie Unterstützung?",
    multiple: true,
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    options: [
      "Strategieberatung & Geschäftsentwicklung",
      "Vertrieb & Kundengewinnung",
      "Finanzen & Steueroptimierung",
      "Prozessoptimierung & Digitalisierung",
      "Personalmanagement & Teamaufbau",
      "Marketing & Markenaufbau",
    ],
  },
  {
    label: "Frage 3 von 7",
    question: "Wie groß ist Ihr Unternehmen aktuell?",
    multiple: false,
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    options: [
      "Soloselbstständig / Freiberufler",
      "2 – 10 Mitarbeiter",
      "11 – 50 Mitarbeiter",
      "51 – 200 Mitarbeiter",
      "Über 200 Mitarbeiter",
    ],
  },
  {
    label: "Frage 4 von 7",
    question: "Was sind Ihre größten Herausforderungen?",
    multiple: true,
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    options: [
      "Umsatz stagniert oder sinkt",
      "Hohe Kosten & geringe Margen",
      "Schwierigkeiten bei der Mitarbeitergewinnung",
      "Fehlende Digitalisierung",
      "Mangelnde Sichtbarkeit am Markt",
      "Unklare Unternehmensstrategie",
      "Steuerliche & finanzielle Optimierung",
    ],
  },
  {
    label: "Frage 5 von 7",
    question: "In welcher Branche sind Sie tätig?",
    multiple: false,
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.193 23.193 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    options: [
      "Gastronomie & Hotellerie",
      "Handwerk & Bau",
      "Dienstleistungen & Beratung",
      "Einzelhandel & E-Commerce",
      "Gesundheit & Pflege",
      "Immobilien",
      "IT & Technologie",
      "Sonstiges",
    ],
  },
  {
    label: "Frage 6 von 7",
    question: "Welches Jahresumsatz-Ziel verfolgen Sie?",
    multiple: false,
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    options: [
      "Unter 100.000 EUR",
      "100.000 – 500.000 EUR",
      "500.000 – 1 Mio. EUR",
      "1 – 5 Mio. EUR",
      "Über 5 Mio. EUR",
    ],
  },
  {
    label: "Frage 7 von 7",
    question: "Wann möchten Sie starten?",
    multiple: false,
    icon: (
      <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    options: [
      "Sofort – ich brauche schnelle Ergebnisse",
      "In den nächsten 2 – 4 Wochen",
      "In den nächsten 1 – 3 Monaten",
      "Ich plane langfristig",
    ],
  },
];

export default function FunnelPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    unternehmen: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = steps.length + 1;
  const progress = showForm
    ? 100
    : ((currentStep + 1) / totalSteps) * 100;

  const step = !showForm ? steps[currentStep] : null;

  function toggleOption(option: string) {
    if (step?.multiple) {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      );
    } else {
      setSelected([option]);
    }
  }

  function handleNext() {
    if (selected.length === 0) return;
    setAnswers({ ...answers, [currentStep]: selected });
    setSelected([]);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowForm(true);
    }
  }

  function handleBack() {
    if (showForm) {
      setShowForm(false);
      setSelected(answers[steps.length - 1] || []);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelected(answers[currentStep - 1] || []);
    }
  }

  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, contact: formData }),
      });

      if (!res.ok) throw new Error("Fehler beim Senden");
    } catch (err) {
      console.error(err);
    }

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-24 h-24 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-8">
            <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white">
            Vielen Dank für Ihre Anfrage!
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed text-lg">
            Wir haben Ihre Angaben erhalten und melden uns innerhalb von 24
            Stunden persönlich bei Ihnen.
          </p>
          <a
            href="/"
            className="mt-10 inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-dark bg-accent hover:bg-accent-light rounded-xl transition-colors"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="text-accent font-bold text-lg tracking-wide">
            ERFOLGSSCHMIEDER
          </a>
          <span className="text-xs text-gray-500 tracking-widest uppercase">
            {showForm ? "Kontaktdaten" : `${currentStep + 1} / ${steps.length}`}
          </span>
        </div>
        <div className="h-1 bg-white/5">
          <div
            className="h-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 w-full">
          {!showForm && step ? (
            <div className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-28 h-28 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                {step.label}
              </span>

              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight max-w-2xl mx-auto">
                {step.question}
              </h1>

              {step.multiple && (
                <p className="mt-3 text-sm text-gray-500">
                  Mehrere Antworten möglich
                </p>
              )}

              {/* Options */}
              <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-left">
                {step.options.map((option) => {
                  const isSelected = selected.includes(option);
                  return (
                    <button
                      key={option}
                      onClick={() => toggleOption(option)}
                      className={`px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                        isSelected
                          ? "bg-accent/10 border-accent text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      {step.multiple ? (
                        <div
                          className={`w-5 h-5 rounded shrink-0 border-2 flex items-center justify-center transition-colors ${
                            isSelected ? "border-accent bg-accent" : "border-gray-500"
                          }`}
                        >
                          {isSelected && (
                            <svg className="w-3 h-3 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ) : (
                        <div
                          className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                            isSelected ? "border-accent" : "border-gray-500"
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                          )}
                        </div>
                      )}
                      <span className="text-sm font-medium">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-center gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-colors"
                  >
                    Zurück
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={selected.length === 0}
                  className={`inline-flex items-center justify-center px-10 py-4 text-sm font-bold rounded-xl transition-all ${
                    selected.length > 0
                      ? "bg-accent text-brand-dark hover:bg-accent-light cursor-pointer"
                      : "bg-accent/30 text-brand-dark/50 cursor-not-allowed"
                  }`}
                >
                  Weiter
                </button>
              </div>
            </div>
          ) : (
            /* Contact Form */
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex justify-center mb-8">
                  <div className="w-28 h-28 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                  Letzter Schritt
                </span>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Wie können wir Sie erreichen?
                </h1>
                <p className="mt-3 text-gray-400">
                  Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Ihr Name *"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Unternehmen"
                    value={formData.unternehmen}
                    onChange={(e) =>
                      setFormData({ ...formData, unternehmen: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="E-Mail-Adresse *"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer *"
                    required
                    value={formData.telefon}
                    onChange={(e) =>
                      setFormData({ ...formData, telefon: e.target.value })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <textarea
                  placeholder="Beschreiben Sie kurz Ihre Situation (optional)"
                  rows={4}
                  value={formData.nachricht}
                  onChange={(e) =>
                    setFormData({ ...formData, nachricht: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-none"
                />

                <div className="flex items-center justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-colors"
                  >
                    Zurück
                  </button>
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold bg-accent text-brand-dark hover:bg-accent-light rounded-xl transition-colors disabled:opacity-50"
                  >
                    {sending ? "Wird gesendet..." : "Kostenloses Erstgespräch sichern"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
