export type IconName =
  | "trending-up"
  | "shield-check"
  | "alert-circle"
  | "office-building"
  | "briefcase"
  | "currency"
  | "clock"
  | "lightbulb"
  | "user";

export type FunnelQuestion = {
  key: string;
  question: string;
  multiple: boolean;
  options: string[];
  icon: IconName;
  hint?: string;
};

export type FunnelPath = "strategy" | "process" | "founding" | "scaling";

export const SITUATION_TO_PATH: Record<string, FunnelPath> = {
  "Ich bin Unternehmer und suche strategische Beratung": "strategy",
  "Ich bin Geschäftsführer und möchte Prozesse verbessern": "process",
  "Ich stehe vor einer Neugründung": "founding",
  "Ich möchte mein bestehendes Geschäft skalieren": "scaling",
};

export const QUESTIONS: Record<string, FunnelQuestion> = {
  situation: {
    key: "situation",
    question: "Was beschreibt Ihre aktuelle Situation am besten?",
    multiple: false,
    icon: "trending-up",
    options: [
      "Ich bin Unternehmer und suche strategische Beratung",
      "Ich bin Geschäftsführer und möchte Prozesse verbessern",
      "Ich stehe vor einer Neugründung",
      "Ich möchte mein bestehendes Geschäft skalieren",
    ],
  },

  strategy_focus: {
    key: "strategy_focus",
    question: "Worauf richtet sich Ihre strategische Beratung aus?",
    multiple: false,
    icon: "shield-check",
    options: [
      "Wachstum & Expansion",
      "Unternehmensnachfolge",
      "Vorbereitung auf Verkauf / Exit",
      "Restrukturierung & Neuausrichtung",
      "Strategische Neupositionierung",
    ],
  },

  process_pain: {
    key: "process_pain",
    question: "Wo entstehen Ihre größten Reibungsverluste?",
    multiple: true,
    icon: "alert-circle",
    options: [
      "Doppelarbeit zwischen Abteilungen",
      "Medienbrüche und manuelle Datenpflege",
      "Fehlende oder veraltete Tools",
      "Unklare Übergaben und Verantwortlichkeiten",
      "Hoher administrativer Aufwand",
      "Fehlende Digitalisierung",
    ],
  },

  founding_stage: {
    key: "founding_stage",
    question: "Wo stehen Sie mit Ihrer Geschäftsidee aktuell?",
    multiple: false,
    icon: "lightbulb",
    options: [
      "Erste Idee – noch unkonkret",
      "Konzept steht – ich brauche Sparring",
      "Businessplan ausgearbeitet",
      "Pilot oder Soft-Launch läuft bereits",
    ],
  },

  founding_capital: {
    key: "founding_capital",
    question: "Mit welchem Startkapital kalkulieren Sie?",
    multiple: false,
    icon: "currency",
    options: [
      "Unter 10.000 EUR",
      "10.000 – 50.000 EUR",
      "50.000 – 250.000 EUR",
      "Über 250.000 EUR",
      "Finanzierung ist Teil der Beratung",
    ],
  },

  scaling_revenue_current: {
    key: "scaling_revenue_current",
    question: "Wo steht Ihr aktueller Jahresumsatz?",
    multiple: false,
    icon: "currency",
    options: [
      "Unter 100.000 EUR",
      "100.000 – 500.000 EUR",
      "500.000 – 1 Mio. EUR",
      "1 – 5 Mio. EUR",
      "Über 5 Mio. EUR",
    ],
  },

  scaling_revenue_target: {
    key: "scaling_revenue_target",
    question: "Welches Jahresumsatz-Ziel verfolgen Sie?",
    multiple: false,
    icon: "currency",
    options: [
      "Unter 100.000 EUR",
      "100.000 – 500.000 EUR",
      "500.000 – 1 Mio. EUR",
      "1 – 5 Mio. EUR",
      "Über 5 Mio. EUR",
    ],
  },

  scaling_bottleneck: {
    key: "scaling_bottleneck",
    question: "Was bremst Ihr Wachstum aktuell am stärksten?",
    multiple: true,
    icon: "alert-circle",
    options: [
      "Vertrieb & Kundengewinnung",
      "Personal & Recruiting",
      "Prozesse & Skalierbarkeit",
      "Kapital & Finanzierung",
      "Marketing & Sichtbarkeit",
      "Unklare Strategie",
    ],
  },

  business_areas: {
    key: "business_areas",
    question: "In welchen Bereichen benötigen Sie Unterstützung?",
    multiple: true,
    icon: "shield-check",
    options: [
      "Strategieberatung & Geschäftsentwicklung",
      "Vertrieb & Kundengewinnung",
      "Finanzen & Steueroptimierung",
      "Prozessoptimierung & Digitalisierung",
      "Personalmanagement & Teamaufbau",
      "Marketing & Markenaufbau",
    ],
  },

  business_areas_solo: {
    key: "business_areas_solo",
    question: "In welchen Bereichen benötigen Sie Unterstützung?",
    multiple: true,
    icon: "shield-check",
    options: [
      "Strategieberatung & Geschäftsentwicklung",
      "Vertrieb & Kundengewinnung",
      "Finanzen & Steueroptimierung",
      "Prozessoptimierung & Digitalisierung",
      "Marketing & Markenaufbau",
    ],
  },

  company_size: {
    key: "company_size",
    question: "Wie groß ist Ihr Unternehmen aktuell?",
    multiple: false,
    icon: "office-building",
    options: [
      "Soloselbstständig / Freiberufler",
      "2 – 10 Mitarbeiter",
      "11 – 50 Mitarbeiter",
      "51 – 200 Mitarbeiter",
      "Über 200 Mitarbeiter",
    ],
  },

  industry: {
    key: "industry",
    question: "In welcher Branche sind Sie tätig?",
    multiple: false,
    icon: "briefcase",
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

  industry_planned: {
    key: "industry_planned",
    question: "In welcher Branche planen Sie zu gründen?",
    multiple: false,
    icon: "briefcase",
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

  timeline: {
    key: "timeline",
    question: "Wann möchten Sie starten?",
    multiple: false,
    icon: "clock",
    options: [
      "Sofort – ich brauche schnelle Ergebnisse",
      "In den nächsten 2 – 4 Wochen",
      "In den nächsten 1 – 3 Monaten",
      "Ich plane langfristig",
    ],
  },
};

export const PATHS: Record<FunnelPath, string[]> = {
  strategy: [
    "situation",
    "strategy_focus",
    "business_areas",
    "company_size",
    "industry",
    "timeline",
  ],
  process: [
    "situation",
    "process_pain",
    "business_areas",
    "company_size",
    "industry",
    "timeline",
  ],
  founding: [
    "situation",
    "founding_stage",
    "industry_planned",
    "founding_capital",
    "business_areas_solo",
    "timeline",
  ],
  scaling: [
    "situation",
    "scaling_revenue_current",
    "scaling_revenue_target",
    "company_size",
    "scaling_bottleneck",
    "industry",
    "timeline",
  ],
};

export const STEP_LABELS_DE: Record<string, string> = {
  situation: "Aktuelle Situation",
  strategy_focus: "Strategischer Fokus",
  process_pain: "Reibungsverluste",
  founding_stage: "Stand der Gründung",
  founding_capital: "Startkapital",
  scaling_revenue_current: "Aktueller Umsatz",
  scaling_revenue_target: "Umsatz-Ziel",
  scaling_bottleneck: "Wachstums-Bottleneck",
  business_areas: "Beratungs-Bereiche",
  business_areas_solo: "Beratungs-Bereiche",
  company_size: "Unternehmensgröße",
  industry: "Branche",
  industry_planned: "Geplante Branche",
  timeline: "Zeitplan",
};
