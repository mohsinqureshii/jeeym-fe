export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const resourcesMenu: NavLink[] = [
  { label: "Help centre", href: "/resources#help-centre" },
  { label: "Product guides", href: "/resources#guides" },
  { label: "Customer stories", href: "/resources#customer-stories" },
  { label: "Blog", href: "/resources#blog" },
  { label: "Webinars", href: "/resources#webinars" },
  { label: "Product updates", href: "/resources#updates" },
  { label: "Developer documentation", href: "/resources#developers" },
  { label: "System status", href: "/resources#status" },
];

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Mail", href: "/mail" },
      { label: "Chat", href: "/chat" },
      { label: "Meetings", href: "/meetings" },
      { label: "Calendar", href: "/calendar" },
      { label: "Drive", href: "/drive" },
      { label: "Documents", href: "/documents" },
      { label: "Spreadsheets", href: "/spreadsheets" },
      { label: "Presentations", href: "/presentations" },
      { label: "Tasks", href: "/tasks" },
      { label: "Notes", href: "/notes" },
      { label: "Directory", href: "/directory" },
      { label: "Search", href: "/search" },
      { label: "Jeeym AI", href: "/ai" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Startups", href: "/solutions/startups" },
      { label: "Small businesses", href: "/solutions/small-businesses" },
      { label: "Mid-market", href: "/solutions/mid-market" },
      { label: "Enterprise", href: "/solutions/enterprises" },
      { label: "Government", href: "/solutions/government" },
      { label: "Regulated organisations", href: "/solutions/secure-communication" },
      { label: "Remote teams", href: "/solutions/remote-collaboration" },
      { label: "IT teams", href: "/solutions/it-teams" },
    ],
  },
  {
    heading: "Security",
    links: [
      { label: "Security overview", href: "/security" },
      { label: "Data residency", href: "/data-residency" },
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Trust centre", href: "/security#trust-centre" },
      { label: "Responsible AI", href: "/ai#responsible-ai" },
      { label: "System status", href: "/resources#status" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help centre", href: "/resources#help-centre" },
      { label: "Guides", href: "/resources#guides" },
      { label: "Customer stories", href: "/resources#customer-stories" },
      { label: "Blog", href: "/resources#blog" },
      { label: "Webinars", href: "/resources#webinars" },
      { label: "Product updates", href: "/resources#updates" },
      { label: "Documentation", href: "/resources#developers" },
      { label: "Migration centre", href: "/resources#migration" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Jeeym", href: "/about" },
      { label: "Careers", href: "/about#careers" },
      { label: "Contact", href: "/contact-sales" },
      { label: "Partners", href: "/about#partners" },
      { label: "Newsroom", href: "/about#newsroom" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Terms of service", href: "/legal/terms" },
      { label: "Acceptable use", href: "/legal/acceptable-use" },
      { label: "Cookie policy", href: "/legal/cookies" },
      { label: "Data processing agreement", href: "/legal/data-processing" },
      { label: "Subprocessors", href: "/legal/subprocessors" },
    ],
  },
];
