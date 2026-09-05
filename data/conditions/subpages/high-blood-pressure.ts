// data/conditions/subpages/high-blood-pressure.ts
import type { ConditionSubpage } from "../types";

export const highBloodPressureSubpages: ConditionSubpage[] = [
  {
    slug: "can-yoga-replace-bp-medication",
    parentSlug: "high-blood-pressure",
    question: "Can yoga replace blood pressure medication?",
    shortAnswer:
      "No. Clinical research studies yoga as a complementary, non-pharmacological measure used alongside standard medical care — not a replacement for medication. Some studies show meaningful reductions in blood pressure from consistent yoga practice, but stopping or reducing medication should only ever happen under your doctor's guidance, based on your actual readings over time.",
    detail: [
      {
        title: "What the research actually studies",
        content: [
          "Clinical trials on yoga and blood pressure are almost always designed as an addition to standard care, not a substitute for it. The studies showing 4–10 mmHg reductions did so in patients who were also receiving appropriate medical management.",
          "This distinction matters: a lifestyle measure that helps alongside medication is a genuinely different claim from a lifestyle measure that replaces it, and the evidence only supports the former.",
        ],
      },
      {
        title: "Why this decision needs your doctor",
        content: [
          "Blood pressure medication is titrated based on your specific readings, risk factors, and response over time. Reducing or stopping medication without medical supervision — even if your readings look better — can be genuinely risky.",
          "If your blood pressure is improving through lifestyle changes, that's exactly the kind of progress worth discussing with your physician, who can adjust your care plan appropriately.",
        ],
      },
    ],
    relatedSubslugs: [
      "yoga-poses-for-blood-pressure",
      "how-long-yoga-lowers-blood-pressure",
    ],
  },
  {
    slug: "yoga-poses-for-blood-pressure",
    parentSlug: "high-blood-pressure",
    question: "Which yoga poses help lower blood pressure?",
    shortAnswer:
      "Gentle, restorative poses that emphasize slow breathing and relaxation — such as Shavasana, Balasana, and Viparita Karani — combined with pranayama (breathing) practices, are the poses most consistently used in the clinical studies on yoga and blood pressure. Vigorous or inverted poses are generally avoided (see related question below).",
    detail: [
      {
        title: "Poses commonly used in studied protocols",
        content: [
          "Shavasana (corpse pose) — deep relaxation, slow breathing, minimal physical exertion.",
          "Balasana (child's pose) — a gentle resting posture that supports slow, controlled breathing.",
          "Viparita Karani (legs-up-the-wall) — a passive, restorative inversion that promotes relaxation without the strain of a full inversion.",
          "Sukhasana (easy pose) combined with pranayama — seated breathwork is central to most studied protocols, not an add-on.",
        ],
      },
      {
        title: "Why gentle poses, not intense ones",
        content: [
          "The mechanism behind yoga's effect on blood pressure is largely about activating the body's relaxation response through breath and gentle movement — not building cardiovascular intensity the way vigorous exercise does. That's why gentle, breath-focused practice is the pattern across the clinical research, not strenuous flows.",
        ],
      },
    ],
    relatedSubslugs: [
      "yoga-poses-to-avoid-with-hypertension",
      "can-yoga-replace-bp-medication",
    ],
  },
  {
    slug: "yoga-poses-to-avoid-with-hypertension",
    parentSlug: "high-blood-pressure",
    question: "Which yoga poses should be avoided with high blood pressure?",
    shortAnswer:
      "Inverted poses where the head drops below the heart — such as Shirshasana (headstand) and Adho Mukha Vrksasana (handstand) — are generally avoided with high blood pressure, as they can cause a sudden increase in blood flow and pressure to the head. Intense backbends and breath-holding practices are also approached with caution.",
    detail: [
      {
        title: "Why inversions are a concern",
        content: [
          "In a headstand or handstand, gravity works against normal blood flow regulation, briefly increasing pressure in the blood vessels of the head and neck. For someone with hypertension, this can be a meaningful risk rather than a minor discomfort.",
        ],
      },
      {
        title: "What to do instead",
        content: [
          "Passive, supported inversions like Viparita Karani (legs-up-the-wall) offer some of the circulatory benefits without the strain of a full inversion, and are commonly included in studied protocols instead.",
          "Any new yoga practice, especially with an existing cardiovascular condition, is worth discussing with your doctor first — and worth learning under guidance rather than from a video alone.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-blood-pressure"],
  },
  {
    slug: "how-long-yoga-lowers-blood-pressure",
    parentSlug: "high-blood-pressure",
    question: "How long does it take for yoga to lower blood pressure?",
    shortAnswer:
      "Clinical studies showing measurable blood pressure reductions generally involved consistent practice — typically 3 or more sessions per week — sustained over 8 to 12 weeks. Individual timelines vary based on starting blood pressure, consistency of practice, and other lifestyle factors alongside it.",
    detail: [
      {
        title: "What the studies actually measured",
        content: [
          "The systematic review of 49 trials found associations with blood pressure reduction specifically at a frequency of three or more sessions weekly — infrequent or inconsistent practice was not the pattern studied, and shouldn't be expected to produce the same result.",
          "This mirrors what's generally true of lifestyle interventions: the studies measure sustained, consistent behaviour change, not occasional effort.",
        ],
      },
      {
        title: "Setting realistic expectations",
        content: [
          "Results vary by individual, starting blood pressure, and what else is part of your lifestyle plan (diet, sleep, stress). Regular monitoring with your doctor is the reliable way to track your own progress, rather than expecting a fixed timeline.",
        ],
      },
    ],
    relatedSubslugs: ["can-yoga-replace-bp-medication"],
  },
];
