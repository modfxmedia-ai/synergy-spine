import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Schedule an Appointment | Synergy Spine and Nerve Center",
  description:
    "Schedule your chiropractic appointment with Synergy Spine and Nerve Center in Rio Rancho, NM. Pick a time that works for you.",
  alternates: { canonical: "https://synergyspineandnerve.com/schedule" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="BOOK YOUR VISIT" title="Schedule an Appointment" />
      <Footer />
    </>
  );
}
