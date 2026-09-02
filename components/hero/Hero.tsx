import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF8F1]">
      {/* ==================================================
          DESKTOP BACKGROUND
      ================================================== */}
      <Image
        src="/images/hero-desktop5.png"
        alt="Sutra Health consultation"
        fill
        priority
        sizes="100vw"
        className="z-0 hidden object-cover object-center lg:block"
      />

      {/* ==================================================
          MOBILE BACKGROUND
      ================================================== */}
      <Image
        src="/images/hero-desktop56.png"
        alt="Sutra Health consultation"
        fill
        priority
        sizes="100vw"
        className="z-0 block object-cover object-center lg:hidden"
      />

      {/* ==================================================
          DESKTOP OVERLAY
          
          Cream on left
          Smooth fade in centre
          Clear image on right
      ================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block "
        style={{
          background:
            "linear-gradient(90deg, rgba(250,248,241,1) 0%, rgba(250,248,241,0.98) 27%, rgba(250,248,241,0.88) 38%, rgba(250,248,241,0.60) 47%, rgba(250,248,241,0.25) 56%, rgba(250,248,241,0) 70%)",
        }}
      />

      {/* ==================================================
          MOBILE OVERLAY

          Image remains visible at top.
          Cream gradually appears behind text.
      ================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,248,241,0) 0%, rgba(250,248,241,0.02) 25%, rgba(250,248,241,0.28) 35%, rgba(250,248,241,0.78) 45%, rgba(250,248,241,0.96) 60%, rgba(250,248,241,1) 76%)",
        }}
      />

      {/* ==================================================
          HERO CONTENT
      ================================================== */}
      <Container>
        <div
          className="
            relative z-20
            flex
            min-h-[700px]
            items-end
            pb-10
            sm:min-h-[680px]
            sm:pb-12
            lg:min-h-[620px]
            lg:items-center
            lg:pb-0
            xl:min-h-[650px]
          "
        >
          <div
            className="
              w-full
              max-w-[850px]
              lg:py-0
              sm:mt-8
            "
          >
            {/* ==================================================
                EYEBROW
            ================================================== */}
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#4F8160]
                sm:text-[10px]
                lg:text-[11px]
              "
            >
              Integrative Lifestyle Healthcare
            </p>

            {/* ==================================================
                HEADING
            ================================================== */}
            <h1
              className="
                max-w-[700px]
                font-serif
                text-[40px]
                leading-[0.98]
                tracking-[-0.045em]
                text-[#123F35]
                sm:mt-4
                sm:font-normal
                sm:text-[40px]
                md:text-[50px]
                lg:text-[60px]
                xl:text-[70px]
              "
            >
              Build better health
              <br />
              through <span className="italic text-[#65966F]">lifestyle.</span>
            </h1>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-4
                max-w-[590px]
                text-[12px]
                leading-5
                text-[#245B70]
                sm:mt-5
                sm:text-[14px]
                sm:leading-7
                lg:text-[15px]
                lg:leading-7
              "
            >
              Sutra Health takes a whole-person approach to health and
              wellbeing, bringing together lifestyle medicine, nutrition,
              therapeutic yoga, breath and mind practices, and sustainable
              everyday habits.
            </p>

            {/* ==================================================
                BUTTONS
            ================================================== */}
            <div
              className="
                mt-5
                flex
                flex-col
                gap-2.5
                sm:mt-6
                sm:flex-row
                sm:flex-wrap
                sm:items-center
                sm:gap-3
              "
            >
              <Link
                href="/book-appointment"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#173F35]
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#12352D]
                  sm:px-6
                  sm:py-3.5
                  sm:text-[13px]
                "
              >
                Book a Consultation
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/retreat-programs"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#173F35]/15
                  bg-[#FAF8F1]/80
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-[#173F35]
                  backdrop-blur-[2px]
                  transition-all
                  duration-300
                  hover:bg-[#FAF8F1]
                  sm:px-6
                  sm:py-3.5
                  sm:text-[13px]
                "
              >
                Book Retreat &amp; Programs
              </Link>

              <Link
                href="/score"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#173F35]/15
                  bg-[#FAF8F1]/80
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-[#173F35]
                  backdrop-blur-[2px]
                  transition-all
                  duration-300
                  hover:bg-[#FAF8F1]
                  sm:px-6
                  sm:py-3.5
                  sm:text-[13px]
                "
              >
                Explore the 21-Point Assessment
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* ==================================================
          SUBTLE BOTTOM BLEND
      ================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0 z-20
          h-6
          bg-gradient-to-t
          from-[#FAF8F1]
          to-transparent
        "
      />
    </section>
  );
}
