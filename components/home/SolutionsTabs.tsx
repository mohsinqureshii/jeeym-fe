"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building,
  Landmark,
  Rocket,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import clsx from "clsx";
import Button from "@/components/ui/Button";

const tabs = [
  {
    id: "startups",
    label: "Startups",
    icon: Rocket,
    headline: "Move quickly without building a complicated software stack",
    copy: "Give your team email, chat, meetings, files and productivity tools from day one.",
    href: "/solutions/startups",
  },
  {
    id: "growing",
    label: "Growing businesses",
    icon: TrendingUp,
    headline: "Create structure as your organisation scales",
    copy: "Bring teams, knowledge and daily work into one connected system.",
    href: "/solutions/mid-market",
  },
  {
    id: "enterprises",
    label: "Enterprises",
    icon: Building,
    headline: "Control collaboration across complex organisations",
    copy: "Manage identities, permissions, security, data location and workplace applications centrally.",
    href: "/solutions/enterprises",
  },
  {
    id: "regulated",
    label: "Regulated organisations",
    icon: ShieldCheck,
    headline: "Meet workplace requirements without sacrificing usability",
    copy: "Use regional hosting, in-country data residency, dedicated environments and enterprise governance controls.",
    href: "/solutions/secure-communication",
  },
  {
    id: "government",
    label: "Government",
    icon: Landmark,
    headline: "A secure digital workplace with flexible deployment options",
    copy: "Support public-sector collaboration, data control, organisational governance and local hosting requirements.",
    href: "/solutions/government",
  },
];

export default function SolutionsTabs() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tab = tabs[active];
  const TabIcon = tab.icon;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Solutions by organisation type"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 scrollbar-none sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {tabs.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            id={`solutions-tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`solutions-panel-${t.id}`}
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
          key={tab.id}
          role="tabpanel"
          id={`solutions-panel-${tab.id}`}
          aria-labelledby={`solutions-tab-${tab.id}`}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto mt-8 max-w-3xl rounded-2.5xl border border-line bg-white p-8 text-center shadow-card sm:p-12"
        >
          <span
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-wash text-brand"
            aria-hidden="true"
          >
            <TabIcon className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <h3 className="mt-5 text-heading text-ink">{tab.headline}</h3>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-body">
            {tab.copy}
          </p>
          <Button href={tab.href} variant="secondary" className="mt-7">
            Explore solutions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
