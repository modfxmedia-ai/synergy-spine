import Link from "next/link";
import Reveal from "@/components/Reveal";

const PHONE_TEL = "+15058912280";
const BG_IMAGE =
  "https://synergyspineandnerve.com/wp-content/uploads/2020/04/AdobeStock_221694274_9210ad7af9e5f7b776c84ac6f0276f49.jpg";

export default function HealCTASection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-drift"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          animationDuration: "30s",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-navyDark/90 via-brand-navy/85 to-brand-blue/70"
        aria-hidden="true"
      />

      {/* Floating gold orbs */}
      <div
        className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-brand-gold animate-float"
        aria-hidden="true"
      />
      <div
        className="absolute top-2/3 right-[15%] w-3 h-3 rounded-full bg-brand-gold/60 animate-floatSlow"
        style={{ animationDelay: "-2s" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-[20%] w-1.5 h-1.5 rounded-full bg-brand-blueLight animate-float"
        style={{ animationDelay: "-4s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-24 lg:py-32 text-center text-white">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 pl-2 pr-4 py-1.5">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold animate-pulseSoft">
              <svg className="w-3 h-3 text-brand-navyDark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2z" />
              </svg>
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              Take Your Next Step
            </span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <h2 className="section-title mt-7 text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.02]">
            If you believe your body{" "}
            <span className="italic text-brand-gold">can heal</span>, 
            <br />
            we&apos;d love to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic">meet you.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full text-brand-gold/80"
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
            </span>
          </h2>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-7 max-w-2xl mx-auto text-white/85 text-base md:text-lg leading-relaxed">
            Get connected with a member of our team today and discover what
            personalized, evidence-based chiropractic care can do for you.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us/"
              className="group/cta inline-flex items-center gap-2 bg-white text-brand-navyDark rounded-full pl-7 pr-2 py-2 text-sm font-semibold hover:bg-brand-gold transition-colors shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
            >
              <span>Contact Us</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-navyDark text-white group-hover/cta:bg-brand-navyDark transition-colors">
                <svg className="w-4 h-4 group-hover/cta:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <span className="text-white/40 text-sm">, or, </span>

            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-brand-gold transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 group-hover:bg-brand-gold group-hover:ring-brand-gold group-hover:text-brand-navyDark transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span className="border-b border-transparent group-hover:border-brand-gold transition-colors">
                Call (505) 891-2280
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
