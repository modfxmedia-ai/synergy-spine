import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "What is a Subluxation? | Synergy Spine and Nerve Center",
  description:
    "Learn what a vertebral subluxation is, how it affects your nervous system, and how chiropractic care can help correct it.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/what-is-a-subluxation",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon eyebrow="UNDERSTAND THE BASICS" title="What is a Subluxation?" />
      <Footer />
    </>
  );
}
