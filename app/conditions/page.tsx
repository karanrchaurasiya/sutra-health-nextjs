import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Health Conditions We Support | Sutra Health",
  description:
    "Explore Sutra Health's integrative lifestyle approach to weight management, metabolic health, high blood pressure, joint pain, migraine, digestive health and women's health.",

  alternates: {
    canonical: "https://lifequality.org.in/conditions",
  },

  openGraph: {
    title: "Health Conditions We Support | Sutra Health",
    description:
      "Explore integrative lifestyle-focused support for weight management, metabolic health, blood pressure, joint health, migraine, digestive health and women's health.",
    url: "https://lifequality.org.in/conditions",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Health Conditions We Support | Sutra Health",
    description:
      "Explore Sutra Health's integrative lifestyle approach to common health concerns.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const conditions = [
  {
    title: "Weight Management",
    description:
      "Build sustainable lifestyle and nutrition habits that support healthier weight management.",
    href: "/conditions/weight-management",
    image: "/images/conditions/weight-management.png",
  },
  {
    title: "Metabolic Health",
    description:
      "Explore lifestyle, nutrition and movement approaches that support healthier metabolic function.",
    href: "/conditions/metabolic-health",
    image: "/images/conditions/metabolic-health.png",
  },
  {
    title: "High Blood Pressure",
    description:
      "Explore lifestyle, nutrition, movement and stress-management approaches that support cardiovascular wellbeing.",
    href: "/conditions/high-blood-pressure",
    image: "/images/conditions/high-blood-pressure.png",
  },
  {
    title: "Arthritis & Joint Pain",
    description:
      "Explore supportive lifestyle and movement approaches for mobility and everyday joint wellbeing.",
    href: "/conditions/arthritis-joint-pain",
    image: "/images/conditions/arthritis-joint-pain.png",
  },
  {
    title: "Migraine & Headache",
    description:
      "Understand lifestyle factors that may influence recurring headaches and support everyday wellbeing.",
    href: "/conditions/migraine-headache",
    image: "/images/conditions/migraine-headache.png",
  },
  {
    title: "Digestive & Gut Health",
    description:
      "Support digestive wellbeing through practical lifestyle and nutrition habits.",
    href: "/conditions/digestive-gut-health",
    image: "/images/conditions/digestive-gut-health.png",
  },
  {
    title: "Women's Health",
    description:
      "Personalized lifestyle support for health and wellbeing across different stages of life.",
    href: "/conditions/womens-health",
    image: "/images/conditions/womens-health.png",
  },
];

const faqs = [
  {
    question: "What health conditions does Sutra Health support?",
    answer:
      "Sutra Health provides lifestyle-focused support across areas including weight management, metabolic health, high blood pressure, arthritis and joint pain, migraine and headache, digestive and gut health, and women's health.",
  },
  {
    question: "How does Sutra Health approach health conditions?",
    answer:
      "Our approach looks beyond a single symptom and considers lifestyle, nutrition, movement, breath and mind practices alongside your individual health needs and goals.",
  },
  {
    question: "Can lifestyle changes help with health conditions?",
    answer:
      "Lifestyle factors can play an important role in overall health and wellbeing. Sutra Health focuses on practical and sustainable habits that may complement appropriate medical care.",
  },
  {
    question: "Will my care plan be personalized?",
    answer:
      "Yes. Guidance is shaped around your health concerns, goals, lifestyle, nutrition, daily routine and individual circumstances rather than following a one-size-fits-all approach.",
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
  return (
    <main className="bg-[#FAF8F1]">

      {/* ==================================================
    HERO
    ================================================== */}

<section className="relative overflow-hidden bg-[#FAF8F1]">
  <Container>

    <div className="grid min-h-[560px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">

      {/* ==================================================
          LEFT — CONTENT
          ================================================== */}

      <div className="relative z-10 max-w-2xl">

        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
          Health Conditions
        </p>

        <h1 className="font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[58px] lg:text-[68px]">
          Personalized care 
          <br />
          for real 
          <br />
          <span className="italic text-[#65966F]">
          health challenges. 
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-[14px] leading-7 text-[#687A73] sm:text-[16px]">
          We take a whole-person approach to common health concerns,
          bringing together lifestyle medicine, nutrition, movement,
          breath and mind practices around your individual needs.
        </p>

        {/* Small supporting statement */}

        <div className="mt-8 flex items-center gap-4 border-l-2 border-[#9DB9A0] pl-5">

          <p className="max-w-md text-[12px] leading-6 text-[#71817A] sm:text-[13px]">
            Explore the areas of health we commonly support and discover
            practical approaches for long-term wellbeing.
          </p>

        </div>

      </div>


      {/* ==================================================
          RIGHT — VISUAL
          ================================================== */}

      <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">

        {/* Decorative shape */}

        <div
          aria-hidden="true"
          className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#789A7D]/20 sm:-right-12 sm:-top-12 sm:h-52 sm:w-52"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-dashed border-[#789A7D]/20 sm:-bottom-10 sm:-left-10 sm:h-36 sm:w-36"
        />

        {/* Image */}

        <div className="relative overflow-hidden rounded-[32px] bg-[#EAF0E7]">

          <div className="relative aspect-[4/4.5]">

            <Image
              src="/images/conditions/conditions.png"
              alt="Integrative lifestyle healthcare"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover"
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/25 via-transparent to-transparent" />

          </div>

        </div>


        {/* Floating card */}

        <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#173F35]/10 bg-white/95 px-5 py-4 shadow-[0_16px_40px_rgba(23,63,53,0.12)] backdrop-blur-sm sm:left-8">

          <p className="font-serif text-[24px] text-[#173F35]">
            Whole-person
          </p>

          <p className="mt-1 text-[10px] text-[#71817A] sm:text-[11px]">
            Lifestyle-focused care
          </p>

        </div>

      </div>

    </div>

  </Container>
</section>


      {/* ==================================================
          CONDITIONS
          ================================================== */}

      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mb-10 text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
              Areas of Care
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.025em] text-[#173F35] sm:text-4xl">
              Conditions we commonly support
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#71817A]">
              Explore our approach to common health concerns and discover
              how lifestyle, nutrition, movement, breath and mind practices
              can be considered as part of a broader care plan.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {conditions.map((condition, index) => (
              <Link
                key={condition.href}
                href={condition.href}
                className="group overflow-hidden rounded-[24px] border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,63,53,0.10)]"
              >

                {/* Image */}

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={condition.image}
                    alt={`${condition.title} - Sutra Health`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/25 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-[#65806F] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* Content */}

                <div className="relative p-6 sm:p-7">

                  <h3 className="pr-10 font-serif text-[24px] leading-tight tracking-[-0.02em] text-[#173F35]">
                    {condition.title}
                  </h3>

                  <p className="mt-3 pr-8 text-[13px] leading-6 text-[#71817A]">
                    {condition.description}
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


      {/* ==================================================
          FAQ
          ================================================== */}

      <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">

            {/* FAQ heading */}

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Common questions
              </p>

              <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Understanding your care.
              </h2>

              <p className="mt-5 max-w-sm text-[14px] leading-7 text-[#687A73]">
                Learn more about the conditions we support and how our
                lifestyle-focused approach fits into your overall care.
              </p>

            </div>


            {/* FAQ list */}

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

                  <div className="pb-6 pl-11 pr-10 sm:pb-7">

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


      {/* ==================================================
          CTA
          ================================================== */}

      <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B5CEB6]">
              Take the next step
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Let's talk about your health.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
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
  );
}