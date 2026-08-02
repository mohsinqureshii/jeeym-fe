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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEFBF8] to-[#DBF4EE] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-white/60 blur-3xl animate-orb-slow"
        aria-hidden="true"
      />
      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* Text — left */}
        <Reveal x={-28} y={0}>
          <h2 className="text-display text-ink">
            Robust security and compliance
          </h2>
          <p className="mt-4 max-w-md text-lead text-body">
            Security, governance and data control are built into the
            platform—not sold beside it.
          </p>
          <p className="mt-6 max-w-md rounded-xl border border-dashed border-line bg-white/70 px-4 py-3 text-[13.5px] leading-relaxed text-body">
            <span className="font-semibold text-ink">
              Security and compliance roadmap:
            </span>{" "}
            certifications are published in our Trust Centre as they are
            achieved—no badges are shown before then.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/security" size="lg">
              Explore security
            </Button>
            <Button href="/data-residency" variant="secondary" size="lg">
              Explore data residency
            </Button>
          </div>
        </Reveal>

        {/* Cards — right */}
        <div className="space-y-4">
          {columns.map((col, i) => (
            <Reveal key={col.title} x={28} y={0} delay={i * 0.1}>
              <div className="flex items-start gap-5 rounded-2.5xl border border-white/80 bg-white p-6 shadow-card">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 text-app-drive"
                  aria-hidden="true"
                >
                  <col.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-ink">{col.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-body">
                    {col.copy}
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
