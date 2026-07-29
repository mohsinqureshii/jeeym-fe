import Section, { SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/lib/products";

export default function ProductEcosystem() {
  const gridProducts = products.filter((p) => p.id !== "ai");

  return (
    <Section id="products" tone="white">
      <SectionHeader
        title="Everything your organisation needs to work"
        copy="A complete suite of connected applications with one identity, one search experience and one secure platform."
      />
      {/* Horizontally scrollable on mobile, grid from sm upwards */}
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-6">
        {gridProducts.map((product, i) => (
          <Reveal
            key={product.id}
            delay={Math.min((i % 3) * 0.07, 0.2)}
            className="w-[85%] min-w-[85%] snap-center sm:w-auto sm:min-w-0"
          >
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
