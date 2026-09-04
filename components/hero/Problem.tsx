import Container from "@/components/shared/Container";

const factors = [
  {
    number: "01",
    title: "What we eat",
    text: "Food is part of everyday health. The quality, variety and pattern of what we eat can influence weight, metabolic health and other aspects of wellbeing.",
  },
  {
    number: "02",
    title: "How we live",
    text: "Movement, sleep, daily routines and the way we spend our time all form part of the health picture. These patterns are often easier to change when they are understood in context.",
  },
  {
    number: "03",
    title: "How we respond",
    text: "Stress, habits, breathing and our relationship with everyday demands can affect how we feel and function. Looking at these alongside physical health gives a fuller picture.",
  },
];

export default function Problem() {
  return (
    <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          
          {/* INTRO */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8] sm:text-[11px]">
              Look at the bigger picture
            </p>

            <h2 className="mt-4 max-w-[520px] font-serif text-[40px] leading-[1.04] tracking-[-0.035em] text-[#FAF8F1] sm:text-[48px] lg:text-[54px]">
              Health is not shaped by{" "}
              <span className="italic text-[#B7CCB8]">
                one thing alone.
              </span>
            </h2>

            <p className="mt-6 max-w-[500px] text-[14px] leading-7 text-[#D0DAD4] sm:text-[15px] sm:leading-8">
              What we eat, how we move, how we sleep and how we respond to
              everyday demands are connected parts of life. Looking at them
              together can help us understand health more completely.
            </p>

          </div>

          {/* THREE FACTORS */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {factors.map((factor) => (
              <article
                key={factor.number}
                className="grid gap-4 py-7 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-8"
              >
                <span className="pt-1 text-[11px] font-semibold tracking-[0.12em] text-[#8EAD95]">
                  {factor.number}
                </span>

                <div>
                  <h3 className="font-serif text-[25px] leading-tight tracking-[-0.02em] text-[#FAF8F1] sm:text-[28px]">
                    {factor.title}
                  </h3>

                  <p className="mt-3 max-w-[620px] text-[13px] leading-6 text-[#B8C8C0] sm:text-[14px] sm:leading-7">
                    {factor.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}