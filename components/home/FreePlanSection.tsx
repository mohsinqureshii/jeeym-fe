import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const freeFeatures = [
  "Up to 5 users",
  "Business email",
  "Team chat",
  "Video meetings",
  "Calendar",
  "Cloud drive",
  "Documents",
  "Spreadsheets",
  "Presentations",
  "Tasks and notes",
  "Jeeym AI starter access",
  "Standard security controls",
];

export default function FreePlanSection() {
  return (
    <Section id="free-plan" tone="wash">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-display text-ink">
            Start working together for free
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-body">
            Jeeym is free for organisations with up to 5 users. Set up your
            workplace, invite your team and start using Jeeym without a credit
            card.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-3 text-left sm:grid-cols-2 lg:grid-cols-3">
            {freeFeatures.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[15px] font-medium text-ink">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Check className="h-3.5 w-3.5 text-success" aria-hidden="true" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.18}>
          <Button href="/start" size="lg" className="mt-10">
            Start free
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <p className="mt-4 text-[14.5px] text-body">
            Upgrade only when your organisation grows or requires advanced
            controls.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
