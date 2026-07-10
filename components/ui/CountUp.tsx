"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  /** Target value as a string (may contain a decimal or thousands commas). */
  value: string;
  prefix?: string;
  suffix?: string;
  /** Animation duration in ms. */
  duration?: number;
}

/**
 * Counts up from 0 to `value` once, when scrolled into view. Preserves the
 * formatting of the source string (decimals, thousands separators). If the
 * value isn't numeric, or the user prefers reduced motion, it renders statically.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState<string>("0");

  // Parse formatting from the source string.
  const numeric = Number(value.replace(/,/g, ""));
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;
  const useCommas = value.includes(",");

  const format = (n: number) => {
    const fixed = n.toFixed(decimals);
    if (!useCommas) return fixed;
    const [intPart, decPart] = fixed.split(".");
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decPart ? `${withCommas}.${decPart}` : withCommas;
  };

  useEffect(() => {
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    if (reduceMotion || !inView) {
      if (reduceMotion) setDisplay(format(numeric));
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(format(numeric * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {Number.isNaN(numeric) ? value : display}
      {suffix}
    </span>
  );
}
