"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
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
    <section className="bg-brand-faint py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-display text-ink">
            Modernise every team&apos;s workflow with AI
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Workflows by team"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 scrollbar-none sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
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
                "shrink-0 rounded-full px-5 py-2.5 text-[15px] font-semibold transition-all duration-200",
                active === i
                  ? "bg-brand text-white shadow-[0_2px_10px_rgba(37,99,235,0.3)]"
                  : "border border-line bg-white text-body hover:border-brand/30 hover:text-ink"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={solution.slug}
            role="tabpanel"
            id={`team-panel-${solution.slug}`}
            aria-labelledby={`team-tab-${solution.slug}`}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto mt-8 grid max-w-5xl items-center gap-8 overflow-hidden rounded-2.5xl border border-line bg-white p-7 shadow-panel sm:p-10 lg:grid-cols-[1.2fr_1fr]"
          >
            <div>
              <h3 className="text-heading text-ink">{solution.headline}</h3>
              <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-body">
                {solution.copy}
              </p>
              <ul className="mt-5 space-y-2.5">
                {solution.points.slice(0, 3).map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] font-medium text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-wash">
                      <Check className="h-3 w-3 text-brand" aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={`/solutions/${solution.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-deep"
              >
                Explore Jeeym for {solution.name.toLowerCase()}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-brand-wash via-brand-faint to-[#F4F1FE] p-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-body">
                Most used by {solution.name.toLowerCase()}
              </p>
              <div className="mt-4 space-y-2.5">
                {solution.products.slice(0, 4).map((id) => {
                  const p = productMap[id];
                  return (
                    <div
                      key={id}
                      className="flex items-center gap-3 rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-sm"
                    >
                      <AppIcon product={p} size="sm" />
                      <div className="min-w-0">
                        <p className="text-[14px] font-bold text-ink">{p.name}</p>
                        <p className="truncate text-[12px] text-body">
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
