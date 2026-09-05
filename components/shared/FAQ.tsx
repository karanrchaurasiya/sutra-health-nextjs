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
      "It's healthcare built around your daily habits - food, movement, sleep, stress - rather than just prescriptions. It works alongside your existing medical care, not instead of it.",
  },
  {
    question: "Can yoga therapy be part of managing something like diabetes or blood pressure?",
    answer:
      "It can be one part of your overall care, alongside your doctor - not a replacement for it. Any medication changes should always go through your physician."
  },
  {
    question: "Do you offer online consultations?",
    answer:
      "Yes. We work with people across India, not just Gurugram. Online consultations are available for lifestyle medicine, nutrition counselling, and yoga therapy. In-person sessions are also available in Gurugram.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Depends on you and your consistency - some people feel different within weeks, some things take longer. We won't promise a timeline nobody can guarantee.",
  },
  {
    question: "Is this right for everyone?",
    answer:
      "If you're managing a serious medical condition or on medication, talk to your doctor before starting. This is built to complement medical care, not replace it.",
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