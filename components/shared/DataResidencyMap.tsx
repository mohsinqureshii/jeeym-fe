"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, MapPin } from "lucide-react";
import clsx from "clsx";

/**
 * Dot-matrix world map. Each row lists [start, end] column ranges of land
 * on a 60-column grid (6° longitude per column, 5° latitude per row).
 */
const landRows: [number, number][][] = [
  [[2, 7], [9, 18], [20, 24], [32, 57]],
  [[2, 7], [8, 19], [20, 24], [30, 33], [34, 57]],
  [[3, 6], [8, 19], [21, 23], [29, 33], [34, 56]],
  [[4, 6], [8, 18], [27, 28], [30, 33], [34, 55]],
  [[7, 17], [27, 35], [36, 54]],
  [[8, 17], [28, 35], [36, 52], [55, 56]],
  [[8, 16], [28, 34], [35, 52], [55, 56]],
  [[9, 15], [28, 33], [34, 50], [54, 55]],
  [[10, 14], [27, 36], [37, 49]],
  [[10, 13], [27, 37], [38, 48]],
  [[11, 13], [27, 38], [40, 46]],
  [[12, 14], [28, 38], [41, 44], [46, 49]],
  [[13, 15], [28, 38], [42, 43], [47, 52]],
  [[14, 16], [29, 38], [48, 53]],
  [[15, 21], [29, 37], [49, 54]],
  [[15, 21], [30, 36], [51, 53]],
  [[15, 22], [30, 36]],
  [[15, 21], [30, 35], [50, 56]],
  [[16, 21], [30, 35], [49, 57]],
  [[16, 20], [31, 34], [49, 57]],
  [[16, 19], [31, 34], [50, 56]],
  [[16, 19], [31, 33], [52, 55]],
  [[17, 19], [32, 33]],
  [[17, 18]],
  [[17, 18]],
  [[17, 17]],
];

const CELL = 12;
const WIDTH = 60 * CELL;
const HEIGHT = landRows.length * CELL;

interface Region {
  id: string;
  name: string;
  /** Percentage position of the pin on the map. */
  left: number;
  top: number;
  badge: string;
  copy: string;
  points: string[];
}

const regions: Region[] = [
  {
    id: "sa",
    name: "Saudi Arabia",
    left: 62.2,
    top: 38,
    badge: "In-country option",
    copy: "Deploy Jeeym within an approved local cloud region in Saudi Arabia, with workplace data stored and processed in-country.",
    points: [
      "In-country hosting option",
      "Dedicated environment available",
      "Designed to support local data residency requirements",
    ],
  },
  {
    id: "ae",
    name: "United Arab Emirates",
    left: 66.5,
    top: 40,
    badge: "In-country option",
    copy: "Host your Jeeym workplace in the UAE with in-country storage and processing options for regulated organisations.",
    points: [
      "In-country hosting option",
      "Dedicated environment available",
      "Compliance-aligned architecture",
    ],
  },
  {
    id: "eu",
    name: "Europe",
    left: 53,
    top: 19,
    badge: "Regional hosting",
    copy: "Choose European regional hosting with data stored and processed within the region your organisation selects.",
    points: [
      "Regional hosting options",
      "Customer-selected data location",
      "Regional backup options",
    ],
  },
  {
    id: "us",
    name: "United States",
    left: 23.5,
    top: 27,
    badge: "Regional hosting",
    copy: "Host your workplace in the United States with regional storage, processing and backup options.",
    points: [
      "Regional hosting options",
      "Customer-selected data location",
      "Dedicated environment available",
    ],
  },
];

export default function DataResidencyMap() {
  const [selected, setSelected] = useState<Region>(regions[0]);
  const reduce = useReducedMotion();

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
      <div className="relative">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="h-auto w-full"
          aria-hidden="true"
        >
          {landRows.map((ranges, row) =>
            ranges.flatMap(([start, end]) =>
              Array.from({ length: end - start + 1 }, (_, i) => {
                const col = start + i;
                return (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * CELL + CELL / 2}
                    cy={row * CELL + CELL / 2}
                    r={3.1}
                    fill="#C9DBF6"
                  />
                );
              })
            )
          )}
        </svg>

        {regions.map((region) => {
          const active = region.id === selected.id;
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelected(region)}
              aria-pressed={active}
              aria-label={`Select region: ${region.name}`}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${region.left}%`, top: `${region.top}%` }}
            >
              <span className="relative flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                {active && !reduce ? (
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand/25" />
                ) : null}
                <span
                  className={clsx(
                    "relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white shadow-card transition-all duration-200 sm:h-7 sm:w-7",
                    active
                      ? "scale-110 bg-brand"
                      : "bg-brand-bright/70 group-hover:bg-brand"
                  )}
                >
                  <MapPin className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                </span>
              </span>
              <span
                className={clsx(
                  "absolute left-1/2 top-full mt-0.5 -translate-x-1/2 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[11px] font-semibold sm:text-[12px]",
                  active ? "bg-brand text-white" : "bg-white/90 text-ink shadow-sm"
                )}
              >
                {region.name}
              </span>
            </button>
          );
        })}
      </div>

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-2.5xl border border-line bg-white p-6 shadow-card sm:p-7"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-wash px-3 py-1 text-[12.5px] font-semibold text-brand">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {selected.badge}
            </span>
            <h3 className="mt-3 text-[22px] font-bold text-ink">
              {selected.name}
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-body">
              {selected.copy}
            </p>
            <ul className="mt-4 space-y-2">
              {selected.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[14px] text-ink/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <p className="mt-4 rounded-xl border border-dashed border-line bg-brand-faint px-4 py-3 text-[13.5px] text-body">
          Additional regions available on request. Region availability is
          confirmed during your deployment assessment.
        </p>
      </div>
    </div>
  );
}
