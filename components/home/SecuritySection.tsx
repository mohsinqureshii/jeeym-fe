import {
  Eye,
  Fingerprint,
  Lock,
  Settings2,
  Share2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import SecurityDashboard from "@/components/shared/SecurityDashboard";
import FeatureGrid from "@/components/shared/FeatureGrid";

export const securityPillars = [
  {
    title: "Identity and access",
    copy: "Control who can reach your workplace and how.",
    icon: Fingerprint,
    points: [
      "Role-based access control",
      "Multi-factor authentication",
      "Single sign-on",
      "Session management",
      "User provisioning",
    ],
  },
  {
    title: "Data protection",
    copy: "Protect organisational data throughout its lifecycle.",
    icon: Lock,
    points: [
      "Encryption in transit",
      "Encryption at rest",
      "Secure file access",
      "Data retention controls",
      "Backup and recovery",
    ],
  },
  {
    title: "Administration",
    copy: "Manage the whole workplace from one console.",
    icon: Settings2,
    points: [
      "Central admin console",
      "User management",
      "Application controls",
      "Domain management",
      "Organisation policies",
    ],
  },
  {
    title: "Visibility and governance",
    copy: "See what happens across your organisation.",
    icon: Eye,
    points: [
      "Audit logs",
      "Access activity",
      "Security alerts",
      "Administrative reporting",
      "Export and retention options",
    ],
  },
  {
    title: "Controlled collaboration",
    copy: "Share safely inside and outside the organisation.",
    icon: Share2,
    points: [
      "Internal and external sharing controls",
      "Guest access",
      "Permission management",
      "Link expiration",
      "Download restrictions",
    ],
  },
];

export default function SecuritySection() {
  return (
    <Section id="security" tone="white">
      <SectionHeader
        eyebrow="Security by design"
        title="Your organisation's work deserves enterprise-grade protection"
        copy="Jeeym is built with security, access control, auditability and organisational governance at the centre of the platform."
      />
      <Reveal>
        <div className="mx-auto max-w-4xl">
          <SecurityDashboard />
        </div>
      </Reveal>
      <div className="mt-14">
        <FeatureGrid items={securityPillars} columns={3} />
      </div>
      <Reveal className="mt-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-line bg-brand-faint p-6 text-center">
          <p className="text-[15px] font-bold text-ink">
            Security and compliance roadmap
          </p>
          <p className="mx-auto mt-1.5 max-w-xl text-[14px] leading-relaxed text-body">
            Certifications and attestations are published in our Trust Centre
            as they are achieved. We share our roadmap with enterprise
            customers during security review.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/security" size="lg">
          Explore security
        </Button>
        <Button href="/security#overview" variant="secondary" size="lg">
          Download security overview
        </Button>
      </Reveal>
    </Section>
  );
}
