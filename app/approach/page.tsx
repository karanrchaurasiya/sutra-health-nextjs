import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import FAQ from "@/components/shared/FAQ";

export const metadata: Metadata = {
  title: "Our Approach | The Sutra Health Method",
  description:
    "Explore the Sutra Health approach to sustainable health through lifestyle, nutrition, therapeutic yoga, breath and mindfulness, and behaviour change.",
  alternates: {
    canonical: "https://lifequality.org.in/approach",
  },
  openGraph: {
    title: "Our Approach | The Sutra Health Method",
    description:
      "Understand how Sutra Health brings lifestyle, nutrition, movement, breath, mindfulness and health education together.",
    url: "https://lifequality.org.in/approach",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const stages = [
  {
    number: "01",
    title: "Understand",
    description: "See the whole picture.",
  },
  {
    number: "02",
    title: "Identify",
    description: "Recognise the patterns.",
  },
  {
    number: "03",
    title: "Personalise",
    description: "Create a plan that fits real life.",
  },
  {
    number: "04",
    title: "Practise",
    description: "Turn understanding into action.",
  },
  {
    number: "05",
    title: "Sustain",
    description: "Build habits, not temporary routines.",
  },
  {
    number: "06",
    title: "Adapt",
    description: "Keep learning and evolving.",
  },
];

const disciplines = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Look at everyday patterns that shape health, including routines, movement, sleep, stress and recovery.",
    href: "/approach/lifestyle",
    linkLabel: "Explore Lifestyle",
  },
  {
    number: "02",
    title: "Nutrition",
    description:
      "Build practical food habits around individual needs, preferences, routines and health goals.",
    href: "/approach/nutrition",
    linkLabel: "Explore Nutrition",
  },
  {
    number: "03",
    title: "Therapeutic Yoga & Movement",
    description:
      "Use appropriately adapted movement and yoga practices to support mobility, body awareness and sustainable activity.",
    href: "/approach/therapeutic-yoga",
    linkLabel: "Explore Yoga & Movement",
  },
  {
    number: "04",
    title: "Breath & Mindfulness",
    description:
      "Create space for breathing, awareness, relaxation and practical approaches to stress and mental wellbeing.",
    href: "/approach/breath-mindfulness",
    linkLabel: "Explore Breath & Mindfulness",
  },
];

const principles = [
  {
    title: "Whole person",
    text: "Health is considered in the context of the person, their everyday life and their goals.",
  },
  {
    title: "Personalised",
    text: "There is no single routine or plan that fits everyone.",
  },
  {
    title: "Practical",
    text: "The focus is on changes that can work within real routines and responsibilities.",
  },
  {
    title: "Sustainable",
    text: "Progress is built through habits that can be practised and adapted over time.",
  },
];


  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "The Sutra Health Method | Sutra Health",
    description:
      "Learn how the Sutra Health Method brings lifestyle medicine, nutrition, therapeutic yoga, breath and mindfulness together through a personalised, practical and sustainable pathway.",
    url: "https://lifequality.org.in/approach",
    isPartOf: {
      "@type": "WebSite",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
    about: {
      "@type": "MedicalSpecialty",
      name: "Lifestyle Medicine",
    },
  };


const approachFAQs = [
  {
    question: "What is the Sutra Health Method?",
    answer:
      "The Sutra Health Method is Sutra Health's whole-person pathway to sustainable health. It brings lifestyle medicine, nutrition, therapeutic yoga and movement, breath and mindfulness, behaviour change and health education into a practical process of understanding, personalisation, practice, sustainability and adaptation.",
  },
  {
    question: "How does the Sutra Health approach work?",
    answer:
      "The approach follows six stages: Understand, Identify, Personalise, Practise, Sustain and Adapt. The aim is to understand the person's health and everyday context, identify relevant patterns, develop practical changes, practise them, sustain useful habits and adapt the approach as circumstances change.",
  },
  {
    question: "Is the Sutra Health approach personalised?",
    answer:
      "Yes. Sutra Health describes its approach as individualised rather than based on one routine for everyone. Recommendations can take account of health concerns, goals, routines, preferences, abilities and practical circumstances.",
  },
  {
    question: "What approaches are included in the Sutra Health Method?",
    answer:
      "The core approaches are lifestyle medicine, nutrition, therapeutic yoga and movement, and breath and mindfulness. These are considered within a wider framework that also includes behaviour change and health education.",
  },
  {
    question: "What is the 21-Point Lifestyle Assessment?",
    answer:
      "The 21-Point Lifestyle Assessment is a structured way to review lifestyle factors and identify areas where practical changes may be useful. It is a lifestyle guidance tool and should not be treated as a substitute for clinical diagnosis.",
  },
  {
    question: "Is the Sutra Health Method a replacement for medical treatment?",
    answer:
      "No. Lifestyle and complementary practices should not be presented as a replacement for appropriate medical diagnosis, medication or treatment. People with health concerns should receive appropriate care from qualified healthcare professionals.",
  },
];

export default function ApproachPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid items-end gap-10 py-14 sm:py-18 lg:grid-cols-[1fr_0.72fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Our Approach
              </p>

              <h1 className="mt-4 max-w-[780px] font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[60px] lg:text-[76px]">
                A different way
                <br />
                to approach{" "}
                <span className="italic text-[#65966F]">health.</span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                The Sutra Health Method brings together lifestyle, nutrition,
                therapeutic yoga, breath, mindfulness, behaviour change and
                health education to help make healthy living practical and
                sustainable.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#method"
                  className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
                >
                  Explore the Method
                  <span aria-hidden="true">↓</span>
                </a>

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-[#F0F4ED]"
                >
                  Book a Consultation
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="border-l border-[#173F35]/10 pl-6 lg:mb-2 lg:pl-8">
              <p className="font-serif text-[30px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[36px]">
                Health changes when everyday life changes.
              </p>
              <p className="mt-5 text-[13px] leading-6 text-[#71817A] sm:text-[14px] sm:leading-7">
                The aim is not to create another short-term routine. It is to
                understand what matters, practise useful changes and keep
                adapting as life changes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          METHOD INTRO
      ================================================== */}
      <section id="method" className="scroll-mt-24 border-b border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The Sutra Health Method
              </p>

              <h2 className="mt-3 max-w-[440px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                Understand the person. Change the patterns.{" "}
                <span className="italic text-[#65966F]">
                  Sustain the change.
                </span>
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The Sutra Health Method is the way Sutra Health approaches
                sustainable health. It starts with understanding the whole
                picture, then moves toward practical changes that can become
                part of everyday life.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The process is not necessarily linear. As circumstances,
                priorities and health goals change, the approach can be
                revisited and adapted.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          SIX STAGES
      ================================================== */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="max-w-[680px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Six stages
              </p>

              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                From understanding to{" "}
                <span className="italic text-[#65966F]">lasting practice.</span>
              </h2>
            </div>

            <div className="mt-10 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
              {stages.map((stage) => (
                <article
                  key={stage.number}
                  className="grid gap-3 py-7 sm:grid-cols-[90px_0.8fr_1.2fr] sm:items-center sm:py-8"
                >
                  <p className="font-serif text-[28px] tracking-[-0.025em] text-[#65966F]">
                    {stage.number}
                  </p>

                  <h3 className="font-serif text-[27px] tracking-[-0.025em] text-[#173F35] sm:text-[32px]">
                    {stage.title}
                  </h3>

                  <p className="text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
                    {stage.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          CORE DISCIPLINES
      ================================================== */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Core disciplines
                </p>

                <h2 className="mt-3 max-w-[430px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                  Different disciplines,{" "}
                  <span className="italic text-[#65966F]">
                    one whole-person approach.
                  </span>
                </h2>
              </div>

              <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                {disciplines.map((discipline) => (
                  <article
                    key={discipline.number}
                    className="grid gap-5 py-8 sm:grid-cols-[70px_1fr] sm:gap-7 sm:py-9"
                  >
                    <p className="font-serif text-[25px] text-[#65966F]">
                      {discipline.number}
                    </p>

                    <div>
                      <h3 className="font-serif text-[29px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[34px]">
                        {discipline.title}
                      </h3>

                      <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                        {discipline.description}
                      </p>

                      <Link
                        href={discipline.href}
                        className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#173F35] hover:text-[#65966F]"
                      >
                        {discipline.linkLabel}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          PRINCIPLES
      ================================================== */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                How we work
              </p>

              <h2 className="mt-3 max-w-[430px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Personalised enough for real{" "}
                <span className="italic text-[#65966F]">life.</span>
              </h2>
            </div>

            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="border-t border-[#173F35]/10 pt-5"
                >
                  <h3 className="font-serif text-[25px] tracking-[-0.02em] text-[#173F35]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-[#687A73]">
                    {principle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          ASSESSMENT
      ================================================== */}
      <section className="border-t border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Start with understanding
              </p>

              <h2 className="mt-3 max-w-[680px] font-serif text-[38px] leading-[1.03] tracking-[-0.035em] text-[#123F35] sm:text-[52px]">
                See where your everyday health patterns{" "}
                <span className="italic text-[#65966F]">stand today.</span>
              </h2>

              <p className="mt-5 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The 21-Point Lifestyle Assessment is a starting point for
                looking at different areas of everyday health. Explore the
                assessment before deciding what you may want to work on.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <Link
                href="/score"
                className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-7 py-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
              >
                Explore the 21-Point Assessment
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="mx-auto max-w-[760px] py-14 text-center sm:py-16 lg:py-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8]">
              Explore Sutra Health
            </p>

            <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[50px]">
              Understand your health. Build the habits.{" "}
              <span className="italic text-[#B7CCB8]">Sustain the change.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] text-[14px] leading-7 text-[#C5D2CC] sm:text-[15px] sm:leading-8">
              Explore the individual approaches or speak with Sutra Health
              about what may be appropriate for your health goals.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Health Conditions
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>


      {/* FAQ */}
      <FAQ faqs={approachFAQs} />
</main>
  );
}
