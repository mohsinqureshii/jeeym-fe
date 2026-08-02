import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

const stats = [
  {
    value: 13,
    suffix: "",
    label: "connected applications",
    detail: "Mail, chat, meetings, files, documents, tasks, AI and more",
  },
  {
    value: 1,
    suffix: "",
    label: "platform and subscription",
    detail: "One identity, one search, one admin console to manage",
  },
  {
    value: 5,
    suffix: "",
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
      <div className="container-site">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-display text-ink">Fewer tools, lower costs</h2>
            <p className="mt-4 text-lead text-body">
              Consolidate the overlapping tools your organisation pays for—one
              subscription covers communication, collaboration, storage and AI.
            </p>
          </div>
        </Reveal>
        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="h-full rounded-2.5xl border border-line bg-white p-7 text-center shadow-card">
                <p className="text-[56px] font-bold leading-none tracking-tight text-brand">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-[16px] font-bold text-ink">{s.label}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-body">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-deep"
          >
            See what&apos;s included in every plan
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
