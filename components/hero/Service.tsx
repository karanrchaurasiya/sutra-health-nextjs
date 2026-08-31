import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Service() {
  return (
    <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
      <Container>

        <div className="relative overflow-hidden rounded-[24px] border border-[#173F35]/10 bg-[#F1F4ED] px-6 py-10 text-center sm:px-10 sm:py-12">

          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#789A7D]/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-dashed border-[#789A7D]/15"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our framework
            </p>

            <h2 className="mt-3 font-serif text-[30px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[38px]">
              21-Point Health Building Guidelines
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-[#687A73] sm:text-[14px]">
              A practical framework for understanding everyday health habits
              and identifying areas where small, sustainable changes can
              support better wellbeing.
            </p>

            {/* Traffic Light */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#6B9573]" />
                <span className="text-[11px] font-medium text-[#52665E]">
                  Continue
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#D6B65A]" />
                <span className="text-[11px] font-medium text-[#52665E]">
                  Improve
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#C86B62]" />
                <span className="text-[11px] font-medium text-[#52665E]">
                  Focus
                </span>
              </div>

            </div>

            {/* CTA */}
            <Link
              href="/assessment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3 text-[12px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0C332C]"
            >
              Explore the 21-point assessment
              <span>→</span>
            </Link>

          </div>
        </div>

      </Container>
    </section>
  );
}