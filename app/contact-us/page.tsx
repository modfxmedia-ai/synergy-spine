import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Contact Us | Synergy Spine and Nerve Center",
  description:
    "Contact Synergy Spine and Nerve Center in Rio Rancho, NM. Call (505) 891-2280 or send us a message about chiropractic care and appointments.",
  alternates: { canonical: "https://synergyspineandnerve.com/contact-us" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="GET IN TOUCH" title="Contact Us" />
      <Footer />
    </>
  );
}
