import type { Metadata } from "next";
import {
  ArrowRight,
  Archive,
  Building2,
  Cloud,
  Database,
  Globe2,
  Handshake,
  Lock,
  MapPin,
  Repeat,
  Server,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import DataResidencyMap from "@/components/shared/DataResidencyMap";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Data residency — Choose where your workplace data lives",
  description:
    "Jeeym provides deployment and hosting options for organisations that need greater control over data location, isolation and regulatory alignment.",
  alternates: { canonical: "/data-residency" },
};

const residencyDetails = [
  {
    title: "What data residency means",
    copy: "Data residency is the ability to choose where your organisation's workplace data—mail, files, messages, recordings and indexes—is stored and processed. Jeeym is designed to support data residency requirements through customer-selected data location.",
    icon: Globe2,
  },
  {
    title: "Available deployment regions",
    copy: "Choose from available hosting regions, including Saudi Arabia, the United Arab Emirates, Europe and the United States, with additional regions available on request.",
    icon: MapPin,
  },
  {
    title: "In-country hosting",
    copy: "For organisations with in-country requirements, Jeeym offers deployment within approved local cloud regions so workplace data is stored and processed in-country.",
    icon: Building2,
  },
  {
    title: "Dedicated cloud",
    copy: "Dedicated cloud environments provide infrastructure isolation for organisations with enhanced security, performance or contractual requirements.",
    icon: Server,
  },
  {
    title: "Private deployment options",
    copy: "Approved private deployment models are available for organisations that require deployment into customer-selected environments. Scope is agreed during a deployment assessment.",
    icon: Lock,
  },
  {
    title: "Backup location",
    copy: "Backups follow your residency selection. Regional backup options keep recovery copies within the same geography as your primary deployment.",
    icon: Archive,
  },
  {
    title: "Data processing controls",
    copy: "Processing follows your deployment selection and the terms of your data processing agreement, with documented subprocessors per region.",
    icon: Database,
  },
  {
    title: "Customer responsibilities",
    copy: "Customers remain responsible for their own regulatory interpretation, user administration and sharing policies. We provide the architecture, documentation and controls to support your assessment.",
    icon: Handshake,
  },
  {
    title: "Migration between regions",
    copy: "If your requirements change, our team supports planned migration of your workplace between available regions with defined milestones and validation.",
    icon: Repeat,
  },
  {
    title: "Request a deployment assessment",
    copy: "Our compliance and deployment team will review your requirements, confirm regional availability and recommend a deployment model for your organisation.",
    icon: Cloud,
  },
];

export default function DataResidencyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-faint pb-20 pt-14 sm:pt-20">
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">Data residency</p>
              <h1 className="mt-4 text-hero text-ink">
                Choose where your workplace data lives
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                Jeeym provides deployment and hosting options for organisations
                that need greater control over data location, isolation and
                regulatory alignment.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact-sales" size="lg">
                  Discuss your requirements
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button href="/security" variant="secondary" size="lg">
                  Explore security
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="mt-14">
            <DataResidencyMap />
          </Reveal>
        </div>
      </section>

      <Section tone="white">
        <SectionHeader
          title="Residency, explained properly"
          copy="Deployment decisions deserve precise language. Here is exactly what Jeeym offers—and what remains your organisation's responsibility."
        />
        <FeatureGrid items={residencyDetails} columns={2} />
        <Reveal className="mt-10">
          <p className="mx-auto max-w-3xl rounded-2xl border border-dashed border-line bg-brand-faint px-6 py-4 text-center text-[14px] leading-relaxed text-body">
            Jeeym provides regional hosting options, in-country deployment
            options and compliance-aligned architecture. Jeeym does not provide
            legal advice, and availability of specific regions and deployment
            models is confirmed during your deployment assessment.
          </p>
        </Reveal>
      </Section>

      <CTASection
        headline="Tell us where your data needs to live"
        copy="Request a deployment assessment and our team will confirm regional availability, deployment models and timelines for your organisation."
        primaryLabel="Discuss your requirements"
        primaryHref="/contact-sales"
        secondaryLabel="Explore security"
        secondaryHref="/security"
        note=""
      />
    </>
  );
}
