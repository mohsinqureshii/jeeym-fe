import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";

const sources = [
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Dropbox",
  "Box",
  "Existing mail servers",
  "CSV-based user directories",
];

const steps = [
  {
    title: "Assess your current workplace",
    copy: "Review the tools, users and data you use today.",
  },
  {
    title: "Configure your Jeeym organisation",
    copy: "Set up your domain, applications and policies.",
  },
  {
    title: "Import users and data",
    copy: "Bring across email, calendars, contacts and files.",
  },
  {
    title: "Validate security and permissions",
    copy: "Confirm access, sharing rules and controls.",
  },
  {
    title: "Launch with your team",
    copy: "Switch over with onboarding for every employee.",
  },
  {
    title: "Receive ongoing support",
    copy: "Get help as your organisation settles in and grows.",
  },
];

export default function MigrationSection() {
  return (
    <Section id="migration" tone="white">
      <SectionHeader
        eyebrow="Move to Jeeym"
        title="Bring your organisation with you"
        copy="Migrate users, email, calendars, contacts and files from your existing workplace tools with guided onboarding and migration support."
      />

      <Reveal>
        <ul className="flex flex-wrap items-center justify-center gap-2.5" aria-label="Supported migration sources">
          {sources.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line bg-white px-4 py-2 text-[14px] font-semibold text-ink shadow-sm"
            >
              {s}
            </li>
          ))}
        </ul>
      </Reveal>

      <ol className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={Math.min(i * 0.06, 0.3)}>
            <li className="h-full rounded-2xl border border-line bg-white p-5 shadow-card">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-wash text-[14px] font-bold text-brand">
                {i + 1}
              </span>
              <p className="mt-3 text-[16px] font-bold text-ink">{step.title}</p>
              <p className="mt-1.5 text-[14px] leading-relaxed text-body">
                {step.copy}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-12 text-center">
        <Button href="/contact-sales" size="lg">
          Plan your migration
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  );
}
