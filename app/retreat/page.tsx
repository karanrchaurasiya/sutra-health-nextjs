import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Sutra Health Retreat | Wellness Retreat in Faridabad",
  description:
    "Discover the Sutra Health Retreat in Faridabad, with yoga, meditation, pranayama, nutrition and traditional wellness practices in a peaceful rooftop setting.",
  alternates: {
    canonical: "https://lifequality.org.in/retreat",
  },
};

export default function RetreatPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      {/* Hero */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid items-center gap-10 py-14 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Sutra Health Retreat
              </p>

              <h1 className="mt-4 max-w-[620px] font-serif text-[46px] leading-[0.98] tracking-[-0.045em] sm:text-[58px] lg:text-[70px]">
                A quieter place to{" "}
                <span className="italic text-[#65966F]">
                  reconnect.
                </span>
              </h1>

              <p className="mt-6 max-w-[560px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                A wellness retreat in Faridabad bringing together yoga,
                meditation, pranayama, nutrition and traditional wellness
                practices in a peaceful rooftop setting.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/retreat-programs"
                  className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
                >
                  Explore Programs
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href="https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20wellness%20retreat%20in%20Faridabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-[#F0F4ED]"
                >
                  Enquire About a Stay
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
              <Image
                src="/images/rooftop.avif"
                alt="Rooftop at Sutra Health Retreat"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid gap-8 py-14 sm:py-18 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The retreat
              </p>
            </div>

            <div className="max-w-[760px]">
              <h2 className="font-serif text-[34px] leading-[1.08] tracking-[-0.035em] sm:text-[44px]">
                Time away can create space for{" "}
                <span className="italic text-[#65966F]">
                  healthier habits.
                </span>
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                Sutra Health Retreat offers a calm setting where guests can
                step away from everyday routines and explore practices that
                support wellbeing.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The experience brings together physician guidance, dietary
                support, yoga, breathing practices, meditation and traditional
                wellness sessions, allowing each stay to be shaped around the
                guest and their goals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Nature */}
      <section>
        <Container>
          <div className="grid items-center gap-8 py-14 sm:py-18 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
              <Image
                src="/images/rooftop.avif"
                alt="Rooftop retreat setting"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="max-w-[600px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The setting
              </p>

              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] sm:text-[46px]">
                Space to slow down.
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                Located in Sector 46, Faridabad, the retreat offers a rooftop
                environment designed for wellness practices, quiet reflection
                and time away from the usual pace of everyday life.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-y-5 border-t border-[#173F35]/10 pt-6 sm:grid-cols-4">
                <div>
                  <p className="font-serif text-[25px]">3</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                    Bedrooms
                  </p>
                </div>

                <div>
                  <p className="font-serif text-[25px]">6</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                    Beds
                  </p>
                </div>

                <div>
                  <p className="font-serif text-[25px]">3</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                    Baths
                  </p>
                </div>

                <div>
                  <p className="font-serif text-[25px]">6</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                    Guests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Programs */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-[700px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Wellness programs
              </p>

              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] sm:text-[48px]">
                Practices that can become part of your stay.
              </h2>

              <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#687A73]">
                Explore the different wellness experiences available at the
                retreat, from yoga and pranayama to meditation, dietary
                guidance and traditional practices.
              </p>
            </div>

            <div className="mt-9 border-t border-[#173F35]/10">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Physician Consultation",
                  "Dietary Guidance",
                  "Yoga Asana Protocol",
                  "Pranayama",
                  "Meditation",
                  "Shirodhara",
                  "My Buddy",
                  "Singing, Kirtan & Dance",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`border-b border-[#173F35]/10 px-1 py-5 sm:px-5 ${
                      index % 2 !== 0 ? "sm:border-l" : ""
                    } ${
                      index % 4 !== 0 ? "lg:border-l" : ""
                    }`}
                  >
                    <span className="text-[9px] font-semibold tracking-[0.16em] text-[#8A9992]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-2 font-serif text-[20px] leading-tight">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/retreat-programs"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
              >
                View all retreat programs
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="py-14 sm:py-18 lg:py-20">
            <div className="max-w-[760px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8]">
                Plan your stay
              </p>

              <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[50px]">
                Make space for your{" "}
                <span className="italic text-[#B7CCB8]">
                  wellbeing.
                </span>
              </h2>

              <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-[#C8D4CD] sm:text-[15px] sm:leading-8">
                Get in touch to learn more about the retreat, available
                programs and planning your stay.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20wellness%20retreat%20in%20Faridabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35]"
                >
                  Enquire on WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href="/retreat-programs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}