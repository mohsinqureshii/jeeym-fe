import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  FileBarChart,
  ListTodo,
  PenLine,
  Scale,
  Settings2,
  ShieldCheck,
  Sparkles,
  TextQuote,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import AIChatDemo from "@/components/shared/AIChatDemo";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";
import ProductMockup from "@/components/product/ProductMockup";
import { getProduct, productMap } from "@/lib/products";
import AppIcon from "@/components/ui/AppIcon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jeeym AI — Your workplace, with an intelligent layer",
  description:
    "Jeeym AI helps employees understand information, create content, prepare for work and take action across the tools they already use—while respecting permissions.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "Jeeym AI — Your workplace, with an intelligent layer",
    description:
      "AI that answers questions, drafts content, summarises meetings and takes action across your workplace.",
    url: "/ai",
    type: "website",
    siteName: "Jeeym",
  },
};

const capabilities = [
  {
    title: "Ask questions across company knowledge",
    copy: "Get grounded answers from messages, files, documents, meetings and approved knowledge—always with citations to the source.",
    icon: BookOpen,
  },
  {
    title: "Draft and improve content",
    copy: "Write emails, documents, reports and internal communications faster, in your organisation's tone.",
    icon: PenLine,
  },
  {
    title: "Summarise meetings and conversations",
    copy: "Turn long threads, busy channels and hour-long meetings into clear, structured summaries.",
    icon: TextQuote,
  },
  {
    title: "Prepare employees for meetings",
    copy: "Get a briefing before every meeting: attendees, open actions, related documents and suggested talking points.",
    icon: CalendarClock,
  },
  {
    title: "Find decisions and action items",
    copy: "Ask what was decided and who owns what—across meetings, chats and documents.",
    icon: ListTodo,
  },
  {
    title: "Generate reports and presentations",
    copy: "Turn documents and data into structured reports and draft slide decks ready to refine.",
    icon: FileBarChart,
  },
];

const governance = [
  {
    title: "Respect user permissions",
    copy: "Jeeym AI only accesses information the individual user is authorised to view. Permissions are enforced on every request, not applied afterwards.",
    icon: ShieldCheck,
  },
  {
    title: "Administrative AI controls",
    copy: "Administrators decide where Jeeym AI is available, which data sources it can use and how activity is logged for the organisation.",
    icon: Settings2,
  },
  {
    title: "Responsible AI principles",
    copy: "Answers cite their sources. Organisational content is not used to train models for other customers. People stay in control of every action AI proposes.",
    icon: Scale,
  },
];

export default function AIPage() {
  const product = getProduct("ai");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Jeeym AI", item: `${site.url}/ai` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-faint via-white to-[#F4F1FE] pb-20 pt-14 sm:pt-20">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[30rem] w-[30rem] translate-x-1/4 rounded-full bg-[#EDE9FE]/80 blur-3xl animate-orb-slow"
          aria-hidden="true"
        />
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 shadow-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-brand to-app-chat">
                  <Sparkles className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                </span>
                <span className="text-[15px] font-bold text-ink">Jeeym AI</span>
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-hero text-ink">
                Your workplace, with an intelligent layer
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                Jeeym AI helps employees understand information, create
                content, prepare for work and take action across the tools they
                already use.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/start" size="lg" className="w-full sm:w-auto">
                  Start free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/contact-sales" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Book a demo
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl">
            <AIChatDemo />
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <Section tone="white">
        <SectionHeader
          eyebrow="What Jeeym AI does"
          title="Help with the work people actually do"
          copy="Jeeym AI is built into mail, chat, meetings, documents and search—one assistant with the full context of your workplace."
        />
        <FeatureGrid items={capabilities} columns={3} accent="#6D5AE6" />
      </Section>

      {/* In-product view */}
      <Section tone="faint">
        <SectionHeader
          title="An assistant that has done the reading"
          copy="Before your next meeting, Jeeym AI has already gathered the context—open actions, related files and what changed since last time."
        />
        <Reveal className="mx-auto max-w-2xl">
          <ProductMockup product={product} />
        </Reveal>
      </Section>

      {/* Governance */}
      <Section tone="white" id="responsible-ai">
        <SectionHeader
          eyebrow="Trust and control"
          title="AI your organisation can govern"
          copy="Jeeym AI is designed around permissions, administrative control and transparency—so adopting AI doesn't mean losing oversight."
        />
        <FeatureGrid items={governance} columns={3} />
        <Reveal className="mt-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-brand-faint p-6 text-center">
            <p className="text-[15px] leading-relaxed text-body">
              Jeeym AI answers using only content each user can already access,
              and your organisation&apos;s content is not used to train models
              for other customers. Read more in our{" "}
              <Link href="/legal/privacy" className="font-semibold text-brand hover:text-brand-deep">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Works across products */}
      <Section tone="faint" padding="tight">
        <SectionHeader title="Built into every Jeeym application" />
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-6">
          {(["mail", "chat", "meetings", "documents", "spreadsheets", "search"] as const).map(
            (id, i) => {
              const p = productMap[id];
              return (
                <Reveal key={id} delay={i * 0.05}>
                  <Link
                    href={p.href}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                  >
                    <AppIcon product={p} size="md" />
                    <span className="text-[13px] font-semibold text-ink">
                      {p.name}
                    </span>
                  </Link>
                </Reveal>
              );
            }
          )}
        </div>
      </Section>

      <CTASection
        headline="Put an intelligent layer over your organisation's work"
        copy="Start free and try Jeeym AI with your team, or talk to us about enterprise AI controls and governance."
      />
    </>
  );
}
