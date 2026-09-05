// data/conditions/high-blood-pressure.ts
import type { Condition } from "./types";

export const highBloodPressure: Condition = {
  slug: "high-blood-pressure",
  title: "High Blood Pressure",

  shortDescription:
    "Lifestyle and yoga-based support for blood pressure management, grounded in published clinical research, alongside your doctor's care.",

  introduction:
    "High blood pressure rarely has one single cause, and it rarely responds to one single fix. Diet, physical activity, sleep, stress, and breathing patterns all influence it. At Sutra Health, we build a lifestyle plan around the factors that are actually relevant to you — informed by clinical research on yoga and lifestyle modification, and delivered alongside your existing medical care, not instead of it.",

  concerns: [
    "Newly diagnosed hypertension or prehypertension",
    "Blood pressure that stays borderline despite medication",
    "Wanting to reduce reliance on medication through lifestyle change (always in consultation with your doctor)",
    "Stress-related blood pressure spikes",
    "Difficulty maintaining consistent diet, sleep, or activity habits",
    "Uncertainty about which lifestyle changes actually make a measurable difference",
  ],

  lifestyleFactors: [
    {
      title: "Diet and sodium intake",
      description:
        "Reducing sodium intake and improving overall diet quality is one of the most consistently evidence-backed lifestyle changes for blood pressure.",
    },
    {
      title: "Physical activity and yoga",
      description:
        "Regular movement, including yoga practiced consistently, has been studied specifically for its effect on blood pressure — see the evidence below.",
    },
    {
      title: "Sleep quality",
      description:
        "Poor sleep and irregular sleep patterns are linked to higher blood pressure variability.",
    },
    {
      title: "Stress and breathing patterns",
      description:
        "Chronic stress activates the sympathetic nervous system, which raises blood pressure. Breathing-based practices target this mechanism directly.",
    },
  ],

  sections: [
    {
      title: "What actually influences blood pressure",
      content: [
        "Blood pressure is affected by how much your blood vessels resist blood flow, which in turn is influenced by diet, activity levels, stress hormones, sleep, and body weight. No single lifestyle change fixes all of these at once — which is why a scattered approach (just cutting salt, or just exercising more) often produces smaller results than a coordinated plan.",
        "A 2023 clinical trial conducted specifically in an Indian hypertensive and prehypertensive population (Journal of the Practice of Cardiovascular Sciences) studied 300 patients using a structured, non-pharmacological approach alongside standard care — reflecting the same principle: lifestyle changes work best when they're coordinated, not piecemeal.",
      ],
    },
    {
      title: "What the research says about yoga specifically",
      content: [
        "This isn't a fringe claim — it's been studied in randomized controlled trials. A study published in Hypertension Research (Nature) found that adding yoga to standard lifestyle modification reduced systolic blood pressure by 6 mmHg, compared to 4 mmHg with lifestyle modification alone.",
        "A meta-analysis pooling 16 separate studies (962 participants) found yoga reduced systolic blood pressure by an average of 4.35 mmHg and diastolic by 2.06 mmHg — with a notably larger effect specifically in Asian populations (5.52 / 2.81 mmHg).",
        "A systematic review of 49 clinical trials found that practicing yoga at least three times a week was associated with a 10 mmHg reduction in systolic and 6 mmHg reduction in diastolic blood pressure — a meaningful effect size in cardiovascular terms.",
        "These are averages across study populations, not a promise about any individual's results. Your own response depends on your starting point, consistency, and what else is part of your care plan.",
      ],
    },
    {
      title: "Why breathing practices are not just relaxation",
      content: [
        "Slow, controlled breathing activates the parasympathetic nervous system — the body's counterbalance to the stress response that raises blood pressure. This is a specific, studied mechanism, not a general wellness claim.",
        "Pranayama practices are included in most of the clinical yoga protocols studied above, not used as a separate, unrelated relaxation technique.",
      ],
    },
    {
      title: "How Sutra Health builds a plan around this",
      content: [
        "We look at your diet, activity levels, sleep, and stress patterns together, and build a lifestyle and yoga plan informed by the research above — coordinated with your doctor, particularly around any medication changes.",
        "This is not a replacement for medical care. Blood pressure that is significantly elevated needs medical evaluation, and any changes to medication must go through your physician.",
      ],
    },
  ],

  approach: [
    "Diet and sodium reduction",
    "Structured yoga practice (asana + pranayama)",
    "Sleep consistency",
    "Stress and breathing-based interventions",
  ],

  support: [
    "Personalized lifestyle and nutrition guidance",
    "Structured therapeutic yoga informed by clinical protocols",
    "Pranayama and breath-based stress management",
    "Coordination with your existing medical care",
  ],

  evidence: [
    {
      claim:
        "Adding yoga to standard lifestyle modification produced a greater reduction in systolic blood pressure (6 mmHg) than lifestyle modification alone (4 mmHg) in a randomized controlled study.",
      source: "Hypertension Research (Nature), prehypertensive subjects RCT",
      url: "https://www.nature.com/articles/hr2014126",
    },
    {
      claim:
        "A meta-analysis of 16 studies (962 participants) found yoga reduced systolic blood pressure by 4.35 mmHg on average, with larger effects in Asian populations specifically.",
      source: "Meta-analysis reported via Medscape",
      url: "https://www.medscape.com/viewarticle/yoga-can-reduce-blood-pressure-adults-high-bmi-2026a1000d13",
    },
    {
      claim:
        "A systematic review of 49 clinical trials found yoga practiced at least three times weekly was associated with a 10 mmHg systolic / 6 mmHg diastolic reduction.",
      source: "Wu et al., systematic review (cited via PMC)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7981931/",
    },
    {
      claim:
        "A traffic-light lifestyle-change framework for NCD outpatients in India, providing structured guidance across sleep, diet, movement and stress.",
      source: "Sarwal R. et al., published research",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12975079/",
      isAuthorPublication: true,
    },
  ],

  faqs: [
    {
      question: "Can yoga lower blood pressure?",
      answer:
        "Multiple randomized controlled trials and meta-analyses have found that yoga, practiced consistently, is associated with measurable reductions in both systolic and diastolic blood pressure — typically in the range of 4 to 10 mmHg depending on the study and practice frequency. Individual results vary, and yoga works best alongside your existing medical care, not as a replacement for it.",
    },
    {
      question: "Can yoga cure high blood pressure permanently?",
      answer:
        "No. Yoga and lifestyle changes are studied as complementary, non-pharmacological measures that can meaningfully reduce blood pressure — they are not a cure, and blood pressure can rise again if the practice or other lifestyle factors aren't maintained. Any decision to reduce or stop medication must be made with your doctor.",
    },
    {
      question: "How long does it take to see a change?",
      answer:
        "Clinical studies that showed measurable reductions generally involved consistent practice over 8 to 12 weeks, several times per week. Individual timelines vary based on starting blood pressure, consistency, and other lifestyle factors.",
    },
    {
      question: "Is this a substitute for blood pressure medication?",
      answer:
        "No. The research on yoga and lifestyle modification studies it as a complementary approach used alongside standard medical care, not a replacement. Never change or stop medication without your doctor's guidance.",
    },
  ],

  relatedConditions: ["metabolic-health", "weight-management"],

  internalLinks: [
    { label: "Nutrition", href: "/approach/nutrition" },
    { label: "Therapeutic Yoga & Movement", href: "/approach/therapeutic-yoga" },
    { label: "Breath & Mindfulness", href: "/approach/breath-mindfulness" },
    { label: "Metabolic Health", href: "/conditions/metabolic-health" },
  ],
};
