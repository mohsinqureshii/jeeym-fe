import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";
import { legalPages } from "@/lib/legal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/solutions",
    "/security",
    "/data-residency",
    "/pricing",
    "/resources",
    "/about",
    "/contact-sales",
    "/start",
    "/login",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...products.map((p) => ({
      url: `${site.url}${p.href}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...solutions.map((s) => ({
      url: `${site.url}/solutions/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...legalPages.map((p) => ({
      url: `${site.url}/legal/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
