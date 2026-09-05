import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import {
  getAllSubpageParams,
  getCondition,
  getSubpage,
} from "@/data/conditions";

type PageProps = {
  params: Promise<{
    slug: string;
    subslug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllSubpageParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, subslug } = await params;

  const condition = getCondition(slug);
  const subpage = getSubpage(slug, subslug);

  if (!condition || !subpage) {
    return {};
  }

  return {
    title: subpage.question,
    description: subpage.shortAnswer.slice(0, 155),
    alternates: {
      canonical: `/conditions/${slug}/${subslug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: subpage.question,
      description: subpage.shortAnswer.slice(0, 155),
      type: "article",
      url: `/conditions/${slug}/${subslug}`,
    },
  };
}

export default async function ConditionSubpage({
  params,
}: PageProps) {
  const { slug, subslug } = await params;

  const condition = getCondition(slug);
  const subpage = getSubpage(slug, subslug);

  if (!condition || !subpage) {
    notFound();
  }

  const canonicalUrl =
    `https://lifequality.org.in/conditions/${slug}/${subslug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Conditions",
        item: "https://lifequality.org.in/conditions",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: condition.title,
        item: `https://lifequality.org.in/conditions/${slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: subpage.question,
        item: canonicalUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: subpage.question,
    description: subpage.shortAnswer,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
  };

  const faqSchema =
    subpage.faqs && subpage.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: subpage.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main>
        {/* Breadcrumb */}
        <section className="border-b border-black/10 bg-[#f7f5f1]">
          <Container>
            <div className="py-5 text-sm text-black/60">
              <Link
                href="/conditions"
                className="transition hover:text-black"
              >
                Conditions
              </Link>

              <span className="mx-2">/</span>

              <Link
                href={`/conditions/${condition.slug}`}
                className="transition hover:text-black"
              >
                {condition.title}
              </Link>

              <span className="mx-2">/</span>

              <span className="text-black/80">
                {subpage.question}
              </span>
            </div>
          </Container>
        </section>

        {/* Hero / Direct Answer */}
        <section className="bg-[#f7f5f1] py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-[#55705b]">
                {condition.title}
              </p>

              <h1 className="max-w-4xl font-serif text-4xl leading-tight text-[#1E2A1C] md:text-6xl">
                {subpage.question}
              </h1>

              <div className="mt-8 max-w-3xl border-l-2 border-[#55705b] pl-5">
                <p className="text-lg leading-8 text-[#1E2A1C]/80 md:text-xl">
                  {subpage.shortAnswer}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Main Content */}
        <section className="bg-white py-14 md:py-20">
          <Container>
            <article className="mx-auto max-w-3xl">
              {subpage.detail?.map((section) => (
                <section
                  key={section.title}
                  className="mb-12"
                >
                  <h2 className="font-serif text-3xl leading-tight text-[#1E2A1C] md:text-4xl">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={`${section.title}-${index}`}
                        className="text-base leading-8 text-[#1E2A1C]/75 md:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Evidence */}
              {subpage.evidence &&
                subpage.evidence.length > 0 && (
                  <section className="mb-14 border-t border-black/10 pt-10">
                    <h2 className="font-serif text-3xl text-[#1E2A1C]">
                      Evidence and Further Reading
                    </h2>

                    <div className="mt-6 space-y-6">
                      {subpage.evidence.map((item) => (
                        <div key={`${item.source}-${item.claim}`}>
                          <p className="leading-7 text-[#1E2A1C]/80">
                            {item.claim}
                          </p>

                          <p className="mt-2 text-sm text-black/60">
                            {item.source}

                            {item.url && (
                              <>
                                {" "}
                                —{" "}
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline underline-offset-4"
                                >
                                  Read source
                                </a>
                              </>
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              {/* FAQs */}
              {subpage.faqs &&
                subpage.faqs.length > 0 && (
                  <section className="border-t border-black/10 pt-12">
                    <h2 className="font-serif text-3xl text-[#1E2A1C] md:text-4xl">
                      Frequently Asked Questions
                    </h2>

                    <div className="mt-8 space-y-8">
                      {subpage.faqs.map((faq) => (
                        <div key={faq.question}>
                          <h3 className="text-lg font-medium text-[#1E2A1C]">
                            {faq.question}
                          </h3>

                          <p className="mt-3 leading-7 text-[#1E2A1C]/70">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
            </article>
          </Container>
        </section>

        {/* Parent Condition */}
        <section className="bg-[#f7f5f1] py-14">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href={`/conditions/${condition.slug}`}
                className="inline-flex items-center text-sm font-medium text-[#1E2A1C] underline underline-offset-4"
              >
                ← Back to {condition.title}
              </Link>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className=" bg-[#173F35] py-16 text-white md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl md:text-4xl">
                Explore a personalised approach to healthier habits
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">
                Learn how Sutra Health combines lifestyle-focused guidance,
                nutrition counselling, yoga therapy and related practices
                within a whole-person approach.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/book-appointment"
                  className="rounded-full bg-white px-7 py-3 text-sm font-medium text-[#1E2A1C] transition hover:bg-white/90"
                >
                  Book an Appointment
                </Link>

                <Link
                  href={`/conditions/${condition.slug}`}
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore {condition.title}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}