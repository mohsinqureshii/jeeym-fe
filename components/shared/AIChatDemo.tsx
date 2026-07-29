"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, CornerDownLeft, FileText, Sparkles } from "lucide-react";

interface Demo {
  prompt: string;
  response: { title: string; lines: string[]; source: string };
}

const demos: Demo[] = [
  {
    prompt: "Summarise today's leadership conversations.",
    response: {
      title: "Today in #leadership",
      lines: [
        "Q3 forecast approved for Thursday's review",
        "Regional expansion moved to planning phase",
        "Two hiring requests need sign-off",
      ],
      source: "Sources: #leadership, Weekly Leadership Review",
    },
  },
  {
    prompt: "Prepare me for my meeting with the sales team.",
    response: {
      title: "Briefing: Customer Success Sync",
      lines: [
        "3 open proposals, largest is Almadar (120 users)",
        "Last meeting's actions: 4 of 5 complete",
        "Suggested talking point: Riyadh hosting timeline",
      ],
      source: "Sources: meeting notes, Tasks, sales@ mailbox",
    },
  },
  {
    prompt: "Find the latest version of the expansion plan.",
    response: {
      title: "Regional Expansion Strategy",
      lines: [
        "Latest version edited 2 hours ago by Omar Khan",
        "12 comments resolved, 1 open on budget",
        "Shared with Leadership and Finance",
      ],
      source: "Source: Drive · Strategy folder",
    },
  },
  {
    prompt: "Create action items from this meeting.",
    response: {
      title: "3 action items created",
      lines: [
        "Confirm regional pricing → Daniel Lee, Thu",
        "Draft deployment plan → Omar Khan, Fri",
        "Review final proposal → Sarah Ahmed, Fri",
      ],
      source: "Added to Tasks · linked to Saudi Market Expansion",
    },
  },
  {
    prompt: "What decisions were made this week?",
    response: {
      title: "Decisions · this week",
      lines: [
        "Approved: phased rollout for Almadar proposal",
        "Approved: Q3 marketing budget reallocation",
        "Deferred: office move discussion to next month",
      ],
      source: "Sources: meetings, #leadership, documents",
    },
  },
  {
    prompt: "Turn this document into a presentation.",
    response: {
      title: "Draft deck created",
      lines: [
        "2026 Growth Plan → 9 slides with speaker notes",
        "Charts imported from Q3 Financial Forecast",
        "Ready to review in Presentations",
      ],
      source: "Created in Presentations · draft",
    },
  },
];

const TYPE_MS = 34;
const HOLD_MS = 3400;

export default function AIChatDemo() {
  const reduce = useReducedMotion();
  const [demoIndex, setDemoIndex] = useState(0);
  const [typed, setTyped] = useState(reduce ? demos[0].prompt : "");
  const [showResponse, setShowResponse] = useState(!!reduce);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const demo = demos[demoIndex];
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];

    if (reduce) {
      setTyped(demo.prompt);
      setShowResponse(true);
      timeouts.current.push(
        setTimeout(() => setDemoIndex((i) => (i + 1) % demos.length), HOLD_MS + 1500)
      );
      return () => timeouts.current.forEach(clearTimeout);
    }

    setTyped("");
    setShowResponse(false);

    demo.prompt.split("").forEach((_, i) => {
      timeouts.current.push(
        setTimeout(() => setTyped(demo.prompt.slice(0, i + 1)), i * TYPE_MS)
      );
    });
    const typeDone = demo.prompt.length * TYPE_MS;
    timeouts.current.push(setTimeout(() => setShowResponse(true), typeDone + 350));
    timeouts.current.push(
      setTimeout(
        () => setDemoIndex((i) => (i + 1) % demos.length),
        typeDone + HOLD_MS
      )
    );

    return () => timeouts.current.forEach(clearTimeout);
  }, [demoIndex, reduce]);

  const demo = demos[demoIndex];

  return (
    <div
      className="mx-auto w-full max-w-2xl rounded-2.5xl border border-line bg-white p-5 shadow-panel sm:p-6"
      role="img"
      aria-label="Animated demonstration of Jeeym AI answering workplace questions"
    >
      {/* Prompt bar */}
      <div className="flex items-center gap-3 rounded-xl border border-line bg-brand-faint px-4 py-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-app-chat">
          <Sparkles className="h-4 w-4 text-white" aria-hidden="true" />
        </span>
        <p className="min-h-[1.5rem] flex-1 text-[15px] text-ink">
          {typed}
          {!reduce && typed.length < demo.prompt.length ? (
            <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-brand align-middle" />
          ) : null}
        </p>
        <CornerDownLeft className="h-4 w-4 shrink-0 text-body" aria-hidden="true" />
      </div>

      {/* Sliding response */}
      <div className="mt-4 min-h-[11.5rem] sm:min-h-[10.5rem]">
        <AnimatePresence mode="wait">
          {showResponse ? (
            <motion.div
              key={demoIndex}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="rounded-xl border border-line bg-white p-4 shadow-card"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
                <p className="text-[15px] font-bold text-ink">
                  {demo.response.title}
                </p>
              </div>
              <ul className="mt-3 space-y-2">
                {demo.response.lines.map((line, i) => (
                  <motion.li
                    key={line}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.1, duration: 0.3 }}
                    className="flex items-start gap-2 text-[14px] text-ink/90"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    {line}
                  </motion.li>
                ))}
              </ul>
              <p className="mt-3 border-t border-line pt-2.5 text-[12.5px] text-body">
                {demo.response.source}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={`thinking-${demoIndex}`}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 px-1 pt-1 text-[13px] text-body"
            >
              <span className="flex gap-1" aria-hidden="true">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand" />
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand [animation-delay:0.3s]" />
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand [animation-delay:0.6s]" />
              </span>
              Working across your workplace…
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Prompt suggestions */}
      <div className="mt-4 flex flex-wrap gap-2" aria-hidden="true">
        {["Draft a response using our approved pricing.", "Find everything related to Project Atlas."].map(
          (p) => (
            <span
              key={p}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-[12.5px] text-body"
            >
              {p}
            </span>
          )
        )}
      </div>
    </div>
  );
}
