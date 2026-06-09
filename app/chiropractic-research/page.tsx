import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Chiropractic Research | Synergy Spine and Nerve Center",
  description:
    "Evidence-based research on chiropractic care, spinal health, and patient outcomes referenced by Synergy Spine and Nerve Center.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/chiropractic-research",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="EVIDENCE-BASED" title="Chiropractic Research" />
      <Footer />
    </>
  );
}
