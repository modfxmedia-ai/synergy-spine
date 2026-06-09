import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Blog | Synergy Spine and Nerve Center",
  description:
    "Articles on chiropractic care, spinal health, nutrition, and wellness from the team at Synergy Spine and Nerve Center.",
  alternates: { canonical: "https://synergyspineandnerve.com/blog" },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="ARTICLES & INSIGHTS" title="Blog" />
      <Footer />
    </>
  );
}
