import Link from "next/link";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: "15", suffix: "+", label: "Years Serving Rio Rancho", sub: "Established practice", accent: "blue" as const },
  { value: "1,200", suffix: "+", label: "Patients Cared For", sub: "And counting", accent: "gold" as const },
  { value: "5", suffix: "★", label: "Average Rating", sub: "Across patient reviews", accent: "blue" as const },
  { value: "100", suffix: "%", label: "Evidence-Based", sub: "Modern protocols", accent: "gold" as const },
];

const ACCENT_CLASS = {
  blue: "text-brand-blue",
  gold: "text-brand-gold",
};

export default function CTASection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0d2340 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 right-1/4 w-[420px] h-[420px] rounded-full bg-brand-gold/8 blur-3xl pointer-events-none animate-drift"
        style={{ animationDelay: "-8s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Built for Healing
            </p>
          </div>
          <h2 className="section-title mt-5 text-4xl md:text-5xl lg:text-6xl text-brand-navyDark font-semibold leading-[1.05]">
            Rio Rancho&apos;s{" "}
            <span className="italic text-brand-blue">premier chiropractic</span>{" "}
            provider.
          </h2>
        </Reveal>

        {/* Stats panel — premium dark card */}
        <Reveal delay={150}>
          <div className="mt-16 relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-navyDark p-1 shadow-[0_30px_80px_-30px_rgba(13,35,64,0.5)]">
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 0%, rgba(245,197,24,0.25), transparent 50%), radial-gradient(circle at 80% 100%, rgba(1,112,185,0.4), transparent 50%)",
              }}
              aria-hidden="true"
            />

            {/* Floating decorative orbs */}
            <div
              className="absolute top-8 right-[15%] w-2 h-2 rounded-full bg-brand-gold animate-float pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-10 left-[20%] w-1.5 h-1.5 rounded-full bg-brand-blueLight animate-floatSlow pointer-events-none"
              style={{ animationDelay: "-3s" }}
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 100}
                  className={`relative px-6 lg:px-10 py-10 lg:py-14 ${
                    i > 0 ? "lg:border-l border-white/10" : ""
                  } ${i >= 2 ? "border-t lg:border-t-0 border-white/10" : ""} ${
                    i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""
                  }`}
                >
                  <p className="section-title text-5xl md:text-6xl text-white font-semibold leading-none">
                    {stat.value}
                    <span className={ACCENT_CLASS[stat.accent]}>
                      {stat.suffix}
                    </span>
                  </p>
                  <p className="mt-5 text-[13px] font-semibold text-white uppercase tracking-[0.18em]">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[12px] text-white/50">{stat.sub}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal
          delay={300}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/schedule/"
            className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-blue transition-colors shadow-[0_10px_30px_-10px_rgba(13,35,64,0.5)]"
          >
            <span>Schedule an Appointment</span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-brand-navyDark group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
              <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>

          <Link
            href="/new-folks/our-vision/"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
          >
            <span className="border-b border-current pb-0.5">
              Learn About Our Approach
            </span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
