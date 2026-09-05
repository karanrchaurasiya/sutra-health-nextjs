// data/conditions/types.ts
// Shared types for both condition hubs and their question-page children.

export interface ConditionSection {
  title: string;
  content: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LifestyleFactor {
  title: string;
  description: string;
}

export interface InternalLink {
  label: string;
  href: string;
}

// A piece of cited third-party evidence — used to replace vague hedge
// language with real, attributable research. `url` optional since some
// sources (case reports, preprints) may not always have a stable public link.
export interface EvidenceItem {
  claim: string;      // plain-English summary of the finding, not a verbatim quote
  source: string;      // journal / publication name, e.g. "Hypertension Research (Nature)"
  url?: string;
  isAuthorPublication?: boolean; // true if this is Dr. Sarwal's own published work
}

export interface Condition {
  slug: string;
  title: string;
  shortDescription: string;
  introduction: string;

  concerns: string[];

  sections: ConditionSection[];

  lifestyleFactors: LifestyleFactor[];

  approach: string[];

  support: string[];

  evidence?: EvidenceItem[]; // NEW — hub-level evidence, e.g. Dr. Sarwal's traffic-light paper

  faqs: FAQ[];

  relatedConditions: string[];

  internalLinks: InternalLink[];

  questionPages?: ConditionQuestionPage[];
}

// NEW — one question-page nested under a condition hub.
// Deliberately leaner than Condition: this page has one job (answer one
// question fast), not six sections and a sticky TOC.
export interface ConditionSubpage {
  slug: string;            // e.g. "can-yoga-replace-bp-medication"
  parentSlug: string;      // e.g. "high-blood-pressure" — links back to the hub
  question: string;        // becomes the H1, verbatim as searched
  shortAnswer: string;     // first paragraph, above the fold, direct answer
  detail?: ConditionSection[]; // optional deeper content below the fold
  evidence?: EvidenceItem[];
  faqs?: FAQ[];
  relatedSubslugs?: string[]; // sibling question-pages under the same condition
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export interface ConditionQuestionPage {
  slug: string;
  question: string;
  title: string;
  shortDescription: string;

  directAnswer: string;

  sections: {
    heading: string;
    content: string;
  }[];

  approachLinks?: {
    label: string;
    href: string;
    description?: string;
  }[];

  programLinks?: {
    label: string;
    href: string;
    description?: string;
  }[];

  faqs?: {
    question: string;
    answer: string;
  }[];

  relatedQuestions?: string[];
}
