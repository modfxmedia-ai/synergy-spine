import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";
import type { ServiceCategory } from "@/lib/services-catalog";

const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_HREF = "tel:+15058912280";

type Props = {
  category: ServiceCategory;
};

export default function ServiceHub({ category }: Props) {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: category.name },
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

          <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-24">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                {category.name} Services
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-3 text-3xl md:text-5xl font-semibold leading-[1.1] uppercase">
                {category.name}{" "}
                <span className="italic normal-case text-brand-gold">
                  care at Synergy
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
                {category.tagline}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-white/75 text-sm md:text-base leading-relaxed max-w-2xl">
                {category.intro}
              </p>
            </Reveal>
            <Reveal delay={380}>
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
        </section>

        {/* SUB-SERVICE GRID */}
        <section className="bg-brand-bg py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-brand-blue" />
                  <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                    What we treat
                  </p>
                  <span className="h-px w-10 bg-brand-blue" />
                </div>
                <h2 className="section-title mt-4 text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                  Explore every{" "}
                  <span className="italic text-brand-blue">
                    {category.name.toLowerCase()} service
                  </span>
                  .
                </h2>
                <p className="mt-4 text-brand-text">
                  Click any service below to learn more about how we care for it.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, i) => (
                <Reveal as="li" key={item.slug} delay={i * 60}>
                  <Link
                    href={`/services/${category.slug}/${item.slug}/`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition shadow-sm hover:shadow-md"
                  >
                    {item.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-bg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                        {category.name}
                      </p>
                      <h3 className="mt-2 text-lg md:text-xl font-semibold text-brand-navyDark leading-snug">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-brand-text leading-relaxed">
                        {item.tagline}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
                        Learn more
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

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
                Ready to{" "}
                <span className="italic text-brand-gold">get started</span>?
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 text-white/80">
                Pick a time online, or call the office and we&apos;ll help you
                figure out the right first step.
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
