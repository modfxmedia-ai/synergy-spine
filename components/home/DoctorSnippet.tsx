import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";

const DOCTOR = {
  name: "Dr. Brad Fackrell",
  title: "Owner, Founder & Chiropractor",
  photo: "/team/doctor-brad-fackrell.jpg",
  quote:
    "I became a chiropractor so others could experience the same drug-free healing I did.",
  bio:
    "After overcoming severe childhood asthma through chiropractic care, Dr. Brad founded Synergy Spine and Nerve Center in Rio Rancho — helping families across New Mexico feel their best, without medication.",
  stats: [
    { value: "30", suffix: "+", label: "Years drug-free" },
    { value: "3", suffix: "", label: "Generations adjusted" },
    { value: "1000", suffix: "s", label: "Patients helped" },
  ],
  credentials: [
    "Doctor of Chiropractic",
    "Family & pediatric care",
    "Neuropathy specialist",
  ],
  profileUrl: "/about-us/meet-dr-brad/",
};

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
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

export default function DoctorSnippet() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* ambient shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-brand-blue/10 via-brand-blue/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-brand-gold/15 via-brand-gold/5 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Portrait */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[380px] lg:max-w-none">
              {/* decorative accents */}
              <div
                aria-hidden="true"
                className="absolute -top-6 -left-6 h-24 w-24 rounded-full border border-brand-gold/40"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-blue to-brand-blueLight opacity-90 blur-[1px]"
              />
              <div
                aria-hidden="true"
                className="absolute -top-3 right-8 h-3 w-3 rounded-full bg-brand-gold"
              />

              {/* portrait card */}
              <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-navyDark to-brand-navy p-1.5 shadow-[0_40px_100px_-30px_rgba(13,35,64,0.45)]">
                <div className="relative overflow-hidden rounded-[30px] bg-brand-navyDark">
                  <Image
                    src={DOCTOR.photo}
                    alt={`Portrait of ${DOCTOR.name}`}
                    width={500}
                    height={750}
                    quality={95}
                    className="block w-full h-auto object-cover"
                    sizes="(min-width: 1024px) 480px, (min-width: 640px) 380px, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[30px]"
                  />
                </div>
              </div>

              {/* floating stat chip */}
              <div className="absolute -bottom-6 left-4 sm:-left-6 rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_20px_50px_-15px_rgba(13,35,64,0.35)] px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-textLight">
                      5-star rated
                    </p>
                    <p className="text-sm font-semibold text-brand-navyDark">
                      Trusted by families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={150} className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 rounded-full bg-brand-blue/5 pl-2.5 pr-4 py-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue text-white text-[10px] font-bold">
                DC
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                Meet your provider
              </span>
            </div>

            <h2 className="section-title mt-6 text-3xl md:text-4xl lg:text-5xl text-brand-navyDark font-semibold leading-[1.05]">
              Care from a doctor who&apos;s{" "}
              <span className="italic text-brand-blue">lived it</span>.
            </h2>

            {/* Name row */}
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-brand-blue/40 to-transparent" />
              <div>
                <p className="font-serif text-xl text-brand-navyDark leading-tight">
                  {DOCTOR.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-brand-textLight">
                  {DOCTOR.title}
                </p>
              </div>
            </div>

            {/* Quote */}
            <figure className="mt-7 relative pl-5 border-l-2 border-brand-gold/60">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute -left-[13px] -top-1 w-6 h-6 text-brand-gold/70 bg-white"
              >
                <path d="M7.17 6.17A5 5 0 0 0 2 11.17V17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5H6a3 3 0 0 1 1.17-2.66l.83-.51V6.17ZM17.17 6.17A5 5 0 0 0 12 11.17V17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5h-3a3 3 0 0 1 1.17-2.66l.83-.51V6.17Z" />
              </svg>
              <blockquote className="font-serif text-lg md:text-xl text-brand-navyDark leading-snug">
                {DOCTOR.quote}
              </blockquote>
            </figure>

            <p className="mt-6 text-base md:text-lg text-brand-textLight leading-relaxed">
              {DOCTOR.bio}
            </p>

            {/* Stat cards */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {DOCTOR.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-brand-bg ring-1 ring-black/5 px-4 py-4 text-center hover:bg-white hover:ring-brand-blue/20 hover:shadow-[0_15px_40px_-15px_rgba(13,35,64,0.2)] transition-all"
                >
                  <p className="font-serif text-2xl sm:text-3xl text-brand-navyDark font-semibold leading-none tabular-nums">
                    {s.value}
                    <span className="text-brand-blue">{s.suffix}</span>
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-textLight leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Credentials pills */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {DOCTOR.credentials.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-black/5 px-3 py-1.5 text-xs font-medium text-brand-text"
                >
                  <CheckIcon className="w-3 h-3 text-brand-blue" />
                  {c}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <BookTrigger className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-7 pr-1.5 py-1.5 text-sm font-semibold hover:bg-brand-blue transition-colors shadow-[0_15px_40px_-15px_rgba(13,35,64,0.5)]">
                <span>Book with Dr. Brad</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                  <ArrowIcon className="w-4 h-4" />
                </span>
              </BookTrigger>
              <Link
                href={DOCTOR.profileUrl}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-navyDark hover:text-brand-blue transition-colors"
              >
                <span className="border-b border-current pb-0.5">
                  Read his full story
                </span>
                <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
