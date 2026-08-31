import type { MetadataRoute } from "next";

const baseUrl = "https://lifequality.org.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: [
        "/api/",
        "/doctor-login",
        "/doctor-dashboard",
      ],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}