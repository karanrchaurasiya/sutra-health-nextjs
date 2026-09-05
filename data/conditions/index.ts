// data/conditions/index.ts
//
// Central access point. page.tsx files should import ONLY from here,
// never reach into individual condition files directly — keeps the
// data source swappable (e.g. to a CMS later) without touching routes.

import type { Condition, ConditionSubpage } from "./types";

import { weightManagement } from "./weight-management";
import { metabolicHealth } from "./metabolic-health";
import { highBloodPressure } from "./high-blood-pressure";
import { arthritisJointPain } from "./arthritis-joint-pain";
import { migraineHeadache } from "./migraine-headache";
import { digestiveGutHealth } from "./digestive-gut-health";
import { womensHealth } from "./womens-health";

import { highBloodPressureSubpages } from "./subpages/high-blood-pressure";
// Additional subpage imports get added here as each condition's
// research + triage is completed (metabolic-health, weight-management, etc.)

export const conditions: Condition[] = [
  weightManagement,
  metabolicHealth,
  highBloodPressure,
  arthritisJointPain,
  migraineHeadache,
  digestiveGutHealth,
  womensHealth,
];

// Map of parent condition slug -> its subpages.
// Conditions with no researched subpages yet simply have an empty array —
// this is intentional. Do not populate this with placeholder/guessed
// content; only add entries once the capture-and-triage process (see the
// pilot brief) has actually been run for that condition.
const subpagesByCondition: Record<string, ConditionSubpage[]> = {
  "high-blood-pressure": highBloodPressureSubpages,
  "weight-management": [],
  "metabolic-health": [],
  "arthritis-joint-pain": [],
  "migraine-headache": [],
  "digestive-gut-health": [],
  "womens-health": [],
};

export function getAllConditions(): Condition[] {
  return conditions;
}

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((condition) => condition.slug === slug);
}

export function getSubpages(parentSlug: string): ConditionSubpage[] {
  return subpagesByCondition[parentSlug] ?? [];
}

export function getSubpage(
  parentSlug: string,
  subslug: string,
): ConditionSubpage | undefined {
  return getSubpages(parentSlug).find((sub) => sub.slug === subslug);
}

// Used by generateStaticParams in the [slug]/[subslug]/page.tsx route —
// flattens every condition+subpage pair the site needs to pre-render.
export function getAllSubpageParams(): { slug: string; subslug: string }[] {
  return conditions.flatMap((condition) =>
    getSubpages(condition.slug).map((sub) => ({
      slug: condition.slug,
      subslug: sub.slug,
    })),
  );
}
