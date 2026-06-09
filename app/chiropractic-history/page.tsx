import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Chiropractic History | Synergy Spine and Nerve Center",
  description:
    "Explore the history of chiropractic care, from its founding to modern evidence-based practice at Synergy Spine and Nerve Center.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/chiropractic-history",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="LEARN MORE" title="Chiropractic History" />
      <Footer />
    </>
  );
}
