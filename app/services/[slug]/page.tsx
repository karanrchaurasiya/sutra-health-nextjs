import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/shared/Container";
import { conditions } from "@/data/conditions";
import { services, getService } from "@/data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Sutra Health",
    };
  }

  return {
    title: `${service.title} | Sutra Health`,
    description: service.shortDescription,
    alternates: {
      canonical: `https://lifequality.org.in/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Sutra Health`,
      description: service.shortDescription,
      url: `https://lifequality.org.in/services/${service.slug}`,
      siteName: "Sutra Health",
      type: "article",
      locale: "en_IN",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServices
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const relatedConditions = service.relatedConditions
    .map((relatedSlug) =>
      conditions.find((condition) => condition.slug === relatedSlug),
    )
    .filter(
      (item): item is NonNullable<typeof item> => Boolean(item),
    );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://lifequality.org.in/services/${service.slug}#service`,
        name: service.title,
        description: service.shortDescription,
        url: `https://lifequality.org.in/services/${service.slug}`,
        provider: {
          "@type": "Organization",
          name: "Sutra Health",
          url: "https://lifequality.org.in/",
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `https://lifequality.org.in/services/${service.slug}#breadcrumb`,
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
            name: "Services",
            item: "https://lifequality.org.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://lifequality.org.in/services/${service.slug}`,
          },
        ],
      },

      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="bg-[#FAF8F1]">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="border-b border-[#173F35]/10">
          <Container>

            <div className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:py-24">

              {/* Text */}
              <div className="max-w-2xl">

                <Link
                  href="/services"
                  className="inline-flex items-center text-[12px] font-medium text-[#65966F] transition hover:text-[#173F35]"
                >
                  ← All Services
                </Link>

                <p className="mt-9 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Sutra Health Services
                </p>

                <h1 className="mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.045em] text-[#123F35] sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>

                <p className="mt-6 max-w-xl text-[15px] leading-8 text-[#687A73] sm:text-[17px]">
                  {service.shortDescription}
                </p>

                <Link
                  href="/book-appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#123F35] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0D332C]"
                >
                  Book an Appointment
                  <span aria-hidden="true">→</span>
                </Link>

              </div>

              {/* Image */}
              <div className="relative mx-auto w-full max-w-[580px] lg:ml-auto">

                <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#EAF0E7]">
                  <Image
                    src={`/images/services/${service.slug}.png`}
                    alt={`${service.title} - Sutra Health`}
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

        {/* =====================================================
            ARTICLE
        ====================================================== */}

        <article>

          {/* Introduction */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>

              <div className="mx-auto max-w-5xl">

                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                  About {service.title}
                </p>

                <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                  A personalized approach to your health
                </h2>

                <p className="mt-7 max-w-4xl text-[16px] leading-8 text-[#5F716A] sm:text-[17px] sm:leading-9">
                  {service.introduction}
                </p>

              </div>

            </Container>
          </section>

          {/* Main sections */}
          {service.sections.map((section, index) => (
            <section
              key={section.title}
              className={
                index % 2 === 0
                  ? "bg-[#FAF8F1] py-16 sm:py-20 lg:py-24"
                  : "bg-white py-16 sm:py-20 lg:py-24"
              }
            >
              <Container>

                <div className="mx-auto max-w-5xl">

                  <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">

                    <div>
                      <span className="text-[11px] font-semibold tracking-[0.18em] text-[#9CAD9F]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[15px] leading-8 text-[#5F716A] sm:text-[16px] sm:leading-9"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                  </div>

                </div>

              </Container>
            </section>
          ))}

          {/* What it can include */}
          <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
            <Container>

              <div className="mx-auto max-w-5xl">

                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                  What it can include
                </p>

                <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                  Areas that may form part of your care
                </h2>

                <div className="mt-9 grid gap-x-10 border-y border-[#173F35]/10 sm:grid-cols-2">

                  {service.highlights.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 border-b border-[#173F35]/10 py-5 last:border-b-0 sm:nth-[2n]:border-b-0"
                    >
                      <span className="mt-1 text-[11px] font-semibold text-[#65966F]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-[15px] leading-7 text-[#536A62]">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </Container>
          </section>

          {/* Who may benefit */}
          <section className="bg-white py-16 sm:py-20 lg:py-24">
            <Container>

              <div className="mx-auto max-w-5xl">

                <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                      Is this for you?
                    </p>

                    <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                      Who may be interested
                    </h2>
                  </div>

                  <div className="divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">

                    {service.whoMayBenefit.map((item) => (
                      <div
                        key={item}
                        className="flex gap-4 py-4"
                      >
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E2EDE0] text-[11px] text-[#4F8160]">
                          ✓
                        </span>

                        <p className="text-[14px] leading-6 text-[#536A62]">
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </Container>
          </section>

          {/* =====================================================
              RELATED SERVICES
          ====================================================== */}

          {relatedServices.length > 0 && (
            <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
              <Container>

                <div className="mx-auto max-w-5xl">

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Continue exploring
                  </p>

                  <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                    Other Sutra Health services
                  </h2>

                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#71817A]">
                    Different services may complement one another depending
                    on your health needs, goals and circumstances.
                  </p>

                  <div className="mt-9 grid gap-5 md:grid-cols-3">

                    {relatedServices.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/services/${item.slug}`}
                        className="group overflow-hidden rounded-[22px] border border-[#173F35]/10 bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.09)]"
                      >

                        <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF0E7]">

                          <Image
                            src={`/images/services/${item.slug}.png`}
                            alt={`${item.title} - Sutra Health`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                        </div>

                        <div className="p-5">

                          <h3 className="font-serif text-[22px] text-[#173F35]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-[13px] leading-6 text-[#71817A]">
                            {item.shortDescription}
                          </p>

                          <span className="mt-4 inline-flex text-[12px] font-semibold text-[#65966F]">
                            Explore service →
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
              RELATED CONDITIONS
          ====================================================== */}

          {relatedConditions.length > 0 && (
            <section className="bg-white py-16 sm:py-20 lg:py-24">
              <Container>

                <div className="mx-auto max-w-5xl">

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Related health areas
                  </p>

                  <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                    Explore related conditions
                  </h2>

                  <div className="mt-9 grid gap-5 md:grid-cols-3">

                    {relatedConditions.map((condition) => (
                      <Link
                        key={condition.slug}
                        href={`/conditions/${condition.slug}`}
                        className="group rounded-[22px] border border-[#173F35]/10 bg-[#FAF8F1] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.08)]"
                      >

                        <h3 className="font-serif text-[22px] text-[#173F35]">
                          {condition.title}
                        </h3>

                        <p className="mt-3 text-[13px] leading-6 text-[#71817A]">
                          {condition.shortDescription}
                        </p>

                        <span className="mt-5 inline-flex text-[12px] font-semibold text-[#65966F]">
                          Read more →
                        </span>

                      </Link>
                    ))}

                  </div>

                </div>

              </Container>
            </section>
          )}

          {/* =====================================================
              FAQ
          ====================================================== */}

          <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
            <Container>

              <div className="mx-auto max-w-4xl">

                <div className="max-w-2xl">

                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    Frequently asked questions
                  </p>

                  <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] text-[#173F35] sm:text-4xl">
                    Questions about {service.title}
                  </h2>

                </div>

                <div className="mt-9 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">

                  {service.faqs.map((faq, index) => (
                    <details
                      key={faq.question}
                      className="group py-5"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                        <span className="flex gap-4">

                          <span className="pt-0.5 text-[10px] font-semibold tracking-[0.12em] text-[#9CAD9F]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[15px] font-semibold leading-6 text-[#173F35]">
                            {faq.question}
                          </span>

                        </span>

                        <span className="shrink-0 text-lg text-[#65966F] transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <div className="ml-8 mt-4 max-w-3xl text-[14px] leading-7 text-[#687A73]">
                        {faq.answer}
                      </div>
                    </details>
                  ))}

                </div>

              </div>

            </Container>
          </section>

        </article>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
          <Container>

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5CEB6]">
                Take the next step
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#FAF8F1] sm:text-5xl">
                Interested in {service.title}?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-[#CBDAD1]">
                Start a conversation about your health goals and understand
                which approach may be appropriate for you.
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