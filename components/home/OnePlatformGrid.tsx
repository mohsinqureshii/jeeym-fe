"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/lib/products";

export default function OnePlatformGrid() {
  const tiles = products.filter((p) => p.id !== "ai");
  const ai = products.find((p) => p.id === "ai")!;
  const reduce = useReducedMotion();

  // One application takes the spotlight at a time.
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((v) => (v + 1) % tiles.length), 1100);
    return () => clearInterval(t);
  }, [reduce, tiles.length]);

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
            <motion.span
              animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-app-chat"
            >
              <Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
            </motion.span>
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

        {/* Animated application grid — right */}
        <div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {tiles.map((p, i) => {
              const isActive = !reduce && i === active;
              const Icon = p.icon;
              return (
                <Reveal
                  key={p.id}
                  x={28}
                  y={0}
                  delay={Math.min((i % 3) * 0.05 + Math.floor(i / 3) * 0.04, 0.3)}
                >
                  <Link href={p.href} className="group block">
                    <motion.span
                      animate={
                        reduce
                          ? undefined
                          : {
                              y: isActive ? -4 : 0,
                              scale: isActive ? 1.04 : 1,
                            }
                      }
                      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="flex items-center gap-2.5 rounded-xl border bg-white px-3.5 py-3 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:shadow-card"
                      style={{
                        borderColor: isActive ? `${p.color}55` : "#E5EAF0",
                        boxShadow: isActive
                          ? `0 12px 28px ${p.color}2E`
                          : "0 1px 2px rgba(17,24,39,0.04)",
                      }}
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-500"
                        style={{
                          backgroundColor: isActive ? p.color : `${p.color}14`,
                        }}
                      >
                        <Icon
                          className="h-4 w-4 transition-colors duration-500"
                          style={{ color: isActive ? "#FFFFFF" : p.color }}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="truncate text-[14px] font-bold text-ink group-hover:text-brand">
                        {p.name}
                      </span>
                    </motion.span>
                  </Link>
                </Reveal>
              );
            })}
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
