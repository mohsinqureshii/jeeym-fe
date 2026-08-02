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
import Reveal from "@/components/ui/Reveal";

const tiles = [
  {
    icon: BookOpen,
    title: "Product guides",
    copy: "Set up your workplace, applications and policies step by step.",
    href: "/resources#guides",
  },
  {
    icon: Newspaper,
    title: "Blog",
    copy: "Product thinking and workplace practices from the Jeeym team.",
    href: "/resources#blog",
  },
  {
    icon: LifeBuoy,
    title: "Help centre",
    copy: "Answers and troubleshooting for every Jeeym application.",
    href: "/resources#help-centre",
  },
  {
    icon: Users2,
    title: "Customer stories",
    copy: "How organisations run their daily work on Jeeym.",
    href: "/resources#customer-stories",
  },
  {
    icon: Code2,
    title: "Documentation",
    copy: "APIs, webhooks and integration guides for developers.",
    href: "/resources#developers",
  },
  {
    icon: PackageOpen,
    title: "Migration centre",
    copy: "Move email, files, calendars and users with guided support.",
    href: "/resources#migration",
  },
];

export default function ExploreGrid() {
  return (
    <section className="bg-gradient-to-b from-[#FFFBF3] to-[#FCF0DF] py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-display text-ink">
              Explore more and unlock Jeeym&apos;s full power
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile, i) => (
            <Reveal key={tile.title} delay={Math.min((i % 3) * 0.06, 0.18)}>
              <Link
                href={tile.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-wash text-brand" aria-hidden="true">
                  <tile.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[17px] font-bold text-ink group-hover:text-brand">
                  {tile.title}
                </h3>
                <p className="mt-1.5 flex-1 text-[14px] leading-relaxed text-body">
                  {tile.copy}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-brand">
                  Explore
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
