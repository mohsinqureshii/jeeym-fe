"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { ProductPanel, SolutionsPanel, ResourcesPanel } from "./MegaMenu";
import MobileNavigation from "./MobileNavigation";

type MenuId = "product" | "solutions" | "resources";

const menus: { id: MenuId; label: string }[] = [
  { id: "product", label: "Product" },
  { id: "solutions", label: "Solutions" },
  { id: "resources", label: "Resources" },
];

const links = [
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const openMenu = useCallback(
    (id: MenuId) => {
      cancelClose();
      setOpen(id);
    },
    [cancelClose]
  );

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 bg-white transition-[border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-b border-line shadow-[0_1px_8px_rgba(17,24,39,0.04)]"
          : "border-b border-transparent"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo animated />
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {menus.slice(0, 2).map((m) => (
                <li
                  key={m.id}
                  onMouseEnter={() => openMenu(m.id)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={open === m.id}
                    aria-haspopup="true"
                    onClick={() => setOpen(open === m.id ? null : m.id)}
                    className={clsx(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors duration-200",
                      open === m.id
                        ? "bg-brand-faint text-brand"
                        : "text-ink hover:bg-brand-faint"
                    )}
                  >
                    {m.label}
                    <ChevronDown
                      className={clsx(
                        "h-4 w-4 text-body transition-transform duration-200",
                        open === m.id && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-lg px-3 py-2 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-faint"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li
                onMouseEnter={() => openMenu("resources")}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={open === "resources"}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpen(open === "resources" ? null : "resources")
                  }
                  className={clsx(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-[15px] font-medium transition-colors duration-200",
                    open === "resources"
                      ? "bg-brand-faint text-brand"
                      : "text-ink hover:bg-brand-faint"
                  )}
                >
                  Resources
                  <ChevronDown
                    className={clsx(
                      "h-4 w-4 text-body transition-transform duration-200",
                      open === "resources" && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact-sales"
            className="whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-faint"
          >
            Contact sales
          </Link>
          <Link
            href="/login"
            className="whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-faint"
          >
            Sign in
          </Link>
          <Button href="/start" size="md" className="ml-1">
            Start free
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-brand-faint lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mega menu panels */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key={open}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-menu lg:block"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {open === "product" ? <ProductPanel /> : null}
            {open === "solutions" ? <SolutionsPanel /> : null}
            {open === "resources" ? <ResourcesPanel /> : null}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
