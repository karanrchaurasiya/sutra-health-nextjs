import Container from "@/components/shared/Container";

const highlights = [
  {
    number: "1200+",
    label: "People supported",
  },
  {
    number: "1997",
    label: "EQUAL Society established",
  },
  {
    number: "Online",
    label: "Consultation available across India",
  },
];

export default function Credibility() {
  return (
    <section className="bg-[#FAF8F1]" aria-labelledby="credibility-heading">
      <Container>
        <div className="border-y border-[#173F35]/10 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Why Sutra Health
              </p>

              <h2
                id="credibility-heading"
                className="mt-3 max-w-[600px] font-serif text-[30px] leading-[1.08] tracking-[-0.03em] text-[#123F35] sm:text-[36px]"
              >
                Healthcare shaped by experience, evidence and everyday practice.
              </h2>

              <p className="mt-4 max-w-[620px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                Sutra Health (Life Quality) brings together lifestyle-focused
                healthcare, nutrition, yoga therapy and health education. The
                work is grounded in practical lifestyle support and designed to
                complement appropriate medical care.
              </p>
            </div>

            <div className="grid grid-cols-3 border-t border-[#173F35]/10 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-3 ${
                    index !== 0 ? "border-l border-[#173F35]/10" : ""
                  }`}
                >
                  <p className="font-serif text-[26px] tracking-[-0.03em] text-[#173F35] sm:text-[32px]">
                    {item.number}
                  </p>

                  <p className="mt-1 max-w-[140px] text-[10px] leading-4 text-[#71817A] sm:text-[11px] sm:leading-5">
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
