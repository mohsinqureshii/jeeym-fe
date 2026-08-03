import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroMockup from "./HeroMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-wash via-[#F5F4FF] to-white pb-20 pt-14 sm:pt-16 lg:pb-24 lg:pt-20">
      {/* Soft background orbs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-[85%] rounded-full bg-[#DBEAFE] opacity-70 blur-3xl animate-orb-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[30rem] w-[30rem] translate-x-1/3 rounded-full bg-[#EDE9FE] opacity-70 blur-3xl animate-orb-slower"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[24rem] w-[24rem] -translate-x-1/3 rounded-full bg-[#FFF1E6] opacity-50 blur-3xl animate-orb-slow"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12">
          {/* Copy — left */}
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-1.5 text-[14px] font-medium text-brand shadow-[0_1px_2px_rgba(23,70,162,0.06)]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Jeeym is free for teams of up to 5 users
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-7 text-[clamp(2.5rem,4.2vw,3.625rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                One workplace. Everything your team needs.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 text-lead text-body sm:text-xl sm:leading-relaxed">
                Bring email, conversations, meetings, files, documents, tasks
                and AI into one secure workplace designed for how modern
                organisations work.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

          {/* Product mockup — right */}
          <HeroMockup className="mx-auto w-full min-w-0 max-w-2xl lg:mx-0 lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}
