import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Doctors & Experts | Sutra Health",
  description:
    "Meet the doctors and wellness experts at Sutra Health, with expertise across preventive healthcare, lifestyle medicine, nutrition, yoga and whole-person wellbeing.",
  alternates: {
    canonical: "https://lifequality.org.in/doctors",
  },
  openGraph: {
    title: "Doctors & Experts | Sutra Health",
    description:
      "Meet the doctors and wellness experts supporting a personalized, whole-person approach to health.",
    url: "https://lifequality.org.in/doctors",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const experts = [
  {
    name: "Dr. Rakesh Sarwal",
    role: "MBBS, MPH, DrPH (Johns Hopkins), Therapeutic Yoga Consultant",
    description:
      "Public Health physician, Professor of Community Medicine and Head of the Integrated Health Clinic at ESIC Medical College & Hospital, Faridabad. His academic work spans lifestyle medicine, nutrition, yoga, health systems for universal health coverage and public health policy.",
    image: "/images/doctor.jpeg",
    profileUrl: "https://academic.lifequality.org.in/",
    featured: true,
  },
  {
    name: "Mrs. Bimla Sarwal",
    role: "Wellness Practitioner",
    description:
      "30+ years experience in wellness, healthy diet, yoga and natural living — inspiring communities toward sustainable health.",
    image: "/images/doctor-icon.png",
    featured: false,
  },
  {
    name: "Dr. Yamini",
    role: "MBBS, MD",
    description:
      "Experienced healthcare professional with a focus on maternal and family healthcare delivery.",
    image: "/images/doctor-icon.png",
    featured: false,
  },
];

const expertise = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "Academic and clinical interests in lifestyle therapies and practical approaches to supporting healthier living and prevention.",
  },
  {
    number: "02",
    title: "Nutrition",
    description:
      "Research and academic work covering nutrition indicators, dietary diversity and nutrition-related public health.",
  },
  {
    number: "03",
    title: "Yoga",
    description:
      "Therapeutic Yoga is part of Dr. Sarwal's professional expertise and his broader lifestyle-health work.",
  },
  {
    number: "04",
    title: "Health Systems & Public Health Policy",
    description:
      "Work spanning health systems for universal health coverage and public health policy alongside clinical and academic interests.",
  },
];

const focusAreas = [
  "Lifestyle Medicine",
  "Preventive Healthcare",
  "Yoga Therapy",
  "Pranayama",
  "Nutrition Counselling",
  "Lifestyle Modification",
];

export default function DoctorsPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      {/* =====================================================
            HERO
        ===================================================== */}
        <section className="border-b border-[#173F35]/10">
          <Container>
            <div className="py-14 sm:py-18 lg:py-20">
              <div className="mx-auto max-w-[900px] text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                  Doctors & experts
                </p>

                <h1 className="mt-4 font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[60px] lg:text-[70px]">
                  Care guided by
                  <br />
                  experience,{" "}
                  <span className="italic text-[#65966F]">
                    evidence and understanding.
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                  Our team brings together medical knowledge, lifestyle medicine
                  and wellness-focused expertise to support a more connected
                  approach to health.
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {focusAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#173F35]/10 bg-white/60 px-3.5 py-2 text-[10px] font-medium text-[#536A62]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

      {/* =====================================================
          FEATURED DOCTOR
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-20">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#E7EEE5]">
              <Image
                src={experts[0].image}
                alt={experts[0].name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="max-w-[720px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Medical & research leadership
              </p>

              <h2 className="mt-3 font-serif text-[38px] leading-[1.04] tracking-[-0.035em] text-[#123F35] sm:text-[50px]">
                Dr. Rakesh Sarwal
              </h2>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">
                MBBS, MPH, DrPH (Johns Hopkins), Therapeutic Yoga Consultant
              </p>

              <p className="mt-6 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                Public Health physician, Professor of Community Medicine and
                Head of the Integrated Health Clinic at ESIC Medical College &
                Hospital, Faridabad, India.
              </p>

              <p className="mt-4 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                His academic expertise includes Lifestyle Medicine, Nutrition,
                Yoga, Health Systems for Universal Health Coverage and Public
                Health Policy. His research interests explore the effectiveness
                of lifestyle therapies across chronic conditions.
              </p>

              <div className="mt-7 border-t border-[#173F35]/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">
                  Areas of expertise
                </p>

                <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {[
                    "Lifestyle Medicine",
                    "Nutrition",
                    "Yoga",
                    "Health Systems for UHC",
                    "Public Health Policy",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[13px] text-[#50645C]"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={experts[0].profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
              >
                View academic profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TEAM
      ===================================================== */}
      <section className="bg-[#FAF8F1] py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="mb-8 max-w-[680px] sm:mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our team
            </p>

            <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[44px]">
              Different expertise,
              <br />
              <span className="italic text-[#65966F]">
                one connected approach.
              </span>
            </h2>

            <p className="mt-4 max-w-[620px] text-[13px] leading-6 text-[#71817A] sm:text-[14px] sm:leading-7">
              Medical and wellness perspectives can work together to help
              people understand their health and build practical habits for
              everyday life.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {experts.slice(1).map((expert) => (
              <article
                key={`${expert.name}-${expert.role}`}
                className="grid overflow-hidden rounded-[18px] border border-[#173F35]/10 bg-white sm:grid-cols-[190px_1fr]"
              >
                <div className="relative aspect-[4/3] min-h-[190px] sm:aspect-auto">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 190px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-[23px] leading-tight tracking-[-0.02em] text-[#173F35]">
                    {expert.name}
                  </h3>

                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#65966F]">
                    {expert.role}
                  </p>

                  <p className="mt-4 text-[12px] leading-5 text-[#71817A]">
                    {expert.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          RESEARCH & EXPERTISE
      ===================================================== */}
      <section className="border-y border-[#173F35]/10 bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Research & academic work
                </p>

                <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                  Research across{" "}
                  <span className="italic text-[#65966F]">
                    lifestyle, nutrition and public health.
                  </span>
                </h2>
              </div>

              <div className="max-w-[720px]">
                <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                  Dr. Rakesh Sarwal&apos;s academic profile identifies Lifestyle
                  Medicine, Nutrition and Yoga as areas of expertise, alongside
                  Health Systems for Universal Health Coverage and Public Health
                  Policy.
                </p>

                <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                  His stated research interests include exploring the
                  effectiveness of lifestyle therapies across a spectrum of
                  chronic conditions. The selected work below provides a direct
                  route to the underlying academic publications.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[18px] border border-[#173F35]/10 bg-[#173F35]/10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title:
                    "A traffic light approach to lifestyle change",
                  description:
                    "Health building guideline for NCD outpatients in India · Journal of Family Medicine and Primary Care · 2026",
                  href: "https://academic.lifequality.org.in/publication/2026-a-traffic-light-approach-to-lifestyle-change-health-building",
                  label: "Read publication",
                },
                {
                  number: "02",
                  title:
                    "Remission of Irritable Bowel Syndrome through diet, lifestyle modification and yoga",
                  description:
                    "Case report exploring a combined lifestyle approach to IBS · 2026",
                  href: "https://www.preprints.org/manuscript/202603.0183",
                  label: "Read case report",
                },
                {
                  number: "03",
                  title:
                    "Dietary diversity and micronutrient deficiencies in India",
                  description:
                    "Academic work examining dietary diversity as a sustainable public-health approach · 2022",
                  href: "https://academic.lifequality.org.in/",
                  label: "Explore research",
                },
                {
                  number: "04",
                  title:
                    "Key nutrition indicators from NFHS-4 and NFHS-5",
                  description:
                    "Analysis of national and State/UT nutrition indicators and trends · 2022",
                  href: "https://academic.lifequality.org.in/publication/2022-analysis-of-key-nutrition-indicators-based-on-national-famil",
                  label: "Read publication",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="bg-[#FAF8F1] p-6 sm:p-7"
                >
                  <span className="text-[9px] font-semibold tracking-[0.16em] text-[#8A9992]">
                    {item.number}
                  </span>

                  <h3 className="mt-3 font-serif text-[24px] leading-tight tracking-[-0.02em] text-[#173F35]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-5 text-[#71817A] sm:text-[13px] sm:leading-6">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
                  >
                    {item.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
              >
                View academic profile & publications
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          DOCTOR'S MESSAGE
      ===================================================== */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="mx-auto max-w-[850px] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8]">
                Doctor&apos;s perspective
              </p>

              <p className="mt-5 font-serif text-[28px] leading-[1.25] tracking-[-0.025em] text-[#FAF8F1] sm:text-[36px] lg:text-[42px]">
                Dr. Sarwal&apos;s work is centred on prevention, healthy
                lifestyles and helping people take greater responsibility for
                their health.
              </p>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CCB8]">
                Based on his academic profile
              </p>

              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read academic profile
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONNECTED APPROACH
      ===================================================== */}
      <section className="bg-white py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                A connected team
              </p>

              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[46px]">
                Different expertise.
                <br />
                One whole-person approach.
              </h2>
            </div>

            <div className="max-w-[700px]">
              <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                Health is influenced by many parts of everyday life. Our
                approach brings together lifestyle, nutrition, movement,
                breath and mind to create practical support around individual
                needs.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Lifestyle",
                  "Nutrition",
                  "Yogasana",
                  "Breath",
                  "Mind",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#173F35]/10 bg-[#FAF8F1] px-4 py-2 text-[11px] font-medium text-[#536A62]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#173F35] py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6] sm:text-[11px]">
              Start a conversation
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[50px]">
              Understand your health
              <br className="hidden sm:block" />
              with the right guidance.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[13px] leading-6 text-[#CBDAD1] sm:text-[14px] sm:leading-7">
              Start with a conversation about your health, lifestyle and goals
              and explore the next step that may be appropriate for you.
            </p>

            <Link
              href="/book-appointment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
            >
              Book an Appointment
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}