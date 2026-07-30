"use client";

import { useState } from "react";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";
import clsx from "clsx";
import Button from "@/components/ui/Button";

const inputCls =
  "h-11 w-full rounded-xl border border-line bg-white px-3.5 text-[15px] text-ink placeholder:text-body/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";
const labelCls = "mb-1.5 block text-[14px] font-semibold text-ink";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#F35325" d="M2 2h9.5v9.5H2z" />
      <path fill="#81BC06" d="M12.5 2H22v9.5h-9.5z" />
      <path fill="#05A6F0" d="M2 12.5h9.5V22H2z" />
      <path fill="#FFBA08" d="M12.5 12.5H22V22h-9.5z" />
    </svg>
  );
}

export function SSOButtons({ mode }: { mode: "up" | "in" }) {
  const verb = mode === "up" ? "Sign up" : "Sign in";
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      <button
        type="button"
        className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-line bg-white text-[14.5px] font-semibold text-ink transition-colors duration-150 hover:bg-brand-faint"
      >
        <GoogleIcon />
        {verb} with Google
      </button>
      <button
        type="button"
        className="flex h-11 items-center justify-center gap-2.5 rounded-xl border border-line bg-white text-[14.5px] font-semibold text-ink transition-colors duration-150 hover:bg-brand-faint"
      >
        <MicrosoftIcon />
        {verb} with Microsoft
      </button>
    </div>
  );
}

export function OrDivider() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <span className="text-[12.5px] font-medium uppercase tracking-wider text-body">
        or
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

const employeeOptions = ["1–5", "6–25", "26–100", "101–500", "500+"];

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("fullName") ?? "").trim())
      next.fullName = "Please enter your full name.";
    const email = String(data.get("email") ?? "").trim();
    if (!email) next.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    const password = String(data.get("password") ?? "");
    if (password.length < 10)
      next.password = "Password must be at least 10 characters.";
    if (!String(data.get("orgName") ?? "").trim())
      next.orgName = "Please enter your organisation name.";
    if (!String(data.get("country") ?? "").trim())
      next.country = "Please enter your country.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2.5xl border border-line bg-white p-10 text-center shadow-panel">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <Check className="h-7 w-7 text-success" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-heading text-ink">Check your inbox</h2>
        <p className="mx-auto mt-3 max-w-sm text-[15.5px] leading-relaxed text-body">
          We&apos;ve sent a verification link to your work email. Verify it to
          continue setting up your Jeeym workplace.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2.5xl border border-line bg-white p-6 shadow-panel sm:p-8">
      <SSOButtons mode="up" />
      <div className="my-5">
        <OrDivider />
      </div>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="fullName" className={labelCls}>
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            className={inputCls}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName ? (
            <p className="mt-1.5 text-[13px] font-medium text-red-600" role="alert">
              {errors.fullName}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="signup-email" className={labelCls}>
            Work email
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls}
            aria-invalid={!!errors.email}
          />
          {errors.email ? (
            <p className="mt-1.5 text-[13px] font-medium text-red-600" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="signup-password" className={labelCls}>
            Password
          </label>
          <div className="relative">
            <input
              id="signup-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              className={clsx(inputCls, "pr-11")}
              aria-invalid={!!errors.password}
              aria-describedby="password-hint"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-body hover:bg-brand-faint"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <p id="password-hint" className="mt-1.5 text-[12.5px] text-body">
            At least 10 characters.
          </p>
          {errors.password ? (
            <p className="mt-1 text-[13px] font-medium text-red-600" role="alert">
              {errors.password}
            </p>
          ) : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="orgName" className={labelCls}>
              Organisation name
            </label>
            <input
              id="orgName"
              name="orgName"
              autoComplete="organization"
              className={inputCls}
              aria-invalid={!!errors.orgName}
            />
            {errors.orgName ? (
              <p className="mt-1.5 text-[13px] font-medium text-red-600" role="alert">
                {errors.orgName}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="signup-country" className={labelCls}>
              Country
            </label>
            <input
              id="signup-country"
              name="country"
              autoComplete="country-name"
              className={inputCls}
              aria-invalid={!!errors.country}
            />
            {errors.country ? (
              <p className="mt-1.5 text-[13px] font-medium text-red-600" role="alert">
                {errors.country}
              </p>
            ) : null}
          </div>
        </div>
        <div>
          <label htmlFor="signup-employees" className={labelCls}>
            Number of employees
          </label>
          <select id="signup-employees" name="employees" defaultValue="1–5" className={inputCls}>
            {employeeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" size="lg" className="w-full">
          Create your workplace
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
        <p className="text-center text-[13px] leading-relaxed text-body">
          Free for up to 5 users. No credit card required. By continuing you
          agree to the{" "}
          <a href="/legal/terms" className="font-semibold text-brand hover:text-brand-deep">
            terms of service
          </a>{" "}
          and{" "}
          <a href="/legal/privacy" className="font-semibold text-brand hover:text-brand-deep">
            privacy policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
