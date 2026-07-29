"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, productCategories, productMap } from "@/lib/products";
import { solutionGroups, solutionsByGroup } from "@/lib/solutions";
import { resourcesMenu } from "@/lib/navigation";
import AppIcon from "@/components/ui/AppIcon";

export function ProductPanel() {
  return (
    <div className="container-site py-8">
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
        {productCategories.map((cat) => (
          <div key={cat.label}>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-body">
              {cat.label}
            </p>
            <ul className="space-y-1">
              {cat.ids.map((id) => {
                const p = productMap[id];
                return (
                  <li key={id}>
                    <Link
                      href={p.href}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors duration-200 hover:bg-brand-faint"
                    >
                      <AppIcon product={p} size="md" />
                      <span>
                        <span className="block text-[15px] font-semibold text-ink group-hover:text-brand">
                          {p.name}
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-body">
                          {p.tagline}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-7 border-t border-line pt-5">
        <Link
          href="/product"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand transition-colors hover:text-brand-deep"
        >
          Explore all Jeeym products
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function SolutionsPanel() {
  return (
    <div className="container-site py-8">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
        {solutionGroups.map((group) => (
          <div key={group}>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-body">
              {group}
            </p>
            <ul className="space-y-0.5">
              {solutionsByGroup(group).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="block rounded-lg px-2.5 py-2 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-faint hover:text-brand"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-7 border-t border-line pt-5">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-brand transition-colors hover:text-brand-deep"
        >
          Explore all solutions
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function ResourcesPanel() {
  return (
    <div className="container-site py-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_22rem]">
        <div>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-body">
            Resources
          </p>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-0.5 sm:grid-cols-2">
            {resourcesMenu.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2.5 py-2 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-faint hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/resources#migration"
          className="group flex flex-col justify-between rounded-2xl bg-brand-wash p-6 transition-shadow duration-200 hover:shadow-card"
        >
          <div>
            <p className="text-[17px] font-bold text-ink">
              Move your organisation to Jeeym
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-body">
              Get migration assistance for email, files, calendars and users.
            </p>
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-brand">
            Explore migration
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}

export { products };
