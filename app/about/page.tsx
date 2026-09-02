import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "About Sutra Health",
  description:
    "Learn about Sutra Health and its roots in EQUAL Society, founded in 1997 with a focus on health advancement, quality of life, integrative health and community wellbeing.",
};

const values = [
  {
    number: "01",
    title: "Health Advancement",
    description:
      "Promoting preventive, promotive, curative and rehabilitative approaches to health.",
  },
  {
    number: "02",
    title: "Family Welfare",
    description:
      "Supporting family health, maternal and child health and community awareness.",
  },
  {
    number: "03",
    title: "Quality of Life",
    description:
      "Working toward healthier living, education, nutrition and better opportunities for communities.",
  },
  {
    number: "04",
    title: "Human Values",
    description:
      "Promoting dignity, equality, awareness and humanitarian service.",
  },
];

const pillars = [
  {
    number: "01",
    title: "Lifestyle",
    description:
      "Healthy everyday habits that support long-term wellbeing.",
  },
  {
    number: "02",
    title: "Nutrition",
    description:
      "Practical nutrition and dietary guidance.",
  },
  {
    number: "03",
    title: "Yogasana",
    description:
      "Yoga-based practices for movement and wellbeing.",
  },
  {
    number: "04",
    title: "Breath",
    description:
      "Breathing practices supporting calm and awareness.",
  },
  {
    number: "05",
    title: "Mind",
    description:
      "Mindfulness and positive mental wellbeing.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF8F1]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[#173F35]/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              About Sutra Health
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#123F35] sm:text-5xl lg:text-6xl">
              A commitment to
              <br />
              better quality of life.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
              Sutra Health is rooted in a longstanding commitment to health,
              wellbeing, education, empowerment and quality of life.
            </p>

          </div>
        </Container>
      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image */}
            <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-[#EAF1E7] sm:h-[400px] lg:h-[460px]">

              <Image
                src="/images/about-us.png"
                alt="yoga-image"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

            </div>


            {/* Content */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Our story
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Rooted in a commitment to quality of life.
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px]">

                <p>
                  Sutra Health is connected with the Effort For Quality of
                  Life Society, also known as EQUAL Society / Life Quality.
                </p>

                <p>
                  EQUAL Society is a not-for-profit organization registered
                  in Haryana in 1997. Its work focuses on health advancement,
                  family welfare, quality of life, education, empowerment,
                  awareness and sustainable living.
                </p>

                <p>
                  The organization describes its health work as an integrative
                  approach bringing together Yoga therapy, Ayurveda, nutrition
                  and modern medicine.
                </p>

              </div>

              <div className="mt-7">

                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
                >
                  Meet our team
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          OUR FOUNDATION
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our foundation
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
              Health, family, community and dignity.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
              The work of EQUAL Society spans the continuum from prevention
              to rehabilitation and from individual wellbeing to community
              health.
            </p>

          </div>


          {/* Values */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (
              <article
                key={value.number}
                className="group rounded-[22px] border border-[#173F35]/10 bg-[#FCFCF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_35px_rgba(23,63,53,0.07)]"
              >

                <span className="font-serif text-[28px] leading-none tracking-[-0.04em] text-[#B4C7B7]">
                  {value.number}
                </span>

                <h3 className="mt-8 font-serif text-[22px] tracking-[-0.02em] text-[#173F35]">
                  {value.title}
                </h3>

                <p className="mt-3 text-[12px] leading-5 text-[#71817A]">
                  {value.description}
                </p>

                <div className="mt-6 h-px w-8 bg-[#9DB7A0] transition-all duration-300 group-hover:w-12" />

              </article>
            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          INTEGRATIVE APPROACH
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our approach
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
              Whole-person care.
              <br />
              Connected thinking.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
              Integrative medicine brings together different systems and
              approaches to care for the complete person rather than looking
              at health in isolation.
            </p>

          </div>


          {/* Pillars */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-[20px] border border-[#173F35]/10 bg-[#FAF8F1] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#F1F4ED]"
              >

                <span className="text-[9px] font-semibold tracking-[0.16em] text-[#A0AEA7]">
                  {pillar.number}
                </span>

                <div className="mx-auto mt-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#B7CCB8] bg-[#EAF1E7] text-[#4F8160]">
                  ✦
                </div>

                <h3 className="mt-4 font-serif text-[21px] tracking-[-0.02em] text-[#173F35]">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#71817A]">
                  {pillar.description}
                </p>

              </div>
            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}
      <section className="bg-[#FAF8F1] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            {/* Image */}
            <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] bg-[#EAF1E7]">

              <div className="relative h-[380px] sm:h-[440px]">

                <Image
                  src="/images/doctor.jpeg"
                  alt="Dr. Rakesh Sarwal"
                  fill
                  sizes="360px"
                  className="object-cover object-center"
                />

              </div>

            </div>


            {/* Content */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Leadership
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Dr. Rakesh Sarwal
              </h2>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#65966F] sm:text-[11px]">
                MBBS, MPH, DrPH · Therapeutic Yoga Consultant
              </p>

              <p className="mt-6 text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                Dr. Rakesh Sarwal is a public health physician, public policy
                and planning professional and Therapeutic Yoga Consultant.
                His academic profile describes expertise in lifestyle
                medicine, nutrition, Yoga and public health.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                His work emphasizes prevention and helping people take an
                active role in their health through healthier lifestyles.
              </p>

              <a
                href="https://academic.lifequality.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
              >
                View Academic Profile
                <span>↗</span>
              </a>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          TIMELINE / LEGACY
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-4xl">

            <div className="text-center">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Our journey
              </p>

              <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                A long-term commitment to health.
              </h2>

            </div>


            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <div className="rounded-[22px] border border-[#173F35]/10 bg-[#FAF8F1] p-7">

                <p className="font-serif text-4xl text-[#65966F]">
                  1997
                </p>

                <h3 className="mt-4 font-serif text-[22px] text-[#173F35]">
                  EQUAL Society established
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-[#71817A]">
                  Effort For Quality of Life Society was registered in Haryana
                  with a focus on improving quality of life.
                </p>

              </div>


              <div className="rounded-[22px] border border-[#173F35]/10 bg-[#F1F4ED] p-7">

                <p className="font-serif text-4xl text-[#65966F]">
                  Today
                </p>

                <h3 className="mt-4 font-serif text-[22px] text-[#173F35]">
                  Integrative health
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-[#71817A]">
                  Sutra Health continues this philosophy through lifestyle
                  medicine, Yoga therapy, nutrition and integrative healthcare.
                </p>

              </div>

            </div>

          </div>

        </Container>
      </section>

            {/* =====================================================
          EQUAL SOCIETY VIDEO
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Watch
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
              EQUAL Society — Video
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
              Learn more about EQUAL Society and our approach to health,
              wellness and community service.
            </p>

          </div>


          {/* Video */}
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[28px] border border-[#173F35]/10 bg-[#F1F4ED] shadow-[0_20px_50px_rgba(23,63,53,0.08)]">

            <div className="relative aspect-video w-full">

              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/izgvAGiWhA0?si=jgvabZZcoxpYISyR"
                title="EQUAL Society Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          SUPPORT EQUAL SOCIETY
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">

            {/* LEFT — DONATION INFORMATION */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Support us
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Support EQUAL Society.
              </h2>

              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                Your support helps EQUAL Society continue its work in health
                awareness, wellness, education, community empowerment and
                quality of life.
              </p>


              {/* Donation details */}
              <div className="mt-8 overflow-hidden rounded-[24px] border border-[#173F35]/10 bg-white">

                {/* Organization */}
                <div className="flex items-center gap-4 border-b border-[#173F35]/10 p-5 sm:p-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    ✦
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      Organization
                    </p>

                    <p className="mt-1 text-[14px] font-semibold text-[#173F35]">
                      Effort for Quality of Life (EQUAL)
                    </p>
                  </div>

                </div>


                {/* Bank */}
                <div className="flex items-center gap-4 border-b border-[#173F35]/10 p-5 sm:p-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    ▦
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      Bank
                    </p>

                    <p className="mt-1 text-[14px] font-semibold text-[#173F35]">
                      RBL Bank, Sector 21-C, Faridabad
                    </p>
                  </div>

                </div>


                {/* IFSC */}
                <div className="flex items-center gap-4 border-b border-[#173F35]/10 p-5 sm:p-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    #
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      IFSC Code
                    </p>

                    <p className="mt-1 font-mono text-[14px] font-semibold tracking-wide text-[#173F35]">
                      RATN0000493
                    </p>
                  </div>

                </div>


                {/* Account */}
                <div className="flex items-center gap-4 p-5 sm:p-6">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAF1E7] text-[#4F8160]">
                    ₹
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A9A93]">
                      Account Number
                    </p>

                    <p className="mt-1 font-mono text-[14px] font-semibold tracking-wide text-[#173F35]">
                      309017789765
                    </p>
                  </div>

                </div>

              </div>


              <p className="mt-5 text-[11px] leading-5 text-[#71817A]">
                Eligible donations may qualify for applicable tax benefits
                subject to current Section 80G rules and eligibility.
              </p>

            </div>


            {/* RIGHT — QR */}
            <div className="flex justify-center lg:justify-end">

              <div className="w-full max-w-[330px] rounded-[28px] border border-[#173F35]/10 bg-white p-5 shadow-[0_20px_45px_rgba(23,63,53,0.08)] sm:p-7">

                <div className="text-center">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                    Scan & Pay
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-[#173F35]">
                    Make a contribution
                  </h3>

                </div>


                {/* QR CODE */}
                <div className="mx-auto mt-6 flex aspect-square w-full max-w-[250px] items-center justify-center rounded-2xl bg-white p-3">

                  <Image
                    src="/images/QR-code.png"
                    alt="QR code to donate to EQUAL Society"
                    width={250}
                    height={250}
                    className="h-full w-full object-contain"
                  />

                </div>


                <div className="mt-5 text-center">

                  <p className="text-[11px] font-semibold text-[#173F35]">
                    EFFORT FOR QUALITY OF LIFE (EQUAL)
                  </p>

                  <p className="mt-2 text-[11px] text-[#71817A]">
                    Scan the QR code to donate
                  </p>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6] sm:text-[11px]">
              Start your journey
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Better health starts
              <br className="hidden sm:block" />
              with understanding.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Explore our approach or start a conversation about your health
              goals.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35] transition hover:bg-white"
              >
                Book an Appointment
                <span>→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#CBDAD1]/30 px-7 py-3.5 text-sm font-semibold text-[#FAF8F1] transition hover:bg-white/10"
              >
                Explore Services
                <span>→</span>
              </Link>

            </div>

          </div>

        </Container>
      </section>

    </main>
  );
}