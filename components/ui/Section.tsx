import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  /** Background treatment */
  tone?: "white" | "faint" | "wash";
  padding?: "normal" | "tight" | "loose";
}

const tones = {
  white: "bg-white",
  faint: "bg-brand-faint",
  wash: "bg-brand-wash",
};

const paddings = {
  tight: "py-14 sm:py-16 lg:py-20",
  normal: "py-16 sm:py-20 lg:py-28",
  loose: "py-20 sm:py-28 lg:py-36",
};

export default function Section({
  id,
  className,
  children,
  tone = "white",
  padding = "normal",
}: SectionProps) {
  return (
    <section id={id} className={clsx(tones[tone], paddings[padding], className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "mb-12 lg:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-2xl",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-display text-ink">{title}</h2>
      {copy ? (
        <p className="mt-5 text-lead text-body">{copy}</p>
      ) : null}
    </div>
  );
}
