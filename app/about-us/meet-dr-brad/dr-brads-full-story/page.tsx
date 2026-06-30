import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";

const CANONICAL =
  "https://synergyspineandnerve.com/about-us/meet-dr-brad/dr-brads-full-story/";

export const metadata: Metadata = {
  title:
    "Dr. Brad’s Full Story – Synergy Spine and Nerve Center",
  description:
    "Dr. Brad Fackrell shares the full story of how chiropractic transformed his health from severe asthma and daily medication to a drug-free life, and why he became a chiropractor.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dr. Brad Fackrell’s Full Story",
    description:
      "From wrestling injuries to severe asthma to drug-free, the full story of how chiropractic changed Dr. Brad's life.",
    url: CANONICAL,
    type: "article",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export default function DrBradsFullStoryPage() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us/" },
          { label: "Meet Dr. Brad", href: "/about-us/meet-dr-brad/" },
          { label: "Full Story" },
        ]}
      />

      <main>
        <section className="relative bg-brand-navyDark text-white overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-navyDark via-brand-navy/95 to-brand-navyDark"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <Reveal>
              <Link
                href="/about-us/meet-dr-brad/"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-brand-gold transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>Back to Meet Dr. Brad</span>
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="section-title mt-5 text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] uppercase max-w-4xl">
                Dr. Brad Fackrell&apos;s{" "}
                <span className="italic normal-case text-brand-gold">
                  full story
                </span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 text-white/80 text-lg md:text-xl font-medium uppercase tracking-wide">
                Owner, Founder &amp; Chiropractor
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 max-w-3xl text-white/80 text-base md:text-lg leading-relaxed">
                From wrestling injuries to severe asthma to a drug-free life, 
                here&apos;s the full story of how chiropractic changed
                everything.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <svg viewBox="0 0 1440 80" className="block w-full h-12 md:h-20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C 240 80, 480 0, 720 40 S 1200 80, 1440 40 L 1440 80 L 0 80 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <article className="prose prose-lg max-w-none text-brand-text">
              <Reveal>
                <p className="text-lg leading-relaxed">
                  When I was 16 years old I went to see a chiropractor because I
                  had hurt my back in a wrestling accident. This chiropractor
                  was great. He helped me get out of pain and get back on the
                  wrestling mat. (It didn&apos;t make me a better wrestler
                  though.) I remember getting adjusted by him for at least a
                  month or so 3 times a week.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 text-lg leading-relaxed">
                  The problem was that the care I received was not specific and
                  it didn&apos;t begin with the right purpose. His purpose was
                  to get me out of pain and therefore, that was my purpose too.
                  It worked wonderfully too… for getting me out of pain.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-lg leading-relaxed">
                  But then about 8 years later I was introduced to a different
                  chiropractor that took x-rays so that I could see how
                  subluxation was interfering with my life. More importantly, he
                  was able to see how to adjust me specifically so that it would
                  really change my life.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-lg leading-relaxed">
                  I did not have pain when I went to see this chiropractor. I
                  was told by my brother and sister that referred me to his
                  office that he could help the asthma that I had struggled with
                  my whole life. At first I thought how was &ldquo;cracking&rdquo;
                  my back going to help asthma. After all, my first chiropractic
                  experience was all about pain.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-lg leading-relaxed">
                  He explained to me that the nerve system controls all the
                  functions in your body and that if you have subluxation
                  putting pressure on the nerves, something is not going to work
                  right. For me, that something was my lungs. I was taking pills
                  every day, a steroid inhaler, a nebulizer, and I always had an
                  asthma &ldquo;puffer&rdquo; in my pocket for emergencies
                  (emergencies happened several times a day). BTW, I also had
                  eczema and allergies and was taking medication for that too.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-5 text-lg leading-relaxed">
                  I am so grateful for the education that this chiropractor gave
                  me. He helped me to take control of my life. He literally
                  saved my life. Chiropractic became a part of my life at the
                  age of 24 and I have never looked back.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-5 text-lg leading-relaxed">
                  About 8 months after starting wellness specific chiropractic
                  care I was taking about half of the medication that I had to
                  take before. This had never happened to me before. I was able
                  to continue to decrease the medication and now in my mid
                  forties I don&apos;t have a medical doctor that gives me
                  prescriptions. Unless something environmental triggers it, I
                  am drug-free.
                </p>
              </Reveal>
              <Reveal delay={320}>
                <p className="mt-5 text-lg leading-relaxed">
                  This is why I became a chiropractor and why I practice the way
                  that I do. Chiropractic is so much more than just sore necks
                  and backs.
                </p>
              </Reveal>
            </article>

            <Reveal delay={360}>
              <div className="mt-10 rounded-2xl bg-gradient-to-br from-brand-bg to-white ring-1 ring-black/5 p-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Our mission
                </p>
                <p className="mt-3 text-lg leading-relaxed text-brand-text">
                  At Synergy Spine and Nerve Center, we believe that everyone
                  matters and that everyone can take their next step toward
                  better health. We take pride in discovering the cause of your
                  problem, whether it be neck or back pain, neuropathy, or you
                  just want to be healthy. We illuminate the possibilities and
                  then liberate you from your pain.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  We are on a mission to change the paradigm of people living in
                  New Mexico from treating sickness and disease to{" "}
                  <em>creating health</em> for themselves and their families. We
                  use evidence-based protocols to improve your quality of life.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-brand-text">
                  As you read this and agree with our mission, please take a
                  moment to forward this link to a friend that needs to hear it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative bg-brand-navyDark text-white py-20 overflow-hidden">
          <span className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-blue/20 blur-3xl pointer-events-none" aria-hidden="true" />
          <span className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-gold/12 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="section-title text-2xl md:text-3xl font-semibold leading-snug">
                Ready to take your{" "}
                <span className="italic text-brand-gold">next step</span>?
              </p>
              <p className="mt-4 text-white/80">
                Schedule a no-pressure consultation with Dr. Brad.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/schedule/"
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+15058912280"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                (505) 891-2280
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
