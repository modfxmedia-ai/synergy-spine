import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Intake Forms | Synergy Spine and Nerve Center",
  description:
    "Download and complete your new patient intake forms before visiting Synergy Spine and Nerve Center to save time at your first appointment.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/new-folks/intake-forms",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="NEW PATIENTS" title="Intake Forms" />
      <Footer />
    </>
  );
}
