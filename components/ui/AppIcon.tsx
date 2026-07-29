import clsx from "clsx";
import type { Product } from "@/lib/products";

interface AppIconProps {
  product: Pick<Product, "icon" | "color" | "name">;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { box: "h-8 w-8 rounded-lg", icon: "h-4 w-4" },
  md: { box: "h-10 w-10 rounded-xl", icon: "h-5 w-5" },
  lg: { box: "h-12 w-12 rounded-xl", icon: "h-6 w-6" },
};

/** Rounded application icon chip tinted with the product's accent colour. */
export default function AppIcon({ product, size = "md", className }: AppIconProps) {
  const Icon = product.icon;
  const s = sizes[size];
  return (
    <span
      className={clsx("flex shrink-0 items-center justify-center", s.box, className)}
      style={{ backgroundColor: `${product.color}14`, color: product.color }}
      aria-hidden="true"
    >
      <Icon className={s.icon} strokeWidth={2} />
    </span>
  );
}
