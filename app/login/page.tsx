import type { Metadata } from "next";
import {
  Calendar,
  FileText,
  HardDrive,
  Mail,
  MessageSquare,
  Sparkles,
  Video,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import LoginForm from "@/components/shared/LoginForm";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Jeeym workplace.",
  alternates: { canonical: "/login" },
  robots: { index: false },
};

const floatingApps = [
  { icon: Mail, color: "#2563EB", className: "left-[12%] top-[22%]", delay: "0s" },
  { icon: MessageSquare, color: "#8B5CF6", className: "right-[16%] top-[16%]", delay: "1.2s" },
  { icon: Video, color: "#059669", className: "left-[16%] top-[76%]", delay: "0.6s" },
  { icon: Calendar, color: "#F97316", className: "right-[12%] top-[46%]", delay: "1.8s" },
  { icon: HardDrive, color: "#0D9488", className: "left-[42%] top-[38%]", delay: "0.3s" },
  { icon: FileText, color: "#3B82F6", className: "right-[34%] top-[68%]", delay: "0.9s" },
];

export default function LoginPage() {
  return (
    <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-brand-deep via-brand to-brand-bright lg:block">
        <div
          className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-orb-slow"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-deep/60 blur-3xl animate-orb-slower"
          aria-hidden="true"
        />
        {floatingApps.map(({ icon: Icon, color, className, delay }, i) => (
          <span
            key={i}
            className={`absolute ${className} flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-card-hover animate-orb-slow`}
            style={{ animationDelay: delay }}
            aria-hidden="true"
          >
            <Icon className="h-5 w-5" style={{ color }} />
          </span>
        ))}
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo inverted />
          <div className="max-w-md">
            <span
              className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15"
              aria-hidden="true"
            >
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <p className="text-[32px] font-bold leading-tight tracking-tight text-white">
              One workplace.
              <br />
              Everything your team needs.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-blue-100">
              Email, chat, meetings, files, documents, tasks and AI—connected
              in one secure workplace.
            </p>
          </div>
          <p className="text-[13px] text-blue-200">
            © 2026 Jeeym. All rights reserved.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-white px-5 py-16 sm:px-8">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
