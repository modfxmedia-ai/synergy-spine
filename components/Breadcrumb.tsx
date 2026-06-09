import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const SITE_ORIGIN = "https://synergyspineandnerve.com";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      ...(item.href
        ? { item: item.href.startsWith("http") ? item.href : `${SITE_ORIGIN}${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-white border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-brand-textLight">
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              return (
                <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-2">
                  {idx > 0 && (
                    <svg
                      className="w-3 h-3 text-brand-textLight/50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-brand-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={isLast ? "text-brand-navyDark font-medium" : ""}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
