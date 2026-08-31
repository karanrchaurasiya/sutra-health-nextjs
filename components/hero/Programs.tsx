import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const programs = [
  {
    title: "Lifestyle Medicine",
    description:
      "Personalized lifestyle guidance that brings everyday habits, movement and behaviour change into your care.",
    image: "/images/program-lifestyle.png",
    href: "/services/lifestyle-medicine",
  },
  {
    title: "Nutrition Counselling",
    description:
      "Practical nutrition guidance tailored to your health needs, preferences and everyday life.",
    image: "/images/program-nutrition.png",
    href: "/services/nutrition-counselling",
  },
  {
    title: "Therapeutic Yoga",
    description:
      "Yoga practices adapted to support movement, strength, mobility, balance and overall wellbeing.",
    image: "/images/program-yoga.png",
    href: "/services/therapeutic-yoga",
  },
  {
    title: "Breath & Mind",
    description:
      "Breath and mindfulness practices that support awareness, calm and a more balanced daily life.",
    image: "/images/program-breath.png",
    href: "/services/breath-mind",
  },
];

export default function Programs() {
  return (
    <section className="bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">
      <Container>

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B9573]">
            Our programs
          </p>

          <h2 className="font-serif text-[40px] leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-[48px]">
            Personalized care for your whole health.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#687A73] sm:text-[16px]">
            Your health is shaped by many connected parts of everyday life.
            Our programs bring together practical approaches to support
            healthier, sustainable habits.
          </p>

        </div>

        {/* Program cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">

          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group overflow-hidden rounded-2xl border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(23,63,53,0.09)]"
            >

              {/* Image */}
              <div className="relative aspect-[1.25] overflow-hidden bg-[#EAF0E7]">

                <Image
                  src={program.image}
                  alt={`${program.title} at Sutra Health`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">

                <h3 className="font-serif text-[23px] tracking-[-0.02em] text-[#173F35]">
                  {program.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#6B7C75]">
                  {program.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-[#4F8060]">
                  Explore program

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>

              </div>

            </Link>
          ))}

        </div>

      </Container>
    </section>
  );
}