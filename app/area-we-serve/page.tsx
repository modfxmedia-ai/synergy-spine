import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

const CANONICAL = "https://synergyspineandnerve.com/area-we-serve/";

export const metadata: Metadata = {
  title:
    "New Mexico Chiropractic Service Areas – Synergy Spine and Nerve Center",
  description:
    "Synergy Spine and Nerve Center proudly serves Rio Rancho, NM and surrounding communities — from Placitas and Bernalillo to Los Lunas, Belen, Edgewood, and beyond.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "New Mexico Chiropractic Service Areas – Synergy Spine and Nerve Center",
    description:
      "Find a chiropractor near you. We serve over 25 New Mexico communities from our Rio Rancho location.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type City = { name: string; slug: string };

const CITIES: City[] = [
  { name: "Belen, NM", slug: "chiropractic-belen-nm" },
  { name: "Bosque Farms, NM", slug: "chiropractic-bosque-farms-nm" },
  { name: "Cañoncito, NM", slug: "chiropractic-canoncito-nm" },
  { name: "Cedar Crest, NM", slug: "chiropractic-cedar-crest-nm" },
  { name: "Cochiti Lake, NM", slug: "chiropractic-cochiti-lake-nm" },
  { name: "Cochiti Pueblo, NM", slug: "chiropractic-cochiti-pueblo-nm" },
  { name: "Edgewood, NM", slug: "chiropractic-edgewood-nm" },
  { name: "El Cerro Mission, NM", slug: "chiropractic-el-cerro-mission-nm" },
  { name: "El Llanito, NM", slug: "chiropractic-el-llanito-nm" },
  { name: "Golden, NM", slug: "chiropractic-golden-nm" },
  { name: "Jarales, NM", slug: "chiropractic-jarales-nm" },
  { name: "Jemez Pueblo, NM", slug: "chiropractic-jemez-pueblo-nm" },
  { name: "Los Lunas, NM", slug: "chiropractic-los-lunas-nm" },
  { name: "Meadow Lake, NM", slug: "chiropractic-meadow-lake-nm" },
  { name: "Moriarty, NM", slug: "chiropractic-moriarty-nm" },
  { name: "Peña Blanca, NM", slug: "chiropractic-pena-blanca-nm" },
  { name: "Peralta, NM", slug: "chiropractic-peralta-nm" },
  { name: "Placitas, NM", slug: "chiropractic-placitas-nm" },
  { name: "San Felipe Pueblo, NM", slug: "chiropractic-san-felipe-pueblo-nm" },
  { name: "San Ysidro, NM", slug: "chiropractic-san-ysidro-nm" },
  { name: "Sandia Park, NM", slug: "chiropractic-sandia-park-nm" },
  { name: "Santa Ana Pueblo, NM", slug: "chiropractic-santa-ana-pueblo-nm" },
  { name: "South Valley, NM", slug: "chiropractic-south-valley-nm" },
  { name: "Tijeras, NM", slug: "chiropractic-tijeras-nm" },
  { name: "Tomé, NM", slug: "chiropractic-tome-nm" },
  { name: "Zia Pueblo, NM", slug: "chiropractic-zia-pueblo-nm" },
];

const REASONS = [
  {
    title: "20+ years of experience",
    body:
      "Decades of clinical practice mean you get a real evaluation and a real plan — not a quick crack-and-go visit.",
  },
  {
    title: "Spinal Health Assessment",
    body:
      "Every new patient gets a full SHA — a 17-page report with an objective 0-100 score so you know exactly where you stand.",
  },
  {
    title: "Triune of Care",
    body:
      "Adjustments, daily spinal hygiene, and nutrition coaching working together — because no single pillar is enough.",
  },
  {
    title: "Honest, no-upsell visits",
    body:
      "If we're not the right fit, we'll tell you and refer you. We'd rather be honest than pad a treatment plan.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Chiropractic",
  name: "Synergy Spine and Nerve Center",
  url: CANONICAL,
  telephone: "+15058912280",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1453 Rio Rancho Blvd, Suite 2",
    addressLocality: "Rio Rancho",
    addressRegion: "NM",
    postalCode: "87124",
    addressCountry: "US",
  },
  areaServed: CITIES.map((c) => ({
    "@type": "City",
    name: c.name.replace(", NM", ""),
    containedInPlace: {
      "@type": "State",
      name: "New Mexico",
    },
  })),
};

export default function AreaWeServePage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Area We Serve" },
        ]}
      />

      <main>
        {/* HERO (clean, no motion) */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Serving the metro &amp; beyond
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                New Mexico chiropractic{" "}
                <span className="italic normal-case text-brand-gold">
                  service areas
                </span>{" "}
                by Synergy Spine &amp; Nerve Center
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                Based in Rio Rancho, we welcome patients from across the
                Albuquerque metro and surrounding communities. Find your
                town below and learn what chiropractic care looks like for
                folks just like you.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* INTRO STATS */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    {CITIES.length}
                    <span className="text-brand-blue">+</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Communities served
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    1<span className="text-brand-blue">·</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Convenient location
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    20<span className="text-brand-blue">+</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Years experience
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    5.0<span className="text-brand-blue">★</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Patient rating
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CITY GRID */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Find your town
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Service{" "}
                  <span className="italic text-brand-blue">areas</span>{" "}
                  across New Mexico.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {CITIES.map((c, i) => (
                <Reveal as="li" key={c.slug} delay={(i % 4) * 60}>
                  <Link
                    href={`/${c.slug}/`}
                    className="group flex items-center gap-3 h-full bg-white rounded-2xl ring-1 ring-black/5 px-5 py-4 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-0.5 transition-all duration-500"
                  >
                    <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 22s-7-7.58-7-12a7 7 0 0 1 14 0c0 4.42-7 12-7 12z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      <span className="absolute inset-0 rounded-full ring-2 ring-current opacity-30 animate-pulseRing pointer-events-none" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block section-title text-sm text-brand-navyDark font-semibold truncate group-hover:text-brand-blue transition-colors">
                        {c.name}
                      </span>
                      <span className="block text-[10px] uppercase tracking-[0.18em] font-bold text-brand-textLight mt-0.5">
                        Local SEO page
                      </span>
                    </span>
                    <svg className="w-4 h-4 text-brand-textLight group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <p className="mt-12 text-center text-brand-textLight">
                Don&apos;t see your town?{" "}
                <Link
                  href="/contact-us/"
                  className="text-brand-blue font-semibold underline-offset-4 hover:underline"
                >
                  Reach out
                </Link>{" "}
                — we likely serve your area too.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Why patients choose{" "}
                  <span className="italic text-brand-blue">
                    Synergy Spine &amp; Nerve Center
                  </span>{" "}
                  in Rio Rancho, NM.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {REASONS.map((r, i) => (
                <Reveal as="li" key={r.title} delay={i * 80}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark text-sm font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="section-title mt-4 text-base text-brand-navyDark font-semibold leading-snug">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {r.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none" style={{ animationDelay: "-7s" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Worth the{" "}
                <span className="italic text-brand-gold">drive</span>.
              </p>
              <p className="mt-4 text-white/80">
                Patients come from across the metro and beyond — start your
                $67 New Patient Special and see why.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/new-folks/np-schedule/"
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book $67 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact-us/"
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Or call (505) 891-2280 →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
    </>
  );
}
