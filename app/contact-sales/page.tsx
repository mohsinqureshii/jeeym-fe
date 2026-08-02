import type { Metadata } from "next";
import {
  Globe2,
  MonitorPlay,
  PackageOpen,
  ShieldCheck,
  Server,
  Wallet,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/shared/ContactForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact sales — Design the right workplace for your organisation",
  description:
    "Talk to the Jeeym team about enterprise pricing, migration from Google Workspace or Microsoft 365, security review, in-country data residency, dedicated environments and product demonstrations.",
  path: "/contact-sales",
});

const sidePanel = [
  {
    icon: Wallet,
    title: "Enterprise pricing",
    copy: "Plans configured for your user count and requirements.",
  },
  {
    icon: PackageOpen,
    title: "Migration support",
    copy: "Guided migration of users, email, calendars and files.",
  },
  {
    icon: ShieldCheck,
    title: "Security review",
    copy: "Architecture, controls and roadmap for your security team.",
  },
  {
    icon: Globe2,
    title: "Data residency",
    copy: "Regional and in-country hosting options for your data.",
  },
  {
    icon: Server,
    title: "Dedicated environments",
    copy: "Isolated infrastructure for enhanced requirements.",
  },
  {
    icon: MonitorPlay,
    title: "Product demonstration",
    copy: "A guided walkthrough tailored to your teams.",
  },
];

export default function ContactSalesPage() {
  return (
    <section className="bg-brand-faint pb-20 pt-14 sm:pt-20">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Contact sales</p>
            <h1 className="mt-4 text-hero text-ink">
              Let&apos;s design the right workplace for your organisation
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
              Tell us about your organisation and requirements. We&apos;ll come
              back within one business day.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_20rem]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="rounded-2.5xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-24">
              <p className="text-[15px] font-bold text-ink">
                What we can help with
              </p>
              <ul className="mt-4 space-y-4">
                {sidePanel.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-wash text-brand" aria-hidden="true">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[14.5px] font-bold text-ink">{item.title}</p>
                      <p className="text-[13px] leading-relaxed text-body">
                        {item.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-brand-faint px-4 py-3 text-[13px] leading-relaxed text-body">
                Prefer to start small? Jeeym is free for up to 5 users —{" "}
                <a href="/start" className="font-semibold text-brand hover:text-brand-deep">
                  create your workplace
                </a>{" "}
                now.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
