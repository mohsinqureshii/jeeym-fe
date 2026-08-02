import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  LifeBuoy,
  Megaphone,
  Newspaper,
  Users2,
  Video,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import CTASection from "@/components/shared/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Resources — Guides, stories and support for your workplace",
  description:
    "Jeeym help centre, product guides, customer stories, webinars, product updates, developer documentation and migration resources for moving from Google Workspace or Microsoft 365.",
  path: "/resources",
});

const resourceCards = [
  {
    id: "help-centre",
    icon: LifeBuoy,
    title: "Help centre",
    copy: "Answers, how-tos and troubleshooting for every Jeeym application.",
    cta: "Browse help articles",
  },
  {
    id: "guides",
    icon: GraduationCap,
    title: "Product guides",
    copy: "Step-by-step guides to set up your workplace, applications and policies.",
    cta: "Read the guides",
  },
  {
    id: "customer-stories",
    icon: Users2,
    title: "Customer stories",
    copy: "How organisations run their daily work on Jeeym. Stories published as customers go live.",
    cta: "Read customer stories",
  },
  {
    id: "blog",
    icon: Newspaper,
    title: "Blog",
    copy: "Product thinking, workplace practices and updates from the Jeeym team.",
    cta: "Visit the blog",
  },
  {
    id: "webinars",
    icon: Video,
    title: "Webinars",
    copy: "Live sessions and recordings on getting more from your workplace.",
    cta: "See upcoming webinars",
  },
  {
    id: "updates",
    icon: Megaphone,
    title: "Product updates",
    copy: "What's new across mail, chat, meetings, documents and Jeeym AI.",
    cta: "See what's new",
  },
  {
    id: "developers",
    icon: Code2,
    title: "Developer documentation",
    copy: "APIs, webhooks and integration guides for building on Jeeym.",
    cta: "Open the docs",
  },
  {
    id: "status",
    icon: Activity,
    title: "System status",
    copy: "Live service status and incident history for the Jeeym platform.",
    cta: "Check status",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-brand-faint pb-16 pt-14 sm:pt-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">Resources</p>
              <h1 className="mt-4 text-hero text-ink">
                Everything you need to succeed with Jeeym
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                Guides, stories, documentation and support—for admins setting
                up the workplace and the people using it every day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resourceCards.map((card, i) => (
            <Reveal key={card.id} delay={Math.min((i % 4) * 0.06, 0.24)}>
              <div
                id={card.id}
                className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-wash text-brand" aria-hidden="true">
                  <card.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h2 className="mt-4 text-[18px] font-bold text-ink">{card.title}</h2>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-body">
                  {card.copy}
                </p>
                <span className="mt-4 inline-flex cursor-default items-center gap-1.5 text-[14.5px] font-semibold text-brand">
                  {card.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="text-center text-[13px] text-body">
            Resource libraries are populated continuously—content marked
            “coming soon” goes live with general availability.
          </p>
        </Reveal>
      </Section>

      <Section tone="faint" id="migration" padding="tight">
        <Reveal>
          <div className="mx-auto grid max-w-4xl items-center gap-8 rounded-2.5xl border border-line bg-white p-8 shadow-card sm:p-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow">Migration centre</p>
              <h2 className="mt-3 text-heading text-ink">
                Move your organisation to Jeeym
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-body">
                Get migration assistance for email, files, calendars and users
                —from Google Workspace, Microsoft 365, Slack, Dropbox, Box,
                existing mail servers and CSV-based directories.
              </p>
              <Button href="/contact-sales" className="mt-6">
                Explore migration
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <ul className="space-y-2.5">
              {[
                "Guided onboarding with a migration plan",
                "Tooling for users, mail, calendars and files",
                "Validation of permissions before launch",
                "Support through and after the switch",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 rounded-xl bg-brand-faint px-4 py-3 text-[14.5px] font-medium text-ink">
                  <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
