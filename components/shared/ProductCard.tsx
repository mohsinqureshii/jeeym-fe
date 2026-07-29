import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Product } from "@/lib/products";
import AppIcon from "@/components/ui/AppIcon";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col rounded-2.5xl border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-card-hover sm:p-7">
      <div className="flex items-center gap-3.5">
        <AppIcon product={product} size="lg" />
        <h3 className="text-[20px] font-bold text-ink">{product.name}</h3>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-body">
        {product.description}
      </p>
      <ul className="mt-5 grid flex-1 grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[13.5px] text-ink/85">
            <Check
              className="mt-0.5 h-3.5 w-3.5 shrink-0"
              style={{ color: product.color }}
              aria-hidden="true"
            />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={product.href}
        className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand transition-colors hover:text-brand-deep"
      >
        Explore {product.name}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
