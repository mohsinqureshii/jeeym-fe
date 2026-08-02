import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalPage, legalPages } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return legalPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getLegalPage(params.slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/legal/${page.slug}`,
  });
}

export default function LegalPageRoute({ params }: Props) {
  const page = getLegalPage(params.slug);
  if (!page) notFound();

  return (
    <>
      <section className="border-b border-line bg-brand-faint py-14 sm:py-16">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Legal</p>
            <h1 className="mt-3 text-display text-ink">{page.title}</h1>
            <p className="mt-3 text-[15px] text-body">
              Last updated: {page.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-site">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[15rem_1fr]">
            <nav aria-label="Legal pages" className="lg:sticky lg:top-24 lg:self-start">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-body">
                Legal documents
              </p>
              <ul className="space-y-1">
                {legalPages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/legal/${p.slug}`}
                      aria-current={p.slug === page.slug ? "page" : undefined}
                      className={
                        p.slug === page.slug
                          ? "block rounded-lg bg-brand-wash px-3 py-2 text-[14px] font-semibold text-brand"
                          : "block rounded-lg px-3 py-2 text-[14px] font-medium text-body hover:bg-brand-faint hover:text-ink"
                      }
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="max-w-2xl">
              <p className="rounded-xl border border-dashed border-warning/40 bg-amber-50 px-4 py-3 text-[13.5px] font-medium leading-relaxed text-amber-700">
                {page.intro}
              </p>
              {page.sections.map((section) => (
                <section key={section.heading} className="mt-9">
                  <h2 className="text-[22px] font-bold tracking-tight text-ink">
                    {section.heading}
                  </h2>
                  {section.body.map((para) => (
                    <p
                      key={para.slice(0, 40)}
                      className="mt-3 text-[15.5px] leading-relaxed text-body"
                    >
                      {para}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15.5px] leading-relaxed text-body">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
