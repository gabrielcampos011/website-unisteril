"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  threshold?: number;
}

const initial: Record<NonNullable<FadeInProps["direction"]>, string> = {
  up:    "opacity-0 translate-y-8",
  left:  "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  none:  "opacity-0",
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : initial[direction]} ${className}`}
    >
      {children}
    </div>
  );
}
