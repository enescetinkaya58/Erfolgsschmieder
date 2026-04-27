"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ProgressBar } from "@/components/funnel/ProgressBar";

const slideVariants: Variants = {
  enter: (d: 1 | -1) => ({ opacity: 0, x: 24 * d }),
  center: { opacity: 1, x: 0 },
  exit: (d: 1 | -1) => ({ opacity: 0, x: -24 * d }),
};

import { QuestionView } from "@/components/funnel/QuestionView";
import { ContactForm, type ContactData } from "@/components/funnel/ContactForm";
import { useFunnelState } from "@/components/funnel/useFunnelState";

export default function FunnelPage() {
  const {
    answers,
    path,
    view,
    progress,
    direction,
    canGoBack,
    selectionForCurrent,
    setSelectionForCurrent,
    goNext,
    goBack,
  } = useFunnelState();

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function toggleOption(option: string) {
    if (view.kind !== "question") return;
    const current = selectionForCurrent();
    if (view.question.multiple) {
      setSelectionForCurrent(
        current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option]
      );
    } else {
      setSelectionForCurrent([option]);
    }
  }

  async function handleSubmit(contact: ContactData) {
    setSending(true);
    try {
      const res = await fetch("/api/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          path,
          contact: {
            name: contact.name,
            unternehmen: contact.unternehmen,
            email: contact.email,
            telefon: contact.telefon,
            nachricht: contact.nachricht,
          },
          consent: {
            given: contact.consent,
            given_at: new Date().toISOString(),
          },
        }),
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center max-w-lg"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-8">
            <svg
              className="w-12 h-12 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
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
        </motion.div>
      </div>
    );
  }

  const stepLabel =
    view.kind === "contact"
      ? `Kontakt · ${view.total} / ${view.total}`
      : view.kind === "question"
        ? `${view.index + 1} / ${view.total}`
        : "";

  const currentSelection = selectionForCurrent();
  const canAdvance =
    view.kind === "question" && currentSelection.length > 0;

  const transitionKey =
    view.kind === "question" ? `q-${view.question.key}` : "contact";

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <ProgressBar progress={progress} label={stepLabel} />

      <div className="flex-1 flex items-center">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={transitionKey}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {view.kind === "question" && (
                <>
                  <QuestionView
                    question={view.question}
                    index={view.index}
                    total={view.total}
                    selected={currentSelection}
                    onToggle={toggleOption}
                  />

                  <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4">
                    {canGoBack && (
                      <button
                        onClick={goBack}
                        className="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-colors"
                      >
                        Zurück
                      </button>
                    )}
                    <motion.button
                      onClick={goNext}
                      disabled={!canAdvance}
                      whileHover={canAdvance ? { scale: 1.02 } : undefined}
                      whileTap={canAdvance ? { scale: 0.98 } : undefined}
                      className={`inline-flex items-center justify-center px-10 py-4 text-sm font-bold rounded-xl transition-colors ${
                        canAdvance
                          ? "bg-accent text-brand-dark hover:bg-accent-light cursor-pointer"
                          : "bg-accent/30 text-brand-dark/60 cursor-not-allowed"
                      }`}
                    >
                      Weiter
                    </motion.button>
                  </div>
                </>
              )}

              {view.kind === "contact" && (
                <ContactForm
                  step={view.total}
                  total={view.total}
                  onBack={goBack}
                  onSubmit={handleSubmit}
                  sending={sending}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
