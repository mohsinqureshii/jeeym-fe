import type { Metadata } from "next";
import {
  ArrowRight,
  FileText,
  MessageSquare,
  Folder,
  Search,
  Settings2,
  ShieldCheck,
  Video,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import ProductOrbit from "@/components/product/ProductOrbit";
import ProductCard from "@/components/shared/ProductCard";
import CTASection from "@/components/shared/CTASection";
import { products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product overview — The connected workplace platform",
  description:
    "Explore the Jeeym business collaboration platform: business email, team chat, video meetings, documents, cloud storage, tasks and AI—fully integrated with one identity, one search and one admin console.",
  path: "/product",
});

const pillars = [
  {
    title: "Communicate",
    copy: "Email, channels and direct messages with shared context—so conversations lead somewhere.",
    icon: MessageSquare,
    color: "#2563EB",
  },
  {
    title: "Create",
    copy: "Documents, spreadsheets and presentations edited together in real time.",
    icon: FileText,
    color: "#3B82F6",
  },
  {
    title: "Organise",
    copy: "Files, tasks and notes owned by teams, structured by permissions.",
    icon: Folder,
    color: "#0D9488",
  },
  {
    title: "Meet",
    copy: "Video meetings with recordings, transcripts and AI notes that feed the next step.",
    icon: Video,
    color: "#059669",
  },
  {
    title: "Search",
    copy: "One permission-aware search across everything, with AI answers and citations.",
    icon: Search,
    color: "#6366F1",
  },
  {
    title: "Automate",
    copy: "Jeeym AI extracts actions, drafts content and moves work forward automatically.",
    icon: Zap,
    color: "#6D5AE6",
  },
  {
    title: "Administer",
    copy: "One console for users, applications, domains and organisation policies.",
    icon: Settings2,
    color: "#F97316",
  },
  {
    title: "Protect",
    copy: "Encryption, access control, audit logs and data residency options across every surface.",
    icon: ShieldCheck,
    color: "#16A34A",
  },
];

export default function ProductOverviewPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-faint pb-20 pt-14 sm:pt-20">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-wash blur-3xl animate-orb-slow"
          aria-hidden="true"
        />
        <div className="container-site relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="eyebrow">Product overview</p>
                <h1 className="mt-4 text-hero text-ink">
                  Your complete workplace, connected by design
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lead text-body">
                  Jeeym combines the applications employees use every day with
                  shared identity, unified search, connected data and built-in
                  AI.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/start" size="lg">
                    Start free
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href="/pricing" variant="secondary" size="lg">
                    See pricing
                  </Button>
                </div>
                <p className="mt-4 text-[14.5px] text-body">
                  Free for up to 5 users. No credit card required.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <ProductOrbit />
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="white">
        <SectionHeader
          title="One platform, eight jobs done well"
          copy="Every capability shares the same identity, permissions, search and administration—that's what makes Jeeym one workplace instead of a bundle."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={Math.min((i % 4) * 0.06, 0.24)}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${pillar.color}12`, color: pillar.color }}
                  aria-hidden="true"
                >
                  <pillar.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[18px] font-bold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-body">
                  {pillar.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="faint">
        <SectionHeader
          title="Every application in the Jeeym workplace"
          copy="Explore each product in depth—every one is built to work with the others."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
