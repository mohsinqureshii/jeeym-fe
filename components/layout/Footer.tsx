import Link from "next/link";
import { Globe, Linkedin, MapPin, Youtube } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { footerColumns } from "@/lib/navigation";
import { site } from "@/lib/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const selectCls =
  "h-10 appearance-none rounded-lg border border-white/15 bg-white/5 pl-9 pr-8 text-[14px] font-medium text-white [&>option]:text-ink";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-slate-300" aria-label="Footer">
      <div className="container-site pb-10 pt-16 lg:pt-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={`Footer: ${col.heading}`}>
              <p className="mb-4 text-[14px] font-bold text-white">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14px] text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Logo inverted />
            <p className="text-[14px] text-slate-400">
              © 2026 Jeeym. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="sr-only" htmlFor="footer-language">
              Language
            </label>
            <div className="relative">
              <Globe
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <select id="footer-language" defaultValue="en" className={selectCls}>
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
              </select>
            </div>

            <label className="sr-only" htmlFor="footer-region">
              Region
            </label>
            <div className="relative">
              <MapPin
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <select id="footer-region" defaultValue="global" className={selectCls}>
                <option value="global">Global</option>
                <option value="sa">Saudi Arabia</option>
                <option value="ae">United Arab Emirates</option>
                <option value="eu">Europe</option>
                <option value="us">United States</option>
              </select>
            </div>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jeeym on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={site.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jeeym on X"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jeeym on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
