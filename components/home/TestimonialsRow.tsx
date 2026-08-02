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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-display text-ink">
              Hear from organisations like yours
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.role} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2.5xl border border-line bg-brand-faint/60 p-7 transition-shadow duration-200 hover:shadow-card">
                <Quote
                  className="h-8 w-8 rounded-lg bg-brand p-1.5 text-white"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-[15.5px] font-medium leading-relaxed text-ink">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-bold text-white"
                    style={{ backgroundColor: q.color }}
                    aria-hidden="true"
                  >
                    {q.initials}
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-bold text-ink">
                      {q.role}
                    </span>
                    <span className="block text-[13px] text-body">{q.org}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl rounded-lg border border-dashed border-warning/40 bg-amber-50 px-4 py-2.5 text-center text-[12.5px] font-medium text-amber-700">
            CMS note: placeholder quotes — replace with verified customer
            quotes before publication.
          </p>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <Button href="/resources#customer-stories" variant="secondary">
            Read customer stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
