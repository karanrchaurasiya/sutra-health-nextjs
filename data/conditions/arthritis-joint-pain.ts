// data/conditions/arthritis-joint-pain.ts
import type { Condition } from "./types";

export const arthritisJointPain: Condition = {
  slug: "arthritis-joint-pain",
  title: "Arthritis & Joint Pain",

  shortDescription:
    "Yoga and lifestyle support for joint pain and arthritis, grounded in clinical research, adapted to your specific joints and condition.",

  introduction:
    "Arthritis isn't one condition — osteoarthritis and rheumatoid arthritis behave differently, and the evidence on yoga reflects that difference. We build a movement and lifestyle plan around your specific joints, your specific type of arthritis, and what the research actually supports — not a generic stretching routine, and always alongside your doctor's care.",

  concerns: [
    "Knee, hip, or hand osteoarthritis",
    "Rheumatoid arthritis affecting function and daily activity",
    "Joint stiffness, especially morning stiffness",
    "Reduced range of motion affecting daily life",
    "Wanting to stay active without aggravating joints",
    "Uncertainty about which movement is actually safe",
  ],

  lifestyleFactors: [
    {
      title: "Joint-appropriate movement",
      description:
        "The right kind of movement depends on which joints are affected and which type of arthritis you have — this isn't one-size-fits-all.",
    },
    {
      title: "Muscle strength around the joint",
      description:
        "Building strength in the muscles supporting an affected joint reduces load on the joint itself.",
    },
    {
      title: "Weight-related load on joints",
      description:
        "For weight-bearing joints like knees and hips, body weight directly affects joint load.",
    },
    {
      title: "Stress and pain perception",
      description:
        "Stress and sleep quality influence how pain is experienced, alongside the physical condition of the joint itself.",
    },
  ],

  sections: [
    {
      title: "Osteoarthritis and rheumatoid arthritis respond differently — and that matters",
      content: [
        "A randomized clinical trial published in JAMA Network Open (117 participants) found yoga was noninferior to a standard strengthening exercise program for knee osteoarthritis pain over 12 weeks, with yoga showing modestly greater improvement in pain, function, and quality of life by 24 weeks.",
        "The picture is different for rheumatoid arthritis. A systematic review and meta-analysis of 10 trials (840 patients with RA) found yoga improved physical function, disease activity, and grip strength — but found no significant effect on pain, tender or swollen joint counts, or inflammatory markers specifically.",
        "This distinction matters for what to expect: if you have osteoarthritis, the evidence supports yoga as a genuine option for pain reduction. If you have rheumatoid arthritis, the evidence supports yoga for function and quality of life, but you shouldn't expect it to meaningfully reduce joint pain or inflammation on its own.",
      ],
    },
    {
      title: "What a 2015 trial found — and what held up nine months later",
      content: [
        "A randomized controlled trial published in the Journal of Rheumatology found that people with arthritis who practiced yoga three times a week saw improvements in pain levels, energy, mood, and physical health compared to a non-yoga control group — and these improvements were still evident nine months later.",
        "A separate randomized trial (Journal of Rheumatology, sedentary adults with arthritis) found yoga had a notable effect on reducing pain (standardized mean difference −0.74) and pain-related disability, alongside improved mood.",
      ],
    },
    {
      title: "Why the right poses matter more than 'doing yoga' in general",
      content: [
        "Not all yoga is appropriate for arthritic joints, and the wrong poses can genuinely aggravate symptoms. Specialists (including the Johns Hopkins Arthritis Center, which ran one of the largest RCTs on yoga for arthritis) generally advise against deep knee bends past 90 degrees, extended weight-bearing on the wrists, and fast-paced styles like Ashtanga, Power, or Bikram/Hot Yoga.",
        "See the linked pages below for specific poses that help and poses to avoid — this is detailed enough to matter, and generic advice isn't good enough here.",
      ],
    },
    {
      title: "How Sutra Health builds a plan around this",
      content: [
        "We look at which joints are affected, which type of arthritis you have, and your current mobility and strength — then build a yoga and lifestyle plan around what the research actually supports for your specific situation, coordinated with your existing medical care.",
        "This is not a replacement for medical evaluation, particularly for new, worsening, or significantly swollen joints, which need appropriate medical assessment.",
      ],
    },
  ],

  approach: [
    "Joint-specific therapeutic yoga",
    "Strength-building around affected joints",
    "Weight-related lifestyle support where relevant",
    "Stress and pain-perception management",
  ],

  support: [
    "Personalized, joint-specific yoga practice",
    "Movement guidance suited to osteoarthritis or rheumatoid arthritis specifically",
    "Nutrition guidance where weight is a relevant factor",
    "Breath and relaxation practices",
  ],

  evidence: [
    {
      claim:
        "In a randomized clinical trial of 117 participants, yoga was noninferior to a strengthening exercise program for knee osteoarthritis pain over 12 weeks, with modestly greater improvements in pain, function and quality of life by 24 weeks.",
      source: "JAMA Network Open, RCT",
      url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2832290",
    },
    {
      claim:
        "A meta-analysis of 10 trials (840 rheumatoid arthritis patients) found yoga improved physical function, disease activity, and grip strength, but found no significant effect on pain or inflammatory markers.",
      source: "Frontiers in Medicine, systematic review and meta-analysis",
      url: "https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2020.586665/full",
    },
    {
      claim:
        "People with arthritis practicing yoga three times weekly showed improved pain, energy, mood and physical health, with benefits still evident nine months later.",
      source: "Journal of Rheumatology, RCT",
      url: "https://time.com/4037157/yoga-arthritis-joint-pain/",
    },
    {
      claim:
        "A yoga-based lifestyle intervention (IAYT) improved mobility, grip strength, and flexibility measures in a randomized controlled trial for knee osteoarthritis.",
      source: "PMC, RCT (CTRI/2017/10/010141)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5952125/",
    },
  ],

  faqs: [
    {
      question: "Can yoga help with arthritis?",
      answer:
        "Yes, but the evidence differs by type. For osteoarthritis, clinical trials show yoga can meaningfully reduce pain and improve function, performing comparably to standard strengthening exercise. For rheumatoid arthritis, research shows yoga improves physical function, mood, and quality of life, but doesn't show a significant effect on pain or inflammation specifically.",
    },
    {
      question: "Can yoga cure arthritis?",
      answer:
        "No. Arthritis is a joint condition that yoga doesn't reverse. What the research supports is yoga as a genuine option for managing symptoms — particularly pain and function in osteoarthritis, and function and quality of life in rheumatoid arthritis — alongside appropriate medical care.",
    },
    {
      question: "How often do I need to practice for it to help?",
      answer:
        "The clinical trials showing meaningful benefit generally involved practicing 2-3 times per week over 8-12 weeks or longer. One trial found benefits were still present nine months after a 3-times-weekly practice.",
    },
    {
      question: "Is yoga safe for arthritis, or can it make it worse?",
      answer:
        "Yoga is generally considered safe for arthritis when the right poses and pace are chosen — but the wrong poses can aggravate symptoms. This is why joint-specific, personalized guidance matters more than following a generic yoga routine.",
    },
  ],

  relatedConditions: ["weight-management", "metabolic-health", "migraine-headache"],

  internalLinks: [
    { label: "Therapeutic Yoga & Movement", href: "/approach/therapeutic-yoga" },
    { label: "Lifestyle Medicine", href: "/approach/lifestyle" },
    { label: "Weight Management", href: "/conditions/weight-management" },
  ],
};