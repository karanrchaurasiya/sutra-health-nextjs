import Link from "next/link";
import Container from "@/components/shared/Container";

export default function BookingCTA() {
  return (
    <section className="bg-[#173F35] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-[#214D42] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20">

          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10"
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6] sm:text-[11px]">
              Take the next step
            </p>

            <h2 className="mt-4 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[48px] lg:text-[54px]">
              Your health deserves
              <br className="hidden sm:block" />
              a more personal approach.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[14px] leading-6 text-[#D0DDD5] sm:text-[15px] sm:leading-7">
              Start a conversation with our team and discover an approach to
              healthcare built around your lifestyle, goals and needs.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/book-appointment"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FAF8F1] px-7 text-[13px] font-semibold text-[#173F35] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
              >
                Book an Appointment
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}