import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Conditions from "@/components/hero/Conditions";
import Approach from "@/components/hero/Approach";
import Programs from "@/components/hero/Programs";
import Service from "@/components/hero/Service";
import Experts from "@/components/hero/Experts";
import Testimonials from "@/components/hero/Testimonials";
import BookingCTA from "@/components/hero/BookingCTA";
import FAQ from "@/components/shared/FAQ";


export const metadata: Metadata = {
  title: "Sutra Health | Integrative Lifestyle Healthcare",

  description:
    "Sutra Health offers integrative lifestyle healthcare through lifestyle medicine, nutrition counselling, therapeutic yoga, breath and mind practices.",

  alternates: {
    canonical: "https://lifequality.org.in/",
  },

  openGraph: {
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Personalized healthcare focused on lifestyle, nutrition, movement, breath and mind.",
    url: "https://lifequality.org.in/",
    siteName: "Sutra Health",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sutra Health | Integrative Lifestyle Healthcare",
    description:
      "Personalized healthcare focused on lifestyle, nutrition, movement, breath and mind.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lifequality.org.in/#organization",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
    },
    {
      "@type": "WebSite",
      "@id": "https://lifequality.org.in/#website",
      name: "Sutra Health",
      url: "https://lifequality.org.in/",
      publisher: {
        "@id": "https://lifequality.org.in/#organization",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main>
        <Hero />

        <Conditions />

        <Approach />

        <Programs />

        <Service />

        <Experts />

        <Testimonials />

        <FAQ />

        <BookingCTA />

        

      </main>
    </>
  );
}