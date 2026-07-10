import type { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  /** Optional leading icon. */
  icon?: ReactNode;
  className?: string;
  /** External links open in a new tab by default; set false to stay in-page (e.g. #anchor). */
  external?: boolean;
  ariaLabel?: string;
}

/**
 * The site's call-to-action button. `primary` is the accent-filled version;
 * `secondary` is a bordered, quieter version for supporting actions.
 */
export function CTAButton({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
  external = true,
  ariaLabel,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-all duration-200 focus-visible:outline-2 active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? "bg-accent text-white shadow-[0_8px_30px_rgb(var(--accent)/0.35)] hover:shadow-[0_10px_40px_rgb(var(--accent)/0.5)] hover:brightness-110"
      : "border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.06]";

  const isAnchor = href.startsWith("#");
  const openNewTab = external && !isAnchor;

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${styles} ${className}`}
      {...(openNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {icon}
      {children}
    </a>
  );
}
