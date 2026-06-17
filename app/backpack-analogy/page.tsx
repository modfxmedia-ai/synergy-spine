import type { Metadata } from "next";
import VideoPage from "@/components/VideoPage";

const CANONICAL = "https://synergyspineandnerve.com/backpack-analogy/";
const VIDEO_ID = "z_iICcjcmjs";

export const metadata: Metadata = {
  title: "Backpack Analogy – Synergy Spine and Nerve Center",
  description:
    "Did you know your spine, nerve system and overall health may be suffering even if you don't feel pain? Watch the Backpack Analogy to understand how spinal health slips silently.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Backpack Analogy",
    description:
      "Why pain is a poor measure of spinal and nerve-system health.",
    url: CANONICAL,
    type: "video.other",
    siteName: "Synergy Spine and Nerve Center",
  },
};

export default function BackpackAnalogyPage() {
  return (
    <VideoPage
      title="Backpack Analogy"
      emphasis="Analogy"
      eyebrow="Education · Pain ≠ Health"
      lead="Did you know that your spine, nerve system and overall health may be suffering even if you don't feel pain? Watch this video to understand how your spinal health may be slipping away."
      videoId={VIDEO_ID}
      videoTitle="Backpack Analogy"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources/" },
        { label: "Videos", href: "/resources/videos/spinal-hygiene-videos/" },
        { label: "Backpack Analogy" },
      ]}
      related={[
        {
          eyebrow: "Watch next",
          label: "Spinal Hygiene Video",
          href: "/spinal-hygiene-video/",
        },
        {
          eyebrow: "Self-check",
          label: "30-Second Spinal Hygiene Report Card",
          href: "/30-second-spinal-hygiene-report-card/",
        },
        {
          eyebrow: "Deeper read",
          label: "Improve Your SHA Score",
          href: "/resources/improve-your-sha-score/",
        },
      ]}
    />
  );
}
