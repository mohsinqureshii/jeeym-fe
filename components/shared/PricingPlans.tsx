import { ArrowRight, Check } from "lucide-react";
import clsx from "clsx";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export interface Plan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Free",
    price: "£0",
    priceNote: "Free for up to 5 users",
    description: "Everything a small team needs to start working together.",
    features: [
      "Up to 5 users",
      "Core workplace applications",
      "Standard storage",
      "Standard meetings",
      "Starter AI access",
      "Community support",
    ],
    cta: "Start free",
    href: "/start",
  },
  {
    name: "Business",
    price: "Contact sales",
    priceNote: "Configurable monthly pricing per user",
    description: "For growing organisations that need more capacity and control.",
    features: [
      "More users",
      "Increased storage",
      "Advanced meetings",
      "Administrative controls",
      "Enhanced AI access",
      "Priority support",
      "Shared organisational spaces",
    ],
    cta: "Choose Business",
    href: "/contact-sales",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact sales",
    priceNote: "Tailored to your organisation",
    description: "Advanced security, governance and deployment flexibility.",
    features: [
      "Advanced security",
      "Single sign-on",
      "User provisioning",
      "Audit logs",
      "Data retention",
      "Data residency options",
      "Dedicated deployment",
      "Enterprise support",
      "Migration assistance",
    ],
    cta: "Contact sales",
    href: "/contact-sales",
  },
];

export default function PricingPlans() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 0.08}>
          <article
            className={clsx(
              "relative flex h-full flex-col rounded-2.5xl border bg-white p-7 sm:p-8",
              plan.highlighted
                ? "border-brand shadow-[0_12px_40px_-8px_rgba(37,99,235,0.25)]"
                : "border-line shadow-card"
            )}
          >
            {plan.highlighted ? (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-[12.5px] font-bold text-white">
                Most popular
              </span>
            ) : null}
            <h3 className="text-[18px] font-bold text-ink">{plan.name}</h3>
            <p className="mt-3 text-[34px] font-bold tracking-tight text-ink">
              {plan.price}
            </p>
            <p className="mt-1 text-[14px] font-medium text-body">
              {plan.priceNote}
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-body">
              {plan.description}
            </p>
            <ul className="mt-6 flex-1 space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              href={plan.href}
              variant={plan.highlighted ? "primary" : "secondary"}
              size="lg"
              className="mt-8 w-full"
            >
              {plan.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
