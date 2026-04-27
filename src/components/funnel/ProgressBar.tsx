"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function ProgressBar({
  progress,
  label,
}: {
  progress: number;
  label: string;
}) {
  return (
    <div className="w-full bg-white/5 sticky top-0 z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-accent font-bold text-lg tracking-wide hover:text-accent-light transition-colors"
        >
          ERFOLGSSCHMIEDER
        </Link>
        <span className="text-xs text-gray-500 tracking-widest uppercase tabular-nums">
          {label}
        </span>
      </div>
      <div className="h-1 bg-white/5 relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-dark via-accent to-accent-light"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        />
      </div>
    </div>
  );
}
