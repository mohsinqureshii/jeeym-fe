import type { Metadata } from "next";
import {
  ArrowRight,
  Compass,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About Jeeym — We believe work should feel connected",
  description:
    "Jeeym was created to help organisations replace fragmented workplace tools with one secure, intelligent and human-centred environment.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  {
    title: "Why Jeeym exists",
    copy: "Most organisations run on a patchwork of disconnected tools. Context gets lost between them, IT carries the integration burden and people spend their day switching. Jeeym exists to replace that patchwork with one coherent workplace.",
    icon: Lightbulb,
  },
  {
    title: "Product philosophy",
    copy: "Connected beats bundled. Every Jeeym application shares one identity, one permission model and one search index—so moving from a conversation to a decision never means starting over.",
    icon: Compass,
  },
  {
    title: "Security philosophy",
    copy: "Security is the platform, not a plan tier. Encryption, access control and auditability apply to every organisation on Jeeym, with deeper governance for those who need it.",
    icon: ShieldCheck,
  },
  {
    title: "Responsible AI",
    copy: "AI should make work clearer, not less trustworthy. Jeeym AI respects user permissions, cites its sources and keeps organisational content out of training for other customers.",
    icon: Scale,
  },
  {
    title: "Global ambition",
    copy: "Modern organisations work across borders and regulations. That's why data residency, regional hosting and local deployment options are core to Jeeym—not an enterprise afterthought.",
    icon: Globe2,
  },
  {
    title: "Human-centred work",
    copy: "Software should reduce the effort of working together. We measure Jeeym by how little our users have to think about it.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-faint pb-16 pt-14 sm:pt-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">About Jeeym</p>
              <h1 className="mt-4 text-hero text-ink">
                We believe work should feel connected
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                Jeeym was created to help organisations replace fragmented
                workplace tools with one secure, intelligent and human-centred
                environment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="white" padding="tight">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2.5xl bg-brand p-10 text-center sm:p-14">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-200">
              Our mission
            </p>
            <p className="mt-4 text-[26px] font-bold leading-snug text-white sm:text-[32px]">
              To create one secure workplace where people, knowledge and AI
              work together.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section tone="white" padding="tight">
        <SectionHeader title="What we believe" />
        <FeatureGrid items={beliefs} columns={3} />
      </Section>

      <Section tone="faint" padding="tight">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <Reveal>
            <div id="careers" className="h-full scroll-mt-24 rounded-2.5xl border border-line bg-white p-8 shadow-card">
              <h2 className="text-heading text-ink">Careers</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-body">
                We're building Jeeym with people who care about craft, security
                and how organisations really work. Open roles are published as
                the team grows.
              </p>
              <Button href="/contact-sales" variant="secondary" className="mt-6">
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div id="contact" className="h-full scroll-mt-24 rounded-2.5xl border border-line bg-white p-8 shadow-card">
              <h2 className="text-heading text-ink">Contact</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-body">
                Talk to us about the product, partnerships, press or your
                organisation's requirements—we respond quickly.
              </p>
              <Button href="/contact-sales" className="mt-6">
                Contact sales
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2">
          <Reveal>
            <div id="partners" className="scroll-mt-24 rounded-2xl border border-dashed border-line bg-white/70 p-6">
              <h3 className="text-[17px] font-bold text-ink">Partners</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">
                Our partner programme for resellers, MSPs and deployment
                partners opens with general availability.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div id="newsroom" className="scroll-mt-24 rounded-2xl border border-dashed border-line bg-white/70 p-6">
              <h3 className="text-[17px] font-bold text-ink">Newsroom</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">
                Press releases, brand assets and media contacts will be
                published here.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
