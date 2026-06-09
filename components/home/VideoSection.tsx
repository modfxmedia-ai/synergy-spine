import Reveal from "@/components/Reveal";

export default function VideoSection() {
  return (
    <section className="relative bg-brand-navyDark text-white py-24 lg:py-32 overflow-hidden">
      {/* Background motion */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none animate-drift"
        style={{ animationDelay: "-9s" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:items-end">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-brand-gold" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-gold">
                See How We Work
              </p>
            </div>
            <h2 className="section-title mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              Watch <span className="italic text-brand-gold">our story</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-white/70 leading-relaxed">
              A short look inside Synergy Spine and Nerve Center — our team, our
              approach, and the patients we serve every day in Rio Rancho.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} variant="fade">
          <div className="mt-14 relative group">
            {/* Tilted backplates */}
            <div
              className="absolute -inset-4 rounded-[36px] bg-brand-gold/20 -rotate-2 transition-transform duration-700 group-hover:-rotate-3"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-2 rounded-[32px] bg-brand-blue/30 rotate-1 transition-transform duration-700 group-hover:rotate-2"
              aria-hidden="true"
            />

            {/* Video card */}
            <div className="relative rounded-[28px] overflow-hidden ring-1 ring-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] bg-black">
              <video
                src="https://synergyspineandnerve.com/wp-content/uploads/2021/04/home-video.mp4"
                poster="/video-thumbnail.jpg"
                preload="none"
                controls
                playsInline
                className="w-full aspect-video focus:outline-none bg-black"
              />

              {/* Corner badges (over video, but pointer-events-none so don't block controls) */}
              <div
                className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full pl-2 pr-3.5 py-1 ring-1 ring-white/20 pointer-events-none"
                aria-hidden="true"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-navyDark animate-pulseSoft" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                  Synergy · 2:34
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats / sub-row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { k: "Real Patients", v: "Real stories from Rio Rancho residents" },
            { k: "Inside Look", v: "Meet Dr. Brad and the entire Synergy team" },
            { k: "What to Expect", v: "From your first visit through ongoing care" },
          ].map((item, i) => (
            <Reveal key={item.k} delay={i * 120}>
              <div className="flex items-start gap-4">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulseSoft" style={{ animationDelay: `${i * 0.5}s` }} />
                <div>
                  <p className="text-sm font-semibold text-white">{item.k}</p>
                  <p className="text-[13px] text-white/60 mt-1 leading-relaxed">{item.v}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
