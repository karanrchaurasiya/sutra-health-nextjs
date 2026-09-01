import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Doctors & Experts | Sutra Health",
  description:
    "Meet the Sutra Health team of doctors and wellness experts supporting a personalized, whole-person approach to health.",
};

const experts = [
  {
    name: "Dr. Rakesh Sarwal",
    role: "MBBS, MPH, DrPH",
    description:
      "Dr. Rakesh Sarwal's publications, research talks and academic CV are available on his academic profile page.",
    image: "/images/doctor.jpeg",
    profileUrl: "https://academic.lifequality.org.in/",
  },
  {
    name: "Mrs. Bimla Sarwal",
    role: "Wellness Practitioner",
    description:
      "30+ years experience in wellness, healthy diet, yoga and natural living — inspiring communities toward sustainable health.",
    image: "/images/doctor-icon.png",
  },
  {
    name: "Dr. Yamini",
    role: "MBBS, MD",
    description:
      "Experienced healthcare professional with a focus on maternal and family healthcare delivery.",
    image: "/images/doctor-icon.png",
  },
];

export default function DoctorsPage() {
  return (
    <main className="bg-[#FAF8F1]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[#173F35]/10 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Doctors & experts
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] text-[#123F35] sm:text-5xl lg:text-6xl">
              Care guided by
              <br />
              experience and understanding.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
              Our team brings together medical knowledge and lifestyle-focused
              expertise to help you create a healthier way of living.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================
          EXPERTS
      ===================================================== */}
      <section className="bg-[#F1F4ED] py-14 sm:py-18 lg:py-20">
        <Container>
          {/* Section heading */}
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Our team
            </p>

            <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#173F35] sm:text-4xl">
              People who care about your whole health.
            </h2>
          </div>

          {/* =================================================
              EXPERT CARDS
          ================================================= */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((expert) => (
              <article
                key={`${expert.name}-${expert.role}`}
                className="group overflow-hidden rounded-[20px] border border-[#173F35]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(23,63,53,0.09)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EAF1E7]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-[21px] leading-tight tracking-[-0.02em] text-[#173F35]">
                    {expert.name}
                  </h3>

                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#65966F]">
                    {expert.role}
                  </p>

                  <p className="mt-3 text-[12px] leading-5 text-[#71817A]">
                    {expert.description}
                  </p>

                  {/* Academic Profile - ONLY FOR DR. RAKESH SARWAL */}
                  {expert.profileUrl && (
                    <a
                      href={expert.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
                    >
                      Academic Profile
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          APPROACH
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                A connected team
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#173F35] sm:text-5xl">
                Different expertise.
                <br />
                One whole-person approach.
              </h2>
            </div>

            {/* Right */}
            <div>
              <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px]">
                Health is influenced by many parts of everyday life. Our team
                works across lifestyle, nutrition, movement, breath and mind to
                create practical support around your individual needs.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Lifestyle", "Nutrition", "Yogasana", "Breath", "Mind"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#173F35]/10 bg-[#FAF8F1] px-4 py-2 text-[11px] font-medium text-[#536A62]"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
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
              Start your journey
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-[#FAF8F1] sm:text-5xl">
              Let&apos;s understand
              <br className="hidden sm:block" />
              your health together.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#CBDAD1]">
              Start with a conversation about your health goals and discover the
              right next step for you.
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
