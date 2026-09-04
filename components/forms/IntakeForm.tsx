"use client";

import TrackedForm from "@/components/forms/TrackedForm";
import FormSubmitFields from "@/components/forms/FormSubmitFields";

const FIELD =
  "mt-2 w-full rounded-xl bg-brand-bg px-4 py-3 text-brand-text ring-1 ring-black/5 focus:ring-2 focus:ring-brand-blue focus:bg-white outline-none transition";

export default function IntakeForm() {
  return (
    <TrackedForm
      action="https://formsubmit.co/info@synergyspineandnerve.com"
      label="intake_form"
      className="rounded-3xl bg-white ring-1 ring-black/5 p-6 sm:p-8 shadow-[0_2px_10px_rgba(13,35,64,0.04)]"
    >
      <h2 className="section-title text-2xl text-brand-navyDark font-semibold">
        New patient intake
      </h2>
      <p className="mt-2 text-sm text-brand-textLight">
        Encrypted in transit to our front desk. This is not a substitute for
        your first-visit exam — it just means we are not starting from a blank
        clipboard.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <label className="block sm:col-span-2">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
            Full name
          </span>
          <input name="name" required autoComplete="name" className={FIELD} />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
            Date of birth
          </span>
          <input name="date_of_birth" type="date" required className={FIELD} />
        </label>
        <label className="block">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
            Phone
          </span>
          <input name="phone" type="tel" required autoComplete="tel" className={FIELD} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
            Email
          </span>
          <input name="email" type="email" required autoComplete="email" className={FIELD} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
            Main concern (when it started, what makes it worse or better)
          </span>
          <textarea name="main_concern" required rows={4} className={FIELD} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
            Current medications, surgeries, or major conditions
          </span>
          <textarea name="health_history" rows={3} className={FIELD} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-brand-textLight">
            Insurance (optional)
          </span>
          <input name="insurance" className={FIELD} />
        </label>
      </div>

      <FormSubmitFields
        subject="New patient intake — Synergy Spine and Nerve Center"
        nextPath="/np-thank-you/"
      />

      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-navyDark transition-colors"
      >
        Submit intake form
      </button>
    </TrackedForm>
  );
}
