import Link from "next/link";
import clsx from "clsx";
import { LogoMark, type LogoVariant } from "./LogoMark";

export { LogoMark };
export type { LogoVariant };

interface LogoProps {
  className?: string;
  /** White wordmark + white mark for dark backgrounds. */
  inverted?: boolean;
}

export default function Logo({ className, inverted = false }: LogoProps) {
  const variant: LogoVariant = inverted ? "white" : "color";
  return (
    <Link
      href="/"
      className={clsx("flex items-center gap-2.5", className)}
      aria-label="Jeeym home"
    >
      <LogoMark variant={variant} />
      <span
        className={clsx(
          "relative pr-2 text-[22px] font-bold tracking-tight",
          inverted ? "text-white" : "text-[#1B2559]"
        )}
      >
        Jeeym
        <span
          className={clsx(
            "absolute right-0 top-[4px] h-[6px] w-[6px] rounded-full",
            inverted ? "bg-[#A78BFA]" : "bg-[#7C3AED]"
          )}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
