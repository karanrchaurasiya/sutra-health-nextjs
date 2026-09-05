// data/conditions/womens-health.ts
import type { Condition } from "./types";

export const womensHealth: Condition = {
  slug: "womens-health",
  title: "Women's Health",

  shortDescription:
    "Personalized lifestyle support for women's health and wellbeing across different stages of life.",

  introduction:
    "Women's health needs can change throughout different stages of life. Nutrition, movement, sleep, stress, daily routines and individual health goals can all be relevant. Sutra Health takes a personalized approach that considers the individual rather than using a single lifestyle plan for everyone.",

  concerns: [
    "Changing health and lifestyle needs",
    "Nutrition and activity questions",
    "Stress and wellbeing",
    "Sleep and recovery concerns",
    "Maintaining healthy daily routines",
    "Lifestyle-related health concerns",
  ],

  lifestyleFactors: [
    {
      title: "Nutrition",
      description:
        "Personalized nutrition guidance can be shaped around individual needs, preferences, routines and health goals.",
    },
    {
      title: "Movement and therapeutic yoga",
      description:
        "Appropriate movement and adapted therapeutic yoga may support strength, mobility and general wellbeing.",
    },
    {
      title: "Sleep and recovery",
      description:
        "Sleep routines and recovery can be considered as part of broader lifestyle support.",
    },
    {
      title: "Stress, breath and mind",
      description:
        "Stress management, breathing, relaxation and mindfulness may be included where appropriate.",
    },
  ],

  sections: [
    {
      title: "A Whole-Person Approach to Women's Health",
      content: [
        "Women's health needs can change across different stages of life. Individual circumstances, health goals, lifestyle, nutrition, movement, sleep and stress can all be relevant.",
        "A personalized approach recognizes that there is no single lifestyle plan that is suitable for every woman.",
      ],
    },
    {
      title: "Nutrition and Women's Wellbeing",
      content: [
        "Nutrition can play an important role in overall wellbeing. Personalized nutrition guidance can be shaped around individual preferences, routines, health goals and circumstances.",
      ],
    },
    {
      title: "Movement and Therapeutic Yoga",
      content: [
        "Appropriate physical activity can support strength, mobility and general wellbeing. Therapeutic yoga may also be adapted around individual abilities and goals when appropriate.",
      ],
    },
    {
      title: "Sleep and Recovery",
      content: [
        "Sleep and recovery are important components of overall health. Developing sustainable sleep routines can therefore be considered as part of a broader lifestyle approach.",
      ],
    },
    {
      title: "Stress, Breath and Mind",
      content: [
        "Stress management, relaxation, breathing and mindfulness practices may be included as part of personalized lifestyle support.",
        "These practices can be considered alongside nutrition, movement, sleep and other relevant lifestyle factors.",
      ],
    },
    {
      title: "Personalized Support for Women's Health",
      content: [
        "Sutra Health can consider nutrition, lifestyle, movement, sleep, stress and individual health goals when developing personalized support.",
        "Lifestyle support can complement appropriate healthcare but should not replace medical evaluation or treatment when these are needed.",
      ],
    },
  ],

  approach: ["Nutrition", "Lifestyle", "Movement", "Sleep", "Mind and stress"],

  support: [
    "Personalized lifestyle guidance",
    "Nutrition counselling",
    "Movement and therapeutic yoga",
    "Sleep and recovery support",
    "Breath, mindfulness and stress-management practices",
  ],

  // TODO: same as weight-management — not yet through the research/rewrite
  // process. Carried over as-is so the build doesn't break.
  faqs: [
    {
      question: "What does a lifestyle approach to women's health involve?",
      answer:
        "A lifestyle approach can consider nutrition, movement, sleep, stress, daily routines and individual health goals while recognizing that women's needs can change across different stages of life.",
    },
    {
      question: "Can nutrition counselling be part of women's health support?",
      answer:
        "Yes. Personalized nutrition guidance can be included when appropriate and can be shaped around individual needs, preferences and health goals.",
    },
    {
      question: "Can yoga be included in a women's health plan?",
      answer:
        "Appropriately adapted yoga and movement practices may be included as part of an individualized lifestyle plan.",
    },
    {
      question: "Why is sleep important for women's wellbeing?",
      answer:
        "Sleep and recovery are important components of overall health. Sleep routines can therefore be considered as part of a broader lifestyle approach.",
    },
    {
      question: "Can stress management support women's wellbeing?",
      answer:
        "Stress management, relaxation, breathing and mindfulness practices may be included as part of personalized lifestyle support.",
    },
    {
      question: "Can lifestyle support change across different life stages?",
      answer:
        "Yes. Individual health needs and goals can change across different stages of life, so lifestyle support should be personalized rather than based on a single approach.",
    },
    {
      question: "Can weight management be part of women's health support?",
      answer:
        "Weight-related lifestyle goals may be considered when relevant, alongside nutrition, movement, sleep, stress and other aspects of overall wellbeing.",
    },
    {
      question: "Can digestive health be connected with women's wellbeing?",
      answer:
        "Digestive wellbeing can be one of the lifestyle areas considered as part of a broader whole-person approach. Individual symptoms and concerns should be evaluated appropriately.",
    },
    {
      question:
        "Does lifestyle support replace medical care for women's health concerns?",
      answer:
        "No. Lifestyle support can complement appropriate healthcare but should not replace medical evaluation or treatment when these are needed.",
    },
    {
      question: "Does Sutra Health provide personalized women's health guidance?",
      answer:
        "Sutra Health takes an individualized approach that can consider nutrition, lifestyle, movement, sleep, stress and personal health goals.",
    },
  ],

  relatedConditions: ["migraine-headache", "digestive-gut-health", "weight-management"],

  internalLinks: [
    { label: "Nutrition", href: "/approach/nutrition" },
    { label: "Yoga Therapy", href: "/approach/therapeutic-yoga" },
    { label: "Lifestyle Medicine", href: "/approach/lifestyle" },
    { label: "Weight Management", href: "/conditions/weight-management" },
  ],
};
