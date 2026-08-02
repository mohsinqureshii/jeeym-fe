"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  ListChecks,
  Mail,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    eyebrow: "Jeeym AI",
    title: "AI help at work, where work happens",
    copy: "Ask questions, draft content and prepare for meetings with an assistant that knows your organisation's context—and respects its permissions.",
    cta: { label: "Explore Jeeym AI", href: "/ai" },
    tint: "from-brand-wash via-white to-[#F4F1FE]",
    visual: (
      <div className="rounded-xl border border-line bg-white p-3.5 shadow-card">
        <p className="flex items-center gap-1.5 text-[11px] font-bold text-brand">
          <Sparkles className="h-3 w-3" aria-hidden="true" /> Jeeym AI
        </p>
        <p className="mt-1.5 text-[13px] font-semibold text-ink">
          Briefing: Customer Success Sync
        </p>
        <ul className="mt-1.5 space-y-1 text-[12px] text-ink/85">
          <li className="flex items-start gap-1.5">
            <Check className="mt-0.5 h-3 w-3 shrink-0 text-success" /> 3 open
            proposals — largest is Almadar
          </li>
          <li className="flex items-start gap-1.5">
            <Check className="mt-0.5 h-3 w-3 shrink-0 text-success" /> 4 of 5
            action items complete
          </li>
        </ul>
      </div>
    ),
  },
  {
    eyebrow: "One workspace",
    title: "Bring all context into one workspace",
    copy: "Email, conversations, meetings, files and knowledge stay linked—so nobody loses the thread switching between tools.",
    cta: { label: "Explore the product", href: "/product" },
    tint: "from-[#F0FDF9] via-white to-brand-wash",
    visual: (
      <div className="space-y-2">
        {[
          { icon: Mail, c: "#2563EB", t: "Weekly Leadership Review — agenda" },
          { icon: FileText, c: "#3B82F6", t: "Q3 Financial Forecast · shared" },
          { icon: ListChecks, c: "#7C3AED", t: "Review forecast → Sarah, Thu" },
        ].map((r) => (
          <div
            key={r.t}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-white px-3 py-2 shadow-sm"
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
              style={{ backgroundColor: `${r.c}14` }}
            >
              <r.icon className="h-3 w-3" style={{ color: r.c }} />
            </span>
            <p className="truncate text-[12px] font-medium text-ink">{r.t}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    eyebrow: "Workflows",
    title: "Turn messages into meetings, documents and tasks",
    copy: "Move from conversation to action in one flow—schedule, assign and summarise without switching applications.",
    cta: { label: "See every application", href: "/product" },
    tint: "from-[#FFF8F0] via-white to-brand-wash",
    visual: (
      <div className="flex items-center justify-between gap-1.5">
        {[
          { icon: Mail, c: "#2563EB", label: "Email" },
          { icon: FileText, c: "#3B82F6", label: "Document" },
          { icon: ListChecks, c: "#7C3AED", label: "Tasks" },
          { icon: Sparkles, c: "#6D5AE6", label: "AI summary" },
        ].map((s, i, arr) => (
          <div key={s.label} className="flex flex-1 items-center gap-1.5">
            <div className="flex flex-col items-center gap-1">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white shadow-sm"
              >
                <s.icon className="h-4 w-4" style={{ color: s.c }} />
              </span>
              <span className="whitespace-nowrap text-[10px] font-semibold text-body">
                {s.label}
              </span>
            </div>
            {i < arr.length - 1 ? (
              <span className="mb-4 h-px flex-1 border-t border-dashed border-brand/40" />
            ) : null}
          </div>
        ))}
      </div>
    ),
  },
];

export default function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const width = card ? card.clientWidth + 24 : 420;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-display text-ink">
              How every team runs smarter with Jeeym
            </h2>
            <Button href="/start" className="mt-6">
              Start free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-3 scrollbar-none sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={Math.min(i * 0.08, 0.24)}
              className="w-[85%] min-w-[85%] snap-center sm:w-[60%] sm:min-w-[60%] lg:w-auto lg:min-w-0"
            >
              <article
                className={`flex h-full flex-col rounded-2.5xl border border-line bg-gradient-to-br p-7 shadow-card transition-shadow duration-200 hover:shadow-card-hover ${card.tint}`}
              >
                <p className="eyebrow">{card.eyebrow}</p>
                <h3 className="mt-3 text-[22px] font-bold leading-snug tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  {card.copy}
                </p>
                <div className="mt-5 flex-1">{card.visual}</div>
                <Link
                  href={card.cta.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-deep"
                >
                  {card.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Carousel arrows (mobile / tablet where the track scrolls) */}
        <div className="mt-5 flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous card"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors hover:bg-brand-faint"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next card"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-colors hover:bg-brand-faint"
          >
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
