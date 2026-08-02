import type { Metadata } from "next";
import { site } from "./site";

interface PageSeo {
  title: string;
  description: string;
  /** Route path beginning with "/" — used for the canonical URL and Open Graph URL. */
  path: string;
  noIndex?: boolean;
}

/**
 * Consistent per-page metadata: unique title and description, canonical URL,
 * and matching Open Graph / Twitter cards for every route.
 */
export function buildMetadata({ title, description, path, noIndex = false }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Jeeym",
      title,
      description,
      url: path,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitter,
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
