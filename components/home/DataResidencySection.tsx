import { Building2, Cloud, Database, Server } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import DataResidencyMap from "@/components/shared/DataResidencyMap";
import FeatureGrid from "@/components/shared/FeatureGrid";

const residencyFeatures = [
  {
    title: "In-country hosting",
    copy: "Deploy Jeeym within an approved local cloud region or customer-selected environment.",
    icon: Building2,
  },
  {
    title: "Dedicated environments",
    copy: "Choose dedicated infrastructure for organisations with enhanced security or isolation requirements.",
    icon: Server,
  },
  {
    title: "Deployment flexibility",
    copy: "Use Jeeym cloud, a dedicated cloud environment or approved private deployment models.",
    icon: Cloud,
  },
  {
    title: "Data control",
    copy: "Maintain control over where organisational data is stored, processed and backed up.",
    icon: Database,
  },
];

export default function DataResidencySection() {
  return (
    <Section id="data-residency" tone="faint">
      <SectionHeader
        eyebrow="Data residency"
        title="Keep your organisation's data where it needs to be"
        copy="For organisations with regulatory, security or contractual requirements, Jeeym provides regional and in-country data residency options. Choose where your workplace data is stored and processed based on your organisation's compliance needs."
      />
      <Reveal>
        <DataResidencyMap />
      </Reveal>
      <div className="mt-14">
        <FeatureGrid items={residencyFeatures} columns={4} />
      </div>
      <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button href="/data-residency" size="lg">
          Explore data residency
        </Button>
        <Button href="/contact-sales" variant="secondary" size="lg">
          Talk to our compliance team
        </Button>
      </Reveal>
    </Section>
  );
}
