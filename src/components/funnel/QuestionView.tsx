"use client";

import { OptionCard } from "./OptionCard";
import { QuestionIcon } from "./QuestionIcon";
import type { FunnelQuestion } from "./questions";

export function QuestionView({
  question,
  index,
  total,
  selected,
  onToggle,
}: {
  question: FunnelQuestion;
  index: number;
  total: number;
  selected: string[];
  onToggle: (option: string) => void;
}) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-7">
        <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
          <QuestionIcon name={question.icon} />
        </div>
      </div>

      <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent mb-5">
        <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
        Frage {index + 1} von {total}
      </span>

      <h1 className="font-serif text-[26px] sm:text-3xl lg:text-4xl font-bold text-white leading-[1.15] max-w-2xl mx-auto">
        {question.question}
      </h1>

      {question.multiple && (
        <p className="mt-3 text-sm text-gray-500">
          Mehrere Antworten möglich
        </p>
      )}

      <div className="mt-9 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
        {question.options.map((option) => (
          <OptionCard
            key={option}
            label={option}
            isSelected={selected.includes(option)}
            isMultiple={question.multiple}
            onSelect={() => onToggle(option)}
          />
        ))}
      </div>
    </div>
  );
}
