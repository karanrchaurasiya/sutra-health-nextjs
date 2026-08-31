import type { MetadataRoute } from "next";
import { conditions } from "@/data/conditions";

const baseUrl = "https://lifequality.org.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const conditionPages = conditions.map(
    (condition) => ({
      url: `${baseUrl}/conditions/${condition.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/conditions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/doctors`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/how-it-works`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/patient-stories`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/book-appointment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    ...conditionPages,
  ];
}