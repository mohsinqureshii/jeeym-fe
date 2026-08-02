"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  GitBranch,
  Layers,
  ListChecks,
  Mail,
  MapPin,
  Mic,
  ShieldCheck,
  Sparkles,
  Video,
} from "lucide-react";
import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";

/** Loops 0..length-1 every `ms`; stays at 0 under reduced motion. */
function useTick(length: number, ms: number, reduce: boolean | null) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms, reduce]);
  return reduce ? 0 : i;
}

/* ---------- Card visuals ---------- */

function AIVisual({ reduce }: { reduce: boolean | null }) {
  const pairs = [
    {
      q: "Prepare me for my meeting with the sales team.",
      a: [
        "3 open proposals — Almadar is the largest",
        "4 of 5 action items complete",
        "Talking point: Riyadh hosting timeline",
      ],
    },
    {
      q: "Summarise today's leadership conversations.",
      a: [
        "Q3 forecast approved for Thursday",
        "Expansion moved to planning phase",
        "2 hiring requests need sign-off",
      ],
    },
    {
      q: "Turn this document into a presentation.",
      a: [
        "9 slides drafted with speaker notes",
        "Charts imported from the forecast",
        "Ready to review in Presentations",
      ],
    },
  ];
  const idx = useTick(pairs.length, 4400, reduce);
  const pair = pairs[idx];

  return (
    <div className="flex h-full flex-col justify-end gap-2.5">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-full flex-col justify-end gap-2.5"
        >
          <motion.p
            initial={reduce ? false : { opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="ml-auto w-fit max-w-[92%] rounded-2xl rounded-br-md bg-gradient-to-r from-brand to-app-chat px-4 py-2.5 text-[13.5px] font-medium text-white shadow-[0_6px_18px_rgba(109,90,230,0.35)]"
          >
            {pair.q}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="w-full rounded-2xl rounded-bl-md border border-white/80 bg-white/95 p-4 shadow-card backdrop-blur-sm"
          >
            <p className="flex items-center gap-1.5 text-[12px] font-bold text-app-ai">
              <motion.span
                animate={reduce ? undefined : { rotate: [0, 18, -12, 0], scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="inline-flex"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              </motion.span>
              Jeeym AI
            </p>
            <ul className="mt-2 space-y-1.5">
              {pair.a.map((line, i) => (
                <motion.li
                  key={line}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.65 + i * 0.3 }}
                  className="flex items-start gap-2 text-[12.5px] font-medium text-ink/85"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
                  {line}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function WorkspaceVisual({ reduce }: { reduce: boolean | null }) {
  const rows = [
    { icon: Mail, c: "#2563EB", t: "Weekly Leadership Review — agenda", s: "Mail · 09:12" },
    { icon: FileText, c: "#0EA5E9", t: "Q3 Financial Forecast", s: "Documents · live" },
    { icon: ListChecks, c: "#7C3AED", t: "Review forecast → Sarah", s: "Tasks · due Thu" },
  ];
  const active = useTick(rows.length, 1700, reduce);

  return (
    <div className="relative flex h-full flex-col justify-end">
      {/* Connector spine with travelling pulse */}
      <span
        className="absolute bottom-8 left-[30px] top-3 w-px bg-gradient-to-b from-brand/10 via-brand/40 to-app-chat/30"
        aria-hidden="true"
      />
      {!reduce ? (
        <motion.span
          className="absolute left-[26px] z-10 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_0_5px_rgba(37,99,235,0.18)]"
          animate={{ top: ["6%", "78%"] }}
          transition={{ repeat: Infinity, duration: 5.1, ease: "easeInOut" }}
          aria-hidden="true"
        />
      ) : null}
      <div className="space-y-3">
        {rows.map((r, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={r.t}
              animate={
                reduce
                  ? undefined
                  : {
                      scale: isActive ? 1.03 : 1,
                      y: isActive ? -3 : 0,
                    }
              }
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={clsx(
                "relative flex items-center gap-3 rounded-2xl border bg-white/95 px-4 py-3 backdrop-blur-sm transition-shadow duration-500",
                isActive
                  ? "border-brand/30 shadow-[0_14px_32px_rgba(37,99,235,0.22)]"
                  : "border-white/80 shadow-sm"
              )}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-500"
                style={{ backgroundColor: isActive ? r.c : `${r.c}14` }}
              >
                <r.icon
                  className="h-5 w-5 transition-colors duration-500"
                  style={{ color: isActive ? "#fff" : r.c }}
                  aria-hidden="true"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] font-bold text-ink">{r.t}</p>
                <p className="truncate text-[11.5px] text-body">{r.s}</p>
              </div>
              <AnimatePresence>
                {isActive ? (
                  <motion.span
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 rounded-full bg-brand-wash px-2.5 py-1 text-[10.5px] font-bold text-brand"
                  >
                    Linked
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-3.5 text-center text-[11.5px] font-semibold text-brand/70">
        One thread of context — no copy-paste between tools
      </p>
    </div>
  );
}

function WorkflowVisual({ reduce }: { reduce: boolean | null }) {
  const steps = [
    { icon: Mail, c: "#2563EB", label: "Email" },
    { icon: FileText, c: "#0EA5E9", label: "Document" },
    { icon: ListChecks, c: "#7C3AED", label: "Tasks" },
    { icon: Sparkles, c: "#059669", label: "Summary" },
  ];
  // 0..3 = executing step, 4 = everything done, then loop
  const phase = useTick(steps.length + 1, 1300, reduce);
  const done = phase === steps.length;

  return (
    <div className="flex h-full flex-col justify-end">
      <div className="rounded-2xl border border-white/80 bg-white/95 p-5 shadow-card backdrop-blur-sm">
        <div className="relative flex items-start justify-between">
          <span
            className="absolute left-6 right-6 top-6 h-0.5 rounded-full bg-line/80"
            aria-hidden="true"
          />
          <motion.span
            className="absolute left-6 top-6 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand via-app-chat to-app-meetings"
            style={{ right: "1.5rem" }}
            animate={
              reduce
                ? { scaleX: 1 }
                : { scaleX: done ? 1 : phase / (steps.length - 1) }
            }
            transition={{ duration: 0.9, ease: "easeInOut" }}
            aria-hidden="true"
          />
          {steps.map((s, i) => {
            const isDone = done || i < phase;
            const isActive = !done && i === phase;
            return (
              <div key={s.label} className="relative z-10 flex w-12 flex-col items-center gap-1.5">
                <motion.span
                  animate={
                    reduce
                      ? undefined
                      : {
                          scale: isActive ? 1.18 : 1,
                          boxShadow: isActive
                            ? `0 8px 22px ${s.c}55`
                            : "0 1px 2px rgba(17,24,39,0.06)",
                        }
                  }
                  transition={{ duration: 0.4 }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white"
                >
                  <s.icon
                    className="h-5 w-5 transition-colors duration-300"
                    style={{ color: isDone || isActive ? s.c : "#9AA5B1" }}
                    aria-hidden="true"
                  />
                  <AnimatePresence>
                    {isDone ? (
                      <motion.span
                        initial={reduce ? false : { scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.25, type: "spring", stiffness: 400, damping: 20 }}
                        className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-success ring-2 ring-white"
                      >
                        <Check className="h-3 w-3 text-white" aria-hidden="true" />
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </motion.span>
                <span className="whitespace-nowrap text-[11px] font-semibold text-body">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 h-9">
          <AnimatePresence mode="wait">
            <motion.p
              key={done ? "done" : `step-${phase}`}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "flex h-9 items-center justify-center rounded-xl text-[12px] font-bold",
                done ? "bg-green-50 text-success" : "bg-brand-faint text-brand"
              )}
            >
              {done
                ? "✓ 3 tasks assigned · summary posted to #leadership"
                : ["Customer email arrives…", "Proposal drafted together…", "Owners and deadlines set…", "Jeeym AI writes the summary…"][phase]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MeetingVisual({ reduce }: { reduce: boolean | null }) {
  const people = [
    { i: "SA", n: "Sarah", c: "#2563EB" },
    { i: "OK", n: "Omar", c: "#7C3AED" },
    { i: "LH", n: "Lina", c: "#059669" },
  ];
  const notes = [
    "Rollout agreed as phased from March",
    "Daniel to confirm regional pricing",
    "Next review booked for Thursday",
  ];
  const t = useTick(4, 2100, reduce);
  const speaker = t % people.length;
  const shown = reduce ? notes.length : t;

  return (
    <div className="flex h-full flex-col justify-end gap-2.5">
      {/* Video strip */}
      <div className="grid grid-cols-3 gap-2">
        {people.map((p, i) => {
          const speaking = i === speaker;
          return (
            <motion.div
              key={p.i}
              animate={reduce ? undefined : { scale: speaking ? 1.04 : 1 }}
              transition={{ duration: 0.4 }}
              className={clsx(
                "relative flex aspect-[4/3] items-center justify-center rounded-xl bg-[#101724] transition-shadow duration-500",
                speaking && "shadow-[0_10px_26px_rgba(5,150,105,0.35)] ring-2 ring-app-meetings"
              )}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: p.c }}
              >
                {p.i}
              </span>
              <span className="absolute bottom-1 left-1.5 flex items-center gap-1 text-[9.5px] font-medium text-white/85">
                {p.n}
              </span>
              {speaking && !reduce ? (
                <span className="absolute bottom-1 right-1.5 flex items-end gap-[2px]" aria-hidden="true">
                  {[0, 1, 2].map((bar) => (
                    <motion.span
                      key={bar}
                      className="w-[3px] rounded-full bg-app-meetings"
                      animate={{ height: [3, 9, 4, 10, 3] }}
                      transition={{ repeat: Infinity, duration: 1, delay: bar * 0.15 }}
                    />
                  ))}
                </span>
              ) : null}
            </motion.div>
          );
        })}
      </div>
      {/* AI notes */}
      <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-card backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-[12px] font-bold text-app-calendar">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> AI meeting notes
          </p>
          <span className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-500">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-red-500"
              animate={reduce ? undefined : { opacity: [1, 0.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              aria-hidden="true"
            />
            REC
          </span>
        </div>
        <div className="mt-2 space-y-1.5">
          {notes.map((line, i) => (
            <motion.p
              key={line}
              animate={{ opacity: i < shown ? 1 : 0.22, x: i < shown ? 0 : -6 }}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-2 text-[12.5px] font-medium text-ink/85"
            >
              <Check
                className={clsx(
                  "mt-0.5 h-3.5 w-3.5 shrink-0 transition-colors duration-300",
                  i < shown ? "text-success" : "text-line"
                )}
                aria-hidden="true"
              />
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustVisual({ reduce }: { reduce: boolean | null }) {
  const regions = [
    { name: "Saudi Arabia", badge: "In-country" },
    { name: "United Arab Emirates", badge: "In-country" },
    { name: "Europe", badge: "Regional" },
  ];
  const active = useTick(regions.length, 1900, reduce);

  return (
    <div className="flex h-full flex-col justify-end gap-3">
      <div className="flex items-center justify-center py-1">
        <span className="relative flex h-20 w-20 items-center justify-center">
          {!reduce
            ? [0, 1, 2].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute inset-0 rounded-full border-2 border-app-drive/40"
                  animate={{ scale: [1, 1.9], opacity: [0.65, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: ring * 1,
                    ease: "easeOut",
                  }}
                  aria-hidden="true"
                />
              ))
            : null}
          <motion.span
            animate={reduce ? undefined : { y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3.4, ease: "easeInOut" }}
            className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-app-drive via-teal-500 to-app-meetings shadow-[0_12px_28px_rgba(13,148,136,0.4)]"
          >
            <ShieldCheck className="h-8 w-8 text-white" aria-hidden="true" />
          </motion.span>
        </span>
      </div>
      <div className="space-y-2">
        {regions.map((r, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={r.name}
              animate={reduce ? undefined : { scale: isActive ? 1.03 : 1 }}
              transition={{ duration: 0.4 }}
              className={clsx(
                "flex items-center gap-2.5 rounded-xl border bg-white/95 px-3.5 py-2.5 backdrop-blur-sm transition-all duration-500",
                isActive
                  ? "border-app-drive/40 shadow-[0_10px_24px_rgba(13,148,136,0.22)]"
                  : "border-white/80 shadow-sm"
              )}
            >
              <MapPin
                className={clsx(
                  "h-4 w-4 shrink-0 transition-colors duration-300",
                  isActive ? "text-app-drive" : "text-body/50"
                )}
                aria-hidden="true"
              />
              <span className="text-[13px] font-bold text-ink">{r.name}</span>
              <span className="ml-auto flex items-center gap-1.5">
                <span
                  className={clsx(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide transition-colors duration-300",
                    isActive ? "bg-teal-100 text-teal-700" : "bg-brand-faint text-body"
                  )}
                >
                  {r.badge}
                </span>
                <AnimatePresence>
                  {isActive ? (
                    <motion.span
                      initial={reduce ? false : { scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-success"
                    >
                      <Check className="h-3 w-3 text-white" aria-hidden="true" />
                    </motion.span>
                  ) : null}
                </AnimatePresence>
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Cards ---------- */

interface CarouselCard {
  eyebrow: string;
  eyebrowIcon: typeof Sparkles;
  color: string;
  title: string;
  copy: string;
  cta: { label: string; href: string };
  bg: string;
  orb: string;
  orb2: string;
  visual: (reduce: boolean | null) => JSX.Element;
}

const cards: CarouselCard[] = [
  {
    eyebrow: "Jeeym AI",
    eyebrowIcon: Sparkles,
    color: "#6D28D9",
    title: "Put AI to work where work happens",
    copy: "Ask questions, draft content and prepare for meetings with an assistant that knows your organisation's context—and respects its permissions.",
    cta: { label: "Explore Jeeym AI", href: "/ai" },
    bg: "from-[#EDE3FF] via-[#F7F1FF] to-[#DCCBFF]",
    orb: "#B794F6",
    orb2: "#818CF8",
    visual: (r) => <AIVisual reduce={r} />,
  },
  {
    eyebrow: "One workspace",
    eyebrowIcon: Layers,
    color: "#1D4ED8",
    title: "Bring all context into one workspace",
    copy: "Email, conversations, meetings, files and knowledge stay linked—so nobody loses the thread switching between tools.",
    cta: { label: "Explore the product", href: "/product" },
    bg: "from-[#D7E9FF] via-[#EDF5FF] to-[#BFDCFF]",
    orb: "#7DB5FA",
    orb2: "#38BDF8",
    visual: (r) => <WorkspaceVisual reduce={r} />,
  },
  {
    eyebrow: "AI workflows",
    eyebrowIcon: GitBranch,
    color: "#047857",
    title: "Get more done with connected workflows",
    copy: "Move from conversation to action in one flow—schedule, assign and summarise without switching applications.",
    cta: { label: "See every application", href: "/product" },
    bg: "from-[#D5F6E3] via-[#EDFBF3] to-[#B5EFD0]",
    orb: "#5EE0A0",
    orb2: "#34D399",
    visual: (r) => <WorkflowVisual reduce={r} />,
  },
  {
    eyebrow: "Meetings",
    eyebrowIcon: Video,
    color: "#C2540A",
    title: "Meetings that write their own notes",
    copy: "Recordings, transcripts and AI notes turn every meeting into decisions and action items your team can use.",
    cta: { label: "Explore Meetings", href: "/meetings" },
    bg: "from-[#FFE4CC] via-[#FFF3E6] to-[#FFD2AE]",
    orb: "#FDAF6B",
    orb2: "#FB923C",
    visual: (r) => <MeetingVisual reduce={r} />,
  },
  {
    eyebrow: "Trust",
    eyebrowIcon: ShieldCheck,
    color: "#0F766E",
    title: "Enterprise security, local data residency",
    copy: "Encryption, governance and audit logs everywhere—with regional and in-country hosting options for regulated organisations.",
    cta: { label: "Explore security", href: "/security" },
    bg: "from-[#CDF2EC] via-[#E9FAF7] to-[#A9E8DE]",
    orb: "#4FD1C0",
    orb2: "#2DD4BF",
    visual: (r) => <TrustVisual reduce={r} />,
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
    const width = card ? card.clientWidth + 28 : 540;
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
        className="flex snap-x snap-mandatory gap-7 overflow-x-auto scroll-smooth pb-5 pt-2 scrollbar-none px-[max(1.25rem,calc((100vw_-_76rem)/2_+_2.5rem))] scroll-px-[max(1.25rem,calc((100vw_-_76rem)/2_+_2.5rem))]"
      >
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: Math.min(i * 0.08, 0.24) }}
            className={clsx(
              "relative flex min-h-[34rem] w-[88vw] max-w-[30rem] shrink-0 snap-center flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-16px_rgba(17,24,39,0.18)] sm:w-[30rem] sm:snap-start sm:p-9 lg:w-[32rem]",
              card.bg
            )}
          >
            {/* Colour depth orbs */}
            <span
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-50 blur-3xl"
              style={{ backgroundColor: card.orb }}
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
              style={{ backgroundColor: card.orb2 }}
              aria-hidden="true"
            />

            <div className="relative">
              <span
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/70 px-3.5 py-1.5 text-[13px] font-bold backdrop-blur-sm"
                style={{ color: card.color }}
              >
                <card.eyebrowIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {card.eyebrow}
              </span>
              <h3 className="mt-4 text-[26px] font-bold leading-[1.22] tracking-tight text-ink lg:text-[28px]">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                {card.copy}
              </p>
              <Link
                href={card.cta.href}
                className="mt-5 inline-flex h-11 w-fit items-center gap-1.5 rounded-full border border-ink/15 bg-white/70 px-6 text-[14.5px] font-semibold text-ink backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-sm"
              >
                {card.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative mt-8 min-h-[15rem] flex-1">
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
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-200 hover:bg-brand-faint hover:shadow-card disabled:opacity-35"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next card"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition-all duration-200 hover:bg-brand-faint hover:shadow-card disabled:opacity-35"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
