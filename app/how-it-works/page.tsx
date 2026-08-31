import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "How It Works | Sutra Health",
  description:
    "Understand how Sutra Health's personalized, lifestyle-focused approach works — from your first consultation to a practical health plan.",
};

const steps = [
  {
    number: "01",
    title: "Start with a conversation",
    description:
      "Share your health goals, concerns, lifestyle and everyday challenges with our team.",
  },
  {
    number: "02",
    title: "Understand your health",
    description:
      "We look at different aspects of your health and lifestyle to understand what may be influencing your wellbeing.",
  },
  {
    number: "03",
    title: "Create your approach",
    description:
      "Together, we identify practical areas of focus across lifestyle, nutrition, movement, breath and mind.",
  },
  {
    number: "04",
    title: "Build healthier habits",
    description:
      "Put your plan into practice with realistic changes that can fit into your everyday life.",
  },
  {
    number: "05",
    title: "Keep moving forward",
    description:
      "Review your progress, understand what is working and continue building sustainable habits.",
  },
];

const pillars = [
  "Lifestyle",
  "Nutrition",
  "Yogasana",
  "Breath",
  "Mind",
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#FAF8F1]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[#173F35]/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              How it works
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#123F35] sm:text-5xl lg:text-6xl">
              A simple approach to
              <br />
              better everyday health.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
              We help you understand your health, identify practical areas of
              change and build habits that can become part of your everyday
              life.
            </p>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#123F35] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0D332C]"
            >
              Book an Appointment
              <span>→</span>
            </Link>

          </div>
        </Container>
      </section>


      {/* =====================================================
          STEPS
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Your journey
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
              From understanding to action.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#71817A] sm:text-[14px]">
              Your health journey is built around understanding your needs and
              making changes that are practical and sustainable.
            </p>

          </div>


          <div className="mx-auto max-w-4xl">

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className={`group relative rounded-[22px] border border-[#173F35]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.08)] sm:p-7 ${
                    index === steps.length - 1
                      ? "md:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >

                  <div className="flex items-start justify-between">

                    <span className="text-[10px] font-semibold tracking-[0.16em] text-[#A0AEA7]">
                      {step.number}
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160] transition-transform duration-300 group-hover:scale-105">
                      ✦
                    </span>

                  </div>


                  <h3 className="mt-10 font-serif text-[23px] leading-tight tracking-[-0.02em] text-[#173F35]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#71817A] sm:text-[13px]">
                    {step.description}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          WHOLE PERSON
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Whole-person care
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Your health is connected.
              </h2>

            </div>


            <div>

              <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                We consider different parts of everyday life together rather
                than looking at health in isolation. Your approach can include
                different areas depending on your individual needs and goals.
              </p>


              <div className="mt-7 flex flex-wrap gap-2">

                {pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-[#173F35]/10 bg-[#FAF8F1] px-4 py-2 text-[11px] font-medium text-[#536A62]"
                  >
                    {pillar}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          EXPECTATION
      ===================================================== */}
      <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-4xl rounded-[28px] border border-[#173F35]/10 bg-[#F1F4ED] px-6 py-12 text-center sm:px-12 sm:py-14">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              What to expect
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.03em] text-[#173F35] sm:text-4xl">
              Practical support, not complicated routines.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-6 text-[#71817A] sm:text-[14px] sm:leading-7">
              The focus is on understanding your current lifestyle and finding
              realistic steps that you can continue over time.
            </p>

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
              Ready to take the
              <br className="hidden sm:block" />
              first step?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Start with a conversation about your health goals and discover
              the right next step for you.
            </p>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35] transition hover:bg-white"
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