import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import { POSTS, CATEGORIES, categorySlug, type BlogPost } from "@/lib/blog-posts";

const SITE_ORIGIN = "https://synergyspineandnerve.com";

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
  const visible = POSTS;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Synergy Spine & Nerve Center Blog",
    url: `${SITE_ORIGIN}/blog/`,
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.isoDate,
      url: `${SITE_ORIGIN}/blog/${p.slug}/`,
    })),
  };

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-navyDark text-white">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-blue blur-3xl" />
            <div className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-gold/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog" },
              ]}
            />
            <div className="mt-8 max-w-3xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Articles &amp; Insights
              </p>
              <h1 className="section-title mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Health &amp; Wellness <span className="italic text-brand-goldSoft">Blog</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Practical, research-backed articles on chiropractic care, spinal health, nutrition,
                and the everyday habits that support your body&apos;s natural ability to heal.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY CHIPS */}
        <section className="bg-white border-b border-black/5">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-textLight mr-2">
                Browse by topic:
              </span>
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href={`/category/${categorySlug(c)}/`}
                  className="rounded-full border border-brand-blue/30 bg-brand-blue/5 px-3 py-1 text-[12px] font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* POST GRID */}
        <section className="bg-brand-bg py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 flex items-center justify-between gap-4">
              <p className="text-sm text-brand-textLight">
                Showing <strong className="text-brand-navyDark">{visible.length}</strong>{" "}
                {visible.length === 1 ? "article" : "articles"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i * 30, 360)}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-brand-navyDark text-white py-20">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl animate-drift" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl animate-drift" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h2 className="section-title text-3xl md:text-4xl font-semibold leading-tight">
              Ready to take the next step toward{" "}
              <span className="italic text-brand-goldSoft">better health?</span>
            </h2>
            <p className="mt-4 text-white/80">
              Schedule a no-pressure consultation with our team and get a clear plan for your spine.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/schedule/"
                className="rounded-full bg-brand-gold px-7 py-3 text-sm font-bold text-brand-navyDark uppercase tracking-wide hover:bg-brand-goldSoft transition"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+15058912280"
                className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-brand-navyDark transition"
              >
                (505) 891-2280
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
    </>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand-blue/30">
      <Link
        href={`/blog/${post.slug}/`}
        className="absolute inset-0 z-10"
        aria-label={post.title}
      >
        <span className="sr-only">Read {post.title}</span>
      </Link>

      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blueLight to-brand-navy">
        {post.featureImage ? (
          <Image
            src={post.featureImage}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/40 blur-2xl animate-drift" />
            <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-brand-gold/40 blur-2xl animate-drift" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative h-full flex items-end p-5">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="section-title text-xl font-semibold leading-snug text-brand-navyDark group-hover:text-brand-blue transition">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-brand-text">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between text-[12px] text-brand-textLight">
          <time dateTime={post.isoDate}>{post.date}</time>
          <span className="font-semibold text-brand-blue group-hover:translate-x-1 transition">
            Read more →
          </span>
        </div>
      </div>
    </article>
  );
}
