import type { ProductId } from "./products";

export type SolutionGroup = "By company size" | "By team" | "By need";

export interface Solution {
  slug: string;
  name: string;
  group: SolutionGroup;
  headline: string;
  copy: string;
  points: string[];
  products: ProductId[];
  seoDescription: string;
}

export const solutions: Solution[] = [
  // By company size
  {
    slug: "startups",
    name: "Startups",
    group: "By company size",
    headline: "Move quickly without building a complicated software stack",
    copy: "Give your team email, chat, meetings, files and productivity tools from day one—free for up to 5 users, ready in minutes.",
    points: [
      "Everything included from day one, no tool sprawl",
      "Free for up to 5 users, upgrade when you grow",
      "Company email on your own domain",
      "AI assistance for small teams doing big jobs",
    ],
    products: ["mail", "chat", "meetings", "documents", "ai"],
    seoDescription:
      "One workplace for startup teams: email, chat, meetings, files and AI—free for up to 5 users.",
  },
  {
    slug: "small-businesses",
    name: "Small businesses",
    group: "By company size",
    headline: "Professional tools without enterprise complexity",
    copy: "Run your business on one platform with professional email, shared files, meetings and simple administration anyone can manage.",
    points: [
      "Professional email that builds customer trust",
      "Shared drives that keep company files organised",
      "Simple admin console, no IT department required",
      "Predictable pricing as you add people",
    ],
    products: ["mail", "drive", "calendar", "meetings", "tasks"],
    seoDescription:
      "Professional email, files, meetings and calendars for small businesses—simple to run, easy to grow.",
  },
  {
    slug: "mid-market",
    name: "Mid-market",
    group: "By company size",
    headline: "Create structure as your organisation scales",
    copy: "Bring teams, knowledge and daily work into one connected system with the controls a growing organisation needs.",
    points: [
      "Team spaces, shared drives and org-wide search",
      "Administrative controls that scale with headcount",
      "Migration support from existing platforms",
      "AI that helps every department move faster",
    ],
    products: ["chat", "drive", "search", "directory", "ai"],
    seoDescription:
      "One connected workplace for growing organisations: structure, controls and AI productivity.",
  },
  {
    slug: "enterprises",
    name: "Enterprises",
    group: "By company size",
    headline: "Control collaboration across complex organisations",
    copy: "Manage identities, permissions, security, data location and workplace applications centrally—across every region and business unit.",
    points: [
      "Single sign-on, provisioning and role-based access",
      "Audit logs, retention and governance controls",
      "Regional and in-country data residency options",
      "Dedicated deployment models for sensitive workloads",
    ],
    products: ["mail", "drive", "search", "directory", "ai"],
    seoDescription:
      "Enterprise workplace with SSO, audit logs, governance, data residency options and dedicated deployment.",
  },
  {
    slug: "government",
    name: "Government",
    group: "By company size",
    headline: "A secure digital workplace with flexible deployment options",
    copy: "Support public-sector collaboration, data control, organisational governance and local hosting requirements.",
    points: [
      "In-country hosting and dedicated environment options",
      "Central governance over sharing and access",
      "Auditability across the platform",
      "Designed to support data residency requirements",
    ],
    products: ["mail", "meetings", "drive", "directory", "search"],
    seoDescription:
      "A secure digital workplace for government organisations with local hosting and governance controls.",
  },
  // By team
  {
    slug: "leadership",
    name: "Leadership",
    group: "By team",
    headline: "See the whole organisation from one place",
    copy: "Stay close to decisions, priorities and progress with connected conversations, meeting records and AI briefings.",
    points: [
      "AI briefings before every meeting",
      "Decisions and action items captured automatically",
      "Org-wide visibility with permission-aware search",
      "Leadership channels and confidential spaces",
    ],
    products: ["ai", "meetings", "calendar", "chat"],
    seoDescription:
      "Connected conversations, meeting records and AI briefings for leadership teams.",
  },
  {
    slug: "sales",
    name: "Sales",
    group: "By team",
    headline: "Keep every deal's context in one place",
    copy: "Customer emails, call notes, proposals and follow-ups stay connected—so handovers are clean and follow-ups never slip.",
    points: [
      "Shared mailboxes for sales addresses",
      "Proposals drafted and refined with AI",
      "Meeting notes and action items per account",
      "Tasks and reminders for every follow-up",
    ],
    products: ["mail", "meetings", "documents", "tasks"],
    seoDescription:
      "One workplace for sales teams: shared inboxes, AI-drafted proposals and follow-up tracking.",
  },
  {
    slug: "operations",
    name: "Operations",
    group: "By team",
    headline: "Turn process into visible, accountable work",
    copy: "Runbooks, checklists, task lists and shared calendars keep operational work moving and auditable.",
    points: [
      "Shared notebooks for runbooks and SOPs",
      "Recurring tasks for operational routines",
      "Team calendars for schedules and coverage",
      "Spreadsheets for trackers and reporting",
    ],
    products: ["tasks", "notes", "spreadsheets", "calendar"],
    seoDescription:
      "Runbooks, recurring tasks, trackers and shared calendars for operations teams.",
  },
  {
    slug: "human-resources",
    name: "Human resources",
    group: "By team",
    headline: "Support people from offer letter to exit",
    copy: "Onboarding guides, policy documents, the org directory and confidential spaces—managed with the right access controls.",
    points: [
      "Onboarding notebooks new starters actually read",
      "Policy documents with controlled access",
      "A live directory with teams and reporting lines",
      "Confidential channels for sensitive matters",
    ],
    products: ["directory", "documents", "notes", "chat"],
    seoDescription:
      "Onboarding, policies, directory and confidential collaboration for HR teams.",
  },
  {
    slug: "finance",
    name: "Finance",
    group: "By team",
    headline: "Work with numbers the whole business trusts",
    copy: "Shared spreadsheets, protected ranges, version history and controlled sharing keep financial data accurate and contained.",
    points: [
      "One source of truth for budgets and forecasts",
      "Protected ranges and cell-level history",
      "Controlled sharing and download restrictions",
      "AI summaries of financial documents",
    ],
    products: ["spreadsheets", "drive", "documents", "ai"],
    seoDescription:
      "Trusted spreadsheets, protected data and controlled sharing for finance teams.",
  },
  {
    slug: "it-teams",
    name: "IT teams",
    group: "By team",
    headline: "One platform to run, not ten to reconcile",
    copy: "Central identity, one admin console, unified policies and a single vendor relationship—instead of a patchwork of overlapping tools.",
    points: [
      "One admin console for users, apps and policies",
      "SSO and provisioning with your identity provider",
      "Audit logs and security alerts in one place",
      "Migration tooling from existing platforms",
    ],
    products: ["directory", "drive", "search", "mail"],
    seoDescription:
      "Central administration, identity integration and audit visibility for IT teams.",
  },
  {
    slug: "customer-support",
    name: "Customer support",
    group: "By team",
    headline: "Answer faster with shared context",
    copy: "Shared mailboxes, internal notes, knowledge notebooks and AI summaries help support teams resolve issues without repeating work.",
    points: [
      "Shared support mailboxes with assignment",
      "Internal notes on customer threads",
      "Knowledge notebooks for common answers",
      "AI-drafted replies grounded in your docs",
    ],
    products: ["mail", "chat", "notes", "ai"],
    seoDescription:
      "Shared inboxes, team knowledge and AI-assisted replies for customer support teams.",
  },
  {
    slug: "project-teams",
    name: "Project teams",
    group: "By team",
    headline: "Everything about the project, in the project",
    copy: "A channel, a drive, a task list and a calendar per project—so context stays with the work, not scattered across inboxes.",
    points: [
      "Project channels with linked files and tasks",
      "Shared drives per project",
      "Task boards with owners and deadlines",
      "AI summaries of project status",
    ],
    products: ["chat", "tasks", "drive", "documents"],
    seoDescription:
      "Project channels, drives, task boards and AI status summaries for project teams.",
  },
  // By need
  {
    slug: "remote-collaboration",
    name: "Remote collaboration",
    group: "By need",
    headline: "One workplace for teams in many places",
    copy: "Meetings, chat, shared documents and asynchronous updates keep distributed teams aligned across timezones.",
    points: [
      "HD meetings with recordings for other timezones",
      "Async updates in channels and documents",
      "AI catch-up summaries after time away",
      "Consistent experience on every device",
    ],
    products: ["meetings", "chat", "documents", "ai"],
    seoDescription:
      "Meetings, chat, documents and AI catch-up for distributed and remote teams.",
  },
  {
    slug: "secure-communication",
    name: "Secure communication",
    group: "By need",
    headline: "Confidential conversations, properly controlled",
    copy: "Encryption, access controls, retention policies and auditability protect sensitive communication across mail, chat and meetings.",
    points: [
      "Encryption in transit and at rest",
      "Private channels and controlled membership",
      "Retention and legal hold options",
      "Audit logs across communication surfaces",
    ],
    products: ["mail", "chat", "meetings", "drive"],
    seoDescription:
      "Encrypted, auditable communication with retention controls for sensitive organisations.",
  },
  {
    slug: "knowledge-management",
    name: "Knowledge management",
    group: "By need",
    headline: "Make what your organisation knows findable",
    copy: "Notebooks, documents, decisions and meeting records become a living knowledge base—searchable by everyone with the right access.",
    points: [
      "Shared notebooks for team knowledge",
      "Meeting decisions captured automatically",
      "Organisation-wide, permission-aware search",
      "AI answers with citations to sources",
    ],
    products: ["notes", "search", "documents", "ai"],
    seoDescription:
      "Turn documents, notes and decisions into searchable organisational knowledge with AI answers.",
  },
  {
    slug: "data-residency",
    name: "Data residency",
    group: "By need",
    headline: "Keep workplace data where it needs to be",
    copy: "Regional and in-country hosting options, dedicated environments and customer-selected data location for organisations with residency requirements.",
    points: [
      "Regional hosting options",
      "In-country deployment options",
      "Dedicated environments for isolation",
      "Customer-selected data location",
    ],
    products: ["drive", "mail", "search", "directory"],
    seoDescription:
      "Regional and in-country data residency options with dedicated deployment models.",
  },
  {
    slug: "ai-productivity",
    name: "AI productivity",
    group: "By need",
    headline: "AI that works where your team works",
    copy: "Drafting, summarising, preparation and action—built into mail, chat, meetings and documents rather than bolted on beside them.",
    points: [
      "AI in every application, one assistant",
      "Grounded in your organisation's content",
      "Strictly permission-aware answers",
      "Admin controls over AI availability",
    ],
    products: ["ai", "mail", "meetings", "documents"],
    seoDescription:
      "Built-in AI assistance across mail, chat, meetings and documents—permission-aware by design.",
  },
  {
    slug: "document-collaboration",
    name: "Document collaboration",
    group: "By need",
    headline: "Write, review and decide in one live document",
    copy: "Real-time co-editing, suggestions, comments and version history replace attachment ping-pong.",
    points: [
      "Real-time editing with suggestions",
      "One live version, never stale copies",
      "Comments with mentions and resolution",
      "Templates for consistent output",
    ],
    products: ["documents", "spreadsheets", "presentations", "drive"],
    seoDescription:
      "Real-time document, spreadsheet and presentation collaboration with version history.",
  },
  {
    slug: "business-continuity",
    name: "Business continuity",
    group: "By need",
    headline: "Keep the organisation working through disruption",
    copy: "Cloud-based work, backup and recovery, device flexibility and clear ownership keep teams productive when circumstances change.",
    points: [
      "Work from any device, anywhere",
      "Backup and recovery for organisational data",
      "Files owned by teams, not laptops",
      "Admin controls for rapid response",
    ],
    products: ["drive", "meetings", "chat", "mail"],
    seoDescription:
      "Cloud workplace with backup, recovery and device flexibility for business continuity.",
  },
];

export const solutionGroups: SolutionGroup[] = [
  "By company size",
  "By team",
  "By need",
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function solutionsByGroup(group: SolutionGroup): Solution[] {
  return solutions.filter((s) => s.group === group);
}
