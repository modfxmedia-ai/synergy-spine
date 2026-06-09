import Reveal from "@/components/Reveal";

type Principle = {
  number: string;
  title: string;
  body: string;
  accent: "blue" | "gold" | "navy";
};

const PRINCIPLES: Principle[] = [
  {
    number: "01",
    title: "We believe everyone matters",
    body: "Every patient deserves to be seen, heard, and treated as a whole person — not a symptom. We meet you exactly where you are, and walk with you toward better health.",
    accent: "blue",
  },
  {
    number: "02",
    title: "We discover the cause",
    body: "We don't chase symptoms. We illuminate the root cause of your problem so we can liberate you from pain — and keep it from coming back.",
    accent: "gold",
  },
  {
    number: "03",
    title: "We use evidence-based protocols",
    body: "Modern chiropractic care, grounded in published research and proven outcomes. Care that improves your quality of life — measurably.",
    accent: "navy",
  },
];

const ACCENTS: Record<Principle["accent"], { bar: string; num: string; dot: string }> = {
  blue: { bar: "from-brand-blue to-brand-blueLight", num: "text-brand-blue", dot: "bg-brand-blue" },
  gold: { bar: "from-brand-gold to-brand-goldSoft", num: "text-brand-gold", dot: "bg-brand-gold" },
  navy: { bar: "from-brand-navyDark to-brand-navy", num: "text-brand-navyDark", dot: "bg-brand-navyDark" },
};

export default function PrinciplesSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-3xl pointer-events-none animate-drift"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-brand-blue" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
              Our Philosophy
            </p>
          </div>
          <h2 className="section-title mt-5 text-4xl md:text-5xl lg:text-6xl text-brand-navyDark font-semibold leading-[1.05]">
            A practice built on{" "}
            <span className="italic text-brand-blue">three commitments</span>.
          </h2>
        </Reveal>

        <ul className="mt-16 space-y-3">
          {PRINCIPLES.map((p, i) => {
            const a = ACCENTS[p.accent];
            return (
              <Reveal as="li" key={p.number} delay={i * 120}>
                <article className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 hover:ring-transparent shadow-[0_2px_10px_rgba(13,35,64,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(13,35,64,0.25)] transition-all duration-500">
                  {/* Gradient hover background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${a.bar} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none`}
                    aria-hidden="true"
                  />
                  {/* Left accent bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${a.bar} scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500`}
                    aria-hidden="true"
                  />

                  <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 p-8 md:p-12 items-start">
                    <div className="md:col-span-2 flex md:block items-center gap-4">
                      <span className={`section-title text-5xl md:text-7xl font-semibold ${a.num} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}>
                        {p.number}
                      </span>
                      <span className={`md:hidden h-1.5 w-1.5 rounded-full ${a.dot}`} />
                    </div>

                    <div className="md:col-span-5">
                      <h3 className="section-title text-2xl md:text-3xl text-brand-navyDark font-semibold leading-tight">
                        {p.title}
                      </h3>
                    </div>

                    <div className="md:col-span-5 flex flex-col">
                      <p className="text-brand-textLight leading-relaxed">{p.body}</p>
                      <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight group-hover:text-brand-blue transition-colors">
                        <span className={`inline-block h-1.5 w-1.5 rounded-full ${a.dot}`} />
                        Principle {p.number}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
