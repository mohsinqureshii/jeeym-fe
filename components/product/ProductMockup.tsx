import type { ReactNode } from "react";
import {
  BarChart3,
  Bell,
  Calendar,
  Check,
  FileText,
  Folder,
  Hash,
  Mic,
  MicOff,
  MonitorUp,
  Paperclip,
  Phone,
  Plus,
  Search,
  Send,
  Sparkles,
  Star,
  Table2,
  Video,
} from "lucide-react";
import clsx from "clsx";
import type { Product, ProductId } from "@/lib/products";
import { LogoMark } from "@/components/ui/Logo";

function Avatar({
  initials,
  color,
  className = "h-7 w-7 text-[10px]",
}: {
  initials: string;
  color: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "flex shrink-0 items-center justify-center rounded-full font-semibold text-white",
        className
      )}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

function Shell({
  product,
  children,
  ariaLabel,
}: {
  product: Product;
  children: ReactNode;
  ariaLabel: string;
}) {
  const Icon = product.icon;
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-white shadow-panel"
      role="img"
      aria-label={ariaLabel}
    >
      <div className="flex h-11 items-center gap-3 border-b border-line px-4">
        <LogoMark className="h-5 w-5" />
        <span className="flex items-center gap-1.5 text-[13px] font-bold text-ink">
          <Icon className="h-3.5 w-3.5" style={{ color: product.color }} />
          {product.name}
        </span>
        <span className="hidden text-[12px] text-body sm:inline">
          · Northstar Group
        </span>
        <div className="ml-auto flex items-center gap-2.5">
          <Search className="h-3.5 w-3.5 text-body" aria-hidden="true" />
          <Bell className="h-3.5 w-3.5 text-body" aria-hidden="true" />
          <Avatar initials="SA" color="#2563EB" className="h-6 w-6 text-[9px]" />
        </div>
      </div>
      <div className="max-h-[26rem] overflow-hidden">{children}</div>
    </div>
  );
}

/* ---------- Variants ---------- */

function MailMockup() {
  const rows = [
    {
      i: "LH",
      c: "#059669",
      from: "Lina Hassan",
      subject: "Customer Feedback Report ready",
      time: "08:47",
      unread: true,
    },
    {
      i: "OK",
      c: "#7C3AED",
      from: "Omar Khan",
      subject: "Re: Product Launch Checklist",
      time: "Yesterday",
      unread: false,
    },
    {
      i: "DL",
      c: "#F97316",
      from: "Daniel Lee",
      subject: "Q3 Financial Forecast — draft shared",
      time: "Yesterday",
      unread: false,
    },
  ];
  return (
    <div className="flex">
      <div className="hidden w-40 shrink-0 border-r border-line p-3 sm:block">
        <span className="flex h-8 items-center justify-center gap-1.5 rounded-lg bg-brand text-[12px] font-semibold text-white">
          <Send className="h-3 w-3" /> Compose
        </span>
        <div className="mt-3 space-y-1 text-[12.5px]">
          <p className="rounded-md bg-brand-wash px-2 py-1 font-semibold text-brand">
            Inbox · 12
          </p>
          <p className="px-2 py-1 text-body">Starred</p>
          <p className="px-2 py-1 text-body">Sent</p>
          <p className="px-2 py-1 text-body">sales@northstar</p>
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="border-b border-line bg-brand-faint/60 px-4 py-2.5">
          <p className="text-[13px] font-bold text-ink">
            Weekly Leadership Review — agenda
          </p>
          <p className="text-[11.5px] text-body">
            Sarah Ahmed → Leadership · 09:12
          </p>
        </div>
        <div className="border-b border-line px-4 py-3">
          <p className="text-[12.5px] leading-relaxed text-ink">
            Adding the Q3 Financial Forecast to Thursday&apos;s agenda. Can
            everyone review Daniel&apos;s draft before we meet?
          </p>
          <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-line bg-brand-faint px-2.5 py-1.5">
            <Table2 className="h-3.5 w-3.5 text-app-sheets" />
            <span className="text-[11.5px] font-medium text-ink">
              Q3 Financial Forecast
            </span>
            <span className="ml-auto text-[10.5px] text-body">Spreadsheet</span>
          </div>
          <div className="mt-2.5 flex gap-2">
            <span className="rounded-full bg-brand-wash px-3 py-1 text-[11px] font-semibold text-brand">
              ✦ Draft reply
            </span>
            <span className="rounded-full bg-brand-wash px-3 py-1 text-[11px] font-semibold text-brand">
              ✦ Summarise thread
            </span>
            <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium text-body">
              Create task
            </span>
          </div>
        </div>
        <ul>
          {rows.map((r) => (
            <li
              key={r.subject}
              className={clsx(
                "flex items-center gap-2.5 border-b border-line/60 px-4 py-2",
                r.unread && "bg-brand-faint/40"
              )}
            >
              <Avatar initials={r.i} color={r.c} className="h-6 w-6 text-[9px]" />
              <p
                className={clsx(
                  "w-24 shrink-0 truncate text-[12px]",
                  r.unread ? "font-bold text-ink" : "font-medium text-ink/80"
                )}
              >
                {r.from}
              </p>
              <p className="min-w-0 flex-1 truncate text-[12px] text-body">
                {r.subject}
              </p>
              <span className="text-[10.5px] text-body">{r.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="flex">
      <div className="hidden w-40 shrink-0 border-r border-line p-3 sm:block">
        <p className="px-1 text-[10.5px] font-semibold uppercase tracking-wider text-body">
          Channels
        </p>
        <div className="mt-1.5 space-y-0.5 text-[12.5px]">
          {["General", "Leadership", "Product", "Customer Success", "Finance", "Riyadh Office"].map(
            (ch, i) => (
              <p
                key={ch}
                className={clsx(
                  "flex items-center gap-1.5 rounded-md px-2 py-1",
                  i === 2
                    ? "bg-brand-wash font-semibold text-brand"
                    : "text-body"
                )}
              >
                <Hash className="h-3 w-3" /> {ch}
              </p>
            )
          )}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
          <Hash className="h-3.5 w-3.5 text-body" />
          <p className="text-[13px] font-bold text-ink">Product</p>
          <span className="text-[11px] text-body">· 14 members</span>
        </div>
        <div className="space-y-3 px-4 py-3">
          <div className="flex gap-2.5">
            <Avatar initials="OK" color="#7C3AED" />
            <div className="min-w-0">
              <p className="text-[12px]">
                <span className="font-bold text-ink">Omar Khan</span>{" "}
                <span className="text-body">10:24</span>
              </p>
              <p className="text-[12.5px] leading-relaxed text-ink">
                Product Launch Checklist is updated — two items still need
                owners before Friday.
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="rounded-full border border-line bg-brand-faint px-2 py-0.5 text-[10.5px]">
                  👍 3
                </span>
                <span className="rounded-full border border-line bg-brand-faint px-2 py-0.5 text-[10.5px]">
                  ✅ 2
                </span>
                <span className="text-[10.5px] font-medium text-brand">
                  4 replies in thread
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5">
            <Avatar initials="LH" color="#059669" />
            <div className="min-w-0">
              <p className="text-[12px]">
                <span className="font-bold text-ink">Lina Hassan</span>{" "}
                <span className="text-body">10:31</span>
              </p>
              <p className="text-[12.5px] leading-relaxed text-ink">
                I&apos;ll take the onboarding guide. Sharing the Customer
                Feedback Report for context:
              </p>
              <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-line bg-brand-faint px-2.5 py-1.5">
                <FileText className="h-3.5 w-3.5 text-app-documents" />
                <span className="text-[11.5px] font-medium text-ink">
                  Customer Feedback Report
                </span>
              </div>
            </div>
          </div>
          <div className="ml-9 rounded-xl border border-line bg-gradient-to-r from-brand-faint to-[#F4F1FE] px-3 py-2">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold text-brand">
              <Sparkles className="h-3 w-3" /> Jeeym AI summary
            </p>
            <p className="mt-0.5 text-[11.5px] leading-relaxed text-ink/85">
              Launch on track. Remaining: assign onboarding guide (done — Lina)
              and pricing page review.
            </p>
          </div>
        </div>
        <div className="border-t border-line px-4 py-2.5">
          <div className="flex items-center gap-2 rounded-lg border border-line px-3 py-1.5">
            <Plus className="h-3.5 w-3.5 text-body" />
            <span className="text-[12px] text-body">Message #Product</span>
            <Mic className="ml-auto h-3.5 w-3.5 text-body" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MeetingsMockup() {
  const people = [
    { n: "Sarah Ahmed", i: "SA", c: "#2563EB", talking: true },
    { n: "Omar Khan", i: "OK", c: "#7C3AED" },
    { n: "Lina Hassan", i: "LH", c: "#059669" },
    { n: "Daniel Lee", i: "DL", c: "#F97316", muted: true },
  ];
  return (
    <div className="bg-[#0F1520] p-4">
      <p className="mb-3 flex items-center justify-between text-[12px] font-semibold text-white/90">
        Saudi Market Expansion
        <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300">
          ● REC 24:16
        </span>
      </p>
      <div className="grid grid-cols-2 gap-2">
        {people.map((p) => (
          <div
            key={p.n}
            className={clsx(
              "relative flex aspect-video items-center justify-center rounded-xl bg-white/[0.07]",
              p.talking && "ring-2 ring-app-meetings"
            )}
          >
            <Avatar initials={p.i} color={p.c} className="h-10 w-10 text-[13px]" />
            <span className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[10px] font-medium text-white/85">
              {p.muted ? (
                <MicOff className="h-2.5 w-2.5 text-red-300" />
              ) : (
                <Mic className="h-2.5 w-2.5" />
              )}
              {p.n}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-white/[0.07] px-3 py-1.5">
        <p className="text-[11px] text-white/80">
          <span className="font-semibold text-white">Live captions:</span>{" "}
          “…so we target a phased rollout starting with the Riyadh office in
          March.”
        </p>
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
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

function CalendarMockup() {
  const days = ["Mon 9", "Tue 10", "Wed 11", "Thu 12", "Fri 13"];
  const events: { day: number; row: number; span: number; label: string; color: string }[] = [
    { day: 0, row: 1, span: 1, label: "Product Planning", color: "#7C3AED" },
    { day: 1, row: 2, span: 1, label: "Customer Success Sync", color: "#059669" },
    { day: 2, row: 1, span: 2, label: "Saudi Market Expansion", color: "#F97316" },
    { day: 3, row: 3, span: 1, label: "Weekly Leadership Review", color: "#2563EB" },
    { day: 4, row: 2, span: 1, label: "Focus time", color: "#0D9488" },
  ];
  return (
    <div className="p-4">
      <div className="grid grid-cols-5 gap-px overflow-hidden rounded-xl border border-line bg-line">
        {days.map((d) => (
          <div key={d} className="bg-brand-faint px-2 py-1.5 text-center text-[11px] font-bold text-ink">
            {d}
          </div>
        ))}
        {days.map((d, col) => (
          <div key={`${d}-body`} className="relative h-44 bg-white">
            {events
              .filter((e) => e.day === col)
              .map((e) => (
                <div
                  key={e.label}
                  className="absolute inset-x-1 rounded-md px-1.5 py-1"
                  style={{
                    top: `${e.row * 22}%`,
                    height: `${e.span * 20}%`,
                    backgroundColor: `${e.color}16`,
                    borderLeft: `3px solid ${e.color}`,
                  }}
                >
                  <p className="truncate text-[9.5px] font-semibold" style={{ color: e.color }}>
                    {e.label}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-line bg-brand-faint px-3 py-2">
        <Calendar className="h-3.5 w-3.5 text-app-calendar" />
        <p className="text-[12px] text-ink">
          <span className="font-semibold">Suggested time:</span> Thursday 14:00
          — all six attendees available
        </p>
        <span className="ml-auto rounded-md bg-brand px-2.5 py-1 text-[10.5px] font-semibold text-white">
          Book
        </span>
      </div>
    </div>
  );
}

function DriveMockup() {
  const files = [
    { name: "2026 Growth Plan", type: "Document", icon: FileText, c: "#3B82F6", by: "Sarah Ahmed", when: "5 min ago" },
    { name: "Regional Expansion Strategy", type: "Document", icon: FileText, c: "#3B82F6", by: "Omar Khan", when: "2 hrs ago" },
    { name: "Q3 Financial Forecast", type: "Spreadsheet", icon: Table2, c: "#16A34A", by: "Daniel Lee", when: "Yesterday" },
    { name: "Product Launch Checklist", type: "Document", icon: FileText, c: "#3B82F6", by: "Omar Khan", when: "Yesterday" },
    { name: "Customer Feedback Report", type: "Document", icon: FileText, c: "#3B82F6", by: "Lina Hassan", when: "Mon" },
  ];
  return (
    <div className="flex">
      <div className="hidden w-40 shrink-0 border-r border-line p-3 sm:block">
        <div className="space-y-0.5 text-[12.5px]">
          <p className="flex items-center gap-1.5 rounded-md bg-brand-wash px-2 py-1 font-semibold text-brand">
            <Folder className="h-3 w-3" /> Strategy
          </p>
          {["My Drive", "Leadership", "Finance", "Product"].map((f) => (
            <p key={f} className="flex items-center gap-1.5 px-2 py-1 text-body">
              <Folder className="h-3 w-3" /> {f}
            </p>
          ))}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <p className="text-[13px] font-bold text-ink">Shared drive · Strategy</p>
          <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10.5px] font-semibold text-success">
            Access controlled
          </span>
        </div>
        <ul>
          {files.map((f) => (
            <li
              key={f.name}
              className="flex items-center gap-3 border-b border-line/60 px-4 py-2.5"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${f.c}14` }}
              >
                <f.icon className="h-3.5 w-3.5" style={{ color: f.c }} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12.5px] font-semibold text-ink">{f.name}</p>
                <p className="text-[10.5px] text-body">
                  {f.type} · edited by {f.by}
                </p>
              </div>
              <span className="text-[10.5px] text-body">{f.when}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DocumentsMockup() {
  return (
    <div className="flex">
      <div className="min-w-0 flex-1 px-6 py-5 sm:px-10">
        <div className="flex items-center gap-2">
          <p className="text-[16px] font-bold text-ink">2026 Growth Plan</p>
          <span className="rounded-full bg-brand-wash px-2 py-0.5 text-[10px] font-semibold text-brand">
            Editing
          </span>
          <div className="ml-auto flex -space-x-1.5">
            <Avatar initials="SA" color="#2563EB" className="h-6 w-6 text-[9px] ring-2 ring-white" />
            <Avatar initials="OK" color="#7C3AED" className="h-6 w-6 text-[9px] ring-2 ring-white" />
          </div>
        </div>
        <div className="mt-4 space-y-2 text-[12.5px] leading-relaxed text-ink/90">
          <p className="text-[13.5px] font-bold text-ink">1. Objectives</p>
          <p>
            Expand into two new regional markets while maintaining current
            customer satisfaction above 95%.
          </p>
          <p className="relative rounded-md bg-brand-wash/70 px-1 py-0.5">
            Launch the Riyadh office as the regional hub by the end of Q2.
            <span className="absolute -right-1 top-0 h-4 w-0.5 bg-app-chat">
              <span className="absolute -top-4 right-0 whitespace-nowrap rounded bg-app-chat px-1 text-[8.5px] font-semibold text-white">
                Omar Khan
              </span>
            </span>
          </p>
          <p className="text-[13.5px] font-bold text-ink">2. Key initiatives</p>
          <p>
            Hire regional customer success leads, localise onboarding
            materials and align pricing with regional expectations.
          </p>
        </div>
      </div>
      <div className="hidden w-48 shrink-0 border-l border-line p-3 lg:block">
        <div className="rounded-xl border border-line p-2.5">
          <div className="flex items-center gap-1.5">
            <Avatar initials="DL" color="#F97316" className="h-5 w-5 text-[8px]" />
            <p className="text-[11px] font-bold text-ink">Daniel Lee</p>
          </div>
          <p className="mt-1 text-[11px] leading-snug text-ink/85">
            Should we include the Q3 forecast figures here?
          </p>
          <p className="mt-1.5 text-[10px] font-semibold text-brand">Reply · Resolve</p>
        </div>
        <div className="mt-2.5 rounded-xl bg-gradient-to-br from-brand-faint to-[#F4F1FE] p-2.5">
          <p className="flex items-center gap-1 text-[10.5px] font-semibold text-brand">
            <Sparkles className="h-3 w-3" /> Jeeym AI
          </p>
          <p className="mt-1 text-[10.5px] leading-snug text-ink/85">
            Draft an executive summary from this document?
          </p>
        </div>
      </div>
    </div>
  );
}

function SpreadsheetsMockup() {
  const rows = [
    ["Region", "Q1", "Q2", "Q3", "Growth"],
    ["Riyadh", "420", "486", "552", "+31%"],
    ["Dubai", "310", "348", "401", "+29%"],
    ["London", "512", "530", "561", "+10%"],
    ["Total", "1,242", "1,364", "1,514", "+22%"],
  ];
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 pb-2.5">
        <p className="text-[13px] font-bold text-ink">Q3 Financial Forecast</p>
        <span className="ml-auto flex items-center gap-1 rounded-full bg-brand-wash px-2 py-0.5 text-[10px] font-semibold text-brand">
          <Sparkles className="h-2.5 w-2.5" /> =AI(&quot;growth by region&quot;)
        </span>
      </div>
      <div className="overflow-hidden rounded-lg border border-line">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className={clsx(
              "grid grid-cols-5",
              ri === 0 && "bg-brand-faint font-bold",
              ri === rows.length - 1 && "bg-green-50/60 font-semibold"
            )}
          >
            {row.map((cell, ci) => (
              <div
                key={ci}
                className={clsx(
                  "border-b border-r border-line/70 px-2.5 py-1.5 text-[11.5px] tabular-nums",
                  ci === 0 ? "text-ink" : "text-right text-ink/85",
                  ci === 4 && ri > 0 && "font-semibold text-success"
                )}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-end gap-1.5 rounded-lg border border-line p-3" aria-hidden="true">
        <BarChart3 className="mr-1 h-3.5 w-3.5 text-body" />
        {[38, 52, 44, 60, 48, 68, 56, 78].map((h, i) => (
          <span
            key={i}
            className="w-5 rounded-t-sm"
            style={{
              height: `${h * 0.7}px`,
              backgroundColor: i % 2 ? "#16A34A" : "#2563EB",
              opacity: 0.75,
            }}
          />
        ))}
        <span className="ml-2 text-[10.5px] text-body">Revenue by quarter</span>
      </div>
    </div>
  );
}

function PresentationsMockup() {
  return (
    <div className="flex">
      <div className="hidden w-28 shrink-0 space-y-2 border-r border-line p-2.5 sm:block">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className={clsx(
              "aspect-video rounded-md border p-1.5",
              n === 2 ? "border-brand ring-1 ring-brand" : "border-line"
            )}
          >
            <div className="h-1.5 w-2/3 rounded-full bg-brand-wash" />
            <div className="mt-1 h-1 w-1/2 rounded-full bg-line" />
          </div>
        ))}
      </div>
      <div className="flex-1 p-5">
        <div className="mx-auto aspect-video max-w-md rounded-xl border border-line bg-gradient-to-br from-white to-brand-faint p-6 shadow-card">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
            Northstar Group
          </p>
          <p className="mt-2 text-[19px] font-bold leading-tight text-ink">
            Regional Expansion
            <br />
            Strategy 2026
          </p>
          <div className="mt-4 flex gap-1.5" aria-hidden="true">
            {[40, 56, 48, 70].map((h, i) => (
              <span
                key={i}
                className="w-6 rounded-t-sm bg-app-presentations/70"
                style={{ height: `${h * 0.55}px` }}
              />
            ))}
          </div>
          <p className="mt-3 text-[10.5px] text-body">
            Presenter notes: open with the Riyadh launch timeline.
          </p>
        </div>
        <div className="mx-auto mt-3 flex max-w-md items-center justify-between">
          <p className="text-[11px] text-body">Slide 2 of 9</p>
          <span className="flex items-center gap-1 rounded-full bg-brand-wash px-2.5 py-1 text-[10.5px] font-semibold text-brand">
            <Sparkles className="h-2.5 w-2.5" /> Generate outline
          </span>
        </div>
      </div>
    </div>
  );
}

function TasksMockup() {
  const cols: { title: string; items: { t: string; who: string; c: string; done?: boolean }[] }[] = [
    {
      title: "To do",
      items: [
        { t: "Confirm regional pricing", who: "DL", c: "#F97316" },
        { t: "Localise onboarding guide", who: "LH", c: "#059669" },
      ],
    },
    {
      title: "In progress",
      items: [
        { t: "Draft deployment plan", who: "OK", c: "#7C3AED" },
        { t: "Review Q3 forecast", who: "SA", c: "#2563EB" },
      ],
    },
    {
      title: "Done",
      items: [
        { t: "Book expansion meeting", who: "SA", c: "#2563EB", done: true },
        { t: "Share feedback report", who: "LH", c: "#059669", done: true },
      ],
    },
  ];
  return (
    <div className="p-4">
      <div className="mb-3 flex items-center gap-2">
        <p className="text-[13px] font-bold text-ink">Saudi Market Expansion</p>
        <span className="rounded-full bg-brand-wash px-2 py-0.5 text-[10px] font-semibold text-brand">
          6 tasks · 2 done
        </span>
        <span className="ml-auto flex items-center gap-1 text-[10.5px] font-semibold text-brand">
          <Sparkles className="h-3 w-3" /> 3 created from meeting notes
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {cols.map((col) => (
          <div key={col.title} className="rounded-xl bg-brand-faint/70 p-2">
            <p className="px-1 pb-1.5 text-[11px] font-bold text-body">
              {col.title}
            </p>
            <div className="space-y-2">
              {col.items.map((item) => (
                <div
                  key={item.t}
                  className="rounded-lg border border-line bg-white p-2 shadow-sm"
                >
                  <p
                    className={clsx(
                      "text-[11.5px] font-semibold leading-snug",
                      item.done ? "text-body line-through" : "text-ink"
                    )}
                  >
                    {item.t}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <Avatar initials={item.who} color={item.c} className="h-5 w-5 text-[7.5px]" />
                    {item.done ? (
                      <Check className="h-3 w-3 text-success" />
                    ) : (
                      <span className="text-[9.5px] font-medium text-body">Thu</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotesMockup() {
  return (
    <div className="flex">
      <div className="hidden w-40 shrink-0 border-r border-line p-3 sm:block">
        <p className="px-1 text-[10.5px] font-semibold uppercase tracking-wider text-body">
          Notebooks
        </p>
        <div className="mt-1.5 space-y-0.5 text-[12.5px]">
          <p className="rounded-md bg-brand-wash px-2 py-1 font-semibold text-brand">
            Leadership
          </p>
          {["Personal", "Product", "Onboarding", "Runbooks"].map((n) => (
            <p key={n} className="px-2 py-1 text-body">
              {n}
            </p>
          ))}
        </div>
      </div>
      <div className="min-w-0 flex-1 p-5">
        <p className="text-[15px] font-bold text-ink">
          Decisions — Weekly Leadership Review
        </p>
        <p className="mt-0.5 text-[10.5px] text-body">
          Leadership notebook · tagged #decisions #q3
        </p>
        <ul className="mt-3 space-y-1.5 text-[12.5px] text-ink/90">
          {[
            "Approved phased rollout for the Almadar proposal",
            "Q3 forecast to be finalised by Thursday",
            "Riyadh office launch moved to March",
          ].map((d) => (
            <li key={d} className="flex items-start gap-2">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
              {d}
            </li>
          ))}
        </ul>
        <div className="mt-3.5 rounded-xl bg-gradient-to-r from-brand-faint to-[#F4F1FE] px-3 py-2">
          <p className="flex items-center gap-1.5 text-[10.5px] font-semibold text-brand">
            <Sparkles className="h-3 w-3" /> Suggested structure applied ·
            linked to Weekly Leadership Review
          </p>
        </div>
      </div>
    </div>
  );
}

function DirectoryMockup() {
  const people = [
    { n: "Sarah Ahmed", i: "SA", c: "#2563EB", r: "Chief Operating Officer", t: "Leadership" },
    { n: "Omar Khan", i: "OK", c: "#7C3AED", r: "Head of Product", t: "Product" },
    { n: "Lina Hassan", i: "LH", c: "#059669", r: "Customer Success Lead", t: "Customer Success" },
    { n: "Aisha Rahman", i: "AR", c: "#0D9488", r: "People Operations", t: "HR · Riyadh Office" },
  ];
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 rounded-lg border border-line bg-brand-faint px-3 py-2">
        <Search className="h-3.5 w-3.5 text-body" />
        <span className="text-[12px] text-body">
          Search people, teams and skills… “customer success riyadh”
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {people.map((p) => (
          <div key={p.n} className="flex items-center gap-2.5 rounded-xl border border-line p-2.5">
            <Avatar initials={p.i} color={p.c} className="h-9 w-9 text-[11px]" />
            <div className="min-w-0">
              <p className="truncate text-[12.5px] font-bold text-ink">{p.n}</p>
              <p className="truncate text-[10.5px] text-body">{p.r}</p>
              <p className="truncate text-[10px] font-medium text-brand">{p.t}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchMockup() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2 rounded-xl border-2 border-brand/40 bg-white px-3.5 py-2.5 shadow-sm">
        <Search className="h-4 w-4 text-brand" />
        <span className="text-[13px] text-ink">regional expansion</span>
        <span className="ml-auto rounded-md border border-line px-1.5 py-0.5 text-[9.5px] font-semibold text-body">
          ⌘K
        </span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded-xl border border-line bg-gradient-to-r from-brand-faint to-[#F4F1FE] p-3">
          <p className="flex items-center gap-1.5 text-[11px] font-bold text-brand">
            <Sparkles className="h-3 w-3" /> AI answer
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-ink/90">
            The Regional Expansion Strategy targets Riyadh (March) and Dubai
            (June). Budget approved in last week&apos;s leadership review.
          </p>
          <p className="mt-1 text-[10px] text-body">
            Sources: Regional Expansion Strategy · #leadership · Weekly
            Leadership Review
          </p>
        </div>
        {[
          { icon: FileText, c: "#3B82F6", t: "Regional Expansion Strategy", d: "Document · edited 2 hrs ago" },
          { icon: Hash, c: "#8B5CF6", t: "#leadership — 8 matching messages", d: "Latest: “expansion plan is ready for review”" },
          { icon: Video, c: "#059669", t: "Saudi Market Expansion", d: "Meeting recording + transcript · Tuesday" },
        ].map((r) => (
          <div key={r.t} className="flex items-center gap-2.5 rounded-lg border border-line px-3 py-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${r.c}14` }}
            >
              <r.icon className="h-3.5 w-3.5" style={{ color: r.c }} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold text-ink">{r.t}</p>
              <p className="truncate text-[10.5px] text-body">{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIMockup() {
  return (
    <div className="p-4">
      <div className="mx-auto max-w-md space-y-3">
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2 text-[12.5px] text-white">
          Prepare me for my meeting with the sales team.
        </div>
        <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-md border border-line bg-white px-3.5 py-2.5 shadow-sm">
          <p className="flex items-center gap-1.5 text-[11px] font-bold text-brand">
            <Sparkles className="h-3 w-3" /> Jeeym AI
          </p>
          <p className="mt-1 text-[12px] font-semibold text-ink">
            Briefing: Customer Success Sync (in 25 minutes)
          </p>
          <ul className="mt-1.5 space-y-1 text-[11.5px] leading-relaxed text-ink/90">
            <li>• 3 open proposals — largest is Almadar (120 users)</li>
            <li>• 4 of 5 action items from last week are complete</li>
            <li>• Lina flagged onboarding feedback to discuss</li>
          </ul>
          <p className="mt-1.5 border-t border-line pt-1.5 text-[10px] text-body">
            Sources: sales@ mailbox · Tasks · Customer Feedback Report
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["Create the agenda", "Draft follow-up email", "Summarise last meeting"].map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-white px-2.5 py-1 text-[10.5px] font-medium text-body"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const variants: Record<ProductId, () => JSX.Element> = {
  mail: MailMockup,
  chat: ChatMockup,
  meetings: MeetingsMockup,
  calendar: CalendarMockup,
  drive: DriveMockup,
  documents: DocumentsMockup,
  spreadsheets: SpreadsheetsMockup,
  presentations: PresentationsMockup,
  tasks: TasksMockup,
  notes: NotesMockup,
  directory: DirectoryMockup,
  search: SearchMockup,
  ai: AIMockup,
};

export default function ProductMockup({ product }: { product: Product }) {
  const Variant = variants[product.id];
  return (
    <Shell
      product={product}
      ariaLabel={`Preview of Jeeym ${product.name} for the sample organisation Northstar Group`}
    >
      <Variant />
    </Shell>
  );
}
