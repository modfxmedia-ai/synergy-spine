import Link from "next/link";
import Reveal from "@/components/Reveal";

const HUBS = [
  {
    href: "/chiropractor-albuquerque-nm/",
    kicker: "Albuquerque · Westside",
    title: "Chiropractor in Albuquerque",
    body: "Westside, North Valley, and Nob Hill families drive 15–25 minutes to Rio Rancho for a full exam — not a walk-in chain slot.",
  },
  {
    href: "/chiropractor-corrales-nm/",
    kicker: "Village",
    title: "Chiropractor in Corrales",
    body: "Twelve minutes across the river. Disc, posture, and prenatal care without going downtown.",
  },
  {
    href: "/chiropractor-bernalillo-nm/",
    kicker: "I-25 North",
    title: "Chiropractor in Bernalillo",
    body: "US-550 / I-25 corridor. Auto-accident and commute-back cases are common first visits.",
  },
  {
    href: "/spinal-decompression-albuquerque-nm/",
    kicker: "Disc & sciatica",
    title: "Spinal decompression",
    body: "Non-surgical traction for herniation and sciatica when you are a candidate — including Albuquerque-area patients.",
  },
  {
    href: "/sciatica-relief-rio-rancho-nm/",
    kicker: "Leg pain",
    title: "Sciatica relief in Rio Rancho",
    body: "Find whether the driver is disc, piriformis, or SI joint before you stretch the wrong tissue.",
  },
  {
    href: "/auto-accident-chiropractor-rio-rancho-nm/",
    kicker: "Whiplash",
    title: "Auto accident chiropractor",
    body: "72-hour documentation window. PIP / med-pay billing help after local collisions.",
  },
  {
    href: "/pediatric-chiropractor-albuquerque-nm/",
    kicker: "Kids & teens",
    title: "Pediatric chiropractor",
    body: "Posture, sports, and school-age headaches. Force scaled to the child.",
  },
  {
    href: "/prenatal-chiropractor-albuquerque-nm/",
    kicker: "Pregnancy",
    title: "Prenatal chiropractor",
    body: "SI pain, pregnancy sciatica, round-ligament discomfort. Coordinated with your OB.",
  },
  {
    href: "/sports-injury-chiropractor-rio-rancho-nm/",
    kicker: "Athletes",
    title: "Sports injury chiropractor",
    body: "Return-to-play criteria for Rio Rancho and Albuquerque athletes.",
  },
  {
    href: "/chiropractic-los-lunas-nm/",
    kicker: "Valencia County",
    title: "Chiropractor in Los Lunas",
    body: "I-25 south corridor. Sciatica, disc, and auto-accident visits after the commute north.",
  },
  {
    href: "/chiropractic-edgewood-nm/",
    kicker: "East Mountains",
    title: "Chiropractor in Edgewood",
    body: "NM-14 / I-40 patients who do not want a downtown Albuquerque chain slot.",
  },
  {
    href: "/spinal-decompression-rio-rancho-nm/",
    kicker: "Rio Rancho disc care",
    title: "Spinal decompression in Rio Rancho",
    body: "Non-surgical traction at the home clinic — not a 20-minute drive into the city.",
  },
  {
    href: "/neuropathy/",
    kicker: "Nerve pain",
    title: "Neuropathy treatment",
    body: "Burning feet, stocking-glove numbness, and nerve pain — the hub Google still sends 400+ impressions to.",
  },
];

export default function HomeLocalIntent() {
  return (
    <section className="bg-brand-bg py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
            Local searches we actually serve
          </p>
          <h2 className="section-title mt-3 text-2xl md:text-4xl text-brand-navyDark font-semibold leading-tight">
            Chiropractic for Rio Rancho — and the metro that drives here
          </h2>
          <p className="mt-4 max-w-3xl text-brand-textLight leading-relaxed">
            Competitors rank for “chiropractor Albuquerque,” prenatal, pediatric,
            sports, and Westside modifiers. These hubs match those queries to
            real pages, not a generic homepage.
          </p>
        </Reveal>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HUBS.map((h) => (
            <li key={h.href}>
              <Link
                href={h.href}
                className="flex h-full flex-col rounded-2xl bg-white ring-1 ring-black/5 p-5 hover:ring-brand-blue/40 transition"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                  {h.kicker}
                </span>
                <span className="mt-2 font-semibold text-brand-navyDark">
                  {h.title}
                </span>
                <span className="mt-2 text-sm text-brand-textLight leading-relaxed">
                  {h.body}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
