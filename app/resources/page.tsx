import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Patient Resources | Synergy Spine and Nerve Center",
  description:
    "Patient education resources from Synergy Spine and Nerve Center — nutrition guides, spinal hygiene tips, supplement information, and more.",
  alternates: { canonical: "https://synergyspineandnerve.com/resources" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="LEARN & GROW" title="Patient Resources" />
      <Footer />
    </>
  );
}
