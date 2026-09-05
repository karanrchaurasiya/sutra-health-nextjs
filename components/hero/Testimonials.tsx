"use client";

import { useEffect, useState } from "react";
import Container from "@/components/shared/Container";

const testimonials = [
  {
    quote:
      "Amazing consultation experience. The doctors patiently listened to my concerns and provided practical Natural solutions.",
    name: "Rahul Sharma",
    source: "Google Review",
  },
  {
    quote:
      "Yoga therapy helped reduce my back pain significantly. Professional staff and peaceful environment.",
    name: "Priya Verma",
    source: "Google Review",
  },
  {
    quote:
      "Highly recommend Sutra Health. The holistic treatment approach actually delivers long-term benefits.",
    name: "Ankit Mehta",
    source: "Google Review",
  },
  {
    quote:
      "Meditation sessions transformed my daily routine. Stress levels are much lower now.",
    name: "Neha Kapoor",
    source: "Google Review",
  },
  {
    quote:
      "I had the pleasure of getting guidance from Dr. Rakesh, a humble therapeutic Yoga consultant who is an MBBS doctor as well. He guided me and my son through our Yoga journey with a smile on his face, and my 14-year-old son became an instant fan. Sessions are held on a terrace facing the Aravallis with cold, fresh breeze even today. Will come back again and again.",
    name: "Puneet Kulshrestha",
    source: "Google Review",
  },
  {
    quote:
      "I stayed at Sutra Health with my family and it was the best decision we made. Every morning you can join yoga with Dr. Rakesh on the rooftop terrace as the sun rises. When my father needed a wheelchair, Dr. Rakesh personally arranged it within one phone call. A beautifully decorated stay with thoughtful little details everywhere.",
    name: "Adheer Dixit",
    source: "Google Review",
  },
  {
    quote:
      "Very good service at Sutra Health, full care given to patients — bahut accha laga. Thank you Sutra Health!",
    name: "Sumit Kashyap",
    source: "Google Review",
  },
  {
    quote: "Excellent experience.",
    name: "Anil Passi",
    source: "Google Review",
  },
  {
    quote: "Mind blowing experience.",
    name: "Arpit Krishan",
    source: "Google Review",
  },
  {
    quote:
      "I'm from Argentina and had the privilege of staying at Dr. Rakesh's place, sharing yoga classes with him every morning on his terrace. A wonderful way to start the day — the terrace is spectacular and so are the classes. Highly recommend it!",
    name: "Flor Riboldi",
    source: "Google Review · Translated from Spanish",
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
            What people say
          </p>

          <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[48px]">
            Real people. Real terrace. Real results.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#687A73]">
            Real experiences shared by people who have visited or engaged with Sutra Health.
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
    source: string;
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
            {testimonial.source}
          </p>

        </div>

      </div>

    </article>
  );
}