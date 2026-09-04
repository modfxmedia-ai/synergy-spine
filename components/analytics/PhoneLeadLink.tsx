"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackPhoneClick } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function PhoneLeadLink({ children, onClick, href, ...rest }: Props) {
  return (
    <a
      href={href}
      {...rest}
      onClick={(e) => {
        trackPhoneClick();
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
