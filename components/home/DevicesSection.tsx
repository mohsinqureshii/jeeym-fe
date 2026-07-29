import {
  Bell,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
  WifiOff,
  Workflow,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import { LogoMark } from "@/components/ui/Logo";

const deviceFeatures = [
  { icon: RefreshCw, label: "Real-time synchronisation" },
  { icon: WifiOff, label: "Offline access for supported applications" },
  { icon: Bell, label: "Mobile notifications" },
  { icon: ShieldCheck, label: "Secure device sessions" },
  { icon: MonitorSmartphone, label: "Consistent user experience" },
  { icon: Workflow, label: "Responsive collaboration tools" },
];

function MiniUI({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full bg-white">
      {!compact ? (
        <div className="flex w-[14%] flex-col gap-1 border-r border-line bg-brand-faint/70 p-1.5">
          {["#2563EB", "#8B5CF6", "#059669", "#F97316", "#0D9488"].map((c) => (
            <span
              key={c}
              className="aspect-square w-full rounded-[3px]"
              style={{ backgroundColor: `${c}22` }}
            />
          ))}
        </div>
      ) : null}
      <div className="flex-1 p-2">
        <div className="mb-1.5 h-2 w-3/5 rounded-full bg-brand-wash" />
        <div className="space-y-1">
          {[...Array(compact ? 5 : 4)].map((_, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{
                  backgroundColor: ["#2563EB", "#7C3AED", "#059669", "#F97316", "#0D9488"][i % 5] + "33",
                }}
              />
              <span className="h-1.5 flex-1 rounded-full bg-line/80" />
            </div>
          ))}
        </div>
        <div className="mt-2 h-6 rounded-md bg-gradient-to-r from-brand-wash to-[#EDE9FE]" />
      </div>
    </div>
  );
}

export default function DevicesSection() {
  return (
    <Section tone="faint">
      <SectionHeader
        title="A consistent workplace on every device"
        copy="Move between desktop, browser, tablet and mobile without losing your conversations, files, meetings or context."
      />

      <Reveal>
        <div
          className="flex items-end justify-center gap-4 sm:gap-6"
          role="img"
          aria-label="Jeeym shown on a desktop computer, a tablet and a mobile phone with the same interface"
        >
          {/* Desktop */}
          <div className="hidden w-[46%] max-w-md sm:block">
            <div className="overflow-hidden rounded-t-xl border border-line bg-white shadow-panel">
              <div className="flex h-6 items-center gap-1.5 border-b border-line bg-brand-faint px-2.5">
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="mx-auto flex h-3.5 w-2/3 items-center justify-center rounded-sm bg-white text-[7px] text-body">
                  app.jeeym.com
                </span>
              </div>
              <div className="h-44">
                <MiniUI />
              </div>
            </div>
            <div className="mx-auto h-2 w-1/3 rounded-b-lg bg-line/80" />
            <p className="mt-3 text-center text-[13.5px] font-semibold text-body">
              Desktop &amp; browser
            </p>
          </div>

          {/* Tablet */}
          <div className="w-[44%] max-w-[15rem] sm:w-[30%]">
            <div className="overflow-hidden rounded-2xl border-[6px] border-ink/85 bg-white shadow-panel">
              <div className="h-48">
                <MiniUI />
              </div>
            </div>
            <p className="mt-3 text-center text-[13.5px] font-semibold text-body">
              Tablet
            </p>
          </div>

          {/* Mobile */}
          <div className="w-[32%] max-w-[9rem] sm:w-[16%]">
            <div className="overflow-hidden rounded-2xl border-[5px] border-ink/85 bg-white shadow-panel">
              <div className="flex h-5 items-center justify-center border-b border-line bg-brand-faint">
                <LogoMark className="h-3 w-3" />
              </div>
              <div className="h-44">
                <MiniUI compact />
              </div>
            </div>
            <p className="mt-3 text-center text-[13.5px] font-semibold text-body">
              Mobile
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {deviceFeatures.map((f) => (
            <li key={f.label} className="flex items-center gap-3 text-[15px] font-medium text-ink">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand shadow-sm">
                <f.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              {f.label}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
