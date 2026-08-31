import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Patient Stories | Sutra Health",
  description:
    "Read experiences from people exploring lifestyle-focused and whole-person approaches to better health.",
};

const stories = [
  {
    quote:
      "The biggest change was understanding that small, consistent habits could make a meaningful difference to my everyday routine.",
    name: "Patient story",
    focus: "Lifestyle & wellbeing",
  },
  {
    quote:
      "The approach helped me look at my health more holistically and understand where I could make practical changes.",
    name: "Patient story",
    focus: "Nutrition & lifestyle",
  },
  {
    quote:
      "Having a structured approach made it easier to understand my priorities and work on them one step at a time.",
    name: "Patient story",
    focus: "Healthy habits",
  },
  
];

export default function PatientStoriesPage() {
  return (
    <main className="bg-[#FAF8F1]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[#173F35]/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Patient stories
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#123F35] sm:text-5xl lg:text-6xl">
              Real experiences.
              <br />
              Personal journeys.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
              Every health journey is different. These stories reflect the
              experiences of people exploring practical, lifestyle-focused
              approaches to their wellbeing.
            </p>

          </div>
        </Container>
      </section>


      {/* =====================================================
          STORIES
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-14 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-5xl">

            <div className="grid gap-5 md:grid-cols-3">

              {stories.map((story) => (
                <article
                  key={`${story.name}-${story.focus}`}
                  className="group relative flex min-h-[280px] flex-col rounded-[24px] border border-[#173F35]/10 bg-[#FCFCF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(23,63,53,0.07)] sm:p-7"
                >

                  {/* Quote mark */}
                  <div className="font-serif text-5xl leading-none text-[#AFC5B1]">
                    “
                  </div>

                  {/* Quote */}
                  <p className="mt-2 flex-1 font-serif text-[18px] leading-[1.5] tracking-[-0.01em] text-[#36594E]">
                    {story.quote}
                  </p>

                  {/* Bottom */}
                  <div className="mt-7 border-t border-[#173F35]/10 pt-4">

                    <p className="text-[11px] font-semibold text-[#173F35]">
                      {story.name}
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-[#789087]">
                      {story.focus}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Every journey is different
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                There is no single
                <br />
                path to better health.
              </h2>

            </div>

            <div>

              <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                Your goals, routines, challenges and priorities are unique.
                That is why our approach focuses on understanding where you
                are and finding practical changes that make sense for your
                everyday life.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                {[
                  "Lifestyle",
                  "Nutrition",
                  "Yogasana",
                  "Breath",
                  "Mind",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#173F35]/10 bg-[#FAF8F1] px-4 py-2 text-[11px] font-medium text-[#536A62]"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          NOTE
      ===================================================== */}
      <section className="bg-[#FAF8F1] py-12 sm:py-16">
        <Container>

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[11px] leading-5 text-[#87958F]">
              Patient experiences are individual and may vary. The stories
              shared here are intended to describe personal experiences and
              should not be interpreted as a guarantee of health outcomes.
            </p>

          </div>

        </Container>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#173F35] py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B5CEB6] sm:text-[11px]">
              Your journey
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Your story starts
              <br className="hidden sm:block" />
              with a conversation.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Talk to our team about your health goals and explore the right
              next step for you.
            </p>

            <Link
              href="/book-appointment"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-7 py-3.5 text-sm font-semibold text-[#173F35] transition hover:bg-white"
            >
              Book an Appointment
              <span>→</span>
            </Link>

          </div>

        </Container>
      </section>

    </main>
  );
}