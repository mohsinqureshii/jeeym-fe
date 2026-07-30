import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import SignupForm from "@/components/shared/SignupForm";

export const metadata: Metadata = {
  title: "Start free — Create your Jeeym workplace",
  description:
    "Create your Jeeym workplace in minutes. Free for up to 5 users. No credit card required.",
  alternates: { canonical: "/start" },
};

const steps = [
  { title: "Enter work email", copy: "Start with the address you use at work." },
  { title: "Verify email", copy: "Confirm it's really you with one click." },
  { title: "Name the organisation", copy: "This becomes your workplace identity." },
  { title: "Choose workspace address", copy: "Pick your yourcompany.jeeym.com address." },
  { title: "Add company domain", copy: "Connect your domain for business email." },
  { title: "Invite team members", copy: "Bring in up to 4 colleagues for free." },
  { title: "Select applications", copy: "Turn on the apps your team needs." },
  { title: "Enter workplace", copy: "Start working in your new workplace." },
];

export default function StartPage() {
  return (
    <section className="relative overflow-hidden bg-brand-faint pb-20 pt-14 sm:pt-20">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[26rem] w-[26rem] translate-x-1/4 rounded-full bg-brand-wash blur-3xl animate-orb-slow"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Start free</p>
            <h1 className="mt-4 text-hero text-ink">
              Create your Jeeym workplace
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lead text-body">
              Start free with up to 5 users. No credit card required.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <Reveal delay={0.05} className="order-2 lg:order-1">
            <p className="mb-5 text-[15px] font-bold text-ink">
              What happens next
            </p>
            <ol className="relative space-y-0">
              {steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < steps.length - 1 ? (
                    <span
                      className="absolute left-[15px] top-8 h-[calc(100%-1.75rem)] w-px bg-line"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[13px] font-bold text-brand shadow-sm">
                    {i + 1}
                  </span>
                  <div className="pt-0.5">
                    <p className="text-[15.5px] font-bold text-ink">{step.title}</p>
                    <p className="mt-0.5 text-[14px] text-body">{step.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <SignupForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
