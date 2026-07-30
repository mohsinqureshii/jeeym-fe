"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";
import Button from "@/components/ui/Button";

const inputCls =
  "h-11 w-full rounded-xl border border-line bg-white px-3.5 text-[15px] text-ink placeholder:text-body/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const labelCls = "mb-1.5 block text-[14px] font-semibold text-ink";
const errorCls = "mt-1.5 text-[13px] font-medium text-red-600";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, required, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>
        {label}
        {required ? <span className="ml-0.5 text-red-500">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className={errorCls} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const employeeOptions = ["1–5", "6–25", "26–100", "101–500", "501–2,000", "2,000+"];
const platformOptions = [
  "Google Workspace",
  "Microsoft 365",
  "Slack + other tools",
  "Self-hosted email",
  "None yet",
  "Other",
];
const productOptions = [
  "Mail",
  "Chat",
  "Meetings",
  "Calendar",
  "Drive",
  "Documents",
  "Tasks",
  "Jeeym AI",
];
const residencyOptions = [
  "No specific requirement",
  "Saudi Arabia",
  "United Arab Emirates",
  "Europe",
  "United States",
  "Other / multiple regions",
];
const deploymentOptions = [
  "Jeeym cloud",
  "Dedicated cloud environment",
  "Private deployment",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (p: string) =>
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    const requiredFields: [string, string][] = [
      ["firstName", "Please enter your first name."],
      ["lastName", "Please enter your last name."],
      ["email", "Please enter your work email."],
      ["company", "Please enter your company name."],
      ["employees", "Please select your organisation size."],
      ["country", "Please enter your country."],
    ];
    for (const [field, message] of requiredFields) {
      if (!String(data.get(field) ?? "").trim()) next[field] = message;
    }
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2.5xl border border-line bg-white p-10 text-center shadow-card">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <Check className="h-7 w-7 text-success" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-heading text-ink">Thank you</h2>
        <p className="mx-auto mt-3 max-w-md text-[15.5px] leading-relaxed text-body">
          Our team has received your details and will reach out within one
          business day to design the right workplace for your organisation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2.5xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="firstName" label="First name" required error={errors.firstName}>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            className={inputCls}
            aria-invalid={!!errors.firstName}
          />
        </Field>
        <Field id="lastName" label="Last name" required error={errors.lastName}>
          <input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            className={inputCls}
            aria-invalid={!!errors.lastName}
          />
        </Field>
        <Field id="email" label="Work email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls}
            aria-invalid={!!errors.email}
          />
        </Field>
        <Field id="phone" label="Phone number">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputCls}
          />
        </Field>
        <Field id="company" label="Company" required error={errors.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={inputCls}
            aria-invalid={!!errors.company}
          />
        </Field>
        <Field id="jobTitle" label="Job title">
          <input
            id="jobTitle"
            name="jobTitle"
            autoComplete="organization-title"
            className={inputCls}
          />
        </Field>
        <Field id="employees" label="Number of employees" required error={errors.employees}>
          <select
            id="employees"
            name="employees"
            defaultValue=""
            className={inputCls}
            aria-invalid={!!errors.employees}
          >
            <option value="" disabled>
              Select…
            </option>
            {employeeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field id="country" label="Country" required error={errors.country}>
          <input
            id="country"
            name="country"
            autoComplete="country-name"
            className={inputCls}
            aria-invalid={!!errors.country}
          />
        </Field>
        <Field id="platform" label="Current workplace platform">
          <select id="platform" name="platform" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select…
            </option>
            {platformOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <Field id="residency" label="Data residency requirement">
          <select id="residency" name="residency" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select…
            </option>
            {residencyOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <fieldset>
            <legend className={labelCls}>Required products</legend>
            <div className="flex flex-wrap gap-2">
              {productOptions.map((p) => {
                const active = selectedProducts.includes(p);
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => toggleProduct(p)}
                    aria-pressed={active}
                    className={clsx(
                      "rounded-full border px-4 py-2 text-[14px] font-semibold transition-colors duration-150",
                      active
                        ? "border-brand bg-brand-wash text-brand"
                        : "border-line bg-white text-body hover:border-brand/30"
                    )}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>
        <Field id="deployment" label="Deployment preference">
          <select id="deployment" name="deployment" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select…
            </option>
            {deploymentOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label="Message">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your organisation and what you need from a workplace platform."
              className={clsx(inputCls, "h-auto py-3")}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-[14.5px] text-ink">
            <input
              type="checkbox"
              name="residencyInterest"
              className="mt-0.5 h-5 w-5 rounded border-line text-brand accent-[#2563EB]"
            />
            I am interested in in-country data residency or dedicated
            deployment.
          </label>
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        Contact sales
      </Button>
      <p className="mt-4 text-[13px] leading-relaxed text-body">
        By submitting this form you agree to our{" "}
        <a href="/legal/privacy" className="font-semibold text-brand hover:text-brand-deep">
          privacy policy
        </a>
        . We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
