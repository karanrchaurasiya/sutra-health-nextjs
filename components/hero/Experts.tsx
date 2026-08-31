import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Experts() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* Doctor visual */}
          <div className="relative mx-auto w-full max-w-[460px]">

            <div className="absolute inset-5 rounded-[2rem] bg-[#EAF0E7]" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/5]">

                <Image
                  src="/images/doctor.jpeg"
                  alt="Sutra Health healthcare expert"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover"
                />

              </div>
            </div>

            {/* Expertise card */}
            <div className="absolute -bottom-5 right-4 rounded-2xl border border-[#173F35]/10 bg-white px-5 py-4 shadow-[0_14px_35px_rgba(23,63,53,0.10)] sm:right-[-20px]">

              <p className="font-serif text-[28px] text-[#173F35]">
                Expert
              </p>

              <p className="mt-1 text-[11px] text-[#71817A]">
                Integrative healthcare
              </p>

            </div>

          </div>

          {/* Content */}
          <div className="max-w-[600px]">

            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B9573]">
              Meet your care team
            </p>

            <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[50px]">
              Healthcare that sees the whole you.
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-[#667871] sm:text-[16px]">
              At Sutra Health, care goes beyond a single symptom. Our
              integrative approach brings medical understanding together
              with lifestyle, nutrition, movement, breath and mind.
            </p>

            {/* Approach */}
            <div className="mt-8 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10">

              {/* 01 */}
              <div className="flex gap-5 py-5">

                <span className="text-[12px] font-semibold text-[#6B9573]">
                  01
                </span>

                <div>

                  <h3 className="text-[14px] font-semibold text-[#173F35]">
                    Patient-first care
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-[#71817A]">
                    Your health goals, concerns and everyday life help
                    shape the care approach.
                  </p>

                </div>
              </div>

              {/* 02 */}
              <div className="flex gap-5 py-5">

                <span className="text-[12px] font-semibold text-[#6B9573]">
                  02
                </span>

                <div>

                  <h3 className="text-[14px] font-semibold text-[#173F35]">
                    Integrative thinking
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-[#71817A]">
                    Different aspects of health are considered together
                    rather than in isolation.
                  </p>

                </div>
              </div>

              {/* 03 */}
              <div className="flex gap-5 py-5">

                <span className="text-[12px] font-semibold text-[#6B9573]">
                  03
                </span>

                <div>

                  <h3 className="text-[14px] font-semibold text-[#173F35]">
                    Lifestyle-focused support
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-[#71817A]">
                    Practical lifestyle changes can become part of your
                    ongoing approach to wellbeing.
                  </p>

                </div>
              </div>

            </div>

            {/* CTA */}
            <Link
              href="/doctors"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0C332C]"
            >
              Meet our experts
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>
      </Container>
    </section>
  );
}