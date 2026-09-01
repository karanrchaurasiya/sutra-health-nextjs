export interface ConditionSection {
  title: string;
  content: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Condition {
  slug: string;
  title: string;
  shortDescription: string;
  introduction: string;

  concerns: string[];

  sections: ConditionSection[];

  lifestyleFactors?: {
    title: string;
    description: string;
  }[];

  approach: string[];

  support: string[];

  faqs: {
    question: string;
    answer: string;
  }[];

  relatedConditions: string[];
}

export const conditions: Condition[] = [
  {
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
      {
        question: "How long does healthy weight management take?",
        answer:
          "There is no single timeline that applies to everyone. Sustainable change generally depends on individual circumstances, health goals and the ability to maintain healthy habits over time.",
      },
      {
        question: "Does Sutra Health provide personalized weight management support?",
        answer:
          "Yes. Sutra Health can consider nutrition, lifestyle, movement, sleep, stress and other relevant factors when developing personalized support around your health goals.",
      },
      {
        question:
          "Can lifestyle support replace medical treatment for weight-related conditions?",
        answer:
          "Lifestyle support should not automatically replace medical treatment. If you have a medical condition or take prescribed medication, treatment decisions should be discussed with your healthcare professional.",
      },
    ],

    relatedConditions: [
      "metabolic-health",
      "high-blood-pressure",
      "digestive-gut-health",
    ],
  },

  {
    slug: "metabolic-health",

    title: "Metabolic Health",

    shortDescription:
      "Lifestyle-focused support for healthier metabolic wellbeing through nutrition, movement, weight management and sustainable daily habits.",

    introduction:
      "Metabolic health is connected with several aspects of everyday lifestyle, including nutrition, physical activity, body weight, sleep and stress. At Sutra Health, these factors are considered together to develop practical lifestyle strategies around your individual health goals.",

    concerns: [
      "Concerns about metabolic health",
      "Lifestyle-related health risk factors",
      "Difficulty maintaining healthy routines",
      "Weight management challenges",
      "Questions about nutrition and physical activity",
      "Concerns about long-term lifestyle habits",
    ],

    sections: [
      {
        title: "Understanding Metabolic Health",
        content: [
          "Metabolic health broadly relates to how the body manages important processes involved in energy use and overall health. Everyday lifestyle factors can be relevant to metabolic wellbeing.",
          "Nutrition, physical activity, body weight, sleep, stress and daily routines can therefore be considered together rather than treating them as completely separate areas.",
        ],
      },
      {
        title: "Nutrition and Metabolic Wellbeing",
        content: [
          "Eating patterns are an important part of overall metabolic health. Personalized nutrition guidance can help identify practical changes that fit your preferences, routine and health goals.",
          "The focus is on sustainable habits rather than short-term restrictive approaches.",
        ],
      },
      {
        title: "Physical Activity and Movement",
        content: [
          "Regular physical activity is an important component of a healthy lifestyle. Appropriate movement can be incorporated according to individual health, abilities and circumstances.",
          "Movement may include everyday activity, structured exercise or suitable therapeutic yoga practices.",
        ],
      },
      {
        title: "Weight and Metabolic Health",
        content: [
          "Weight-related goals can sometimes be relevant to metabolic wellbeing. However, weight should be considered within the broader context of nutrition, movement, sleep, stress and individual health rather than in isolation.",
        ],
      },
      {
        title: "Sleep and Stress",
        content: [
          "Sleep and stress management are important components of overall wellbeing. They can be considered alongside nutrition and physical activity when creating a sustainable lifestyle plan.",
          "Practical approaches may include improving routines, relaxation, breathing and mindfulness practices where appropriate.",
        ],
      },
      {
        title: "How Sutra Health Can Support Metabolic Health",
        content: [
          "Sutra Health can help you explore lifestyle factors that may be relevant to your health goals. Support may include lifestyle assessment, nutrition guidance, movement planning and healthy routine development.",
          "Lifestyle support does not replace appropriate medical assessment or treatment when these are required.",
        ],
      },
    ],

    approach: [
      "Nutrition",
      "Physical activity",
      "Weight management",
      "Sleep",
      "Stress management",
    ],

    support: [
      "Lifestyle assessment",
      "Personalized nutrition guidance",
      "Movement and activity planning",
      "Weight-management support",
      "Breath and stress-management practices",
    ],

    faqs: [
      {
        question: "What is metabolic health?",
        answer:
          "Metabolic health broadly relates to how well important metabolic processes are functioning. Nutrition, physical activity, body weight, sleep and other lifestyle factors can all be relevant to overall metabolic wellbeing.",
      },
      {
        question: "Why is lifestyle important for metabolic health?",
        answer:
          "Everyday behaviours such as eating patterns, physical activity, sleep and stress management can influence overall health. A personalized lifestyle approach can help identify practical areas for improvement.",
      },
      {
        question: "Can weight management support metabolic health?",
        answer:
          "Healthy weight-related habits can be one part of a broader approach to metabolic wellbeing. Nutrition, movement, sleep and stress should also be considered where relevant.",
      },
      {
        question: "Can nutrition counselling help with metabolic health?",
        answer:
          "Personalized nutrition guidance can help you review eating patterns and develop practical habits that fit your individual health goals and everyday routine.",
      },
      {
        question: "Does physical activity help metabolic wellbeing?",
        answer:
          "Regular and appropriate physical activity is an important part of a healthy lifestyle. The most suitable activity depends on individual health, abilities and circumstances.",
      },
      {
        question: "How does sleep relate to metabolic health?",
        answer:
          "Sleep is an important component of overall health. Healthy sleep routines can therefore be considered alongside nutrition, activity and other lifestyle factors.",
      },
      {
        question: "Can stress management be part of metabolic health support?",
        answer:
          "Yes. Stress management may be included as part of a broader lifestyle approach, particularly when stress is affecting sleep, routines, activity or other aspects of daily life.",
      },
      {
        question: "What does a metabolic health consultation involve?",
        answer:
          "A consultation can focus on understanding your health goals, lifestyle patterns and relevant concerns before identifying practical areas where lifestyle changes may be appropriate.",
      },
      {
        question: "Does Sutra Health diagnose metabolic conditions?",
        answer:
          "Lifestyle support does not replace appropriate medical assessment or diagnosis. Medical concerns should be evaluated by a qualified healthcare professional.",
      },
      {
        question: "Can metabolic health improve through sustainable habits?",
        answer:
          "Healthy habits around nutrition, movement, sleep, stress and daily routines can contribute to overall wellbeing. The appropriate changes depend on your individual circumstances.",
      },
    ],

    relatedConditions: [
      "weight-management",
      "high-blood-pressure",
      "digestive-gut-health",
    ],
  },

  {
    slug: "high-blood-pressure",

    title: "High Blood Pressure",

    shortDescription:
      "Lifestyle-focused support that complements appropriate medical care through nutrition, movement, stress management and healthy daily routines.",

    introduction:
      "High blood pressure is an important health concern that may require medical evaluation and treatment. Alongside appropriate healthcare, lifestyle factors such as nutrition, physical activity, sleep, stress and daily habits can be important areas to address. Sutra Health focuses on practical lifestyle support tailored to individual needs.",

    concerns: [
      "High blood pressure",
      "Lifestyle risk factors",
      "Difficulty maintaining healthy routines",
      "Questions about nutrition and activity",
      "Stress and sleep concerns",
      "Interest in healthier daily habits",
    ],

    sections: [
      {
        title: "Understanding High Blood Pressure",
        content: [
          "High blood pressure is a common health concern that should be appropriately assessed and managed. Medical treatment may be necessary depending on an individual's circumstances.",
          "Lifestyle habits can form part of a broader approach to cardiovascular wellbeing and may be considered alongside appropriate medical care.",
        ],
      },
      {
        title: "Nutrition and Blood Pressure",
        content: [
          "Nutrition is one area that can be considered when supporting cardiovascular wellbeing. Personalized nutrition counselling can help you review eating patterns and identify practical changes that fit your lifestyle and health needs.",
        ],
      },
      {
        title: "Movement and Physical Activity",
        content: [
          "Appropriate physical activity can be part of a healthy lifestyle. The type, frequency and intensity of movement should be suitable for the individual's health and circumstances.",
          "Where appropriate, movement and therapeutic yoga can be incorporated into a personalized lifestyle plan.",
        ],
      },
      {
        title: "Stress Management and Relaxation",
        content: [
          "Stress can affect wellbeing and everyday routines. Stress-management strategies may therefore be included as part of a broader lifestyle approach.",
          "Breathing, relaxation and mindfulness practices can be considered where appropriate.",
        ],
      },
      {
        title: "Sleep and Healthy Daily Routines",
        content: [
          "Healthy sleep and consistent daily routines are important components of overall wellbeing. These areas can be reviewed alongside nutrition, movement and stress management.",
        ],
      },
      {
        title: "Lifestyle Support Alongside Medical Care",
        content: [
          "Lifestyle support should complement, rather than replace, appropriate medical evaluation and treatment for high blood pressure.",
          "Prescribed medication should not be stopped or changed without discussing the decision with your healthcare professional.",
        ],
      },
    ],

    approach: [
      "Nutrition",
      "Movement",
      "Stress management",
      "Sleep",
      "Healthy daily routines",
    ],

    support: [
      "Lifestyle assessment",
      "Nutrition counselling",
      "Appropriate movement guidance",
      "Stress-management practices",
      "Breath and relaxation practices",
    ],

    faqs: [
      {
        question: "Can lifestyle changes support healthy blood pressure?",
        answer:
          "Healthy lifestyle habits can be an important part of cardiovascular wellbeing. Nutrition, physical activity, weight management, sleep and stress management may all be considered alongside appropriate medical care.",
      },
      {
        question: "Can nutrition counselling help with high blood pressure?",
        answer:
          "Personalized nutrition guidance can help you understand practical eating habits that support overall cardiovascular health. Individual recommendations should take your health circumstances into account.",
      },
      {
        question: "Can exercise be included when managing high blood pressure?",
        answer:
          "Appropriate physical activity may be included as part of a healthy lifestyle. The type and intensity should be suitable for your individual health and circumstances.",
      },
      {
        question: "Can yoga be part of a lifestyle approach to blood pressure?",
        answer:
          "Appropriately adapted yoga may be included as part of an individualized lifestyle plan. Suitability for specific practices should be assessed according to your health.",
      },
      {
        question: "Can stress affect blood pressure?",
        answer:
          "Stress can affect overall wellbeing and daily habits. Stress-management and relaxation practices may therefore be considered as part of a broader lifestyle approach.",
      },
      {
        question: "Is sleep important for cardiovascular health?",
        answer:
          "Healthy sleep is an important part of overall wellbeing. Sleep routines may therefore be considered when developing a comprehensive lifestyle plan.",
      },
      {
        question: "Can weight management be relevant to blood pressure?",
        answer:
          "Weight-related lifestyle habits can be relevant to cardiovascular wellbeing. Nutrition, movement and other healthy lifestyle factors may be considered together.",
      },
      {
        question:
          "Should I stop my blood pressure medication if I change my lifestyle?",
        answer:
          "No. You should not stop or change prescribed medication without discussing it with your healthcare professional.",
      },
      {
        question: "Does Sutra Health replace medical treatment for hypertension?",
        answer:
          "No. Lifestyle support is intended to complement appropriate healthcare and should not be considered a replacement for medical evaluation or prescribed treatment.",
      },
      {
        question: "When should high blood pressure be medically evaluated?",
        answer:
          "High blood pressure should be appropriately assessed and managed with qualified healthcare support. Seek urgent medical attention for severe or concerning symptoms.",
      },
    ],

    relatedConditions: [
      "metabolic-health",
      "weight-management",
      "arthritis-joint-pain",
    ],
  },

  {
    slug: "arthritis-joint-pain",

    title: "Arthritis & Joint Pain",

    shortDescription:
      "Personalized lifestyle and movement support focused on mobility, physical activity and everyday joint wellbeing.",

    introduction:
      "Joint discomfort can affect movement, physical activity and everyday life. Depending on the underlying condition, different approaches may be appropriate. Sutra Health considers movement, activity, weight-related factors, lifestyle habits and relaxation as part of a personalized approach to supporting everyday wellbeing.",

    concerns: [
      "Joint discomfort",
      "Difficulty with movement",
      "Reduced physical activity",
      "Stiffness affecting everyday activities",
      "Challenges maintaining an active routine",
      "Lifestyle concerns related to joint wellbeing",
    ],

    sections: [
      {
        title: "Understanding Joint Pain and Arthritis",
        content: [
          "Joint pain can have many different causes, and the appropriate approach depends on the underlying condition. Symptoms can affect movement, physical activity and everyday routines.",
          "A whole-person lifestyle approach can consider movement, physical activity, healthy routines, weight-related goals and relaxation while recognizing the importance of appropriate medical assessment.",
        ],
      },
      {
        title: "Movement and Mobility",
        content: [
          "Maintaining appropriate movement can support physical wellbeing. The type and amount of activity should be adapted according to individual abilities, symptoms and healthcare guidance.",
          "A sustainable movement routine can be more useful than an approach that is difficult to maintain.",
        ],
      },
      {
        title: "Therapeutic Yoga",
        content: [
          "Therapeutic yoga may be adapted to support mobility, strength, balance and body awareness for appropriate individuals.",
          "Yoga practices should be selected according to individual movement limitations, health circumstances and goals.",
        ],
      },
      {
        title: "Healthy Lifestyle and Weight",
        content: [
          "Healthy lifestyle habits can support overall physical wellbeing. Where relevant, nutrition and weight-management goals can be considered as part of a broader lifestyle plan.",
        ],
      },
      {
        title: "Relaxation and Mind",
        content: [
          "Stress and overall wellbeing can influence how people experience discomfort. Breathing, relaxation and mindfulness practices may therefore be considered as supportive lifestyle practices.",
        ],
      },
      {
        title: "How Sutra Health Can Support Joint Wellbeing",
        content: [
          "Support may include therapeutic yoga, movement guidance, lifestyle advice, nutrition guidance where appropriate, and breath or relaxation practices.",
          "Persistent, severe, worsening or unexplained joint symptoms should be appropriately evaluated by a healthcare professional.",
        ],
      },
    ],

    approach: [
      "Movement",
      "Therapeutic yoga",
      "Weight management",
      "Lifestyle habits",
      "Mind and relaxation",
    ],

    support: [
      "Lifestyle guidance",
      "Therapeutic yoga",
      "Movement practices",
      "Nutrition guidance where appropriate",
      "Breath and relaxation practices",
    ],

    faqs: [
      {
        question: "Can lifestyle changes support joint health?",
        answer:
          "Movement, physical activity, healthy routines and other lifestyle factors can contribute to overall physical wellbeing. The appropriate approach depends on the underlying cause of joint symptoms.",
      },
      {
        question: "Can yoga help with joint mobility?",
        answer:
          "Appropriately adapted yoga may support mobility, strength, balance and body awareness for some people. Practices should be selected according to individual needs and limitations.",
      },
      {
        question: "Should I exercise if I have joint pain?",
        answer:
          "The appropriate type and amount of activity depends on the underlying condition and individual circumstances. Persistent or worsening pain should be evaluated by an appropriate healthcare professional.",
      },
      {
        question: "Can weight management be relevant to joint wellbeing?",
        answer:
          "Healthy weight-related habits can be considered as part of a broader approach to physical wellbeing, particularly when weight is relevant to an individual's health goals.",
      },
      {
        question: "What type of movement is suitable for joint pain?",
        answer:
          "There is no single activity that is appropriate for everyone. Movement should be selected according to the individual's condition, mobility, fitness and healthcare guidance.",
      },
      {
        question: "Can therapeutic yoga be personalized?",
        answer:
          "Yes. Therapeutic yoga can be adapted around individual abilities, movement limitations and wellbeing goals when appropriate.",
      },
      {
        question: "Can stress and relaxation affect how I experience pain?",
        answer:
          "Stress and overall wellbeing can influence how some people experience discomfort. Relaxation, breathing and mindfulness practices may therefore be considered as supportive lifestyle practices.",
      },
      {
        question: "Can nutrition be part of a joint-health lifestyle plan?",
        answer:
          "Nutrition can be considered as part of overall health and wellbeing. Personalized guidance should take individual needs, health conditions and goals into account.",
      },
      {
        question: "Does Sutra Health diagnose arthritis?",
        answer:
          "Lifestyle support does not replace medical diagnosis. New, persistent, severe or unexplained joint symptoms should be evaluated by an appropriate healthcare professional.",
      },
      {
        question: "When should joint pain be medically evaluated?",
        answer:
          "Persistent, severe, worsening or unexplained joint pain should be appropriately assessed, particularly when it is associated with significant swelling, injury or loss of function.",
      },
    ],

    relatedConditions: [
      "weight-management",
      "metabolic-health",
      "migraine-headache",
    ],
  },

  {
    slug: "migraine-headache",

    title: "Migraine & Headache",

    shortDescription:
      "Explore lifestyle factors that may influence recurring headaches, routines and overall wellbeing alongside appropriate healthcare.",

    introduction:
      "Headaches and migraine can have different causes and triggers. Lifestyle factors such as sleep patterns, stress, hydration, nutrition and daily routines may be relevant for some people. Sutra Health considers these everyday factors alongside appropriate healthcare and individualized needs.",

    concerns: [
      "Recurring headaches",
      "Migraine-related concerns",
      "Irregular sleep routines",
      "Stress-related challenges",
      "Lifestyle-related triggers",
      "Difficulty maintaining consistent daily routines",
    ],

    sections: [
      {
        title: "Understanding Migraine and Headaches",
        content: [
          "Headaches and migraine can have different causes, patterns and triggers. Recurring or changing headaches should be appropriately assessed rather than assumed to be caused by lifestyle alone.",
          "Lifestyle factors may nevertheless be relevant to some individuals and can be explored alongside appropriate healthcare.",
        ],
      },
      {
        title: "Sleep and Daily Routines",
        content: [
          "Regular sleep routines can be an important part of overall wellbeing. When headaches are recurring, sleep patterns and consistency may be useful areas to discuss with a healthcare professional.",
        ],
      },
      {
        title: "Stress and Relaxation",
        content: [
          "Stress can affect daily routines and overall wellbeing. Relaxation, breathing and mindfulness practices may be included as supportive lifestyle strategies where appropriate.",
        ],
      },
      {
        title: "Nutrition and Hydration",
        content: [
          "Eating patterns and hydration can be reviewed as part of a broader lifestyle assessment. Individual experiences vary, and potential triggers are not the same for everyone.",
          "Personalized guidance should take individual health needs and circumstances into account.",
        ],
      },
      {
        title: "Movement and Yoga",
        content: [
          "Appropriately selected movement and yoga practices may be included in an individualized lifestyle plan. Activities should be suitable for the person's health and current symptoms.",
        ],
      },
      {
        title: "How Sutra Health Can Support You",
        content: [
          "Sutra Health can consider lifestyle routines, nutrition, sleep, stress, breathing and mindfulness as part of personalized support.",
          "Lifestyle support does not replace medical diagnosis or treatment for migraine or other headache conditions.",
        ],
      },
    ],

    approach: [
      "Sleep routines",
      "Stress management",
      "Breathing practices",
      "Nutrition",
      "Lifestyle habits",
    ],

    support: [
      "Lifestyle assessment",
      "Nutrition guidance",
      "Sleep-routine support",
      "Breath practices",
      "Mindfulness and relaxation",
    ],

    faqs: [
      {
        question: "Can lifestyle factors affect headaches or migraine?",
        answer:
          "Some people may notice associations between headaches and factors such as sleep, stress, food patterns or daily routines. Individual experiences vary, so recurring headaches should be appropriately evaluated.",
      },
      {
        question: "Can stress management help with headaches?",
        answer:
          "Stress-management and relaxation practices may be included as part of a broader lifestyle approach when appropriate.",
      },
      {
        question: "Can sleep routines be important for recurring headaches?",
        answer:
          "Regular sleep routines can be relevant to overall wellbeing and may be worth considering when headaches are recurring.",
      },
      {
        question: "Can nutrition be considered when managing migraine?",
        answer:
          "Nutrition and eating patterns may be reviewed as part of a broader lifestyle assessment. Individual triggers and dietary needs vary.",
      },
      {
        question: "Can breathing practices be part of migraine support?",
        answer:
          "Appropriate breathing and relaxation practices may be included as supportive lifestyle strategies depending on individual needs.",
      },
      {
        question: "Can hydration and daily routines matter for headaches?",
        answer:
          "Consistent daily routines can be relevant to overall wellbeing. Individual headache triggers vary, so persistent symptoms should be appropriately evaluated.",
      },
      {
        question: "Can yoga be included in a lifestyle plan for headaches?",
        answer:
          "Appropriately selected yoga and relaxation practices may be included as part of an individualized lifestyle approach.",
      },
      {
        question: "Does Sutra Health diagnose migraine?",
        answer:
          "Lifestyle support does not replace appropriate medical diagnosis. Recurring, severe or changing headaches should be assessed by a qualified healthcare professional.",
      },
      {
        question: "When should a headache be medically evaluated?",
        answer:
          "A sudden, severe, unusual or rapidly worsening headache requires appropriate medical attention. Persistent or recurring headaches should also be discussed with a healthcare professional.",
      },
      {
        question: "Can lifestyle changes completely prevent migraine?",
        answer:
          "There is no guarantee that lifestyle changes will prevent migraine. Lifestyle strategies may support overall wellbeing and may be relevant to individual triggers, but migraine care should be personalized.",
      },
    ],

    relatedConditions: [
      "digestive-gut-health",
      "womens-health",
      "high-blood-pressure",
    ],
  },

  {
    slug: "digestive-gut-health",

    title: "Digestive & Gut Health",

    shortDescription:
      "Personalized lifestyle and nutrition support for digestive wellbeing, healthy routines and sustainable everyday habits.",

    introduction:
      "Digestive wellbeing can be influenced by eating patterns, daily routines, physical activity, stress and other lifestyle factors. Sutra Health takes a whole-person approach to understanding these areas and identifying practical changes that may support healthier everyday habits.",

    concerns: [
      "Digestive discomfort",
      "Irregular eating or daily routines",
      "Nutrition-related concerns",
      "Stress and digestive wellbeing",
      "Low physical activity",
      "Questions about healthy eating habits",
    ],

    sections: [
      {
        title: "Understanding Digestive and Gut Health",
        content: [
          "Digestive wellbeing is connected with many aspects of everyday life. Eating patterns, daily routines, movement, stress and other lifestyle factors may all be relevant.",
          "Persistent or concerning digestive symptoms can have many different causes and should be appropriately assessed by a healthcare professional.",
        ],
      },
      {
        title: "Nutrition and Digestive Wellbeing",
        content: [
          "Nutrition is an important area to consider when supporting digestive wellbeing. Personalized nutrition counselling can help review eating patterns, preferences and routines.",
          "The goal is to identify practical habits that are suitable for the individual rather than applying the same dietary approach to everyone.",
        ],
      },
      {
        title: "Daily Routines",
        content: [
          "Consistent daily routines can support overall wellbeing. Meal patterns, activity and other everyday habits can be reviewed when developing a personalized lifestyle plan.",
        ],
      },
      {
        title: "Movement and Physical Activity",
        content: [
          "Appropriate regular movement can be part of a healthy lifestyle and overall wellbeing. Activity should be suited to individual health, abilities and circumstances.",
        ],
      },
      {
        title: "Stress, Breath and Mindfulness",
        content: [
          "Stress can be relevant to how some people experience digestive symptoms and overall wellbeing. Breathing, relaxation and mindfulness practices may therefore be considered as supportive lifestyle strategies.",
        ],
      },
      {
        title: "How Sutra Health Can Support Digestive Wellbeing",
        content: [
          "Sutra Health can consider nutrition, routines, movement, stress and other lifestyle factors when developing personalized support around digestive wellbeing.",
          "Lifestyle support should not be used as a substitute for medical evaluation when symptoms are persistent, severe or concerning.",
        ],
      },
    ],

    approach: [
      "Nutrition",
      "Lifestyle routines",
      "Movement",
      "Stress management",
      "Mindfulness",
    ],

    support: [
      "Nutrition counselling",
      "Lifestyle assessment",
      "Healthy routine planning",
      "Movement guidance",
      "Breath and mindfulness practices",
    ],

    faqs: [
      {
        question: "How can lifestyle affect digestive wellbeing?",
        answer:
          "Eating patterns, daily routines, physical activity and stress can all be relevant to digestive wellbeing. Individual experiences vary and persistent symptoms may require medical evaluation.",
      },
      {
        question: "Can nutrition counselling help with digestive health?",
        answer:
          "Personalized nutrition counselling can help review eating patterns and develop practical habits suited to individual needs and health goals.",
      },
      {
        question: "Can stress affect digestive wellbeing?",
        answer:
          "Stress can be relevant to how some people experience digestive symptoms. Stress-management and relaxation practices may therefore be considered as part of a broader lifestyle approach.",
      },
      {
        question: "Can irregular eating routines affect digestion?",
        answer:
          "Daily eating patterns and routines can be relevant to digestive wellbeing. Individual responses vary, so persistent symptoms should be assessed appropriately.",
      },
      {
        question: "Can physical activity support digestive wellbeing?",
        answer:
          "Appropriate regular movement can be part of a healthy lifestyle and overall wellbeing. Activity should be suited to individual health and abilities.",
      },
      {
        question: "Can mindfulness be part of digestive health support?",
        answer:
          "Mindfulness, breathing and relaxation practices may be included as supportive lifestyle strategies, particularly when stress is relevant to an individual's wellbeing.",
      },
      {
        question: "What does nutrition counselling for digestive health involve?",
        answer:
          "Nutrition counselling can involve reviewing eating patterns, preferences, routines and individual health goals before identifying practical changes that may be appropriate.",
      },
      {
        question: "Can digestive problems be treated only through lifestyle changes?",
        answer:
          "Not always. Digestive symptoms can have many causes. Persistent, severe or concerning symptoms should be evaluated by an appropriate healthcare professional.",
      },
      {
        question: "When should digestive symptoms be medically evaluated?",
        answer:
          "Persistent, severe, worsening or concerning digestive symptoms should receive appropriate medical evaluation rather than being managed through lifestyle changes alone.",
      },
      {
        question: "Does Sutra Health provide personalized digestive health support?",
        answer:
          "Sutra Health can consider nutrition, routines, movement, stress and other lifestyle factors when developing personalized support around digestive wellbeing.",
      },
    ],

    relatedConditions: [
      "weight-management",
      "metabolic-health",
      "womens-health",
    ],
  },

  {
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

    approach: [
      "Nutrition",
      "Lifestyle",
      "Movement",
      "Sleep",
      "Mind and stress",
    ],

    support: [
      "Personalized lifestyle guidance",
      "Nutrition counselling",
      "Movement and therapeutic yoga",
      "Sleep and recovery support",
      "Breath, mindfulness and stress-management practices",
    ],

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

    relatedConditions: [
      "migraine-headache",
      "digestive-gut-health",
      "weight-management",
    ],
  },
];

export function getCondition(
  slug: string,
): Condition | undefined {
  return conditions.find(
    (condition) => condition.slug === slug,
  );
}