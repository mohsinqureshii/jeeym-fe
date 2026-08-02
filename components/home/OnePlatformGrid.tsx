import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AppIcon from "@/components/ui/AppIcon";
import { products } from "@/lib/products";

export default function OnePlatformGrid() {
  const tiles = products.filter((p) => p.id !== "ai");
  const ai = products.find((p) => p.id === "ai")!;

  return (
    <section
      className="bg-gradient-to-b from-white to-[#FFF6EC] py-16 sm:py-20 lg:py-24"
      id="products"
    >
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Text — left */}
        <Reveal x={-28} y={0}>
          <h2 className="text-display text-ink">
            One platform. One subscription. Fully integrated.
          </h2>
          <p className="mt-4 max-w-md text-lead text-body">
            Every application is included—one identity, one search experience
            and one admin console across your whole workplace.
          </p>
          <Button href="/start" size="lg" className="mt-7">
            Get started for free
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>

          {/* Jeeym AI banner */}
          <Link
            href={ai.href}
            className="group mt-7 flex max-w-md items-start gap-3.5 rounded-2xl border border-line bg-gradient-to-r from-brand-wash to-[#F4F1FE] p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-app-chat">
              <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[15.5px] font-bold text-ink group-hover:text-brand">
                Jeeym AI — included across every application
              </span>
              <span className="mt-1 block text-[13.5px] leading-relaxed text-body">
                Grounded in your organisation and strictly permission-aware.
              </span>
            </span>
          </Link>
        </Reveal>

        {/* Compact application grid — right */}
        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tiles.map((p, i) => (
              <Reveal key={p.id} x={28} y={0} delay={Math.min((i % 3) * 0.05 + Math.floor(i / 3) * 0.04, 0.3)}>
                <Link
                  href={p.href}
                  className="group flex items-center gap-2.5 rounded-xl border border-line bg-white px-3.5 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-card"
                >
                  <AppIcon product={p} size="sm" />
                  <span className="truncate text-[14px] font-bold text-ink group-hover:text-brand">
                    {p.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} y={10}>
            <Link
              href="/product"
              className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand hover:text-brand-deep"
            >
              Explore all Jeeym products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
