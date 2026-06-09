import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/wp-admin/", "/np-thank-you", "/rof"],
    },
    sitemap: "https://synergyspineandnerve.com/sitemap.xml",
  };
}
