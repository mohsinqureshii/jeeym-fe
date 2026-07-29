import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

interface CTASectionProps {
  headline?: string;
  copy?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
}

export default function CTASection({
  headline = "Give your organisation one better place to work",
  copy = "Start with up to 5 users for free, or speak with our team about enterprise security, migration and data residency.",
  primaryLabel = "Start free",
  primaryHref = "/start",
  secondaryLabel = "Book a demo",
  secondaryHref = "/contact-sales",
  note = "No credit card required.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-bright/30 blur-3xl animate-orb-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-brand-deep/50 blur-3xl animate-orb-slower"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display text-white">{headline}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lead text-blue-100">
              {copy}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={primaryHref}
                variant="inverted"
                size="lg"
                className="w-full sm:w-auto"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={secondaryHref}
                size="lg"
                className="w-full border border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              >
                {secondaryLabel}
              </Button>
            </div>
            {note ? <p className="mt-5 text-[15px] text-blue-100">{note}</p> : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
