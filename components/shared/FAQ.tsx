"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs?: FAQItem[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "What is lifestyle medicine?",
    answer:
      "Lifestyle medicine uses evidence-informed approaches such as nutrition, physical activity, sleep, stress management and healthy lifestyle practices to support prevention, management and overall wellbeing. It can complement appropriate medical care.",
  },
  {
    question: "Can yoga therapy be part of my healthcare?",
    answer:
      "Yoga therapy may be considered as part of an integrative approach when appropriate and professionally guided. It is intended to complement, not replace, appropriate medical care.",
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. Sutra Health provides an online consultation pathway for people across India. The appropriate consultation and next steps depend on individual health needs and professional assessment.",
  },
  {
    question: "How long does it take to see changes?",
    answer:
      "It varies from person to person and depends on individual health, lifestyle and consistency. Some people may notice changes in wellbeing over time, while measurable health changes can take longer.",
  },
  {
    question: "Is the Sutra Health approach suitable for everyone?",
    answer:
      "Suitability depends on your individual health and circumstances. If you have a medical condition or take medication, discuss a new health or exercise programme with your healthcare provider.",
  },
];

export default function FAQ({ faqs = defaultFaqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-md">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Frequently asked questions
            </p>

            <h2
              id="faq-heading"
              className="mt-3 font-serif text-[38px] leading-[1.06] tracking-[-0.035em] text-[#123F35] sm:text-[46px]"
            >
              A few things you may want to know.
            </h2>

            <p className="mt-5 text-[14px] leading-7 text-[#687A73]">
              Simple answers about our lifestyle-focused and integrative
              approach.
            </p>
          </div>

          <div className="border-t border-[#173F35]/15">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#173F35]/15"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                  >
                    <span className="text-[14px] font-medium leading-6 text-[#173F35] sm:text-[15px]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl font-light text-[#65966F] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-5 pr-8 sm:pb-6">
                      <p className="max-w-2xl text-[13px] leading-7 text-[#687A73] sm:text-[14px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}