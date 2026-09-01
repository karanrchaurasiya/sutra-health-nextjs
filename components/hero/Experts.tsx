import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/Container";

const expert = {
  name: "Dr. Rakesh Sarwal",
  role: "MBBS, MPH, DrPH",
  description:
    "Dr. Rakesh Sarwal's publications, research talks and academic CV are available on his academic profile page.",
  image: "/images/doctor.png",
  profileUrl: "https://academic.lifequality.org.in/",
};

export default function Experts() {
  return (
    <section className="bg-[#FAF8F1] py-14 sm:py-18 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[360px_1fr] lg:gap-20">

          {/* Image */}
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

          {/* Content */}
          <div className="max-w-[650px]">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
              Doctors & Experts
            </p>

            <h2 className="mt-4 max-w-[620px] font-serif text-[38px] leading-[1.06] tracking-[-0.035em] text-[#123F35] sm:text-[46px] lg:text-[52px]">
              Care informed by
              <br />
              <span className="italic text-[#65966F]">
                experience and evidence.
              </span>
            </h2>

            <div className="mt-7 border-t border-[#173F35]/10 pt-6">

              <h3 className="font-serif text-[30px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[34px]">
                {expert.name}
              </h3>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">
                {expert.role}
              </p>

              <p className="mt-4 max-w-[540px] text-[13px] leading-6 text-[#687A73] sm:text-[14px] sm:leading-7">
                {expert.description}
              </p>

              <Link
                href={expert.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
              >
                View academic profile
                <span aria-hidden="true">↗</span>
              </Link>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}