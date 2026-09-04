import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "See the whole picture.",
    description:
      "We begin with the person, not just the health concern. We consider everyday factors such as food, movement, sleep, stress, breathing and routines to understand the wider picture.",
  },
  {
    number: "02",
    title: "Identify",
    subtitle: "Recognise the patterns.",
    description:
      "We look at everyday habits and lifestyle patterns that may be relevant to health. This helps clarify where change may be useful and where to begin.",
  },
  {
    number: "03",
    title: "Personalise",
    subtitle: "Create a plan that fits real life.",
    description:
      "There is no single routine that suits everyone. We bring together appropriate elements of Lifestyle Medicine, Nutrition, Yoga Therapy and lifestyle modification according to individual needs, circumstances and goals.",
  },
  {
    number: "04",
    title: "Practise",
    subtitle: "Turn understanding into action.",
    description:
      "Knowledge matters when it can be used in everyday life. We translate health education into practical actions involving areas such as food, movement, breathing, rest and other healthy behaviours.",
  },
  {
    number: "05",
    title: "Sustain",
    subtitle: "Build habits that can last.",
    description:
      "Lasting change is built gradually. We focus on realistic habits that can become part of everyday life rather than relying on short-term routines or perfection.",
  },
  {
    number: "06",
    title: "Adapt",
    subtitle: "Review and keep moving forward.",
    description:
      "Life changes, and a health plan may need to change with it. We encourage reflection, review and adjustment as needs, circumstances and experience evolve.",
  },
];

const approaches = [
  {
    title: "Lifestyle Medicine",
    href: "/approach/lifestyle",
  },
  {
    title: "Nutrition",
    href: "/approach/nutrition",
  },
  {
    title: "Therapeutic Yoga",
    href: "/approach/therapeutic-yoga",
  },
  {
    title: "Breath & Mindfulness",
    href: "/approach/breath-mindfulness",
  },
];

export default function SutraHealthMethod() {
  return (
    <section
      aria-labelledby="sutra-health-method-title"
      className="bg-[#F4F0E8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
              Our Approach
            </p>

            <h2
              id="sutra-health-method-title"
              className="mt-3 max-w-xl font-serif text-4xl leading-[1.04] tracking-[-0.03em] text-[#173F35] sm:text-5xl lg:text-6xl"
            >
              The Sutra Health Method
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-1">
            <p className="font-serif text-[22px] leading-tight tracking-[-0.02em] text-[#365B50] sm:text-[25px]">
              Understand the person. Change the patterns. Build the habits.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-[#536A62] sm:text-[16px] sm:leading-8">
              Health is shaped by the way we live every day. Our method brings
              together Lifestyle Medicine, Nutrition, Yoga Therapy, Behaviour
              Change and Health Education to help people understand their health
              and work towards sustainable changes in everyday life.
            </p>
          </div>
        </div>

        {/* Six-stage method */}
        <div className="mt-12 border-y border-[#173F35]/15 sm:mt-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={[
                  "group relative p-6 sm:p-8",
                  "border-b border-[#173F35]/15",
                  index % 3 !== 2 ? "lg:border-r" : "",
                  index < 3 ? "lg:border-b" : "",
                  index % 2 === 0 ? "md:border-r" : "md:border-r-0",
                  index === 4 ? "md:border-b-0 lg:border-b" : "",
                  index === 5 ? "md:border-b-0" : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-serif text-3xl leading-none text-[#65966F]">
                    {step.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="mt-2 h-px w-10 bg-[#65966F]/40 transition-all duration-500 group-hover:w-16"
                  />
                </div>

                <h3 className="mt-7 font-serif text-[28px] leading-tight tracking-[-0.02em] text-[#173F35] sm:text-[30px]">
                  {step.title}
                </h3>

                <p className="mt-2 text-[13px] font-semibold text-[#65966F] sm:text-sm">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-[14px] leading-7 text-[#536A62] sm:text-[15px]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Philosophy + internal links */}
        <div className="mt-12 grid gap-10 border-t border-[#173F35]/15 pt-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
              The philosophy
            </p>

            <blockquote className="mt-4 max-w-2xl font-serif text-[30px] leading-[1.08] tracking-[-0.025em] text-[#173F35] sm:text-[38px]">
              Understand the person.
              <br />
              Change the patterns.
              <br />
              Build the habits.
              <br />
              Sustain the change.
            </blockquote>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Explore the approach
            </p>

            <nav
              aria-label="Sutra Health approach"
              className="mt-4 divide-y divide-[#173F35]/10 border-y border-[#173F35]/10"
            >
              {approaches.map((approach) => (
                <Link
                  key={approach.href}
                  href={approach.href}
                  className="group flex items-center justify-between py-3.5 text-[13px] font-medium text-[#365B50] transition-colors hover:text-[#173F35] sm:py-4 sm:text-[14px]"
                >
                  <span>{approach.title}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#65966F] transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <Link
              href="/approach"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
            >
              See the full Sutra Health Method
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
