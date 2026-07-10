import type { ReactNode } from "react";

interface SectionProps {
  /** Anchor id for in-page navigation (e.g. "proof", "contact"). */
  id?: string;
  children: ReactNode;
  className?: string;
  /** Optional aria-label when there's no visible heading. */
  ariaLabel?: string;
}

/**
 * Consistent section shell: vertical rhythm, centered max-width container,
 * and a stable id anchor. Keeps every section aligned without repeating classes.
 */
export function Section({ id, children, className = "", ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`w-full px-5 py-16 sm:px-8 sm:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}
