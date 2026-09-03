import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Nutrition | Sutra Health",
  description:
    "Explore nutrition as part of the Sutra Health Method, with practical, individualised guidance that connects food, everyday life and long-term health.",
  alternates: {
    canonical: "https://lifequality.org.in/approach/nutrition",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nutrition | Sutra Health",
    description:
      "Practical nutrition guidance as part of the Sutra Health Method.",
    url: "https://lifequality.org.in/approach/nutrition",
    type: "website",
  },
};

const principles = [
  {
    number: "01",
    title: "Food in context",
    description:
      "Nutrition is considered alongside routines, preferences, culture, health concerns and the realities of everyday life.",
  },
  {
    number: "02",
    title: "Practical choices",
    description:
      "The focus is on food choices and routines that can realistically become part of daily life rather than short-lived restrictions.",
  },
  {
    number: "03",
    title: "Dietary diversity",
    description:
      "A varied diet is an important part of thinking about nutrition and micronutrient adequacy across populations and individuals.",
  },
  {
    number: "04",
    title: "Individual needs",
    description:
      "Nutrition guidance should account for the person's circumstances, goals, health needs and ability to sustain change.",
  },
  {
    number: "05",
    title: "Sustainable habits",
    description:
      "The aim is to develop eating patterns that can be maintained over time rather than relying on temporary diets.",
  },
  {
    number: "06",
    title: "Evidence & learning",
    description:
      "Sutra Health connects practical lifestyle work with evidence, research and ongoing learning.",
  },
];

const faqs = [
  {
    question: "What does nutrition mean at Sutra Health?",
    answer:
      "Nutrition is considered as part of the wider Sutra Health Method. The focus is on practical eating patterns and habits in the context of a person's health, routines, preferences and circumstances.",
  },
  {
    question: "Does Sutra Health provide the same diet plan to everyone?",
    answer:
      "The Sutra Health approach is whole-person and individualised. Nutrition guidance should take account of the person's needs, goals, health concerns and everyday circumstances rather than assuming one plan works for everyone.",
  },
  {
    question: "Is nutrition only about weight?",
    answer:
      "No. Nutrition is relevant to overall health and wellbeing and can be considered alongside other lifestyle factors. Weight may be one concern for some people, but it is not the only reason to pay attention to nutrition.",
  },
  {
    question: "Where can I learn about Dr. Rakesh Sarwal's nutrition research?",
    answer:
      "Dr. Rakesh Sarwal's academic profile includes work on nutrition indicators, dietary diversity and lifestyle-focused health research. His academic publications are linked from the Sutra Health site where relevant.",
  },
];

const research = [
  {
    year: "2022",
    title:
      "Analysis of Key Nutrition Indicators Based on National Family Health Survey, NFHS 4 (2015-16) and NFHS 5 (2019-2021)",
    description:
      "An analysis of nutrition indicators using NFHS data, including outcomes, service delivery and determinants of nutrition across India and States/UTs.",
    href:
      "https://academic.lifequality.org.in/publication/2022-analysis-of-key-nutrition-indicators-based-on-national-famil",
  },
  {
    year: "2026",
    title:
      "A traffic light approach to lifestyle change: Health building guideline for NCD outpatients in India",
    description:
      "A published guideline describing a traffic-light approach to lifestyle change for NCD outpatients in India.",
    href:
      "https://academic.lifequality.org.in/publication/2026-a-traffic-light-approach-to-lifestyle-change-health-building",
  },
];

export default function NutritionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Nutrition | Sutra Health",
    description:
      "Nutrition as part of the Sutra Health Method.",
    url: "https://lifequality.org.in/approach/nutrition",
    isPartOf: {
      "@type": "WebSite",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
  };

  return (
    <main className="bg-[#FAF8F1]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FAF8F1]">
        <Container>
          <div className="grid min-h-[560px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
            <div className="max-w-2xl">
              <Link
                href="/approach"
                className="text-[11px] font-semibold text-[#65966F]"
              >
                ← The Sutra Health Method
              </Link>

              <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F]">
                Nutrition
              </p>

              <h1 className="mt-5 font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[58px] lg:text-[68px]">
                Better health
                <br />
                begins with
                <br />
                <span className="italic text-[#65966F]">everyday food.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[14px] leading-7 text-[#687A73] sm:text-[16px]">
                Nutrition at Sutra Health is part of a wider whole-person
                approach. We look at food in the context of health, habits,
                preferences, routines and the realities of everyday life.
              </p>

              <div className="mt-8 border-l-2 border-[#9DB9A0] pl-5">
                <p className="max-w-md text-[12px] leading-6 text-[#71817A]">
                  The aim is not a perfect diet. It is a practical way of
                  eating that can work in real life.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
              <div className="relative overflow-hidden rounded-[32px] bg-[#EAF0E7]">
                <div className="relative aspect-[4/4.5]">
                  <Image
                    src="/images/retreat/diet.jpeg"
                    alt="Nutrition as part of the Sutra Health Method"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/25 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#173F35]/10 bg-white/95 px-5 py-4 shadow-[0_16px_40px_rgba(23,63,53,0.12)]">
                <p className="font-serif text-[24px] text-[#173F35]">
                  Food & health
                </p>
                <p className="mt-1 text-[10px] text-[#71817A]">
                  Practical choices for everyday life
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6]">
                Our perspective
              </p>

              <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[46px]">
                Nutrition is more than a meal plan.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-[16px] leading-8 text-[#D5E0D8]">
                What people eat is connected to how they live.
              </p>

              <p className="mt-6 text-[14px] leading-7 text-[#BFD0C5]">
                Eating patterns are influenced by culture, family, work,
                routines, access, preferences and many other factors. A
                useful nutrition conversation therefore needs to understand
                the person and the context before deciding what change may be
                practical.
              </p>

              <p className="mt-6 text-[14px] leading-7 text-[#BFD0C5]">
                This fits the wider Sutra Health principle that health changes
                when everyday life changes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
              How we think about nutrition
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.025em] text-[#173F35] sm:text-4xl">
              Practical nutrition for real life.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#71817A]">
              These principles help keep nutrition connected to the person,
              rather than reducing it to a list of foods to eat or avoid.
            </p>
          </div>

          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.number}
                className="border-t border-[#173F35]/15 py-7"
              >
                <span className="text-[10px] font-semibold tracking-[0.14em] text-[#9AA9A1]">
                  {item.number}
                </span>

                <h3 className="mt-7 font-serif text-[27px] leading-tight tracking-[-0.02em] text-[#173F35]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#71817A]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* RESEARCH */}
      <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Research & evidence
              </p>

              <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Nutrition informed by evidence.
              </h2>

              <p className="mt-5 max-w-md text-[13px] leading-6 text-[#71817A]">
                Dr. Rakesh Sarwal's academic work includes nutrition research
                and lifestyle-focused health research. Explore selected work
                below.
              </p>
            </div>

            <div className="border-t border-[#173F35]/15">
              {research.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block border-b border-[#173F35]/15 py-7"
                >
                  <div className="flex gap-5">
                    <span className="pt-1 text-[10px] font-semibold tracking-[0.14em] text-[#A2ADA7]">
                      {item.year}
                    </span>

                    <div className="flex-1">
                      <h3 className="max-w-2xl font-serif text-[22px] leading-tight text-[#173F35] transition-colors group-hover:text-[#65966F]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-[13px] leading-6 text-[#71817A]">
                        {item.description}
                      </p>

                      <span className="mt-4 inline-block text-[11px] font-semibold text-[#65966F]">
                        View academic publication →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CONNECTED APPROACH */}
      <section className="bg-[#EAF0E7] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Part of the method
              </p>

              <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Nutrition does not work in isolation.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#687A73]">
                Food is one part of a wider lifestyle. The Sutra Health Method
                brings nutrition together with lifestyle practices, therapeutic
                yoga and breath & mindfulness according to the person's needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:max-w-sm lg:justify-end">
              <Link
                href="/approach/lifestyle"
                className="rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-5 py-3 text-xs font-semibold text-[#173F35]"
              >
                Lifestyle
              </Link>

              <Link
                href="/approach/therapeutic-yoga"
                className="rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-5 py-3 text-xs font-semibold text-[#173F35]"
              >
                Therapeutic Yoga
              </Link>

              <Link
                href="/approach/breath-mindfulness"
                className="rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-5 py-3 text-xs font-semibold text-[#173F35]"
              >
                Breath & Mindfulness
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Common questions
              </p>

              <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Understanding nutrition.
              </h2>
            </div>

            <div className="border-t border-[#173F35]/15">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group border-b border-[#173F35]/15"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                    <span className="w-7 shrink-0 text-[10px] font-semibold tracking-[0.12em] text-[#A2ADA7]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-[15px] font-medium leading-6 text-[#173F35] sm:text-[16px]">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#173F35]/10 text-[#65966F] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="pb-6 pl-11 pr-10">
                    <p className="text-[13px] leading-7 text-[#687A73] sm:text-[14px]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5CEB6]">
              Take the next step
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Make nutrition part of a healthier life.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Explore the Sutra Health Method or talk with the team about your
              health goals and everyday routines.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35]"
              >
                Book an Appointment
                <span>→</span>
              </Link>

              <Link
                href="/approach"
                className="inline-flex items-center gap-2 rounded-full border border-[#FAF8F1]/30 px-7 py-3.5 text-sm font-semibold text-[#FAF8F1]"
              >
                Explore the Method
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
