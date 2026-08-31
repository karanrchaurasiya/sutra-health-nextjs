"use client";

import { useEffect, useState } from "react";
import Container from "@/components/shared/Container";

const testimonials = [
  {
    quote:
      "The guidance helped me understand how small changes in my daily routine could improve my overall wellbeing.",
    name: "Ananya R.",
    location: "Bengaluru",
  },
  {
    quote:
      "The personalized approach to nutrition, yoga and lifestyle made it much easier for me to build healthier habits.",
    name: "Rakesh M.",
    location: "Mumbai",
  },
  {
    quote:
      "I feel calmer, more focused and more supported. The approach feels practical and genuinely personal.",
    name: "Meera S.",
    location: "Pune",
  },
  {
    quote:
      "I feel calmer, more focused and more supported. The approach feels practical and genuinely personal.",
    name: "Meera S. 2",
    location: "Pune",
  },
  {
    quote:
      "I feel calmer, more focused and more supported. The approach feels practical and genuinely personal.",
    name: "Meera S. 3",
    location: "Pune",
  },
  {
    quote:
      "I feel calmer, more focused and more supported. The approach feels practical and genuinely personal.",
    name: "Meera S. 4",
    location: "Pune",
  },
];

export default function Testimonials() {
  // Desktop: 2 slides (3 + 3)
  const [desktopSlide, setDesktopSlide] = useState(0);

  // Mobile: 6 slides (1 + 1 + 1 + 1 + 1 + 1)
  const [mobileSlide, setMobileSlide] = useState(0);

  const desktopSlides = 2;
  const mobileSlides = testimonials.length;

  /* ==================================================
     DESKTOP AUTO SLIDE
     ================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setDesktopSlide((previous) =>
        previous === desktopSlides - 1
          ? 0
          : previous + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ==================================================
     MOBILE AUTO SLIDE
     ================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileSlide((previous) =>
        previous === mobileSlides - 1
          ? 0
          : previous + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
      <Container>

        {/* ==================================================
            HEADING
            ================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B9573]">
            What patients say
          </p>

          <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[48px]">
            Small changes. Meaningful journeys.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#687A73]">
            Hear from people who have taken steps towards healthier,
            more sustainable everyday habits.
          </p>
        </div>

        {/* ==================================================
            DESKTOP
            3 CARDS → 3 CARDS
            ================================================== */}

        <div className="mt-12 hidden overflow-hidden lg:mt-14 md:block">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${desktopSlide * 100}%)`,
            }}
          >

            {/* Slide 1 — first 3 */}

            <div className="grid w-full shrink-0 grid-cols-3 gap-5">

              {testimonials.slice(0, 3).map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}

            </div>

            {/* Slide 2 — next 3 */}

            <div className="grid w-full shrink-0 grid-cols-3 gap-5">

              {testimonials.slice(3, 6).map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}

            </div>

          </div>

        </div>

        {/* ==================================================
            DESKTOP INDICATORS
            ================================================== */}

        <div className="mt-8 hidden justify-center gap-2 md:flex">

          {Array.from({ length: desktopSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonial group ${index + 1}`}
              aria-current={desktopSlide === index}
              onClick={() => setDesktopSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                desktopSlide === index
                  ? "w-6 bg-[#173F35]"
                  : "w-1.5 bg-[#B9C8BA]"
              }`}
            />
          ))}

        </div>

        {/* ==================================================
            MOBILE
            1 CARD → 1 CARD
            ================================================== */}

        <div className="mt-12 overflow-hidden md:hidden">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${mobileSlide * 100}%)`,
            }}
          >

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="w-full shrink-0 px-0.5"
              >
                <TestimonialCard
                  testimonial={testimonial}
                />
              </div>
            ))}

          </div>

        </div>

        {/* ==================================================
            MOBILE INDICATORS
            ================================================== */}

        <div className="mt-8 flex justify-center gap-2 md:hidden">

          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={mobileSlide === index}
              onClick={() => setMobileSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                mobileSlide === index
                  ? "w-6 bg-[#173F35]"
                  : "w-1.5 bg-[#B9C8BA]"
              }`}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}


/* ==================================================
   TESTIMONIAL CARD
   ================================================== */

function TestimonialCard({
  testimonial,
}: {
  testimonial: {
    quote: string;
    name: string;
    location: string;
  };
}) {
  return (
    <article className="flex min-h-[260px] flex-col rounded-2xl border border-[#173F35]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(23,63,53,0.07)]">

      {/* Quote */}

      <div className="text-[34px] leading-none text-[#79A083]">
        “
      </div>

      {/* Text */}

      <p className="mt-3 text-[14px] leading-7 text-[#5E7069]">
        {testimonial.quote}
      </p>

      {/* Patient */}

      <div className="mt-auto flex items-center gap-3 border-t border-[#173F35]/10 pt-5">

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF0E7] font-serif text-[15px] text-[#47765B]">
          {testimonial.name.charAt(0)}
        </div>

        <div>

          <p className="text-[12px] font-semibold text-[#173F35]">
            {testimonial.name}
          </p>

          <p className="mt-0.5 text-[11px] text-[#7A8983]">
            {testimonial.location}
          </p>

        </div>

      </div>

    </article>
  );
}