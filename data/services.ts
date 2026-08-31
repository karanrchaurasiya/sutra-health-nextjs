export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  introduction: string;

  sections: {
    title: string;
    paragraphs: string[];
  }[];

  highlights: string[];

  whoMayBenefit: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  relatedServices: string[];

  relatedConditions: string[];
}

export const services: Service[] = [
  {
    slug: "lifestyle-medicine",

    title: "Lifestyle Medicine",

    shortDescription:
      "Personalized guidance focused on sustainable lifestyle habits, healthy routines and long-term wellbeing.",

    introduction:
      "Lifestyle medicine focuses on everyday factors that can influence health and wellbeing. These may include nutrition, physical activity, sleep, stress management and other daily habits. Rather than focusing only on a single symptom or short-term change, the approach looks at how different aspects of everyday life can work together.",

    sections: [
      {
        title: "What is Lifestyle Medicine?",
        paragraphs: [
          "Lifestyle medicine is a whole-person approach that considers the everyday behaviours and routines that are relevant to health. Nutrition, movement, sleep, stress and other lifestyle factors can all form part of the conversation around long-term wellbeing.",
          "At Sutra Health, lifestyle guidance is personalized around an individual's health needs, preferences, circumstances and goals. The focus is on practical changes that can become part of everyday life rather than short-term or restrictive plans.",
        ],
      },
      {
        title: "How Lifestyle Medicine Can Support Your Health",
        paragraphs: [
          "Healthy lifestyle habits are connected with many aspects of wellbeing. Developing more consistent routines around food, physical activity, sleep and stress can be an important part of a broader approach to health.",
          "The appropriate priorities are different for every person. A lifestyle-focused consultation can help identify the areas that may be most relevant to your current goals and determine practical steps that can be incorporated into your routine.",
        ],
      },
      {
        title: "A Connected Approach to Everyday Health",
        paragraphs: [
          "Lifestyle factors rarely exist independently. Nutrition can influence energy and daily routines, physical activity can support mobility and fitness, while sleep and stress can influence how easily healthy habits are maintained.",
          "For this reason, Sutra Health considers different aspects of lifestyle together. Depending on individual needs, lifestyle medicine may be combined with nutrition counselling, therapeutic yoga, breath practices and other supportive approaches.",
        ],
      },
    ],

    highlights: [
      "Personalized lifestyle guidance",
      "Nutrition and everyday habits",
      "Physical activity and movement",
      "Sleep and recovery",
      "Stress and wellbeing",
    ],

    whoMayBenefit: [
      "People looking to build healthier everyday habits",
      "People wanting practical lifestyle guidance",
      "People interested in improving nutrition and eating habits",
      "People wanting to become more physically active",
      "People looking for support with sleep and recovery routines",
      "People interested in a broader approach to long-term wellbeing",
    ],

    faqs: [
      {
        question: "What is lifestyle medicine?",
        answer:
          "Lifestyle medicine is a whole-person approach that considers everyday factors such as nutrition, physical activity, sleep, stress and other lifestyle habits as part of overall health and wellbeing.",
      },
      {
        question: "What does lifestyle medicine include?",
        answer:
          "Lifestyle medicine can include guidance around nutrition, physical activity, sleep, stress management, healthy routines and other behaviours relevant to an individual's health goals.",
      },
      {
        question: "Is lifestyle medicine only about diet and exercise?",
        answer:
          "No. A broader lifestyle approach can consider nutrition and movement together with sleep, stress, daily routines and other factors that may be relevant to wellbeing.",
      },
      {
        question: "Can lifestyle medicine help with long-term health goals?",
        answer:
          "Lifestyle medicine focuses on sustainable habits and practical changes that can become part of everyday life. The appropriate approach depends on each person's health, circumstances and goals.",
      },
      {
        question: "Can nutrition counselling be part of lifestyle medicine?",
        answer:
          "Yes. Nutrition can be an important part of a lifestyle-focused approach and may be addressed according to individual eating patterns, preferences and health goals.",
      },
      {
        question: "Can yoga be included in lifestyle medicine?",
        answer:
          "Appropriately selected yoga and movement practices may be included when they are suitable for the individual's needs, abilities and goals.",
      },
      {
        question: "Can lifestyle medicine include support for sleep and stress?",
        answer:
          "Yes. Sleep, recovery and stress management can be considered as part of a broader approach to sustainable lifestyle habits.",
      },
      {
        question: "Who can benefit from lifestyle medicine?",
        answer:
          "Lifestyle-focused support may be relevant to people who want to develop healthier routines, improve nutrition, become more active or take a broader approach to their wellbeing.",
      },
      {
        question: "Is lifestyle medicine suitable for everyone?",
        answer:
          "The appropriate approach depends on individual health, circumstances and goals. A qualified healthcare professional can help determine what type of support is appropriate.",
      },
      {
        question: "Does lifestyle medicine replace medical treatment?",
        answer:
          "No. Lifestyle support should not automatically replace medical evaluation or prescribed treatment. Medical conditions and medication decisions should be discussed with an appropriate healthcare professional.",
      },
    ],

    relatedServices: [
      "nutrition-counselling",
      "therapeutic-yoga",
      "meditation-stress-support",
    ],

    relatedConditions: [
      "weight-management",
      "metabolic-health",
      "high-blood-pressure",
    ],
  },

  {
    slug: "integrative-medicine",

    title: "Integrative Medicine",

    shortDescription:
      "A whole-person approach that brings different aspects of health, lifestyle and wellbeing together.",

    introduction:
      "Integrative medicine considers the person as a whole rather than looking at one aspect of health in isolation. Depending on individual needs, appropriate healthcare can be considered alongside lifestyle, nutrition, movement and mind-body practices.",

    sections: [
      {
        title: "What is Integrative Medicine?",
        paragraphs: [
          "Integrative medicine takes a broader view of health and wellbeing. It recognizes that physical health, lifestyle, daily habits and emotional wellbeing can all be relevant when understanding an individual's health needs.",
          "At Sutra Health, the approach is personalized. Different supportive practices may be considered according to the person's circumstances while appropriate medical care remains an important part of responsible healthcare.",
        ],
      },
      {
        title: "Looking at Health as a Whole",
        paragraphs: [
          "A person's health is influenced by more than one factor. Nutrition, physical activity, sleep, stress, daily routines and other aspects of life may all be relevant to wellbeing.",
          "Integrative care aims to bring these perspectives together in a practical and understandable way rather than treating each area as completely separate.",
        ],
      },
      {
        title: "Personalized Care",
        paragraphs: [
          "There is no single lifestyle plan that works for everyone. Individual preferences, health circumstances, routines and goals can influence which approaches are appropriate.",
          "The purpose of an integrative consultation is therefore to understand the individual and identify practical areas of support rather than applying a fixed programme to everyone.",
        ],
      },
    ],

    highlights: [
      "Whole-person perspective",
      "Personalized care",
      "Lifestyle considerations",
      "Nutrition and movement",
      "Mind-body wellbeing",
    ],

    whoMayBenefit: [
      "People looking for a broader approach to wellbeing",
      "People interested in combining appropriate healthcare with lifestyle support",
      "People wanting personalized health guidance",
      "People interested in nutrition and movement as part of wellbeing",
      "People looking at connected lifestyle factors",
    ],

    faqs: [
      {
        question: "What is integrative medicine?",
        answer:
          "Integrative medicine takes a whole-person approach and considers appropriate healthcare together with relevant lifestyle and wellbeing factors.",
      },
      {
        question: "How is integrative medicine different from conventional healthcare?",
        answer:
          "Integrative care does not necessarily replace conventional healthcare. It can consider appropriate medical care together with lifestyle and supportive approaches according to individual needs.",
      },
      {
        question: "What can integrative medicine include?",
        answer:
          "Depending on individual circumstances, it may include consideration of nutrition, movement, lifestyle habits, stress, sleep and other wellbeing factors alongside appropriate healthcare.",
      },
      {
        question: "Is integrative medicine personalized?",
        answer:
          "Yes. An integrative approach considers individual health needs, preferences, circumstances and goals rather than applying exactly the same plan to everyone.",
      },
      {
        question: "Can nutrition be part of integrative care?",
        answer:
          "Nutrition may be considered as part of a broader approach when appropriate to the individual's health goals and circumstances.",
      },
      {
        question: "Can yoga be part of integrative medicine?",
        answer:
          "Appropriately adapted yoga may be included as a supportive practice when suitable for an individual's needs and abilities.",
      },
      {
        question: "Can lifestyle factors be discussed during an integrative consultation?",
        answer:
          "Yes. Lifestyle factors such as nutrition, movement, sleep and stress may be considered when they are relevant to the individual's health and wellbeing.",
      },
      {
        question: "Does integrative medicine replace medical treatment?",
        answer:
          "No. Integrative support should complement appropriate healthcare and should not be used as a reason to stop prescribed treatment without professional guidance.",
      },
      {
        question: "Who may benefit from an integrative approach?",
        answer:
          "It may be relevant to people looking for a broader, personalized perspective on health and wellbeing.",
      },
      {
        question: "How do I know whether integrative care is appropriate for me?",
        answer:
          "Suitability depends on your health circumstances and goals. A consultation can help determine which approaches may be appropriate.",
      },
    ],

    relatedServices: [
      "lifestyle-medicine",
      "nutrition-counselling",
      "health-assessment",
    ],

    relatedConditions: [
      "metabolic-health",
      "digestive-gut-health",
      "womens-health",
    ],
  },

  {
    slug: "therapeutic-yoga",

    title: "Therapeutic Yoga",

    shortDescription:
      "Personalized yoga-based practices designed around movement, mobility, strength, breathing and wellbeing.",

    introduction:
      "Therapeutic yoga uses appropriately selected yoga practices according to individual needs, abilities and goals. Rather than treating yoga as a one-size-fits-all exercise routine, practices can be adapted around movement, mobility, breathing, strength and relaxation.",

    sections: [
      {
        title: "What is Therapeutic Yoga?",
        paragraphs: [
          "Therapeutic yoga is an individualized approach to yoga that considers the person's abilities, needs and goals. Practices may include movement, postures, breathing and relaxation according to what is appropriate.",
          "The emphasis is on adapting the practice rather than expecting every person to perform the same sequence or intensity of exercises.",
        ],
      },
      {
        title: "Movement, Mobility and Strength",
        paragraphs: [
          "Movement is an important part of everyday health. Appropriately selected yoga practices can be used to support mobility, body awareness, balance and physical activity.",
          "The type of practice should be appropriate to the individual's condition, abilities and circumstances. Persistent or significant symptoms should receive appropriate medical assessment.",
        ],
      },
      {
        title: "Breathing and Mind-Body Awareness",
        paragraphs: [
          "Therapeutic yoga can also include breathing and relaxation practices. These practices may help people develop greater awareness of breathing, movement and their relationship with everyday wellbeing.",
          "The practices used should be adapted to the individual rather than presented as a universal solution.",
        ],
      },
    ],

    highlights: [
      "Personalized yoga practices",
      "Movement and mobility",
      "Strength and balance",
      "Breathing practices",
      "Mind-body awareness",
    ],

    whoMayBenefit: [
      "People interested in personalized yoga practices",
      "People wanting to improve movement and mobility",
      "People looking for an appropriate movement routine",
      "People interested in breathing and relaxation practices",
      "People wanting a more individualized yoga approach",
    ],

    faqs: [
      {
        question: "What is therapeutic yoga?",
        answer:
          "Therapeutic yoga is an individualized approach that uses appropriately selected yoga practices according to a person's needs, abilities and goals.",
      },
      {
        question: "How is therapeutic yoga different from regular yoga?",
        answer:
          "Therapeutic yoga places greater emphasis on individual needs and appropriate adaptation rather than following the same practice for everyone.",
      },
      {
        question: "Can therapeutic yoga be personalized?",
        answer:
          "Yes. Practices can be adapted according to individual abilities, movement needs, goals and relevant health circumstances.",
      },
      {
        question: "Can therapeutic yoga support mobility?",
        answer:
          "Appropriately selected practices may support movement, mobility, balance and body awareness. Suitability depends on the individual.",
      },
      {
        question: "Can therapeutic yoga include breathing practices?",
        answer:
          "Yes. Breathing practices may form part of an individualized yoga approach when appropriate.",
      },
      {
        question: "Can therapeutic yoga help with relaxation?",
        answer:
          "Relaxation and mindfulness practices can be included where appropriate as part of a broader mind-body approach.",
      },
      {
        question: "Do I need previous yoga experience?",
        answer:
          "Not necessarily. The appropriate practice can be adapted to the individual's experience, abilities and goals.",
      },
      {
        question: "Can people with health conditions do therapeutic yoga?",
        answer:
          "Some people with health conditions may be able to participate in appropriately adapted practices. Suitability should be considered according to the individual's health and circumstances.",
      },
      {
        question: "Can therapeutic yoga replace medical treatment?",
        answer:
          "No. Therapeutic yoga should not be considered a replacement for appropriate medical evaluation or prescribed treatment.",
      },
      {
        question: "How do I know which yoga practices are suitable for me?",
        answer:
          "An individualized assessment can help determine which practices may be appropriate based on your abilities, health circumstances and goals.",
      },
    ],

    relatedServices: [
      "lifestyle-medicine",
      "meditation-stress-support",
      "nutrition-counselling",
    ],

    relatedConditions: [
      "arthritis-joint-pain",
      "migraine-headache",
      "weight-management",
    ],
  },

  {
    slug: "nutrition-counselling",

    title: "Nutrition Counselling",

    shortDescription:
      "Practical nutrition guidance designed around your needs, preferences, health goals and everyday routine.",

    introduction:
      "Nutrition counselling can help you understand your eating patterns and develop practical habits that fit your lifestyle and health goals. Rather than relying on a rigid diet plan, the focus can be on realistic and sustainable changes.",

    sections: [
      {
        title: "What is Nutrition Counselling?",
        paragraphs: [
          "Nutrition counselling is a personalized process that looks at eating patterns, food choices, routines, preferences and relevant health goals. It can help make nutrition information easier to understand and apply in everyday life.",
          "The approach should be practical and individualized. Eating habits are influenced by many factors, including culture, schedule, preferences, access to food and lifestyle.",
        ],
      },
      {
        title: "Making Nutrition Practical",
        paragraphs: [
          "Healthy eating does not have to mean following an unnecessarily complicated or restrictive plan. Practical nutrition guidance can focus on changes that fit the person's routine and can be maintained over time.",
          "The priorities will depend on individual circumstances. Nutrition counselling may therefore look different for someone focused on weight management compared with someone focused on digestive wellbeing or general health.",
        ],
      },
      {
        title: "Nutrition as Part of a Broader Approach",
        paragraphs: [
          "Nutrition is one part of overall health. Eating habits can be considered alongside physical activity, sleep, stress and other lifestyle factors.",
          "At Sutra Health, nutrition counselling can therefore form part of a broader lifestyle approach when appropriate.",
        ],
      },
    ],

    highlights: [
      "Personalized nutrition guidance",
      "Everyday eating habits",
      "Practical food choices",
      "Sustainable changes",
      "Health-focused nutrition",
    ],

    whoMayBenefit: [
      "People wanting practical nutrition guidance",
      "People looking to improve everyday eating habits",
      "People interested in healthier food choices",
      "People working toward lifestyle-related health goals",
      "People wanting sustainable rather than restrictive changes",
    ],

    faqs: [
      {
        question: "What is nutrition counselling?",
        answer:
          "Nutrition counselling is personalized guidance that considers eating patterns, preferences, routines and health goals to help identify practical nutrition changes.",
      },
      {
        question: "Is nutrition counselling the same as following a diet?",
        answer:
          "Not necessarily. Nutrition counselling can focus on sustainable eating habits and practical changes rather than a rigid or restrictive diet.",
      },
      {
        question: "Can nutrition counselling help with weight management?",
        answer:
          "Nutrition can be an important part of healthy weight management. Guidance should be personalized around individual health, preferences and goals.",
      },
      {
        question: "Can nutrition counselling help with digestive health?",
        answer:
          "Nutrition and eating patterns may be considered when digestive wellbeing is relevant. Persistent or concerning digestive symptoms should receive appropriate medical evaluation.",
      },
      {
        question: "Will I receive a personalized nutrition plan?",
        answer:
          "The type of guidance depends on your individual needs, circumstances and health goals. A consultation can help determine what approach is appropriate.",
      },
      {
        question: "Does nutrition counselling require strict food restrictions?",
        answer:
          "Not necessarily. The focus can be on practical and sustainable changes that fit your individual routine and circumstances.",
      },
      {
        question: "Can nutrition counselling be combined with lifestyle medicine?",
        answer:
          "Yes. Nutrition can form part of a broader lifestyle approach that also considers movement, sleep, stress and other everyday habits.",
      },
      {
        question: "Can nutrition counselling support metabolic health?",
        answer:
          "Nutrition may be one part of a broader approach to metabolic wellbeing. Individual recommendations depend on health circumstances and goals.",
      },
      {
        question: "Can nutrition counselling replace medical treatment?",
        answer:
          "No. Nutrition guidance should not replace appropriate medical evaluation or treatment when these are required.",
      },
      {
        question: "How do I start nutrition counselling?",
        answer:
          "You can begin by discussing your health goals, eating patterns, preferences and concerns during a consultation.",
      },
    ],

    relatedServices: [
      "lifestyle-medicine",
      "integrative-medicine",
      "health-assessment",
    ],

    relatedConditions: [
      "weight-management",
      "metabolic-health",
      "digestive-gut-health",
    ],
  },

  {
    slug: "meditation-stress-support",

    title: "Meditation & Stress Support",

    shortDescription:
      "Mindfulness, breathing and relaxation practices that can become part of a healthier and more sustainable daily routine.",

    introduction:
      "Stress is part of everyday life, but ongoing stress can affect routines, sleep, activity and overall wellbeing. Meditation, mindfulness, breathing and relaxation practices can be incorporated into daily life according to individual needs and preferences.",

    sections: [
      {
        title: "Understanding Stress and Wellbeing",
        paragraphs: [
          "Stress can affect different aspects of everyday life. It may influence sleep, concentration, routines, physical activity and how easily a person maintains healthy habits.",
          "A lifestyle approach to stress focuses on practical strategies that can fit into everyday life rather than expecting people to completely remove stress from their lives.",
        ],
      },
      {
        title: "Meditation and Mindfulness",
        paragraphs: [
          "Meditation and mindfulness practices can help develop greater awareness of thoughts, breathing and everyday experiences. Different practices may suit different people.",
          "The aim is to find practices that are practical and sustainable rather than adding another source of pressure to an already busy routine.",
        ],
      },
      {
        title: "Breathing and Relaxation",
        paragraphs: [
          "Breathing and relaxation practices can form part of a broader approach to wellbeing. They may be incorporated into daily routines according to individual preferences and circumstances.",
          "These practices are supportive lifestyle tools and should not be presented as replacements for appropriate professional care when someone is experiencing significant mental or physical health concerns.",
        ],
      },
    ],

    highlights: [
      "Mindfulness practices",
      "Meditation",
      "Relaxation",
      "Breath awareness",
      "Healthy routines",
    ],

    whoMayBenefit: [
      "People looking for practical stress-management strategies",
      "People interested in mindfulness",
      "People wanting to explore meditation",
      "People interested in breathing and relaxation practices",
      "People wanting healthier daily routines",
    ],

    faqs: [
      {
        question: "What is meditation and stress support?",
        answer:
          "It is a lifestyle-focused approach that may include meditation, mindfulness, breathing and relaxation practices according to individual needs and preferences.",
      },
      {
        question: "Can meditation help with stress?",
        answer:
          "Meditation and mindfulness may be useful supportive practices for some people as part of a broader approach to stress management and wellbeing.",
      },
      {
        question: "What is mindfulness?",
        answer:
          "Mindfulness involves developing awareness of present experiences, including thoughts, feelings, breathing and surroundings, without automatically reacting to them.",
      },
      {
        question: "Can breathing practices be part of stress support?",
        answer:
          "Appropriate breathing practices can be included as part of relaxation and stress-management support.",
      },
      {
        question: "How often should I meditate?",
        answer:
          "There is no single schedule that suits everyone. A sustainable routine that fits your circumstances may be more useful than an unrealistic target.",
      },
      {
        question: "Can meditation support better sleep routines?",
        answer:
          "Relaxation and mindfulness practices may be included as part of a broader healthy sleep routine, although they are not a guaranteed treatment for sleep problems.",
      },
      {
        question: "Can yoga and meditation be combined?",
        answer:
          "Yes. Yoga, breathing, mindfulness and meditation can be considered together when appropriate as part of a broader mind-body approach.",
      },
      {
        question: "Is meditation a replacement for mental healthcare?",
        answer:
          "No. Meditation and lifestyle practices should not replace appropriate professional mental healthcare when it is needed.",
      },
      {
        question: "Is meditation suitable for everyone?",
        answer:
          "Different practices can affect people differently. An appropriate approach should consider individual circumstances and needs.",
      },
      {
        question: "How can I start stress-support practices?",
        answer:
          "A consultation can help identify practical breathing, mindfulness, meditation or relaxation practices that may fit your routine and goals.",
      },
    ],

    relatedServices: [
      "therapeutic-yoga",
      "lifestyle-medicine",
      "nutrition-counselling",
    ],

    relatedConditions: [
      "migraine-headache",
      "high-blood-pressure",
      "womens-health",
    ],
  },

  {
    slug: "health-assessment",

    title: "21-Point Health Assessment",

    shortDescription:
      "A structured assessment designed to help understand different aspects of health, lifestyle and everyday wellbeing.",

    introduction:
      "The 21-point health assessment provides a structured starting point for understanding relevant aspects of an individual's health and lifestyle. It can help identify areas that may benefit from greater attention and support a more personalized discussion about health goals.",

    sections: [
      {
        title: "What is the 21-Point Health Assessment?",
        paragraphs: [
          "The 21-point health assessment provides a structured way of looking at different aspects of everyday health and lifestyle. Instead of focusing on one area alone, the assessment can encourage a broader conversation about habits, wellbeing and health goals.",
          "It is intended as a starting point for understanding areas that may require attention and for discussing practical next steps.",
        ],
      },
      {
        title: "Looking at Different Areas of Health",
        paragraphs: [
          "Health is influenced by multiple connected factors. Nutrition, movement, sleep, stress and other lifestyle habits can all be relevant when considering overall wellbeing.",
          "A structured assessment can make these areas easier to discuss and can help identify priorities for further lifestyle guidance.",
        ],
      },
      {
        title: "From Assessment to Action",
        paragraphs: [
          "An assessment is most useful when it leads to practical understanding. Depending on the individual's needs, the next step may involve lifestyle guidance, nutrition counselling, movement practices, therapeutic yoga or other appropriate support.",
          "The assessment does not replace medical diagnosis or a comprehensive medical examination where these are required.",
        ],
      },
    ],

    highlights: [
      "Structured assessment",
      "Lifestyle review",
      "Health and wellbeing",
      "Personalized discussion",
      "Next-step guidance",
    ],

    whoMayBenefit: [
      "People wanting a broader look at their lifestyle",
      "People unsure which health areas to prioritize",
      "People interested in understanding their current habits",
      "People wanting to identify practical areas for improvement",
      "People looking for a starting point for lifestyle-focused support",
    ],

    faqs: [
      {
        question: "What is the 21-Point Health Assessment?",
        answer:
          "It is a structured assessment designed to help understand different relevant aspects of health, lifestyle and everyday wellbeing.",
      },
      {
        question: "What does the 21-point assessment look at?",
        answer:
          "The assessment provides a structured way to discuss relevant areas of health and lifestyle. The specific discussion depends on the individual's circumstances and goals.",
      },
      {
        question: "Why have a health assessment?",
        answer:
          "An assessment can provide a structured starting point for understanding current lifestyle patterns and identifying areas that may benefit from greater attention.",
      },
      {
        question: "Is the 21-point assessment a medical diagnosis?",
        answer:
          "No. A lifestyle assessment does not replace appropriate medical evaluation, diagnosis or treatment.",
      },
      {
        question: "What happens after the assessment?",
        answer:
          "Depending on the findings and discussion, appropriate next steps may include lifestyle guidance, nutrition counselling, movement, therapeutic yoga or other relevant support.",
      },
      {
        question: "Can the assessment help with lifestyle changes?",
        answer:
          "It can help identify areas of lifestyle that may be relevant to your health goals and provide a basis for discussing practical changes.",
      },
      {
        question: "Can the assessment be personalized?",
        answer:
          "Yes. The discussion can take individual health circumstances, lifestyle patterns and goals into account.",
      },
      {
        question: "Can the assessment be combined with other Sutra Health services?",
        answer:
          "Yes. Depending on individual needs, assessment findings may help guide further lifestyle, nutrition, movement or mind-body support.",
      },
      {
        question: "Do I need to prepare before the assessment?",
        answer:
          "Any preparation depends on the nature of your appointment. You can discuss your health concerns, lifestyle habits and goals during the consultation.",
      },
      {
        question: "Who should consider a 21-point health assessment?",
        answer:
          "It may be useful for people who want a structured starting point for understanding their lifestyle and identifying areas to focus on.",
      },
    ],

    relatedServices: [
      "lifestyle-medicine",
      "integrative-medicine",
      "nutrition-counselling",
    ],

    relatedConditions: [
      "weight-management",
      "metabolic-health",
      "digestive-gut-health",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}