import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";
import YouTubeFacade from "@/components/shared/YouTubeFacade";

export const metadata: Metadata = {
  title: "About Sutra Health | EQUAL Society, Faridabad Since 1997",
  description:
    "Sutra Health is rooted in EQUAL Society, a Faridabad-based not-for-profit registered in 1997, working in integrative lifestyle medicine, yoga therapy, nutrition and community wellbeing.",
  alternates: {
    canonical: "https://sutrahealth.vercel.app/about", // TODO: confirm final path once domain decision is finalized
  },
};

const values = [
  {
    number: "01",
    title: "Health Advancement",
    description:
      "Promoting preventive, promotive, curative and rehabilitative approaches to health.",
  },
  {
    number: "02",
    title: "Family Welfare",
    description:
      "Supporting family health, maternal and child health and community awareness.",
  },
  {
    number: "03",
    title: "Quality of Life",
    description:
      "Working toward healthier living, education, nutrition and better opportunities for communities.",
  },
  {
    number: "04",
    title: "Human Values",
    description:
      "Promoting dignity, equality, awareness and humanitarian service.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Lifestyle",
    description: "Healthy everyday habits that support long-term wellbeing.",
  },
  {
    number: "02",
    title: "Nutrition",
    description: "Practical nutrition and dietary guidance.",
  },
  {
    number: "03",
    title: "Yogasana",
    description: "Yoga-based practices for movement and wellbeing.",
  },
  {
    number: "04",
    title: "Breath",
    description: "Breathing practices supporting calm and awareness.",
  },
  {
    number: "05",
    title: "Mind",
    description: "Mindfulness and positive mental wellbeing.",
  },
];

// Real FAQ content, restored and rewritten from the old site — hedged
// consistently with the rest of this site's health-claim language,
// factual and specific on organizational details rather than vague.
const faqs = [
  {
    question: "What is EQUAL Society?",
    answer:
      "EQUAL (Effort For Quality of Life) Society is a Faridabad-based not-for-profit organization, registered under the Societies Registration Act, 1860 (Haryana, registration no. 363, dated 28 May 1997). Sutra Health is rooted in this organization's work in integrative lifestyle medicine, yoga therapy, nutrition and community wellbeing.",
  },
  {
    question: "Where is EQUAL Society located?",
    answer:
      "EQUAL Society is based in Sector 46, Faridabad, Haryana. Consultations are also available online for people across India.",
  },
  {
    question: "Are donations to EQUAL Society tax-exempt?",
    answer:
      "Eligible donations may qualify for tax benefits under applicable Income Tax Act provisions, subject to the organization's current registration status. Donors should refer to current documentation or consult a tax professional regarding their individual eligibility.",
  },
  {
    question: "Who founded EQUAL Society?",
    answer:
      "EQUAL Society was founded in 1997 by Dr. Rakesh Sarwal (MBBS, MPH, DrPH), a public health physician whose published research and academic profile are available separately.",
  },
  {
    question: "What is the TCIH Declaration, and why does it matter here?",
    answer:
      "TCIH stands for Traditional Complementary Integrative Healthcare. EQUAL Society is a signatory to this declaration, which affirms a commitment to combining traditional and modern medicine responsibly rather than treating them as competing systems.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Lifestyle medicine and yoga therapy consultations are available online for people across India, alongside in-person consultations in Faridabad.",
  },
  {
    question: "Is this approach a substitute for medical treatment?",
    answer:
      "No. Our lifestyle and yoga-based approach is intended to complement appropriate medical care, not replace it. People with existing health conditions should continue working with their treating physician.",
  },
  {
    question: "How can I donate to EQUAL Society?",
    answer:
      "Donations can be made by bank transfer or UPI/QR code, both shown further down this page. As above, any tax benefit depends on the organization's current registration status at the time of your donation.",
  },
];

const VIDEO_ID = "izgvAGiWhA0";

// ─────────────────────────────────────────────────────────────────
// Structured data — corrected from the old site's version:
// - Dropped the "98% success rate" / "reverse chronic conditions"
//   claim entirely (unverifiable, and riskier in machine-readable
//   form than in prose a human reads with context around it).
// - Dropped `nonprofitStatus: NonprofitANBI` — that's a Dutch tax
//   classification, not an Indian one. Rather than substitute a
//   different guessed enum value, we state the real registration
//   facts as plain properties and let the FAQ carry the honest
//   hedge on current tax-exemption status.
// - Kept the founder → academic profile → real publication links,
//   which is genuine, checkable E-E-A-T signal worth having on the
//   About page specifically.
// ─────────────────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["NGO", "MedicalBusiness"],
  "@id": "https://sutrahealth.vercel.app/#organization", // TODO: confirm final domain
  name: "Sutra Health",
  alternateName: [
    "Life Quality",
    "EQUAL Society - Effort For Quality of Life",
  ],
  legalName: "Effort For Quality of Life (EQUAL) Society",
  url: "https://sutrahealth.vercel.app/",
  description:
    "Sutra Health is rooted in EQUAL Society, a Faridabad-based not-for-profit registered in 1997 under the Societies Registration Act, working in integrative lifestyle medicine, yoga therapy, nutrition and community wellbeing, alongside appropriate medical care.",
  foundingDate: "1997-05-28",
  founder: {
    "@type": "Person",
    name: "Dr. Rakesh Sarwal",
    honorificSuffix: "MBBS, MPH, DrPH",
    url: "https://academic.lifequality.org.in/",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Integrative Lifestyle Medicine",
    "Yoga Therapy",
    "Pranayama",
    "Nutrition Counselling",
    "Health and Wellness Education",
  ],
  medicalSpecialty: ["Lifestyle Medicine", "Integrative Medicine"],
  sameAs: [
    "https://academic.lifequality.org.in/",
    "https://pmc.ncbi.nlm.nih.gov/articles/PMC12975079/",
    "https://zenodo.org/records/15814357",
    "https://www.preprints.org/manuscript/202603.0183/",
    "https://www.instagram.com/sutrahealth/",
    "https://www.youtube.com/@sutra-health",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sutrahealth.vercel.app/" },
    { "@type": "ListItem", position: 2, name: "About Sutra Health", item: "https://sutrahealth.vercel.app/about" },
  ],
};

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

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F1]">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[#173F35]/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              About Sutra Health
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#123F35] sm:text-5xl lg:text-6xl">
              A commitment to
              <br />
              better quality of life.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
              Sutra Health is rooted in EQUAL Society, registered in 1997 —
              nearly three decades working in health, wellbeing, education
              and community.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-[#EAF1E7] sm:h-[400px] lg:h-[460px]">
              <Image
                src="/images/about-us.png"
                alt="Yoga and lifestyle medicine practice at Sutra Health"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Our story
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Rooted in a commitment to quality of life.
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                <p>
                  Sutra Health is connected with Effort For Quality of Life
                  (EQUAL) Society, a not-for-profit organization registered
                  under the Societies Registration Act, 1860, in Haryana
                  (registration no. 363, dated 28 May 1997).
                </p>

                <p>
                  EQUAL Society&apos;s work spans health advancement, family
                  welfare, quality of life, education, empowerment and
                  sustainable living — bringing together yoga therapy,
                  nutrition and modern medicine as complementary parts of
                  one approach, not competing systems.
                </p>

                <p>
                  EQUAL Society is also a signatory to the Traditional
                  Complementary Integrative Healthcare (TCIH) Declaration,
                  affirming a commitment to inclusive, evidence-based
                  health practices.{" "}
                  <a
                    href="https://tcih.org/wp-content/uploads/2022/09/2022.03.09_TCIH-Declaration_English.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#173F35] underline decoration-[#B7CCB8] underline-offset-2 transition-colors hover:text-[#65966F]"
                  >
                    Read the declaration
                  </a>
                  .
                </p>
              </div>

              <div className="mt-7">
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
                >
                  Meet our team
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          OUR FOUNDATION
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our foundation
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
              Health, family, community and dignity.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
              EQUAL Society&apos;s work spans the continuum from prevention
              to rehabilitation, and from individual wellbeing to community
              health.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-[22px] border border-[#173F35]/10 bg-[#FCFCF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_35px_rgba(23,63,53,0.07)]"
              >
                <span className="font-serif text-[28px] leading-none tracking-[-0.04em] text-[#B4C7B7]">
                  {value.number}
                </span>

                <h3 className="mt-8 font-serif text-[22px] tracking-[-0.02em] text-[#173F35]">
                  {value.title}
                </h3>

                <p className="mt-3 text-[12px] leading-5 text-[#71817A]">
                  {value.description}
                </p>

                <div className="mt-6 h-px w-8 bg-[#9DB7A0] transition-all duration-300 group-hover:w-12" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          INTEGRATIVE APPROACH
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our approach
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
              Whole-person care.
              <br />
              Connected thinking.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
              Integrative medicine brings together different systems and
              approaches to care for the complete person rather than
              looking at health in isolation.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-[20px] border border-[#173F35]/10 bg-[#FAF8F1] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#F1F4ED]"
              >
                <span className="text-[9px] font-semibold tracking-[0.16em] text-[#A0AEA7]">
                  {pillar.number}
                </span>

                <div className="mx-auto mt-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#B7CCB8] bg-[#EAF1E7] text-[#4F8160]">
                  ✦
                </div>

                <h3 className="mt-4 font-serif text-[21px] tracking-[-0.02em] text-[#173F35]">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#71817A]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          LEADERSHIP
      ===================================================== */}
      <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] bg-[#EAF1E7]">
              <div className="relative h-[380px] sm:h-[440px]">
                <Image
                  src="/images/doctor.jpeg"
                  alt="Dr. Rakesh Sarwal"
                  fill
                  sizes="360px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Leadership
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Dr. Rakesh Sarwal
              </h2>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#65966F] sm:text-[11px]">
                MBBS, MPH, DrPH · Therapeutic Yoga Consultant
              </p>

              <p className="mt-6 text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                Dr. Rakesh Sarwal is a public health physician and
                Therapeutic Yoga Consultant with published research on
                lifestyle-based approaches to chronic disease management,
                including work on non-communicable disease care and
                digestive health.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                His work emphasizes prevention and helping people take an
                active role in their health through evidence-informed
                lifestyle change, alongside appropriate medical care.
              </p>

              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
              >
                View academic profile and publications
                <span>↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TIMELINE / LEGACY
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Our journey
              </p>

              <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                A long-term commitment to health.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[22px] border border-[#173F35]/10 bg-[#FAF8F1] p-7">
                <p className="font-serif text-4xl text-[#65966F]">1997</p>

                <h3 className="mt-4 font-serif text-[22px] text-[#173F35]">
                  EQUAL Society established
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-[#71817A]">
                  Registered under the Societies Registration Act, 1860, in
                  Haryana (registration no. 363), with a focus on improving
                  quality of life.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#173F35]/10 bg-[#F1F4ED] p-7">
                <p className="font-serif text-4xl text-[#65966F]">Today</p>

                <h3 className="mt-4 font-serif text-[22px] text-[#173F35]">
                  Integrative health
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-[#71817A]">
                  Sutra Health continues this philosophy through lifestyle
                  medicine, yoga therapy, nutrition and integrative
                  healthcare.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          EQUAL SOCIETY VIDEO
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Watch
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
              EQUAL Society — Video
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
              Learn more about EQUAL Society and our approach to health,
              wellness and community service.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[28px] border border-[#173F35]/10 bg-[#F1F4ED] shadow-[0_20px_50px_rgba(23,63,53,0.08)]">
            <div className="relative aspect-video w-full">
              <YouTubeFacade videoId={VIDEO_ID} title="EQUAL Society Video" />
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
                        Common questions about EQUAL Society, our approach, and how to get involved.
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

      {/* =====================================================
          SUPPORT EQUAL SOCIETY
      ===================================================== */}
      <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Support us
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Support EQUAL Society.
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                Your support helps EQUAL Society continue its work in
                health awareness, wellness, education, community
                empowerment and quality of life.
              </p>

              <div className="mt-8 overflow-hidden rounded-[24px] border border-[#173F35]/10 bg-white">
                <div className="flex items-center gap-4 border-b border-[#173F35]/10 p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    ✦
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      Organization
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-[#173F35]">
                      Effort for Quality of Life (EQUAL)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-[#173F35]/10 p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    ▦
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      Bank
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-[#173F35]">
                      RBL Bank, Sector 21-C, Faridabad
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-[#173F35]/10 p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    #
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      IFSC Code
                    </p>
                    <p className="mt-1 font-mono text-[14px] font-semibold tracking-wide text-[#173F35]">
                      RATN0000493
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    ₹
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      Account Number
                    </p>
                    <p className="mt-1 font-mono text-[14px] font-semibold tracking-wide text-[#173F35]">
                      309017789765
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[11px] leading-5 text-[#71817A]">
                Eligible donations may qualify for applicable tax benefits
                subject to current Section 80G rules and eligibility.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[330px] rounded-[28px] border border-[#173F35]/10 bg-white p-5 shadow-[0_20px_45px_rgba(23,63,53,0.08)] sm:p-7">
                <div className="text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                    Scan & Pay
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-[#173F35]">
                    Make a contribution
                  </h3>
                </div>

                <div className="mx-auto mt-6 flex aspect-square w-full max-w-[250px] items-center justify-center rounded-2xl bg-white p-3">
                  <Image
                    src="/images/QR-code.png"
                    alt="QR code to donate to EQUAL Society"
                    width={250}
                    height={250}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="mt-5 text-center">
                  <p className="text-[11px] font-semibold text-[#173F35]">
                    EFFORT FOR QUALITY OF LIFE (EQUAL)
                  </p>
                  <p className="mt-2 text-[11px] text-[#71817A]">
                    Scan the QR code to donate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6] sm:text-[11px]">
              Start your journey
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Better health starts
              <br className="hidden sm:block" />
              with understanding.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Explore our approach or start a conversation about your health
              goals.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35] transition hover:bg-white"
              >
                Book an Appointment
                <span>→</span>
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-[#CBDAD1]/30 px-7 py-3.5 text-sm font-semibold text-[#FAF8F1] transition hover:bg-white/10"
              >
                Explore Programs
                <span>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      
    </main>
  );
}