import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import AppIcon from "@/components/ui/AppIcon";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";
import ProductMockup from "./ProductMockup";
import { getProduct, productMap, type ProductId } from "@/lib/products";
import { site } from "@/lib/site";

export function productMetadata(id: ProductId): Metadata {
  const product = getProduct(id);
  return {
    title: product.seo.title,
    description: product.seo.description,
    alternates: { canonical: product.href },
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      url: product.href,
      type: "website",
      siteName: "Jeeym",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
    },
  };
}

export default function ProductPageTemplate({ id }: { id: ProductId }) {
  const product = getProduct(id);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Product", item: `${site.url}/product` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${site.url}${product.href}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Product hero */}
      <section className="relative overflow-hidden bg-brand-faint pb-20 pt-14 sm:pt-20 lg:pb-24">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 translate-x-1/3 rounded-full blur-3xl animate-orb-slow"
          style={{ backgroundColor: `${product.color}14` }}
          aria-hidden="true"
        />
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-1.5 shadow-sm">
                <AppIcon product={product} size="sm" />
                <span className="text-[15px] font-bold text-ink">
                  Jeeym {product.name === "Jeeym AI" ? "AI" : product.name}
                </span>
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-hero text-ink">{product.hero.headline}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                {product.hero.copy}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
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
          <Reveal delay={0.2} className="mx-auto mt-12 max-w-3xl">
            <ProductMockup product={product} />
          </Reveal>
        </div>
      </section>

      {/* Benefit sections */}
      <Section tone="white" padding="tight">
        <div className="space-y-16 lg:space-y-24">
          {product.benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <h2 className="text-heading text-ink">{benefit.title}</h2>
                <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-body">
                  {benefit.copy}
                </p>
                <ul className="mt-6 space-y-3">
                  {benefit.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15.5px] font-medium text-ink">
                      <span
                        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${product.color}14` }}
                      >
                        <Check className="h-3.5 w-3.5" style={{ color: product.color }} aria-hidden="true" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : undefined}>
                <div
                  className="rounded-3xl p-6 sm:p-10"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}0D, #F7FAFF)`,
                  }}
                >
                  <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                    <AppIcon product={product} size="lg" />
                    <p className="mt-4 text-[17px] font-bold text-ink">
                      {benefit.title}
                    </p>
                    <div className="mt-4 space-y-2.5" aria-hidden="true">
                      {benefit.points.map((p, pi) => (
                        <div key={p} className="flex items-center gap-2.5">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: product.color, opacity: 1 - pi * 0.25 }}
                          />
                          <span
                            className="h-2.5 rounded-full bg-brand-faint"
                            style={{ width: `${82 - pi * 14}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* Feature grid */}
      <Section tone="faint">
        <SectionHeader
          title={`What you get with ${product.name === "Jeeym AI" ? "Jeeym AI" : `Jeeym ${product.name}`}`}
        />
        <FeatureGrid items={product.featureGrid} columns={3} accent={product.color} />
      </Section>

      {/* Cross-product integration */}
      <Section tone="white">
        <SectionHeader
          eyebrow="Better together"
          title={`${product.name} works with the rest of your workplace`}
          copy="Every Jeeym application shares one identity, one permission model and one search index—so context follows the work."
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {product.integrations.map((integration, i) => {
            const other = productMap[integration.with];
            return (
              <Reveal key={integration.with} delay={i * 0.08}>
                <Link
                  href={other.href}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-2.5">
                    <AppIcon product={product} size="sm" />
                    <span className="text-body" aria-hidden="true">+</span>
                    <AppIcon product={other} size="sm" />
                  </div>
                  <p className="mt-4 text-[16px] font-bold text-ink group-hover:text-brand">
                    {product.name} + {other.name}
                  </p>
                  <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-body">
                    {integration.copy}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Security statement */}
      <Section tone="faint" padding="tight">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-2.5xl border border-line bg-white p-8 shadow-card sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-wash">
              <ShieldCheck className="h-6 w-6 text-brand" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[17px] font-bold text-ink">
                Secured by the Jeeym platform
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-body">
                {product.security}
              </p>
              <Link
                href="/security"
                className="mt-2.5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand hover:text-brand-deep"
              >
                Explore security
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Related products */}
      <Section tone="white" padding="tight">
        <SectionHeader title="Related products" />
        <div className="grid gap-5 sm:grid-cols-3">
          {product.related.map((relId, i) => {
            const rel = productMap[relId];
            return (
              <Reveal key={relId} delay={i * 0.08}>
                <Link
                  href={rel.href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <AppIcon product={rel} size="lg" />
                  <div>
                    <p className="text-[17px] font-bold text-ink group-hover:text-brand">
                      {rel.name}
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-body">
                      {rel.tagline}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTASection
        headline={`Bring ${product.name === "Jeeym AI" ? "Jeeym AI" : product.name} into one connected workplace`}
        copy="Start free with up to 5 users, or talk to our team about enterprise deployment, migration and data residency."
      />
    </>
  );
}
