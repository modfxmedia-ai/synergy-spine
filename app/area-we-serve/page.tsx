import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Areas We Serve | Synergy Spine and Nerve Center",
  description:
    "Synergy Spine and Nerve Center proudly serves Rio Rancho, Albuquerque, Bernalillo, Corrales, and surrounding New Mexico communities.",
  alternates: { canonical: "https://synergyspineandnerve.com/area-we-serve" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="LOCAL CHIROPRACTIC CARE" title="Areas We Serve" />
      <Footer />
    </>
  );
}
