import Reveal from "@/components/Reveal";

type Feature = {
  number: string;
  title: string;
  description: string;
  accent: "blue" | "gold" | "navy";
  icon: (props: { className?: string }) => React.ReactElement;
};

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

function PulseIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-4l-3 9-6-18-3 9H2" />
    </svg>
  );
}

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

const FEATURES: Feature[] = [
  {
    number: "01",
    icon: ClockIcon,
    title: "Timely Care",
    description:
      "We respect your time with efficient appointments and zero unnecessary wait times, so healing fits into your life.",
    accent: "blue",
  },
  {
    number: "02",
    icon: PulseIcon,
    title: "Modern Practice",
    description:
      "The latest chiropractic techniques and technology, paired with research-backed protocols, for the best patient outcomes.",
    accent: "gold",
  },
  {
    number: "03",
    icon: HeartIcon,
    title: "Patient Satisfaction",
    description:
      "Your health and happiness drive everything. We're committed to your recovery and your lasting wellbeing.",
    accent: "navy",
  },
];

const ACCENTS: Record<
  Feature["accent"],
  {
    bar: string;
    iconShell: string;
    iconShellHover: string;
    iconShadow: string;
    ring: string;
    gradient: string;
    num: string;
  }
> = {
  blue: {
    bar: "bg-brand-blue",
    iconShell: "bg-brand-blue/10 text-brand-blue",
    iconShellHover: "group-hover:bg-brand-blue group-hover:text-white",
    iconShadow: "bg-brand-blue",
    ring: "group-hover:ring-brand-blue/40",
    gradient: "from-brand-blue/8 via-brand-blueLight/5 to-transparent",
    num: "text-brand-blue",
  },
  gold: {
    bar: "bg-brand-gold",
    iconShell: "bg-brand-gold/15 text-brand-gold",
    iconShellHover: "group-hover:bg-brand-gold group-hover:text-brand-navyDark",
    iconShadow: "bg-brand-gold",
    ring: "group-hover:ring-brand-gold/50",
    gradient: "from-brand-gold/15 via-brand-goldSoft/8 to-transparent",
    num: "text-brand-gold",
  },
  navy: {
    bar: "bg-brand-navyDark",
    iconShell: "bg-brand-navyDark/10 text-brand-navyDark",
    iconShellHover: "group-hover:bg-brand-navyDark group-hover:text-white",
    iconShadow: "bg-brand-navyDark",
    ring: "group-hover:ring-brand-navyDark/30",
    gradient: "from-brand-navyDark/10 via-brand-navy/5 to-transparent",
    num: "text-brand-navyDark",
  },
};

export default function FeaturesBar() {
  return (
    <section className="relative bg-brand-bg py-24 lg:py-32 overflow-hidden">
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
        className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:items-end">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand-blue" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Why Synergy
              </p>
            </div>
            <h2 className="section-title mt-5 text-4xl md:text-5xl lg:text-6xl text-brand-navyDark font-semibold leading-[1.05]">
              Care that{" "}
              <span className="italic text-brand-blue">grows with you</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-brand-textLight leading-relaxed">
              Three differentiators that show up in every visit, every plan, and
              every conversation we have with you.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const a = ACCENTS[feature.accent];
            return (
              <Reveal key={feature.number} delay={i * 140}>
                <article
                  className={`group relative h-full overflow-hidden bg-white rounded-3xl p-8 ring-1 ring-black/5 ${a.ring} shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] hover:-translate-y-2 transition-all duration-500`}
                >
                  {/* Hover gradient wash */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    aria-hidden="true"
                  />
                  {/* Top accent bar */}
                  <div
                    className={`absolute top-0 left-8 right-8 h-[3px] ${a.bar} rounded-b scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="relative">
                        {/* Outer pulse ring */}
                        <span
                          className={`absolute inset-0 rounded-2xl ${a.iconShadow} opacity-20 group-hover:animate-pulseSoft`}
                          aria-hidden="true"
                        />
                        <div
                          className={`relative w-16 h-16 rounded-2xl ${a.iconShell} ${a.iconShellHover} flex items-center justify-center transition-all duration-500 group-hover:rotate-[-6deg]`}
                        >
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <span
                        className={`section-title text-3xl ${a.num} opacity-30 group-hover:opacity-100 transition-opacity`}
                      >
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="mt-8 section-title text-2xl text-brand-navyDark font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-brand-textLight text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight group-hover:text-brand-navyDark transition-colors">
                      <span>Learn more</span>
                      <svg
                        className="w-4 h-4 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
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
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
