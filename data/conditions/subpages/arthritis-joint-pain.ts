// data/conditions/subpages/arthritis-joint-pain.ts
import type { ConditionSubpage } from "../types";

export const arthritisJointPainSubpages: ConditionSubpage[] = [
  {
    slug: "yoga-poses-for-arthritis",
    parentSlug: "arthritis-joint-pain",
    question: "Which yoga poses help arthritis and joint pain?",
    shortAnswer:
      "Gentle, low-impact poses that build strength around the joint without deep bending or extended weight-bearing tend to help most — including supported chair poses, gentle seated twists, and passive restorative poses. Yin yoga (slow, floor-based, held poses) is generally well-suited for connective tissue flexibility, though it should be avoided during active flare-ups.",
    detail: [
      {
        title: "What generally helps",
        content: [
          "Poses that strengthen the muscles supporting an affected joint — without deep flexion or significant weight-bearing on that joint — are the pattern across most clinical protocols. This includes supported standing poses, gentle seated stretches, and props-assisted variations using chairs, blocks, or straps.",
          "Yin yoga, with its slow, passive, floor-based poses, is often recommended for connective tissue flexibility and stress relief, though it should be paused during active flares and approached cautiously if joints are hypermobile.",
        ],
      },
      {
        title: "Why props and modification matter here more than in general yoga",
        content: [
          "Chair yoga, bolster support, and blocks under the hips or knees aren't a lesser version of the practice for arthritis — they're often exactly what makes a pose safe and effective for an arthritic joint. Modification is the point, not a compromise.",
        ],
      },
    ],
    relatedSubslugs: [
      "yoga-poses-to-avoid-with-arthritis",
      "yoga-for-osteoarthritis-vs-rheumatoid-arthritis",
    ],
  },
  {
    slug: "yoga-poses-to-avoid-with-arthritis",
    parentSlug: "arthritis-joint-pain",
    question: "Which yoga poses should be avoided with arthritis?",
    shortAnswer:
      "Poses requiring deep knee bends past 90 degrees, extended weight-bearing on the wrists (like a full Downward Dog), one-legged balance poses, and intense backbends are generally avoided with arthritic joints. Specific poses commonly flagged include Crane Pose (Bakasana), Bow Pose (Dhanurasana), Plow Pose (Halasana), and Full Lotus (Padmasana).",
    detail: [
      {
        title: "Poses to approach with caution or avoid",
        content: [
          "Crane Pose (Bakasana) — puts significant stress on the wrists and hands.",
          "Bow Pose (Dhanurasana) — requires considerable flexibility and can strain the back and neck.",
          "Plow Pose (Halasana) — puts pressure on the cervical spine and shoulders.",
          "Full Lotus (Padmasana) — requires significant hip, knee, and ankle flexibility that can aggravate joint symptoms.",
          "Deep squats, full weight-bearing Downward Dog, and fast-paced styles like Ashtanga, Power Yoga, or Hot/Bikram Yoga are also generally approached with caution, as heat and pace can both increase strain on affected joints.",
        ],
      },
      {
        title: "The general rule that matters more than any specific list",
        content: [
          "Discomfort is different from pain. Mild discomfort while working within a safe range of motion is normal; if a pose increases symptoms rather than just creating temporary sensation, that's the signal to modify or stop — not push through.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-arthritis"],
  },
  {
    slug: "yoga-for-osteoarthritis-vs-rheumatoid-arthritis",
    parentSlug: "arthritis-joint-pain",
    question: "Does yoga work differently for osteoarthritis versus rheumatoid arthritis?",
    shortAnswer:
      "Yes, and the clinical evidence reflects this. For osteoarthritis, yoga has shown meaningful pain reduction, performing comparably to standard strengthening exercise in a randomized trial. For rheumatoid arthritis, a meta-analysis of 10 trials found yoga improved physical function, disease activity, and grip strength — but did not show a significant effect on pain, joint counts, or inflammation.",
    detail: [
      {
        title: "Why the distinction matters for what to expect",
        content: [
          "Osteoarthritis is primarily a mechanical, wear-related joint condition — yoga's strengthening and alignment benefits map fairly directly onto that. Rheumatoid arthritis is an autoimmune, inflammatory condition — yoga can genuinely help with the functional and quality-of-life impact of living with RA, but it isn't shown to address the underlying inflammatory process the way it can address OA's mechanical factors.",
          "This is also why pose selection differs: holding poses longer builds the static strength useful for osteoarthritis, while rheumatoid arthritis generally calls for shorter holds and avoiding high-intensity postures, particularly during flares.",
        ],
      },
      {
        title: "What this means for your practice",
        content: [
          "If you have osteoarthritis, expect a program built around strengthening and pain reduction for the specific joint involved.",
          "If you have rheumatoid arthritis, expect a program focused on maintaining function, mobility, and quality of life — with realistic expectations about pain and inflammation, and closer coordination with your rheumatologist around flare management.",
        ],
      },
    ],
    relatedSubslugs: ["yoga-poses-for-arthritis", "yoga-poses-to-avoid-with-arthritis"],
  },
];
