import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Patient Testimonials | Synergy Spine and Nerve Center",
  description:
    "Read real stories from patients of Synergy Spine and Nerve Center. See how chiropractic care has changed lives in Rio Rancho and beyond.",
  alternates: { canonical: "https://synergyspineandnerve.com/testimonials" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon
        eyebrow="WHAT OUR PATIENTS SAY"
        title="Patient Testimonials"
      />
      <Footer />
    </>
  );
}
