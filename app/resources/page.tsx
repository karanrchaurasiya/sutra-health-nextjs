import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Health Resources | Sutra Health",
  description:
    "Explore health resources from Sutra Health covering lifestyle, nutrition, movement, breath, mind and everyday wellbeing.",
};

const resources = [
  {
    number: "01",
    category: "Lifestyle",
    title: "Building healthier habits",
    description:
      "Practical ideas to help you make sustainable changes part of your everyday routine.",
    href: "/resources/lifestyle",
  },
  {
    number: "02",
    category: "Nutrition",
    title: "Understanding healthy eating",
    description:
      "Simple guidance to help you make informed and practical food choices.",
    href: "/resources/nutrition",
  },
  {
    number: "03",
    category: "Yogasana",
    title: "Movement & therapeutic yoga",
    description:
      "Learn how movement and yoga practices can become part of a balanced lifestyle.",
    href: "/resources/yogasana",
  },
  {
    number: "04",
    category: "Breath",
    title: "Breath & wellbeing",
    description:
      "Explore breathing practices and their place in a calmer, healthier routine.",
    href: "/resources/breath",
  },
  {
    number: "05",
    category: "Mind",
    title: "Mindfulness & balance",
    description:
      "Ideas for developing greater awareness, calm and balance in everyday life.",
    href: "/resources/mind",
  },
  {
    number: "06",
    category: "Health",
    title: "Everyday health",
    description:
      "Useful information to help you understand different aspects of your health and wellbeing.",
    href: "/resources/health",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#FAF8F1]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[#173F35]/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Resources
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#123F35] sm:text-5xl lg:text-6xl">
              Understand your health.
              <br />
              Make informed choices.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
              Explore practical health information designed to help you learn,
              reflect and make healthier choices in everyday life.
            </p>

          </div>
        </Container>
      </section>


      {/* =====================================================
          RESOURCE CARDS
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-14 sm:py-20 lg:py-24">
        <Container>

          <div className="mb-9 text-center sm:mb-12">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Explore
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
              Knowledge for everyday health.
            </h2>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-[22px] border border-[#173F35]/10 bg-[#FCFCF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(23,63,53,0.08)] sm:p-7"
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <span className="font-serif text-[27px] leading-none tracking-[-0.04em] text-[#B4C7B7]">
                    {resource.number}
                  </span>

                  <span className="rounded-full bg-[#EAF1E7] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#65966F]">
                    {resource.category}
                  </span>

                </div>


                {/* Content */}
                <div className="mt-auto pt-12">

                  <h2 className="pr-8 font-serif text-[23px] leading-tight tracking-[-0.02em] text-[#173F35]">
                    {resource.title}
                  </h2>

                  <p className="mt-3 max-w-[290px] text-[12px] leading-5 text-[#71817A] sm:text-[13px]">
                    {resource.description}
                  </p>

                </div>


                {/* Arrow */}
                <span className="absolute bottom-7 right-7 flex h-8 w-8 items-center justify-center rounded-full border border-[#173F35]/10 text-[14px] text-[#65966F] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#173F35] group-hover:text-white">
                  →
                </span>

              </Link>
            ))}

          </div>

        </Container>
      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Learn & apply
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Information should
                <br />
                lead to action.
              </h2>

            </div>


            <div>

              <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                Good health information is most useful when it can be
                understood and applied to everyday life. Our resources are
                designed to help you learn more and identify practical steps
                that may fit your own routine.
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
          DISCLAIMER
      ===================================================== */}
      <section className="bg-[#FAF8F1] py-10 sm:py-12">
        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-[11px] leading-5 text-[#87958F]">
              The information provided through these resources is intended for
              general educational purposes and is not a substitute for
              individualized medical advice, diagnosis or treatment.
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
              Need personalized guidance?
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Information is a start.
              <br />
              Your journey is personal.
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