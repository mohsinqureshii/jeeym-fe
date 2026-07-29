import {
  Activity,
  AlertTriangle,
  Fingerprint,
  KeyRound,
  LayoutDashboard,
  Lock,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Fingerprint, label: "Identity" },
  { icon: Lock, label: "Data protection" },
  { icon: Users, label: "Users" },
  { icon: ScrollText, label: "Audit logs" },
];

const stats = [
  { label: "Active users", value: "1,284", trend: "+12 this week", tone: "text-success" },
  { label: "MFA coverage", value: "98%", trend: "Target 100%", tone: "text-body" },
  { label: "SSO sign-ins today", value: "3,412", trend: "99.2% success", tone: "text-success" },
  { label: "Open alerts", value: "2", trend: "1 high priority", tone: "text-warning" },
];

const auditRows = [
  {
    icon: KeyRound,
    event: "SSO policy updated",
    actor: "Sarah Ahmed",
    detail: "Session length set to 12 hours",
    time: "09:41",
  },
  {
    icon: Users,
    event: "Guest access granted",
    actor: "Omar Khan",
    detail: "External reviewer added to Product",
    time: "09:12",
  },
  {
    icon: AlertTriangle,
    event: "Sign-in blocked",
    actor: "System",
    detail: "Unrecognised device · Riyadh Office",
    time: "08:56",
  },
  {
    icon: Lock,
    event: "Sharing policy enforced",
    actor: "System",
    detail: "Link expiry applied to Finance drive",
    time: "08:30",
  },
];

const controls = [
  { label: "Multi-factor authentication", state: "Required" },
  { label: "Single sign-on", state: "Enforced" },
  { label: "External sharing", state: "Restricted" },
  { label: "Link expiration", state: "30 days" },
];

/** Static enterprise security console mockup used on the homepage and /security. */
export default function SecurityDashboard() {
  return (
    <div
      className="overflow-hidden rounded-2.5xl border border-line bg-white shadow-panel"
      role="img"
      aria-label="Preview of the Jeeym admin security console showing identity statistics, audit logs and organisation policies"
    >
      <div className="flex h-11 items-center gap-2 border-b border-line px-4">
        <ShieldCheck className="h-4 w-4 text-brand" aria-hidden="true" />
        <p className="text-[13px] font-bold text-ink">
          Northstar Group · Admin console
        </p>
        <span className="ml-auto rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-success">
          All systems normal
        </span>
      </div>

      <div className="flex">
        {/* Console nav */}
        <div className="hidden w-44 shrink-0 border-r border-line bg-brand-faint/50 p-2.5 sm:block">
          {navItems.map((item) => (
            <span
              key={item.label}
              className={clsx(
                "mb-0.5 flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium",
                item.active
                  ? "bg-brand-wash font-semibold text-brand"
                  : "text-body"
              )}
            >
              <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {item.label}
            </span>
          ))}
        </div>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          {/* Stat tiles */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-white p-3.5">
                <p className="text-[11.5px] font-medium text-body">{s.label}</p>
                <p className="mt-1 text-[22px] font-bold tracking-tight text-ink">
                  {s.value}
                </p>
                <p className={clsx("mt-0.5 text-[11.5px] font-medium", s.tone)}>
                  {s.trend}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
            {/* Audit log */}
            <div className="rounded-xl border border-line">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <p className="text-[13px] font-bold text-ink">Recent activity</p>
                <span className="flex items-center gap-1.5 text-[11.5px] text-body">
                  <Activity className="h-3 w-3" aria-hidden="true" />
                  Live audit log
                </span>
              </div>
              <ul>
                {auditRows.map((row) => (
                  <li
                    key={row.event + row.time}
                    className="flex items-center gap-3 border-b border-line/60 px-4 py-2.5 last:border-b-0"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-faint">
                      <row.icon className="h-3.5 w-3.5 text-body" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-semibold text-ink">
                        {row.event}
                        <span className="ml-2 font-normal text-body">
                          {row.actor}
                        </span>
                      </p>
                      <p className="truncate text-[11.5px] text-body">{row.detail}</p>
                    </div>
                    <span className="shrink-0 text-[11px] tabular-nums text-body">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy controls */}
            <div className="rounded-xl border border-line p-4">
              <p className="text-[13px] font-bold text-ink">Organisation policies</p>
              <ul className="mt-3 space-y-2.5">
                {controls.map((c) => (
                  <li key={c.label} className="flex items-center justify-between gap-2">
                    <span className="text-[12.5px] text-ink/85">{c.label}</span>
                    <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-semibold text-success">
                      <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                      {c.state}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-lg bg-brand-faint p-3">
                <p className="text-[11.5px] font-semibold text-ink">
                  Security and compliance roadmap
                </p>
                <p className="mt-1 text-[11px] leading-relaxed text-body">
                  Certification progress is published in the Trust Centre as
                  milestones are achieved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
