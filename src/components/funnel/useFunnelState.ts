"use client";

import { useMemo, useState } from "react";
import {
  PATHS,
  QUESTIONS,
  SITUATION_TO_PATH,
  type FunnelPath,
  type FunnelQuestion,
} from "./questions";

export type FunnelAnswers = Record<string, string[]>;

export type FunnelView =
  | { kind: "question"; question: FunnelQuestion; index: number; total: number }
  | { kind: "contact"; total: number }
  | { kind: "loading" };

function pathFromAnswers(answers: FunnelAnswers): FunnelPath | null {
  const situation = answers["situation"]?.[0];
  if (!situation) return null;
  return SITUATION_TO_PATH[situation] ?? null;
}

export function useFunnelState() {
  const [answers, setAnswers] = useState<FunnelAnswers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const path = useMemo(() => pathFromAnswers(answers), [answers]);

  const questionKeys = useMemo(() => {
    if (!path) return ["situation"];
    return PATHS[path];
  }, [path]);

  const totalSteps = questionKeys.length + 1;

  const view: FunnelView = useMemo(() => {
    if (showContact) {
      return { kind: "contact", total: totalSteps };
    }
    const key = questionKeys[stepIndex];
    if (!key) return { kind: "loading" };
    return {
      kind: "question",
      question: QUESTIONS[key],
      index: stepIndex,
      total: totalSteps,
    };
  }, [showContact, questionKeys, stepIndex, totalSteps]);

  const progress = showContact
    ? 100
    : ((stepIndex + 1) / totalSteps) * 100;

  function selectionForCurrent(): string[] {
    if (showContact) return [];
    const key = questionKeys[stepIndex];
    return key ? answers[key] ?? [] : [];
  }

  function setSelectionForCurrent(values: string[]) {
    const key = questionKeys[stepIndex];
    if (!key) return;
    setAnswers((prev) => ({ ...prev, [key]: values }));
  }

  function goNext() {
    const key = questionKeys[stepIndex];
    if (!key) return;
    const current = answers[key] ?? [];
    if (current.length === 0) return;

    setDirection(1);

    if (stepIndex < questionKeys.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      setShowContact(true);
    }
  }

  function goBack() {
    setDirection(-1);
    if (showContact) {
      setShowContact(false);
      return;
    }
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  }

  const canGoBack = showContact || stepIndex > 0;

  return {
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
  };
}
