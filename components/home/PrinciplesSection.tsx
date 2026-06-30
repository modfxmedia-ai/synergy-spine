import Image from "next/image";
import Reveal from "@/components/Reveal";

type Principle = {
  number: string;
  title: string;
  body: string;
  accent: "blue" | "gold" | "navy";
  image: string;
  imageAlt: string;
};

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "We believe everyone matters",
    body: "Every patient deserves to be seen, heard, and treated as a whole person, not a symptom. We meet you where you are and walk with you toward better health.",
    accent: "blue",
    image:
      "https://synergyspineandnerve.com/wp-content/uploads/2020/04/AdobeStock_131905531_5728daf376e95dbd68bb771b46885093.jpg",
    imageAlt:
      "Compassionate chiropractic team welcoming a patient at Synergy Spine and Nerve Center.",
  },
  {
    number: "02",
    title: "We discover the cause",
    body: "We don't chase symptoms. We illuminate the root cause of your problem so we can liberate you from pain, and keep it from coming back.",
    accent: "gold",
    image:
      "https://synergyspineandnerve.com/wp-content/uploads/2020/04/AdobeStock_170696498.jpg",
    imageAlt:
      "Chiropractor evaluating a spinal model to identify the underlying cause of pain.",
  },
  {
    number: "03",
    title: "We use evidence-based protocols",
    body: "Modern chiropractic care, grounded in published research and proven outcomes. Care that improves your quality of life, measurably.",
    accent: "navy",
    image:
      "https://synergyspineandnerve.com/wp-content/uploads/2020/04/AdobeStock_221694274_9210ad7af9e5f7b776c84ac6f0276f49.jpg",
    imageAlt:
      "Modern, evidence-based chiropractic protocols at Synergy Spine and Nerve Center.",
  },
];

const ACCENTS: Record<
  Principle["accent"],
  { numText: string; rule: string; chip: string }
> = {
  blue: {
    numText: "text-brand-blue",
    rule: "bg-brand-blue",
    chip: "text-brand-blue",
  },
  gold: {
    numText: "text-brand-gold",
    rule: "bg-brand-gold",
    chip: "text-brand-gold",
  },
  navy: {
    numText: "text-brand-navyDark",
    rule: "bg-brand-navyDark",
    chip: "text-brand-navyDark",
  },
};

export default function PrinciplesSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div
        className="absolute -top-40 right-0 w-[420px] h-[420px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Our Philosophy
            </p>
          </div>
          <h2 className="section-title mt-5 text-3xl md:text-4xl lg:text-5xl text-brand-navyDark font-semibold leading-[1.05]">
            A practice built on{" "}
            <span className="italic text-brand-blue">three commitments</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-brand-textLight leading-relaxed">
            The principles that guide every visit, every protocol, and every
            relationship at Synergy Spine and Nerve Center.
          </p>
        </Reveal>

        {/* Editorial list */}
        <div className="mt-16 lg:mt-20">
          {PRINCIPLES.map((p, i) => {
            const a = ACCENTS[p.accent];
            const isReversed = i % 2 === 1;
            return (
              <Reveal key={p.number} delay={i * 100}>
                <div
                  className={`grid grid-cols-12 gap-x-6 lg:gap-x-12 gap-y-8 items-center py-12 lg:py-16 ${
                    i > 0 ? "border-t border-black/10" : ""
                  }`}
                >
                  {/* Outline number */}
                  <div
                    className={`col-span-12 md:col-span-2 flex md:block ${
                      isReversed ? "md:order-3" : ""
                    }`}
                  >
                    <span
                      className={`section-title text-7xl md:text-8xl lg:text-[120px] font-semibold leading-none ${a.numText}`}
                      style={{
                        WebkitTextStroke: "1px currentColor",
                        WebkitTextFillColor: "transparent",
                      }}
                      aria-hidden="true"
                    >
                      {p.number}
                    </span>
                  </div>

                  {/* Copy */}
                  <div
                    className={`col-span-12 md:col-span-5 ${
                      isReversed ? "md:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-px w-8 ${a.rule}`} aria-hidden="true" />
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.22em] ${a.chip}`}
                      >
                        Principle {p.number}
                      </span>
                    </div>
                    <h3 className="section-title mt-4 text-2xl md:text-3xl lg:text-4xl text-brand-navyDark font-semibold leading-[1.15]">
                      {p.title}
                    </h3>
                    <p className="mt-5 text-base md:text-lg text-brand-textLight leading-relaxed max-w-xl">
                      {p.body}
                    </p>
                  </div>

                  {/* Image, frameless, just rounded corners */}
                  <div
                    className={`col-span-12 md:col-span-5 ${
                      isReversed ? "md:order-1" : ""
                    }`}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-[28px]">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 480px, (min-width: 768px) 42vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
