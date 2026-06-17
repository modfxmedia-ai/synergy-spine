import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export type VideoPageProps = {
  title: string;
  /** Italic gold word inside the H1. */
  emphasis: string;
  /** Eyebrow above title. */
  eyebrow: string;
  /** Lead paragraph in hero. */
  lead: string;
  /** YouTube video id. */
  videoId: string;
  /** Title for the embed (also the video title). */
  videoTitle: string;
  /** Breadcrumb trail (Home + ...). */
  breadcrumbs: { label: string; href?: string }[];
  /** Three "see also" cards. */
  related: { eyebrow: string; label: string; href: string }[];
};

export default function VideoPage({
  title,
  emphasis,
  eyebrow,
  lead,
  videoId,
  videoTitle,
  breadcrumbs,
  related,
}: VideoPageProps) {
  return (
    <>
      <Header />
      <Breadcrumb items={breadcrumbs} />

      <main>
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1
                className="section-title mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl"
                dangerouslySetInnerHTML={{
                  __html: title.replace(
                    emphasis,
                    `<span class="italic normal-case text-brand-gold">${emphasis}</span>`,
                  ),
                }}
              />
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                {lead}
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

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal>
              <YouTubeEmbed id={videoId} title={videoTitle} />
            </Reveal>
          </div>
        </section>

        <section className="bg-brand-bg py-16">
          <div className="mx-auto max-w-5xl px-6 grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded-2xl bg-white p-6 ring-1 ring-black/5 hover:ring-brand-blue/30 hover:-translate-y-0.5 transition shadow-sm"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                  {r.eyebrow}
                </p>
                <p className="mt-2 font-semibold text-brand-navyDark">
                  {r.label}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Have a question about this video?{" "}
                <span className="italic text-brand-gold">Ask us.</span>
              </p>
              <p className="mt-4 text-white/80">
                Bring it up at your next visit, or give us a call.
              </p>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/schedule/"
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+15058912280"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                (505) 891-2280
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
