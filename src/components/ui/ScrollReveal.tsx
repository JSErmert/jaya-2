"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: React.ReactNode;
  delay?: number; // seconds
  direction?: Direction;
  className?: string;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  const offset = useMemo(() => {
    switch (direction) {
      case "down":
        return { x: 0, y: -40 };
      case "left":
        return { x: 40, y: 0 };
      case "right":
        return { x: -40, y: 0 };
      case "none":
        return { x: 0, y: 0 };
      case "up":
      default:
        return { x: 0, y: 40 };
    }
  }, [direction]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { root: null, rootMargin: "-50px 0px -50px 0px", threshold: 0.01 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transitionProperty: "opacity, transform",
        transitionDuration: "800ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.4, 0.25, 1)",
        transitionDelay: `${Math.max(0, delay)}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
