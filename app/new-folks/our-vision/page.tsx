import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Our Vision | Synergy Spine and Nerve Center",
  description:
    "Discover the vision and mission behind Synergy Spine and Nerve Center — empowering Rio Rancho families to live healthier lives through chiropractic care.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/new-folks/our-vision",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="WHO WE ARE" title="Our Vision" />
      <Footer />
    </>
  );
}
