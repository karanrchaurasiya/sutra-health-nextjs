import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const conditions = [
  {
    number: "01",
    title: "Weight Management",
    description:
      "Not another crash diet. A plan built around food you'll actually keep eating.",
    href: "/conditions/weight-management",
    image: "/images/conditions/weight-management.png",
  },
  {
    number: "02",
    title: "Metabolic Health",
    description:
      "A closer look at your diet, movement, and daily routine — alongside your existing medical care.",
    href: "/conditions/metabolic-health",
    image: "/images/conditions/metabolic-health.png",
  },
  {
    number: "03",
    title: "High Blood Pressure",
    description:
      "Lifestyle changes worth exploring, done in coordination with your doctor.",
    href: "/conditions/high-blood-pressure",
    image: "/images/conditions/high-blood-pressure.png",
  },
  {
    number: "04",
    title: "Arthritis & Joint Pain",
    description:
      "Movement-based practices adapted for your body and everyday mobility.",
    href: "/conditions/arthritis-joint-pain",
    image: "/images/conditions/arthritis-joint-pain.png",
  },
];

export default function Conditions() {
  return (
    <section className="bg-[#F5F6F0] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
            Health Concerns
          </p>

          <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px] lg:text-[50px]">
            Health conditions we support
            <br />
            <span className="italic text-[#65966F]">
              through lifestyle-focused care.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[590px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
            Explore selected health concerns where lifestyle, nutrition,
            movement and other supportive practices may form part of a
            broader care plan.
          </p>
        </div>

        {/* Condition Cards */}
        <div
          className="
            mt-10
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            pb-4
            scrollbar-hide

            sm:grid
            sm:grid-cols-2
            sm:overflow-visible
            sm:pb-0

            lg:grid-cols-4
          "
        >
          {conditions.map((condition) => (
            <Link
              key={condition.href}
              href={condition.href}
              className="
                group
                w-[82vw]
                shrink-0
                snap-start
                overflow-hidden
                rounded-[18px]
                border
                border-[#173F35]/10
                bg-[#FCFCF8]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(23,63,53,0.08)]

                sm:w-auto
                sm:shrink
              "
            >
              {/* Image */}
              <div className="relative aspect-[4/2.7] w-full overflow-hidden">
                <Image
                  src={condition.image}
                  alt={`${condition.title} lifestyle healthcare`}
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
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="relative p-4 sm:p-5">
                <h3 className="pr-7 font-serif text-[20px] leading-[1.15] tracking-[-0.02em] text-[#173F35]">
                  {condition.title}
                </h3>

                <p className="mt-2 pr-5 text-[11px] leading-5 text-[#71817A]">
                  {condition.description}
                </p>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-5
                    right-4
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#173F35]/10
                    text-[13px]
                    text-[#65966F]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-[#173F35]
                    group-hover:text-white
                  "
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        

        {/* Bottom Link */}
        <div className="mt-8 text-center">
          <Link
            href="/conditions"
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
            Explore all conditions
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}