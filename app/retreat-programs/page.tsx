import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import RetreatHeroSlider from "@/components/retreat/RetreatHeroSlider";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Retreat Wellness Programs | Sutra Health",
  description:
    "Explore wellness programs at Sutra Health Retreat in Faridabad, including physician consultation, nutrition guidance, Shirodhara, meditation, Pranayama and therapeutic yoga.",
  alternates: {
    canonical: "https://lifequality.org.in/retreat-programs",
  },
  openGraph: {
    title: "Retreat Wellness Programs | Sutra Health",
    description:
      "Explore the wellness programs available at Sutra Health Retreat in Faridabad.",
    url: "https://lifequality.org.in/retreat-programs",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const programs = [
  {
    number: "01",
    category: "Medical Wellness",
    title: "Physician Consultation",
    description:
      "A personal health session to discuss your health concerns, lifestyle, daily routine and goals, helping shape practical guidance for your stay.",
    points: [
      "Health history and lifestyle discussion",
      "Individualized health guidance",
      "Lifestyle-focused recommendations",
      "Opportunity to discuss ongoing health concerns",
    ],
    image: "/images/retreat/doctor.jpg",
    imageAlt: "Sutra Health physician consultation",
  },
  {
    number: "02",
    category: "Nutrition",
    title: "Dietary Advice",
    description:
      "Personalized nutrition guidance shaped around your health needs, food habits, preferences and everyday routine.",
    points: [
      "Personalized meal planning",
      "Practical nutrition guidance",
      "Food and lifestyle discussion",
      "Suggestions that fit everyday life",
    ],
    image: "/images/retreat/diet.jpeg",
    imageAlt: "Nutrition and healthy food guidance",
  },
  {
    number: "03",
    category: "Natural Therapy",
    title: "Shirodhara",
    description:
      "A traditional Ayurvedic wellness practice involving the gentle flow of warm oil over the forehead, offered as part of a relaxing retreat experience.",
    points: [
      "Warm oil therapy",
      "Quiet and relaxing environment",
      "Traditional Ayurvedic practice",
      "Dedicated wellness session",
    ],
    image: "/images/retreat/Shirodhara.webp",
    imageAlt: "Shirodhara wellness therapy",
  },
  {
    number: "04",
    category: "Companionship & Support",
    title: "My Buddy",
    description:
      "A supportive companionship option designed around conversation, check-ins, gentle motivation and participation in everyday retreat activities.",
    points: [
      "Regular check-ins",
      "Support and encouragement",
      "Conversation and companionship",
      "Support for walks and activities",
    ],
    image: "/images/retreat/my-buddy.png",
    imageAlt: "Wellness companionship at Sutra Health Retreat",
  },
  {
    number: "05",
    category: "Expressive Arts",
    title: "Singing, Kirtan & Dance",
    description:
      "Shared music and movement experiences that bring people together through singing, Kirtan, expressive movement and time on the rooftop.",
    points: [
      "Kirtan and communal singing",
      "Expressive movement",
      "Music and creative participation",
      "Rooftop sessions",
    ],
    image: "/images/retreat/Kirtan.png",
    imageAlt: "Rooftop wellness experience at Sutra Health Retreat",
  },
  {
    number: "06",
    category: "Mental Wellbeing",
    title: "Meditation",
    description:
      "Guided meditation practices that create space for stillness, awareness and reflection during your retreat.",
    points: [
      "Guided meditation",
      "Breath-based awareness",
      "Mindfulness practices",
      "Quiet retreat environment",
    ],
    image: "/images/retreat/meditation.png",
    imageAlt: "Meditation practice at Sutra Health Retreat",
  },
  {
    number: "07",
    category: "Breathwork",
    title: "Pranayama",
    description:
      "Guided breathing practices that can become part of a mindful daily routine, with practices adapted to the individual where appropriate.",
    points: [
      "Nadi Shodhana",
      "Bhramari",
      "Guided breathing practice",
      "Breath awareness",
    ],
    image: "/images/retreat/pranayama.png",
    imageAlt: "Breathing and yoga practice at Sutra Health Retreat",
  },
  {
    number: "08",
    category: "Movement & Yoga",
    title: "Yoga Asana Protocol",
    description:
      "A structured yoga practice shaped around individual needs and goals, combining appropriate asana practice with mindful movement.",
    points: [
      "Individualized yoga practice",
      "Movement suited to your needs",
      "Guided Asana practice",
      "Rooftop practice when appropriate",
    ],
    image: "/images/retreat/yoga-asana.png",
    imageAlt: "Yoga Asana practice at Sutra Health Retreat",
  },
];

const stayDetails = [
  {
    value: "3",
    label: "Bedrooms",
  },
  {
    value: "6",
    label: "Beds",
  },
  {
    value: "3",
    label: "Bathrooms",
  },
  {
    value: "6",
    label: "Guests",
  },
];

const amenities = [
  "Rooftop terrace",
  "Self check-in after 3 PM",
  "Free Wi-Fi",
  "Free parking",
  "Full kitchen",
];

export default function RetreatProgramsPage() {
  return (
    <main className="bg-[#FAF8F1] text-[#173F35]">
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="border-b border-[#173F35]/10">
        <Container>
          <div className="grid items-end gap-10 py-14 sm:py-18 lg:grid-cols-[1fr_0.78fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F] sm:text-[11px]">
                Sutra Health Retreat
              </p>

              <h1 className="mt-4 max-w-[760px] font-serif text-[46px] leading-[0.98] tracking-[-0.045em] text-[#123F35] sm:text-[60px] lg:text-[72px]">
                Wellness practices
                <br />
                for your{" "}
                <span className="italic text-[#65966F]">retreat.</span>
              </h1>

              <p className="mt-6 max-w-[620px] text-[14px] leading-7 text-[#687A73] sm:text-[16px] sm:leading-8">
                Explore the wellness programs available at Sutra Health
                Retreat, bringing together physician guidance, nutrition,
                yoga, breath, meditation and traditional wellness practices.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
               <a
                  href="#retreat-experience"
                  className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#12352D]"
                >
                  Explore the Retreat
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  >
                    ↓
                  </span>
                </a>

                <a
                  href="https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-[#F0F4ED]"
                >
                  Book Retreat
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-[#F0F4ED]"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <RetreatHeroSlider />
          </div>
        </Container>
      </section>

      {/* ==================================================
          RETREAT EXPERIENCE
      ================================================== */}
      <section
         id="retreat-experience"
         className="scroll-mt-24 border-b border-[#173F35]/10"
      >
        <Container>
          <div className="grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The Retreat
              </p>

              <h2 className="mt-3 max-w-[420px] font-serif text-[34px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[44px]">
                Time away to focus on{" "}
                <span className="italic text-[#65966F]">
                  everyday wellbeing.
                </span>
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p className="text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                A retreat can be a chance to step away from your usual routine
                and spend time paying attention to health, movement, food,
                breathing and mental wellbeing.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                At Sutra Health Retreat, different wellness practices can be
                brought together during your stay. Individual practices and
                guidance can be discussed according to your circumstances,
                interests and goals.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The experience includes physician guidance, dietary support,
                yoga, Pranayama, meditation, traditional wellness practices
                and opportunities for companionship, music and movement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          PROGRAMS INTRO
      ================================================== */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-[720px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Wellness Programs
              </p>

              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[48px]">
                Choose the practices that fit your retreat.
              </h2>

              <p className="mt-5 max-w-[650px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                Explore the different wellness experiences available at Sutra
                Health Retreat. Your program can be discussed according to your
                needs and the nature of your stay.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          PROGRAMS
      ================================================== */}
      <section>
        <Container>
          <div className="divide-y divide-[#173F35]/10">
            {programs.map((program, index) => {
              const reverse = index % 2 !== 0;

              return (
                <article
                  key={program.number}
                  className="grid gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-20"
                >
                  {/* IMAGE */}
                  <div
                    className={
                      reverse
                        ? "relative aspect-[4/3] overflow-hidden rounded-[18px] lg:order-2"
                        : "relative aspect-[4/3] overflow-hidden rounded-[18px]"
                    }
                  >
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#173F35]/90 px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] text-white backdrop-blur-sm">
                      {program.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className={reverse ? "lg:order-1" : ""}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                      {program.category}
                    </p>

                    <h2 className="mt-3 font-serif text-[32px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[40px]">
                      {program.title}
                    </h2>

                    <p className="mt-5 max-w-[580px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                      {program.description}
                    </p>

                    <div className="mt-6 border-t border-[#173F35]/10 pt-5">
                      <ul className="space-y-3">
                        {program.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-[13px] leading-6 text-[#50645C] sm:text-[14px]"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#65966F]"
                            />

                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/book-appointment"
                      className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173F35] transition-colors hover:text-[#65966F]"
                    >
                      Ask about this program
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ==================================================
          YOUR STAY
      ================================================== */}
      <section className="border-t border-[#173F35]/10 bg-[#FAF8F1]">
        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                Your Stay
              </p>

              <h2 className="mt-3 max-w-[500px] font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                A simple space to{" "}
                <span className="italic text-[#65966F]">
                  stay and recharge.
                </span>
              </h2>

              <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The retreat offers a three-bedroom rooftop stay designed to
                provide a comfortable base for your wellness experience.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 border-t border-[#173F35]/10 sm:grid-cols-4">
                {stayDetails.map((item, index) => (
                  <div
                    key={item.label}
                    className={`py-6 ${
                      index > 0 ? "border-l border-[#173F35]/10 pl-5" : ""
                    }`}
                  >
                    <p className="font-serif text-[30px] tracking-[-0.025em] text-[#173F35]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#71817A]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-[#173F35]/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">
                  Stay includes
                </p>

                <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
                  {amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-[13px] text-[#50645C]"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          RETREAT SETTING
      ================================================== */}
      <section className="bg-[#F0F4ED]">
        <Container>
          <div className="grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-20">
           
           <RetreatHeroSlider />

            <div className="max-w-[650px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                The Retreat Setting
              </p>

              <h2 className="mt-3 font-serif text-[36px] leading-[1.05] tracking-[-0.035em] text-[#123F35] sm:text-[46px]">
                Practice, rest and spend time outdoors.
              </h2>

              <p className="mt-5 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The retreat is located in Sector 46, Faridabad, near the
                Aravallis. The rooftop and surrounding spaces provide room for
                yoga, meditation, breathing practices and quiet time during
                your stay.
              </p>

              <p className="mt-4 text-[14px] leading-7 text-[#687A73] sm:text-[15px] sm:leading-8">
                The retreat information also highlights nearby forests,
                cycling routes, temples and parks, offering opportunities to
                spend time outdoors beyond the retreat itself.
              </p>

              <div className="mt-7 border-t border-[#173F35]/10 pt-6">
                <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3">
                  <div>
                    <p className="font-serif text-[24px] text-[#173F35]">
                      Rooftop
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                      Open-air space
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-[24px] text-[#173F35]">
                      Aravallis
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                      Nearby
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-[24px] text-[#173F35]">
                      Faridabad
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#71817A]">
                      Haryana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================================================
          BOOKING CTA
      ================================================== */}
      <section className="bg-[#173F35]">
        <Container>
          <div className="py-14 sm:py-16 lg:py-20 text-center max-w-[760px] mx-auto">
            <div className="max-w-[760px]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B7CCB8]">
                Sutra Health Retreat
              </p>

              <h2 className="mt-3 font-serif text-[38px] leading-[1.05] tracking-[-0.035em] text-[#FAF8F1] sm:text-[50px]">
                Find the right wellness experience for your stay.
              </h2>

              <p className="mt-5 max-w-[600px] text-[14px] leading-7 text-[#C5D2CC] sm:text-[15px] sm:leading-8 m-auto">
                Get in touch to learn more about the retreat, available
                programs and planning your stay.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-center justify-center align-middle">
                <a
                  href="https://bookretreats.com/r/6-day-rejuvenation-in-nature-moments-from-civilization-in-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F1] px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition-colors hover:bg-white"
                >
                  Book Your Retreat
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  href="https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20wellness%20retreat%20in%20Faridabad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Enquire on WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>

                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}