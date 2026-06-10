import type { MetadataRoute } from "next";
import { POSTS, CATEGORIES, categorySlug } from "@/lib/blog-posts";

const BASE_URL = "https://synergyspineandnerve.com";

const PRIORITY_1_0 = ["/"];

const PRIORITY_0_9 = [
  "/about-us",
  "/new-folks",
  "/contact-us",
  "/schedule",
  "/testimonials",
  "/blog",
];

const PRIORITY_0_8 = [
  "/about-us/meet-dr-brad",
  "/about-us/meet-austin",
  "/new-folks/first-visit",
  "/new-folks/intake-forms",
  "/new-folks/our-vision",
  "/new-folks/np-schedule",
  "/what-is-a-subluxation",
  "/nerve-chart",
  "/degeneration",
  "/chiropractic-history",
  "/chiropractic-research",
  "/triune-of-care",
  "/neuropathy",
  "/common-conditions",
  "/area-we-serve",
];

const PRIORITY_0_7 = [
  "/resources",
  "/resources/all-about-nutrition",
  "/resources/all-about-spinal-hygiene",
  "/resources/improve-your-sha-score",
  "/resources/essential-nutrients-supplements",
  "/resources/videos",
  "/resources/videos/spinal-hygiene-videos",
  "/resources/calendar",
  "/workshop-videos",
  "/promo-videos",
  "/other-videos",
];

const PRIORITY_0_6 = [
  "/chiropractor-albuquerque-nm",
  "/chiropractor-bernalillo-nm",
  "/chiropractor-corrales-nm",
  "/chiropractic-los-lunas-nm",
  "/chiropractic-placitas-nm",
  "/chiropractic-belen-nm",
  "/chiropractic-edgewood-nm",
  "/chiropractic-moriarty-nm",
  "/chiropractic-cedar-crest-nm",
  "/chiropractic-north-valley",
  "/chiropractic-south-valley-nm",
  "/chiropractic-tijeras-nm",
];

const WEEKLY_PATHS = new Set(["/", "/blog", "/schedule"]);

type Entry = MetadataRoute.Sitemap[number];

function buildEntries(paths: string[], priority: number, lastModified: Date): Entry[] {
  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: WEEKLY_PATHS.has(path) ? "weekly" : "monthly",
    priority,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogPostEntries: Entry[] = POSTS.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.isoDate),
    changeFrequency: "yearly",
    priority: 0.5,
  }));
  const categoryEntries: Entry[] = CATEGORIES.map((c) => ({
    url: `${BASE_URL}/category/${categorySlug(c)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  return [
    ...buildEntries(PRIORITY_1_0, 1.0, lastModified),
    ...buildEntries(PRIORITY_0_9, 0.9, lastModified),
    ...buildEntries(PRIORITY_0_8, 0.8, lastModified),
    ...buildEntries(PRIORITY_0_7, 0.7, lastModified),
    ...buildEntries(PRIORITY_0_6, 0.6, lastModified),
    ...categoryEntries,
    ...blogPostEntries,
  ];
}
