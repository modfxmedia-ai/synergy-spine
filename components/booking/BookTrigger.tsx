"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useBooking } from "./BookingProvider";

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
  children: ReactNode;
};

export default function BookTrigger({ children, type = "button", ...rest }: Props) {
  const { open } = useBooking();
  return (
    <button type={type} onClick={open} {...rest}>
      {children}
    </button>
  );
}
