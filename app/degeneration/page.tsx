import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Spinal Degeneration | Synergy Spine and Nerve Center",
  description:
    "Learn about the stages of spinal degeneration, what causes it, and how chiropractic care can help slow or reverse the process.",
  alternates: { canonical: "https://synergyspineandnerve.com/degeneration" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="SPINAL HEALTH" title="Spinal Degeneration" />
      <Footer />
    </>
  );
}
