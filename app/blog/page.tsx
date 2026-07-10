import type { Metadata } from "next";
import { BlogListing } from "@/components/BlogListing";

import { SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chiropractic Health Blog | Synergy Spine & Nerve Center",
  description:
    "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness from the team at Synergy Spine and Nerve Center in Rio Rancho, NM.",
  alternates: { canonical: `${SITE_ORIGIN}/blog/` },
  openGraph: {
    title: "Chiropractic Health Blog | Synergy Spine & Nerve Center",
    description:
      "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness.",
    url: `${SITE_ORIGIN}/blog/`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  return <BlogListing page={1} />;
}
