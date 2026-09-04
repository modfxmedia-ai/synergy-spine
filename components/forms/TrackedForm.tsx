"use client";

import type { FormEvent, ReactNode } from "react";
import { trackLead } from "@/lib/analytics";

type Props = {
  action: string;
  method?: string;
  className?: string;
  label: string;
  children: ReactNode;
};

export default function TrackedForm({
  action,
  method = "POST",
  className,
  label,
  children,
}: Props) {
  function onSubmit(_e: FormEvent<HTMLFormElement>) {
    trackLead(label);
  }

  return (
    <form action={action} method={method} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
