import Link from "next/link";
import clsx from "clsx";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={clsx("h-8 w-8", className)}
    >
      <rect x="1" y="1" width="30" height="30" rx="9" fill="#2563EB" />
      <path
        d="M20.6 8.5v10.2c0 3.3-2.2 5.3-5.4 5.3-2.7 0-4.6-1.4-5.3-3.7l3-1.2c.4 1.2 1.2 1.8 2.3 1.8 1.3 0 2.1-.8 2.1-2.3V8.5h3.3z"
        fill="#fff"
      />
      <circle cx="22.9" cy="10" r="1.9" fill="#93C5FD" />
    </svg>
  );
}

export default function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={clsx("flex items-center gap-2.5", className)}
      aria-label="Jeeym home"
    >
      <LogoMark />
      <span
        className={clsx(
          "text-[22px] font-bold tracking-tight",
          inverted ? "text-white" : "text-ink"
        )}
      >
        Jeeym
      </span>
    </Link>
  );
}
