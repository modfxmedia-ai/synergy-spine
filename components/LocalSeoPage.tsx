import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";
import { SITE_ORIGIN } from "@/lib/site";
const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_HREF = "tel:+15058912280";

export type LocalSeoPageProps = {
  cityName: string;
  stateName: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  introParagraph: string;
  nearbyAreas: string[];
};

export function buildLocalSeoMetadata({
  cityName,
  slug,
  metaTitle,
  metaDescription,
}: Pick<
  LocalSeoPageProps,
  "cityName" | "slug" | "metaTitle" | "metaDescription"
>): Metadata {
  const url = `${SITE_ORIGIN}/${slug}/`;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      type: "website",
      siteName: "Synergy Spine and Nerve Center",
      locale: "en_US",
    },
    other: {
      "geo.region": "US-NM",
      "geo.placename": cityName,
    },
  };
}

const CONDITIONS = [
  "Back and neck pain",
  "Headaches and migraines",
  "Sciatica and leg pain",
  "Joint pain in shoulders, hips, and knees",
  "Sports injuries",
  "Postural problems",
  "Work-related strains",
  "Stress-related tension",
];

const FOCUS_POINTS = [
  "Personalized care tailored to your specific needs and goals",
  "Non-invasive and drug-free techniques",
  "Patient education to empower you in maintaining spinal health",
  "A calm, welcoming environment where your comfort is a priority",
];

const TECHNIQUES = [
  {
    title: "Spinal Adjustments",
    body:
      "Precise manual adjustments improve joint mobility and nerve function.",
  },
  {
    title: "Soft Tissue Therapy",
    body:
      "Targeted techniques ease muscle tension and improve circulation.",
  },
  {
    title: "Rehabilitative Exercises",
    body:
      "Customized stretches and strengthening exercises support recovery and prevent future injury.",
  },
  {
    title: "Lifestyle Guidance",
    body:
      "Nutritional advice and ergonomic tips help maintain spinal health outside the clinic.",
  },
];

const VISIT_STEPS = [
  "Reviewing symptoms and health goals",
  "Physical and neurological examinations",
  "Postural and spinal assessments",
  "If needed, diagnostic imaging recommendations",
];

const BENEFITS = [
  "Reduced pain and inflammation",
  "Increased range of motion",
  "Improved posture and balance",
  "Enhanced nervous system function",
  "Better sleep and reduced stress",
  "Increased energy and vitality",
];

export default function LocalSeoPage({
  cityName,
  stateName,
  slug,
  metaTitle,
  metaDescription,
  heroHeading,
  introParagraph,
  nearbyAreas,
}: LocalSeoPageProps) {
  const pageUrl = `${SITE_ORIGIN}/${slug}/`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Chiropractic",
    "@id": pageUrl,
    name: "Synergy Spine and Nerve Center",
    url: pageUrl,
    telephone: "+15058912280",
    image: `${SITE_ORIGIN}/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1453 Rio Rancho Blvd, Suite 2",
      addressLocality: "Rio Rancho",
      addressRegion: "NM",
      postalCode: "87124",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.2347,
      longitude: -106.6605,
    },
    areaServed: [
      {
        "@type": "City",
        name: cityName,
        containedInPlace: { "@type": "State", name: stateName },
      },
      ...nearbyAreas.map((n) => ({
        "@type": "City",
        name: n,
        containedInPlace: { "@type": "State", name: stateName },
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "08:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "13:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "10:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "13:00",
        closes: "17:30",
      },
    ],
  };

  // metaTitle/metaDescription are kept on the schema for completeness/SEO bots.
  void metaTitle;
  void metaDescription;

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Area We Serve", href: "/area-we-serve/" },
          { label: cityName },
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
                Serving {cityName}, {stateName}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                {heroHeading}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                {introParagraph}
              </p>
            </Reveal>
            <Reveal
              delay={300}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-6 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Schedule an Appointment</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <a
                href={PHONE_HREF}
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Or call {PHONE_DISPLAY} →
              </a>
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

        {/* WHY CHOOSE */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
              <Reveal>
                <div>
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-blue" />
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                      Why choose us
                    </p>
                  </div>
                  <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                    Why choose Synergy Spine{" "}
                    <span className="italic text-brand-blue">and Nerve</span>?
                  </h2>
                  <p className="mt-5 text-brand-text leading-relaxed">
                    Our approach centers on identifying misalignments in the
                    spine that interfere with nerve function. These
                    misalignments, often called subluxations, can lead to
                    various health issues by disrupting communication between
                    the brain and body. By correcting these imbalances, we
                    help improve mobility, reduce pain, and support overall
                    well-being.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <ul className="space-y-3">
                  {FOCUS_POINTS.map((p, i) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 rounded-2xl bg-brand-bg ring-1 ring-black/5 px-5 py-4"
                    >
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight text-white text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-brand-text leading-relaxed">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONDITIONS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Conditions treated
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Common{" "}
                  <span className="italic text-brand-blue">conditions</span>{" "}
                  treated.
                </h2>
                <p className="mt-4 text-brand-text">
                  Chiropractic care at Synergy Spine and Nerve in {cityName}{" "}
                  has helped many individuals relieve discomfort related to:
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CONDITIONS.map((c, i) => (
                <Reveal as="li" key={c} delay={(i % 4) * 60}>
                  <div className="h-full bg-white rounded-2xl ring-1 ring-black/5 px-5 py-4 shadow-[0_2px_10px_rgba(13,35,64,0.04)] flex items-start gap-3 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-0.5 transition-all duration-500">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm text-brand-text leading-snug">
                      {c}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={300}>
              <p className="mt-10 text-center text-brand-textLight max-w-2xl mx-auto">
                Whether you are managing chronic pain or recovering from an
                injury, our team will develop a care plan aimed at improving
                your quality of life.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TECHNIQUES */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Our chiropractic{" "}
                  <span className="italic text-brand-blue">techniques</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Our chiropractors utilize a range of methods designed to
                  gently restore alignment and promote healing.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECHNIQUES.map((t, i) => (
                <Reveal as="li" key={t.title} delay={i * 80}>
                  <article className="group h-full bg-white rounded-3xl ring-1 ring-black/5 p-6 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative">
                    <span
                      className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-brand-blue to-brand-blueLight rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                      aria-hidden="true"
                    />
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white shadow-lg">
                      <span className="text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute inset-0 rounded-2xl ring-2 ring-current opacity-30 animate-pulseRing pointer-events-none" />
                    </div>
                    <h3 className="section-title mt-5 text-lg text-brand-navyDark font-semibold">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {t.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <p className="mt-10 text-center text-brand-textLight max-w-2xl mx-auto">
                Each treatment plan is based on a thorough examination and
                takes your lifestyle into account to achieve the best
                possible outcomes.
              </p>
            </Reveal>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white p-8 lg:p-10 shadow-[0_30px_60px_-20px_rgba(1,112,185,0.45)] relative overflow-hidden">
                <span
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 animate-drift pointer-events-none"
                  aria-hidden="true"
                />
                <span
                  className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-brand-gold/15 blur-3xl animate-drift pointer-events-none"
                  style={{ animationDelay: "-6s" }}
                  aria-hidden="true"
                />
                <div className="relative grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/80">
                      Your first visit
                    </p>
                    <h2 className="section-title mt-2 text-2xl md:text-3xl font-semibold leading-snug">
                      What to expect during your{" "}
                      <span className="italic text-brand-gold">visit</span>.
                    </h2>
                    <p className="mt-4 text-white/90 leading-relaxed">
                      Your first appointment begins with a detailed
                      consultation to understand your health history and
                      current concerns.
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {VISIT_STEPS.map((s, i) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 rounded-2xl bg-white/10 ring-1 ring-white/15 px-5 py-3"
                      >
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark text-xs font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-white/95 leading-relaxed text-sm">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="relative mt-6 text-white/85 leading-relaxed">
                  Following the evaluation, the chiropractor will explain
                  findings and discuss a treatment plan tailored to your
                  needs. We will answer all questions to ensure you feel
                  comfortable and informed about your care.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Benefits
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Benefits of{" "}
                  <span className="italic text-brand-blue">
                    chiropractic care
                  </span>
                  .
                </h2>
                <p className="mt-4 text-brand-text">
                  Patients often notice benefits such as:
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BENEFITS.map((b, i) => (
                <Reveal as="li" key={b} delay={(i % 3) * 80}>
                  <div className="h-full bg-white rounded-2xl ring-1 ring-black/5 px-5 py-4 shadow-[0_2px_10px_rgba(13,35,64,0.04)] flex items-start gap-3 hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-0.5 transition-all duration-500">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-brand-text leading-relaxed">
                      {b}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={400}>
              <p className="mt-10 text-center text-brand-textLight max-w-2xl mx-auto">
                Chiropractic care at Synergy Spine and Nerve promotes more
                than just symptom relief, it supports your body&apos;s
                overall health and resilience.
              </p>
            </Reveal>
          </div>
        </section>

        {/* NEARBY AREAS */}
        {nearbyAreas.length > 0 && (
          <section className="bg-brand-bg py-16 lg:py-20">
            <div className="mx-auto max-w-5xl px-6">
              <Reveal>
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Also serving
                  </p>
                  <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                    Nearby{" "}
                    <span className="italic text-brand-blue">areas</span> we
                    serve from {cityName}.
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <ul className="mt-8 flex flex-wrap justify-center gap-2">
                  {nearbyAreas.map((n) => (
                    <li key={n}>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-black/5 px-4 py-2 text-xs font-semibold text-brand-navyDark">
                        <svg
                          className="w-3 h-3 text-brand-blue"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M12 22s-7-7.58-7-12a7 7 0 0 1 14 0c0 4.42-7 12-7 12z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                        <span>{n}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={250} className="mt-8 text-center">
                <Link
                  href="/area-we-serve/"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-blue hover:text-brand-navyDark transition-colors"
                >
                  <span>See all service areas</span>
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </section>
        )}

        {/* TAKE THE NEXT STEP / CTA */}
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Take the next step
              </p>
              <h2 className="section-title mt-3 text-2xl md:text-3xl font-semibold leading-snug">
                Ready to feel better in{" "}
                <span className="italic text-brand-gold">
                  {cityName}
                </span>
                ?
              </h2>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto">
                Your body has an amazing ability to heal and function
                optimally when the nervous system is free of interference.
                At Synergy Spine and Nerve, our goal is to help you regain
                comfort and vitality through expert chiropractic care
                tailored to {cityName} residents.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Schedule an Appointment</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <a
                href={PHONE_HREF}
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Or call {PHONE_DISPLAY} →
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
