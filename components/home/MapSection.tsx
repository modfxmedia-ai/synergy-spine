import Reveal from "@/components/Reveal";

const ADDRESS_LINE_1 = "1453 Rio Rancho Blvd, Suite 2";
const ADDRESS_LINE_2 = "Rio Rancho, NM 87124";
const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_HREF = "tel:+15058912280";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Synergy+Spine+and+Nerve+Center,+1453+Rio+Rancho+Blvd,+Rio+Rancho,+NM+87124";
const MAP_VIEW_URL =
  "https://www.google.com/maps/place/Synergy+Spine+and+Nerve+Center/@35.2476,-106.6597,15z";
const MAP_EMBED =
  "https://www.google.com/maps?q=Synergy+Spine+and+Nerve+Center,+1453+Rio+Rancho+Blvd,+Rio+Rancho,+NM+87124&z=15&output=embed";

const HOURS = [
  { day: "Mon", time: "8:00 AM \u2013 5:30 PM" },
  { day: "Tue", time: "1:00 \u2013 5:00 PM" },
  { day: "Wed", time: "10:00 AM \u2013 5:30 PM" },
  { day: "Thu", time: "1:00 \u2013 5:30 PM" },
  { day: "Fri", time: "Closed" },
  { day: "Sat", time: "Closed" },
  { day: "Sun", time: "Closed" },
];

export default function MapSection() {
  return (
    <section className="relative bg-brand-bg py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header, centered for visual balance */}
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Visit us
            </p>
            <span className="h-px w-10 bg-brand-blue" />
          </div>
          <h2 className="section-title mt-5 text-3xl md:text-4xl lg:text-5xl text-brand-navyDark font-semibold leading-[1.05]">
            Find us in{" "}
            <span className="italic text-brand-blue">Rio Rancho</span>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-brand-textLight leading-relaxed">
            Centrally located on Rio Rancho Boulevard, minutes from
            Albuquerque&apos;s Westside, the North Valley, and Bernalillo.
          </p>
        </Reveal>

        {/* Inset frame, map on left, contact on right, sharing the same baseline */}
        <Reveal delay={120}>
          <div className="mt-14 lg:mt-16 overflow-hidden rounded-[32px] bg-white ring-1 ring-black/5 shadow-[0_30px_80px_-30px_rgba(13,35,64,0.25)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[380px]">
              {/* Map */}
              <div className="lg:col-span-6 relative h-[220px] md:h-[260px] lg:h-full">
                <iframe
                  title="Map showing Synergy Spine and Nerve Center in Rio Rancho, NM"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Info, vertically centered, evenly spaced */}
              <div className="lg:col-span-6 p-7 md:p-8 lg:p-8 flex flex-col justify-center gap-5 lg:border-l lg:border-black/5">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                    Synergy Spine &amp; Nerve Center
                  </span>
                </div>

                {/* Address */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-textLight">
                    Address
                  </p>
                  <p className="mt-2 text-base md:text-lg text-brand-navyDark font-semibold leading-snug">
                    {ADDRESS_LINE_1}
                    <br />
                    {ADDRESS_LINE_2}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/dir inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-4 py-2 text-xs font-semibold hover:bg-brand-navyDark transition-colors shadow-[0_10px_30px_-10px_rgba(1,112,185,0.5)]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Get Directions</span>
                      <span
                        aria-hidden="true"
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 group-hover/dir:bg-white/25 transition-colors"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3"
                        >
                          <path d="M7 17 17 7M17 7H8M17 7v9" />
                        </svg>
                      </span>
                    </a>
                    <a
                      href={MAP_VIEW_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-brand-textLight hover:text-brand-navyDark transition-colors"
                    >
                      View larger map
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-textLight">
                    Phone
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="text-base md:text-lg text-brand-navyDark font-semibold leading-snug hover:text-brand-blue transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

                {/* Hours, compact two-column layout */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-textLight">
                    Hours
                  </p>
                  <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 sm:gap-y-1">
                    {HOURS.map((h) => {
                      const closed = h.time === "Closed";
                      return (
                        <li
                          key={h.day}
                          className="flex items-baseline justify-between gap-3"
                        >
                          <span className="w-10 sm:w-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-navyDark shrink-0">
                            {h.day}
                          </span>
                          <span
                            className="flex-1 mx-1 sm:mx-2 border-b border-dashed border-black/10 translate-y-[-3px]"
                            aria-hidden="true"
                          />
                          <span
                            className={`text-[13px] tabular-nums shrink-0 text-right ${
                              closed
                                ? "text-brand-textLight italic"
                                : "text-brand-text font-medium"
                            }`}
                          >
                            {h.time}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
