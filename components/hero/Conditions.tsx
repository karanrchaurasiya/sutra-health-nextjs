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
  {
    number: "05",
    title: "Migraine & Headache",
    description:
      "Understand lifestyle factors that may influence recurring headaches and support everyday wellbeing.",
    href: "/conditions/migraine-headache",
    image: "/images/conditions/migraine-headache.png",
  },
  {
    number: "06",
    title: "Digestive & Gut Health",
    description:
      "Support digestive wellbeing through practical lifestyle and nutrition habits.",
    href: "/conditions/digestive-gut-health",
    image: "/images/conditions/digestive-gut-health.png",
  },
];

export default function Conditions() {
  return (
    <section className="bg-[#F5F6F0] py-20 sm:py-24 lg:py-28">
      <Container>

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
            We help you with
          </p>

          <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
            Real health. Lasting change.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
            Personalized lifestyle-based support designed around your
            health goals, everyday habits and long-term wellbeing.
          </p>

        </div>

        {/* Condition cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {conditions.map((condition) => (
            <Link
              key={condition.href}
              href={condition.href}
              className="group overflow-hidden rounded-[22px] border border-[#173F35]/10 bg-[#FCFCF8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.10)]"
            >

              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">

                <Image
                  src={condition.image}
                  alt={`${condition.title} lifestyle healthcare`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F35]/30 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-[#65806F] backdrop-blur-sm">
                  {condition.number}
                </span>

              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-7">

                <h3 className="pr-10 font-serif text-[23px] tracking-[-0.02em] text-[#173F35]">
                  {condition.title}
                </h3>

                <p className="mt-2 max-w-[280px] text-[12px] leading-5 text-[#71817A] sm:text-[13px]">
                  {condition.description}
                </p>

                {/* Arrow */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-[#173F35]/10 text-[15px] text-[#65966F] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#173F35] group-hover:text-white"
                >
                  →
                </span>

              </div>

            </Link>
          ))}

        </div>

        {/* Bottom link */}
        <div className="mt-10 text-center">

          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
          >
            Explore all conditions
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </Container>
    </section>
  );
}