import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import { POSTS, CATEGORIES, categorySlug } from "@/lib/blog-posts";

const CANONICAL = "https://synergyspineandnerve.com/sitemap/";

export const metadata: Metadata = {
  title: "Sitemap | Synergy Spine & Nerve Center",
  description:
    "Browse the complete sitemap for Synergy Spine and Nerve Center — every page on the site, organized by section.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Sitemap | Synergy Spine & Nerve Center",
    description:
      "Every page on the Synergy Spine and Nerve Center site, organized by section.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type SiteLink = { label: string; href: string; external?: boolean };
type Group = {
  heading: string;
  description: string;
  links: SiteLink[];
};

const MAIN_PAGES: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "New Folks", href: "/new-folks/" },
  { label: "Schedule", href: "/schedule/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Testimonials", href: "/testimonials/" },
  { label: "Area We Serve", href: "/area-we-serve/" },
  { label: "Blog", href: "/blog/" },
  { label: "Resources", href: "/resources/" },
];

const ABOUT_PAGES: SiteLink[] = [
  { label: "About Us", href: "/about-us/" },
  { label: "Meet Dr. Brad", href: "/about-us/meet-dr-brad/" },
  { label: "Meet Austin", href: "/about-us/meet-austin/" },
];

const NEW_FOLKS_PAGES: SiteLink[] = [
  { label: "New Folks", href: "/new-folks/" },
  { label: "First Visit", href: "/new-folks/first-visit/" },
  { label: "Intake Forms", href: "/new-folks/intake-forms/" },
  { label: "NP Schedule", href: "/new-folks/np-schedule/" },
  { label: "Our Vision", href: "/new-folks/our-vision/" },
];

const CHIROPRACTIC_PAGES: SiteLink[] = [
  { label: "Chiropractic History", href: "/chiropractic-history/" },
  { label: "Chiropractic Research", href: "/chiropractic-research/" },
  { label: "What is a Subluxation?", href: "/what-is-a-subluxation/" },
  { label: "Nerve Chart", href: "/nerve-chart/" },
  { label: "Degeneration", href: "/degeneration/" },
  { label: "The Truth About Neuropathy", href: "/the-truth-about-neuropathy/" },
  { label: "Helpful Stretches", href: "/helpful-stretches/" },
];

const RESOURCE_PAGES: SiteLink[] = [
  { label: "Resources Hub", href: "/resources/" },
  { label: "Calendar", href: "/resources/calendar/" },
  { label: "Adjusting Hours", href: "/resources/adjusting-hours/" },
  { label: "All About Nutrition", href: "/resources/all-about-nutrition/" },
  {
    label: "All About Spinal Hygiene",
    href: "/resources/all-about-spinal-hygiene/",
  },
  {
    label: "Essential Nutrients & Supplements",
    href: "/resources/essential-nutrients-supplements/",
  },
  { label: "Improve Your SHA Score", href: "/resources/improve-your-sha-score/" },
  { label: "Videos", href: "/resources/videos/" },
  { label: "Purchase Supplements", href: "/purchase-supplements-2/" },
];

const LOCAL_SEO_PAGES: SiteLink[] = [
  { label: "Chiropractor in Albuquerque, NM", href: "/chiropractor-albuquerque-nm/" },
  { label: "Chiropractor in Bernalillo, NM", href: "/chiropractor-bernalillo-nm/" },
  { label: "Chiropractor in Corrales, NM", href: "/chiropractor-corrales-nm/" },
  { label: "Chiropractor Casa Colorada, NM", href: "/chiropractor-casa-colorada-nm/" },
  { label: "Chiropractor Chilili, NM", href: "/chiropractor-chilili-nm/" },
  { label: "Chiropractor Ponderosa, NM", href: "/chiropractor-ponderosa-nm/" },
  { label: "Chiropractic Belen, NM", href: "/chiropractic-belen-nm/" },
  { label: "Chiropractic Bosque Farms, NM", href: "/chiropractic-bosque-farms-nm/" },
  { label: "Chiropractic Cañoncito, NM", href: "/chiropractic-canoncito-nm/" },
  { label: "Chiropractic Cedar Crest, NM", href: "/chiropractic-cedar-crest-nm/" },
  { label: "Chiropractic Cochiti Lake, NM", href: "/chiropractic-cochiti-lake-nm/" },
  { label: "Chiropractic Cochiti Pueblo, NM", href: "/chiropractic-cochiti-pueblo-nm/" },
  { label: "Chiropractic Edgewood, NM", href: "/chiropractic-edgewood-nm/" },
  { label: "Chiropractic El Cerro Mission, NM", href: "/chiropractic-el-cerro-mission-nm/" },
  { label: "Chiropractic El Llanito, NM", href: "/chiropractic-el-llanito-nm/" },
  { label: "Chiropractic Golden, NM", href: "/chiropractic-golden-nm/" },
  { label: "Chiropractic Jarales, NM", href: "/chiropractic-jarales-nm/" },
  { label: "Chiropractic Jemez Pueblo, NM", href: "/chiropractic-jemez-pueblo-nm/" },
  { label: "Chiropractic Los Lunas, NM", href: "/chiropractic-los-lunas-nm/" },
  { label: "Chiropractic Los Ranchos de Albuquerque", href: "/chiropractic-los-ranchos-de-albuquerque/" },
  { label: "Chiropractic Meadow Lake, NM", href: "/chiropractic-meadow-lake-nm/" },
  { label: "Chiropractic Moriarty, NM", href: "/chiropractic-moriarty-nm/" },
  { label: "Chiropractic North Valley", href: "/chiropractic-north-valley/" },
  { label: "Chiropractic Peña Blanca, NM", href: "/chiropractic-pena-blanca-nm/" },
  { label: "Chiropractic Peralta, NM", href: "/chiropractic-peralta-nm/" },
  { label: "Chiropractic Placitas, NM", href: "/chiropractic-placitas-nm/" },
  { label: "Chiropractic San Felipe Pueblo, NM", href: "/chiropractic-san-felipe-pueblo-nm/" },
  { label: "Chiropractic San Ysidro, NM", href: "/chiropractic-san-ysidro-nm/" },
  { label: "Chiropractic Sandia Park, NM", href: "/chiropractic-sandia-park-nm/" },
  { label: "Chiropractic Santa Ana Pueblo, NM", href: "/chiropractic-santa-ana-pueblo-nm/" },
  { label: "Chiropractic South Valley, NM", href: "/chiropractic-south-valley-nm/" },
  { label: "Chiropractic Tijeras, NM", href: "/chiropractic-tijeras-nm/" },
  { label: "Chiropractic Tomé, NM", href: "/chiropractic-tome-nm/" },
  { label: "Chiropractic Zia Pueblo, NM", href: "/chiropractic-zia-pueblo-nm/" },
];

const BLOG_CATEGORY_LINKS: SiteLink[] = CATEGORIES.map((c) => ({
  label: `Category: ${c}`,
  href: `/category/${categorySlug(c)}/`,
}));

const BLOG_POST_LINKS: SiteLink[] = POSTS.map((p) => ({
  label: p.title,
  href: `/blog/${p.slug}/`,
}));

const GROUPS: Group[] = [
  {
    heading: "Main Pages",
    description: "The top-level pages on synergyspineandnerve.com.",
    links: MAIN_PAGES,
  },
  {
    heading: "About",
    description: "Meet the team and learn about the practice.",
    links: ABOUT_PAGES,
  },
  {
    heading: "New Folks",
    description: "Information for first-time and prospective patients.",
    links: NEW_FOLKS_PAGES,
  },
  {
    heading: "Chiropractic",
    description:
      "Educational pages about chiropractic care, the spine, and the nervous system.",
    links: CHIROPRACTIC_PAGES,
  },
  {
    heading: "Resources",
    description: "Videos, calendar, supplements, and learning material.",
    links: RESOURCE_PAGES,
  },
  {
    heading: "Local SEO Pages",
    description: "Chiropractor and chiropractic pages serving cities across New Mexico.",
    links: LOCAL_SEO_PAGES,
  },
  {
    heading: "Blog Categories",
    description: "Browse blog posts grouped by topic.",
    links: BLOG_CATEGORY_LINKS,
  },
  {
    heading: "Blog Posts",
    description: "Every published article on the Synergy blog.",
    links: BLOG_POST_LINKS,
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://synergyspineandnerve.com/" },
    { "@type": "ListItem", position: 2, name: "Sitemap", item: CANONICAL },
  ],
};

export default function HtmlSitemapPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Sitemap" },
        ]}
      />

      <main>
        {/* HERO */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Find anything fast
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Site{" "}
                <span className="italic normal-case text-brand-gold">map</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Every page on synergyspineandnerve.com, organized by section.
                Use this page as your shortcut to wherever you&apos;re trying
                to go.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 1440 80"
              className="block w-full h-12 md:h-20"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </section>

        {/* GROUPS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 space-y-14">
            {GROUPS.map((group, idx) => (
              <Reveal key={group.heading} delay={idx * 40}>
                <div className="rounded-3xl bg-brand-bg p-8 lg:p-10 ring-1 ring-black/5">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h2 className="section-title text-2xl md:text-3xl font-semibold text-brand-navyDark">
                      {group.heading}
                    </h2>
                    <p className="text-sm text-brand-textLight max-w-xl">
                      {group.description}
                    </p>
                  </div>
                  <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <NextLink href={link.href} label={link.label} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

function NextLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-baseline gap-2 text-sm text-brand-text hover:text-brand-blue transition"
    >
      <span className="text-brand-blue/70 group-hover:text-brand-blue">›</span>
      <span className="group-hover:underline">{label}</span>
    </Link>
  );
}
