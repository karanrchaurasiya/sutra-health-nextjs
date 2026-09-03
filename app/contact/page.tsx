import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Sutra Health | EQUAL Society, Faridabad",
  description:
    "Contact Sutra Health and EQUAL Society in Sector 46, Faridabad for health, wellness, yoga therapy and community-focused activities.",
  alternates: {
    canonical: "https://lifequality.org.in/contact",
  },
  openGraph: {
    title: "Contact Sutra Health | EQUAL Society, Faridabad",
    description:
      "Reach Sutra Health and EQUAL Society in Sector 46, Faridabad by phone, WhatsApp or email.",
    url: "https://lifequality.org.in/contact",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Life Quality",
  alternateName: ["Sutra Health", "EQUAL Society - Effort For Quality of Life"],
  legalName: "Effort For Quality of Life (EQUAL) Society",
  description:
    "Faridabad-based not-for-profit society promoting health awareness, wellness, education, family welfare and quality of life through an integrative and community-focused approach.",
  slogan: "Promoting Healthier Living and Quality of Life",
  foundingDate: "1997-05-28",
  email: "info@lifequality.org.in",
  telephone: "+91-9013103676",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 229, Roof-Top, Sector 46",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    postalCode: "121010",
    addressCountry: "IN",
  },
  areaServed: "India",
  knowsAbout: [
    "Health Awareness",
    "Yoga",
    "Pranayama",
    "Wellness Education",
    "Nutrition Education",
    "Community Health",
    "Healthy Living",
  ],
  sameAs: [
    "https://www.instagram.com/sutrahealth/",
    "https://www.facebook.com/people/Sutrahealth-Equal/",
    "https://www.youtube.com/@sutra-health",
    "https://www.linkedin.com/in/equal-society-ngo",
    "https://sutra-health.medium.com/",
    "https://in.pinterest.com/equal_society/",
    "https://wa.me/919013103676",
  ],
};

const contactPoints = [
  {
    label: "Call / WhatsApp",
    value: "+91 90131 03676",
    href: "tel:+919013103676",
    note: "Speak with the Sutra Health team",
  },
  {
    label: "Email",
    value: "info@lifequality.org.in",
    href: "mailto:info@lifequality.org.in",
    note: "For general enquiries and information",
  },
  {
    label: "Studio",
    value: "House No. 229, Roof-Top, Sector 46, Faridabad",
    href: "https://maps.app.goo.gl/Bso3TJCkvqDSLWKP9",
    note: "Visit the Sutra Health community space",
  },
  {
    label: "Hours of presence",
    value: "Mon – Sat: 7–8 AM & 4–6 PM",
    note: "Community presence hours",
  },
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/sutrahealth/"],
  ["Facebook", "https://www.facebook.com/people/Sutrahealth-Equal/"],
  ["YouTube", "https://www.youtube.com/@sutra-health"],
  ["LinkedIn", "https://www.linkedin.com/in/equal-society-ngo"],
  ["Medium", "https://sutra-health.medium.com/"],
  ["Pinterest", "https://in.pinterest.com/equal_society/"],
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="bg-[#FAF8F1] text-[#173F35]">
        {/* HERO */}
        <section className="border-b border-[#173F35]/10">
          <Container>
            <div className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#65966F] sm:text-[11px]">
                  Contact Sutra Health
                </p>

                <h1 className="mt-5 max-w-[760px] font-serif text-[46px] leading-[0.98] tracking-[-0.045em] sm:text-[60px] lg:text-[72px]">
                  Begin your
                  <br />
                  <span className="italic text-[#65966F]">wellness journey.</span>
                </h1>

                <p className="mt-7 max-w-[650px] text-[15px] leading-7 text-[#687A73] sm:text-[17px] sm:leading-8">
                  A welcoming space for health and wellness in Sector 46,
                  Faridabad. Get in touch to learn about Sutra Health, yoga
                  therapy, integrative health practices and healthy lifestyle
                  approaches.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919013103676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#173F35] px-6 py-3.5 text-[13px] font-semibold text-white transition hover:bg-[#12352D]"
                  >
                    WhatsApp us <span aria-hidden>↗</span>
                  </a>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 rounded-full border border-[#173F35]/15 px-6 py-3.5 text-[13px] font-semibold text-[#173F35] transition hover:bg-[#F0F4ED]"
                  >
                    Book a consultation <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>

              <div className="self-end lg:pb-2">
                <div className="border-l border-[#173F35]/15 pl-6 sm:pl-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#65966F]">
                    A direct line
                  </p>
                  <p className="mt-4 max-w-[430px] font-serif text-[27px] leading-tight tracking-[-0.025em] text-[#173F35] sm:text-[34px]">
                    Sometimes the simplest way to begin is simply to ask.
                  </p>
                  <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-[#687A73]">
                    Call, WhatsApp, email or send a message. We can help you
                    find the most relevant next step.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* DIRECT CONTACT */}
        <section className="border-b border-[#173F35]/10">
          <Container>
            <div className="grid divide-y divide-[#173F35]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {contactPoints.map((item) => {
                const content = (
                  <>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">
                      {item.label}
                    </p>
                    <p className="mt-3 font-serif text-[20px] leading-snug tracking-[-0.015em] text-[#173F35]">
                      {item.value}
                    </p>
                    <p className="mt-2 text-[12px] leading-5 text-[#7A8982]">
                      {item.note}
                    </p>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-1 py-7 transition hover:bg-[#F0F4ED] sm:px-6 lg:px-7"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="px-1 py-7 sm:px-6 lg:px-7">
                    {content}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* FORM + MAP */}
        <section>
          <Container>
            <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-24">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Send a message
                </p>
                <h2 className="mt-4 max-w-[560px] font-serif text-[38px] leading-[1.02] tracking-[-0.035em] sm:text-[48px]">
                  Tell us what you are looking for.
                </h2>
                <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-[#687A73]">
                  Use the form to start a conversation. Your message will open
                  in WhatsApp so you can send it directly to the Sutra Health
                  team.
                </p>

                <div className="mt-9">
                  <ContactForm />
                </div>
              </div>

              <div>
                <div className="overflow-hidden rounded-[24px] border border-[#173F35]/10 bg-white">
                  <iframe
                    title="Sutra Health location in Sector 46, Faridabad"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.488925408195!2d77.29599867601114!3d28.43467429303718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fe57a810dd1%3A0x75e55aae4d53097b!2sSutra%20Health!5e0!3m2!1sen!2sin!4v1781511407911!5m2!1sen!2sin"
                    className="h-[380px] w-full border-0 sm:h-[470px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#173F35]/10 pt-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#65966F]">
                      Sector 46 · Faridabad
                    </p>
                    <p className="mt-1 text-[13px] text-[#687A73]">
                      House No. 229, Roof-Top
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/Bso3TJCkvqDSLWKP9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-[#173F35] underline decoration-[#65966F] underline-offset-4"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SOCIAL + NEXT STEP */}
        <section className="border-t border-[#173F35]/10 bg-[#F0F4ED]">
          <Container>
            <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65966F]">
                  Stay connected
                </p>
                <h2 className="mt-3 font-serif text-[32px] tracking-[-0.03em] sm:text-[40px]">
                  Follow the work of Sutra Health.
                </h2>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                  {socialLinks.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-[#173F35] underline decoration-[#65966F]/60 underline-offset-4"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/conditions"
                  className="rounded-full border border-[#173F35]/15 bg-[#FAF8F1] px-5 py-3 text-[13px] font-semibold"
                >
                  Explore health topics
                </Link>
                <Link
                  href="/retreat-programs"
                  className="rounded-full bg-[#173F35] px-5 py-3 text-[13px] font-semibold text-white"
                >
                  Explore retreat programs
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
