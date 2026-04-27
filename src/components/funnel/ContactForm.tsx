"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { QuestionIcon } from "./QuestionIcon";

export type ContactData = {
  name: string;
  unternehmen: string;
  email: string;
  telefon: string;
  nachricht: string;
  consent: boolean;
};

const EMPTY: ContactData = {
  name: "",
  unternehmen: "",
  email: "",
  telefon: "",
  nachricht: "",
  consent: false,
};

const inputClass =
  "w-full px-5 py-4 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:bg-white/[0.06] transition-colors";

export function ContactForm({
  onBack,
  onSubmit,
  sending,
  step,
  total,
}: {
  onBack: () => void;
  onSubmit: (data: ContactData) => void;
  sending: boolean;
  step: number;
  total: number;
}) {
  const [data, setData] = useState<ContactData>(EMPTY);

  const canSubmit =
    data.name.trim() !== "" &&
    data.email.trim() !== "" &&
    data.telefon.trim() !== "" &&
    data.consent &&
    !sending;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit(data);
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-9">
        <div className="flex justify-center mb-7">
          <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <QuestionIcon name="user" />
          </div>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-5">
          <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
          Schritt {step} von {total} · Letzter Schritt
        </span>
        <h1 className="font-serif text-[26px] sm:text-3xl lg:text-4xl font-bold text-white leading-[1.15]">
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
            autoComplete="name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Unternehmen"
            autoComplete="organization"
            value={data.unternehmen}
            onChange={(e) => setData({ ...data, unternehmen: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="E-Mail-Adresse *"
            required
            autoComplete="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Telefonnummer *"
            required
            autoComplete="tel"
            value={data.telefon}
            onChange={(e) => setData({ ...data, telefon: e.target.value })}
            className={inputClass}
          />
        </div>
        <textarea
          placeholder="Beschreiben Sie kurz Ihre Situation (optional)"
          rows={4}
          value={data.nachricht}
          onChange={(e) => setData({ ...data, nachricht: e.target.value })}
          className={`${inputClass} resize-none`}
        />

        <label className="flex items-start gap-3 px-1 pt-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => setData({ ...data, consent: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-white/20 bg-white/[0.04] accent-[var(--color-accent)] cursor-pointer shrink-0"
            required
          />
          <span className="text-xs text-gray-400 leading-relaxed">
            Ich willige ein, dass meine Angaben zur Bearbeitung meiner Anfrage
            verarbeitet werden. Weitere Informationen finden Sie in unserer{" "}
            <a
              href="/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light underline underline-offset-2"
            >
              Datenschutzerklärung
            </a>
            .
          </span>
        </label>

        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-colors"
          >
            Zurück
          </button>
          <motion.button
            type="submit"
            disabled={!canSubmit}
            whileHover={canSubmit ? { scale: 1.01 } : undefined}
            whileTap={canSubmit ? { scale: 0.985 } : undefined}
            className={`inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-xl transition-colors ${
              canSubmit
                ? "bg-accent text-brand-dark hover:bg-accent-light cursor-pointer"
                : "bg-accent/30 text-brand-dark/60 cursor-not-allowed"
            }`}
          >
            {sending ? "Wird gesendet..." : "Kostenloses Erstgespräch sichern"}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
