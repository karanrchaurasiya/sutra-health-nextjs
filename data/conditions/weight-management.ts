// data/conditions/weight-management.ts
import type { Condition } from "./types";

export const weightManagement: Condition = {
  slug: "weight-management",
  title: "Weight Management",

  shortDescription:
    "Personalized lifestyle and nutrition support focused on sustainable habits, healthy routines and long-term wellbeing.",

  introduction:
    "Healthy weight management is influenced by more than food or exercise alone. Sleep, stress, physical activity, eating patterns, daily routines and other aspects of lifestyle can all play a role. At Sutra Health, we take a personalized approach to weight management that focuses on practical changes you can build into everyday life rather than short-term restrictive plans.",

  concerns: [
    "Difficulty maintaining a healthy weight",
    "Repeated weight-loss and weight-gain cycles",
    "Challenges maintaining consistent lifestyle habits",
    "Questions about nutrition and eating patterns",
    "Difficulty becoming physically active",
    "Lifestyle factors affecting weight and wellbeing",
  ],

  lifestyleFactors: [
    {
      title: "Nutrition and eating patterns",
      description:
        "Eating patterns and nutrition guidance can be considered as part of a sustainable weight-management plan.",
    },
    {
      title: "Movement and physical activity",
      description:
        "Regular, appropriate movement can be built around individual abilities, preferences and routine.",
    },
    {
      title: "Sleep and recovery",
      description:
        "Sleep routines and recovery can be considered alongside nutrition and activity.",
    },
    {
      title: "Stress and daily routines",
      description:
        "Stress, routines and other everyday habits may be relevant to sustainable lifestyle change.",
    },
  ],

  sections: [
    {
      title: "Understanding Weight Management",
      content: [
        "Weight management is not simply about following a diet or increasing exercise for a short period of time. A person's weight and overall health can be influenced by eating patterns, physical activity, sleep, stress, routines and many other aspects of everyday life.",
        "A sustainable approach therefore looks at the bigger picture. The goal is to understand which lifestyle factors are relevant to your health and identify practical changes that can be maintained over time.",
      ],
    },
    {
      title: "Nutrition and Eating Habits",
      content: [
        "Nutrition is an important part of healthy weight management. Rather than relying on highly restrictive diets, personalized nutrition guidance can help you understand your current eating patterns and identify realistic changes that fit your preferences and routine.",
        "Small and consistent improvements can be easier to maintain than temporary changes. Nutrition counselling can therefore focus on developing habits that support your broader health goals.",
      ],
    },
    {
      title: "Movement and Physical Activity",
      content: [
        "Regular physical activity can form an important part of a healthy lifestyle. The appropriate type and amount of movement depends on individual health, physical ability, preferences and circumstances.",
        "Movement can include everyday activity, structured exercise or appropriately adapted therapeutic yoga. The emphasis should be on creating a routine that is realistic and sustainable.",
      ],
    },
    {
      title: "Sleep and Recovery",
      content: [
        "Sleep and recovery are important components of overall wellbeing. Sleep routines can therefore be considered as part of a broader approach to weight management and healthy lifestyle habits.",
        "Improving consistency around sleep and recovery may be one practical area to explore when developing an individualized lifestyle plan.",
      ],
    },
    {
      title: "Stress and Lifestyle Habits",
      content: [
        "Stress can affect everyday routines, eating patterns, sleep and physical activity. Understanding these connections can be useful when working toward sustainable lifestyle changes.",
        "Breathing practices, mindfulness, relaxation and other healthy routines may be incorporated where appropriate as part of a whole-person approach.",
      ],
    },
    {
      title: "How Sutra Health Can Support Weight Management",
      content: [
        "Sutra Health can consider nutrition, lifestyle habits, movement, sleep, stress and other relevant factors when developing personalized support around your health goals.",
        "Support may include nutrition counselling, lifestyle guidance, therapeutic yoga and movement practices, breath and mindfulness practices, and ongoing support for sustainable habits.",
      ],
    },
  ],

  approach: [
    "Lifestyle habits",
    "Nutrition",
    "Movement and yoga",
    "Sleep and recovery",
    "Stress and mind",
  ],

  support: [
    "Personalized lifestyle guidance",
    "Nutrition counselling",
    "Therapeutic yoga and movement",
    "Breath and mindfulness practices",
    "Ongoing support around sustainable habits",
  ],

  // TODO: this condition has not yet had the capture-and-triage research
  // process run on it (see the High Blood Pressure pilot brief). The FAQs
  // and content above are the original vague-hedge version — carried over
  // as-is for now so the site still builds, but this is a priority
  // candidate for the same research-and-rewrite treatment.
  faqs: [
    {
      question: "What is a healthy approach to weight management?",
      answer:
        "Healthy weight management can involve nutrition, physical activity, sleep, stress management and sustainable daily habits. The most appropriate approach depends on your individual health, lifestyle and goals.",
    },
    {
      question: "Is weight management only about diet?",
      answer:
        "No. Weight can be influenced by several aspects of everyday life, including eating patterns, physical activity, sleep, stress and daily routines.",
    },
    {
      question: "Can nutrition counselling help with weight management?",
      answer:
        "Personalized nutrition counselling can help you understand your eating patterns and make practical changes that fit your preferences, routine and health goals.",
    },
    {
      question: "Can exercise be part of a weight management plan?",
      answer:
        "Appropriate physical activity can be an important part of a healthy lifestyle. The type and amount of activity should be suited to your individual abilities, health and circumstances.",
    },
    {
      question: "Can yoga support weight management?",
      answer:
        "Therapeutic yoga can be included as part of an individualized lifestyle approach. Depending on the person, yoga may support movement, strength, mobility, body awareness and overall wellbeing.",
    },
    {
      question: "How important is sleep for weight management?",
      answer:
        "Sleep is an important part of overall health and healthy routines. Sleep patterns can therefore be considered when developing a broader lifestyle approach to weight management.",
    },
    {
      question: "Can stress affect weight management?",
      answer:
        "Stress can influence everyday habits, eating patterns, sleep and activity. Understanding stress and developing sustainable ways to manage it may therefore be relevant to an individualized lifestyle plan.",
    },
  ],

  relatedConditions: ["metabolic-health", "high-blood-pressure"],

  internalLinks: [
    { label: "Nutrition", href: "/approach/nutrition" },
    { label: "Lifestyle Medicine", href: "/approach/lifestyle" },
    { label: "Therapeutic Yoga", href: "/approach/therapeutic-yoga" },
    { label: "Metabolic Health", href: "/conditions/metabolic-health" },
  ],
};
