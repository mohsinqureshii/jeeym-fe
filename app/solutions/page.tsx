import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import CTASection from "@/components/shared/CTASection";
import SolutionsTabs from "@/components/home/SolutionsTabs";
import { solutionGroups, solutionsByGroup } from "@/lib/solutions";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solutions — Team collaboration for every organisation",
  description:
    "Jeeym team collaboration solutions for startups, small businesses, mid-market, enterprises and government—plus secure communication, knowledge management, remote work and data residency needs.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-brand-faint pb-16 pt-14 sm:pt-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">Solutions</p>
              <h1 className="mt-4 text-hero text-ink">
                Built for every stage of organisational growth
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                One workplace that adapts to your size, your teams and your
                requirements—from five people to a regulated, multi-region
                enterprise.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <SolutionsTabs />
          </div>
        </div>
      </section>

      {solutionGroups.map((group, gi) => (
        <Section key={group} tone={gi % 2 === 0 ? "white" : "faint"} padding="tight">
          <SectionHeader title={group} align="left" className="mb-8" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutionsByGroup(group).map((s, i) => (
              <Reveal key={s.slug} delay={Math.min((i % 3) * 0.06, 0.18)}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-card-hover"
                >
                  <h3 className="text-[18px] font-bold text-ink group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-body">
                    {s.copy}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <CTASection />
    </>
  );
}
