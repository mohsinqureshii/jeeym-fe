import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroMockup from "./HeroMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-faint pb-24 pt-16 sm:pt-20 lg:pb-32 lg:pt-24">
      {/* Soft background orbs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-[80%] rounded-full bg-brand-wash opacity-80 blur-3xl animate-orb-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-[28rem] w-[28rem] translate-x-1/3 rounded-full bg-[#EDE9FE] opacity-60 blur-3xl animate-orb-slower"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-[14px] font-medium text-brand shadow-[0_1px_2px_rgba(23,70,162,0.06)]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Jeeym is free for teams of up to 5 users
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-hero text-ink">
              One workplace.
              <br />
              Everything your team needs.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-2xl text-lead text-body sm:text-xl sm:leading-relaxed">
              Bring email, conversations, meetings, files, documents, tasks and
              AI into one secure workplace designed for how modern organisations
              work.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/start" size="lg" className="w-full sm:w-auto">
                Start free
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href="/contact-sales"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a demo
              </Button>
            </div>
            <p className="mt-5 text-[15px] text-body">
              Free for up to 5 users. No credit card required.
            </p>
          </Reveal>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
