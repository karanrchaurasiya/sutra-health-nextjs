import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Lifestyle Medicine | Sutra Health",
  description:
    "Explore Sutra Health's practical approach to lifestyle medicine, focusing on everyday habits, routines and sustainable health changes.",
  alternates: {
    canonical: "https://lifequality.org.in/approach/lifestyle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const pillars = [
  {
    number: "01",
    title: "Daily routines",
    description:
      "Looking at the rhythms and routines that shape how health fits into everyday life.",
  },
  {
    number: "02",
    title: "Movement",
    description:
      "Finding practical ways to stay active that fit individual needs and abilities.",
  },
  {
    number: "03",
    title: "Sleep & recovery",
    description:
      "Considering rest, recovery and regular sleep as important parts of overall wellbeing.",
  },
  {
    number: "04",
    title: "Stress",
    description:
      "Exploring practical ways to respond to everyday stress and create space for recovery.",
  },
  {
    number: "05",
    title: "Habits",
    description:
      "Turning healthy intentions into repeatable actions that can become part of daily life.",
  },
  {
    number: "06",
    title: "Environment",
    description:
      "Recognising how home, work and everyday surroundings can influence health choices.",
  },
];

const faqs = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine focuses on the everyday behaviours and routines that influence health, including movement, sleep, stress, nutrition and other habits that shape daily life.",
  },
  {
    question: "Is lifestyle medicine the same for everyone?",
    answer:
      "No. A practical lifestyle approach should be adapted to the individual's needs, abilities, goals and circumstances rather than using a single plan for everyone.",
  },
  {
    question: "Can lifestyle medicine replace medical treatment?",
    answer:
      "No. Lifestyle-focused support is intended to complement appropriate healthcare. Medical diagnosis, treatment and prescribed medication should continue to be managed with qualified healthcare professionals.",
  },
  {
    question: "Why does Sutra Health focus on habits?",
    answer:
      "Long-term health is shaped by what people do repeatedly. The focus is therefore on practical habits that can be sustained over time rather than short-term routines.",
  },
];

export default function LifestyleMedicinePage() {
  return (
    <main className="bg-[#FAF8F1]">
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
                Lifestyle Medicine
              </p>

              <h1 className="mt-5 font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[58px] lg:text-[68px]">
                Health is shaped
                <br />
                by everyday
                <br />
                <span className="italic text-[#65966F]">life.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[14px] leading-7 text-[#687A73] sm:text-[16px]">
                Lifestyle medicine looks at the routines, behaviours and
                circumstances that influence health and helps turn healthy
                intentions into practical changes that can be sustained.
              </p>

              <div className="mt-8 border-l-2 border-[#9DB9A0] pl-5">
                <p className="max-w-md text-[12px] leading-6 text-[#71817A]">
                  Small, practical changes that fit real life are often easier
                  to sustain than dramatic short-term routines.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">
              <div className="relative overflow-hidden rounded-[32px] bg-[#EAF0E7]">
                <div className="relative aspect-[4/4.5]">
                  <Image
                    src="/images/approach/lifestyle.png"
                    alt="Lifestyle medicine at Sutra Health"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/30 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-5 left-5 rounded-2xl border border-[#173F35]/10 bg-white/95 px-5 py-4 shadow-[0_16px_40px_rgba(23,63,53,0.12)]">
                <p className="font-serif text-[24px] text-[#173F35]">
                  Everyday habits
                </p>
                <p className="mt-1 text-[10px] text-[#71817A]">
                  Practical changes for real life
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
                The goal is not perfection.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-[16px] leading-8 text-[#D5E0D8]">
                Lifestyle medicine starts with understanding how a person's
                everyday life influences health.
              </p>

              <p className="mt-6 text-[14px] leading-7 text-[#BFD0C5]">
                Rather than focusing on one behaviour in isolation, Sutra
                Health considers routines, movement, sleep, stress and the
                environment around a person. The aim is to identify practical
                changes that can become part of everyday life.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
              What we consider
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.025em] text-[#173F35] sm:text-4xl">
              The patterns behind everyday health.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#71817A]">
              These areas are not separate boxes. They often influence one
              another and are considered together according to the individual.
            </p>
          </div>

          <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="border-t border-[#173F35]/15 py-7"
              >
                <span className="text-[10px] font-semibold tracking-[0.14em] text-[#9AA9A1]">
                  {pillar.number}
                </span>

                <h3 className="mt-7 font-serif text-[27px] leading-tight tracking-[-0.02em] text-[#173F35]">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#71817A]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                How it works
              </p>

              <h2 className="mt-3 max-w-md font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                From intention to practice.
              </h2>
            </div>

            <div className="space-y-8">
              {[
                "Understand the person's health concerns, routines and goals.",
                "Identify the everyday patterns that may be most relevant.",
                "Choose a small number of practical changes that fit real life.",
                "Review what is working and adapt when circumstances change.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid gap-4 border-t border-[#173F35]/15 pt-6 sm:grid-cols-[70px_1fr]"
                >
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-[#A2ADA7]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-[15px] leading-7 text-[#687A73]">
                    {item}
                  </p>
                </div>
              ))}
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
                Understanding lifestyle medicine.
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
              Build healthier routines that fit your life.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Talk with the Sutra Health team about your goals, routines and
              the changes that may be practical for you.
            </p>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35]"
            >
              Book an Appointment
              <span>→</span>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
