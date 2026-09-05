import Link from "next/link";
import Container from "@/components/shared/Container";

const levels = [
  {
    title: "Green",
    label: "Continue",
    description: "Keep doing this, it's working well for you.",
    color: "bg-[#6B9573]",
  },
  {
    title: "Yellow",
    label: "Adjust",
    description: "Worth adjusting.",
    color: "bg-[#D6B65A]",
  },
  {
    title: "Red",
    label: "Consider Change",
    description:
      "This is where change matters most.",
    color: "bg-[#C86B62]",
  },
];

export default function HealthFramework() {
  return (
    <section className="bg-[#FAF8F1] py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="rounded-[20px] border border-[#173F35]/10 bg-[#F0F4ED] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">

          {/* Heading */}
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              21-Point Health Building Guidelines
            </p>

            <h2 className="mt-3 font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[42px] lg:text-[48px]">
              Find out exactly where you stand. It's free.
            </h2>

            <p className="mx-auto mt-4 max-w-[600px] text-[13px] leading-6 text-[#61736B] sm:text-[14px] sm:leading-7">
            21 questions across sleep, food, movement, digestion, and stress. You'll get a simple, honest breakdown:
            </p>
          </div>

          {/* Three levels */}
          <div className="mx-auto mt-9 max-w-[900px] border-t border-[#173F35]/10 sm:mt-10">
            <div className="grid sm:grid-cols-3">
              {levels.map((level, index) => (
                <div
                  key={level.title}
                  className={[
                    "px-2 py-6 text-center sm:px-6 sm:py-7",
                    index > 0
                      ? "border-t border-[#173F35]/10 sm:border-l sm:border-t-0"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 rounded-full ${level.color}`}
                    />

                    <h3 className="font-serif text-[25px] tracking-[-0.02em] text-[#123F35]">
                      {level.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#71817A]">
                    {level.label}
                  </p>

                  <p className="mx-auto mt-3 max-w-[240px] text-[12px] leading-5 text-[#687A73]">
                    {level.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 text-center">
            <Link
              href="/score"
              className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-5 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#12352D]"
            >
              Explore the 21-Point Assessment
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}