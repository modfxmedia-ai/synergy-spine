import Link from "next/link";
import Reveal from "@/components/Reveal";
import BookTrigger from "@/components/booking/BookTrigger";

const FAQS = [
  {
    q: "Who is the best chiropractor in Rio Rancho, NM?",
    a: "Look for a licensed Doctor of Chiropractic who measures progress, not just “how you feel today.” Synergy Spine and Nerve Center has served Rio Rancho for 20+ years with a Spinal Health Assessment, written findings, and no prepaid contracts. Call (505) 891-2280.",
  },
  {
    q: "Do you see Albuquerque, Corrales, and Bernalillo patients?",
    a: "Yes. The office is at 1453 Rio Rancho Blvd, Suite 2 — about 15–25 minutes from Albuquerque’s Westside, 12 minutes from Corrales, and 15 minutes from Bernalillo. We publish dedicated pages for those communities so local searches can find the right service.",
  },
  {
    q: "Do you treat sciatica, disc herniation, and neuropathy without surgery?",
    a: "When you are a candidate, yes. We combine specific adjustments, non-surgical spinal decompression, and home spinal hygiene. If imaging or neuro findings point to surgery, we say so and coordinate rather than selling a plan you do not need.",
  },
  {
    q: "Do you offer pediatric, prenatal, and sports chiropractic?",
    a: "Yes. Pediatric force is scaled to the child. Prenatal care uses pregnancy-appropriate positioning and the Webster-informed pelvic work when indicated. Sports visits include return-to-play criteria, not only an adjustment.",
  },
  {
    q: "What if I was just in a car accident?",
    a: "Get examined within 72 hours when you can. Whiplash and disc injuries often show up on day two or three. New Mexico PIP / med-pay often covers chiropractic after a collision. We document for your physician and, if needed, your attorney.",
  },
  {
    q: "Does insurance cover chiropractic?",
    a: "Often yes for medically necessary care, with visit limits and copays that vary by plan — including many private insurers and some New Mexico Medicaid / Centennial Care cases. Call (505) 891-2280 before your first visit and we will help you check benefits. We do not require prepaid packages.",
  },
  {
    q: "Can I find a walk-in chiropractor in Albuquerque?",
    a: "Walk-in franchise clinics exist in the metro. We are not one of them. First visits in Rio Rancho are scheduled (often same week) because the exam is 45–60 minutes. Call (505) 891-2280 if you need the next open slot.",
  },
  {
    q: "What are red flags for chiropractors?",
    a: "Prepaid year-long contracts before an exam, promises to cure non-musculoskeletal disease, discouraging you from seeing your physician, and X-rays on everyone without a reason. We exam first, write findings, and refer out when we are the wrong tool.",
  },
  {
    q: "Can a chiropractor give you a cortisone shot?",
    a: "No. Cortisone injections are outside chiropractic scope. We offer adjustments, decompression when indicated, Softwave, and rehab. If an injection is the better next step, we say so and coordinate with your MD.",
  },
  {
    q: "Is it good to get adjusted by a chiropractor?",
    a: "When joint restriction, disc, or nerve irritation is the driver, spinal manipulation is a first-line option for many back and neck cases. It is not automatically “good” as a weekly ritual with no exam. We measure, treat, and stop when the goal is met.",
  },
];

export default function HomeFaq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Rio Rancho chiropractic FAQ
          </p>
          <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
            What people searching “chiropractor Rio Rancho” ask us
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-brand-bg ring-1 ring-black/5 p-5 open:ring-brand-blue/30"
            >
              <summary className="cursor-pointer list-none font-semibold text-brand-navyDark">
                {f.q}
              </summary>
              <p className="mt-3 text-sm md:text-base text-brand-textLight leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        <Reveal delay={120} className="mt-8 flex flex-wrap gap-3">
          <BookTrigger className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navyDark transition-colors">
            Book in Rio Rancho
          </BookTrigger>
          <Link
            href="/area-we-serve/"
            className="rounded-full ring-1 ring-black/10 px-6 py-3 text-sm font-semibold text-brand-navyDark hover:ring-brand-blue/40 transition-colors"
          >
            See every city we serve
          </Link>
        </Reveal>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
