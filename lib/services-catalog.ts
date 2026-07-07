// Central catalog for the /services/* pages surfaced in the Services nav dropdown.
// Two categories (Chiropractic, Massage) each hold a list of sub-services rendered
// as their own detail pages under `/services/<category>/<slug>/`.

export type ServiceItem = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  intro: string;
  helpsWith: string[];
  whatToExpect: string[];
  image?: string;
};

export type ServiceCategory = {
  slug: "chiropractic" | "massage";
  name: string;
  tagline: string;
  intro: string;
  items: ServiceItem[];
};

export const CHIROPRACTIC_SERVICES: ServiceItem[] = [
  {
    slug: "wellness",
    name: "Wellness",
    short: "Ongoing wellness care",
    tagline: "Feel your best, week after week.",
    image: "/services/chiropractic/wellness.jpg",
    intro:
      "Wellness chiropractic care focuses on keeping your spine and nervous system moving well long after your original complaint is gone. Regular adjustments help maintain mobility, posture, and stress resilience so small issues don't become big ones.",
    helpsWith: [
      "Everyday stiffness and tension",
      "Poor posture from desk and phone work",
      "Stress recovery and better sleep",
      "Staying active and injury-free",
      "Whole-family, drug-free preventive care",
    ],
    whatToExpect: [
      "A brief posture and mobility check-in at each visit",
      "Gentle, specific adjustments where you need them",
      "Simple home stretches or spinal hygiene tips",
      "A pace that fits your schedule and goals",
    ],
  },
  {
    slug: "headaches",
    name: "Headaches",
    short: "Headache relief",
    tagline: "Address the cause, not just the symptom.",
    image: "/services/chiropractic/headaches.avif",
    intro:
      "Most headaches have a mechanical driver: tension in the upper neck, jaw, or shoulders. Careful cervical adjustments and soft-tissue work can restore normal motion and take pressure off the nerves that trigger headache pain.",
    helpsWith: [
      "Tension-type headaches",
      "Cervicogenic (neck-driven) headaches",
      "Headaches from posture, screens, or stress",
      "Headaches after minor auto accidents",
      "Headaches that return after medication wears off",
    ],
    whatToExpect: [
      "Focused exam of the neck, jaw, and upper back",
      "Screening for red flags that need medical referral",
      "Specific adjustments and muscle release work",
      "Guidance on triggers, hydration, and desk setup",
    ],
  },
  {
    slug: "migraine",
    name: "Migraine",
    short: "Migraine support",
    tagline: "Fewer episodes. Better function.",
    image: "/services/chiropractic/migraine.webp",
    intro:
      "Migraine is complex, but many patients find real relief when the mechanical piece is addressed. We work alongside your medical team to reduce cervical spine irritation, calm the nervous system, and identify lifestyle triggers.",
    helpsWith: [
      "Migraine with neck tension or aura",
      "Menstrual and hormonal migraine patterns",
      "Post-traumatic migraine after concussion or whiplash",
      "Chronic migraine that has plateaued on medication alone",
    ],
    whatToExpect: [
      "Detailed history of your migraine patterns and triggers",
      "Gentle, low-force adjustments when appropriate",
      "Coordination with your primary or neurology provider",
      "Habit and hydration coaching to reduce frequency",
    ],
  },
  {
    slug: "back-pain",
    name: "Back Pain",
    short: "Back pain relief",
    tagline: "Get out of pain. Stay out of pain.",
    image: "/services/chiropractic/back-pain.webp",
    intro:
      "Low- and mid-back pain is one of the most common reasons people come see us. We assess the joints, discs, and muscles involved, then combine adjustments, mobility work, and simple home care to get you moving again.",
    helpsWith: [
      "Sudden onset low-back pain",
      "Chronic back stiffness and soreness",
      "Pain from lifting, sitting, or long drives",
      "Disc-related pain and sciatica",
      "Post-pregnancy and postural back pain",
    ],
    whatToExpect: [
      "Orthopedic and neurological exam",
      "Adjustments plus targeted soft-tissue therapy",
      "Home stretches and lifting tips",
      "A clear plan with milestones, no open-ended care",
    ],
  },
  {
    slug: "neck-pain",
    name: "Neck Pain",
    short: "Neck pain relief",
    tagline: "Turn your head without wincing.",
    image: "/services/chiropractic/neck-pain.jpeg",
    intro:
      "Tech neck, whiplash, and everyday tension all show up in the same place. We restore normal neck motion with careful adjustments and release the muscles that keep pulling you back into pain.",
    helpsWith: [
      "Stiff neck from sleeping wrong or long screens",
      "Whiplash after a car or sports collision",
      "Neck pain with headaches or jaw tension",
      "Nerve pain radiating into the shoulder or arm",
    ],
    whatToExpect: [
      "Range-of-motion and neurological testing",
      "Gentle cervical adjustments matched to your comfort",
      "Muscle release for the shoulders and upper back",
      "Ergonomic and pillow guidance",
    ],
  },
  {
    slug: "radiating-arm-hand-pain",
    name: "Radiating Arm/Hand Pain",
    short: "Arm and hand pain",
    tagline: "Calm the nerve. Restore the hand.",
    image: "/services/chiropractic/radiating-arm-hand-pain.jpg",
    intro:
      "Numbness, tingling, or burning that runs from the neck into the shoulder, arm, or hand usually means a nerve is being irritated. We find where it's happening (neck, shoulder, or wrist) and take pressure off.",
    helpsWith: [
      "Pinched nerves in the neck",
      "Thoracic outlet irritation",
      "Carpal-tunnel-like symptoms",
      "Weakness or grip loss in the hand",
      "Symptoms that get worse with sleep or driving",
    ],
    whatToExpect: [
      "Nerve testing and reflex checks",
      "Adjustments through the neck, shoulder, and wrist",
      "Targeted nerve-gliding exercises",
      "A clear plan and referral if imaging is needed",
    ],
  },
  {
    slug: "radiating-leg-feet-pain",
    name: "Radiating Leg/Feet Pain",
    short: "Sciatica and leg pain",
    tagline: "Take the pressure off the nerve.",
    image: "/services/chiropractic/radiating-leg-feet-pain.avif",
    intro:
      "Pain that shoots from the low back into the buttock, leg, or foot (the classic sciatica pattern) is almost always a nerve compression issue. We identify the source and use conservative care to relieve pressure and rebuild strength.",
    helpsWith: [
      "Sciatica with sharp leg or foot pain",
      "Numbness or tingling in the leg",
      "Piriformis syndrome and glute pain",
      "Disc herniation with radicular symptoms",
      "Pain that worsens with sitting or driving",
    ],
    whatToExpect: [
      "Neurological and orthopedic exam",
      "Adjustments, decompression-style work, and mobility drills",
      "Home care to reduce flare-ups",
      "Referral for imaging when clinically indicated",
    ],
  },
  {
    slug: "shoulder-pain",
    name: "Shoulder Pain",
    short: "Shoulder pain relief",
    tagline: "Reach, lift, and sleep without pain.",
    image: "/services/chiropractic/shoulder-pain.jpeg",
    intro:
      "Shoulder pain often looks like a shoulder problem but starts in the neck, upper back, or shoulder blade. We assess the whole chain and treat what's actually driving the pain.",
    helpsWith: [
      "Rotator cuff strain and impingement",
      "Frozen shoulder and stiffness",
      "Pain from overhead work or lifting",
      "Shoulder pain that wakes you at night",
      "Post-collision shoulder tightness",
    ],
    whatToExpect: [
      "Movement and strength testing of the shoulder",
      "Adjustments to the neck, upper back, and shoulder joint",
      "Soft-tissue release and progressive mobility work",
      "A home routine so gains stick",
    ],
  },
];

export const MASSAGE_SERVICES: ServiceItem[] = [
  {
    slug: "medical-massage",
    name: "Medical Massage",
    short: "Medical massage",
    tagline: "Targeted work for real problems.",
    image: "/services/massage/medical-massage.jpg",
    intro:
      "Medical massage is focused, condition-driven bodywork designed to complement your chiropractic care. Sessions target the exact muscles, trigger points, and fascia that are keeping you in pain or limiting your motion.",
    helpsWith: [
      "Chronic neck, back, and shoulder tension",
      "Post-injury and post-surgical recovery",
      "Headache and TMJ-related muscle tension",
      "Whiplash and auto accident rehabilitation",
      "Nerve pain aggravated by tight muscles",
    ],
    whatToExpect: [
      "A brief goals-and-symptoms check-in",
      "Focused work on 1–3 specific areas",
      "Coordination with your chiropractic care plan",
      "Home stretches to keep the tissue happy",
    ],
  },
  {
    slug: "sports-massage",
    name: "Sports Massage",
    short: "Sports massage",
    tagline: "Recover faster. Perform better.",
    image: "/services/massage/sports-massage.jpeg",
    intro:
      "Sports massage helps active people train harder and recover cleaner. Whether you lift, run, ride, or weekend-warrior, we focus on the tissue quality and mobility your sport actually demands.",
    helpsWith: [
      "Pre- and post-event preparation and recovery",
      "Muscle soreness and delayed-onset stiffness",
      "Overuse issues (IT band, plantar fascia, tennis elbow)",
      "Mobility restrictions limiting performance",
      "Return-to-play after minor strains",
    ],
    whatToExpect: [
      "Assessment of your sport and current training load",
      "Deeper, more brisk technique tuned to your tissue",
      "Mobility and activation drills to lock in gains",
      "Guidance on volume, hydration, and recovery",
    ],
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "chiropractic",
    name: "Chiropractic",
    tagline: "Modern, evidence-based chiropractic care.",
    intro:
      "Every chiropractic visit at Synergy is built around a specific plan for your body. We combine careful spinal adjustments with soft-tissue work, mobility drills, and clear home care so you get out of pain and stay there.",
    items: CHIROPRACTIC_SERVICES,
  },
  {
    slug: "massage",
    name: "Massage",
    tagline: "Bodywork that supports your care plan.",
    intro:
      "Our massage therapists work alongside our chiropractors to break up the tissue restrictions that keep pain and dysfunction hanging around. Each session is focused, purposeful, and matched to what your body actually needs.",
    items: MASSAGE_SERVICES,
  },
];

export const CATEGORY_BY_SLUG: Record<string, ServiceCategory> = Object.fromEntries(
  SERVICE_CATEGORIES.map((c) => [c.slug, c])
);
