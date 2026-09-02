import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import {
  conditions,
  getCondition,
  type Condition,
} from "@/data/conditions";

interface ConditionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

export async function generateMetadata({
  params,
}: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) return {};

  const url = `https://lifequality.org.in/conditions/${condition.slug}`;

  return {
    title: `${condition.title} | Sutra Health`,
    description: condition.shortDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${condition.title} | Sutra Health`,
      description: condition.shortDescription,
      url,
      siteName: "Sutra Health",
      type: "article",
      locale: "en_IN",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ConditionPage({
  params,
}: ConditionPageProps) {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) {
    notFound();
  }

  const relatedConditions = condition.relatedConditions
    .map((relatedSlug) => getCondition(relatedSlug))
    .filter((related): related is Condition => related !== undefined);

  const pageUrl =
    `https://lifequality.org.in/conditions/${condition.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${condition.title} | Sutra Health`,
        description: condition.shortDescription,
        about: {
          "@type": "MedicalCondition",
          name: condition.title,
        },
        publisher: {
          "@type": "Organization",
          name: "Sutra Health",
          url: "https://lifequality.org.in/",
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://lifequality.org.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Health Conditions",
            item: "https://lifequality.org.in/conditions",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: condition.title,
            item: pageUrl,
          },
        ],
      },

      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: condition.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#FAF8F1] text-[#173F35]">
        {/* =====================================================
            HERO — TEXT + IMAGE
        ====================================================== */}

        <section className="border-b border-[#173F35]/10 bg-[#FAF8F1]">
          <Container>
            <div className="grid min-h-[560px] items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:py-16">

              {/* Text */}
              <div className="order-2 max-w-2xl lg:order-1">

                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-2 text-[12px] font-medium text-[#65966F] transition-colors hover:text-[#173F35]"
                >
                  ← All health conditions
                </Link>

                <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                  Health & wellbeing
                </p>

                <h1 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.045em] text-[#123F35] sm:text-5xl lg:text-6xl xl:text-[68px]">
                  {condition.title}
                </h1>

                <p className="mt-6 max-w-xl text-[16px] leading-8 text-[#5F716A] sm:text-[18px]">
                  {condition.shortDescription}
                </p>

                <Link
                  href="/book-appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#123F35] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0D332C]"
                >
                  Book an Appointment
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>

              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">

                <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[28px] bg-[#EAF0E7]">

                  <div className="relative aspect-[4/3]">

                    <Image
                      src={`/images/conditions/${condition.slug}.png`}
                      alt={`${condition.title} - Sutra Health`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                  </div>

                </div>

              </div>

            </div>
          </Container>
        </section>

        <article>
          {/* =====================================================
              ARTICLE INTRO + CONTENT GUIDE
          ====================================================== */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
                  <aside className="lg:sticky lg:top-28 lg:self-start">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                      In this guide
                    </p>

                    <h2 className="mt-3 max-w-xs font-serif text-3xl leading-tight tracking-[-0.035em] text-[#173F35] sm:text-4xl">
                      Understanding {condition.title.toLowerCase()}
                    </h2>

                    <div className="mt-7 hidden border-t border-[#173F35]/10 pt-5 lg:block">
                      <p className="text-[12px] leading-6 text-[#82948B]">
                        A practical, whole-person perspective on lifestyle,
                        wellbeing and everyday health.
                      </p>
                    </div>
                  </aside>

                  <div className="max-w-3xl">
                    <p className="font-serif text-2xl leading-[1.45] tracking-[-0.025em] text-[#294D42] sm:text-3xl">
                      {condition.introduction}
                    </p>

                    <div className="mt-10 border-y border-[#173F35]/10 py-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                        A note from Sutra Health
                      </p>
                      <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#687A73]">
                        Lifestyle support is individualized and should be
                        considered alongside appropriate healthcare, especially
                        when symptoms are persistent, severe or concerning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* =====================================================
              ARTICLE BODY
          ====================================================== */}
          <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-28">
            <Container>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
                  <div className="hidden lg:block">
                    <div className="sticky top-28">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#82948B]">
                        Article
                      </p>
                      <div className="mt-4 h-px w-14 bg-[#65966F]" />
                      <p className="mt-5 max-w-[190px] text-[12px] leading-6 text-[#82948B]">
                        Explore the topic through nutrition, movement,
                        routines, stress and other relevant lifestyle factors.
                      </p>
                    </div>
                  </div>

                  <div className="max-w-3xl">
                    {condition.sections.map((section, index) => (
                      <section
                        key={section.title}
                        className={
                          index === 0
                            ? ""
                            : "mt-16 border-t border-[#173F35]/10 pt-14 sm:mt-20 sm:pt-16"
                        }
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#9CAD9F]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-[#173F35] sm:text-4xl">
                            {section.title}
                          </h2>
                        </div>

                        <div className="mt-7 space-y-5">
                          {section.content.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-[16px] leading-8 text-[#536A62] sm:text-[17px] sm:leading-9"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {index === 0 && condition.concerns.length > 0 && (
                          <div className="mt-10 rounded-[20px] border border-[#173F35]/10 bg-white p-6 sm:p-8">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                              Common concerns
                            </p>
                            <div className="mt-5 divide-y divide-[#173F35]/10">
                              {condition.concerns.slice(0, 5).map((concern) => (
                                <p
                                  key={concern}
                                  className="py-3.5 text-[14px] leading-6 text-[#536A62] first:pt-0 last:pb-0"
                                >
                                  {concern}
                                </p>
                              ))}
                            </div>
                          </div>
                        )}
                      </section>
                   ))}

                    {condition.lifestyleFactors &&
                      condition.lifestyleFactors.length > 0 && (
                        <section className="mt-16 border-t border-[#173F35]/10 pt-14 sm:mt-20 sm:pt-16">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                            Looking at the bigger picture
                          </p>

                          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.035em] text-[#173F35] sm:text-4xl">
                            Lifestyle factors
                          </h2>

                          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                            {condition.lifestyleFactors.map((factor) => (
                              <div
                                key={factor.title}
                                className="border-t border-[#173F35]/10 pt-5"
                              >
                                <h3 className="font-serif text-xl leading-tight text-[#173F35]">
                                  {factor.title}
                                </h3>
                                <p className="mt-2 text-[14px] leading-7 text-[#62746C]">
                                  {factor.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                    {/* Editorial pull quote */}
                    <div className="my-16 border-y border-[#173F35]/10 py-10 sm:my-20 sm:py-12">
                      <p className="max-w-2xl font-serif text-2xl leading-[1.45] tracking-[-0.025em] text-[#4F8060] sm:text-3xl">
                        “Sustainable health starts with understanding the
                        everyday habits that shape how we live.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* =====================================================
              SUTRA APPROACH
          ====================================================== */}
          <section className="bg-[#173F35] py-16 text-[#FAF8F1] sm:py-20 lg:py-24">
            <Container>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6]">
                      Our approach
                    </p>
                    <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
                      Looking beyond one factor
                    </h2>
                  </div>

                  <div>
                    <p className="max-w-2xl text-[15px] leading-8 text-[#CBDAD1] sm:text-[16px] sm:leading-9">
                      Rather than focusing on one factor alone, Sutra Health
                      can consider connected areas of lifestyle according to
                      your individual needs and health goals.
                    </p>

                    <div className="mt-8 divide-y divide-white/15 border-y border-white/15">
                      {condition.approach.map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-5 py-5"
                        >
                          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#9DB9A2]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-[15px] font-medium text-[#F3F4EB]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* =====================================================
              SUPPORT
          ====================================================== */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                      Support at Sutra Health
                    </p>
                    <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-[-0.035em] text-[#173F35] sm:text-4xl">
                      Practical support around your needs
                    </h2>
                  </div>

                  <div className="max-w-3xl">
                    <p className="text-[15px] leading-8 text-[#687A73] sm:text-[16px] sm:leading-9">
                      Depending on your individual goals and circumstances,
                      support may include different aspects of lifestyle and
                      wellbeing.
                    </p>

                    <div className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                      {condition.support.map((item) => (
                        <div
                          key={item}
                          className="border-t border-[#173F35]/10 pt-4"
                        >
                          <p className="text-[14px] leading-7 text-[#405B51]">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* =====================================================
              FAQ
          ====================================================== */}
          <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
            <Container>
              <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                      Frequently asked questions
                    </p>
                    <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight tracking-[-0.035em] text-[#173F35] sm:text-4xl">
                      Questions about {condition.title}
                    </h2>
                  </div>

                  <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">
                    {condition.faqs.map((faq) => (
                      <details key={faq.question} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] font-semibold leading-7 text-[#173F35] [&::-webkit-details-marker]:hidden">
                          <span>{faq.question}</span>
                          <span
                            aria-hidden="true"
                            className="shrink-0 text-xl font-normal text-[#65966F] transition-transform duration-200 group-open:rotate-45"
                          >
                            +
                          </span>
                        </summary>
                        <p className="mt-4 max-w-2xl pr-8 text-[14px] leading-7 text-[#687A73]">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* =====================================================
              RELATED CONDITIONS
          ====================================================== */}
          {relatedConditions.length > 0 && (
            <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
              <Container>
                <div className="mx-auto max-w-6xl">
                  <div className="max-w-2xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                      Continue exploring
                    </p>
                    <h2 className="mt-3 font-serif text-3xl tracking-[-0.035em] text-[#173F35] sm:text-4xl">
                      Related health conditions
                    </h2>
                    <p className="mt-4 text-[15px] leading-7 text-[#687A73]">
                      Explore related areas of health and learn more about
                      lifestyle-focused support.
                    </p>
                  </div>

                  <div className="mt-9 grid gap-5 md:grid-cols-3">
                    {relatedConditions.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/conditions/${related.slug}`}
                        className="group overflow-hidden rounded-[20px] border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.09)]"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF0E7]">
                          <Image
                            src={`/images/conditions/${related.slug}.png`}
                            alt={`${related.title} - Sutra Health`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-5 sm:p-6">
                          <h3 className="font-serif text-xl leading-tight text-[#173F35]">
                            {related.title}
                          </h3>
                          <p className="mt-2 text-[13px] leading-6 text-[#71817A]">
                            {related.shortDescription}
                          </p>
                          <span className="mt-4 inline-flex text-[12px] font-semibold text-[#4F8060]">
                            Explore condition →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          )}

          {/* =====================================================
              DISCLAIMER
          ====================================================== */}
          <section className="bg-[#FAF8F1] py-9">
            <Container>
              <div className="mx-auto max-w-6xl border-t border-[#173F35]/10 pt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#82948B]">
                  Important information
                </p>
                <p className="mt-3 max-w-4xl text-[12px] leading-6 text-[#7A8983]">
                  The information on this page is provided for general
                  educational purposes and should not be considered a diagnosis
                  or a substitute for individualized medical advice, diagnosis
                  or treatment. If you have persistent, severe or concerning
                  symptoms, please consult an appropriately qualified
                  healthcare professional.
                </p>
              </div>
            </Container>
          </section>

          {/* =====================================================
              EDITORIAL CTA
          ====================================================== */}
          <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6]">
                  Take the next step
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.035em] text-[#FAF8F1] sm:text-5xl">
                  Let's talk about your health.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-[#CBDAD1]">
                  Start a conversation about your health goals and explore what
                  kind of lifestyle support may be appropriate for you.
                </p>
                <Link
                  href="/book-appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Book an Appointment
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Container>
          </section>
        </article>
      </main>
    </>
  )}
















 