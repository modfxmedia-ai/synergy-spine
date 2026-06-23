import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const HERO_IMAGE =
  "https://synergyspineandnerve.com/wp-content/uploads/2020/04/AdobeStock_319143390_6e8be8e243246272480f53637761cf18.jpg";

const HERO_STATS = [
  { value: "15+", label: "Years in Rio Rancho" },
  { value: "1,200+", label: "Patients Cared For" },
  { value: "5★", label: "Average Rating" },
];

const MARQUEE_WORDS = [
  "Spine",
  "Nerve",
  "Wellness",
  "Posture",
  "Relief",
  "Movement",
  "Vitality",
  "Healing",
];

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2z" />
    </svg>
  );
}

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navyDark via-[#0a1d36] to-brand-navy text-white">
      {/* Ambient blobs */}
      <div
        className="absolute -top-64 -right-40 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-brand-blue/30 via-brand-blueLight/20 to-transparent blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -left-48 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-brand-gold/25 via-brand-goldSoft/10 to-transparent blur-3xl pointer-events-none animate-drift"
        style={{ animationDelay: "-6s" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/3 w-[420px] h-[420px] rounded-full bg-brand-blue/15 blur-3xl pointer-events-none animate-drift"
        style={{ animationDelay: "-12s" }}
        aria-hidden="true"
      />

      {/* Architectural grid (vertical pinstripes) */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "84px 100%",
        }}
        aria-hidden="true"
      />
      {/* Hairline horizontal scan */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "100% 6px",
        }}
        aria-hidden="true"
      />

      {/* Diagonal gold ribbon (signature element) */}
      <div
        className="absolute -top-10 left-0 right-0 h-16 -rotate-2 origin-left bg-gradient-to-r from-brand-gold/20 via-transparent to-brand-blue/30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Top hairline rule */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 pt-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-white/0" />
            <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/50">
              Synergy · Spine &amp; Nerve · est. Rio Rancho
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/15 to-white/0" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/8 ring-1 ring-white/15 backdrop-blur pl-2 pr-4 py-1.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold animate-pulseSoft">
                  <SparkleIcon className="w-3 h-3 text-brand-navyDark" />
                </span>
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
                  Rio Rancho · Premier Chiropractic
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="section-title mt-7 text-[44px] sm:text-6xl lg:text-[88px] leading-[0.95] text-white font-semibold tracking-tight">
                Take your next
                <br />
                step toward{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-brand-goldSoft">
                    better
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full text-brand-gold"
                    viewBox="0 0 220 16"
                    fill="none"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 12 Q 60 2, 120 8 T 218 6"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>{" "}
                <span className="italic text-brand-goldSoft">health.</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-7 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
                We discover the cause of your pain, illuminate the
                possibilities, and liberate you from discomfort — using
                evidence-based, modern chiropractic care that gets you back to
                living fully.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
                <Link
                  href="/schedule/"
                  className="group/cta relative inline-flex items-center gap-2 bg-brand-gold text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-bold overflow-hidden hover:bg-brand-goldSoft transition-colors shadow-[0_10px_30px_-10px_rgba(245,197,24,0.6)]"
                >
                  <span className="relative z-10">Book Appointment</span>
                  <span className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-white group-hover/cta:text-brand-navyDark transition-colors">
                    <ArrowIcon className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="#watch-our-story"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-brand-goldSoft transition-colors"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur group-hover:bg-white group-hover:ring-white transition-all">
                    <PlayIcon className="w-3.5 h-3.5 text-brand-goldSoft group-hover:text-brand-blue ml-0.5 transition-colors" />
                  </span>
                  <span className="border-b border-transparent group-hover:border-brand-goldSoft transition-colors">
                    Watch our story
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Trust row with avatars */}
            <Reveal delay={420}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full ring-2 ring-brand-navyDark bg-gradient-to-br shadow-sm"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #0170B9, #2a5080)"
                            : i === 1
                            ? "linear-gradient(135deg, #F5C518, #FFE066)"
                            : i === 2
                            ? "linear-gradient(135deg, #1a3a5c, #0d2340)"
                            : "linear-gradient(135deg, #3B9BDB, #0170B9)",
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-brand-gold">
                    <StarIcon className="w-3.5 h-3.5" />
                    <StarIcon className="w-3.5 h-3.5" />
                    <StarIcon className="w-3.5 h-3.5" />
                    <StarIcon className="w-3.5 h-3.5" />
                    <StarIcon className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-white/60 mt-0.5">
                    <span className="font-semibold text-white">1,200+</span>{" "}
                    happy patients &amp; families
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={200} variant="fade">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Rotating sun behind image */}
                <div
                  className="absolute -top-12 -right-8 w-44 h-44 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full text-brand-gold/80 animate-spinSlow"
                  >
                    {Array.from({ length: 12 }).map((_, i) => (
                      <rect
                        key={i}
                        x="96"
                        y="10"
                        width="8"
                        height="36"
                        rx="4"
                        fill="currentColor"
                        transform={`rotate(${i * 30} 100 100)`}
                      />
                    ))}
                    <circle cx="100" cy="100" r="38" fill="currentColor" />
                  </svg>
                </div>

                {/* Yellow tilted plate behind */}
                <div
                  className="absolute -inset-3 rounded-[36px] bg-brand-gold/35 -rotate-3"
                  aria-hidden="true"
                />
                {/* Blue tilted plate behind */}
                <div
                  className="absolute -inset-1 rounded-[32px] bg-brand-blue/25 rotate-2"
                  aria-hidden="true"
                />

                {/* Main image card */}
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                  <Image
                    src={HERO_IMAGE}
                    alt="Chiropractic care at Synergy Spine and Nerve Center"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-navyDark/40 via-transparent to-brand-blue/20" />

                  {/* Inner top-left chip */}
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 backdrop-blur rounded-full pl-1 pr-3.5 py-1 ring-1 ring-black/5">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulseSoft" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-navyDark">
                      Now Welcoming Patients
                    </span>
                  </div>
                </div>

                {/* Floating stat card — top right */}
                <div className="absolute -top-6 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl px-4 py-3 ring-1 ring-black/5 animate-float">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brand-textLight">
                    Years caring
                  </p>
                  <p className="section-title text-2xl text-brand-navyDark font-semibold">
                    15<span className="text-brand-gold">+</span>
                  </p>
                </div>

                {/* Floating trust card — bottom left */}
                <div
                  className="absolute -left-2 sm:-left-8 -bottom-6 bg-white rounded-2xl shadow-xl px-4 py-3.5 ring-1 ring-black/5 flex items-center gap-3 animate-floatSlow"
                  style={{ animationDelay: "-2s" }}
                >
                  <div className="relative w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10Z" />
                    </svg>
                    <span
                      className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-brand-gold ring-2 ring-white animate-pulseSoft"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-brand-textLight">
                      Trusted by
                    </p>
                    <p className="text-sm font-semibold text-brand-navyDark">
                      1,200+ patients
                    </p>
                  </div>
                </div>

                {/* Floating spine icon — left middle */}
                <div
                  className="hidden sm:flex absolute -left-10 top-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-xl rotate-[-6deg] animate-float"
                  style={{ animationDelay: "-3s" }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7"
                  >
                    <path d="M12 2v20" />
                    <path d="M8 5c2 0 2 2 4 2s2-2 4-2" />
                    <path d="M8 9c2 0 2 2 4 2s2-2 4-2" />
                    <path d="M8 13c2 0 2 2 4 2s2-2 4-2" />
                    <path d="M8 17c2 0 2 2 4 2s2-2 4-2" />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 rounded-3xl bg-white/8 backdrop-blur-md ring-1 ring-white/15 p-1 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 0%, rgba(245,197,24,0.25), transparent 50%), radial-gradient(circle at 80% 100%, rgba(1,112,185,0.4), transparent 50%)",
            }}
            aria-hidden="true"
          />
          {HERO_STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 120}
              className={`relative px-8 py-7 sm:py-9 ${
                i > 0 ? "sm:border-l border-white/10" : ""
              }`}
            >
              <p className="section-title text-4xl md:text-5xl text-white font-semibold">
                {stat.value.replace(/(\+|★)/g, "")}
                <span className="text-brand-gold">
                  {stat.value.match(/(\+|★)/)?.[0]}
                </span>
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/60">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee at bottom */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <span
              key={i}
              className="section-title text-3xl md:text-4xl font-semibold text-white/80 inline-flex items-center px-8"
            >
              {word}
              <span
                className="ml-8 inline-block h-2 w-2 rounded-full bg-brand-gold"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Curved divider into the next (white) section */}
      <div className="relative -mb-px text-white" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[90px]"
        >
          <path
            d="M0 60 C 240 100, 480 20, 720 60 S 1200 100, 1440 60 L 1440 90 L 0 90 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
