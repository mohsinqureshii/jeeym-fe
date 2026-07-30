import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import AppIcon from "@/components/ui/AppIcon";
import CTASection from "@/components/shared/CTASection";
import { getSolution, solutions } from "@/lib/solutions";
import { productMap } from "@/lib/products";
import { site } from "@/lib/site";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const solution = getSolution(params.slug);
  if (!solution) return {};
  return {
    title: `Jeeym for ${solution.name}`,
    description: solution.seoDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default function SolutionPage({ params }: Props) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${site.url}/solutions` },
      {
        "@type": "ListItem",
        position: 3,
        name: solution.name,
        item: `${site.url}/solutions/${solution.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-brand-faint pb-16 pt-14 sm:pt-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">
                {solution.group} · {solution.name}
              </p>
              <h1 className="mt-4 text-hero text-ink">{solution.headline}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                {solution.copy}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/start" size="lg" className="w-full sm:w-auto">
                  Start free
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  href="/contact-sales"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a demo
                </Button>
              </div>
              <p className="mt-4 text-[14.5px] text-body">
                Free for up to 5 users. No credit card required.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="white" padding="tight">
        <div className="mx-auto grid max-w-4xl items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-heading text-ink">Why organisations choose Jeeym</h2>
            <ul className="mt-6 space-y-3.5">
              {solution.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] font-medium text-ink">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-wash">
                    <Check className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2.5xl border border-line bg-brand-faint p-7">
              <p className="text-[15px] font-bold text-ink">
                Most used by teams like yours
              </p>
              <div className="mt-4 space-y-3">
                {solution.products.map((id) => {
                  const p = productMap[id];
                  return (
                    <Link
                      key={id}
                      href={p.href}
                      className="group flex items-center gap-3.5 rounded-xl border border-line bg-white p-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                    >
                      <AppIcon product={p} size="md" />
                      <div className="min-w-0">
                        <p className="text-[15px] font-bold text-ink group-hover:text-brand">
                          {p.name}
                        </p>
                        <p className="truncate text-[13px] text-body">{p.tagline}</p>
                      </div>
                      <ArrowRight
                        className="ml-auto h-4 w-4 shrink-0 text-body transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="faint" padding="tight">
        <SectionHeader
          title="More solutions"
          className="mb-8"
        />
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {solutions
            .filter((s) => s.slug !== solution.slug)
            .slice(0, 10)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-[14px] font-semibold text-ink transition-colors duration-200 hover:border-brand/30 hover:text-brand"
              >
                {s.name}
              </Link>
            ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
