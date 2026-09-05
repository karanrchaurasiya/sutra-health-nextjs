// data/conditions/subpages/metabolic-health.ts
import type { ConditionSubpage } from "../types";

export const metabolicHealthSubpages: ConditionSubpage[] = [
  {
    slug: "can-yoga-prevent-prediabetes-progressing",
    parentSlug: "metabolic-health",
    question: "Can yoga prevent prediabetes from progressing to diabetes?",
    shortAnswer:
      "There's strong, India-specific evidence for this. A large multicenter cluster-randomized controlled trial (the NMB Trial) tested a yoga-based lifestyle protocol in a high-risk Indian cohort with prediabetes, and found participants were significantly less likely to progress to diabetes — a relative risk reduction of roughly 64% compared to standard-of-care advice alone.",
    detail: [
      {
        title: "What made this trial notable",
        content: [
          "This wasn't a small pilot study — it was a multicenter trial run across India, using actual diabetes diagnosis as the outcome measured, not just a lab marker like HbA1c. That combination (large scale, real-world outcome, Indian population) makes it one of the more directly relevant findings for someone in India with prediabetes.",
          "The intervention combined an intensive initial yoga-based lifestyle protocol with ongoing supervised practice — not a single yoga class, but a structured, sustained program.",
        ],
      },
      {
        title: "What this means practically",
        content: [
          "If you've been told you're prediabetic, this is a genuine window where a structured lifestyle and yoga program has trial-level evidence behind it — not as a guarantee, but as a meaningfully better-than-standard-care option worth taking seriously.",
          "Regular blood sugar monitoring with your doctor remains essential regardless of which lifestyle approach you take.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-replace-diabetes-medication", "yoga-poses-for-blood-sugar"],
  },
  {
    slug: "can-yoga-replace-diabetes-medication",
    parentSlug: "metabolic-health",
    question: "Can yoga replace diabetes medication?",
    shortAnswer:
      "No. Clinical research studies yoga as a complementary approach used alongside standard diabetes care and medication — not a substitute for it. Meta-analyses show meaningful reductions in HbA1c and fasting glucose when yoga is added to standard care, but this is additive, not a replacement.",
    detail: [
      {
        title: "What the research actually tests",
        content: [
          "The trials showing HbA1c and glucose improvements were conducted in patients continuing their standard diabetes management — the yoga was added on top, not substituted in. This is a genuinely different claim from 'yoga instead of medication,' and the evidence only supports the former.",
        ],
      },
      {
        title: "Why this decision needs your doctor",
        content: [
          "Diabetes medication is adjusted based on your blood sugar readings, HbA1c trends, and overall risk profile over time. If your readings improve through lifestyle changes, that's valuable information to bring to your physician — who can then appropriately reassess your treatment plan. Adjusting medication without that guidance, even with improving numbers, carries real risk.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-prevent-prediabetes-progressing"],
  },
  {
    slug: "yoga-poses-for-blood-sugar",
    parentSlug: "metabolic-health",
    question: "Which yoga practices help with blood sugar control?",
    shortAnswer:
      "The clinical trials showing benefit generally used structured yoga programs combining physical postures, breathing practices (pranayama), and relaxation — not isolated poses. Practices that engage the abdominal region (twists, forward folds) are commonly included, alongside consistent, longer-duration programs (8-12 weeks or more) rather than occasional practice.",
    detail: [
      {
        title: "What studied protocols typically include",
        content: [
          "Most of the trials behind the HbA1c and glucose findings used a full yoga-based lifestyle protocol — postures, breathing exercises, and relaxation together — rather than testing individual poses in isolation. This matters: the evidence supports the structured program, not any single asana on its own.",
          "Abdominal-engaging postures (twists, certain forward folds) appear frequently in studied protocols, based on the traditional rationale that they stimulate digestive organs, though the clinical evidence supports the overall program more strongly than any single pose's individual mechanism.",
        ],
      },
      {
        title: "Why consistency matters more than pose selection",
        content: [
          "The trials that found meaningful HbA1c reductions generally involved sustained practice over 8-12 weeks or longer, not occasional sessions. This mirrors the pattern seen in other lifestyle interventions — the studies measure sustained behavior change, and results should be expected to follow the same pattern.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-prevent-prediabetes-progressing"],
  },
];
