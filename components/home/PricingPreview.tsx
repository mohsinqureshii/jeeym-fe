import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import PricingPlans from "@/components/shared/PricingPlans";

export default function PricingPreview() {
  return (
    <Section id="pricing-preview" tone="white">
      <SectionHeader
        title="Simple plans that grow with your organisation"
        copy="Start free with your first five users. Move to Business or Enterprise when you need more capacity, control or compliance options."
      />
      <PricingPlans />
      <Reveal className="mt-10 text-center">
        <Button href="/pricing" variant="ghost">
          Compare all plan features
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  );
}
