import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Nerve Chart | Synergy Spine and Nerve Center",
  description:
    "Explore our interactive nerve chart to see how each spinal segment connects to organs and systems throughout the body.",
  alternates: { canonical: "https://synergyspineandnerve.com/nerve-chart" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="SPINE & NERVE" title="Nerve Chart" />
      <Footer />
    </>
  );
}
