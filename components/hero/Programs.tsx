import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const programs = [
  {
    title: "Lifestyle Medicine",
    description:
      "One-on-one guidance on the daily habits that are actually moving the needle for you.",
    image: "/images/program-lifestyle.png",
    href: "/programs/lifestyle-counselling",
  },
  {
    title: "Nutrition Counselling",
    description:
      "Practical food guidance — built around your preferences, not a rulebook you'll abandon.",
    image: "/images/program-nutrition.png",
    href: "/programs/dietary-advice",
  },
  {
    title: "Therapeutic Yoga",
    description:
      "Adapted movement for your body, not a generic class. Built for strength, mobility, and balance.",
    image: "/images/program-yoga.png",
    href: "/programs/therapeutic-yoga",
  },
  {
    title: "Pranayama & Breathwork",
    description:
      "Breathing practices that measurably calm your nervous system — and take five minutes.",
    image: "/images/program-breath.png",
    href: "/programs/pranayama",
  },
];

export default function Programs() {
  return (
    <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B9573]">
            Our programs
          </p>

          <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[48px]">
            The approach, broken into things you can actually book.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#687A73] sm:text-[16px]">
            Explore selected Sutra Health programs designed to support
            practical changes in everyday life. Each program sits within
            the wider whole-person approach.
          </p>
        </div>

        {/* Program Cards */}
        <div
          className="
            mt-12
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-4
            scrollbar-hide

            sm:grid
            sm:grid-cols-2
            sm:gap-5
            sm:overflow-visible
            sm:pb-0

            lg:mt-14
            lg:grid-cols-4
          "
        >
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="
                group
                w-[82vw]
                shrink-0
                snap-start
                overflow-hidden
                rounded-2xl
                border
                border-[#173F35]/10
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_35px_rgba(23,63,53,0.09)]

                sm:w-auto
                sm:shrink
              "
            >
              {/* Image */}
              <div className="relative aspect-[1.25] w-full overflow-hidden bg-[#EAF0E7]">
                <Image
                  src={program.image}
                  alt={`${program.title} at Sutra Health`}
                  fill
                  sizes="
                    (max-width: 640px) 82vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-[23px] tracking-[-0.02em] text-[#173F35]">
                  {program.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6B7C75]">
                  {program.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-[#4F8060]">
                  Explore program

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
     

        {/* Bottom Link */}
        <div className="mt-8 text-center">
          <Link
            href="/programs"
            className="
              inline-flex
              items-center
              gap-2
              text-[12px]
              font-semibold
              text-[#173F35]
              transition-colors
              hover:text-[#65966F]
            "
          >
            Explore all programs
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}