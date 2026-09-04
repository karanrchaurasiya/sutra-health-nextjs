import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const expert = {
  name: "Dr. Rakesh Sarwal",
  credentials: "MBBS, MPH, DrPH (Johns Hopkins)",
  role: "Therapeutic Yoga Consultant",
  position:
    "Professor, Community Medicine · Head, Integrated Health Clinic, ESIC Medical College & Hospital, Faridabad",
  expertise: "Lifestyle Medicine · Nutrition · Yoga",
  description:
    "Dr. Rakesh Sarwal brings public-health, academic and therapeutic-yoga experience to Sutra Health, with a focus on lifestyle medicine, nutrition and healthier everyday practices.",
  image: "/images/doctor.jpeg",
  profileUrl: "https://academic.lifequality.org.in/",
};

export default function Experts() {
  return (
    <section className="bg-[#FAF8F1] py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-20">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px]">
              <Image
                src={expert.image}
                alt={expert.name}
                fill
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-[680px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Doctors & Experts
            </p>

            <h2 className="mt-4 max-w-[620px] font-serif text-[38px] leading-[1.06] tracking-[-0.035em] text-[#123F35] sm:text-[46px] lg:text-[52px]">
              Care informed by
              <br />
              <span className="italic text-[#65966F]">experience and evidence.</span>
            </h2>

            <div className="mt-7 border-t border-[#173F35]/10 pt-6">
              <h3 className="font-serif text-[30px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[34px]">
                {expert.name}
              </h3>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#65966F] sm:text-[11px]">
                {expert.credentials}
              </p>

              <p className="mt-3 text-[13px] font-medium leading-6 text-[#173F35] sm:text-[14px]">
                {expert.role}
              </p>

              <p className="mt-2 max-w-[620px] text-[12px] leading-6 text-[#687A73] sm:text-[13px] sm:leading-7">
                {expert.position}
              </p>

              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#65966F]">
                {expert.expertise}
              </p>

              <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                {expert.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
                >
                  Meet the doctors
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href={expert.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
                >
                  Academic profile
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
