import Container from "@/components/shared/Container";

const highlights = [
  {
    number: "21",
    label: "Health Building Guidelines",
  },
  {
    number: "1200+",
    label: "People Supported",
  },
  {
    number: "5",
    label: "Lifestyle Pillars",
  },
];

export default function Credibility() {
  return (
    <section className="bg-[#FAF8F1]">
      <Container>
        <div className="border-y border-[#173F35]/10 py-10 sm:py-12 lg:py-14">

          <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">

            {/* Intro */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                The Sutra Health approach
              </p>

              <h2 className="mt-3 max-w-[600px] font-serif text-[28px] leading-[1.12] tracking-[-0.025em] text-[#123F35] sm:text-[34px]">
                A practical approach to building better health.
              </h2>

              <p className="mt-4 max-w-[600px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                We bring together lifestyle-focused practices to help people
                understand their everyday health habits and work towards
                sustainable change.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 border-t border-[#173F35]/10 pt-7 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">

              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-3 ${
                    index !== 0
                      ? "border-l border-[#173F35]/10"
                      : ""
                  }`}
                >
                  <p className="font-serif text-[28px] tracking-[-0.03em] text-[#173F35] sm:text-[34px]">
                    {item.number}
                  </p>

                  <p className="mt-1 max-w-[120px] text-[10px] leading-4 text-[#71817A] sm:text-[11px] sm:leading-5">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}