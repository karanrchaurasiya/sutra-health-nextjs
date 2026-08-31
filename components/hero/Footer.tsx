import Link from "next/link";
import Container from "@/components/shared/Container";

const conditions = [
  { label: "Weight Management", href: "/conditions/weight-management" },
  { label: "Metabolic Health", href: "/conditions/metabolic-health" },
  { label: "Blood Pressure", href: "/conditions/blood-pressure" },
];

const services = [
  { label: "Lifestyle Medicine", href: "/services/lifestyle-medicine" },
  { label: "Nutrition Counselling", href: "/services/nutrition-counselling" },
  { label: "Therapeutic Yoga", href: "/services/therapeutic-yoga" },
];

export default function Footer() {
  return (
    <footer className="bg-[#123F35] text-white">
      <Container>

        {/* ==================================================
            MAIN FOOTER
            ================================================== */}

        <div
          className="
            grid
            gap-10
            py-12

            sm:gap-12
            sm:py-16

            md:grid-cols-2

            lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]
            lg:gap-10
            lg:py-20
          "
        >

          {/* ==================================================
              BRAND
              ================================================== */}

          <div className="max-w-[340px]">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Sutra Health home"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white sm:h-12 sm:w-12">
                <img
                  src="/logo/sutra-health-logo.png"
                  alt=""
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

            <p className="mt-6 max-w-[330px] text-[12px] leading-6 text-[#C1D1C8] sm:mt-7 sm:text-[13px]">
              Helping you build healthier everyday habits through an
              integrative approach to lifestyle, nutrition, movement,
              breath and mind.
            </p>

            <Link
              href="/book-appointment"
              className="
                mt-6
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#FAF8F1]
                px-5
                py-2.5
                text-[12px]
                font-semibold
                text-[#123F35]
                transition
                hover:bg-white

                sm:mt-7
                sm:px-6
                sm:py-3
                sm:text-[13px]
              "
            >
              Book Appointment
              <span aria-hidden="true">→</span>
            </Link>

          </div>


          {/* ==================================================
              CONDITIONS
              ================================================== */}

          <div>

            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
              Conditions
            </h2>

            <nav className="mt-4 flex flex-col gap-1 sm:mt-5 sm:gap-3">

              {conditions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    inline-flex
                    min-h-9
                    items-center
                    text-[12px]
                    text-[#D0DDD5]
                    transition-colors
                    hover:text-white

                    sm:min-h-0
                    sm:text-[13px]
                  "
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/conditions"
                className="
                  mt-1
                  inline-flex
                  min-h-9
                  items-center
                  text-[12px]
                  font-semibold
                  text-white

                  sm:min-h-0
                  sm:text-[13px]
                "
              >
                View all →
              </Link>

            </nav>

          </div>


          {/* ==================================================
              SERVICES
              ================================================== */}

          <div>

            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
              Services
            </h2>

            <nav className="mt-4 flex flex-col gap-1 sm:mt-5 sm:gap-3">

              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    inline-flex
                    min-h-9
                    items-center
                    text-[12px]
                    text-[#D0DDD5]
                    transition-colors
                    hover:text-white

                    sm:min-h-0
                    sm:text-[13px]
                  "
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/services"
                className="
                  mt-1
                  inline-flex
                  min-h-9
                  items-center
                  text-[12px]
                  font-semibold
                  text-white

                  sm:min-h-0
                  sm:text-[13px]
                "
              >
                View all →
              </Link>

            </nav>

          </div>


          {/* ==================================================
              CONTACT
              ================================================== */}

          <div>

            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B7CFC0] sm:text-[12px]">
              Get in touch
            </h2>

            <div className="mt-4 space-y-3 text-[12px] leading-5 text-[#D0DDD5] sm:mt-5 sm:space-y-4 sm:text-[13px]">

              <p className="max-w-[300px]">
                Have questions about our approach or appointments?
              </p>

              <a
                href="tel:+919013103676"
                className="block py-1 transition-colors hover:text-white"
              >
                +91 90131 03676
              </a>

              <a
                href="mailto:info@lifequality.org.in"
                className="block break-all py-1 transition-colors hover:text-white sm:break-normal"
              >
                info@lifequality.org.in
              </a>

            </div>


            {/* ==================================================
                SOCIAL
                ================================================== */}

            <div className="mt-5 flex gap-2 sm:mt-6">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-[11px]
                  transition
                  hover:bg-white/10
                "
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-[11px]
                  transition
                  hover:bg-white/10
                "
              >
                FB
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-[11px]
                  transition
                  hover:bg-white/10
                "
              >
                IN
              </a>

            </div>

          </div>

        </div>


        {/* ==================================================
            BOTTOM BAR
            ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-5
            text-[10px]
            text-[#AFC4B8]

            sm:py-6
            sm:text-[11px]

            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} Sutra Health. All rights reserved.
          </p>

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