import { Check, Minus } from "lucide-react";
import clsx from "clsx";

type Cell = string | boolean;

interface Row {
  label: string;
  free: Cell;
  business: Cell;
  enterprise: Cell;
}

const rows: Row[] = [
  { label: "User limits", free: "Up to 5 users", business: "6+ users", enterprise: "Custom" },
  { label: "Storage", free: "Standard", business: "Increased", enterprise: "Custom" },
  { label: "Mail", free: true, business: true, enterprise: true },
  { label: "Chat", free: true, business: true, enterprise: true },
  { label: "Meetings", free: "Standard", business: "Advanced", enterprise: "Advanced" },
  { label: "Calendar", free: true, business: true, enterprise: true },
  { label: "Documents", free: true, business: true, enterprise: true },
  { label: "Spreadsheets", free: true, business: true, enterprise: true },
  { label: "Presentations", free: true, business: true, enterprise: true },
  { label: "Tasks", free: true, business: true, enterprise: true },
  { label: "AI access", free: "Starter", business: "Enhanced", enterprise: "Enterprise controls" },
  { label: "Admin controls", free: "Basic", business: "Advanced", enterprise: "Enterprise governance" },
  { label: "Single sign-on (SSO)", free: false, business: false, enterprise: true },
  { label: "Audit logs", free: false, business: false, enterprise: true },
  { label: "Retention", free: false, business: false, enterprise: true },
  { label: "Data residency", free: false, business: false, enterprise: "Regional and in-country options" },
  { label: "Dedicated deployment", free: false, business: false, enterprise: "Available" },
  { label: "Support", free: "Community", business: "Priority", enterprise: "Enterprise" },
  { label: "Migration assistance", free: false, business: "Guided tooling", enterprise: "Full assistance" },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check className="h-5 w-5 text-success" aria-label="Included" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="h-4 w-4 text-line" aria-label="Not included" />
      </span>
    );
  }
  return <span className="text-[14px] font-medium text-ink/85">{value}</span>;
}

export default function PricingTable() {
  return (
    <div className="overflow-x-auto rounded-2.5xl border border-line bg-white shadow-card">
      <table className="w-full min-w-[44rem] border-collapse text-left">
        <caption className="sr-only">
          Comparison of Jeeym Free, Business and Enterprise plan features
        </caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="sticky left-0 bg-white px-6 py-5 text-[15px] font-bold text-ink">
              Features
            </th>
            <th scope="col" className="px-6 py-5 text-center">
              <span className="block text-[16px] font-bold text-ink">Free</span>
              <span className="mt-0.5 block text-[13px] font-medium text-body">
                £0 · up to 5 users
              </span>
            </th>
            <th scope="col" className="bg-brand-faint px-6 py-5 text-center">
              <span className="block text-[16px] font-bold text-brand">Business</span>
              <span className="mt-0.5 block text-[13px] font-medium text-body">
                Contact sales
              </span>
            </th>
            <th scope="col" className="px-6 py-5 text-center">
              <span className="block text-[16px] font-bold text-ink">Enterprise</span>
              <span className="mt-0.5 block text-[13px] font-medium text-body">
                Contact sales
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={clsx(
                "border-b border-line/60 last:border-b-0",
                i % 2 === 1 && "bg-brand-faint/30"
              )}
            >
              <th
                scope="row"
                className="sticky left-0 bg-inherit px-6 py-3.5 text-[14.5px] font-semibold text-ink"
              >
                {row.label}
              </th>
              <td className="px-6 py-3.5 text-center">
                <CellValue value={row.free} />
              </td>
              <td className="bg-brand-faint/60 px-6 py-3.5 text-center">
                <CellValue value={row.business} />
              </td>
              <td className="px-6 py-3.5 text-center">
                <CellValue value={row.enterprise} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
