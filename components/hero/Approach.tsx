"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonWalking,
  faAppleWhole,
  faPerson,
  faWind,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

import Container from "@/components/shared/Container";

const pillars = [
  {
    number: "01",
    title: "Lifestyle",
    description:
      "Practical daily habits designed for long-term wellbeing.",
    icon: faPersonWalking,
  },
  {
    number: "02",
    title: "Nutrition",
    description:
      "Personalized nutrition guidance that fits your life.",
    icon: faAppleWhole,
  },
  {
    number: "03",
    title: "Yogasana",
    description:
      "Therapeutic yoga to support strength, mobility and balance.",
    icon: faPerson,
  },
  {
    number: "04",
    title: "Breath",
    description:
      "Breath practices to support calm, energy and awareness.",
    icon: faWind,
  },
  {
    number: "05",
    title: "Mind",
    description:
      "Mindfulness practices for greater clarity and balance.",
    icon: faBrain,
  },
];

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F1] py-20 sm:py-24 lg:py-28">

      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#789A7D]/15 lg:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-60px] top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-dashed border-[#789A7D]/15 lg:block"
      />

      <Container>

        {/* ================= HEADING ================= */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
            Our integrative approach
          </p>

          <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
            Whole-person care for lasting change.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-6 text-[#687A73] sm:text-[15px] sm:leading-7">
            We bring together different aspects of healthy living to create
            practical, personalized support around your needs and goals.
          </p>

        </div>

        {/* ================= PILLARS ================= */}

        <div className="relative z-10 mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">

          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group px-5 text-center sm:px-7 lg:min-h-[220px] lg:border-l lg:border-[#173F35]/10 ${
                index === pillars.length - 1
                  ? "lg:border-r"
                  : ""
              }`}
            >

              {/* Icon */}

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#B7CCB8] bg-[#EAF1E7] text-[#4F8160] transition-all duration-300 group-hover:scale-105 group-hover:border-[#65966F] group-hover:bg-[#E2EDE0]">

                <FontAwesomeIcon
                  icon={pillar.icon}
                  className="h-5 w-5"
                  aria-hidden="true"
                />

              </div>

              {/* Number */}

              <p className="mt-5 text-[9px] font-semibold tracking-[0.15em] text-[#A0AEA7]">
                {pillar.number}
              </p>

              {/* Title */}

              <h3 className="mt-2 font-serif text-[22px] tracking-[-0.02em] text-[#173F35]">
                {pillar.title}
              </h3>

              {/* Description */}

              <p className="mx-auto mt-2 max-w-[170px] text-[11px] leading-5 text-[#71817A]">
                {pillar.description}
              </p>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <div className="mx-auto mt-14 max-w-4xl border-t border-[#173F35]/10 pt-8 text-center">

          <p className="font-serif text-[22px] leading-relaxed text-[#36594E] sm:text-[26px]">
            Better health is not one change.
            <br className="hidden sm:block" />
            It is the way your everyday life comes together.
          </p>

          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
          >
            Discover our approach
            <span aria-hidden="true">→</span>
          </Link>

        </div>

      </Container>
    </section>
  );
}