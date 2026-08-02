import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

const stats = [
  {
    value: 13,
    label: "connected applications",
    detail: "Mail, chat, meetings, files, documents, tasks, AI and more",
  },
  {
    value: 1,
    label: "platform and subscription",
    detail: "One identity, one search, one admin console to manage",
  },
  {
    value: 5,
    label: "users free — £0",
    detail: "Start without a credit card and upgrade when you grow",
  },
];

export default function StatsBand() {
  return (
    <section
      className="bg-gradient-to-b from-[#F0F7FF] to-[#E2EFFF] py-16 sm:py-20"
      aria-label="Why one platform"
    >
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Text — left */}
        <Reveal x={-28} y={0}>
          <h2 className="text-display text-ink">Fewer tools, lower costs</h2>
          <p className="mt-4 max-w-md text-lead text-body">
            Consolidate the overlapping tools your organisation pays for—one
            subscription covers communication, collaboration, storage and AI.
          </p>
          <Link
            href="/pricing"
            className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-deep"
          >
            See what&apos;s included in every plan
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        {/* Stats — right */}
        <div className="space-y-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} x={28} y={0} delay={i * 0.1}>
              <div className="flex items-center gap-6 rounded-2.5xl border border-white/80 bg-white p-6 shadow-card">
                <p className="w-20 shrink-0 text-right text-[52px] font-bold leading-none tracking-tight text-brand">
                  <Counter to={s.value} />
                </p>
                <div>
                  <p className="text-[16.5px] font-bold text-ink">{s.label}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-body">
                    {s.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
