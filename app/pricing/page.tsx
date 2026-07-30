import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeader } from "@/components/ui/Section";
import PricingPlans from "@/components/shared/PricingPlans";
import PricingTable from "@/components/shared/PricingTable";
import FAQ from "@/components/shared/FAQ";
import CTASection from "@/components/shared/CTASection";
import { pricingFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Start free. Upgrade as your organisation grows.",
  description:
    "Jeeym is free for up to 5 users with core workplace applications and starter AI access. Business and Enterprise plans add capacity, controls and data residency options.",
  alternates: { canonical: "/pricing" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${site.url}/pricing` },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-brand-faint pb-16 pt-14 sm:pt-20">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow">Pricing</p>
              <h1 className="mt-4 text-hero text-ink">
                Start free. Upgrade as your organisation grows.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-body">
                Every plan includes the connected Jeeym workplace. Paid plans
                add capacity, administrative control and compliance options.
              </p>
            </Reveal>
          </div>
          <div className="mt-12">
            <PricingPlans />
          </div>
        </div>
      </section>

      <Section tone="white">
        <SectionHeader
          title="Compare plans in detail"
          copy="Business pricing is configured with our team based on your user count and requirements—no invented numbers, no surprises."
        />
        <Reveal>
          <PricingTable />
        </Reveal>
      </Section>

      <Section tone="faint">
        <SectionHeader title="Frequently asked questions" />
        <FAQ items={pricingFaqs} />
      </Section>

      <CTASection />
    </>
  );
}
