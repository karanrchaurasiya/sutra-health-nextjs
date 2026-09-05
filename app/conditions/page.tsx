import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { getAllConditions } from "@/data/conditions";

export const metadata: Metadata = {
  title: "Health Conditions We Support | Lifestyle & Integrative Health",
  description:
    "Explore lifestyle-focused support for weight management, metabolic health, high blood pressure, joint pain, migraine, digestive health and women's health.",
  alternates: {
    canonical: "https://lifequality.org.in/conditions",
  },
  openGraph: {
    title: "Health Conditions We Support | Lifestyle & Integrative Health",
    description:
      "Explore lifestyle-focused support for weight management, metabolic health, blood pressure, joint health, migraine, digestive health and women's health.",
    url: "https://lifequality.org.in/conditions",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Conditions We Support | Lifestyle & Integrative Health",
    description:
      "Explore lifestyle-focused support for common health concerns through lifestyle, nutrition, movement, breath and mind practices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "What health conditions does Sutra Health support?",
    answer:
      "Sutra Health provides lifestyle-focused support across areas including weight management, metabolic health, high blood pressure, arthritis and joint pain, migraine and headache, digestive and gut health, and women's health.",
  },
  {
    question: "How does Sutra Health approach health conditions?",
    answer:
      "The approach looks beyond a single symptom and considers lifestyle, nutrition, movement, breath and mind practices alongside individual health needs and goals.",
  },
  {
    question: "Can lifestyle changes help with health conditions?",
    answer:
      "Lifestyle factors can play an important role in overall health and wellbeing. Lifestyle-focused changes may complement appropriate medical care but should not replace diagnosis, medication or treatment prescribed by a qualified healthcare professional.",
  },
  {
    question: "Will my care plan be personalized?",
    answer:
      "Guidance is shaped around health concerns, goals, lifestyle, nutrition, daily routine and individual circumstances rather than following a one-size-fits-all approach.",
  },
  {
    question: "Do I need a diagnosis before booking a consultation?",
    answer:
      "You can book a consultation to discuss your health concerns and goals. The consultation provides an opportunity to understand your situation and determine an appropriate approach.",
  },
  {
    question: "Can Sutra Health replace my existing medical treatment?",
    answer:
      "Lifestyle-focused care should not be considered a replacement for necessary medical diagnosis or treatment. If you have an existing medical condition or treatment plan, discuss lifestyle changes with your qualified healthcare professional.",
  },
];

export default function ConditionsPage() {
  const conditions = getAllConditions();

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
    ],
  };

  const collectionSchema = {
    "@type": "CollectionPage",
    name: "Health Conditions We Support",
    description: metadata.description,
    url: "https://lifequality.org.in/conditions",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: conditions.length,
      itemListElement: conditions.map((condition, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: condition.title,
        url: `https://lifequality.org.in/conditions/${condition.slug}`,
      })),
    },
  };

  const faqSchema = {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, collectionSchema, faqSchema],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#FAF8F1]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#173F35]/10">
          <Container>
            <div className="grid min-h-[520px] items-center gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
              <div className="relative z-10 max-w-2xl">
                <Link
                  href="/"
                  className="text-[12px] font-medium text-[#65966F] transition hover:text-[#173F35]"
                >
                  ← Home
                </Link>

                <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
                  Health Conditions
                </p>

                <h1 className="mt-3 font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[58px] lg:text-[68px]">
                  Understand your health.
                  <br />
                  <span className="italic text-[#65966F]">
                    Find practical support.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#687A73] sm:text-[17px]">
                  Explore common health concerns through a whole-person,
                  lifestyle-focused approach that considers nutrition,
                  movement, breath, mind and everyday habits alongside your
                  individual needs.
                </p>

                <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#71817A]">
                  Select a condition to understand the factors that may matter,
                  explore relevant health information and see how Sutra Health
                  can support healthier habits.
                </p>
              </div>

              <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
                <div
                  aria-hidden="true"
                  className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#789A7D]/20 sm:-right-12 sm:-top-12 sm:h-52 sm:w-52"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-dashed border-[#789A7D]/20 sm:-bottom-10 sm:-left-10 sm:h-36 sm:w-36"
                />

                <div className="relative overflow-hidden rounded-[28px] bg-[#EAF0E7]">
                  <div className="relative aspect-[4/4.5]">
                    <Image
                      src="/images/conditions/conditions.png"
                      alt="Lifestyle-focused integrative health support"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/25 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#173F35]/10 bg-white/95 px-5 py-4 shadow-[0_16px_40px_rgba(23,63,53,0.12)] backdrop-blur-sm sm:left-8">
                  <p className="font-serif text-[24px] text-[#173F35]">
                    Whole-person
                  </p>
                  <p className="mt-1 text-[10px] text-[#71817A] sm:text-[11px]">
                    Lifestyle-focused support
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CONDITION HUBS */}
        <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="mb-10 max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                Areas of Care
              </p>

              <h2 className="mt-3 font-serif text-3xl tracking-[-0.025em] text-[#173F35] sm:text-4xl">
                Health conditions we commonly support
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#71817A]">
                Each condition page provides focused health information,
                lifestyle considerations and links to relevant approaches and
                programs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {conditions.map((condition) => (
                <Link
                  key={condition.slug}
                  href={`/conditions/${condition.slug}`}
                  className="group overflow-hidden rounded-[24px] border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,63,53,0.10)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={`/images/conditions/${condition.slug}.png`}
                      alt={`${condition.title} - health information`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/25 via-transparent to-transparent" />
                  </div>

                  <div className="relative p-6 sm:p-7">
                    <h3 className="pr-10 font-serif text-[24px] leading-tight tracking-[-0.02em] text-[#173F35]">
                      {condition.title}
                    </h3>

                    <p className="mt-3 pr-8 text-[13px] leading-6 text-[#71817A]">
                      {condition.shortDescription}
                    </p>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-7 right-7 flex h-8 w-8 items-center justify-center rounded-full border border-[#173F35]/10 text-sm text-[#65966F] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#173F35] group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* HOW TO USE THESE PAGES */}
        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Explore by concern
                </p>

                <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                  Start with the health question that matters to you.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-[16px] leading-8 text-[#536A62] sm:text-[18px]">
                  Condition pages are designed to help you understand a health
                  concern before exploring an approach or program. Where
                  specific questions have been researched and developed, they
                  are linked from the relevant condition hub.
                </p>

                <p className="mt-5 text-[16px] leading-8 text-[#687A73] sm:text-[17px]">
                  The information is intended to support health education and
                  informed conversations with healthcare professionals. It is
                  not a substitute for medical diagnosis, treatment or
                  emergency care.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                  Common questions
                </p>

                <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                  Understanding your care.
                </h2>

                <p className="mt-5 max-w-sm text-[14px] leading-7 text-[#687A73]">
                  Learn more about the conditions we support and how a
                  lifestyle-focused approach fits into overall care.
                </p>
              </div>

              <div className="border-t border-[#173F35]/15">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border-b border-[#173F35]/15"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-4 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                      <span className="flex-1 text-[15px] font-medium leading-6 tracking-[-0.01em] text-[#173F35] sm:text-[16px]">
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#173F35]/10 text-[#65966F] transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <div className="pb-6 pr-10 sm:pb-7">
                      <p className="max-w-2xl text-[13px] leading-7 text-[#687A73] sm:text-[14px]">
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
                Explore an approach that fits your health goals.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#CBDAD1]">
                Book a consultation to discuss your health concerns and
                explore an approach that fits your needs and everyday life.
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
