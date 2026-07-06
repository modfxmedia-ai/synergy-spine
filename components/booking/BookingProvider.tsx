"use client";

import Script from "next/script";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const SURVEY_ID = "zNu9bAmzcJBHx03JJxda";
const SURVEY_SRC = `https://api.leadconnectorhq.com/widget/survey/${SURVEY_ID}`;
const FORM_EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

type BookingContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a <BookingProvider>");
  }
  return ctx;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<"intro" | "payment">("intro");
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    if (typeof document !== "undefined") {
      previouslyFocused.current = document.activeElement as HTMLElement | null;
    }
    setMounted(true);
    setStep("intro");
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen && dialogRef.current === null) return;
    if (isOpen) {
      const el = dialogRef.current?.querySelector<HTMLElement>(
        "[data-close-booking]"
      );
      el?.focus();
    } else {
      previouslyFocused.current?.focus?.();
    }
  }, [isOpen]);

  // Detect when the LeadConnector survey iframe reaches the payment step.
  // The widget resizes the iframe as it moves between slides; the card
  // form is noticeably taller than the intro fields, so we watch the
  // iframe height and flip the header copy once it grows past a threshold.
  useEffect(() => {
    if (!isOpen) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    // Threshold in px; the intro slide (name/email) is ~500-560px; once
    // Stripe's card fields render the iframe jumps well above 640px.
    const PAYMENT_HEIGHT_THRESHOLD = 640;

    const check = () => {
      const attr = Number(iframe.getAttribute("height"));
      const measured = iframe.offsetHeight;
      const h = Math.max(
        Number.isFinite(attr) ? attr : 0,
        Number.isFinite(measured) ? measured : 0
      );
      if (h >= PAYMENT_HEIGHT_THRESHOLD) {
        setStep("payment");
      }
    };

    check();

    const ro =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(check) : null;
    ro?.observe(iframe);

    const mo = new MutationObserver(check);
    mo.observe(iframe, { attributes: true, attributeFilter: ["height", "style"] });

    // Extra safety net: postMessage-based detection for widget messages
    // that mention the payment step.
    const onMessage = (e: MessageEvent) => {
      const origin = e.origin || "";
      if (
        !origin.includes("leadconnectorhq") &&
        !origin.includes("msgsndr") &&
        !origin.includes("gohighlevel")
      ) {
        return;
      }
      const data = e.data;
      if (data == null) return;
      let asString = "";
      try {
        asString = typeof data === "string" ? data : JSON.stringify(data);
      } catch {
        return;
      }
      const lower = asString.toLowerCase();
      if (
        lower.includes("payment") ||
        lower.includes("stripe") ||
        lower.includes("card_number") ||
        lower.includes("\"card\"")
      ) {
        setStep("payment");
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      ro?.disconnect();
      mo.disconnect();
      window.removeEventListener("message", onMessage);
    };
  }, [isOpen, mounted]);

  return (
    <BookingContext.Provider value={{ open, close, isOpen }}>
      {children}

      {mounted && (
        <div
          aria-hidden={!isOpen}
          className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            type="button"
            aria-label="Close booking form"
            onClick={close}
            className="absolute inset-0 bg-brand-navyDark/70 backdrop-blur-sm"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            ref={dialogRef}
            className={`absolute left-1/2 top-1/2 w-[min(100%,720px)] -translate-x-1/2 -translate-y-1/2 px-4 transition-all duration-300 ${
              isOpen ? "translate-y-[-50%] opacity-100" : "translate-y-[-46%] opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(13,35,64,0.45)] ring-1 ring-black/5">
              <div className="relative overflow-hidden bg-gradient-to-br from-brand-navyDark via-brand-navy to-brand-blue px-6 pt-6 pb-8 text-white sm:px-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full bg-white/10 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-blue/40 blur-3xl"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue/90">
                      Book Your Visit
                    </p>
                    <h2
                      id="booking-title"
                      className="mt-2 font-serif text-2xl leading-tight sm:text-3xl"
                    >
                      {step === "payment"
                        ? "Let's get you feeling better."
                        : "Your new-patient visit includes:"}
                    </h2>
                    {step === "payment" ? (
                      <p className="mt-2 max-w-md text-sm text-white/80">
                        Due to high demand and the low cost of this special
                        offer, please enter your payment details below so
                        that your appointment time will be reserved for you.
                      </p>
                    ) : (
                      <>
                        <p className="mt-2 max-w-md text-sm text-white/80">
                          A one-on-one consultation, a complete spinal
                          health assessment, any necessary X-rays, a first
                          treatment, and a care plan.
                        </p>
                        <p className="mt-3 max-w-md text-sm font-semibold text-brand-gold">
                          Can&apos;t wait to see you soon!
                        </p>
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    data-close-booking
                    onClick={close}
                    aria-label="Close"
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative bg-white">
                <div className="max-h-[70vh] overflow-y-auto px-2 pb-4 pt-2 sm:px-4">
                  {mounted && (
                    <iframe
                      ref={iframeRef}
                      src={SURVEY_SRC}
                      id={SURVEY_ID}
                      title="Book an appointment"
                      scrolling="no"
                      className="block w-full border-0"
                      style={{ minHeight: 520 }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {mounted && (
        <Script src={FORM_EMBED_SCRIPT} strategy="afterInteractive" />
      )}
    </BookingContext.Provider>
  );
}
