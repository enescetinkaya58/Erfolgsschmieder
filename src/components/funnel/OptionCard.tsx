"use client";

import { motion } from "motion/react";

export function OptionCard({
  label,
  isSelected,
  isMultiple,
  onSelect,
}: {
  label: string;
  isSelected: boolean;
  isMultiple: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`group relative w-full text-left px-5 py-5 sm:py-4 rounded-2xl border transition-colors duration-200 flex items-center gap-4 min-h-[64px] ${
        isSelected
          ? "bg-accent/10 border-accent text-white shadow-[0_0_0_1px_var(--color-accent)]"
          : "bg-white/[0.03] border-white/10 text-gray-300 hover:bg-white/[0.06] hover:border-white/20"
      }`}
    >
      <span
        className={`shrink-0 flex items-center justify-center transition-colors ${
          isMultiple
            ? "w-5 h-5 rounded border-2"
            : "w-5 h-5 rounded-full border-2"
        } ${isSelected ? "border-accent bg-accent" : "border-gray-500 group-hover:border-gray-400"}`}
        aria-hidden="true"
      >
        {isSelected && isMultiple && (
          <motion.svg
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="w-3 h-3 text-brand-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        )}
        {isSelected && !isMultiple && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="w-2.5 h-2.5 rounded-full bg-brand-dark"
          />
        )}
      </span>
      <span className="text-sm sm:text-[15px] font-medium leading-snug">
        {label}
      </span>
    </motion.button>
  );
}
