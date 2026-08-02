import type { Metadata } from "next";
import {
  Archive,
  ArrowRight,
  Download,
  Eye,
  Fingerprint,
  KeyRound,
  Layers,
  LifeBuoy,
  Lock,
  Settings2,
  Share2,
  ShieldCheck,
  Siren,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import SecurityDashboard from "@/components/shared/SecurityDashboard";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";
import { securityPillars } from "@/components/home/SecuritySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Security — Secure workplace software, built in",
  description:
    "Jeeym is secure workplace software with encryption in transit and at rest, single sign-on, role-based access control, audit logs and central administration across email, chat, meetings and files.",
  path: "/security",
});

const architecture = [
  {
    title: "Security architecture",
    copy: "A single platform means one permission model, one identity layer and one audit trail across every application—no gaps between tools.",
    icon: Layers,
  },
  {
    title: "Encryption",
    copy: "Data is encrypted in transit and at rest across mail, chat, meetings, files and search indexes.",
    icon: Lock,
  },
  {
    title: "Access controls",
    copy: "Role-based access control, granular sharing permissions and protected resources across the workplace.",
    icon: KeyRound,
  },
  {
    title: "Identity management",
    copy: "Single sign-on, multi-factor authentication, session management and automated user provisioning with your identity provider.",
    icon: Fingerprint,
  },
  {
    title: "Auditability",
    copy: "Comprehensive audit logs cover sign-ins, sharing, administration and data access—exportable for your own tooling.",
    icon: Eye,
  },
  {
    title: "Sharing controls",
    copy: "Internal and external sharing policies, guest access, link expiration and download restrictions—set centrally, enforced everywhere.",
    icon: Share2,
  },
  {
    title: "Data lifecycle",
    copy: "Retention policies, legal hold options, export tooling and controlled deletion across organisational content.",
    icon: Archive,
  },
  {
    title: "Business continuity",
    copy: "Backup and recovery for organisational data, with regional backup options aligned to your residency selection.",
    icon: LifeBuoy,
  },
  {
    title: "Incident response",
    copy: "A defined incident response process with customer notification commitments described in enterprise agreements.",
    icon: Siren,
  },
  {
    title: "Administrative governance",
    copy: "One admin console governs users, applications, domains, policies and AI availability for the whole organisation.",
    icon: Settings2,
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-faint pb-20 pt-14 sm:pt-20">
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">Security by design</p>
              <h1 className="mt-4 text-hero text-ink">
                Security built into the workplace
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                Protect identities, conversations, files, meetings and
                organisational knowledge through centralised security and
                administration.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact-sales" size="lg">
                  Talk to our security team
                </Button>
                <Button href="#overview" variant="secondary" size="lg">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download security overview
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mx-auto mt-12 max-w-4xl">
            <SecurityDashboard />
          </Reveal>
        </div>
      </section>

      <Section tone="white" id="overview">
        <SectionHeader
          title="How Jeeym protects your organisation"
          copy="Security is not an add-on module. Every capability below applies across mail, chat, meetings, files, documents and AI."
        />
        <FeatureGrid items={architecture} columns={2} />
      </Section>

      <Section tone="faint">
        <SectionHeader
          title="Controls across five areas"
          copy="The same pillars govern every application in the workplace."
        />
        <FeatureGrid items={securityPillars} columns={3} />
      </Section>

      <Section tone="white" id="trust-centre" padding="tight">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2.5xl border border-line bg-white p-8 text-center shadow-card sm:p-10">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-wash">
              <ShieldCheck className="h-7 w-7 text-brand" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-heading text-ink">
              Security and compliance roadmap
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[16px] leading-relaxed text-body">
              Certifications and attestations are published in our Trust Centre
              as they are achieved. Enterprise customers can request our
              detailed security documentation and roadmap during security
              review.
            </p>
            <Button href="/contact-sales" className="mt-7">
              Visit the Trust Centre
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Section>

      <CTASection
        headline="Review Jeeym with your security team"
        copy="We'll walk through architecture, controls, data residency and our compliance roadmap with your security and IT stakeholders."
        primaryLabel="Contact sales"
        primaryHref="/contact-sales"
        secondaryLabel="Explore data residency"
        secondaryHref="/data-residency"
        note=""
      />
    </>
  );
}
