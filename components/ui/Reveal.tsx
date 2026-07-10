"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before this element animates in. */
  delay?: number;
  /** Direction the element slides in from. */
  from?: "up" | "down" | "left" | "right";
  className?: string;
  /** Render as a different element (default div). */
  as?: "div" | "li" | "section" | "span";
}

const OFFSET = 24;

/**
 * Subtle one-pass fade + slide-in when the element scrolls into view.
 * Respects `prefers-reduced-motion` (renders statically, no motion).
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { y: OFFSET, x: 0 },
    down: { y: -OFFSET, x: 0 },
    left: { x: OFFSET, y: 0 },
    right: { x: -OFFSET, y: 0 },
  }[from];

  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offsets }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
