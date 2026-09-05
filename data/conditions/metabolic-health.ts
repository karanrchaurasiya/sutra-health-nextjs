// data/conditions/metabolic-health.ts
import type { Condition } from "./types";

export const metabolicHealth: Condition = {
  slug: "metabolic-health",
  title: "Metabolic Health",

  shortDescription:
    "Lifestyle and yoga-based support for blood sugar and metabolic wellbeing, grounded in clinical research — including a large India-specific prevention trial — alongside your doctor's care.",

  introduction:
    "Metabolic health — how your body manages blood sugar, weight, and related processes — responds to nutrition, movement, sleep, and stress together, not any single lever pulled in isolation. We build a plan around what clinical research actually supports, including strong evidence specific to Indian populations, coordinated with your existing medical care.",

  concerns: [
    "Prediabetes and wanting to avoid progression to diabetes",
    "Type 2 diabetes with blood sugar that's hard to keep in range",
    "Wanting to reduce reliance on medication through lifestyle change (always in consultation with your doctor)",
    "Elevated HbA1c or fasting glucose",
    "Weight and metabolic risk factors together",
    "Uncertainty about how much yoga can realistically do here",
  ],

  lifestyleFactors: [
    {
      title: "Diet and eating patterns",
      description:
        "Nutrition is central to metabolic health — what and when you eat directly affects blood sugar regulation.",
    },
    {
      title: "Structured yoga practice",
      description:
        "Clinical trials specifically measure yoga's effect on HbA1c and fasting glucose — this is a studied intervention, not a general wellness claim.",
    },
    {
      title: "Physical activity beyond yoga",
      description:
        "Muscle-building activity plays a distinct, complementary role in glucose metabolism — see the honest discussion below.",
    },
    {
      title: "Sleep and stress",
      description:
        "Both affect insulin sensitivity and blood sugar regulation independent of diet and activity.",
    },
  ],

  sections: [
    {
      title: "What the clinical research actually shows",
      content: [
        "A 2026 Bayesian meta-analysis of randomized controlled trials in adults with type 2 diabetes found yoga was associated with a 0.64% reduction in HbA1c and a 1.36 mmol/L reduction in fasting blood glucose — both exceeding commonly used clinical significance thresholds. The benefit was largest in patients with poorer baseline control.",
        "A separate systematic review and meta-analysis (13 studies) found yoga significantly improved HbA1c, fasting blood glucose, post-prandial blood glucose, and triglycerides in people with type 2 diabetes — though it found no significant effect on total cholesterol or BMI specifically.",
        "Both reviews describe yoga the same way: as a feasible complementary addition to standard diabetes care, not a replacement for it.",
      ],
    },
    {
      title: "A large India-specific trial on preventing diabetes altogether",
      content: [
        "A multicenter cluster-randomized controlled trial conducted across India (the NMB Trial) tested a yoga-based lifestyle protocol in a high-risk cohort with prediabetes. Participants who received the yoga-based lifestyle intervention were significantly less likely to progress to diabetes over the following months compared to those receiving standard-of-care advice alone — a relative risk reduction of roughly 64%.",
        "This is one of the more compelling findings in this space specifically because it was conducted in an Indian population, at scale, with diabetes progression as the actual measured outcome — not just a lab marker.",
      ],
    },
    {
      title: "The honest, contested part: can yoga 'reverse' diabetes?",
      content: [
        "Some sources describe yoga as capable of reversing or curing type 2 diabetes. This claim is disputed, and reasonably so: yoga does not build muscle mass the way resistance training does, and muscle is the body's primary site for glucose disposal. A credible clinical counter-argument holds that without that muscle-building stimulus, yoga alone doesn't correct the underlying insulin resistance driving type 2 diabetes.",
        "The research that does hold up — the meta-analyses above — supports yoga as producing real, clinically meaningful improvements in blood sugar markers as an adjunct to standard care, not as a cure or a replacement for muscle-building activity, diet, or medication.",
        "Our approach reflects this: yoga and lifestyle changes as a genuine, evidence-backed complement to your medical care and, where appropriate, other forms of physical activity — not a substitute for either.",
      ],
    },
    {
      title: "How Sutra Health builds a plan around this",
      content: [
        "We look at your diet, activity levels, sleep, and stress together, and build a lifestyle and yoga plan informed by the research above — coordinated with your doctor, particularly around any medication changes.",
        "This is not a replacement for medical care or monitoring. Blood sugar management needs regular medical oversight, and any changes to medication must go through your physician.",
      ],
    },
  ],

  approach: [
    "Nutrition and eating patterns",
    "Structured therapeutic yoga",
    "Movement and activity planning",
    "Sleep and stress management",
  ],

  support: [
    "Personalized nutrition guidance",
    "Structured yoga informed by clinical protocols",
    "Movement planning, including complementary activity beyond yoga where appropriate",
    "Coordination with your existing medical care",
  ],

  evidence: [
    {
      claim:
        "A Bayesian meta-analysis of RCTs in adults with type 2 diabetes found yoga reduced HbA1c by 0.64% and fasting blood glucose by 1.36 mmol/L, exceeding standard clinical significance thresholds.",
      source: "Frontiers in Endocrinology, Bayesian three-level meta-analysis",
      url: "https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2026.1889124/full",
    },
    {
      claim:
        "A systematic review and meta-analysis of 13 studies found yoga significantly improved HbA1c, fasting glucose, post-prandial glucose, and triglycerides in type 2 diabetes patients.",
      source: "PMC, systematic review and meta-analysis",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9259958/",
    },
    {
      claim:
        "A multicenter cluster-randomized controlled trial across India found a yoga-based lifestyle protocol reduced progression from prediabetes to diabetes by an adjusted relative risk reduction of approximately 64% compared to standard care.",
      source: "PMC, NMB Trial (India)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8231281/",
    },
    {
      claim:
        "A four-arm randomized controlled study of 120 type 2 diabetes patients found significant reductions in HbA1c and perceived stress following a yoga intervention.",
      source: "PMC, four-arm RCT",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12853005/",
    },
  ],

  faqs: [
    {
      question: "Can yoga help with diabetes or blood sugar control?",
      answer:
        "Yes. Multiple meta-analyses of randomized controlled trials show yoga produces clinically meaningful reductions in HbA1c and fasting blood glucose in people with type 2 diabetes, with the largest benefits seen in those with poorer baseline control. It's studied and used as an adjunct to standard diabetes care, not a replacement.",
    },
    {
      question: "Can yoga reverse or cure diabetes?",
      answer:
        "This is genuinely disputed. The strongest research shows meaningful improvement in blood sugar markers, not reversal of the underlying condition. A reasonable clinical counter-argument notes that yoga doesn't build the muscle mass that plays a major role in glucose disposal, unlike resistance training. We treat yoga as a real, evidence-backed complement to your care — not a cure — and don't make claims the research doesn't support.",
    },
    {
      question: "Can yoga help prevent prediabetes from becoming diabetes?",
      answer:
        "There's strong evidence for this specifically. A large multicenter trial conducted across India found a yoga-based lifestyle protocol reduced progression from prediabetes to diabetes by roughly 64% relative to standard care advice — one of the more compelling findings in this area.",
    },
    {
      question: "Can yoga replace diabetes medication?",
      answer:
        "No. The research studies yoga as a complementary approach used alongside medical care, not a replacement for medication. Any changes to your diabetes medication should only be made with your doctor, based on your actual blood sugar readings over time.",
    },
  ],

  relatedConditions: ["weight-management", "high-blood-pressure", "digestive-gut-health"],

  internalLinks: [
    { label: "Nutrition", href: "/approach/nutrition" },
    { label: "Therapeutic Yoga & Movement", href: "/approach/therapeutic-yoga" },
    { label: "Weight Management", href: "/conditions/weight-management" },
    { label: "High Blood Pressure", href: "/conditions/high-blood-pressure" },
  ],
};