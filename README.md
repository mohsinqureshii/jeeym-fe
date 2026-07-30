# Jeeym marketing website

Marketing website for **Jeeym** — the secure AI workplace for modern
organisations. Built with Next.js (App Router), TypeScript, Tailwind CSS and
Framer Motion.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve the production build
```

## Stack

- **Next.js 14** (App Router, server components, static generation)
- **TypeScript** throughout
- **Tailwind CSS** with brand design tokens in `tailwind.config.ts`
- **Framer Motion** for animation (respects `prefers-reduced-motion`)
- **Lucide** icons
- **Inter** via `next/font` (Google Sans-style stack preserved in CSS)

## Structure

```
app/                    Routes (App Router)
  page.tsx              Homepage
  product/              Product overview
  mail/ chat/ …         13 individual product pages
  ai/                   Jeeym AI page
  security/             Security page
  data-residency/       Data residency page
  solutions/[slug]/     20 solution pages (size / team / need)
  pricing/              Pricing with comparison table + FAQ schema
  resources/ about/     Content pages
  contact-sales/ start/ login/   Forms and auth pages
  legal/[slug]/         6 legal pages
  sitemap.ts robots.ts  SEO plumbing
components/
  ui/                   Button, Section, Reveal, Logo, AppIcon, Counter…
  layout/               Header, MegaMenu, MobileNavigation, Footer
  home/                 Homepage sections (hero mockup, workflow, tabs…)
  product/              ProductPageTemplate, ProductMockup, ProductOrbit
  shared/               AIChatDemo, DataResidencyMap, SecurityDashboard,
                        PricingPlans, PricingTable, FAQ, CTASection,
                        ContactForm, SignupForm, LoginForm, Testimonial
lib/                    Content data: products, solutions, navigation,
                        FAQs, legal copy, site config
```

## Content notes

- Customer logos and the featured testimonial are **placeholders** and are
  visibly marked for replacement before publication.
- Legal pages are **templates** flagged for review by counsel.
- No compliance certifications are claimed; a "Security and compliance
  roadmap" placeholder is used instead.
- Data residency copy uses careful language ("regional hosting options",
  "designed to support data residency requirements") and avoids guaranteed
  compliance claims.
- Business plan pricing is intentionally "Contact sales" — no invented price.
