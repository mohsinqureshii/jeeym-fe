"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Calendar,
  FileText,
  ListChecks,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";

const steps = [
  {
    title: "A customer email arrives",
    icon: Mail,
    color: "#2563EB",
    card: {
      heading: "New message · sales@northstar",
      body: "“We'd like a proposal for rolling out Jeeym across our Riyadh and Dubai offices — can you share options this week?”",
      meta: "From: procurement@almadar.example",
    },
  },
  {
    title: "The message is shared with a team",
    icon: MessageSquare,
    color: "#8B5CF6",
    card: {
      heading: "#customer-success",
      body: "Lina shared the email: “Big opportunity — who can own the proposal? Thread here for context.”",
      meta: "Sarah, Omar and 3 others are in this channel",
    },
  },
  {
    title: "A meeting is scheduled",
    icon: Calendar,
    color: "#F97316",
    card: {
      heading: "Saudi Market Expansion",
      body: "Tomorrow · 11:00 – 11:30 · Video meeting. Agenda: proposal scope, pricing, regional hosting.",
      meta: "4 attendees · room booked automatically",
    },
  },
  {
    title: "A collaborative document is created",
    icon: FileText,
    color: "#3B82F6",
    card: {
      heading: "Proposal — Almadar rollout",
      body: "Omar and Lina are editing together. Comments from Daniel on pricing section resolved.",
      meta: "Draft · shared with Customer Success",
    },
  },
  {
    title: "Tasks are assigned",
    icon: ListChecks,
    color: "#7C3AED",
    card: {
      heading: "3 tasks created",
      body: "Confirm regional pricing → Daniel · Draft deployment plan → Omar · Review final proposal → Sarah.",
      meta: "Due Thursday · linked to the meeting",
    },
  },
  {
    title: "Jeeym AI summarises the work",
    icon: Sparkles,
    color: "#6D5AE6",
    card: {
      heading: "Jeeym AI summary",
      body: "“Proposal agreed: 120 users, Riyadh data residency, phased rollout. All three tasks complete. Ready to send.”",
      meta: "Sources: meeting notes, document, tasks",
    },
  },
  {
    title: "The final response is sent",
    icon: Send,
    color: "#16A34A",
    card: {
      heading: "Reply sent · sales@northstar",
      body: "“Please find our proposal attached, including in-country hosting in Saudi Arabia and a phased rollout plan.”",
      meta: "Proposal — Almadar rollout.pdf attached",
    },
  },
];

const STEP_MS = 3200;

export default function ConnectedWorkflow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % steps.length);
    }, STEP_MS);
    return () => clearInterval(t);
  }, [paused, reduce]);

  const current = steps[active];
  const CurrentIcon = current.icon;

  return (
    <div
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Step list */}
      <ol className="space-y-1.5" aria-label="Connected workflow steps">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = i === active;
          return (
            <li key={step.title}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={isActive ? "step" : undefined}
                className={clsx(
                  "relative flex w-full items-center gap-4 overflow-hidden rounded-xl px-4 py-3 text-left transition-colors duration-200",
                  isActive ? "bg-white shadow-card" : "hover:bg-white/60"
                )}
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-200"
                  style={{
                    backgroundColor: isActive ? `${step.color}18` : "#FFFFFF",
                    color: isActive ? step.color : "#5F6B7A",
                    boxShadow: isActive ? "none" : "inset 0 0 0 1px #E5EAF0",
                  }}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span
                  className={clsx(
                    "text-[16px]",
                    isActive ? "font-semibold text-ink" : "font-medium text-body"
                  )}
                >
                  <span className="mr-2 text-[13px] tabular-nums text-body/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </span>
                {isActive && !reduce ? (
                  <motion.span
                    key={`progress-${active}-${paused}`}
                    className="absolute bottom-0 left-0 h-0.5 rounded-full"
                    style={{ backgroundColor: step.color }}
                    initial={{ width: "0%" }}
                    animate={{ width: paused ? "40%" : "100%" }}
                    transition={{
                      duration: paused ? 0.3 : STEP_MS / 1000,
                      ease: "linear",
                    }}
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>

      {/* Step visual */}
      <div className="relative flex min-h-[16rem] items-center">
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-wash via-white to-brand-faint"
          aria-hidden="true"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -14, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-panel"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${current.color}16`, color: current.color }}
              >
                <CurrentIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-[15px] font-bold text-ink">
                {current.card.heading}
              </p>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              {current.card.body}
            </p>
            <p className="mt-4 border-t border-line pt-3 text-[13px] text-body">
              {current.card.meta}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
