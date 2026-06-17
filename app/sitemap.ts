import type { MetadataRoute } from "next";
import { POSTS, CATEGORIES, categorySlug } from "@/lib/blog-posts";
import { SERVICES } from "@/lib/programmatic/services";
import { CITIES } from "@/lib/programmatic/cities";

const BASE_URL = "https://synergyspineandnerve.com";

const RESERVED_PROGRAMMATIC_SLUGS = new Set<string>([
  "chiropractor-albuquerque-nm",
  "chiropractor-bernalillo-nm",
  "chiropractor-casa-colorada-nm",
  "chiropractor-chilili-nm",
  "chiropractor-corrales-nm",
  "chiropractor-ponderosa-nm",
]);

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
  "/about-us/meet-dr-brad/dr-brads-full-story",
  "/about-us/meet-austin",
  "/about-us/meet-bert",
  "/about-us/meet-jess",
  "/about-us/meet-kathryn",
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
  "/common-conditions/amyotrophic-lateral-sclerosis-als",
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
  "/resources/videos/workshop-videos",
  "/resources/videos/workshop-videos-of-the-past",
  "/resources/videos/promo-videos",
  "/resources/videos/humorous-promo-videos-of-the-past",
  "/resources/videos/other-videos",
  "/resources/calendar",
  "/resources/get-notified",
  "/resources/order-supplements",
  "/helpful-stretches",
  "/spinal-hygiene-video",
  "/use-your-head-video",
  "/backpack-analogy",
  "/30-second-spinal-hygiene-report-card",
  "/traction",
  "/thoracic-roller",
  "/6-way-strap",
  "/over-the-door-traction",
  "/mobility-disk-for-lower-back",
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

function buildEntries(
  paths: string[],
  priority: number,
  lastModified: Date
): Entry[] {
  return paths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: WEEKLY_PATHS.has(path) ? "weekly" : "monthly",
    priority,
  }));
}

const POSTS_PER_PAGE = 12;

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

  const totalBlogPages = Math.max(1, Math.ceil(POSTS.length / POSTS_PER_PAGE));
  const blogPaginationEntries: Entry[] = [];
  for (let i = 2; i <= totalBlogPages; i++) {
    blogPaginationEntries.push({
      url: `${BASE_URL}/blog/page/${i}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  const programmaticEntries: Entry[] = [];
  for (const service of SERVICES) {
    for (const city of CITIES) {
      const slug = `${service.slug}-${city.slug}-nm`;
      if (RESERVED_PROGRAMMATIC_SLUGS.has(slug)) continue;
      programmaticEntries.push({
        url: `${BASE_URL}/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return [
    ...buildEntries(PRIORITY_1_0, 1.0, lastModified),
    ...buildEntries(PRIORITY_0_9, 0.9, lastModified),
    ...buildEntries(PRIORITY_0_8, 0.8, lastModified),
    ...buildEntries(PRIORITY_0_7, 0.7, lastModified),
    ...buildEntries(PRIORITY_0_6, 0.6, lastModified),
    ...categoryEntries,
    ...blogPaginationEntries,
    ...blogPostEntries,
    ...programmaticEntries,
  ];
}
