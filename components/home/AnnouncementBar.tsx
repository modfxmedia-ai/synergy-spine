import Link from "next/link";

const ITEMS = [
  "Now Welcoming New Patients",
  "Established Patients · Click to Schedule",
  "Same-week Appointments Available",
  "Evidence-Based Modern Chiropractic",
];

export default function AnnouncementBar() {
  return (
    <div className="relative bg-brand-navyDark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(245,197,24,0.4) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px]">
        <div className="hidden md:flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulseSoft" />
          <span className="text-white/85">{ITEMS[0]}</span>
          <span className="text-white/30">·</span>
          <span className="text-white/85">{ITEMS[2]}</span>
        </div>
        <div className="md:hidden text-white/90">{ITEMS[0]}</div>

        <Link
          href="/schedule/"
          className="group inline-flex items-center gap-1.5 rounded-full bg-brand-gold/15 ring-1 ring-brand-gold/40 px-3 py-0.5 text-[12px] font-semibold text-brand-gold hover:bg-brand-gold hover:text-brand-navyDark transition-colors"
        >
          <span>Book Now</span>
          <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
