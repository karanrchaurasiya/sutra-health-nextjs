// data/conditions/subpages/digestive-gut-health.ts
import type { ConditionSubpage } from "../types";

export const digestiveGutHealthSubpages: ConditionSubpage[] = [
  {
    slug: "yoga-for-ibs-what-evidence-says",
    parentSlug: "digestive-gut-health",
    question: "What does the research actually say about yoga for IBS?",
    shortAnswer:
      "It's mixed, and worth understanding honestly. Earlier reviews (6 RCTs, 273 patients) found yoga significantly reduced bowel symptoms, IBS severity, and anxiety compared to no treatment. A more recent, larger systematic review found the evidence uncertain, citing inconsistent trial quality, and does not yet recommend yoga as a proven IBS treatment.",
    detail: [
      {
        title: "Why two credible reviews reached different conclusions",
        content: [
          "This isn't a case of one study being 'right' and another 'wrong' — it reflects real methodological differences across the underlying trials: small sample sizes, inconsistent yoga protocols, and varying outcome measures make it genuinely hard to pool results reliably. The more recent, more rigorous review appropriately flagged these limitations rather than overstating what the data shows.",
          "An 8-week virtual yoga trial found a significant within-group reduction in IBS severity for participants who did yoga, alongside improved quality of life and reduced stress — but wasn't statistically superior to an advice-only control group on the main measure. This kind of result is common in early-stage evidence: a real signal, not yet a settled answer.",
        ],
      },
      {
        title: "A relevant case report from Dr. Sarwal",
        content: [
          "Dr. Rakesh Sarwal, who leads the clinical approach at Sutra Health, has published a case report documenting IBS remission through a combined diet, lifestyle, and yoga approach. A single case report doesn't prove the approach works broadly — but it reflects real clinical experience with exactly this combination, alongside the wider research picture above.",
        ],
      },
      {
        title: "What this means if you're considering it",
        content: [
          "Yoga is generally safe to try alongside your existing IBS care, and there's a reasonable chance it helps — particularly through stress reduction, given how closely IBS is linked to the gut-brain axis. We won't tell you it's a proven fix, because the current evidence doesn't support that claim.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-bloating-and-constipation"],
  },
  {
    slug: "yoga-poses-for-bloating-and-constipation",
    parentSlug: "digestive-gut-health",
    question: "Which yoga poses help with bloating and constipation?",
    shortAnswer:
      "Poses involving gentle abdominal compression and twisting are most commonly used — including Wind-Relieving Pose (Pawanmuktasana), Seated Spinal Twist (Ardha Matsyendrasana), Cat-Cow (Marjaryasana-Bitilasana), and Malasana (yogic squat). These are typically practiced either first thing in the morning or at least 2-3 hours after eating, not immediately after a meal.",
    detail: [
      {
        title: "Poses commonly used and their rationale",
        content: [
          "Wind-Relieving Pose (Pawanmuktasana) — gently compresses the abdomen to help release trapped gas and improve bowel movement.",
          "Seated Spinal Twist (Ardha Matsyendrasana) — compresses and releases the abdominal organs, traditionally used to stimulate digestion.",
          "Cat-Cow (Marjaryasana-Bitilasana) — the movement between spinal extension and flexion creates gentle abdominal expansion and contraction.",
          "Malasana (yogic squat) — supports the body's natural elimination position and activates the abdominal organs.",
        ],
      },
      {
        title: "Timing matters here more than in most conditions",
        content: [
          "Practicing strong twists or deep abdominal compression immediately after eating can make discomfort worse, not better — general guidance is to wait 2-3 hours after a meal before deeper twists or compression poses. Gentle poses may be fine sooner.",
          "If you've had recent abdominal surgery or have an abdominal condition, avoid strong twists and deep compression unless specifically cleared by your doctor.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-for-ibs-what-evidence-says"],
  },
];
