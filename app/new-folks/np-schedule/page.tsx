import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Book a New Patient Appointment | Synergy Spine and Nerve Center",
  description:
    "Schedule your new patient chiropractic appointment with Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/new-folks/np-schedule",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon
        eyebrow="GET STARTED"
        title="Book a New Patient Appointment"
      />
      <Footer />
    </>
  );
}
