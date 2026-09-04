import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const conditions = [
  { label: "Weight Management", href: "/conditions/weight-management" },
  { label: "Metabolic Health", href: "/conditions/metabolic-health" },
  { label: "High Blood Pressure", href: "/conditions/high-blood-pressure" },
  { label: "Arthritis & Joint Pain", href: "/conditions/arthritis-joint-pain" },
];

const approaches = [
  { label: "Lifestyle Medicine", href: "/approach/lifestyle" },
  { label: "Nutrition", href: "/approach/nutrition" },
  { label: "Therapeutic Yoga", href: "/approach/therapeutic-yoga" },
  { label: "Breath & Mindfulness", href: "/approach/breath-mindfulness" },
];

const programs = [
  { label: "Physician Consultation", href: "/programs/physician-consultation" },
  { label: "Dietary Advice", href: "/programs/dietary-advice" },
  { label: "Lifestyle Counselling", href: "/programs/lifestyle-counselling" },
  { label: "Therapeutic Yoga", href: "/programs/therapeutic-yoga" },
];

export default function Footer() {
  return (
    <footer className="bg-[#123F35] text-white">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:gap-x-8 sm:gap-y-12 sm:py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="col-span-2 max-w-[360px] lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Sutra Health home"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-12 sm:w-12">
                <Image
                  src="/logo/sutra-health-logo.png"
                  alt="Sutra Health"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="font-serif text-[23px] leading-none sm:text-[25px]">
                  Sutra Health
                </p>
                <p className="mt-1 text-[9px] text-[#B7CFC0] sm:text-[10px]">
                  Integrative Lifestyle Healthcare
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[340px] text-[12px] leading-6 text-[#C1D1C8] sm:mt-7 sm:text-[13px]">
              Helping you build healthier everyday habits through an
              integrative approach to lifestyle, nutrition, movement, breath
              and mind.
            </p>

            <Link
              href="/book-appointment"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#FAF8F1] px-5 py-2.5 text-[12px] font-semibold text-[#123F35] transition hover:bg-white sm:mt-7 sm:px-6 sm:py-3 sm:text-[13px]"
            >
              Book Appointment
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Conditions */}
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
              Conditions
            </h2>

            <nav className="mt-4 flex flex-col gap-1 sm:mt-5 sm:gap-3">
              {conditions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-[12px] text-[#D0DDD5] transition-colors hover:text-white sm:min-h-0 sm:text-[13px]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/conditions"
                className="mt-1 inline-flex min-h-9 items-center text-[12px] font-semibold text-white sm:min-h-0 sm:text-[13px]"
              >
                View all conditions →
              </Link>
            </nav>
          </div>

          {/* Approach */}
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
              Our Approach
            </h2>

            <nav className="mt-4 flex flex-col gap-1 sm:mt-5 sm:gap-3">
              {approaches.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-[12px] text-[#D0DDD5] transition-colors hover:text-white sm:min-h-0 sm:text-[13px]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/approach"
                className="mt-1 inline-flex min-h-9 items-center text-[12px] font-semibold text-white sm:min-h-0 sm:text-[13px]"
              >
                Explore our method →
              </Link>
            </nav>
          </div>

          {/* Programs & Contact */}
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
              Programs
            </h2>

            <nav className="mt-4 flex flex-col gap-1 sm:mt-5 sm:gap-3">
              {programs.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-[12px] text-[#D0DDD5] transition-colors hover:text-white sm:min-h-0 sm:text-[13px]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/programs"
                className="mt-1 inline-flex min-h-9 items-center text-[12px] font-semibold text-white sm:min-h-0 sm:text-[13px]"
              >
                View all programs →
              </Link>
            </nav>

            <div className="mt-7 border-t border-white/10 pt-6">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
                Get in touch
              </h2>

              <div className="mt-3 space-y-2 text-[12px] leading-5 text-[#D0DDD5] sm:text-[13px]">
                <a
                  href="tel:+919013103676"
                  className="block transition-colors hover:text-white"
                >
                  +91 90131 03676
                </a>

                <a
                  href="mailto:info@lifequality.org.in"
                  className="block break-all transition-colors hover:text-white sm:break-normal"
                >
                  info@lifequality.org.in
                </a>

                <Link
                  href="/contact"
                  className="inline-flex pt-1 font-semibold text-white"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-5 text-[10px] text-[#AFC4B8] sm:py-6 sm:text-[11px] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sutra Health. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
