import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverted";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-[0_1px_2px_rgba(23,70,162,0.24)] hover:bg-brand-deep hover:shadow-[0_4px_14px_rgba(23,70,162,0.28)] active:translate-y-px",
  secondary:
    "border border-line bg-white text-ink hover:border-brand/40 hover:bg-brand-faint active:translate-y-px",
  ghost: "text-brand hover:bg-brand-wash",
  inverted:
    "bg-white text-brand hover:bg-brand-wash active:translate-y-px shadow-[0_1px_2px_rgba(0,0,0,0.12)]",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-[52px] px-7 text-base",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
}: ButtonProps) {
  const cls = clsx(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
