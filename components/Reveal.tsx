"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
  variant?: "up" | "fade";
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "up",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const initial =
    variant === "up"
      ? "opacity-0 translate-y-6"
      : "opacity-0";
  const shown = "opacity-100 translate-y-0";

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? shown : initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
