"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";

const faqs = [
  {
    question: "What is integrative lifestyle healthcare?",
    answer:
      "Integrative lifestyle healthcare takes a whole-person view of health. At Sutra Health, this includes lifestyle, nutrition, movement, breath and mind practices, with guidance shaped around individual needs and everyday life.",
  },
  {
    question: "What does Sutra Health help with?",
    answer:
      "Sutra Health provides lifestyle-focused support across areas such as weight management, metabolic health, high blood pressure, arthritis and joint pain, migraine and headache, digestive and gut health, and women's health.",
  },
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine focuses on everyday factors that influence health and wellbeing, including nutrition, physical activity, sleep, stress management and other lifestyle habits.",
  },
  {
    question: "How can lifestyle changes support my health?",
    answer:
      "Everyday habits can influence health and wellbeing. Sutra Health focuses on practical, sustainable changes across areas such as nutrition, movement, sleep, stress, breathing and mental wellbeing.",
  },
  {
    question: "What does a Sutra Health consultation include?",
    answer:
      "A consultation provides an opportunity to discuss your health concerns, lifestyle, nutrition, daily routine and goals. This information helps shape an individualized approach to your care.",
  },
  {
    question: "What is the 21-Point Health Assessment?",
    answer:
      "The 21-Point Health Assessment is a structured framework for reflecting on everyday health habits. It uses a traffic-light approach to identify habits to continue, areas where adjustments may help, and areas where meaningful lifestyle changes may be worth considering.",
  },
  {
    question: "Do I need to follow a specific diet?",
    answer:
      "Not necessarily. Nutrition guidance can be shaped around your health needs, existing food habits, preferences and everyday routine rather than following a single diet for everyone.",
  },
  {
    question: "How can therapeutic yoga support my wellbeing?",
    answer:
      "Therapeutic yoga can be adapted to individual needs and may include practices such as yogasana, breathing, relaxation and meditation as appropriate.",
  },
  {
    question: "Can I receive personalized guidance for my health goals?",
    answer:
      "Yes. Sutra Health takes a personalized approach, considering your health concerns, goals and everyday circumstances when developing practical lifestyle guidance.",
  },
  {
    question: "How do I book a consultation with Sutra Health?",
    answer:
      "You can book a consultation through the Book an Appointment option on the website. Select an available date and time, provide the requested information and complete your appointment request.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F1] py-24 sm:py-28 lg:py-32">
      
      {/* Decorative circle */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 hidden h-[420px] w-[420px] rounded-full border border-[#789A7D]/10 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-36 hidden h-[280px] w-[280px] rounded-full border border-dashed border-[#789A7D]/10 lg:block"
      />

      <Container>

        {/* ================= HEADER ================= */}

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-20">

          {/* Left */}

          <div className="relative">

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
              Frequently asked questions
            </p>

            <h2 className="mt-4 max-w-md font-serif text-[40px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[48px] lg:text-[54px]">
              Everything you may want to know.
            </h2>

            <p className="mt-6 max-w-sm text-[14px] leading-7 text-[#687A73]">
              A few answers about our approach, consultations and the
              way we support healthier everyday living.
            </p>

            {/* Small decorative mark */}

            <div className="mt-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B7CCB8] bg-[#EAF1E7]">
                <span className="font-serif text-[17px] text-[#4F8160]">
                  ?
                </span>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-[#173F35]">
                  Still have questions?
                </p>

                <p className="mt-0.5 text-[11px] text-[#7A8983]">
                  We're here to help.
                </p>
              </div>
            </div>

          </div>

          {/* ================= FAQ LIST ================= */}

          <div className="relative">

            <div className="border-t border-[#173F35]/15">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#173F35]/15"
                  >

                    {/* Question */}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-5 py-5 text-left sm:py-6"
                    >

                      {/* Number */}

                      <span
                        className={`w-7 shrink-0 text-[10px] font-semibold tracking-[0.12em] transition-colors duration-300 ${
                          isOpen
                            ? "text-[#65966F]"
                            : "text-[#A2ADA7]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <span
                        className={`flex-1 text-[15px] font-medium leading-6 tracking-[-0.01em] transition-colors duration-300 sm:text-[16px] ${
                          isOpen
                            ? "text-[#65966F]"
                            : "text-[#173F35]"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Icon */}

                      <span
                        aria-hidden="true"
                        className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "border-[#65966F] bg-[#EAF1E7]"
                            : "border-[#173F35]/10 bg-transparent group-hover:border-[#65966F]/50"
                        }`}
                      >
                        <span
                          className={`absolute h-px w-3 bg-[#65966F] transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        />

                        <span
                          className={`absolute h-px w-3 bg-[#65966F] transition-transform duration-300 ${
                            isOpen ? "-rotate-45" : "rotate-90"
                          }`}
                        />
                      </span>

                    </button>

                    {/* Answer */}

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >

                      <div className="overflow-hidden">

                        <div className="pb-6 pl-12 pr-10 sm:pb-7">

                          <p className="max-w-2xl text-[13px] leading-7 text-[#687A73] sm:text-[14px]">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}