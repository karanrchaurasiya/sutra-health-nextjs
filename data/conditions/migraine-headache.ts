// data/conditions/migraine-headache.ts
import type { Condition } from "./types";

export const migraineHeadache: Condition = {
  slug: "migraine-headache",
  title: "Migraine & Headache",

  shortDescription:
    "Yoga and lifestyle support for migraine, backed by a large Indian randomized controlled trial published in Neurology, alongside your medical care.",

  introduction:
    "Migraine has genuine, well-studied non-drug support options — yoga among them, with some of the strongest evidence coming from a large trial conducted right here in India. We build a lifestyle and yoga plan around what the research actually supports, coordinated with your neurologist or physician, not as a replacement for medical care.",

  concerns: [
    "Recurring migraine attacks",
    "Frequent tension-type headaches",
    "Wanting to reduce reliance on medication (always in consultation with your doctor)",
    "Stress or sleep patterns that seem connected to headache frequency",
    "Uncertainty about which yoga is actually safe for migraine, since some exercise can trigger attacks",
    "Wanting evidence-based support, not just generic relaxation advice",
  ],

  lifestyleFactors: [
    {
      title: "Sleep consistency",
      description:
        "Irregular sleep is a commonly reported migraine trigger; consistent sleep timing is a foundational lifestyle factor.",
    },
    {
      title: "Gentle, specific yoga practice",
      description:
        "The style and intensity of yoga matters significantly here — gentle, breath-focused practice helps; intense or heated practice can trigger attacks.",
    },
    {
      title: "Stress and nervous system regulation",
      description:
        "Migraine and stress are closely linked; practices that shift the nervous system toward rest-and-digest are central to the evidence base.",
    },
    {
      title: "Hydration and meal regularity",
      description:
        "Skipped meals and dehydration are commonly reported individual triggers, worth tracking alongside other lifestyle factors.",
    },
  ],

  sections: [
    {
      title: "What a large Indian clinical trial found",
      content: [
        "The CONTAIN trial — a randomized controlled trial conducted at a tertiary academic hospital in New Delhi, published in the journal Neurology — studied 160 patients with episodic migraine over 3 months. Patients who received yoga alongside standard medical therapy showed significantly greater reductions in headache frequency, headache intensity, and disability (measured by the Headache Impact Test and Migraine Disability Assessment) compared to medical therapy alone.",
        "Notably, patients in the yoga group were also able to reduce their medication use substantially — reported at roughly half their usual dose — while achieving better outcomes, though this was a secondary finding within a trial designed around yoga as an addition to care, not a replacement.",
      ],
    },
    {
      title: "This finding has been replicated, not just a one-off result",
      content: [
        "A separate randomized controlled trial of patients with migraine without aura found significant reductions in headache frequency, intensity, and pain scores after 3 months of yoga therapy compared to self-care alone, alongside improvements in anxiety and depression scores.",
        "Reviews covering the broader evidence base describe yoga as having a grade B recommendation as an adjunct migraine-preventive treatment, based on multiple systematic reviews and randomized trials.",
      ],
    },
    {
      title: "Why the type of yoga matters more here than for most conditions",
      content: [
        "This is an important distinction from most conditions on this site: not all yoga is safe for migraine, and some practices can actually trigger an attack. Neurologists specializing in migraine generally advise avoiding heated (Bikram/hot), vigorous (Ashtanga, Power), or extreme-posture styles — these have been reported by patients to trigger migraine rather than relieve it.",
        "Gentle, breath-focused styles — Hatha, restorative yoga, yoga nidra — are what the clinical evidence and specialist guidance both point toward. See the linked pages below for specific poses that help and styles to avoid.",
      ],
    },
    {
      title: "How Sutra Health builds a plan around this",
      content: [
        "We build a gentle, breath-focused yoga and lifestyle plan specifically suited to migraine — not a generic yoga routine — coordinated with your neurologist or physician, particularly around medication.",
        "New, severe, or changing headache patterns need medical evaluation before starting any lifestyle program; this isn't a substitute for that assessment.",
      ],
    },
  ],

  approach: [
    "Gentle, breath-focused yoga (not intense or heated styles)",
    "Sleep-routine consistency",
    "Stress and nervous-system regulation",
    "Hydration and meal-timing awareness",
  ],

  support: [
    "Personalized, migraine-appropriate yoga practice",
    "Pranayama and nervous-system regulation techniques",
    "Sleep and routine consistency guidance",
    "Coordination with your neurologist or physician",
  ],

  evidence: [
    {
      claim:
        "In a randomized controlled trial of 160 patients with episodic migraine, yoga as an add-on to medical therapy significantly reduced headache frequency, intensity, and disability compared to medical therapy alone, with patients also reducing medication use substantially.",
      source: "Neurology (CONTAIN Trial), New Delhi, India",
      url: "https://www.neurology.org/doi/10.1212/WNL.0000000000009473",
    },
    {
      claim:
        "A randomized controlled trial of patients with migraine without aura found significant reductions in headache frequency, intensity, and pain scores after 3 months of yoga therapy compared to self-care alone.",
      source: "Headache journal, RCT",
      url: "https://www.ovid.com/journals/head/fulltext/00004014-200705000-00005~effectiveness-of-yoga-therapy-in-the-treatment-of-migraine",
    },
    {
      claim:
        "Multiple systematic reviews and randomized trials support a grade B recommendation for yoga as an adjunct preventive treatment for migraine.",
      source: "Clinical review, cited via multiple RCTs",
    },
  ],

  faqs: [
    {
      question: "Can yoga help with migraine?",
      answer:
        "Yes. A large randomized controlled trial conducted in New Delhi (published in Neurology) found yoga added to standard medical therapy significantly reduced headache frequency, intensity, and disability compared to medication alone. This has been supported by additional randomized trials.",
    },
    {
      question: "Can yoga replace migraine medication?",
      answer:
        "Not entirely, but it can meaningfully reduce reliance on it. In the largest relevant trial, patients practicing yoga alongside medical care were able to reduce their medication use by roughly half while achieving better outcomes than medication alone — but this was alongside continued medical care, not instead of it. Any medication changes should go through your doctor.",
    },
    {
      question: "Is all yoga safe for migraine?",
      answer:
        "No — this is genuinely different from most conditions. Heated, vigorous, or extreme-posture styles (hot yoga, Ashtanga, Power yoga) have been reported to trigger migraine attacks in some people. Gentle, breath-focused styles are what the evidence and specialist guidance support instead.",
    },
    {
      question: "How long before yoga makes a difference for migraine?",
      answer:
        "The clinical trials showing significant benefit generally involved 3 months of consistent practice. Individual response varies, and tracking your headache frequency alongside your practice is a useful way to gauge your own progress.",
    },
  ],

  relatedConditions: ["digestive-gut-health", "womens-health", "high-blood-pressure"],

  internalLinks: [
    { label: "Breath & Mindfulness", href: "/approach/breath-mindfulness" },
    { label: "Therapeutic Yoga & Movement", href: "/approach/therapeutic-yoga" },
    { label: "Digestive & Gut Health", href: "/conditions/digestive-gut-health" },
  ],
};