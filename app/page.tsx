import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import LogoStrip from "@/components/home/LogoStrip";
import TeamCarousel from "@/components/home/TeamCarousel";
import StatsBand from "@/components/home/StatsBand";
import TeamWorkflowTabs from "@/components/home/TeamWorkflowTabs";
import OnePlatformGrid from "@/components/home/OnePlatformGrid";
import TestimonialsRow from "@/components/home/TestimonialsRow";
import SecurityBand from "@/components/home/SecurityBand";
import ExploreGrid from "@/components/home/ExploreGrid";
import PricingPlans from "@/components/shared/PricingPlans";
import CTASection from "@/components/shared/CTASection";
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
      <TeamCarousel />
      <StatsBand />
      <TeamWorkflowTabs />
      <OnePlatformGrid />
      <TestimonialsRow />
      <SecurityBand />

      {/* Pricing */}
      <section
        className="bg-gradient-to-b from-[#F7FAFF] to-[#EBF3FF] py-16 sm:py-20 lg:py-24"
        id="pricing-preview"
      >
        <div className="container-site">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-display text-ink">
                Pick the plan that fits your team
              </h2>
              <p className="mt-4 text-lead text-body">
                Start free with your first five users. Upgrade when you need
                more capacity, control or compliance options.
              </p>
            </div>
          </Reveal>
          <PricingPlans />
          <Reveal className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-deep"
            >
              Compare all plan features
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ExploreGrid />
      <CTASection
        headline="Get more done, in one place"
        copy="Start with up to 5 users for free, or speak with our team about enterprise security, migration and data residency."
      />
    </>
  );
}
