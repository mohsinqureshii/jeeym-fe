import {
  ArrowRight,
  BookOpen,
  ListTodo,
  PenLine,
  ShieldCheck,
  TextQuote,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/Section";
import AIChatDemo from "@/components/shared/AIChatDemo";
import FeatureGrid from "@/components/shared/FeatureGrid";

const aiFeatures = [
  {
    title: "Understand company knowledge",
    copy: "Ask questions across messages, files, documents, meetings and approved company knowledge.",
    icon: BookOpen,
  },
  {
    title: "Write and create",
    copy: "Draft emails, documents, reports, presentations and internal communications.",
    icon: PenLine,
  },
  {
    title: "Summarise work",
    copy: "Turn long conversations, meetings and documents into clear summaries.",
    icon: TextQuote,
  },
  {
    title: "Take action",
    copy: "Create tasks, schedule meetings, organise information and move work forward.",
    icon: ListTodo,
  },
  {
    title: "Respect permissions",
    copy: "Jeeym AI only accesses information the user is authorised to view.",
    icon: ShieldCheck,
  },
];

export default function AISection() {
  return (
    <section
      id="jeeym-ai"
      className="relative overflow-hidden bg-gradient-to-br from-brand-faint via-white to-[#F4F1FE] py-16 sm:py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#EDE9FE]/70 blur-3xl animate-orb-slow"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <SectionHeader
          eyebrow="Jeeym AI"
          title="AI that understands your organisation's work"
          copy="Jeeym AI works across your workplace, helping employees find information, write faster, prepare for meetings, summarise conversations and turn decisions into action."
        />
        <Reveal>
          <AIChatDemo />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid items={aiFeatures} columns={3} accent="#6D5AE6" />
        </div>
        <Reveal className="mt-12 text-center">
          <Button href="/ai" size="lg">
            Explore Jeeym AI
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
