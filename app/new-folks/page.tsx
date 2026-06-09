import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "New Folks | Synergy Spine and Nerve Center",
  description:
    "New patient information, intake forms, and what to expect on your first visit at Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: "https://synergyspineandnerve.com/new-folks" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="NEW PATIENTS" title="New Folks" />
      <Footer />
    </>
  );
}
