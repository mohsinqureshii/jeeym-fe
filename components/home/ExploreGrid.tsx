import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  LifeBuoy,
  Newspaper,
  PackageOpen,
  Users2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const tiles = [
  {
    icon: BookOpen,
    title: "Product guides",
    copy: "Set up your workplace step by step.",
    href: "/resources#guides",
  },
  {
    icon: Newspaper,
    title: "Blog",
    copy: "Product thinking from the Jeeym team.",
    href: "/resources#blog",
  },
  {
    icon: LifeBuoy,
    title: "Help centre",
    copy: "Answers for every application.",
    href: "/resources#help-centre",
  },
  {
    icon: Users2,
    title: "Customer stories",
    copy: "How organisations run on Jeeym.",
    href: "/resources#customer-stories",
  },
  {
    icon: Code2,
    title: "Documentation",
    copy: "APIs, webhooks and integrations.",
    href: "/resources#developers",
  },
  {
    icon: PackageOpen,
    title: "Migration centre",
    copy: "Move email, files and users with help.",
    href: "/resources#migration",
  },
];

export default function ExploreGrid() {
  return (
    <section className="bg-gradient-to-b from-[#FFFBF3] to-[#FCF0DF] py-16 sm:py-20 lg:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        {/* Tiles — left */}
        <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
          {tiles.map((tile, i) => (
            <Reveal key={tile.title} x={-28} y={0} delay={Math.min(i * 0.06, 0.3)}>
              <Link
                href={tile.href}
                className="group flex h-full items-start gap-3.5 rounded-2xl border border-white/80 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-app-calendar"
                  aria-hidden="true"
                >
                  <tile.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-[15.5px] font-bold text-ink group-hover:text-brand">
                    {tile.title}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-relaxed text-body">
                    {tile.copy}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Text — right */}
        <Reveal x={28} y={0} className="order-1 lg:order-2">
          <h2 className="text-display text-ink">
            Explore more and unlock Jeeym&apos;s full power
          </h2>
          <p className="mt-4 max-w-md text-lead text-body">
            Guides, stories, documentation and migration help—everything you
            need to get your organisation up and running.
          </p>
          <Button href="/resources" variant="secondary" size="lg" className="mt-7">
            Visit the resource centre
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
