import { Globe2, Lock, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const columns = [
  {
    icon: Lock,
    title: "End-to-end protection",
    copy: "Encryption in transit and at rest, role-based access control, audit logs and centralised administration across every application.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first approach",
    copy: "Jeeym AI only accesses what each user is authorised to view, and your organisation's content is never used to train models for other customers.",
  },
  {
    icon: Globe2,
    title: "Data residency options",
    copy: "Regional and in-country hosting options, dedicated environments and customer-selected data location for regulated organisations.",
  },
];

export default function SecurityBand() {
  return (
    <section className="relative overflow-hidden bg-brand-wash py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-white/60 blur-3xl animate-orb-slow"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-display text-ink">
              Robust security and compliance
            </h2>
            <p className="mt-4 text-lead text-body">
              Security, governance and data control are built into the
              platform—not sold beside it.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 0.08}>
              <div className="h-full rounded-2.5xl border border-line bg-white p-7 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-wash text-brand" aria-hidden="true">
                  <col.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-[19px] font-bold text-ink">
                  {col.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-body">
                  {col.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="mx-auto max-w-2xl rounded-xl border border-dashed border-line bg-white/70 px-5 py-3 text-center text-[13.5px] leading-relaxed text-body">
            <span className="font-semibold text-ink">
              Security and compliance roadmap:
            </span>{" "}
            certifications are published in our Trust Centre as they are
            achieved—no badges are shown before then.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/security" size="lg">
            Explore security
          </Button>
          <Button href="/data-residency" variant="secondary" size="lg">
            Explore data residency
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
