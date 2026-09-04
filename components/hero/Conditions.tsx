import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const conditions = [
  {
    number: "01",
    title: "Weight Management",
    description:
      "Build sustainable lifestyle and nutrition habits that support healthier weight management.",
    href: "/conditions/weight-management",
    image: "/images/conditions/weight-management.png",
  },
  {
    number: "02",
    title: "Metabolic Health",
    description:
      "Explore lifestyle, nutrition and movement approaches that support healthier metabolic function.",
    href: "/conditions/metabolic-health",
    image: "/images/conditions/metabolic-health.png",
  },
  {
    number: "03",
    title: "High Blood Pressure",
    description:
      "Explore lifestyle, nutrition, movement and stress-management approaches that support cardiovascular wellbeing.",
    href: "/conditions/high-blood-pressure",
    image: "/images/conditions/high-blood-pressure.png",
  },
  {
    number: "04",
    title: "Arthritis & Joint Pain",
    description:
      "Explore supportive lifestyle and movement approaches for mobility and everyday joint wellbeing.",
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

        {/* Condition cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {conditions.map((condition) => (
            <Link
              key={condition.href}
              href={condition.href}
              className="group overflow-hidden rounded-[18px] border border-[#173F35]/10 bg-[#FCFCF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(23,63,53,0.08)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/2.7] w-full overflow-hidden">
                <Image
                  src={condition.image}
                  alt={`${condition.title} lifestyle healthcare`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                  className="absolute bottom-5 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-[#173F35]/10 text-[13px] text-[#65966F] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#173F35] group-hover:text-white"
                >
                  →
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
          >
            Explore all conditions
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </Container>
    </section>
  );
}