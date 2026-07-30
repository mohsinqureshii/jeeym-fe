"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { OrDivider, SSOButtons } from "./SignupForm";

const inputCls =
  "h-11 w-full rounded-xl border border-line bg-white px-3.5 text-[15px] text-ink placeholder:text-body/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export default function LoginForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <Check className="h-7 w-7 text-success" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-[24px] font-bold text-ink">
          Check your email
        </h2>
        <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-body">
          This is a preview build — sign-in will be connected to your Jeeym
          workplace at launch.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-[28px] font-bold tracking-tight text-ink">
        Sign in to Jeeym
      </h1>
      <p className="mt-2 text-[15px] text-body">
        Welcome back. Enter your work email to continue.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
        <div>
          <label htmlFor="login-email" className="mb-1.5 block text-[14px] font-semibold text-ink">
            Email address
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls}
            aria-invalid={!!error}
          />
          {error ? (
            <p className="mt-1.5 text-[13px] font-medium text-red-600" role="alert">
              {error}
            </p>
          ) : null}
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label htmlFor="login-password" className="text-[14px] font-semibold text-ink">
              Password
            </label>
            <Link
              href="#"
              className="text-[13.5px] font-semibold text-brand hover:text-brand-deep"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            className={inputCls}
          />
        </div>
        <Button type="submit" size="lg" className="w-full">
          Continue
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </form>

      <div className="my-6">
        <OrDivider />
      </div>
      <SSOButtons mode="in" />

      <p className="mt-7 text-center text-[14.5px] text-body">
        New to Jeeym?{" "}
        <Link href="/start" className="font-semibold text-brand hover:text-brand-deep">
          Create a workplace
        </Link>
      </p>
    </div>
  );
}
