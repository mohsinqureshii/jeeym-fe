"use client";

import { useRef } from "react";
import {
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
  Inbox,
  ListChecks,
  Mail,
  MessageSquare,
  Paperclip,
  Search,
  Send,
  Sparkles,
  Star,
  Users,
  Video,
} from "lucide-react";
import clsx from "clsx";
import { LogoMark } from "@/components/ui/Logo";

const railApps = [
  { icon: Mail, label: "Mail", color: "#2563EB", active: true },
  { icon: MessageSquare, label: "Chat", color: "#8B5CF6" },
  { icon: Video, label: "Meetings", color: "#059669" },
  { icon: Calendar, label: "Calendar", color: "#F97316" },
  { icon: HardDrive, label: "Drive", color: "#0D9488" },
  { icon: FileText, label: "Documents", color: "#3B82F6" },
  { icon: ListChecks, label: "Tasks", color: "#7C3AED" },
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

export default function HeroMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

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
      className="relative mx-auto mt-14 max-w-5xl sm:mt-16 lg:mt-20"
    >
      {/* Floating application icons */}
      <motion.div
        style={reduce ? undefined : { x: floatX1, y: floatY1 }}
        className="pointer-events-none absolute -left-4 -top-8 z-20 hidden gap-3 sm:flex lg:-left-16"
        aria-hidden="true"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-card ring-1 ring-line">
          <Calendar className="h-5 w-5 text-app-calendar" />
        </span>
      </motion.div>
      <motion.div
        style={reduce ? undefined : { x: floatX2, y: floatY2 }}
        className="pointer-events-none absolute -right-4 top-16 z-20 hidden sm:block lg:-right-14"
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
        className="absolute -right-3 -top-10 z-20 hidden w-60 rounded-2xl border border-line bg-white p-3.5 shadow-card-hover md:block lg:-right-20"
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
        className="absolute -bottom-8 -left-3 z-20 hidden w-64 rounded-2xl border border-line bg-white p-3.5 shadow-card-hover md:block lg:-left-20"
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

      {/* Main interface */}
      <motion.div
        style={
          reduce
            ? undefined
            : { rotateX, rotateY, transformPerspective: 1400 }
        }
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 overflow-hidden rounded-2xl border border-line bg-white shadow-panel"
        role="img"
        aria-label="Preview of the Jeeym workplace showing the mail inbox, application sidebar and AI assistant panel for the sample organisation Northstar Group"
      >
        {/* Top bar */}
        <div className="flex h-12 items-center gap-3 border-b border-line px-3 sm:px-4">
          <div className="flex items-center gap-2">
            <LogoMark className="h-6 w-6" />
            <span className="hidden items-center gap-1 text-[13px] font-semibold text-ink sm:flex">
              Northstar Group
              <ChevronDown className="h-3.5 w-3.5 text-body" />
            </span>
          </div>
          <div className="mx-auto flex h-8 w-full max-w-md items-center gap-2 rounded-lg bg-brand-faint px-3">
            <Search className="h-3.5 w-3.5 text-body" />
            <span className="text-[13px] text-body">
              Search Northstar Group…
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="relative">
              <Bell className="h-4 w-4 text-body" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand" />
            </span>
            <Avatar initials="SA" color="#2563EB" size="h-7 w-7 text-[10px]" />
          </div>
        </div>

        <div className="flex" style={{ height: "clamp(320px, 44vw, 480px)" }}>
          {/* App rail */}
          <div className="flex w-12 shrink-0 flex-col items-center gap-1 border-r border-line bg-brand-faint/60 py-3 sm:w-14">
            {railApps.map((app) => (
              <span
                key={app.label}
                title={app.label}
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                  app.active ? "bg-brand-wash" : "hover:bg-white"
                )}
              >
                <app.icon
                  className="h-4 w-4"
                  style={{ color: app.active ? app.color : "#5F6B7A" }}
                  strokeWidth={2}
                />
              </span>
            ))}
            <span className="mt-auto flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-app-chat">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
          </div>

          {/* Mail sidebar */}
          <div className="hidden w-44 shrink-0 flex-col border-r border-line py-3 md:flex">
            <div className="px-3">
              <span className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-brand text-[13px] font-semibold text-white">
                <Send className="h-3.5 w-3.5" /> Compose
              </span>
            </div>
            <nav className="mt-3 space-y-0.5 px-2 text-[13px]">
              <span className="flex items-center justify-between rounded-lg bg-brand-wash px-2.5 py-1.5 font-semibold text-brand">
                <span className="flex items-center gap-2">
                  <Inbox className="h-3.5 w-3.5" /> Inbox
                </span>
                <span className="text-[11px]">12</span>
              </span>
              <span className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-body">
                <Star className="h-3.5 w-3.5" /> Starred
              </span>
              <span className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-body">
                <Send className="h-3.5 w-3.5" /> Sent
              </span>
              <span className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-body">
                <FileText className="h-3.5 w-3.5" /> Drafts
              </span>
            </nav>
            <p className="mt-4 px-4 text-[11px] font-semibold uppercase tracking-wider text-body">
              Shared
            </p>
            <nav className="mt-1 space-y-0.5 px-2 text-[13px]">
              <span className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-body">
                <Users className="h-3.5 w-3.5" /> sales@northstar
              </span>
              <span className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-body">
                <Users className="h-3.5 w-3.5" /> support@northstar
              </span>
            </nav>
          </div>

          {/* Inbox list */}
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <p className="text-[14px] font-bold text-ink">Inbox</p>
              <p className="text-[12px] text-body">12 unread</p>
            </div>
            <ul>
              {emails.map((m) => (
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

          {/* AI panel */}
          <div className="hidden w-60 shrink-0 flex-col border-l border-line bg-brand-faint/40 lg:flex">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand to-app-chat">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </span>
              <p className="text-[13px] font-bold text-ink">Jeeym AI</p>
            </div>
            <div className="space-y-3 p-3.5">
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-body">
                  Thread summary
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-ink">
                  Sarah added the Q3 Financial Forecast to Thursday&apos;s
                  leadership agenda. Daniel&apos;s draft is ready for comments.
                </p>
              </div>
              <div className="rounded-xl border border-line bg-white p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-body">
                  Suggested actions
                </p>
                <div className="mt-2 space-y-1.5">
                  <span className="block rounded-lg bg-brand-wash px-2.5 py-1.5 text-[12px] font-medium text-brand">
                    Draft a reply to Sarah
                  </span>
                  <span className="block rounded-lg bg-brand-wash px-2.5 py-1.5 text-[12px] font-medium text-brand">
                    Create task: review forecast
                  </span>
                  <span className="block rounded-lg bg-brand-wash px-2.5 py-1.5 text-[12px] font-medium text-brand">
                    Prepare me for Thursday
                  </span>
                </div>
              </div>
            </div>
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
