import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const CANONICAL = "https://synergyspineandnerve.com/the-truth-about-neuropathy/";

export const metadata: Metadata = {
  title:
    "The Truth About Neuropathy | Synergy Spine & Nerve Center",
  description:
    "Four free video lessons on neuropathy from Synergy Spine and Nerve Center in Rio Rancho, NM. Learn the causes, symptoms, and natural drug-free options.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Truth About Neuropathy | Synergy Spine & Nerve Center",
    description:
      "Four free video lessons on neuropathy, causes, symptoms, and natural drug-free options.",
    url: CANONICAL,
    type: "website",
    siteName: "Synergy Spine and Nerve Center",
  },
};

type Lesson = {
  number: number;
  title: string;
  desc: string;
};

const LESSONS: Lesson[] = [
  {
    number: 1,
    title: "Neuropathy Fundamentals: Understanding Causes and Symptoms",
    desc: "Start here. Learn what neuropathy actually is, the most common causes, and the early warning signs you should never ignore.",
  },
  {
    number: 2,
    title: "Lesson 2, Why Common Treatments Often Fall Short",
    desc: "Walk through why medication-only approaches can miss the underlying problem, and what the research says about long-term outcomes.",
  },
  {
    number: 3,
    title: "Lesson 3, A Natural, Drug-Free Approach",
    desc: "How a comprehensive chiropractic and nerve-system approach can support healing, without the side effects of long-term medication.",
  },
  {
    number: 4,
    title: "Lesson 4, Your Next Steps",
    desc: "A simple roadmap for what to do next, including how we evaluate every new patient and what your first visit will look like.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://synergyspineandnerve.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Truth About Neuropathy",
      item: CANONICAL,
    },
  ],
};

export default function TruthAboutNeuropathyPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "The Truth About Neuropathy" },
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
                Free 4-part video series
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                The truth about{" "}
                <span className="italic normal-case text-brand-gold">
                  neuropathy
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                We are so excited to help you learn more about neuropathy. Below
                are your 4 video lessons. Bookmark this page so you can easily
                return to it. Please contact us if you have any questions or we
                can help you in any way.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+15058912280"
                  className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition"
                >
                  (505) 891-2280
                </a>
                <Link
                  href="/contact-us/"
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
                >
                  Contact Us
                </Link>
              </div>
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

        {/* LESSONS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Your video library
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Four lessons. Watch them in{" "}
                  <span className="italic text-brand-blue">order</span>.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-8 md:grid-cols-2">
              {LESSONS.map((lesson, i) => (
                <Reveal key={lesson.number} as="li" delay={i * 80}>
                  <article className="group relative h-full overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand-blue/30">
                    {/* Video placeholder */}
                    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-blue">
                      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/40 blur-2xl animate-drift" />
                        <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/30 blur-2xl animate-drift" />
                      </div>
                      <div className="relative z-10 flex h-full items-center justify-center">
                        <div className="flex flex-col items-center gap-3">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-brand-navyDark shadow-lg group-hover:bg-brand-gold transition">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-7 w-7 ml-1"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                          <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                            Lesson {lesson.number}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="section-title text-xl font-semibold leading-snug text-brand-navyDark">
                        {lesson.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-brand-text">
                        {lesson.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* VIDEO */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Watch · Dr. Brad
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Are you choosing{" "}
                  <span className="italic text-brand-blue">numbness or functional restoration</span>?
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10">
                <YouTubeEmbed
                  id="K-4zcZpPU0g"
                  title="Are you choosing numbness or functional restoration?"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-navyDark text-white py-20">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="section-title text-3xl md:text-4xl font-semibold leading-tight">
              Have questions about{" "}
              <span className="italic text-brand-goldSoft">neuropathy?</span>
            </h2>
            <p className="mt-4 text-white/80">
              We&apos;re here to help. Call or schedule a no-pressure
              consultation with our team.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/schedule/"
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Schedule Now
              </Link>
              <a
                href="tel:+15058912280"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                (505) 891-2280
              </a>
            </div>
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
