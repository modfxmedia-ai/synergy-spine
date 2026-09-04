"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useBooking } from "./booking/BookingProvider";
import PhoneLeadLink from "./analytics/PhoneLeadLink";

type NavChild = {
  label: string;
  href?: string;
  action?: "book";
  heading?: boolean;
  children?: NavChild[];
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us/",
    children: [
      { label: "Meet Dr. Brad", href: "/about-us/meet-dr-brad/" },
      { label: "Meet Austin", href: "/about-us/meet-austin/" },
      { label: "Book Appointment", href: "#book", action: "book" },
    ],
  },
  {
    label: "New Folks",
    href: "/new-folks/",
    children: [
      { label: "What to Expect on Your First Visit", href: "/new-folks/first-visit/" },
      { label: "Our Vision", href: "/new-folks/our-vision/" },
      { label: "Testimonials", href: "/testimonials/" },
      { label: "Book a New Patient Appointment", href: "#book", action: "book" },
    ],
  },
  {
    label: "Services",
    href: "/services/",
    children: [
      {
        label: "Chiropractic",
        href: "/services/chiropractic/",
        children: [
          { label: "Wellness", href: "/services/chiropractic/wellness/" },
          { label: "Headaches", href: "/services/chiropractic/headaches/" },
          { label: "Migraine", href: "/services/chiropractic/migraine/" },
          { label: "Back Pain", href: "/services/chiropractic/back-pain/" },
          { label: "Neck Pain", href: "/services/chiropractic/neck-pain/" },
          {
            label: "Radiating Arm/Hand Pain",
            href: "/services/chiropractic/radiating-arm-hand-pain/",
          },
          {
            label: "Radiating Leg/Feet Pain",
            href: "/services/chiropractic/radiating-leg-feet-pain/",
          },
          { label: "Shoulder Pain", href: "/services/chiropractic/shoulder-pain/" },
        ],
      },
      {
        label: "Massage",
        href: "/services/massage/",
        children: [
          { label: "Medical Massage", href: "/services/massage/medical-massage/" },
          { label: "Sports Massage", href: "/services/massage/sports-massage/" },
        ],
      },
      {
        label: "Car/Truck Accident Care",
        href: "/services/car-truck-accident-care/",
      },
      { label: "Book Appointment", href: "#book", action: "book" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "Triune of Care", href: "/triune-of-care/" },
      { label: "Spinal Health Assessment", href: "/resources/improve-your-sha-score/" },
      { label: "Essential Nutrients", href: "/resources/essential-nutrients-supplements/" },
      { label: "Purchase Supplements", href: "/purchase-supplements-2/" },
      { label: "Book Appointment", href: "#book", action: "book" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  {
    label: "Patient Portal",
    href: "https://www.atlaschirosys.com/booking/#/login?s=13323023",
    external: true,
  },
];

const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_TEL = "+15058912280";
const ADDRESS = "1453 Rio Rancho Blvd-Suite 2, Rio Rancho, NM 87124";

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="14" y2="17" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleEnter = (label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 300);
  };

  const toggleMobileExpanded = (label: string) => {
    setMobileExpanded((current) => (current === label ? null : label));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`hidden lg:block bg-brand-navyDark text-white/90 text-[13px] tracking-wide overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-10">
          <PhoneLeadLink
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-brand-blue transition-colors">
              <PhoneIcon className="w-3 h-3" />
            </span>
            <span className="font-medium">{PHONE_DISPLAY}</span>
          </PhoneLeadLink>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <PinIcon className="w-3.5 h-3.5 text-brand-blue" />
              <span>{ADDRESS}</span>
            </span>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-b border-black/[0.04]"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div
          className={`relative mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label="Synergy Spine and Nerve Center home"
          >
            <Image
              src="/logo.png"
              alt="Synergy Spine and Nerve Center"
              width={237}
              height={80}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-9" : "h-11"
              }`}
              priority
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 ml-4 xl:ml-16"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length;
              const isOpen = openDropdown === item.label;

              const linkClassName =
                "group relative inline-flex items-center gap-1 px-2 xl:px-3 py-2 text-[13.5px] font-medium text-brand-navyDark hover:text-brand-blue transition-colors whitespace-nowrap";
              const linkInner = (
                <>
                  <span className="relative">
                    {item.label}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] bg-brand-blue transition-all duration-300 ease-out ${
                        isOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                  {hasChildren && (
                    <ChevronIcon
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-brand-blue" : ""
                      }`}
                    />
                  )}
                </>
              );

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && handleEnter(item.label)}
                  onMouseLeave={() => hasChildren && handleLeave()}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                    >
                      {linkInner}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClassName}>
                      {linkInner}
                    </Link>
                  )}

                  {hasChildren && (
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 -mt-1 min-w-[280px] transition-all duration-200 ${
                        isOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                    >
                      <div className="relative bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(13,35,64,0.25)] ring-1 ring-black/5 p-2">
                        <span
                          className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white ring-1 ring-black/5"
                          aria-hidden="true"
                        />
                        <div className="relative">
                          {item.children!.map((child, ci) => {
                            if (child.heading) {
                              return (
                                <div
                                  key={`h-${child.label}-${ci}`}
                                  className={`px-4 pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-textLight ${
                                    ci > 0 ? "mt-2 pt-3 border-t border-black/5" : "pt-1"
                                  }`}
                                >
                                  {child.label}
                                </div>
                              );
                            }
                            if (child.action === "book") {
                              return (
                                <div key={child.label} className={ci > 0 ? "mt-1 pt-2 border-t border-black/5" : undefined}>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setOpenDropdown(null);
                                      openBooking();
                                    }}
                                    className="group/child flex w-full items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors text-left"
                                  >
                                    <span>{child.label}</span>
                                    <ArrowRightIcon className="w-3.5 h-3.5 -translate-x-1 opacity-0 group-hover/child:translate-x-0 group-hover/child:opacity-100 transition-all duration-200" />
                                  </button>
                                </div>
                              );
                            }
                            if (child.children && child.children.length > 0) {
                              return (
                                <div
                                  key={`${child.href ?? child.label}-${ci}`}
                                  className="relative group/sub"
                                >
                                  <Link
                                    href={child.href ?? "#"}
                                    className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-[13.5px] text-brand-text hover:bg-brand-blue/5 hover:text-brand-blue group-hover/sub:bg-brand-blue/5 group-hover/sub:text-brand-blue transition-colors"
                                  >
                                    <span>{child.label}</span>
                                    <ChevronIcon className="w-3 h-3 -rotate-90" />
                                  </Link>
                                  <div className="pointer-events-none invisible absolute left-full top-0 pl-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0">
                                    <div className="min-w-[240px] rounded-2xl bg-white p-2 shadow-[0_20px_50px_-10px_rgba(13,35,64,0.25)] ring-1 ring-black/5">
                                      {child.children.map((sub, si) => (
                                        <Link
                                          key={`${sub.href}-${si}`}
                                          href={sub.href ?? "#"}
                                          className="group/subchild flex items-center justify-between gap-3 px-4 py-2 rounded-xl text-[13px] text-brand-text hover:bg-brand-blue/5 hover:text-brand-blue transition-colors"
                                        >
                                          <span>{sub.label}</span>
                                          <ArrowRightIcon className="w-3.5 h-3.5 -translate-x-1 opacity-0 group-hover/subchild:translate-x-0 group-hover/subchild:opacity-100 transition-all duration-200" />
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                            return (
                              <Link
                                key={`${child.href}-${ci}`}
                                href={child.href ?? "#"}
                                className="group/child flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl text-[13.5px] text-brand-text hover:bg-brand-blue/5 hover:text-brand-blue transition-colors"
                              >
                                <span>{child.label}</span>
                                <ArrowRightIcon className="w-3.5 h-3.5 -translate-x-1 opacity-0 group-hover/child:translate-x-0 group-hover/child:opacity-100 transition-all duration-200" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <PhoneLeadLink
              href={`tel:${PHONE_TEL}`}
              className="hidden xl:inline-flex items-center justify-center h-10 w-10 rounded-full bg-brand-blue/10 text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              aria-label={`Call ${PHONE_DISPLAY}`}
              title={PHONE_DISPLAY}
            >
              <PhoneIcon className="w-4 h-4" />
            </PhoneLeadLink>
            <button
              type="button"
              onClick={openBooking}
              className="group/cta inline-flex items-center gap-2 bg-brand-navyDark text-white rounded-full pl-5 pr-1.5 py-1.5 text-[13.5px] font-semibold hover:bg-brand-blue transition-colors whitespace-nowrap"
            >
              <span>Book New Patient Appointment</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue group-hover/cta:bg-white group-hover/cta:text-brand-blue transition-colors">
                <ArrowRightIcon className="w-3.5 h-3.5 group-hover/cta:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-brand-navyDark text-white hover:bg-brand-blue transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-0 z-40 transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="bg-white shadow-2xl pt-20 pb-8 px-6 max-h-screen overflow-y-auto">
          <PhoneLeadLink
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 mb-5 text-brand-navyDark font-semibold"
            onClick={closeMobile}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <PhoneIcon className="w-4 h-4" />
            </span>
            <span>{PHONE_DISPLAY}</span>
          </PhoneLeadLink>

          <ul className="divide-y divide-black/5">
            {NAV_ITEMS.map((item) => {
              const hasChildren = !!item.children?.length;
              const expanded = mobileExpanded === item.label;
              return (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3.5 text-base font-medium text-brand-navyDark hover:text-brand-blue"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex-1 py-3.5 text-base font-medium text-brand-navyDark hover:text-brand-blue"
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    )}
                    {hasChildren && (
                      <button
                        type="button"
                        className="p-2 text-brand-navyDark"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={expanded}
                        onClick={() => toggleMobileExpanded(item.label)}
                      >
                        <ChevronIcon
                          className={`w-4 h-4 transition-transform duration-300 ${
                            expanded ? "rotate-180 text-brand-blue" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {hasChildren && (
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                        expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-4 pb-3 ml-1 border-l-2 border-brand-blue/20 space-y-1">
                        {item.children!.map((child, ci) => (
                          <li key={child.action === "book" ? child.label : `${child.href ?? child.label}-${ci}`}>
                            {child.heading ? (
                              <div
                                className={`text-[10px] font-bold uppercase tracking-[0.18em] text-brand-textLight ${
                                  ci > 0 ? "mt-2 pt-2 border-t border-black/5" : ""
                                } pb-1`}
                              >
                                {child.label}
                              </div>
                            ) : child.action === "book" ? (
                              <button
                                type="button"
                                className="block w-full py-2 text-left text-sm text-brand-textLight hover:text-brand-blue"
                                onClick={() => {
                                  closeMobile();
                                  openBooking();
                                }}
                              >
                                {child.label}
                              </button>
                            ) : (
                              <>
                                <Link
                                  href={child.href ?? "#"}
                                  className="block py-2 text-sm font-medium text-brand-navyDark hover:text-brand-blue"
                                  onClick={closeMobile}
                                >
                                  {child.label}
                                </Link>
                                {child.children && child.children.length > 0 && (
                                  <ul className="pl-4 ml-1 mt-1 mb-2 border-l border-brand-blue/10 space-y-0.5">
                                    {child.children.map((sub, si) => (
                                      <li key={`${sub.href}-${si}`}>
                                        <Link
                                          href={sub.href ?? "#"}
                                          className="block py-1.5 text-[13px] text-brand-textLight hover:text-brand-blue"
                                          onClick={closeMobile}
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-brand-navyDark text-white rounded-full px-5 py-3.5 text-sm font-semibold hover:bg-brand-blue transition-colors"
            onClick={() => {
              closeMobile();
              openBooking();
            }}
          >
            <span>Book New Patient Appointment</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>

          <p className="mt-5 text-xs text-brand-textLight inline-flex items-start gap-2">
            <PinIcon className="w-3.5 h-3.5 text-brand-blue mt-0.5 flex-shrink-0" />
            <span>{ADDRESS}</span>
          </p>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />
    </header>
  );
}
