"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { products } from "@/lib/products";
import { LogoMark } from "@/components/ui/Logo";

const SIZE = 440;
const CENTER = SIZE / 2;
const RADIUS = 178;

/** Product ecosystem hub: application icons orbiting the Jeeym core with animated connections. */
export default function ProductOrbit() {
  const reduce = useReducedMotion();
  const orbitProducts = products.filter((p) => p.id !== "ai");

  const positions = orbitProducts.map((p, i) => {
    const angle = (i / orbitProducts.length) * Math.PI * 2 - Math.PI / 2;
    return {
      product: p,
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
    };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[27.5rem]">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#E5EAF0"
          strokeWidth="1.5"
          strokeDasharray="3 6"
        />
        {positions.map(({ product, x, y }, i) => (
          <motion.line
            key={product.id}
            x1={CENTER}
            y1={CENTER}
            x2={x}
            y2={y}
            stroke={product.color}
            strokeOpacity={0.35}
            strokeWidth="1.5"
            strokeDasharray="4 5"
            initial={reduce ? undefined : { pathLength: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease: "easeOut" }}
          />
        ))}
      </svg>

      {/* Centre core */}
      <div
        className="absolute z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-line bg-white shadow-panel"
        style={{ left: "50%", top: "50%" }}
      >
        <LogoMark className="h-11 w-11" />
      </div>

      {/* Orbiting product icons */}
      {positions.map(({ product, x, y }, i) => {
        const Icon = product.icon;
        return (
          <motion.div
            key={product.id}
            className="absolute z-10"
            style={{
              left: `${(x / SIZE) * 100}%`,
              top: `${(y / SIZE) * 100}%`,
            }}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.05 }}
          >
            <Link
              href={product.href}
              aria-label={`Explore Jeeym ${product.name}`}
              className="group flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white shadow-card transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-card-hover"
              >
                <Icon className="h-5 w-5" style={{ color: product.color }} strokeWidth={2} />
              </span>
              <span className="mt-1 rounded-md bg-white/90 px-1 text-[11px] font-semibold text-body opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {product.name}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
