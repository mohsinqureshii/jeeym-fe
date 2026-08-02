"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import clsx from "clsx";
import AppIcon from "@/components/ui/AppIcon";
import { getSolution } from "@/lib/solutions";
import { productMap } from "@/lib/products";

const teamSlugs = [
  { slug: "leadership", label: "Leadership" },
  { slug: "sales", label: "Sales & CRM" },
  { slug: "operations", label: "Operations" },
  { slug: "human-resources", label: "HR & recruitment" },
  { slug: "it-teams", label: "IT & support" },
  { slug: "customer-support", label: "Customer support" },
];

export default function TeamWorkflowTabs() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const solution = getSolution(teamSlugs[active].slug);
  if (!solution) return null;

  return (
    <section className="bg-gradient-to-b from-[#F1FBF5] to-[#E2F6EB] py-16 sm:py-20 lg:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        {/* Animated panel — left */}
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={solution.slug}
              role="tabpanel"
              id={`team-panel-${solution.slug}`}
              aria-labelledby={`team-tab-${solution.slug}`}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-2.5xl border border-white/80 bg-white p-7 shadow-panel sm:p-9"
            >
              <h3 className="text-heading text-ink">{solution.headline}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-body">
                {solution.copy}
              </p>
              <ul className="mt-5 space-y-2.5">
                {solution.points.slice(0, 3).map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[14.5px] font-medium text-ink"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50">
                      <Check className="h-3 w-3 text-success" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {solution.products.slice(0, 4).map((id) => {
                  const p = productMap[id];
                  return (
                    <span
                      key={id}
                      className="flex items-center gap-2 rounded-full border border-line bg-brand-faint/70 py-1.5 pl-1.5 pr-3.5"
                    >
                      <AppIcon product={p} size="sm" className="h-6 w-6 rounded-md" />
                      <span className="text-[12.5px] font-semibold text-ink">
                        {p.name}
                      </span>
                    </span>
                  );
                })}
              </div>
              <Link
                href={`/solutions/${solution.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-deep"
              >
                Explore Jeeym for {solution.name.toLowerCase()}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Heading + vertical tabs — right */}
        <div className="order-1 lg:order-2">
          <h2 className="text-display text-ink">
            Modernise every team&apos;s workflow with AI
          </h2>
          <div
            role="tablist"
            aria-label="Workflows by team"
            aria-orientation="vertical"
            className="mt-7 flex flex-col gap-1.5"
          >
            {teamSlugs.map((t, i) => (
              <button
                key={t.slug}
                role="tab"
                id={`team-tab-${t.slug}`}
                aria-selected={active === i}
                aria-controls={`team-panel-${t.slug}`}
                onClick={() => setActive(i)}
                className={clsx(
                  "flex items-center justify-between rounded-xl px-4 py-3 text-left text-[15.5px] font-semibold transition-all duration-200",
                  active === i
                    ? "bg-white text-brand shadow-card"
                    : "text-body hover:bg-white/60 hover:text-ink"
                )}
              >
                {t.label}
                <ChevronRight
                  className={clsx(
                    "h-4 w-4 transition-all duration-200",
                    active === i ? "translate-x-0 text-brand" : "-translate-x-1 text-body/40"
                  )}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
