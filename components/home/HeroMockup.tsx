"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Bell,
  Calendar,
  ChevronDown,
  FileText,
  HardDrive,
  Hash,
  ListChecks,
  Lock,
  Mail,
  MessageSquare,
  Mic,
  MicOff,
  Monitor,
  MonitorUp,
  Paperclip,
  Phone,
  Search,
  Smartphone,
  Sparkles,
  Video,
  Wifi,
} from "lucide-react";
import clsx from "clsx";
import { LogoMark } from "@/components/ui/Logo";

type View = "mail" | "chat" | "meeting" | "calendar" | "scheduling";
type Device = "web" | "mobile";

interface Beat {
  view: View;
  device: Device;
  caption: string;
}

/**
 * The story the hero tells: work starts in the browser, continues on
 * mobile without losing the thread, and lands back on the web.
 */
const beats: Beat[] = [
  { view: "mail", device: "web", caption: "Mail — in the browser" },
  { view: "chat", device: "web", caption: "Chat — same workspace" },
  { view: "chat", device: "mobile", caption: "The same conversation, on mobile" },
  { view: "calendar", device: "mobile", caption: "Your calendar travels with you" },
  { view: "meeting", device: "web", caption: "Back on the web for the meeting" },
  { view: "scheduling", device: "web", caption: "Jeeym AI finds the next time" },
];

const BEAT_MS = 3600;

const railApps = [
  { icon: Mail, label: "Mail", color: "#2563EB", activeFor: ["mail"] as View[] },
  { icon: MessageSquare, label: "Chat", color: "#8B5CF6", activeFor: ["chat"] as View[] },
  { icon: Video, label: "Meetings", color: "#059669", activeFor: ["meeting"] as View[] },
  {
    icon: Calendar,
    label: "Calendar",
    color: "#F97316",
    activeFor: ["calendar", "scheduling"] as View[],
  },
  { icon: HardDrive, label: "Drive", color: "#0D9488", activeFor: [] as View[] },
  { icon: FileText, label: "Documents", color: "#3B82F6", activeFor: [] as View[] },
  { icon: ListChecks, label: "Tasks", color: "#7C3AED", activeFor: [] as View[] },
];

const phoneTabs = [
  { icon: Mail, color: "#2563EB", activeFor: ["mail"] as View[] },
  { icon: MessageSquare, color: "#8B5CF6", activeFor: ["chat"] as View[] },
  { icon: Video, color: "#059669", activeFor: ["meeting"] as View[] },
  { icon: Calendar, color: "#F97316", activeFor: ["calendar", "scheduling"] as View[] },
  { icon: Sparkles, color: "#6D5AE6", activeFor: [] as View[] },
];

const emails = [
  {
    from: "Sarah Ahmed",
    initials: "SA",
    color: "#2563EB",
    subject: "Weekly Leadership Review — agenda",
    preview: "Adding the Q3 Financial Forecast to Thursday's agenda. Can everyone…",
    time: "09:12",
    unread: true,
  },
  {
    from: "Lina Hassan",
    initials: "LH",
    color: "#059669",
    subject: "Customer Feedback Report ready",
    preview: "The latest report is in Drive — I've flagged three themes for the…",
    time: "08:47",
    unread: true,
  },
  {
    from: "Omar Khan",
    initials: "OK",
    color: "#7C3AED",
    subject: "Re: Product Launch Checklist",
    preview: "All items on track. Two need owners by Friday — I've suggested…",
    time: "Yesterday",
    unread: false,
  },
  {
    from: "Daniel Lee",
    initials: "DL",
    color: "#F97316",
    subject: "Q3 Financial Forecast — draft shared",
    preview: "First pass is ready in Spreadsheets. Comments welcome before…",
    time: "Yesterday",
    unread: false,
  },
  {
    from: "Aisha Rahman",
    initials: "AR",
    color: "#0D9488",
    subject: "New starter onboarding — next week",
    preview: "Two new team members join Monday. Onboarding notes are in…",
    time: "Mon",
    unread: false,
  },
];

const aiPanels: Record<View, { heading: string; body: string; actions: string[] }> = {
  mail: {
    heading: "Thread summary",
    body: "Sarah added the Q3 Financial Forecast to Thursday's leadership agenda. Daniel's draft is ready for comments.",
    actions: ["Draft a reply to Sarah", "Create task: review forecast", "Prepare me for Thursday"],
  },
  chat: {
    heading: "Channel summary",
    body: "The Regional Expansion Strategy is ready for review. Two launch items still need owners by Friday.",
    actions: ["Summarise this channel", "Create tasks from thread", "Draft a status update"],
  },
  meeting: {
    heading: "Live meeting notes",
    body: "Rollout agreed as phased, starting with Riyadh in March. Daniel to confirm regional pricing.",
    actions: ["Capture action items", "Summarise so far", "Share notes to channel"],
  },
  calendar: {
    heading: "Your day",
    body: "Three meetings and two focus blocks today. Next: Weekly Leadership Review at 10:00.",
    actions: ["Brief me on my next meeting", "Protect focus time", "Reschedule conflicts"],
  },
  scheduling: {
    heading: "Scheduling suggestion",
    body: "Thursday 14:00–14:45 works for all six attendees, with Meeting Room 2 available.",
    actions: ["Book and send invites", "Add agenda from notes", "Suggest another time"],
  },
};

function Avatar({
  initials,
  color,
  size = "h-8 w-8 text-[11px]",
}: {
  initials: string;
  color: string;
  size?: string;
}) {
  return (
    <span
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full font-semibold text-white",
        size
      )}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

/* ---------- Views (shared between web and mobile frames) ---------- */

function MailView({ compact = false }: { compact?: boolean }) {
  const list = compact ? emails.slice(0, 4) : emails;
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <p className="text-[14px] font-bold text-ink">Inbox</p>
        <p className="text-[12px] text-body">12 unread</p>
      </div>
      <ul className="min-h-0 flex-1 overflow-hidden">
        {list.map((m) => (
          <li
            key={m.subject}
            className={clsx(
              "flex items-start gap-3 border-b border-line/70 px-4 py-2.5",
              m.unread && "bg-brand-faint/50"
            )}
          >
            <Avatar initials={m.initials} color={m.color} />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p
                  className={clsx(
                    "truncate text-[13px]",
                    m.unread ? "font-bold text-ink" : "font-medium text-ink"
                  )}
                >
                  {m.from}
                </p>
                <p className="shrink-0 text-[11px] text-body">{m.time}</p>
              </div>
              <p
                className={clsx(
                  "truncate text-[13px]",
                  m.unread ? "font-semibold text-ink" : "text-ink/80"
                )}
              >
                {m.subject}
              </p>
              <p className="truncate text-[12px] text-body">{m.preview}</p>
            </div>
            {m.unread ? (
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
            ) : (
              <Paperclip className="mt-1.5 h-3 w-3 shrink-0 text-line" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatView({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <Hash className="h-3.5 w-3.5 text-app-chat" aria-hidden="true" />
        <p className="text-[14px] font-bold text-ink">Leadership</p>
        <span className="text-[11.5px] text-body">· 8 members</span>
      </div>
      <div className="min-h-0 flex-1 space-y-3.5 overflow-hidden px-4 py-3.5">
        <div className="flex gap-2.5">
          <Avatar initials="OK" color="#7C3AED" />
          <div className="min-w-0">
            <p className="text-[12px]">
              <span className="font-bold text-ink">Omar Khan</span>{" "}
              <span className="text-body">09:20</span>
            </p>
            <p className="text-[13px] leading-relaxed text-ink">
              The Regional Expansion Strategy is ready for review 🎯
            </p>
            <div className="mt-1.5 inline-flex max-w-full items-center gap-1.5 rounded-lg border border-line bg-brand-faint px-2.5 py-1.5">
              <FileText className="h-3.5 w-3.5 shrink-0 text-app-documents" />
              <span className="truncate text-[12px] font-medium text-ink">
                Regional Expansion Strategy
              </span>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="rounded-full border border-line bg-brand-faint px-2 py-0.5 text-[11px]">
                👍 4
              </span>
              <span className="rounded-full border border-line bg-brand-faint px-2 py-0.5 text-[11px]">
                🚀 2
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5">
          <Avatar initials="SA" color="#2563EB" />
          <div className="min-w-0">
            <p className="text-[12px]">
              <span className="font-bold text-ink">Sarah Ahmed</span>{" "}
              <span className="text-body">09:24</span>
            </p>
            <p className="text-[13px] leading-relaxed text-ink">
              Adding it to Thursday&apos;s agenda — can everyone review before
              we meet?
            </p>
          </div>
        </div>
        {!compact ? (
          <div className="flex gap-2.5">
            <Avatar initials="LH" color="#059669" />
            <div className="min-w-0">
              <p className="text-[12px]">
                <span className="font-bold text-ink">Lina Hassan</span>{" "}
                <span className="text-body">09:26</span>
              </p>
              <p className="text-[13px] leading-relaxed text-ink">
                On it. I&apos;ll bring the customer feedback themes too.
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="border-t border-line px-4 py-2.5">
        <div className="flex items-center gap-2 rounded-lg border border-line px-3 py-1.5">
          <span className="truncate text-[12.5px] text-body">
            Message #Leadership
          </span>
          <Mic className="ml-auto h-3.5 w-3.5 shrink-0 text-body" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function MeetingView() {
  const people = [
    { n: "Sarah Ahmed", i: "SA", c: "#2563EB", talking: true },
    { n: "Omar Khan", i: "OK", c: "#7C3AED" },
    { n: "Lina Hassan", i: "LH", c: "#059669" },
    { n: "Daniel Lee", i: "DL", c: "#F97316", muted: true },
  ];
  return (
    <div className="flex h-full flex-col bg-[#0F1520] p-3.5">
      <p className="mb-2.5 flex items-center justify-between gap-2 text-[12.5px] font-semibold text-white/90">
        <span className="truncate">Saudi Market Expansion</span>
        <span className="shrink-0 rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">
          ● REC 24:16
        </span>
      </p>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-2">
        {people.map((p) => (
          <div
            key={p.n}
            className={clsx(
              "relative flex items-center justify-center rounded-xl bg-white/[0.07]",
              p.talking && "ring-2 ring-app-meetings"
            )}
          >
            <Avatar initials={p.i} color={p.c} size="h-10 w-10 text-[13px]" />
            <span className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[10px] font-medium text-white/85">
              {p.muted ? (
                <MicOff className="h-2.5 w-2.5 text-red-300" />
              ) : (
                <Mic className="h-2.5 w-2.5" />
              )}
              <span className="truncate">{p.n}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 rounded-lg bg-white/[0.07] px-3 py-1.5">
        <p className="truncate text-[11px] text-white/80">
          <span className="font-semibold text-white">Live captions:</span>{" "}
          “…phased rollout starting with the Riyadh office in March.”
        </p>
      </div>
      <div className="mt-2.5 flex items-center justify-center gap-2">
        {[Mic, Video, MonitorUp, Sparkles].map((I, idx) => (
          <span
            key={idx}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
          >
            <I className="h-3.5 w-3.5 text-white" />
          </span>
        ))}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
          <Phone className="h-3.5 w-3.5 rotate-[135deg] text-white" />
        </span>
      </div>
    </div>
  );
}

function CalendarView() {
  const days = [
    { label: "Mon", num: 9 },
    { label: "Tue", num: 10 },
    { label: "Wed", num: 11 },
    { label: "Thu", num: 12, active: true },
    { label: "Fri", num: 13 },
  ];
  const agenda = [
    { time: "09:30", label: "Focus time", color: "#0D9488", meta: "No meetings" },
    {
      time: "10:00",
      label: "Weekly Leadership Review",
      color: "#2563EB",
      meta: "5 attendees · Meeting Room 2",
      join: true,
    },
    {
      time: "11:30",
      label: "Saudi Market Expansion",
      color: "#F97316",
      meta: "Video meeting · recorded",
    },
    {
      time: "14:00",
      label: "Customer Success Sync",
      color: "#059669",
      meta: "4 attendees",
    },
  ];
  return (
    <div className="flex h-full flex-col p-3.5">
      <div className="flex items-center justify-between gap-2 px-0.5 pb-2.5">
        <p className="truncate text-[14px] font-bold text-ink">
          Thursday 12 March
        </p>
        <span className="shrink-0 rounded-full bg-brand-wash px-2.5 py-0.5 text-[11px] font-semibold text-brand">
          Team calendar
        </span>
      </div>
      <div className="mb-3 grid grid-cols-5 gap-1.5">
        {days.map((d) => (
          <div
            key={d.label}
            className={clsx(
              "rounded-lg py-1.5 text-center",
              d.active ? "bg-brand text-white" : "bg-brand-faint text-body"
            )}
          >
            <p className="text-[9.5px] font-semibold uppercase tracking-wide">
              {d.label}
            </p>
            <p
              className={clsx(
                "text-[13px] font-bold",
                d.active ? "text-white" : "text-ink"
              )}
            >
              {d.num}
            </p>
          </div>
        ))}
      </div>
      <div className="min-h-0 flex-1 space-y-2 overflow-hidden">
        {agenda.map((e) => (
          <div
            key={e.label}
            className="flex items-center gap-3 rounded-xl px-3 py-2"
            style={{
              backgroundColor: `${e.color}0F`,
              borderLeft: `3px solid ${e.color}`,
            }}
          >
            <span
              className="w-10 shrink-0 text-[11.5px] font-bold tabular-nums"
              style={{ color: e.color }}
            >
              {e.time}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold text-ink">
                {e.label}
              </p>
              <p className="truncate text-[10.5px] text-body">{e.meta}</p>
            </div>
            {e.join ? (
              <span className="shrink-0 rounded-lg bg-brand px-2.5 py-1 text-[10.5px] font-semibold text-white">
                Join
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function SchedulingView() {
  const rows = [
    { n: "Sarah Ahmed", i: "SA", c: "#2563EB", busy: [[10, 22], [55, 14]] },
    { n: "Omar Khan", i: "OK", c: "#7C3AED", busy: [[30, 18]] },
    { n: "Daniel Lee", i: "DL", c: "#F97316", busy: [[0, 16], [42, 10]] },
    { n: "Lina Hassan", i: "LH", c: "#059669", busy: [[18, 10]] },
  ];
  return (
    <div className="flex h-full flex-col p-3.5">
      <div className="flex items-center justify-between gap-2 px-0.5 pb-2.5">
        <p className="truncate text-[14px] font-bold text-ink">
          Find a time · Weekly Leadership Review
        </p>
        <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-success">
          45 min
        </span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r) => (
          <div key={r.n} className="flex items-center gap-2.5">
            <Avatar initials={r.i} color={r.c} size="h-6 w-6 text-[9px]" />
            <p className="w-24 shrink-0 truncate text-[11.5px] font-semibold text-ink">
              {r.n}
            </p>
            <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-brand-faint">
              {r.busy.map(([left, width], i) => (
                <span
                  key={i}
                  className="absolute inset-y-0 rounded-sm bg-line"
                  style={{ left: `${left}%`, width: `${width}%` }}
                />
              ))}
              <span className="absolute inset-y-0 left-[72%] w-[16%] rounded-sm border border-success/50 bg-green-100/80" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3.5 flex items-center gap-2.5 rounded-xl border border-line bg-brand-faint px-3.5 py-2.5">
        <Calendar className="h-4 w-4 shrink-0 text-app-calendar" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-[12.5px] font-semibold text-ink">
            Thursday 14:00 – 14:45
          </p>
          <p className="truncate text-[11px] text-body">
            All attendees available · Meeting Room 2 free
          </p>
        </div>
        <span className="shrink-0 rounded-lg bg-brand px-3 py-1.5 text-[11.5px] font-semibold text-white">
          Book
        </span>
      </div>
      <p className="mt-2.5 flex items-center gap-1.5 px-0.5 text-[11px] text-body">
        <Sparkles className="h-3 w-3 shrink-0 text-brand" aria-hidden="true" />
        Suggested by Jeeym AI from everyone&apos;s working hours
      </p>
    </div>
  );
}

function renderView(view: View, compact: boolean) {
  switch (view) {
    case "mail":
      return <MailView compact={compact} />;
    case "chat":
      return <ChatView compact={compact} />;
    case "meeting":
      return <MeetingView />;
    case "calendar":
      return <CalendarView />;
    case "scheduling":
      return <SchedulingView />;
  }
}

/* ---------- Frames ---------- */

function WebFrame({ view, reduce }: { view: View; reduce: boolean | null }) {
  const ai = aiPanels[view];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-panel">
      {/* Browser chrome */}
      <div className="flex h-9 shrink-0 items-center gap-1.5 border-b border-line bg-brand-faint/70 px-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="mx-auto flex h-5 items-center gap-1.5 rounded-md bg-white px-3 text-[10.5px] font-medium text-body">
          <Lock className="h-2.5 w-2.5 text-success" aria-hidden="true" />
          app.jeeym.com
        </span>
        <span className="w-[52px]" aria-hidden="true" />
      </div>

      {/* Workspace top bar */}
      <div className="flex h-12 shrink-0 items-center gap-3 border-b border-line px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <LogoMark className="h-6 w-6" />
          <span className="hidden items-center gap-1 whitespace-nowrap text-[13px] font-semibold text-ink sm:flex">
            Northstar Group
            <ChevronDown className="h-3.5 w-3.5 text-body" />
          </span>
        </div>
        <div className="mx-auto flex h-8 w-full max-w-md items-center gap-2 rounded-lg bg-brand-faint px-3">
          <Search className="h-3.5 w-3.5 text-body" />
          <span className="text-[13px] text-body">Search Northstar Group…</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="relative">
            <Bell className="h-4 w-4 text-body" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand" />
          </span>
          <Avatar initials="SA" color="#2563EB" size="h-7 w-7 text-[10px]" />
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* App rail */}
        <div className="flex w-12 shrink-0 flex-col items-center gap-1 border-r border-line bg-brand-faint/60 py-3 sm:w-14">
          {railApps.map((app) => {
            const active = app.activeFor.includes(view);
            return (
              <span
                key={app.label}
                title={app.label}
                className="relative flex h-9 w-9 items-center justify-center rounded-lg"
              >
                {active ? (
                  <motion.span
                    layoutId="hero-rail-active"
                    className="absolute inset-0 rounded-lg bg-brand-wash"
                    transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  />
                ) : null}
                <app.icon
                  className="relative h-4 w-4 transition-colors duration-300"
                  style={{ color: active ? app.color : "#5F6B7A" }}
                  strokeWidth={2}
                />
              </span>
            );
          })}
          <span className="mt-auto flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-app-chat">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
        </div>

        {/* View */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-full"
            >
              {renderView(view, false)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* AI panel */}
        <div className="hidden w-60 shrink-0 flex-col border-l border-line bg-brand-faint/40 xl:flex">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand to-app-chat">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </span>
            <p className="text-[13px] font-bold text-ink">Jeeym AI</p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="space-y-3 p-3.5"
            >
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-body">
                  {ai.heading}
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink">
                  {ai.body}
                </p>
              </div>
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-body">
                  Suggested actions
                </p>
                <div className="mt-2 space-y-1.5">
                  {ai.actions.map((action) => (
                    <span
                      key={action}
                      className="block rounded-lg bg-brand-wash px-2.5 py-1.5 text-[12px] font-medium text-brand"
                    >
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ view, reduce }: { view: View; reduce: boolean | null }) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-full max-h-full w-auto flex-col overflow-hidden rounded-[2.1rem] border-[6px] border-[#1E2530] bg-white shadow-panel"
        style={{ aspectRatio: "9 / 18.5" }}
      >
        {/* Status bar */}
        <div className="flex shrink-0 items-center justify-between px-4 pb-1 pt-2">
          <span className="text-[10px] font-bold text-ink">9:41</span>
          <span className="flex items-center gap-1">
            <Wifi className="h-3 w-3 text-ink" aria-hidden="true" />
            <span className="flex h-[9px] w-[16px] items-center rounded-[3px] border border-ink/70 p-px" aria-hidden="true">
              <span className="h-full w-3/4 rounded-[1.5px] bg-ink/80" />
            </span>
          </span>
        </div>
        {/* App bar */}
        <div className="flex shrink-0 items-center gap-2 border-b border-line px-3.5 pb-2 pt-1">
          <LogoMark className="h-5 w-5" />
          <span className="text-[12px] font-bold text-ink">Northstar Group</span>
          <Avatar initials="SA" color="#2563EB" size="ml-auto h-6 w-6 text-[9px]" />
        </div>
        {/* View */}
        <div className="min-h-0 flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="h-full"
            >
              {renderView(view, true)}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Tab bar */}
        <div className="grid shrink-0 grid-cols-5 border-t border-line py-2">
          {phoneTabs.map((tab, i) => {
            const active = tab.activeFor.includes(view);
            return (
              <span key={i} className="flex items-center justify-center">
                <tab.icon
                  className="h-4 w-4 transition-colors duration-300"
                  style={{ color: active ? tab.color : "#9AA5B1" }}
                  strokeWidth={2}
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main component ---------- */

export default function HeroMockup({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [beatIndex, setBeatIndex] = useState(0);
  const beat = beats[beatIndex];

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(
      () => setBeatIndex((i) => (i + 1) % beats.length),
      BEAT_MS
    );
    return () => clearTimeout(t);
  }, [beatIndex, reduce]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springCfg = { stiffness: 90, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [2.5, -2.5]), springCfg);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3, 3]), springCfg);
  const floatX1 = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), springCfg);
  const floatY1 = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), springCfg);
  const floatX2 = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), springCfg);
  const floatY2 = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), springCfg);

  const onMouseMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={clsx("relative", className)}
    >
      {/* Floating application icons */}
      <motion.div
        style={reduce ? undefined : { x: floatX1, y: floatY1 }}
        className="pointer-events-none absolute -left-4 -top-8 z-20 hidden gap-3 sm:flex lg:-left-6"
        aria-hidden="true"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-card ring-1 ring-line">
          <Calendar className="h-5 w-5 text-app-calendar" />
        </span>
      </motion.div>
      <motion.div
        style={reduce ? undefined : { x: floatX2, y: floatY2 }}
        className="pointer-events-none absolute -right-4 top-16 z-20 hidden sm:block lg:-right-5"
        aria-hidden="true"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-card ring-1 ring-line">
          <HardDrive className="h-5 w-5 text-app-drive" />
        </span>
      </motion.div>
      <motion.div
        style={reduce ? undefined : { x: floatX2, y: floatY1 }}
        className="pointer-events-none absolute -bottom-6 left-8 z-20 hidden sm:block"
        aria-hidden="true"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-card ring-1 ring-line">
          <MessageSquare className="h-5 w-5 text-app-chat" />
        </span>
      </motion.div>

      {/* Floating context cards */}
      <motion.div
        style={reduce ? undefined : { x: floatX1, y: floatY2 }}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="absolute -right-3 -top-10 z-20 hidden w-60 rounded-2xl border border-line bg-white p-3.5 shadow-card-hover md:block lg:-right-6"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50">
            <Calendar className="h-4 w-4 text-app-calendar" />
          </span>
          <div>
            <p className="text-[13px] font-semibold text-ink">
              Weekly Leadership Review
            </p>
            <p className="text-[12px] text-body">Today · 10:00 – 10:45</p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between">
          <div className="flex -space-x-1.5">
            <Avatar initials="SA" color="#2563EB" size="h-6 w-6 text-[9px] ring-2 ring-white" />
            <Avatar initials="OK" color="#7C3AED" size="h-6 w-6 text-[9px] ring-2 ring-white" />
            <Avatar initials="DL" color="#F97316" size="h-6 w-6 text-[9px] ring-2 ring-white" />
          </div>
          <span className="rounded-lg bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
            Join
          </span>
        </div>
      </motion.div>

      <motion.div
        style={reduce ? undefined : { x: floatX2, y: floatY1 }}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6 }}
        className="absolute -bottom-8 -left-3 z-20 hidden w-64 rounded-2xl border border-line bg-white p-3.5 shadow-card-hover md:block lg:-left-8"
        aria-hidden="true"
      >
        <div className="flex items-start gap-2.5">
          <Avatar initials="OK" color="#7C3AED" size="h-7 w-7 text-[10px]" />
          <div>
            <p className="text-[12px] text-body">
              <span className="font-semibold text-ink">Omar Khan</span> ·
              #leadership
            </p>
            <p className="mt-0.5 text-[13px] leading-snug text-ink">
              The Regional Expansion Strategy is ready for review
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 rounded-lg bg-brand-faint px-2 py-1">
              <FileText className="h-3.5 w-3.5 text-app-documents" />
              <span className="text-[11px] font-medium text-ink">
                Regional Expansion Strategy
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Device stage */}
      <motion.div
        style={
          reduce ? undefined : { rotateX, rotateY, transformPerspective: 1400 }
        }
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10"
        role="img"
        aria-label="Animated preview of the Jeeym workplace moving between the web app and the mobile app across mail, chat, a video meeting, the calendar and AI scheduling for the sample organisation Northstar Group"
      >
        <div
          className="relative"
          style={{ height: "clamp(360px, 46vw, 530px)" }}
        >
          {/* Frames are absolutely positioned, so entering and exiting
              devices crossfade instead of leaving an empty gap. */}
          <AnimatePresence initial={false}>
            <motion.div
              key={beat.device}
              initial={reduce ? false : { opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.94, y: -12 }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute inset-0"
            >
              {beat.device === "web" ? (
                <WebFrame view={beat.view} reduce={reduce} />
              ) : (
                <PhoneFrame view={beat.view} reduce={reduce} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Device caption + beat dots */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={beatIndex}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[12px] font-semibold text-body shadow-sm"
            >
              {beat.device === "web" ? (
                <Monitor className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              ) : (
                <Smartphone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              )}
              {beat.caption}
            </motion.span>
          </AnimatePresence>
          <div className="flex items-center gap-1.5">
            {beats.map((b, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setBeatIndex(i)}
                aria-label={`Show: ${b.caption}`}
                className="p-0.5"
              >
                <span
                  className={clsx(
                    "block h-1.5 rounded-full transition-all duration-300",
                    i === beatIndex ? "w-5 bg-brand" : "w-1.5 bg-line"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Soft glow behind the interface */}
      <div
        className="absolute -inset-x-8 -bottom-10 top-10 -z-10 rounded-[3rem] bg-gradient-to-b from-brand-wash via-brand-faint to-transparent blur-2xl"
        aria-hidden="true"
      />
    </div>
  );
}
