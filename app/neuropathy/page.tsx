import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

import BookTrigger from "@/components/booking/BookTrigger";
const CANONICAL = "https://synergyspineandnerve.com/neuropathy/";

export const metadata: Metadata = {
  title:
    "Chiropractic Solutions for Neuropathy Synergy Spine and Nerve Center",
  description:
    "Peripheral neuropathy isn't only a medication problem. Learn how adjustments, spinal health, diet, and lifestyle work together at Synergy Spine and Nerve Center.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Chiropractic Solutions for Neuropathy Synergy Spine and Nerve Center",
    description:
      "A four-pillar approach to peripheral neuropathy in Rio Rancho, NM, adjustments, spinal health, diet, and lifestyle.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

const HERO_IMAGE = "/resources/peripheral-neuropathy.jpg";

const SYMPTOMS = [
  ["Numbness", "Tingling", "Cramping", "Burning or electrical pain"],
  ["Instability or falling", "Sciatica", "Shingles", "Carpal Tunnel"],
  [
    "Constantly cold hands or feet",
    "Sensitivity to touch",
    "Spinal issues",
  ],
];

const CAUSES = [
  "Diabetes",
  "Pre-diabetes",
  "Chemotherapy",
  "Spinal stenosis",
  "Degenerative Disc Disease",
  "Disc herniation",
  "Alcohol",
  "Tobacco",
  "Surgeries",
  "Pharmaceuticals",
];

const PILLARS = [
  {
    n: "01",
    title: "Specific Adjustments",
    body:
      "Restoring motion to subluxated joints clears nerve interference at the source, letting peripheral nerves communicate normally again.",
  },
  {
    n: "02",
    title: "Spinal Health",
    body:
      "Daily spinal hygiene keeps the spine flexible and decompressed so the nerves running through it don't get re-irritated between visits.",
  },
  {
    n: "03",
    title: "Diet",
    body:
      "Anti-inflammatory eating reduces the systemic inflammation that fuels nerve pain, especially critical for diabetic and pre-diabetic neuropathy.",
  },
  {
    n: "04",
    title: "Lifestyle",
    body:
      "Movement, sleep, hydration, stress management, and avoiding tobacco/alcohol all support peripheral circulation and nerve regeneration.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Peripheral Neuropathy",
  alternateName: "Neuropathy",
  associatedAnatomy: {
    "@type": "AnatomicalSystem",
    name: "Peripheral Nervous System",
  },
  signOrSymptom: SYMPTOMS.flat().map((s) => ({
    "@type": "MedicalSymptom",
    name: s,
  })),
  riskFactor: CAUSES.map((c) => ({ "@type": "MedicalRiskFactor", name: c })),
  possibleTreatment: [
    { "@type": "MedicalTherapy", name: "Chiropractic Adjustments" },
    { "@type": "MedicalTherapy", name: "Spinal Hygiene" },
    { "@type": "MedicalTherapy", name: "Anti-Inflammatory Diet" },
    { "@type": "MedicalTherapy", name: "Lifestyle Modification" },
  ],
};

export default function NeuropathyPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/common-conditions/" },
          { label: "Neuropathy" },
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
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <Reveal>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    Peripheral neuropathy
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="section-title mt-3 text-3xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.05] uppercase">
                    Chiropractic solutions for{" "}
                    <span className="italic normal-case text-brand-gold">
                      neuropathy
                    </span>{" "}
                    at Synergy Spine &amp; Nerve Center
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
                    A four-lesson video series and a real, multi-pillar plan
                    for relief, because neuropathy is rarely fixed by
                    medication alone.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={200}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
                  <Image
                    src={HERO_IMAGE}
                    alt="Illustration of peripheral neuropathy affecting the nerves in the hands and feet."
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 480px, 100vw"
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  A different approach
                </p>
              </div>
              <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                Why we think of neuropathy as a{" "}
                <span className="italic text-brand-blue">spine and nerve</span>{" "}
                problem.
              </h2>
              <p className="mt-6 text-brand-text leading-relaxed">
                Peripheral neuropathy is damage or dysfunction of the nerves
                that travel out from your spinal cord to your hands, feet,
                arms, and legs. Traditional medicine has historically
                approached it with medication only, masking the symptom
                without addressing where the nerves come from.
              </p>
              <p className="mt-4 text-brand-text leading-relaxed">
                We take a different look. The same nerves that misfire in
                your hands and feet exit through your spine. If those exit
                points are restricted, by a{" "}
                <Link
                  href="/what-is-a-subluxation/"
                  className="text-brand-blue underline-offset-4 hover:underline"
                >
                  subluxation
                </Link>
                , a{" "}
                <Link
                  href="/degeneration/"
                  className="text-brand-blue underline-offset-4 hover:underline"
                >
                  degenerated disc
                </Link>
                , or stenosis, the nerve has problems long before it reaches
                the symptom.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SYMPTOMS GRID */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Common{" "}
                  <span className="italic text-brand-blue">symptoms</span>{" "}
                  we hear in the office.
                </h2>
                <p className="mt-4 text-brand-text">
                  Any combination of the following is worth an evaluation, 
                  the earlier you address it, the better the outcome.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {SYMPTOMS.map((col, i) => (
                <Reveal key={i} delay={i * 100}>
                  <ul className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] space-y-3">
                    {col.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-brand-text leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CAUSES */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    Where it comes from
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Common{" "}
                  <span className="italic text-brand-blue">causes</span> of
                  neuropathy.
                </h2>
              </div>
            </Reveal>

            <ul className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {CAUSES.map((c, i) => (
                <Reveal as="li" key={c} delay={(i % 5) * 60}>
                  <span className="block bg-brand-bg rounded-2xl px-4 py-3 text-center text-sm font-semibold text-brand-navyDark ring-1 ring-black/5 hover:bg-brand-blue hover:text-white transition-colors">
                    {c}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* FOUR PILLARS */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title text-3xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
                  Our four-pillar{" "}
                  <span className="italic text-brand-blue">approach</span>.
                </h2>
                <p className="mt-4 text-brand-text">
                  Neuropathy doesn&apos;t get fixed by one thing. It gets fixed by
                  consistent inputs in four places at once.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 100}>
                  <article className="h-full bg-white rounded-3xl ring-1 ring-black/5 p-7 shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.2)] hover:-translate-y-1 transition-all duration-500">
                    <p className="text-5xl font-semibold leading-none bg-gradient-to-r from-brand-blue to-brand-blueLight bg-clip-text text-transparent">
                      {p.n}
                    </p>
                    <h3 className="section-title mt-4 text-lg text-brand-navyDark font-semibold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-textLight leading-relaxed">
                      {p.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW CHIROPRACTIC HELPS */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-blueLight text-white p-8 lg:p-10 shadow-[0_30px_60px_-20px_rgba(1,112,185,0.45)] relative overflow-hidden">
                <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 animate-drift pointer-events-none" aria-hidden="true" />
                <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-white/80">
                  How chiropractic helps
                </p>
                <p className="mt-3 section-title text-2xl md:text-3xl font-semibold leading-snug">
                  Address the <em>source</em>, not just the symptom.
                </p>
                <p className="mt-4 text-white/90 leading-relaxed">
                  Adjustments restore motion to the spinal segments where
                  peripheral nerves originate. Combined with spinal hygiene,
                  anti-inflammatory eating, and the right lifestyle inputs,
                  many of our patients see meaningful symptom reduction, 
                  and, more importantly, their underlying nerve health
                  improves.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VIDEO: Numbness vs functional restoration */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Watch · Dr. Brad explains
                </p>
                <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Are you choosing{" "}
                  <span className="italic text-brand-blue">numbness or functional restoration</span>?
                </h2>
                <p className="mt-3 text-brand-text">
                  The biggest decision in neuropathy care isn&apos;t which
                  pill, it&apos;s whether you want symptoms muted or nerves
                  actually working again.
                </p>
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
        <section className="relative bg-brand-navyDark text-white py-20 lg:py-24 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none" style={{ animationDelay: "-7s" }} aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Living with{" "}
                <span className="italic text-brand-gold">neuropathy</span>?
              </p>
              <p className="mt-4 text-white/80">
                Schedule a thorough evaluation, we&apos;ll map out a real plan,
                not just another prescription.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <BookTrigger
                className="group/cta inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                <span>Book $37 New Patient Visit</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-brand-blue group-hover/cta:text-white transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </BookTrigger>
              <BookTrigger
                className="text-sm font-semibold text-white/90 hover:text-brand-gold transition-colors"
              >
                Or call (505) 891-2280 →
              </BookTrigger>
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
