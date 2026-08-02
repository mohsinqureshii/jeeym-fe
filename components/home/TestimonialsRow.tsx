import { ArrowRight, Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/**
 * Placeholder testimonial cards.
 * CMS note: replace with verified customer quotes before publication.
 */
const quotes = [
  {
    quote:
      "Jeeym gave our team one place for communication, files, meetings and everyday work. The experience became simpler for employees and easier for IT to manage.",
    role: "Head of Technology",
    org: "Regional organisation",
    initials: "HT",
    color: "#2563EB",
  },
  {
    quote:
      "Moving from five separate tools to one platform cut our onboarding time and made daily handovers far clearer for every shift.",
    role: "Operations Director",
    org: "Logistics group",
    initials: "OD",
    color: "#059669",
  },
  {
    quote:
      "One admin console and one identity across every application—that is what made the difference for our small IT team.",
    role: "IT Manager",
    org: "Retail chain",
    initials: "IT",
    color: "#7C3AED",
  },
];

export default function TestimonialsRow() {
  return (
    <section className="bg-gradient-to-b from-[#F6F7FF] to-[#EBEEFF] py-16 sm:py-20 lg:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Quote cards — left */}
        <div className="order-2 space-y-4 lg:order-1">
          {quotes.map((q, i) => (
            <Reveal key={q.role} x={-28} y={0} delay={i * 0.1}>
              <figure className="rounded-2.5xl border border-white/80 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                    style={{ backgroundColor: q.color }}
                    aria-hidden="true"
                  >
                    {q.initials}
                  </span>
                  <div className="min-w-0">
                    <blockquote className="text-[14.5px] font-medium leading-relaxed text-ink">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-2.5 text-[13px] text-body">
                      <span className="font-bold text-ink">{q.role}</span> ·{" "}
                      {q.org}
                    </figcaption>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Text — right */}
        <Reveal x={28} y={0} className="order-1 lg:order-2">
          <Quote
            className="h-10 w-10 rounded-xl bg-brand p-2 text-white"
            aria-hidden="true"
          />
          <h2 className="mt-5 text-display text-ink">
            Hear from organisations like yours
          </h2>
          <p className="mt-4 max-w-md text-lead text-body">
            From startups to regulated enterprises, teams consolidate their
            daily work on Jeeym.
          </p>
          <Button href="/resources#customer-stories" variant="secondary" size="lg" className="mt-7">
            Read customer stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
