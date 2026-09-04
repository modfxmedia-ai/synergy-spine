export function trackLead(label: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void })
    .gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "generate_lead", {
    event_category: "conversion",
    event_label: label,
  });
}

export function trackBookClick() {
  trackLead("book_cta");
}

export function trackPhoneClick() {
  trackLead("phone_click");
}
