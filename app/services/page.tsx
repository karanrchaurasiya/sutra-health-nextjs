import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Integrative Health Services | Sutra Health",
  description:
    "Explore Sutra Health services including lifestyle medicine, integrative medicine, therapeutic yoga, nutrition counselling, meditation and the 21-Point Health Assessment.",

  alternates: {
    canonical: "https://lifequality.org.in/services",
  },

  openGraph: {
    title: "Integrative Health Services | Sutra Health",
    description:
      "Personalized lifestyle-focused healthcare through lifestyle medicine, nutrition, therapeutic yoga, meditation and health assessment.",
    url: "https://lifequality.org.in/services",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Integrative Health Services | Sutra Health",
    description:
      "Explore personalized lifestyle and integrative healthcare services from Sutra Health.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    number: "01",
    title: "Lifestyle Medicine",
    description:
      "A personalized approach that focuses on everyday habits and sustainable changes that support your health goals.",
    href: "/services/lifestyle-medicine",
    image: "/images/services/lifestyle-medicine.png",
  },
  {
    number: "02",
    title: "Integrative Medicine",
    description:
      "A whole-person approach that considers different aspects of your health and wellbeing together.",
    href: "/services/integrative-medicine",
    image: "/images/services/integrative-medicine.png",
  },
  {
    number: "03",
    title: "Therapeutic Yoga",
    description:
      "Personalized yoga-based practices designed around movement, strength, flexibility and wellbeing.",
    href: "/services/therapeutic-yoga",
    image: "/images/services/therapeutic-yoga.png",
  },
  {
    number: "04",
    title: "Nutrition Counselling",
    description:
      "Practical nutrition guidance designed around your individual needs, preferences and everyday routine.",
    href: "/services/nutrition-counselling",
    image: "/images/services/nutrition-counselling.png",
  },
  {
    number: "05",
    title: "Meditation & Stress Support",
    description:
      "Mindfulness and relaxation practices that can become part of a healthier daily routine.",
    href: "/services/meditation-stress-support",
    image: "/images/services/meditation-stress-support.png",
  },
  {
    number: "06",
    title: "21-Point Health Assessment",
    description:
      "A structured assessment designed to help you understand different aspects of your health and lifestyle.",
    href: "/services/health-assessment",
    image: "/images/services/health-assessment.png",
  },
];

const faqs = [
  {
    question: "What services does Sutra Health provide?",
    answer:
      "Sutra Health offers lifestyle medicine, integrative medicine, therapeutic yoga, nutrition counselling, meditation and stress support, and a 21-Point Health Assessment.",
  },
  {
    question: "Which Sutra Health service is right for me?",
    answer:
      "The right service depends on your health concerns, goals, lifestyle and individual needs. A consultation can help you understand which approach or combination of services may be appropriate for you.",
  },
  {
    question: "Can different Sutra Health services be combined?",
    answer:
      "Yes. Different aspects of health are connected, so services such as lifestyle guidance, nutrition, therapeutic yoga, breath and mind practices may be considered together according to your individual needs.",
  },
  {
    question: "What is Lifestyle Medicine?",
    answer:
      "Lifestyle medicine focuses on everyday behaviours and habits that influence health and wellbeing. It may include areas such as nutrition, physical activity, sleep, stress management and other lifestyle factors.",
  },
  {
    question: "What is the 21-Point Health Assessment?",
    answer:
      "The 21-Point Health Assessment is a structured framework designed to help you look at different aspects of your health and everyday lifestyle and identify areas where sustainable changes may be useful.",
  },
  {
    question: "Do I need a medical diagnosis before booking a service?",
    answer:
      "You can book a consultation to discuss your health concerns and goals. Your situation can then be considered to determine an appropriate next step.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF8F1]">

      {/* ==================================================
          HERO
          ================================================== */}

      <section className="relative overflow-hidden border-b border-[#173F35]/10">
        <Container>

          <div className="grid min-h-[560px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">

            {/* Content */}

            <div className="max-w-2xl">

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
                Our services
              </p>

              <h1 className="mt-5 font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[58px] lg:text-[68px]">
                Care designed around
                <br />
                <span className="italic text-[#65966F]">
                  your whole health.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-[14px] leading-7 text-[#687A73] sm:text-[16px]">
                We bring together lifestyle medicine, nutrition, movement,
                therapeutic yoga, breath and mind practices to create a
                personalized approach to health and wellbeing.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/book-appointment"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#123F35] px-7 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0D332C]"
                >
                  Book an Appointment
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/assessment"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#173F35]/20 bg-white/60 px-7 text-[13px] font-semibold text-[#173F35] transition hover:bg-white"
                >
                  Explore 21-Point Assessment
                </Link>

              </div>

            </div>


            {/* Hero visual */}

            <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">

              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#789A7D]/20 sm:-right-12 sm:-top-12 sm:h-52 sm:w-52"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-dashed border-[#789A7D]/20 sm:-bottom-10 sm:-left-10 sm:h-36 sm:w-36"
              />

              <div className="relative overflow-hidden rounded-[30px] bg-[#EAF0E7]">

                <div className="relative aspect-[4/4.5]">

                  <Image
                    src="/images/services/service.png"
                    alt="Integrative lifestyle healthcare services"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 500px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/20 via-transparent to-transparent" />

                </div>

              </div>

              {/* Floating card */}

              <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#173F35]/10 bg-white/95 px-5 py-4 shadow-[0_16px_40px_rgba(23,63,53,0.12)] backdrop-blur-sm sm:left-8">

                <p className="font-serif text-[24px] text-[#173F35]">
                  Whole-person
                </p>

                <p className="mt-1 text-[10px] text-[#71817A] sm:text-[11px]">
                  Personalized care
                </p>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* ==================================================
          SERVICES GRID
          ================================================== */}

      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
              What we offer
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
              Personalized care for every journey
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#71817A]">
              Explore services designed to support different aspects of
              health while keeping your individual needs and goals at the
              centre of care.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-[24px] border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,63,53,0.10)]"
              >

                {/* Image */}

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAF0E7]">

                  <Image
                    src={service.image}
                    alt={`${service.title} - Sutra Health`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/25 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-[#65806F] backdrop-blur-sm">
                    {service.number}
                  </span>

                </div>


                {/* Content */}

                <div className="relative p-6 sm:p-7">

                  <h2 className="pr-10 font-serif text-[25px] leading-tight tracking-[-0.02em] text-[#173F35]">
                    {service.title}
                  </h2>

                  <p className="mt-3 pr-8 text-[13px] leading-6 text-[#71817A]">
                    {service.description}
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
          INTEGRATIVE APPROACH
          ================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                One connected approach
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Your health is more than one service.
              </h2>

            </div>


            <div>

              <p className="text-[15px] leading-7 text-[#687A73]">
                Different parts of health are connected. Our approach brings
                together practical areas of healthy living so that your care
                can be shaped around your needs, goals and everyday life.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "Lifestyle",
                  "Nutrition",
                  "Yogasana",
                  "Breath",
                  "Mind",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#173F35]/10 bg-[#FAF8F1] px-4 py-2 text-[12px] font-medium text-[#536A62]"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* ==================================================
          FAQ
          ================================================== */}

      <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">

            {/* Heading */}

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Common questions
              </p>

              <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Questions about our services?
              </h2>

              <p className="mt-5 max-w-sm text-[14px] leading-7 text-[#687A73]">
                Learn more about our services and how they can fit into a
                personalized approach to your health.
              </p>

            </div>


            {/* FAQ */}

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

                  <div className="pb-6 pl-11 pr-8 sm:pb-7">

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
              Start your journey
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Not sure where
              <br className="hidden sm:block" />
              to begin?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Book a consultation to discuss your health goals and understand
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
  );
}