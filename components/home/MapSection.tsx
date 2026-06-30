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
  { day: "Mon", time: "9:00 AM – 5:30 PM" },
  { day: "Tue", time: "3:00 – 5:00 PM" },
  { day: "Wed", time: "10:00 AM – 5:30 PM" },
  { day: "Thu", time: "3:00 – 5:30 PM" },
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
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Map */}
              <div className="lg:col-span-7 relative min-h-[360px] md:min-h-[460px] lg:min-h-[560px]">
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
              <div className="lg:col-span-5 p-8 md:p-10 lg:p-12 flex flex-col justify-center gap-8 lg:border-l lg:border-black/5">
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
                  <p className="mt-3 text-lg md:text-xl text-brand-navyDark font-semibold leading-snug">
                    {ADDRESS_LINE_1}
                    <br />
                    {ADDRESS_LINE_2}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                      href={DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline underline-offset-4"
                    >
                      Get directions
                      <span aria-hidden="true">→</span>
                    </a>
                    <a
                      href={MAP_VIEW_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-textLight hover:text-brand-navyDark transition-colors"
                    >
                      View larger map
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-textLight">
                    Phone
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="mt-3 inline-block text-lg md:text-xl text-brand-navyDark font-semibold leading-snug hover:text-brand-blue transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

                {/* Hours, compact two-column layout */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-textLight">
                    Hours
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-1.5">
                    {HOURS.map((h) => {
                      const closed = h.time === "Closed";
                      return (
                        <li
                          key={h.day}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <span className="w-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-navyDark">
                            {h.day}
                          </span>
                          <span
                            className="flex-1 mx-2 border-b border-dashed border-black/10 translate-y-[-3px]"
                            aria-hidden="true"
                          />
                          <span
                            className={`text-[13px] tabular-nums shrink-0 ${
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
