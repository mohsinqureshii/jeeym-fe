import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import ConnectedWorkflow from "@/components/home/ConnectedWorkflow";
import ProductEcosystem from "@/components/home/ProductEcosystem";
import AISection from "@/components/home/AISection";
import DataResidencySection from "@/components/home/DataResidencySection";
import SecuritySection from "@/components/home/SecuritySection";
import FreePlanSection from "@/components/home/FreePlanSection";
import SolutionsTabs from "@/components/home/SolutionsTabs";
import DevicesSection from "@/components/home/DevicesSection";
import MigrationSection from "@/components/home/MigrationSection";
import CustomerStory from "@/components/home/CustomerStory";
import PricingPreview from "@/components/home/PricingPreview";
import CTASection from "@/components/shared/CTASection";
import Section, { SectionHeader } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoStrip />

      <Section tone="faint" id="connected-workplace">
        <SectionHeader
          eyebrow="One connected workplace"
          title="Stop switching between disconnected tools"
          copy="Work becomes slower when communication, files, meetings, tasks and knowledge live in different applications. Jeeym brings them together so people can move from conversation to action without losing context."
        />
        <Reveal>
          <ConnectedWorkflow />
        </Reveal>
        <Reveal className="mt-12">
          <p className="text-center text-[17px] font-semibold text-ink">
            From message to meeting to document to decision—
            <span className="text-brand">without leaving Jeeym.</span>
          </p>
        </Reveal>
      </Section>

      <ProductEcosystem />
      <AISection />
      <DataResidencySection />
      <SecuritySection />
      <FreePlanSection />

      <Section tone="white" id="solutions">
        <SectionHeader
          title="Built for every stage of organisational growth"
          copy="From your first five users to a regulated, multi-region enterprise—Jeeym adapts to how your organisation works."
        />
        <SolutionsTabs />
      </Section>

      <DevicesSection />
      <MigrationSection />
      <CustomerStory />
      <PricingPreview />
      <CTASection />
    </>
  );
}
