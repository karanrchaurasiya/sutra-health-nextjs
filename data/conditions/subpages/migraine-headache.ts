// data/conditions/subpages/migraine-headache.ts
import type { ConditionSubpage } from "../types";

export const migraineHeadacheSubpages: ConditionSubpage[] = [
  {
    slug: "can-yoga-replace-migraine-medication",
    parentSlug: "migraine-headache",
    question: "Can yoga replace migraine medication?",
    shortAnswer:
      "Not entirely, but the evidence for reducing reliance on medication is genuinely strong. In a randomized controlled trial of 160 patients (the CONTAIN trial, published in Neurology), patients practicing yoga alongside standard medical therapy reduced their medication use to roughly half their usual dose, while achieving better outcomes than medication alone. This was studied as an addition to medical care, not a replacement.",
    detail: [
      {
        title: "What the trial actually measured",
        content: [
          "Patients continued their prescribed medical therapy throughout the trial — the yoga was added on top, and pill count reduction was tracked as one of several outcomes, alongside headache frequency, intensity, and disability scores.",
          "This means the roughly 50% reduction in medication use happened within a structure of continued medical supervision, not instead of it — an important distinction if you're considering this for yourself.",
        ],
      },
      {
        title: "Why this still needs your doctor",
        content: [
          "Migraine medication, particularly preventive medication, is adjusted based on your headache pattern and response over time. If yoga is helping reduce your frequency or intensity, that's valuable information to bring to your neurologist or physician — who can then appropriately reassess your treatment plan, rather than adjusting it yourself.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-migraine-relief", "yoga-styles-to-avoid-with-migraine"],
  },
  {
    slug: "yoga-poses-for-migraine-relief",
    parentSlug: "migraine-headache",
    question: "Which yoga poses help relieve migraine?",
    shortAnswer:
      "Gentle, restorative poses that release tension in the neck, shoulders, and upper back tend to help most — including Child's Pose (Balasana), Legs-Up-the-Wall (Viparita Karani), Cat-Cow (Marjariasana/Bitilasana), and Corpse Pose (Savasana). These are typically combined with slow, deep breathing rather than practiced as isolated stretches.",
    detail: [
      {
        title: "Poses commonly used for migraine relief",
        content: [
          "Child's Pose (Balasana) — releases tension in the neck and shoulders; resting the forehead on the mat can create a calming pressure response some people find soothing during an attack.",
          "Legs-Up-the-Wall (Viparita Karani) — a passive inversion that improves venous drainage and shifts the nervous system toward a calmer state within minutes.",
          "Cat-Cow (Marjariasana/Bitilasana) — improves circulation and gently stretches the neck and spine.",
          "Corpse Pose (Savasana) — allows the mind and body to fully rest, often used at the end of a session or during an attack itself.",
        ],
      },
      {
        title: "Why breath matters as much as the pose",
        content: [
          "Slow, deep breathing techniques — particularly alternate nostril breathing (Nadi Shodhana) and three-part breath (Dirgha Pranayama) — are specifically chosen for migraine because they shift the nervous system away from the sympathetic (stress) response and toward the parasympathetic (rest) response, which is the mechanism most consistently linked to migraine relief in the research.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-styles-to-avoid-with-migraine", "can-yoga-replace-migraine-medication"],
  },
  {
    slug: "yoga-styles-to-avoid-with-migraine",
    parentSlug: "migraine-headache",
    question: "Which yoga styles should be avoided with migraine?",
    shortAnswer:
      "Heated styles (hot yoga, Bikram), vigorous or fast-paced styles (Ashtanga, Power Yoga), and classes involving extreme or unfamiliar postures are generally avoided with migraine — some patients report these can actually trigger an attack rather than relieve symptoms.",
    detail: [
      {
        title: "Why heat and intensity are a specific concern for migraine",
        content: [
          "Unlike most conditions on this site, migraine is one where the wrong type of exercise can genuinely trigger the problem you're trying to manage. Heat exposure, dehydration risk, and the physical strain of vigorous or unfamiliar postures have all been reported by patients as migraine triggers.",
          "This is different from arthritis or blood pressure, where caution is mainly about specific poses — for migraine, the overall style and intensity of the class matters as much as any individual posture.",
        ],
      },
      {
        title: "What to look for instead",
        content: [
          "Gentle Hatha yoga, restorative yoga (using props to support longer, passive holds), and yoga nidra are the styles most consistently recommended for migraine specifically.",
          "If attending a class, telling your instructor about your migraine history lets them suggest alternatives for anything that feels uncomfortable — this matters more here than in most other conditions, since triggers are highly individual.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-migraine-relief"],
  },
];
