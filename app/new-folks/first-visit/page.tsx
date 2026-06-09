import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "What to Expect on Your First Visit | Synergy Spine and Nerve Center",
  description:
    "Wondering what to expect on your first chiropractic visit? Here's everything you need to know before coming to Synergy Spine and Nerve Center.",
  alternates: {
    canonical: "https://synergyspineandnerve.com/new-folks/first-visit",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ComingSoon
        eyebrow="NEW PATIENTS"
        title="What to Expect on Your First Visit"
      />
      <Footer />
    </>
  );
}
