// data/conditions/digestive-gut-health.ts
import type { Condition } from "./types";

export const digestiveGutHealth: Condition = {
  slug: "digestive-gut-health",
  title: "Digestive & Gut Health",

  shortDescription:
    "Personalized nutrition, yoga, and lifestyle support for digestive wellbeing — with an honest look at what the research does and doesn't yet support.",

  introduction:
    "Digestive wellbeing connects to eating patterns, stress, movement, and daily routines. This is also an area where the research is genuinely mixed rather than settled, and we think that's worth saying plainly rather than overselling. We build support around what's actually known, alongside appropriate medical evaluation for persistent or concerning symptoms.",

  concerns: [
    "Irritable bowel syndrome (IBS) symptoms",
    "Bloating, gas, or general digestive discomfort",
    "Irregular bowel habits or constipation",
    "Digestive symptoms that seem connected to stress",
    "Wanting an honest picture of what lifestyle changes can realistically do here",
    "Interest in a whole-person approach alongside medical care",
  ],

  lifestyleFactors: [
    {
      title: "Eating patterns and timing",
      description:
        "What and when you eat directly affects digestive comfort — including timing yoga practice around meals appropriately.",
    },
    {
      title: "Gentle, specific movement",
      description:
        "Certain yoga poses are traditionally used for digestive comfort, though the strength of clinical evidence varies by specific condition.",
    },
    {
      title: "Stress and the gut-brain connection",
      description:
        "IBS in particular is closely linked to the gut-brain axis, making stress management a genuinely relevant, evidence-supported factor.",
    },
    {
      title: "Daily routine consistency",
      description:
        "Regular meal timing and daily structure can support more predictable digestive patterns.",
    },
  ],

  sections: [
    {
      title: "The honest picture on yoga and IBS specifically",
      content: [
        "This is genuinely mixed evidence, and we think it's worth being direct about that. Earlier reviews found real benefit: a systematic review of 6 randomized controlled trials (273 patients) found yoga produced significantly decreased bowel symptoms, IBS severity, and anxiety compared to no treatment, with improved quality of life.",
        "A more recent, larger systematic review and meta-analysis, however, found the evidence 'uncertain' — concluding that yoga did not significantly reduce gastrointestinal symptom severity, anxiety, or depression, or improve quality of life in IBS specifically, and citing considerable methodological differences and risk of bias across the existing trials. That review does not yet recommend yoga as a treatment for IBS.",
        "Our honest position: yoga may help some people with IBS, particularly through stress reduction and the gut-brain connection, but the evidence isn't yet strong or consistent enough to promise symptom relief. We treat it as a reasonable complementary practice worth trying alongside appropriate medical care, not a proven treatment.",
      ],
    },
    {
      title: "What's better supported: general digestive comfort and stress-linked symptoms",
      content: [
        "Separate from the IBS-specific evidence, gentle yoga practices — particularly abdominal-compression poses combined with slow breathing — are widely used for general bloating, gas, and constipation-related discomfort, with a plausible mechanism (stimulating peristalsis, the wave-like movement that moves waste through the intestines) supporting their traditional use.",
        "Stress and the gut-brain axis are well-established in digestive medicine generally, which is why breath-based and relaxation practices have a reasonable rationale even where large-scale trial evidence for specific conditions remains limited.",
      ],
    },
    {
      title: "A relevant published case report",
      content: [
        "Dr. Rakesh Sarwal, who leads the clinical approach at Sutra Health, has published a case report documenting IBS symptom remission through a combined diet, lifestyle, and yoga approach. A single case report is not the same as a randomized controlled trial — it doesn't establish that this approach works broadly — but it reflects the same combined, whole-person approach we bring to digestive concerns, informed by direct clinical experience alongside the wider research.",
      ],
    },
    {
      title: "How Sutra Health builds a plan around this",
      content: [
        "We look at eating patterns, stress, movement, and routine together, and are upfront about where the evidence is strong versus where it's still developing — particularly for IBS specifically.",
        "Persistent, severe, or changing digestive symptoms need appropriate medical evaluation. Lifestyle support complements that care; it doesn't substitute for it.",
      ],
    },
  ],

  approach: [
    "Nutrition and eating pattern review",
    "Gentle, digestion-supportive yoga",
    "Stress management and the gut-brain connection",
    "Daily routine consistency",
  ],

  support: [
    "Personalized nutrition counselling",
    "Digestion-focused yoga practice",
    "Breath and stress-management practices",
    "Coordination with medical evaluation where needed",
  ],

  evidence: [
    {
      claim:
        "A systematic review of 6 randomized controlled trials (273 patients) found yoga significantly decreased bowel symptoms, IBS severity, and anxiety compared to no treatment.",
      source: "PubMed, systematic review",
      url: "https://pubmed.ncbi.nlm.nih.gov/27112106/",
    },
    {
      claim:
        "A more recent, larger systematic review and meta-analysis found the evidence for yoga in IBS uncertain, citing methodological heterogeneity, and did not recommend yoga as an IBS treatment pending further large-scale trials.",
      source: "PubMed, systematic review and meta-analysis",
      url: "https://pubmed.ncbi.nlm.nih.gov/40358469/",
    },
    {
      claim:
        "An 8-week virtual yoga program for IBS patients showed a significant reduction in IBS symptom severity within the treatment group, alongside improved quality of life, fatigue, and perceived stress, though it was not statistically superior to an advice-only control group on the primary outcome.",
      source: "American Journal of Gastroenterology, RCT",
      url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9889201/",
    },
    {
      claim:
        "A published case report documents IBS symptom remission achieved through a combined diet, lifestyle, and yoga intervention.",
      source: "Sarwal R., published case report",
      isAuthorPublication: true,
    },
  ],

  faqs: [
    {
      question: "Can yoga help with IBS?",
      answer:
        "The evidence is genuinely mixed. Some earlier trials and reviews found meaningful improvement in IBS symptoms and quality of life. A more recent, larger systematic review found the evidence uncertain and didn't recommend yoga as a proven IBS treatment. We think it's reasonable to try alongside medical care, but we won't promise results the current evidence doesn't support.",
    },
    {
      question: "Can yoga help with bloating or constipation generally?",
      answer:
        "Gentle yoga poses involving abdominal compression and twisting, combined with slow breathing, are widely used for general bloating and constipation-related discomfort, with a plausible mechanism supporting their use. This is separate from the more specific, mixed evidence on diagnosed IBS.",
    },
    {
      question: "Is yoga a substitute for medical evaluation of digestive symptoms?",
      answer:
        "No. Persistent, severe, or changing digestive symptoms should be evaluated by a healthcare professional. Lifestyle and yoga support can complement medical care but shouldn't delay appropriate diagnosis and treatment.",
    },
  ],

  relatedConditions: ["weight-management", "metabolic-health", "womens-health"],

  internalLinks: [
    { label: "Nutrition", href: "/approach/nutrition" },
    { label: "Breath & Mindfulness", href: "/approach/breath-mindfulness" },
    { label: "Therapeutic Yoga & Movement", href: "/approach/therapeutic-yoga" },
  ],
};