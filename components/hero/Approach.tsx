const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "See the whole picture.",
    description:
      "We begin with the person, not just the health concern. We consider relevant aspects of everyday life — including food, movement, sleep, stress, breathing, routines and other lifestyle factors — to understand the bigger picture.",
  },
  {
    number: "02",
    title: "Identify",
    subtitle: "Recognise the patterns.",
    description:
      "We look at everyday behaviours and lifestyle patterns that may be relevant to health. This creates greater awareness of what is happening, what may be influencing it, and where meaningful change can begin.",
  },
  {
    number: "03",
    title: "Personalise",
    subtitle: "Create a plan that fits real life.",
    description:
      "Every person is different. We bring together appropriate elements of Lifestyle Medicine, Nutrition, Yoga Therapy and lifestyle modification according to individual needs, circumstances and goals.",
  },
  {
    number: "04",
    title: "Practise",
    subtitle: "Turn understanding into action.",
    description:
      "Health information becomes meaningful when it can be applied. We translate education into practical daily actions involving areas such as food, movement, breathing, rest and other healthy behaviours.",
  },
  {
    number: "05",
    title: "Sustain",
    subtitle: "Build habits, not temporary routines.",
    description:
      "Sustainable health is built gradually. We focus on realistic changes that can become part of everyday life rather than depending on short-term programmes or perfection.",
  },
  {
    number: "06",
    title: "Adapt",
    subtitle: "Keep learning and evolving.",
    description:
      "Change is not always linear. We encourage reflection, review and adjustment — recognising challenges and adapting the approach as circumstances and needs change.",
  },
];

const disciplines = [
  "Lifestyle Medicine",
  "Nutrition",
  "Yoga Therapy",
  "Behaviour Change",
  "Health Education",
];

export default function SutraHealthMethod() {
  return (
    <section className="bg-[#F4F0E8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#65966F]">
              Our Approach
            </p>

            <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-[#173F35] sm:text-5xl lg:text-6xl">
              The Sutra Health Method
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-1">
            <p className="text-lg leading-8 text-[#536A62]">
              A different way to approach health.
            </p>

            <p className="mt-3 text-[16px] leading-7 text-[#536A62]">
              Health is shaped by the way we live every day. Our approach
              brings together Lifestyle Medicine, Nutrition, Yoga Therapy,
              Behaviour Change and Health Education to help people understand
              their health and build sustainable lifestyle habits.
            </p>
          </div>
        </div>

        {/* Method flow */}
        <div className="mt-12 border-t border-[#173F35]/15">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={`group border-b border-[#173F35]/15 p-6 sm:p-8 ${
                  index % 3 !== 2
                    ? "lg:border-r"
                    : ""
                } ${
                  index % 2 !== 1
                    ? "md:border-r lg:border-r"
                    : "md:border-r-0 lg:border-r"
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-serif text-3xl text-[#65966F]">
                    {step.number}
                  </span>

                  <span className="mt-2 h-px w-10 bg-[#65966F]/40 transition-all duration-500 group-hover:w-16" />
                </div>

                <h3 className="mt-7 font-serif text-3xl capitalize text-[#173F35]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#65966F]">
                  {step.subtitle}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-[#536A62]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-14 grid gap-8 border-t border-[#173F35]/15 pt-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#65966F]">
              The Philosophy
            </p>

            <blockquote className="mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.02em] text-[#173F35] sm:text-4xl">
              Understand the person.
              <br />
              Change the patterns.
              <br />
              Build the habits.
              <br />
              Sustain the change.
            </blockquote>
          </div>

          {/* Disciplines */}
          <div className="lg:max-w-xs">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
              What comes together
            </p>

            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {disciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="text-sm text-[#536A62]"
                >
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}