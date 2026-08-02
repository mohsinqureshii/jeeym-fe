import clsx from "clsx";

export type LogoVariant = "color" | "white";

/**
 * Static Jeeym mark: two tilted rounded cards with gradient outlines.
 * Use variant="white" on dark or coloured backgrounds.
 */
export function LogoMark({
  className,
  variant = "color",
}: {
  className?: string;
  variant?: LogoVariant;
}) {
  const front = variant === "white" ? "#FFFFFF" : "url(#jy-mark-front)";
  const back = variant === "white" ? "#FFFFFF" : "url(#jy-mark-back)";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className ?? "h-8 w-8"}
    >
      {variant === "color" ? (
        <defs>
          <linearGradient id="jy-mark-front" x1="10" y1="2" x2="20" y2="19" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4ADE80" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="jy-mark-back" x1="3" y1="14" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
      ) : null}
      <rect
        x="3.2"
        y="13.6"
        width="7.6"
        height="7.6"
        rx="2.6"
        stroke={back}
        strokeWidth="2.1"
        strokeLinejoin="round"
        transform="rotate(-14 7 17.4)"
      />
      <rect
        x="9.8"
        y="2.6"
        width="9.2"
        height="15.6"
        rx="3.4"
        stroke={front}
        strokeWidth="2.1"
        strokeLinejoin="round"
        transform="rotate(12 14.4 10.4)"
      />
    </svg>
  );
}
