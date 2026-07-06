"use client";

import { useEffect, useState } from "react";
import { useBooking } from "./booking/BookingProvider";

const PHONE_DISPLAY = "(505) 891-2280";
const PHONE_TEL = "+15058912280";
const SHOW_AFTER_PX = 320;

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

function CalendarIcon({ className = "" }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
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

export default function BottomBookBar() {
  const [visible, setVisible] = useState(false);
  const { open, isOpen } = useBooking();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shown = visible && !isOpen;

  return (
    <div
      aria-hidden={!shown}
      className={`fixed inset-x-0 bottom-4 sm:bottom-5 z-40 pointer-events-none flex justify-center px-3 sm:px-6 transition-all duration-300 ${
        shown ? "translate-y-0 opacity-100" : "translate-y-[120%] opacity-0"
      }`}
    >
      <div className="pointer-events-auto inline-flex items-center gap-2 sm:gap-3 rounded-full bg-brand-navyDark/95 text-white backdrop-blur-md shadow-[0_18px_35px_-15px_rgba(13,35,64,0.55)] ring-1 ring-white/10 pl-2 pr-1.5 py-1.5 sm:pl-3 sm:pr-2 sm:py-2 max-w-[calc(100vw-24px)]">
        <a
          href={`tel:${PHONE_TEL}`}
          className="group inline-flex items-center gap-2 min-w-0 pl-1"
        >
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
            <PhoneIcon className="w-3.5 h-3.5" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-white/60">
              Call us
            </span>
            <span className="text-sm font-semibold truncate">
              {PHONE_DISPLAY}
            </span>
          </span>
        </a>

        <button
          type="button"
          onClick={open}
          className="group/cta inline-flex items-center gap-2 rounded-full bg-brand-gold text-brand-navyDark pl-3 pr-1 py-1 sm:pl-4 sm:pr-1.5 sm:py-1.5 text-[13px] sm:text-sm font-bold hover:bg-brand-goldSoft transition-colors shrink-0"
        >
          <CalendarIcon className="w-3.5 h-3.5 hidden sm:block" />
          <span className="whitespace-nowrap sm:hidden">Book Appointment</span>
          <span className="whitespace-nowrap hidden sm:inline">
            Book New Patient Appointment
          </span>
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-navyDark text-brand-gold group-hover/cta:bg-white group-hover/cta:text-brand-navyDark transition-colors">
            <ArrowRightIcon className="w-3 h-3" />
          </span>
        </button>
      </div>
    </div>
  );
}
