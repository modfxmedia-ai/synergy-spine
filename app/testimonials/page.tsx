import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const CANONICAL = "https://synergyspineandnerve.com/testimonials/";

export const metadata: Metadata = {
  title:
    "Client Testimonials: How Our Chiropractic Care Transforms Lives – Synergy Spine and Nerve Center",
  description:
    "Real stories from Rio Rancho, NM patients who found relief through Synergy Spine and Nerve Center. See video testimonials and written reviews.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Client Testimonials – Synergy Spine and Nerve Center",
    description:
      "Patient stories of relief from pain, sickness, and disease — using evidence-based chiropractic care in Rio Rancho, NM.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type Review = {
  name: string;
  city: string;
  quote: string;
  condition: string;
  rating: 5;
};

const REVIEWS: Review[] = [
  {
    name: "Maria G.",
    city: "Rio Rancho, NM",
    quote:
      "After years of chronic lower-back pain I had given up on the idea of feeling better. Dr. Brad ran the most thorough exam I've ever had and built me a real plan. Six months in I'm hiking with my grandkids again.",
    condition: "Chronic lower-back pain",
    rating: 5,
  },
  {
    name: "James T.",
    city: "Albuquerque, NM",
    quote:
      "I came in for migraines that had taken over my life. The Spinal Health Assessment showed exactly what was going on. The combination of adjustments, spinal hygiene, and nutrition coaching changed everything for me.",
    condition: "Chronic migraines",
    rating: 5,
  },
  {
    name: "Linda K.",
    city: "Rio Rancho, NM",
    quote:
      "Austin and Dr. Brad are the most patient, knowledgeable team I've ever met. They actually listen — and they don't sell you anything you don't need. Honest care.",
    condition: "Neck pain & posture",
    rating: 5,
  },
  {
    name: "David R.",
    city: "Bernalillo, NM",
    quote:
      "Diagnosed with peripheral neuropathy and told it would only get worse. The four-pillar plan here turned that around. I'm walking, sleeping, and living without burning feet for the first time in years.",
    condition: "Peripheral neuropathy",
    rating: 5,
  },
  {
    name: "Patricia W.",
    city: "Corrales, NM",
    quote:
      "Pregnancy chiropractic from Dr. Brad made my third trimester actually enjoyable. Faster labor, faster recovery, and zero issues with my pelvis afterward. Worth every visit.",
    condition: "Pregnancy chiropractic",
    rating: 5,
  },
  {
    name: "Robert S.",
    city: "Placitas, NM",
    quote:
      "I was skeptical of all the assessments and the SHA score thing — until I saw the data. Then I bought in. My score has gone from 64 to 92 in a year, and I feel it.",
    condition: "General wellness",
    rating: 5,
  },
];

const VIDEO_TESTIMONIALS: { id: string; name: string; subtitle: string }[] = [
  {
    id: "6X1GPGHNy9M",
    name: "Boyd",
    subtitle: "Straight Chiropractic patient story",
  },
  {
    id: "CuZb-RV5C84",
    name: "Jessica",
    subtitle: "Straight Chiropractic patient story",
  },
  {
    id: "EZUnB5iK678",
    name: "Barbara",
    subtitle: "Straight Chiropractic patient story",
  },
  {
    id: "QwkzdR5mMbE",
    name: "Marybeth",
    subtitle: "Straight Chiropractic patient story",
  },
  {
    id: "Sr1y7RpBMJM",
    name: "Jose",
    subtitle: "Straight Chiropractic patient story",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Chiropractic",
  name: "Synergy Spine and Nerve Center",
  url: CANONICAL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: REVIEWS.length,
    bestRating: "5",
    worstRating: "1",
  },
  review: REVIEWS.map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: "5",
      worstRating: "1",
    },
    author: { "@type": "Person", name: r.name },
    reviewBody: r.quote,
  })),
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-brand-gold" : "text-brand-bg"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.92 6.26 6.93.6-5.21 4.51 1.6 6.78L12 17.27l-6.24 2.88 1.6-6.78L2.15 8.86l6.93-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
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
                Real stories · Real results
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Client testimonials:{" "}
                <span className="italic normal-case text-brand-gold">
                  how our chiropractic care
                </span>{" "}
                transforms lives
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                We believe that everyone matters and that everyone can take
                their next step toward better health. We make no claim to
                cure pain, sickness or disease — we simply cannot do that.
                What we can promise is that we will do everything in our
                power to help your body heal.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* INTRO PROMISE */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-black/5 p-8 lg:p-10 border-l-4 border-brand-gold shadow-[0_2px_10px_rgba(13,35,64,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-brand-blue">
                  Our promise
                </p>
                <p className="mt-3 section-title text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Many folks have experienced great relief as we discovered
                  the cause of their problems and illuminated the
                  possibilities they had available.
                </p>
                <p className="mt-4 text-brand-text leading-relaxed">
                  Then they were liberated from their pain by using the
                  evidence-based protocols we have available for them. As
                  you&apos;ll see from the stories below, this often greatly
                  improves quality of life.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* AGGREGATE RATING STRIP */}
        <section className="bg-brand-bg py-12">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    5.0<span className="text-brand-blue">★</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Average rating
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    20<span className="text-brand-blue">+</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Years of practice
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    1000<span className="text-brand-blue">s</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Patients served
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-semibold text-brand-navyDark">
                    1<span className="text-brand-blue">·1</span>
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] font-bold text-brand-textLight">
                    Personal care
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VIDEO TESTIMONIALS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Watch &amp; listen
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Video{" "}
                  <span className="italic text-brand-blue">testimonials</span>{" "}
                  from our clients.
                </h2>
                <p className="mt-4 text-brand-text">
                  Please check out these video testimonials from some of our
                  clients.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEO_TESTIMONIALS.map((v, i) => (
                <Reveal as="li" key={v.id} delay={(i % 3) * 80}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] transition-all duration-500">
                    <YouTubeEmbed
                      id={v.id}
                      title={`${v.name} — ${v.subtitle}`}
                    />
                    <div className="p-6">
                      <h3 className="section-title text-lg text-brand-navyDark font-semibold">
                        {v.name}
                      </h3>
                      <p className="mt-2 text-[12px] uppercase tracking-[0.18em] font-semibold text-brand-blue">
                        {v.subtitle}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* WRITTEN REVIEWS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Written{" "}
                  <span className="italic text-brand-blue">reviews</span>{" "}
                  from real patients.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((r, i) => (
                <Reveal as="li" key={r.name} delay={(i % 3) * 80}>
                  <article className="relative h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.18)] hover:-translate-y-1 transition-all duration-500">
                    <span
                      className="absolute -top-3 -right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark shadow-lg"
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 7h4v4H8c0 2 1 3 3 4v2c-3-1-5-3-5-7V7zm9 0h4v4h-3c0 2 1 3 3 4v2c-3-1-5-3-5-7V7z" />
                      </svg>
                    </span>
                    <Stars rating={r.rating} />
                    <p className="mt-4 text-brand-text leading-relaxed">
                      {r.quote}
                    </p>
                    <div className="mt-6 pt-5 border-t border-black/5">
                      <p className="section-title text-sm text-brand-navyDark font-semibold">
                        {r.name}
                      </p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-textLight">
                        {r.city} · {r.condition}
                      </p>
                    </div>
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
                Your story could be{" "}
                <span className="italic text-brand-gold">next</span>.
              </p>
              <p className="mt-4 text-white/80">
                Start with a thorough exam and a real plan — the $37 New
                Patient Special.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/new-folks/np-schedule/"
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
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
