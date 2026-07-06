import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";
import type { ServiceCategory, ServiceItem } from "@/lib/services-catalog";

const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_HREF = "tel:+15058912280";

type Props = {
  category: ServiceCategory;
  item: ServiceItem;
};

export default function ServiceDetail({ category, item }: Props) {
  const siblings = category.items.filter((s) => s.slug !== item.slug);

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: category.name, href: `/services/${category.slug}/` },
          { label: item.name },
        ]}
      />

      <main>
        {/* HERO */}
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                    {category.name}
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <h1 className="section-title mt-3 text-3xl md:text-5xl font-semibold leading-[1.1] uppercase">
                    {item.name}{" "}
                    <span className="italic normal-case text-brand-gold">
                      at Synergy
                    </span>
                  </h1>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
                    {item.tagline}
                  </p>
                </Reveal>
                <Reveal delay={320}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <BookTrigger className="group/cta inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition-colors">
                      Book Appointment
                    </BookTrigger>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white hover:text-brand-navyDark transition-colors"
                    >
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                </Reveal>
              </div>

              {item.image && (
                <div className="lg:col-span-5">
                  <Reveal delay={200} variant="fade">
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-brand-gold/25 blur-2xl"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-brand-blue/25 blur-2xl"
                      />
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] ring-1 ring-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          priority
                          sizes="(min-width: 1024px) 460px, 80vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </Reveal>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-brand-blue" />
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  Overview
                </p>
              </div>
              <h2 className="section-title mt-3 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                About{" "}
                <span className="italic text-brand-blue">
                  {item.name.toLowerCase()}
                </span>{" "}
                care.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-brand-text leading-relaxed text-base md:text-lg">
                {item.intro}
              </p>
            </Reveal>
          </div>
        </section>

        {/* HELPS WITH + WHAT TO EXPECT */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-5xl px-6 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Helps with
                </p>
                <h3 className="section-title mt-2 text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Common reasons patients come in
                </h3>
                <ul className="mt-5 space-y-3">
                  {item.helpsWith.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-brand-text">
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={120}>
              <article className="h-full rounded-2xl bg-white p-8 ring-1 ring-black/5 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                  What to expect
                </p>
                <h3 className="section-title mt-2 text-xl md:text-2xl text-brand-navyDark font-semibold leading-snug">
                  Inside a typical visit
                </h3>
                <ol className="mt-5 space-y-4">
                  {item.whatToExpect.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-brand-text">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>
        </section>

        {/* SIBLINGS */}
        {siblings.length > 0 && (
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-5xl px-6">
              <Reveal>
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-10 bg-brand-blue" />
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                      More {category.name.toLowerCase()} services
                    </p>
                    <span className="h-px w-10 bg-brand-blue" />
                  </div>
                  <h2 className="section-title mt-4 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                    Explore related{" "}
                    <span className="italic text-brand-blue">care</span>.
                  </h2>
                </div>
              </Reveal>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${category.slug}/${s.slug}/`}
                      className="group flex h-full flex-col rounded-2xl bg-brand-bg p-5 ring-1 ring-black/5 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">
                        {category.name}
                      </p>
                      <p className="mt-1.5 text-base font-semibold text-brand-navyDark leading-snug">
                        {s.name}
                      </p>
                      <p className="mt-1 text-sm text-brand-textLight leading-relaxed">
                        {s.tagline}
                      </p>
                      <span className="mt-3 text-sm font-semibold text-brand-blue">
                        Learn more{" "}
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link
                  href={`/services/${category.slug}/`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition"
                >
                  ← Back to all {category.name.toLowerCase()} services
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="relative bg-brand-navyDark text-white py-16 lg:py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-blue/20 blur-3xl animate-drift pointer-events-none" aria-hidden="true" />
          <span
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/12 blur-3xl animate-drift pointer-events-none"
            style={{ animationDelay: "-7s" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Let&apos;s get you{" "}
                <span className="italic text-brand-gold">on the schedule</span>.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <BookTrigger className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-navyDark hover:bg-brand-goldSoft transition">
                  Book Appointment
                </BookTrigger>
                <a
                  href={PHONE_HREF}
                  className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-navyDark transition"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
