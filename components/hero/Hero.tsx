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
        className="
          z-0
          hidden
          object-cover
          object-center
          lg:block
        "
      />

      {/* ==================================================
          MOBILE IMAGE

          Mobile uses a controlled image area instead of
          forcing the complete hero to behave like a
          background image.
      ================================================== */}
      <div
        className="
          relative
          z-0
          block
          h-[360px]
          w-full
          sm:h-[410px]
          lg:hidden
        "
      >
        <Image
          src="/images/hero-desktop56.png"
          alt="Sutra Health consultation"
          fill
          priority
          sizes="
            (max-width: 480px) 100vw,
            (max-width: 640px) 100vw,
            100vw
          "
          className="
            object-cover
            object-[50%_18%]
          "
        />

        {/* Mobile image fade */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-[190px]
            bg-gradient-to-t
            from-[#FAF8F1]
            via-[#FAF8F1]/45
            to-transparent
          "
        />
      </div>

      {/* ==================================================
          DESKTOP OVERLAY

          Cream on left
          Smooth fade in centre
          Clear image on right
      ================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          hidden
          lg:block
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(250,248,241,1) 0%, rgba(250,248,241,0.98) 27%, rgba(250,248,241,0.88) 38%, rgba(250,248,241,0.60) 47%, rgba(250,248,241,0.25) 56%, rgba(250,248,241,0) 70%)",
        }}
      />

      {/* ==================================================
          HERO CONTENT
      ================================================== */}
      <Container>
        <div
          className="
            relative
            z-20

            flex
            min-h-0
            items-start

            pb-10

            lg:min-h-[620px]
            lg:items-center
            lg:pb-0

            xl:min-h-[650px]
          "
        >
          <div
            className="
              relative
              z-20
              w-full
              max-w-[700px]

              /* Mobile content overlaps the bottom
                 of the image slightly */
              -mt-[48px]

              rounded-t-[28px]

              bg-[#FAF8F1]

              px-5
              pt-7
              pb-2


              sm:-mt-[45px]
              sm:rounded-t-[10px]
              

              lg:mt-0
              lg:rounded-none
              lg:bg-transparent
              lg:px-0
              lg:pt-0
            "
          >
            {/* ==================================================
                EYEBROW
            ================================================== */}
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#4F8160]

                sm:text-[10px]
                sm:tracking-[0.2em]

                lg:text-[11px]
                mb-5
               
              "
            >
              Integrative Lifestyle Healthcare
            </p>

            {/* ==================================================
                HEADING
            ================================================== */}
            <h1
              className="
                mt-3
                max-w-[690px]

                font-serif
                font-bold

                text-[38px]
                leading-[0.98]
                tracking-[-0.045em]

                text-[#123F35]

                sm:mt-4
                sm:text-[45px]

                md:text-[52px]

                lg:mt-0
                lg:text-[60px]
                lg:font-medium

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
                font-medium
                leading-[1.65]

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
              {/* PRIMARY CTA */}
              <Link
                href="/book-appointment"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full

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

                  transition-all
                  duration-300

                  hover:bg-[#12352D]

                  active:scale-[0.99]

                  sm:min-h-0
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-[13px]
                "
              >
                Book a Consultation
                <span aria-hidden="true" className="text-[14px]">
                  →
                </span>
              </Link>

              {/* SECONDARY CTA */}
              <Link
                href="/retreat-programs"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full

                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  border
                  border-[#173F35]/15

                  bg-[#FAF8F1]

                  px-5
                  py-3

                  text-[12px]
                  font-semibold

                  text-[#173F35]

                  transition-all
                  duration-300

                  hover:bg-[#F0F4ED]

                  active:scale-[0.99]

                  sm:min-h-0
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-[13px]
                "
              >
                Book Retreat &amp; Programs
              </Link>

              {/* ASSESSMENT CTA */}
              <Link
                href="/score"
                className="
                  inline-flex
                  min-h-[52px]
                  w-full

                  items-center
                  justify-center
                  gap-2

                  rounded-full

                  border
                  border-[#173F35]/15

                  bg-[#FAF8F1]

                  px-5
                  py-3

                  text-[12px]
                  font-semibold

                  text-[#173F35]

                  transition-all
                  duration-300

                  hover:bg-[#F0F4ED]

                  active:scale-[0.99]

                  sm:min-h-0
                  sm:w-auto
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

          absolute
          inset-x-0
          bottom-0
          z-20

          hidden

          h-6

          bg-gradient-to-t
          from-[#FAF8F1]
          to-transparent

          lg:block
        "
      />
    </section>
  );
}
