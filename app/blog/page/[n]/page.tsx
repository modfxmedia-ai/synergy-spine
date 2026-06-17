import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing, TOTAL_PAGES } from "@/components/BlogListing";

const SITE_ORIGIN = "https://synergyspineandnerve.com";

export function generateStaticParams() {
  // Page 1 lives at /blog/, so generate routes only for pages 2..N
  const params: { n: string }[] = [];
  for (let i = 2; i <= TOTAL_PAGES; i++) {
    params.push({ n: String(i) });
  }
  return params;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  const page = Number.parseInt(n, 10);
  const title =
    Number.isFinite(page) && page > 1
      ? `Blog – Page ${page} | Synergy Spine & Nerve Center`
      : "Chiropractic Health Blog | Synergy Spine & Nerve Center";

  return {
    title,
    description:
      "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness from the team at Synergy Spine and Nerve Center in Rio Rancho, NM.",
    alternates: { canonical: `${SITE_ORIGIN}/blog/page/${page}/` },
    openGraph: {
      title,
      description:
        "Educational articles on chiropractic care, spinal health, nutrition, and natural wellness.",
      url: `${SITE_ORIGIN}/blog/page/${page}/`,
      type: "website",
    },
  };
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const page = Number.parseInt(n, 10);
  if (!Number.isFinite(page) || page < 2 || page > TOTAL_PAGES) {
    notFound();
  }
  return <BlogListing page={page} />;
}
