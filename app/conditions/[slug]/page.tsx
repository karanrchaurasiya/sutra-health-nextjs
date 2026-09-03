import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import {
  conditions,
  getCondition,
} from "@/data/conditions";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

interface ConditionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   STATIC PARAMS
========================================================= */

export async function generateStaticParams() {
  return conditions.map((condition) => ({
    slug: condition.slug,
  }));
}

/* =========================================================
   SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) {
    return {};
  }

  const title = `${condition.title} | Sutra Health`;

  const description =
    condition.shortDescription.length > 155
      ? condition.shortDescription.slice(0, 152) + "..."
      : condition.shortDescription;

  return {
    title,
    description,

    alternates: {
      canonical: `https://lifequality.org.in/conditions/${condition.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `https://lifequality.org.in/conditions/${condition.slug}`,
      siteName: "Sutra Health",
      type: "article",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function ConditionPage({
  params,
}: ConditionPageProps) {
  const { slug } = await params;

  const condition = getCondition(slug);

  if (!condition) {
    notFound();
  }

  /* -------------------------------------------------------
     Related conditions
  ------------------------------------------------------- */

  const internalLinks = condition.internalLinks;

  const relatedConditions = condition.relatedConditions
    .map((relatedSlug) => getCondition(relatedSlug))
    .filter(Boolean);

  /* -------------------------------------------------------
     FAQ structured data
  ------------------------------------------------------- */

  const faqSchema = condition.faqs?.length
    ? {
        "@type": "FAQPage",
        mainEntity: condition.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  /* -------------------------------------------------------
     Breadcrumb structured data
  ------------------------------------------------------- */

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
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
        item: `https://lifequality.org.in/conditions/${condition.slug}`,
      },
    ],
  };

  /* -------------------------------------------------------
     MedicalWebPage structured data
  ------------------------------------------------------- */

  const medicalPageSchema = {
    "@type": "MedicalWebPage",
    name: condition.title,
    description: condition.shortDescription,
    url: `https://lifequality.org.in/conditions/${condition.slug}`,
    about: {
      "@type": "MedicalCondition",
      name: condition.title,
    },
    publisher: {
      "@type": "Organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      medicalPageSchema,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <>
      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#FAF8F1]">

    {/* HERO */}
        <section className="border-b border-[#173F35]/10">
          <Container>
            <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
              <div className="max-w-xl">
                <Link
                  href="/conditions"
                  className="text-[12px] font-medium text-[#65966F] hover:text-[#173F35]"
                >
                  ← Health conditions
                </Link>

                <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Sutra Health
                </p>

                <h1 className="mt-3 font-serif text-5xl leading-[1] tracking-[-0.05em] text-[#123F35] sm:text-6xl lg:text-[68px]">
                  {condition.title}
                </h1>

                <p className="mt-6 max-w-lg text-[16px] leading-8 text-[#60736B] sm:text-[18px]">
                  {condition.shortDescription}
                </p>

                <Link
                  href="/book-appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0D332C]"
                >
                  Book an Appointment →
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-[24px]">
                <div className="relative aspect-[4/3] bg-[#EAF0E7]">
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
          </Container>
        </section>

        {/* ===================================================
            ARTICLE + TABLE OF CONTENTS
        ================================================== */}
        <section className="bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[230px_minmax(0,1fr)] xl:gap-20">

              {/* =================================================
                  DESKTOP CONTENTS
              ================================================== */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 py-10 lg:py-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#65966F]">
                    Contents
                  </p>

                  <nav aria-label="Condition page sections" className="mt-4">
                    <a
                      href="#understanding"
                      className="group block border-b border-[#173F35]/10 py-3 transition-colors hover:border-[#65966F]/40"
                    >
                      <span className="block text-[12px]  leading-5 text-[#173F35]">
                        Understanding
                      </span>
                   
                    </a>

                    <a
                      href="#concerns"
                      className="group block border-b border-[#173F35]/10 py-3 transition-colors hover:border-[#65966F]/40"
                    >
                      <span className="block text-[12px] leading-5 text-[#173F35]">
                        Common concerns
                      </span>
                     
                    </a>

                    {condition.lifestyleFactors.length > 0 && (
                      <a
                        href="#lifestyle-factors"
                        className="group block border-b border-[#173F35]/10 py-3 transition-colors hover:border-[#65966F]/40"
                      >
                        <span className="block text-[12px] leading-5 text-[#173F35]">
                          Lifestyle factors
                        </span>
                       
                      </a>
                    )}

                    {condition.sections.map((section, index) => (
                      <a
                        key={section.title}
                        href={`#section-${index}-${slugify(section.title)}`}
                        className="group block border-b border-[#173F35]/10 py-3 transition-colors hover:border-[#65966F]/40"
                      >
                        <span className="block text-[12px] leading-5 text-[#173F35]">
                          {section.title}
                        </span>
                      
                      </a>
                    ))}

                    <a
                      href="#approach"
                      className="group block border-b border-[#173F35]/10 py-3 transition-colors hover:border-[#65966F]/40"
                    >
                      <span className="block text-[12px] leading-5 text-[#173F35]">
                        Our approach
                      </span>
                      
                    </a>

                    {condition.support?.length > 0 && (
                      <a
                        href="#support"
                        className="group block border-b border-[#173F35]/10 py-3 transition-colors hover:border-[#65966F]/40"
                      >
                        <span className="block text-[12px] leading-5 text-[#173F35]">
                          How Sutra can help
                        </span>
                       
                      </a>
                    )}

                    {condition.faqs?.length > 0 && (
                      <a
                        href="#faq"
                        className="group block border-b border-[#173F35]/10 py-3 transition-colors hover:border-[#65966F]/40"
                      >
                        <span className="block text-[12px] leading-5 text-[#173F35]">
                          FAQs
                        </span>
                       
                      </a>
                    )}
                  </nav>
                </div>
              </aside>

              {/* =================================================
                  ARTICLE CONTENT
              ================================================== */}
              <article className="min-w-0">

                {/* Mobile contents */}
                <div className="border-b border-[#173F35]/10 py-4 lg:hidden">
                  <details>
                    <summary className="flex cursor-pointer list-none items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173F35] [&::-webkit-details-marker]:hidden">
                      Contents
                      <span className="text-lg font-normal">+</span>
                    </summary>

                    <nav className="mt-3 grid gap-0.5 border-l border-[#173F35]/10 pl-4">
                      <a href="#understanding" className="py-1 text-[13px] text-[#71817A]">
                        Understanding
                      </a>
                      <a href="#concerns" className="py-1 text-[13px] text-[#71817A]">
                        Common concerns
                      </a>
                      {condition.lifestyleFactors.length > 0 && (
                        <a href="#lifestyle-factors" className="py-1 text-[13px] text-[#71817A]">
                          Lifestyle factors
                        </a>
                      )}
                      {condition.sections.map((section, index) => (
                        <a
                          key={section.title}
                          href={`#section-${index}-${slugify(section.title)}`}
                          className="py-1 text-[13px] text-[#71817A]"
                        >
                          {section.title}
                        </a>
                      ))}
                      <a href="#approach" className="py-1 text-[13px] text-[#71817A]">
                        Our approach
                      </a>
                      {condition.support?.length > 0 && (
                        <a href="#support" className="py-1 text-[13px] text-[#71817A]">
                          How Sutra can help
                        </a>
                      )}
                      {condition.faqs?.length > 0 && (
                        <a href="#faq" className="py-1 text-[13px] text-[#71817A]">
                          FAQs
                        </a>
                      )}
                    </nav>
                  </details>
                </div>

                {/* Introduction */}
                <section id="understanding" className="scroll-mt-28 border-t border-[#173F35]/10 py-7 sm:py-8 lg:py-9">
                  <div className="max-w-4xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                      Understanding
                    </p>
                    <h2 className="mt-1.5 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                      A whole-person perspective
                    </h2>
                    <div className="mt-4 max-w-3xl">
                      <p className="text-[17px] leading-8 text-[#536A62] sm:text-[18px] sm:leading-8">
                        {condition.introduction}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Common concerns */}
                <section id="concerns" className="scroll-mt-28 border-t border-[#173F35]/10 py-7 sm:py-8 lg:py-9">
                  <div className="max-w-4xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                      Common concerns
                    </p>
                    <h2 className="mt-1.5 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                      What brings people to us
                    </h2>
                    <div className="mt-4 border-y border-[#173F35]/10">
                      {condition.concerns.map((concern) => (
                        <div key={concern} className="border-b border-[#173F35]/10 py-3 last:border-b-0">
                          <p className="text-[16px] leading-7 text-[#536A62] sm:text-[17px]">
                            {concern}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Lifestyle factors */}
                {condition.lifestyleFactors.length > 0 && (
                  <section id="lifestyle-factors" className="scroll-mt-28 border-t border-[#173F35]/10 py-7 sm:py-8 lg:py-9">
                    <div className="max-w-4xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                        Lifestyle factors
                      </p>
                      <h2 className="mt-1.5 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                        Everyday factors can matter
                      </h2>
                      <div className="mt-4 border-y border-[#173F35]/10">
                        {condition.lifestyleFactors.map((factor) => (
                          <div key={factor.title} className="border-b border-[#173F35]/10 py-4 last:border-b-0">
                            <h3 className="font-serif text-[21px] leading-tight text-[#173F35] sm:text-[23px]">
                              {factor.title}
                            </h3>
                            <p className="mt-2 max-w-3xl text-[16px] leading-7 text-[#687A73] sm:text-[17px] sm:leading-8">
                              {factor.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* Main article sections */}
                <div>
                  {condition.sections.map((section, index) => (
                    <section
                      key={section.title}
                      id={`section-${index}-${slugify(section.title)}`}
                      className="scroll-mt-28 border-t border-[#173F35]/10 py-7 sm:py-8 lg:py-9"
                    >
                      <div className="max-w-4xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9AAA9F]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="mt-1.5 max-w-3xl font-serif text-2xl leading-[1.08] tracking-[-0.025em] text-[#173F35] sm:text-3xl">
                          {section.title}
                        </h2>
                        <div className="mt-4 max-w-3xl space-y-3">
                          {section.content.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-[17px] leading-8 text-[#536A62] sm:text-[18px] sm:leading-8"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </section>
                  ))}
                </div>

                {/* Contextual internal links */}
                {internalLinks.length > 0 && (
                  <section className="border-t border-[#173F35]/10 py-7 sm:py-8">
                    <div className="max-w-4xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                        Explore further
                      </p>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                        {internalLinks.map((link) => (
                          <Link
                            key={`${link.href}-${link.label}`}
                            href={link.href}
                            className="group inline-flex items-center gap-2 border-b border-[#65966F]/40 pb-1 text-[14px] font-semibold text-[#173F35] transition-colors hover:border-[#173F35] hover:text-[#65966F]"
                          >
                            {link.label}
                            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* Approach */}
                <section id="approach" className="scroll-mt-28 border-t border-[#173F35]/10 py-7 sm:py-8 lg:py-9">
                  <div className="max-w-4xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                      Our approach
                    </p>
                    <h2 className="mt-1.5 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                      Building healthier everyday habits
                    </h2>
                    <div className="mt-4 border-y border-[#173F35]/10">
                      {condition.approach.map((item) => (
                        <div key={item} className="border-b border-[#173F35]/10 py-3 last:border-b-0 text-[17px] leading-8 text-[#536A62] sm:text-[18px] sm:leading-8">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Support */}
                {condition.support?.length > 0 && (
                  <section id="support" className="scroll-mt-28 border-t border-[#173F35]/10 py-7 sm:py-8 lg:py-9">
                    <div className="max-w-4xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                        How Sutra Health can help
                      </p>
                      <h2 className="mt-1.5 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                        Support shaped around you
                      </h2>
                      <div className="mt-4 border-y border-[#173F35]/10">
                        {condition.support.map((item) => (
                          <div key={item} className="border-b border-[#173F35]/10 py-3 last:border-b-0 text-[17px] leading-8 text-[#536A62] sm:text-[18px] sm:leading-8">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* FAQ */}
                {condition.faqs?.length > 0 && (
                  <section id="faq" className="scroll-mt-28 border-t border-[#173F35]/10 py-7 sm:py-8 lg:py-9">
                    <div className="max-w-4xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                        Frequently asked questions
                      </p>
                      <h2 className="mt-1.5 max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                        Questions about {condition.title.toLowerCase()}?
                      </h2>
                      <div className="mt-4 border-t border-[#173F35]/15">
                        {condition.faqs.map((faq, index) => (
                          <details key={faq.question} className="group border-b border-[#173F35]/15">
                            <summary className="flex cursor-pointer list-none items-center gap-4 py-4 sm:py-5 [&::-webkit-details-marker]:hidden">
                              <span className="w-7 shrink-0 text-[10px] font-semibold tracking-[0.12em] text-[#A2ADA7]">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="flex-1 text-[15px] font-medium leading-6 text-[#173F35] sm:text-[16px]">
                                {faq.question}
                              </span>
                              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#173F35]/10 text-[#65966F] transition-transform duration-300 group-open:rotate-45">
                                +
                              </span>
                            </summary>
                            <div className="pb-5 pl-11 pr-8">
                              <p className="max-w-3xl text-[16px] leading-7 text-[#687A73] sm:text-[17px] sm:leading-8">
                                {faq.answer}
                              </p>
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  </section>
                )}
              </article>
            </div>
          </Container>
        </section>

        {/* ===================================================
            RELATED CONDITIONS
        ================================================== */}
        {relatedConditions.length > 0 && (
          <section className="bg-[#FAF8F1] py-10 sm:py-12 lg:py-14">
            <Container>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                    Explore more
                  </p>
                  <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                    Related health conditions
                  </h2>
                </div>
                <Link href="/conditions" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]">
                  View all conditions
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {relatedConditions.map((related) => {
                  if (!related) return null;
                  return (
                    <Link
                      key={related.slug}
                      href={`/conditions/${related.slug}`}
                      className="group overflow-hidden rounded-[22px] border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.09)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={`/images/conditions/${related.slug}.png`}
                          alt={`${related.title} - Sutra Health`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/25 via-transparent to-transparent" />
                      </div>
                      <div className="relative p-5 sm:p-6">
                        <h3 className="pr-10 font-serif text-[23px] leading-tight tracking-[-0.02em] text-[#173F35]">
                          {related.title}
                        </h3>
                        <p className="mt-2 pr-8 text-[12px] leading-5 text-[#71817A]">
                          {related.shortDescription}
                        </p>
                        <span aria-hidden="true" className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#173F35]/10 text-[#65966F] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#173F35] group-hover:text-white">
                          →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Container>
          </section>
        )}


        {/* ===================================================
            CTA
        =================================================== */}

        <section className="bg-[#173F35] py-10 sm:py-12 lg:py-14">
          <Container>

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6] sm:text-[11px]">
                Take the next step
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-[#FAF8F1] sm:text-5xl">
                Let's talk about your health.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#CBDAD1]">
                Book a consultation to discuss your health goals and explore
                an approach that fits your needs and everyday life.
              </p>

              <Link
                href="/book-appointment"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35] transition hover:bg-white"
              >
                Book an Appointment
                <span aria-hidden="true">→</span>
              </Link>

            </div>

          </Container>
        </section>

      </main>
    </>
  );
}