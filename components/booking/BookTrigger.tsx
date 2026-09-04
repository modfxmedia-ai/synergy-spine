"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useBooking } from "./BookingProvider";
import { trackBookClick } from "@/lib/analytics";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  children: ReactNode;
};

export default function BookTrigger({ children, type = "button", ...rest }: Props) {
  const { open } = useBooking();
  return (
    <button
      type={type}
      {...rest}
      onClick={() => {
        trackBookClick();
        open();
      }}
    >
      {children}
    </button>
  );
}
