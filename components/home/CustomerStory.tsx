import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import Testimonial from "@/components/shared/Testimonial";

export default function CustomerStory() {
  return (
    <Section tone="faint">
      <SectionHeader
        eyebrow="Customer story"
        title="One workplace helped the team spend less time switching and more time working"
      />
      <Reveal>
        <Testimonial
          quote="Jeeym gave our team one place for communication, files, meetings and everyday work. The experience became simpler for employees and easier for IT to manage."
          role="Head of Technology"
          organisation="Regional organisation"
          placeholder
        />
      </Reveal>
      <Reveal className="mt-10 text-center">
        <Button href="/resources#customer-stories" variant="secondary" size="lg">
          Read customer stories
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Reveal>
    </Section>
  );
}
