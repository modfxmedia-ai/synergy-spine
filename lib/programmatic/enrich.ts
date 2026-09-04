import type { CityCopy } from "./cities";
import type { ServiceCopy } from "./services";

export type Corridor =
  | "core"
  | "westside"
  | "i25-north"
  | "east-mountains"
  | "south-valley"
  | "pueblo"
  | "estancia"
  | "jemez";

const PUEBLO = [
  "santa-ana-pueblo",
  "san-felipe-pueblo",
  "cochiti-pueblo",
  "jemez-pueblo",
  "zia-pueblo",
];

const EAST_MOUNTAIN = [
  "sandia-park",
  "tijeras",
  "cedar-crest",
  "edgewood",
  "moriarty",
  "golden",
  "canoncito",
];

const SOUTH = [
  "los-lunas",
  "belen",
  "bosque-farms",
  "peralta",
  "tome",
  "jarales",
  "el-cerro-mission",
  "meadow-lake",
  "south-valley",
];

const JEMEZ = ["jemez-pueblo", "san-ysidro", "pena-blanca", "cuba", "ojito"];

export function cityCorridor(city: CityCopy): Corridor {
  const s = city.slug;
  if (s === "rio-rancho") return "core";
  if (PUEBLO.includes(s)) return "pueblo";
  if (JEMEZ.includes(s)) return "jemez";
  if (EAST_MOUNTAIN.includes(s) || city.county.includes("Torrance")) return "east-mountains";
  if (SOUTH.includes(s)) return "south-valley";
  if (
    s === "albuquerque" ||
    s.includes("valley") ||
    s.includes("los-ranchos") ||
    city.county.includes("Bernalillo")
  ) {
    return "westside";
  }
  if (s === "bernalillo" || s === "corrales" || s === "placitas") return "i25-north";
  if (city.county.includes("Santa Fe")) return "east-mountains";
  return city.driveMin <= 20 ? "i25-north" : "estancia";
}

function corridorCopy(city: CityCopy): { road: string; life: string; search: string } {
  const c = cityCorridor(city);
  switch (c) {
    case "core":
      return {
        road: `${city.name} is home base. Most patients are 5–12 minutes from 1453 Rio Rancho Blvd, Suite 2, including ${city.neighborhoods.slice(0, 3).join(", ")}.`,
        life: `Rio Rancho families, Intel-corridor commuters, and Enchanted Hills / Mariposa residents come in for posture, disc, and nerve care instead of driving into Albuquerque traffic.`,
        search: `People here search “chiropractor rio rancho,” “chiropractor rio rancho nm,” and “best chiropractor rio rancho.”`,
      };
    case "westside":
      return {
        road: `From ${city.name} the drive is about ${city.driveMin} minutes via the Westside / Coors / Paseo corridors to Rio Rancho. Parking is on-site; you are not circling a downtown garage.`,
        life: `${city.name} patients often sit I-40 or the river crossing twice a day. That commute is a classic driver of disc, sciatica, and tech-neck cases we see every week.`,
        search: `Nearby searches we also rank pages for include “chiropractor albuquerque,” “chiropractor albuquerque westside,” and “family chiropractor albuquerque.”`,
      };
    case "i25-north":
      return {
        road: `${city.name} sits on the I-25 / US-550 / Corrales Road grid. Plan on about ${city.driveMin} minutes to Suite 2, with landmarks like ${city.landmarks[0]}.`,
        life: `Village and North Valley patients from ${city.neighborhoods.slice(0, 2).join(" and ")} usually want a thorough exam, not a 6-minute “crack and go” chain visit.`,
        search: `Local intent here is “chiropractor ${city.name.toLowerCase()},” “chiropractor bernalillo,” and “chiropractor corrales.”`,
      };
    case "east-mountains":
      return {
        road: `East Mountain and Estancia Valley patients from ${city.name} typically take NM-14 or I-40, about ${city.driveMin} minutes. We keep first visits scheduled so the drive is worth it.`,
        life: `Mountain commuting, winter roads, and ranch or remote-work days show up as low-back stiffness and headaches. We plan care around that calendar, not a city-clinic template.`,
        search: `Related searches: “chiropractor edgewood,” “chiropractor cedar crest,” and spinal decompression for disc pain after long I-40 drives.`,
      };
    case "south-valley":
      return {
        road: `${city.name} is about ${city.driveMin} minutes north via I-25 / NM-47. Many Los Lunas, Belen, and Bosque Farms patients stack the visit with other metro errands.`,
        life: `South Valley and Valencia County work is often lifting, driving, or standing shifts. Sciatica, disc, and auto-accident care are the three most common reasons this corridor books.`,
        search: `Pages also target “chiropractor los lunas,” “chiropractor belen,” and auto-accident chiropractic after I-25 collisions.`,
      };
    case "pueblo":
      return {
        road: `Patients from ${city.name} (${city.county}) drive about ${city.driveMin} minutes. We keep hours on Monday–Thursday so the trip can sit on a weekday, not a weekend scramble.`,
        life: `We treat ${city.name} families with the same exam we use in Rio Rancho: history, Spinal Health Assessment, and an honest yes/no on whether chiropractic is the right tool.`,
        search: `People looking from this area still type “chiropractor rio rancho” and “chiropractor near me” more than the pueblo name. This page exists so Google can connect ${city.name} to that care.`,
      };
    case "jemez":
      return {
        road: `The Jemez / US-550 corridor from ${city.name} is roughly ${city.driveMin} minutes. If you are coming from near ${city.landmarks[0]}, call ahead so we hold a slot that matches the drive.`,
        life: `Mountain work, weekend sports, and long 550 sits produce the neck and low-back patterns we treat with adjustments, decompression when indicated, and home spinal hygiene.`,
        search: `Useful queries: “chiropractor san ysidro,” sports injury care, and auto-accident evaluation after US-550 crashes.`,
      };
    default:
      return {
        road: `${city.name} is about ${city.driveMin} minutes from our Rio Rancho office in ${city.county}.`,
        life: `Patients from ${city.neighborhoods.slice(0, 2).join(" and ") || city.name} come in when pain starts interrupting work, sleep, or driving.`,
        search: `We also publish pages for chiropractor Rio Rancho, Albuquerque, Corrales, and Bernalillo.`,
      };
  }
}

function serviceLocalAngle(service: ServiceCopy, city: CityCopy): string {
  const n = city.name;
  const drive =
    city.driveMin === 0
      ? "you are already in town"
      : `the drive from ${n} is about ${city.driveMin} minutes`;
  switch (service.slug) {
    case "chiropractor":
      return `${n} residents looking for a chiropractor do not need a chain clinic with a 6-minute visit. Synergy is a 20+ year Rio Rancho practice: full Spinal Health Assessment, a written report of findings, and a plan you can measure. ${drive.charAt(0).toUpperCase() + drive.slice(1)}.`;
    case "spinal-decompression":
      return `Disc, sciatica, and “I sat too long on the commute from ${n}” cases are why we run non-surgical spinal decompression in Rio Rancho. If imaging or exam points to a disc, ${drive} for a candidacy visit instead of jumping to injections first.`;
    case "sciatica-relief":
      return `Sciatica from ${n} usually walks in as leg pain after sitting I-25, Coors, or NM-14. We separate disc vs. piriformis vs. SI joint so you are not stretching the wrong tissue for months.`;
    case "back-pain-relief":
      return `Back pain in ${n} is rarely “just a muscle.” We exam for disc, joint, and nerve drivers, then match adjustments, decompression, or home work — not a one-size protocol.`;
    case "neck-pain-relief":
      return `Tech neck and commute posture from ${n} (phones, laptops, winter driving) are the most common cervical cases we see. Headaches and arm tingling often ride along.`;
    case "headache-migraine-relief":
      return `If headaches started after screens, wrecks, or a stiff upper neck, ${n} patients often have a cervicogenic driver we can measure. Migraine patterns get an honest split: cervical care vs. medical co-manage.`;
    case "auto-accident-chiropractor":
      return `After a crash on I-25, US-550, Coors, or Rio Rancho Blvd, ${n} drivers should be documented within 72 hours. Whiplash often blooms on day two. We exam, image when needed, and write notes insurers actually use.`;
    case "softwave-therapy":
      return `Chronic tendon and joint pain that “should have healed by now” is the Softwave lane for ${n} patients — plantar fascia, elbow, shoulder, stubborn trigger zones — when rest and ibuprofen stalled.`;
    case "posture-correction":
      return `Forward-head posture in ${n} school kids and remote workers is measurable. We photograph, score, adjust, and give a 10-minute home drill so the change is not a lecture.`;
    case "herniated-disc-treatment":
      return `A herniated disc does not automatically mean surgery. ${n} patients with imaging come in for decompression plus specific adjustments above and below the level, with a clear stop-rule if neurology worsens.`;
    case "pediatric-chiropractor":
      return `Families in ${n} book pediatric visits for posture, sports, and headaches — not “cracking babies for fun.” Force is scaled to the child. Parents stay in the room.`;
    case "sports-injury-chiropractor":
      return `${n} athletes (youth through weekend warriors) use us for return-to-play criteria, not just a popping sound. Hamstrings, shoulders, and rotation-sport backs are the usual list.`;
    case "prenatal-chiropractor":
      return `Prenatal care for ${n} moms is side-lying, pregnancy-appropriate, and coordinated with your OB or midwife. SI pain, sciatica, and round-ligament discomfort are the typical first-visit complaints.`;
    default:
      return `${service.name} for ${n} is delivered from the same Rio Rancho exam room as every other service — measured, explained, and stopped when the goal is met.`;
  }
}

function examStory(service: ServiceCopy, city: CityCopy): string {
  const hoods = city.neighborhoods.slice(0, 3).join(", ");
  const landmark = city.landmarks[0] || city.name;
  const drive =
    city.driveMin === 0
      ? "You will not spend the visit in a car."
      : `Budget about ${city.driveMin} minutes from ${city.name} so you are not rushed into the exam.`;
  return `A first visit for ${service.short} from ${city.name} is not a six-minute “crack and go.” We take a history (when it started, what sitting / lifting / driving does to it), score the spine with a Spinal Health Assessment, and only then decide whether ${service.name.toLowerCase()} is the right tool. ${drive} Families from ${hoods || city.name} usually mention ${landmark} as the landmark they navigate from. If we are not the fit — medical neuropathy that needs an endocrinologist, a surgical disc, or a technique you specifically asked for that we do not practice — we say so in the report of findings, not after a prepaid package.`;
}

function vsChainClinics(city: CityCopy): string {
  return `People searching “chiropractor ${city.name.toLowerCase()},” “chiropractor near me,” and “walk-in chiropractor Albuquerque” often land on franchise clinics that sell memberships before they exam. Synergy is the opposite: 20+ years in Rio Rancho, Monday–Thursday hours, no contracts, and a written plan. We are not a Gonstead-only office and we are not a walk-in mill. If you want that model, we will tell you rather than pretend. ${city.name} patients who switch to us usually want an answer on disc vs. nerve vs. joint — and a drive they can plan (${city.driveMin === 0 ? "you are already in town" : `about ${city.driveMin} minutes`}).`;
}

function searchIntentCopy(service: ServiceCopy, city: CityCopy): string {
  const n = city.name;
  switch (service.slug) {
    case "chiropractor":
      return `Google still sends most local clicks to map-pack names (Absolute, Lundgren, CareMore/Lifetime). This page exists so “chiropractor ${n.toLowerCase()},” “chiropractor ${n.toLowerCase()} nm,” “best chiropractor ${n.toLowerCase()},” and “family chiropractor albuquerque” have a real Rio Rancho clinic behind them — with NAP, hours, and a phone you can call: (505) 891-2280.`;
    case "spinal-decompression":
      return `${n} searches for non-surgical disc care overlap “spinal decompression,” “herniated disc treatment,” and “sciatica.” We only decompress when exam and (when needed) imaging say the disc is the driver.`;
    case "sciatica-relief":
      return `“Sciatica ${n.toLowerCase()}” and “leg pain after sitting” are the queries this page answers. True sciatica is a nerve-root pattern, not every ache down the thigh.`;
    case "auto-accident-chiropractor":
      return `After crashes on I-25, US-550, Coors, or Rio Rancho Blvd, people search “auto accident chiropractor ${n.toLowerCase()}.” New Mexico PIP / med-pay often covers the exam. Document within 72 hours when you can.`;
    case "pediatric-chiropractor":
      return `Parents type “pediatric chiropractor albuquerque” and “chiropractor for kids ${n.toLowerCase()}.” We scale force to the child. We do not treat non-musculoskeletal disease with adjustments.`;
    case "prenatal-chiropractor":
      return `“Prenatal chiropractor albuquerque” is a competitor keyword we actually serve from Rio Rancho: SI pain, pregnancy sciatica, round-ligament discomfort, coordinated with your OB.`;
    case "sports-injury-chiropractor":
      return `“Sports chiropractor albuquerque” and weekend-warrior searches from ${n} map to return-to-play criteria, not a membership.`;
    default:
      return `Related searches we match from ${n}: chiropractor Rio Rancho, chiropractor Albuquerque, spinal decompression, sciatica, and auto-accident care. Call (505) 891-2280 if you are unsure which page is yours.`;
  }
}

function localSymptoms(service: ServiceCopy, city: CityCopy): string[] {
  const n = city.name;
  const commute =
    city.driveMin === 0
      ? "Rio Rancho Blvd and Intel-corridor sitting"
      : `the ${city.driveMin}-minute commute from ${n}`;
  const base = [
    `Pain that started or worsened after ${commute}`,
    `Stiffness getting out of the car near ${city.landmarks[0] || n}`,
    `Sleep, work, or driving from ${n} interrupted by the same pattern for more than a few days`,
  ];
  switch (service.slug) {
    case "sciatica-relief":
      return [
        `One-sided leg pain or tingling after sitting the drive from ${n}`,
        "Pain that shoots past the knee, not just a tight hamstring",
        "Worse with coughing, sneezing, or long I-25 / Coors sits",
      ];
    case "neck-pain-relief":
    case "headache-migraine-relief":
      return [
        `Tech-neck and screen hours in ${n} (remote work, students, phones)`,
        "Headaches that start in the base of the skull",
        "Arm tingling that came on with the neck, not the other way around",
      ];
    case "auto-accident-chiropractor":
      return [
        `A crash in the last 72 hours on roads serving ${n}`,
        "Delayed stiffness, headache, or “fog” the next morning",
        "You feel “fine” but want documentation for PIP / med-pay",
      ];
    case "herniated-disc-treatment":
    case "spinal-decompression":
      return [
        `Imaging that mentions disc bulge or herniation and you live in ${n}`,
        "Leg or arm symptoms with back or neck pain",
        "You were offered injections or surgery and want a candidacy visit first",
      ];
    default:
      return base;
  }
}

export function uniqueFaqs(
  service: ServiceCopy,
  city: CityCopy
): { q: string; a: string }[] {
  const drive =
    city.driveMin === 0
      ? "You are already in Rio Rancho."
      : `Plan on about ${city.driveMin} minutes from ${city.name} to 1453 Rio Rancho Blvd, Suite 2.`;
  return [
    {
      q: `How far is your office from ${city.name}?`,
      a: `${drive} We are in ${city.county}. Monday–Thursday hours (closed Friday–Sunday). Call (505) 891-2280 if you are coming from ${city.landmarks[0] || city.name} and need the first or last slot of the day.`,
    },
    {
      q: `Do you take ${city.name} patients who already see a chiropractor in Albuquerque?`,
      a: `Yes. Many ${city.name} families split care or switch after a thin chain visit. Bring prior imaging. We re-exam rather than copy the last plan.`,
    },
    {
      q: `Is ${service.name.toLowerCase()} worth the drive from ${city.name}?`,
      a: `If your issue matches ${service.short}, yes — first visits are 45–60 minutes with a Spinal Health Assessment, not a 6-minute adjustment. If we are the wrong tool, we say so before you start a plan.`,
    },
    {
      q: `Does insurance cover chiropractic for ${city.name} patients?`,
      a: `Many private plans and some New Mexico Medicaid / Centennial Care cases cover medically necessary chiropractic, often with visit limits and copays. Coverage is plan-specific. Call (505) 891-2280 before the first visit and we will help you check benefits. We do not require prepaid treatment packages.`,
    },
    {
      q: `Can I find a walk-in chiropractor near ${city.name}?`,
      a: `We do not run a walk-in franchise model. First visits are scheduled (often same week) because the exam takes 45–60 minutes. If you need a same-day slot, call (505) 891-2280 and we will tell you honestly what is open.`,
    },
    {
      q: `What are red flags when choosing a chiropractor near ${city.name}?`,
      a: `Prepaid year-long contracts before an exam, promises to cure non-musculoskeletal disease, discouraging you from seeing your physician, and X-rays on every patient without a clinical reason. A reputable Rio Rancho chiropractor exams first, explains findings, and refers out when chiropractic is the wrong tool.`,
    },
    {
      q: `Can a chiropractor give a cortisone shot?`,
      a: `No. Cortisone injections are outside chiropractic scope in New Mexico. We offer specific adjustments, non-surgical decompression when you are a candidate, Softwave for stubborn tissue, and home rehab. If an injection is the better next step, we say so and coordinate with your MD.`,
    },
    {
      q: `Is it good to get adjusted if I live in ${city.name}?`,
      a: `When joint restriction, disc, or nerve irritation is the driver, yes — spinal manipulation is a first-line option for many back and neck cases. It is not “good” as a weekly ritual with no exam. We measure, treat, and stop or refer when the goal is met.`,
    },
  ];
}

export function peopleAlsoSearch(service: ServiceCopy, city: CityCopy) {
  const citySlug = city.slug;
  const pairs: { label: string; href: string }[] = [
    { label: "Chiropractor in Rio Rancho, NM", href: "/chiropractor-rio-rancho-nm/" },
    { label: "Chiropractor in Albuquerque", href: "/chiropractor-albuquerque-nm/" },
    { label: "Chiropractor in Corrales", href: "/chiropractor-corrales-nm/" },
    { label: "Chiropractor in Bernalillo", href: "/chiropractor-bernalillo-nm/" },
    { label: `Sciatica relief in ${city.name}`, href: `/sciatica-relief-${citySlug}-nm/` },
    { label: `Spinal decompression in ${city.name}`, href: `/spinal-decompression-${citySlug}-nm/` },
    { label: `Back pain relief in ${city.name}`, href: `/back-pain-relief-${citySlug}-nm/` },
    { label: `Auto accident chiropractor in ${city.name}`, href: `/auto-accident-chiropractor-${citySlug}-nm/` },
    { label: "Neuropathy treatment in Rio Rancho", href: "/neuropathy/" },
    { label: "Sports injury chiropractor", href: `/sports-injury-chiropractor-${citySlug}-nm/` },
  ];
  if (service.slug !== "pediatric-chiropractor") {
    pairs.push({
      label: `Pediatric chiropractor in ${city.name}`,
      href: `/pediatric-chiropractor-${citySlug}-nm/`,
    });
  }
  if (service.slug !== "prenatal-chiropractor") {
    pairs.push({
      label: `Prenatal chiropractor in ${city.name}`,
      href: `/prenatal-chiropractor-${citySlug}-nm/`,
    });
  }
  return pairs.filter((p) => !p.href.includes(`/${service.slug}-${citySlug}-nm`));
}

export function buildEnrichedCopy(service: ServiceCopy, city: CityCopy) {
  const corridor = corridorCopy(city);
  const neighborhoods = city.neighborhoods.slice(0, 3).join(", ");
  const landmarks = city.landmarks.slice(0, 3).join(", ");
  const driveLabel =
    city.driveMin === 0
      ? "right here in Rio Rancho"
      : `about ${city.driveMin} minutes from ${city.name}`;

  const intro = `${city.blurb} If you are searching for ${service.short} near ${city.name}, NM (${city.zip}), Synergy Spine and Nerve Center is ${driveLabel}. We serve ${neighborhoods || city.name} from 1453 Rio Rancho Blvd, Suite 2 — not a pop-up franchise. ${corridor.search} Patients comparing Absolute, Lundgren, CareMore, Lifetime, or The Joint still need a clinic that exams before it sells a plan. That is this office.`;

  const commute = corridor.road;
  const lifestyle = corridor.life;
  const whyHere = serviceLocalAngle(service, city);
  const directions = `From ${city.name}, set navigation to 1453 Rio Rancho Blvd, Suite 2, Rio Rancho, NM 87124. Nearby reference points: ${landmarks}. Office hours are Monday 8:00–5:30, Tuesday 1:00–5:00, Wednesday 10:00–5:30, Thursday 1:00–5:30. Closed Friday–Sunday. Call (505) 891-2280 if you need the first appointment after a long drive.`;

  const whenToSeek = [
    `Pain from ${city.name} that lasts more than a few days, interrupts sleep, or shoots into an arm or leg`,
    `A recent auto accident on local roads or I-25 / US-550 even if you “feel fine” today`,
    `Recurring headaches, sciatica, or stiffness after the commute described above`,
    `A disc, neuropathy, or posture problem you do not want managed with pills alone`,
  ];

  return {
    intro,
    commute,
    lifestyle,
    whyHere,
    directions,
    whenToSeek,
    examStory: examStory(service, city),
    vsChain: vsChainClinics(city),
    searchIntent: searchIntentCopy(service, city),
    localSymptoms: localSymptoms(service, city),
    extraFaqs: uniqueFaqs(service, city),
    alsoSearch: peopleAlsoSearch(service, city),
  };
}
