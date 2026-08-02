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
    <section className="bg-white py-16 sm:py-20 lg:py-28" id="products">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-display text-ink">
              One platform. One subscription.
              <br className="hidden sm:block" /> Fully integrated.
            </h2>
            <p className="mt-4 text-lead text-body">
              Every application is included—one identity, one search experience
              and one admin console across your whole workplace.
            </p>
            <Button href="/start" className="mt-6">
              Get started for free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        {/* Jeeym AI banner tile */}
        <Reveal>
          <Link
            href={ai.href}
            className="group mb-5 flex flex-col items-start gap-4 rounded-2.5xl border border-line bg-gradient-to-r from-brand-wash via-white to-[#F4F1FE] p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover sm:flex-row sm:items-center sm:p-7"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-app-chat">
              <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <span className="flex-1">
              <span className="block text-[19px] font-bold text-ink group-hover:text-brand">
                Jeeym AI — included across every application
              </span>
              <span className="mt-1 block text-[14.5px] leading-relaxed text-body">
                Ask questions, draft content, summarise work and take action—
                grounded in your organisation and strictly permission-aware.
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand">
              Explore
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((p, i) => (
            <Reveal key={p.id} delay={Math.min((i % 4) * 0.05, 0.2)}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-card"
              >
                <AppIcon product={p} size="md" />
                <p className="mt-3.5 text-[16px] font-bold text-ink group-hover:text-brand">
                  {p.name}
                </p>
                <p className="mt-1 flex-1 text-[13.5px] leading-relaxed text-body">
                  {p.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Link
            href="/product"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-deep"
          >
            Explore all Jeeym products
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
