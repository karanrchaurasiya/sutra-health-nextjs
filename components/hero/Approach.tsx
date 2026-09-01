import Link from "next/link";
import Container from "@/components/shared/Container";

const pillars = [
  {
    number: "01",
    title: "Lifestyle",
    description:
      "Practical daily habits and routines designed around sustainable wellbeing.",
  },
  {
    number: "02",
    title: "Nutrition",
    description:
      "Personalized nutrition guidance that fits your needs, preferences and everyday life.",
  },
  {
    number: "03",
    title: "Yogasana",
    description:
      "Therapeutic yoga practices focused on movement, strength, mobility and balance.",
  },
  {
    number: "04",
    title: "Breath",
    description:
      "Breathing practices that encourage awareness, relaxation and a calmer daily routine.",
  },
  {
    number: "05",
    title: "Mind",
    description:
      "Mindfulness practices that support awareness, clarity and emotional wellbeing.",
  },
];

export default function Approach() {
  return (
    <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-32">
      <Container>

        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              The Sutra Health approach
            </p>

            <h2 className="mt-4 max-w-[560px] font-serif text-[42px] leading-[1.02] tracking-[-0.04em] text-[#123F35] sm:text-[52px] lg:text-[58px]">
              Health is connected.
              <br />
              <span className="italic text-[#65966F]">
                So is our approach.
              </span>
            </h2>
          </div>

          <div className="max-w-[560px] lg:ml-auto">
            <p className="text-[15px] leading-7 text-[#526B62] sm:text-[16px] sm:leading-8">
              Sutra Health brings together different aspects of healthy
              living to create practical, personalized support around your
              health, everyday life and goals.
            </p>

            <p className="mt-4 text-[13px] leading-6 text-[#7A8983] sm:text-[14px] sm:leading-7">
              Rather than looking at one part of life in isolation, our
              approach considers the ways lifestyle, nutrition, movement,
              breath and mind can come together.
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-[#173F35]/10 sm:mt-16" />

        {/* Pillars */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left statement */}
          <div className="border-b border-[#173F35]/10 py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-16">

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A0AEA7]">
              Five connected pillars
            </p>

            <p className="mt-5 max-w-[400px] font-serif text-[26px] leading-[1.25] tracking-[-0.025em] text-[#36594E] sm:text-[30px]">
              Small, sustainable changes can become part of the way you live.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
            >
              Discover our approach
              <span aria-hidden="true">→</span>
            </Link>

          </div>

          {/* Right pillar list */}
          <div className="lg:pl-10">

            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group grid gap-4 border-b border-[#173F35]/10 py-7 sm:grid-cols-[50px_170px_1fr] sm:items-center sm:gap-6 sm:py-8"
              >

                {/* Number */}
                <span className="text-[10px] font-semibold tracking-[0.16em] text-[#A0AEA7]">
                  {pillar.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-[25px] tracking-[-0.025em] text-[#173F35] transition-colors duration-200 group-hover:text-[#65966F] sm:text-[27px]">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="max-w-[480px] text-[12px] leading-6 text-[#71817A] sm:text-[13px] sm:leading-7">
                  {pillar.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}