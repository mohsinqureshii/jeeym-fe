"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  ListChecks,
  Mail,
  MapPin,
  Mic,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";

/* ---------- Animated card visuals ---------- */

function AIVisual({ reduce }: { reduce: boolean | null }) {
  const prompts = [
    "Prepare me for my meeting with the sales team.",
    "Summarise today's leadership conversations.",
    "Turn this document into a presentation.",
  ];
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-card backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <motion.span
          animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-app-chat"
        >
          <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
        </motion.span>
        <p className="text-[13px] font-bold text-ink">Jeeym AI</p>
      </div>
      <div className="relative mt-3 h-10 overflow-hidden">
        {prompts.map((p, i) => (
          <motion.p
            key={p}
            className="absolute inset-x-0 rounded-lg bg-brand-faint px-3 py-2 text-[12.5px] font-medium text-ink"
            animate={
              reduce
                ? undefined
                : { opacity: [0, 1, 1, 0], y: [14, 0, 0, -12] }
            }
            initial={{ opacity: i === 0 && reduce ? 1 : 0 }}
            transition={{
              repeat: Infinity,
              duration: 9,
              times: [0, 0.08, 0.3, 0.36],
              delay: i * 3,
              ease: "easeInOut",
            }}
          >
            “{p}”
          </motion.p>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {[92, 74, 58].map((w, i) => (
          <motion.span
            key={i}
            className="block h-2 origin-left rounded-full bg-gradient-to-r from-brand/25 to-app-chat/25"
            style={{ width: `${w}%` }}
            animate={reduce ? undefined : { scaleX: [0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: 0.6 + i * 0.25,
              repeatDelay: 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function WorkspaceVisual({ reduce }: { reduce: boolean | null }) {
  const rows = [
    { icon: Mail, c: "#2563EB", t: "Weekly Leadership Review — agenda" },
    { icon: FileText, c: "#3B82F6", t: "Q3 Financial Forecast · live doc" },
    { icon: ListChecks, c: "#7C3AED", t: "Review forecast → Sarah · Thu" },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r, i) => (
        <motion.div
          key={r.t}
          className="flex items-center gap-2.5 rounded-xl border border-white/70 bg-white/85 px-3.5 py-2.5 shadow-sm backdrop-blur-sm"
          animate={
            reduce
              ? undefined
              : { y: [0, -5, 0], boxShadow: [
                  "0 1px 2px rgba(17,24,39,0.05)",
                  "0 10px 24px rgba(37,99,235,0.16)",
                  "0 1px 2px rgba(17,24,39,0.05)",
                ] }
          }
          transition={{
            repeat: Infinity,
            duration: 3.6,
            delay: i * 1.2,
            ease: "easeInOut",
          }}
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${r.c}14` }}
          >
            <r.icon className="h-4 w-4" style={{ color: r.c }} aria-hidden="true" />
          </span>
          <p className="truncate text-[12.5px] font-semibold text-ink">{r.t}</p>
          <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-brand/50" aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  );
}

function WorkflowVisual({ reduce }: { reduce: boolean | null }) {
  const steps = [
    { icon: Mail, c: "#2563EB", label: "Email" },
    { icon: FileText, c: "#3B82F6", label: "Document" },
    { icon: ListChecks, c: "#7C3AED", label: "Tasks" },
    { icon: Sparkles, c: "#059669", label: "AI summary" },
  ];
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-card backdrop-blur-sm">
      <div className="relative flex items-center justify-between">
        {/* Connector line with a travelling pulse */}
        <span className="absolute left-5 right-5 top-[19px] h-px border-t border-dashed border-app-meetings/50" aria-hidden="true" />
        {!reduce ? (
          <motion.span
            className="absolute top-[15px] z-10 h-2.5 w-2.5 rounded-full bg-app-meetings shadow-[0_0_0_4px_rgba(5,150,105,0.15)]"
            animate={{ left: ["4%", "92%"] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            aria-hidden="true"
          />
        ) : null}
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            className="relative z-20 flex flex-col items-center gap-1.5"
            animate={reduce ? undefined : { scale: [1, 1.12, 1] }}
            transition={{
              repeat: Infinity,
              duration: 3.2,
              delay: i * 0.8,
              times: [0, 0.12, 0.3],
              ease: "easeOut",
            }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white shadow-sm">
              <s.icon className="h-5 w-5" style={{ color: s.c }} aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap text-[10.5px] font-semibold text-body">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
      <p className="mt-3.5 rounded-lg bg-green-50 px-3 py-2 text-center text-[11.5px] font-semibold text-success">
        3 tasks assigned · summary posted to #leadership
      </p>
    </div>
  );
}

function MeetingVisual({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-card backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[
            { i: "SA", c: "#2563EB" },
            { i: "OK", c: "#7C3AED" },
            { i: "LH", c: "#059669" },
          ].map((p) => (
            <span
              key={p.i}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white"
              style={{ backgroundColor: p.c }}
            >
              {p.i}
            </span>
          ))}
          <span className="flex items-center gap-1 text-[11px] font-medium text-body">
            <Mic className="h-3 w-3 text-app-meetings" aria-hidden="true" />
            Sarah is speaking
          </span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-500">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-red-500"
            animate={reduce ? undefined : { opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            aria-hidden="true"
          />
          REC
        </span>
      </div>
      <div className="mt-3 rounded-xl bg-orange-50/80 p-3">
        <p className="flex items-center gap-1.5 text-[11px] font-bold text-app-calendar">
          <Sparkles className="h-3 w-3" aria-hidden="true" /> AI meeting notes
        </p>
        <div className="mt-2 space-y-1.5">
          {["Rollout agreed as phased from March", "Daniel to confirm regional pricing", "Next review booked for Thursday"].map(
            (line, i) => (
              <motion.p
                key={line}
                className="flex origin-left items-start gap-1.5 text-[11.5px] text-ink/85"
                animate={reduce ? undefined : { opacity: [0, 1], x: [-8, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3.4,
                  duration: 0.5,
                  delay: 0.4 + i * 0.9,
                }}
              >
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-success" aria-hidden="true" />
                {line}
              </motion.p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function SecurityVisual({ reduce }: { reduce: boolean | null }) {
  const regions = [
    { name: "Saudi Arabia", badge: "In-country" },
    { name: "United Arab Emirates", badge: "In-country" },
    { name: "Europe", badge: "Regional" },
  ];
  return (
    <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-card backdrop-blur-sm">
      <div className="flex items-center justify-center py-2">
        <span className="relative flex h-16 w-16 items-center justify-center">
          {!reduce
            ? [0, 1].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute inset-0 rounded-full border-2 border-app-drive/40"
                  animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.6,
                    delay: ring * 1.3,
                    ease: "easeOut",
                  }}
                  aria-hidden="true"
                />
              ))
            : null}
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-app-drive to-app-meetings">
            <ShieldCheck className="h-7 w-7 text-white" aria-hidden="true" />
          </span>
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        {regions.map((r, i) => (
          <motion.span
            key={r.name}
            className="flex items-center gap-2 rounded-lg bg-teal-50/80 px-3 py-1.5 text-[11.5px] font-semibold text-ink/85"
            animate={
              reduce
                ? undefined
                : { backgroundColor: ["#F0FDFA", "#CCFBF1", "#F0FDFA"] }
            }
            transition={{ repeat: Infinity, duration: 4.2, delay: i * 1.4 }}
          >
            <MapPin className="h-3 w-3 text-app-drive" aria-hidden="true" />
            {r.name}
            <span className="ml-auto text-[10px] font-bold uppercase tracking-wide text-app-drive">
              {r.badge}
            </span>
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */

interface CarouselCard {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  copy: string;
  cta: { label: string; href: string };
  bg: string;
  visual: (reduce: boolean | null) => JSX.Element;
}

const cards: CarouselCard[] = [
  {
    eyebrow: "Jeeym AI",
    eyebrowColor: "#7C3AED",
    title: "Put AI to work where work happens",
    copy: "Ask questions, draft content and prepare for meetings with an assistant that knows your organisation's context—and respects its permissions.",
    cta: { label: "Explore Jeeym AI", href: "/ai" },
    bg: "from-[#F3EEFF] via-[#FAF7FF] to-[#EDE9FE]",
    visual: (r) => <AIVisual reduce={r} />,
  },
  {
    eyebrow: "One workspace",
    eyebrowColor: "#2563EB",
    title: "Bring all context into one workspace",
    copy: "Email, conversations, meetings, files and knowledge stay linked—so nobody loses the thread switching between tools.",
    cta: { label: "Explore the product", href: "/product" },
    bg: "from-[#E9F2FF] via-[#F6FAFF] to-[#DBEAFE]",
    visual: (r) => <WorkspaceVisual reduce={r} />,
  },
  {
    eyebrow: "AI workflows",
    eyebrowColor: "#059669",
    title: "Get more done with connected workflows",
    copy: "Move from conversation to action in one flow—schedule, assign and summarise without switching applications.",
    cta: { label: "See every application", href: "/product" },
    bg: "from-[#E9FBF1] via-[#F5FDF8] to-[#D7F5E4]",
    visual: (r) => <WorkflowVisual reduce={r} />,
  },
  {
    eyebrow: "Meetings",
    eyebrowColor: "#EA7317",
    title: "Meetings that write their own notes",
    copy: "Recordings, transcripts and AI notes turn every meeting into decisions and action items your team can use.",
    cta: { label: "Explore Meetings", href: "/meetings" },
    bg: "from-[#FFF1E4] via-[#FFF9F2] to-[#FFE8D6]",
    visual: (r) => <MeetingVisual reduce={r} />,
  },
  {
    eyebrow: "Trust",
    eyebrowColor: "#0D9488",
    title: "Enterprise security, local data residency",
    copy: "Encryption, governance and audit logs everywhere—with regional and in-country hosting options for regulated organisations.",
    cta: { label: "Explore security", href: "/security" },
    bg: "from-[#E4FAF7] via-[#F3FDFB] to-[#CFF5EE]",
    visual: (r) => <SecurityVisual reduce={r} />,
  },
];

/* ---------- Carousel ---------- */

export default function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8);
  };

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const width = card ? card.clientWidth + 24 : 460;
    track.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Reveal>
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-display text-ink">
              How every team runs smarter with Jeeym
            </h2>
            <Link
              href="/start"
              className="mt-7 inline-flex h-[52px] items-center gap-2 rounded-full bg-gradient-to-r from-brand via-brand-bright to-app-chat px-8 text-base font-semibold text-white shadow-[0_4px_20px_rgba(59,130,246,0.35)] transition-all duration-200 hover:shadow-[0_6px_28px_rgba(59,130,246,0.45)] active:translate-y-px"
            >
              Start free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* Full-bleed track: first card aligns with the page container, the rest bleed to the edge */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-none px-[max(1.25rem,calc((100vw_-_76rem)/2_+_2.5rem))] scroll-px-[max(1.25rem,calc((100vw_-_76rem)/2_+_2.5rem))]"
      >
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: Math.min(i * 0.08, 0.24) }}
            className={clsx(
              "flex w-[86vw] max-w-[27rem] shrink-0 snap-center flex-col rounded-[1.75rem] bg-gradient-to-br p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:w-[26rem] sm:snap-start sm:p-8 lg:w-[28rem]",
              card.bg
            )}
          >
            <p
              className="text-[14px] font-bold"
              style={{ color: card.eyebrowColor }}
            >
              {card.eyebrow}
            </p>
            <h3 className="mt-2.5 text-[24px] font-bold leading-snug tracking-tight text-ink">
              {card.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">
              {card.copy}
            </p>
            <Link
              href={card.cta.href}
              className="mt-5 inline-flex h-10 w-fit items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-5 text-[14px] font-semibold text-ink backdrop-blur-sm transition-colors duration-200 hover:bg-white"
            >
              {card.cta.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <div className="mt-7 flex flex-1 flex-col justify-end">
              {card.visual(reduce)}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Arrows */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous card"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-200 hover:bg-brand-faint disabled:opacity-35"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next card"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-200 hover:bg-brand-faint disabled:opacity-35"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
