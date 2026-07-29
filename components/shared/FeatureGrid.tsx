import type { LucideIcon } from "lucide-react";
import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";

export interface FeatureGridItem {
  title: string;
  copy: string;
  icon?: LucideIcon;
  points?: string[];
}

interface FeatureGridProps {
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  accent?: string;
}

export default function FeatureGrid({
  items,
  columns = 3,
  accent = "#2563EB",
}: FeatureGridProps) {
  return (
    <div
      className={clsx(
        "grid gap-5",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {items.map((item, i) => (
        <Reveal key={item.title} delay={Math.min(i * 0.06, 0.3)}>
          <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
            {item.icon ? (
              <span
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${accent}12`, color: accent }}
                aria-hidden="true"
              >
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </span>
            ) : null}
            <h3 className="text-[17px] font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-body">
              {item.copy}
            </p>
            {item.points ? (
              <ul className="mt-3.5 space-y-1.5">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-[13.5px] text-ink/80"
                  >
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: accent }}
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
