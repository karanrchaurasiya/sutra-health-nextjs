import Link from "next/link";
import Container from "@/components/shared/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand where you are, your everyday habits and what matters to you.",
  },
  {
    number: "02",
    title: "Personalize",
    description:
      "Receive practical guidance shaped around your needs, goals and routine.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Make small, sustainable changes that can become part of daily life.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Heading */}
        <div className="max-w-[680px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
            How It Works
          </p>

          <h2 className="mt-4 font-serif text-[42px] leading-[1.04] tracking-[-0.04em] text-[#123F35] sm:text-[50px] lg:text-[56px]">
            A simple process for{" "}
            <span className="italic text-[#65966F]">
              building healthier habits.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-10 border-t border-[#173F35]/10 pt-8 sm:grid-cols-3 sm:gap-8 lg:mt-14">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-[10px] font-semibold tracking-[0.16em] text-[#A0AEA7]">
                {step.number}
              </span>

              <h3 className="mt-4 font-serif text-[27px] tracking-[-0.025em] text-[#173F35]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[320px] text-[13px] leading-6 text-[#71817A]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
          >
            Book a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}