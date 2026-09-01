import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Problem() {
  return (
    <section className="bg-[#173F35] py-14 sm:py-16 lg:py-20">
      <Container>
        <article className="max-w-[900px]">

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8] sm:text-[11px]">
            Look at the bigger picture
          </p>

          <h2 className="mt-4 max-w-[780px] font-serif text-[40px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[48px] lg:text-[56px]">
            Your health is shaped by{" "}
            <span className="italic text-[#B7CCB8]">
              everyday life.
            </span>
          </h2>

          <div className="mt-6 max-w-[720px]">
            <p className="text-[14px] leading-7 text-[#D0DAD4] sm:text-[15px] sm:leading-8">
              The way we eat, move, sleep, breathe and respond to everyday
              demands can all be part of our health and wellbeing.
            </p>

            <p className="mt-4 text-[14px] leading-7 text-[#B8C8C0] sm:text-[15px] sm:leading-8">
              Instead of looking at one part of life in isolation, it can help
              to step back and understand the bigger picture.
            </p>

            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-colors hover:text-[#B7CCB8]"
            >
              Explore our approach
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </article>
      </Container>
    </section>
  );
}