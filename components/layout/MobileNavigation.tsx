"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import AppIcon from "@/components/ui/AppIcon";
import { products } from "@/lib/products";
import { solutionGroups, solutionsByGroup } from "@/lib/solutions";
import { resourcesMenu } from "@/lib/navigation";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

function Accordion({
  label,
  children,
  defaultOpen = false,
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold text-ink"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
      >
        {label}
        <ChevronDown
          className={clsx(
            "h-5 w-5 text-body transition-transform duration-200",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  // Lock body scroll while the menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/30 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white lg:hidden"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
              <Logo />
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-brand-faint"
                aria-label="Close navigation menu"
                onClick={onClose}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex-1 overflow-y-auto px-5 pb-8"
            >
              <Accordion label="Product" defaultOpen>
                <ul className="space-y-1">
                  {products.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={p.href}
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-xl p-2 hover:bg-brand-faint"
                      >
                        <AppIcon product={p} size="sm" />
                        <span className="text-[15px] font-medium text-ink">
                          {p.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/product"
                      onClick={onClose}
                      className="mt-1 block rounded-xl p-2 text-[15px] font-semibold text-brand hover:bg-brand-faint"
                    >
                      Explore all Jeeym products →
                    </Link>
                  </li>
                </ul>
              </Accordion>

              <Accordion label="Solutions">
                {solutionGroups.map((group) => (
                  <div key={group} className="mb-3">
                    <p className="px-2 pb-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-body">
                      {group}
                    </p>
                    <ul>
                      {solutionsByGroup(group).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/solutions/${s.slug}`}
                            onClick={onClose}
                            className="block rounded-lg px-2 py-1.5 text-[15px] text-ink hover:bg-brand-faint"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Accordion>

              <Accordion label="Resources">
                <ul>
                  {resourcesMenu.map((r) => (
                    <li key={r.label}>
                      <Link
                        href={r.href}
                        onClick={onClose}
                        className="block rounded-lg px-2 py-1.5 text-[15px] text-ink hover:bg-brand-faint"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>

              <div className="border-b border-line">
                <Link
                  href="/security"
                  onClick={onClose}
                  className="block py-4 text-[17px] font-semibold text-ink"
                >
                  Security
                </Link>
              </div>
              <div className="border-b border-line">
                <Link
                  href="/pricing"
                  onClick={onClose}
                  className="block py-4 text-[17px] font-semibold text-ink"
                >
                  Pricing
                </Link>
              </div>
              <div className="border-b border-line">
                <Link
                  href="/contact-sales"
                  onClick={onClose}
                  className="block py-4 text-[17px] font-semibold text-ink"
                >
                  Contact sales
                </Link>
              </div>
            </nav>

            <div className="shrink-0 space-y-3 border-t border-line p-5">
              <Button href="/start" size="lg" className="w-full">
                Start free
              </Button>
              <Button href="/login" variant="secondary" size="lg" className="w-full">
                Sign in
              </Button>
              <p className="text-center text-[13px] text-body">
                Free for up to 5 users. No credit card required.
              </p>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
