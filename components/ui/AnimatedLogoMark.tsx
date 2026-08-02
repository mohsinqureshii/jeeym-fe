"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { LogoMark, type LogoVariant } from "./LogoMark";

type Shape =
  | { el: "rect"; x: number; y: number; width: number; height: number; rx: number; transform?: string }
  | { el: "path"; d: string }
  | { el: "circle"; cx: number; cy: number; r: number }
  | { el: "line"; x1: number; y1: number; x2: number; y2: number };

interface Stage {
  name: string;
  hold: number;
  shapes: Shape[];
}

/** Logo mark → email → chat → video call → calendar → scheduling. */
const stages: Stage[] = [
  {
    name: "Jeeym",
    hold: 3200,
    shapes: [
      { el: "rect", x: 3.2, y: 13.6, width: 7.6, height: 7.6, rx: 2.6, transform: "rotate(-14 7 17.4)" },
      { el: "rect", x: 9.8, y: 2.6, width: 9.2, height: 15.6, rx: 3.4, transform: "rotate(12 14.4 10.4)" },
    ],
  },
  {
    name: "Email",
    hold: 1700,
    shapes: [
      { el: "rect", x: 2, y: 4, width: 20, height: 16, rx: 2.5 },
      { el: "path", d: "m22 7-10 5L2 7" },
    ],
  },
  {
    name: "Chat",
    hold: 1700,
    shapes: [
      {
        el: "path",
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      },
    ],
  },
  {
    name: "Video call",
    hold: 1700,
    shapes: [
      { el: "path", d: "m22 8-6 4 6 4V8Z" },
      { el: "rect", x: 2, y: 6, width: 14, height: 12, rx: 2.5 },
    ],
  },
  {
    name: "Calendar",
    hold: 1700,
    shapes: [
      { el: "rect", x: 3, y: 4, width: 18, height: 18, rx: 2.5 },
      { el: "line", x1: 16, y1: 2, x2: 16, y2: 6 },
      { el: "line", x1: 8, y1: 2, x2: 8, y2: 6 },
      { el: "line", x1: 3, y1: 10, x2: 21, y2: 10 },
    ],
  },
  {
    name: "Scheduling",
    hold: 1700,
    shapes: [
      { el: "circle", cx: 12, cy: 12, r: 10 },
      { el: "path", d: "M12 6v6l4 2" },
    ],
  },
];

interface AnimatedLogoMarkProps {
  className?: string;
  variant?: LogoVariant;
}

export default function AnimatedLogoMark({
  className,
  variant = "color",
}: AnimatedLogoMarkProps) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(0);
  // False until the first cycle so the server-rendered logo is visible
  // before hydration instead of waiting at pathLength 0.
  const [cycled, setCycled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => {
      setCycled(true);
      setStage((s) => (s + 1) % stages.length);
    }, stages[stage].hold);
    return () => clearTimeout(t);
  }, [stage, reduce]);

  if (reduce) {
    return <LogoMark className={className} variant={variant} />;
  }

  const stroke = variant === "white" ? "#FFFFFF" : "url(#jy-anim-grad)";
  const current = stages[stage];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={clsx("h-8 w-8", className)}
      role="img"
      aria-label={`Jeeym — ${current.name}`}
    >
      {variant === "color" ? (
        <defs>
          <linearGradient id="jy-anim-grad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4ADE80" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      ) : null}
      <AnimatePresence mode="wait">
        <motion.g
          key={stage}
          initial={cycled ? { opacity: 0, scale: 0.7, rotate: -10 } : false}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.75, rotate: 8 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{ transformOrigin: "12px 12px" }}
          stroke={stroke}
          strokeWidth={2.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {current.shapes.map((shape, i) => {
            const draw = {
              initial: cycled ? { pathLength: 0, opacity: 0 } : false,
              animate: { pathLength: 1, opacity: 1 },
              transition: { duration: 0.5, delay: 0.08 + i * 0.08 },
            } as const;
            switch (shape.el) {
              case "rect":
                return (
                  <motion.rect
                    key={i}
                    x={shape.x}
                    y={shape.y}
                    width={shape.width}
                    height={shape.height}
                    rx={shape.rx}
                    transform={shape.transform}
                    {...draw}
                  />
                );
              case "path":
                return <motion.path key={i} d={shape.d} {...draw} />;
              case "circle":
                return (
                  <motion.circle key={i} cx={shape.cx} cy={shape.cy} r={shape.r} {...draw} />
                );
              case "line":
                return (
                  <motion.line
                    key={i}
                    x1={shape.x1}
                    y1={shape.y1}
                    x2={shape.x2}
                    y2={shape.y2}
                    {...draw}
                  />
                );
            }
          })}
        </motion.g>
      </AnimatePresence>
    </svg>
  );
}
