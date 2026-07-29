import type { LucideIcon } from "lucide-react";
import {
  Mail,
  MessageSquare,
  Video,
  Calendar,
  HardDrive,
  FileText,
  Table2,
  Presentation,
  ListChecks,
  StickyNote,
  Users,
  Search,
  Sparkles,
} from "lucide-react";

export type ProductId =
  | "mail"
  | "chat"
  | "meetings"
  | "calendar"
  | "drive"
  | "documents"
  | "spreadsheets"
  | "presentations"
  | "tasks"
  | "notes"
  | "directory"
  | "search"
  | "ai";

export type ProductCategory =
  | "Communication"
  | "Create and collaborate"
  | "Organise work"
  | "Intelligence";

export interface ProductBenefit {
  title: string;
  copy: string;
  points: string[];
}

export interface Product {
  id: ProductId;
  name: string;
  href: string;
  /** Short one-line description used in menus. */
  tagline: string;
  /** Hex accent colour for icons and previews. */
  color: string;
  icon: LucideIcon;
  category: ProductCategory;
  /** Card description used on the homepage grid. */
  description: string;
  /** Six feature points used on cards and feature grids. */
  features: string[];
  hero: { headline: string; copy: string };
  benefits: ProductBenefit[];
  featureGrid: { title: string; copy: string }[];
  integrations: { with: ProductId; copy: string }[];
  security: string;
  related: ProductId[];
  seo: { title: string; description: string };
}

export const products: Product[] = [
  {
    id: "mail",
    name: "Mail",
    href: "/mail",
    tagline: "Secure business email built into your workplace.",
    color: "#2563EB",
    icon: Mail,
    category: "Communication",
    description:
      "Professional business email connected to your conversations, calendar, files and company knowledge.",
    features: [
      "Custom company email",
      "Shared mailboxes",
      "Smart filtering",
      "Advanced search",
      "Email scheduling",
      "AI-assisted replies",
    ],
    hero: {
      headline: "Business email that belongs to your workplace",
      copy: "Jeeym Mail gives every employee a professional address on your company domain—connected to the conversations, meetings, files and knowledge they already work with.",
    },
    benefits: [
      {
        title: "Email that keeps its context",
        copy: "A customer email rarely ends in the inbox. In Jeeym, you can share a message with a channel, schedule a meeting from it or turn it into a task—without forwarding, copying or losing the thread.",
        points: [
          "Share emails into team channels",
          "Create meetings and tasks from messages",
          "See related files and conversations alongside every thread",
        ],
      },
      {
        title: "An inbox your whole team can run",
        copy: "Shared mailboxes such as sales@ or support@ live next to personal inboxes, with clear ownership so nothing is answered twice or missed entirely.",
        points: [
          "Shared mailboxes with assignment",
          "Internal notes on customer threads",
          "Collision detection when two people reply",
        ],
      },
      {
        title: "Faster replies with Jeeym AI",
        copy: "Draft responses, summarise long threads and surface the details you need—using only the information you are authorised to see.",
        points: [
          "AI-drafted replies in your tone",
          "Thread summaries on demand",
          "Suggested follow-ups and reminders",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Custom company email",
        copy: "Professional addresses on your own domain for every employee and team.",
      },
      {
        title: "Shared mailboxes",
        copy: "Run sales@, support@ and other team addresses with clear ownership.",
      },
      {
        title: "Smart filtering",
        copy: "Automatic categorisation keeps newsletters and notifications out of the way.",
      },
      {
        title: "Advanced search",
        copy: "Find any message by sender, attachment, date or content in seconds.",
      },
      {
        title: "Email scheduling",
        copy: "Write now and send at the right time for any timezone.",
      },
      {
        title: "AI-assisted replies",
        copy: "Draft, improve and summarise email with Jeeym AI built into the composer.",
      },
    ],
    integrations: [
      {
        with: "calendar",
        copy: "Turn any email into a scheduled meeting with attendees and an agenda.",
      },
      {
        with: "chat",
        copy: "Share a customer thread into a channel and decide together.",
      },
      {
        with: "tasks",
        copy: "Convert requests into assigned tasks with owners and deadlines.",
      },
    ],
    security:
      "Mail is protected with encryption in transit and at rest, phishing and malware screening, and organisation-level policies for retention, forwarding and external sending.",
    related: ["calendar", "chat", "ai"],
    seo: {
      title: "Jeeym Mail — Secure business email",
      description:
        "Professional business email on your company domain, connected to chat, meetings, files and AI. Part of the Jeeym workplace.",
    },
  },
  {
    id: "chat",
    name: "Chat",
    href: "/chat",
    tagline: "Channels, direct messages and connected team conversations.",
    color: "#8B5CF6",
    icon: MessageSquare,
    category: "Communication",
    description:
      "Organise conversations through channels, direct messages and team spaces.",
    features: [
      "Public and private channels",
      "Direct messages",
      "Threads and reactions",
      "File sharing",
      "Voice messages",
      "AI conversation summaries",
    ],
    hero: {
      headline: "Team conversations with everything attached",
      copy: "Jeeym Chat keeps daily communication organised in channels and direct messages—where files, meetings, tasks and decisions stay connected to the discussion that produced them.",
    },
    benefits: [
      {
        title: "Channels that map to how you work",
        copy: "Create channels for teams, projects, offices and announcements. Conversations stay discoverable, searchable and open to the people who need them.",
        points: [
          "Public and private channels",
          "Project and office spaces",
          "Announcement channels with posting controls",
        ],
      },
      {
        title: "From message to action in one step",
        copy: "Turn a message into a task, schedule a meeting from a thread or open a document without leaving the conversation.",
        points: [
          "Create tasks from any message",
          "Start meetings from a channel",
          "Share and preview files inline",
        ],
      },
      {
        title: "Catch up in minutes, not hours",
        copy: "Jeeym AI summarises busy channels and long threads so people returning from meetings or time off can catch up quickly.",
        points: [
          "Channel and thread summaries",
          "Highlighted decisions and actions",
          "Unread digests each morning",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Public and private channels",
        copy: "Open spaces for teams and controlled spaces for sensitive work.",
      },
      {
        title: "Direct messages",
        copy: "One-to-one and small group conversations with full history.",
      },
      {
        title: "Threads and reactions",
        copy: "Keep discussions organised without flooding the channel.",
      },
      {
        title: "File sharing",
        copy: "Share Drive files with permissions that follow the file.",
      },
      {
        title: "Voice messages",
        copy: "Talk it through when typing is too slow, with AI transcripts.",
      },
      {
        title: "AI conversation summaries",
        copy: "Summarise channels, threads and days you missed.",
      },
    ],
    integrations: [
      {
        with: "meetings",
        copy: "Start or schedule a meeting from any conversation in one click.",
      },
      {
        with: "tasks",
        copy: "Turn decisions into assigned tasks directly from messages.",
      },
      {
        with: "drive",
        copy: "Files shared in chat keep their permissions and version history.",
      },
    ],
    security:
      "Chat messages are encrypted in transit and at rest, with retention policies, legal hold options and admin controls over external and guest access.",
    related: ["meetings", "tasks", "ai"],
    seo: {
      title: "Jeeym Chat — Organised team messaging",
      description:
        "Channels, direct messages, threads and AI summaries—connected to meetings, files and tasks in the Jeeym workplace.",
    },
  },
  {
    id: "meetings",
    name: "Meetings",
    href: "/meetings",
    tagline: "Video meetings, screen sharing, recordings and AI summaries.",
    color: "#059669",
    icon: Video,
    category: "Communication",
    description:
      "Run secure video meetings with screen sharing, recordings, transcripts and action items.",
    features: [
      "HD video meetings",
      "Screen sharing",
      "Meeting recordings",
      "Live captions",
      "AI-generated notes",
      "Action-item tracking",
    ],
    hero: {
      headline: "Meetings that end with notes and next steps",
      copy: "Jeeym Meetings combines reliable HD video with recordings, transcripts and AI notes—so every meeting produces a record, decisions and actions your team can use.",
    },
    benefits: [
      {
        title: "Start from anywhere in your workplace",
        copy: "Join from a calendar event, a chat channel or a direct message. Meeting links, agendas and related documents travel together.",
        points: [
          "One-click join from Calendar and Chat",
          "Agendas attached to every event",
          "Related documents in the meeting panel",
        ],
      },
      {
        title: "A complete record of every session",
        copy: "Record meetings, generate transcripts with speaker attribution and share them with people who could not attend—governed by your organisation's policies.",
        points: [
          "Cloud recordings with access controls",
          "Searchable transcripts",
          "Live captions during the call",
        ],
      },
      {
        title: "AI notes and action items",
        copy: "Jeeym AI produces a structured summary with decisions and action items, then turns them into assigned tasks in one step.",
        points: [
          "Structured AI meeting notes",
          "Decisions highlighted automatically",
          "Action items sent to Tasks",
        ],
      },
    ],
    featureGrid: [
      {
        title: "HD video meetings",
        copy: "Reliable video and audio for teams, clients and large sessions.",
      },
      {
        title: "Screen sharing",
        copy: "Present a window, a tab or a full screen with one click.",
      },
      {
        title: "Meeting recordings",
        copy: "Record to Drive with permissions your admins control.",
      },
      {
        title: "Live captions",
        copy: "Real-time captions make meetings easier to follow.",
      },
      {
        title: "AI-generated notes",
        copy: "Summaries, decisions and highlights written for you.",
      },
      {
        title: "Action-item tracking",
        copy: "Every action item becomes a task with an owner and a date.",
      },
    ],
    integrations: [
      {
        with: "calendar",
        copy: "Every event carries its meeting link, agenda and attendees.",
      },
      {
        with: "tasks",
        copy: "AI action items become assigned tasks the moment the call ends.",
      },
      {
        with: "documents",
        copy: "Meeting notes open as shared documents ready to edit.",
      },
    ],
    security:
      "Meetings are encrypted in transit, with waiting rooms, host controls, recording permissions and admin policies for external participants.",
    related: ["calendar", "chat", "tasks"],
    seo: {
      title: "Jeeym Meetings — Video meetings with AI notes",
      description:
        "Secure HD video meetings with screen sharing, recordings, transcripts and AI-generated notes and action items.",
    },
  },
  {
    id: "calendar",
    name: "Calendar",
    href: "/calendar",
    tagline: "Shared calendars, scheduling and meeting coordination.",
    color: "#F97316",
    icon: Calendar,
    category: "Communication",
    description:
      "Coordinate schedules, meetings and availability across your organisation.",
    features: [
      "Personal calendars",
      "Team calendars",
      "Shared availability",
      "Meeting scheduling",
      "Room and resource booking",
      "Calendar integrations",
    ],
    hero: {
      headline: "One calendar for people, teams and rooms",
      copy: "Jeeym Calendar shows real availability across your organisation, so scheduling a meeting takes seconds—not a thread of messages.",
    },
    benefits: [
      {
        title: "Find a time without the back-and-forth",
        copy: "See colleagues' availability side by side, let Jeeym suggest times that work for everyone and book rooms and resources in the same step.",
        points: [
          "Side-by-side availability views",
          "Suggested meeting times",
          "Room and resource booking",
        ],
      },
      {
        title: "Calendars for every team",
        copy: "Team calendars keep launches, deadlines, leave and on-call schedules visible to the people who need them.",
        points: [
          "Shared team calendars",
          "Project and deadline calendars",
          "Leave and availability tracking",
        ],
      },
      {
        title: "Prepared for every meeting",
        copy: "Events carry agendas, documents and attendee context. Jeeym AI can brief you on any meeting before you join.",
        points: [
          "Agendas and files on every event",
          "AI meeting preparation briefs",
          "Automatic meeting links",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Personal calendars",
        copy: "A clear view of your day, week and month across devices.",
      },
      {
        title: "Team calendars",
        copy: "Shared calendars for teams, projects and departments.",
      },
      {
        title: "Shared availability",
        copy: "See when colleagues are free without asking.",
      },
      {
        title: "Meeting scheduling",
        copy: "Suggested times, invitations and RSVPs in one flow.",
      },
      {
        title: "Room and resource booking",
        copy: "Book rooms, equipment and shared resources with the event.",
      },
      {
        title: "Calendar integrations",
        copy: "Connect existing calendars during migration and beyond.",
      },
    ],
    integrations: [
      {
        with: "meetings",
        copy: "Every event includes a meeting link and joins in one click.",
      },
      {
        with: "mail",
        copy: "Invitations, RSVPs and updates flow through your inbox.",
      },
      {
        with: "ai",
        copy: "Ask Jeeym AI to find a time, brief you or reschedule your day.",
      },
    ],
    security:
      "Calendar data follows organisation-wide sharing policies, with visibility controls for private events and admin management of external invitations.",
    related: ["meetings", "mail", "tasks"],
    seo: {
      title: "Jeeym Calendar — Scheduling for organisations",
      description:
        "Shared calendars, real availability, room booking and AI-assisted scheduling for your whole organisation.",
    },
  },
  {
    id: "drive",
    name: "Drive",
    href: "/drive",
    tagline: "Secure company file storage and sharing.",
    color: "#0D9488",
    icon: HardDrive,
    category: "Organise work",
    description:
      "Store, organise and securely share company files from one central workspace.",
    features: [
      "Personal and shared drives",
      "Access controls",
      "Version history",
      "Secure sharing",
      "File previews",
      "Organisation-wide search",
    ],
    hero: {
      headline: "Company files in one secure place",
      copy: "Jeeym Drive gives every person and team organised, permission-controlled storage—so files belong to the organisation, not to scattered accounts and devices.",
    },
    benefits: [
      {
        title: "Team drives that outlast turnover",
        copy: "Shared drives belong to teams and projects, not individuals. When people change roles, the files—and their permissions—stay exactly where work needs them.",
        points: [
          "Shared drives owned by teams",
          "Structured folders with inherited permissions",
          "Ownership that survives staffing changes",
        ],
      },
      {
        title: "Sharing you can actually control",
        copy: "Share inside or outside your organisation with expiring links, download restrictions and visibility into exactly who has access to what.",
        points: [
          "Internal and external sharing controls",
          "Link expiration and download limits",
          "Access reviews for sensitive folders",
        ],
      },
      {
        title: "Every version, every change",
        copy: "Full version history means you can compare, restore and audit changes to any file—no more FINAL_v7 filenames.",
        points: [
          "Automatic version history",
          "Restore any previous version",
          "Activity trail on every file",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Personal and shared drives",
        copy: "Private space for individuals, shared drives for teams.",
      },
      {
        title: "Access controls",
        copy: "Folder and file permissions that inherit sensibly.",
      },
      {
        title: "Version history",
        copy: "Track, compare and restore every change.",
      },
      {
        title: "Secure sharing",
        copy: "Expiring links, download restrictions and guest access.",
      },
      {
        title: "File previews",
        copy: "Preview documents, images, media and designs without downloading.",
      },
      {
        title: "Organisation-wide search",
        copy: "Find any file you are allowed to see, instantly.",
      },
    ],
    integrations: [
      {
        with: "documents",
        copy: "Documents, spreadsheets and presentations live natively in Drive.",
      },
      {
        with: "chat",
        copy: "Files shared in conversations keep their Drive permissions.",
      },
      {
        with: "search",
        copy: "Every file is indexed for permission-aware search.",
      },
    ],
    security:
      "Files are encrypted in transit and at rest, with granular permissions, sharing policies, audit logs and retention controls managed centrally.",
    related: ["documents", "search", "chat"],
    seo: {
      title: "Jeeym Drive — Secure company file storage",
      description:
        "Personal and shared drives with access controls, version history and secure sharing for organisations.",
    },
  },
  {
    id: "documents",
    name: "Documents",
    href: "/documents",
    tagline: "Create, edit and collaborate on documents in real time.",
    color: "#3B82F6",
    icon: FileText,
    category: "Create and collaborate",
    description:
      "Create and collaborate on documents in real time with your team.",
    features: [
      "Real-time editing",
      "Comments and suggestions",
      "Templates",
      "Version history",
      "Permissions",
      "AI writing support",
    ],
    hero: {
      headline: "Documents your whole team writes together",
      copy: "Jeeym Documents brings real-time editing, comments and suggestions into your workplace—connected to the conversations and meetings where the writing starts.",
    },
    benefits: [
      {
        title: "Write together, in real time",
        copy: "See colleagues' cursors, edits and comments as they happen. Suggestions and approvals keep review cycles short and visible.",
        points: [
          "Live multi-person editing",
          "Suggesting mode with accept and reject",
          "Comment threads with mentions",
        ],
      },
      {
        title: "Start from something, not from nothing",
        copy: "Company templates keep proposals, briefs and policies consistent. Jeeym AI drafts first versions from a prompt, a meeting or a conversation.",
        points: [
          "Organisation template gallery",
          "AI first drafts from prompts and meetings",
          "Reusable building blocks",
        ],
      },
      {
        title: "Documents that stay connected",
        copy: "Link documents to the meetings, tasks and channels they belong to. Readers always find the latest version, never a stale copy.",
        points: [
          "One live version, no attachments",
          "Linked meetings, tasks and channels",
          "Full version history",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Real-time editing",
        copy: "Everyone works in the same live document.",
      },
      {
        title: "Comments and suggestions",
        copy: "Review with tracked suggestions and threaded comments.",
      },
      {
        title: "Templates",
        copy: "Company templates for consistent documents.",
      },
      {
        title: "Version history",
        copy: "See what changed, when and by whom.",
      },
      {
        title: "Permissions",
        copy: "View, comment and edit access per person or group.",
      },
      {
        title: "AI writing support",
        copy: "Draft, rewrite, expand and summarise with Jeeym AI.",
      },
    ],
    integrations: [
      {
        with: "meetings",
        copy: "Meeting notes become shared documents automatically.",
      },
      {
        with: "tasks",
        copy: "Turn action points in a document into assigned tasks.",
      },
      {
        with: "ai",
        copy: "Draft, translate and improve writing without leaving the page.",
      },
    ],
    security:
      "Documents inherit Drive's encryption, permissions and audit logging, with granular sharing controls and organisation retention policies.",
    related: ["spreadsheets", "presentations", "drive"],
    seo: {
      title: "Jeeym Documents — Real-time document collaboration",
      description:
        "Create and edit documents together in real time, with comments, templates, version history and AI writing support.",
    },
  },
  {
    id: "spreadsheets",
    name: "Spreadsheets",
    href: "/spreadsheets",
    tagline: "Work with business data, formulas, tables and reports.",
    color: "#16A34A",
    icon: Table2,
    category: "Create and collaborate",
    description:
      "Analyse data, manage workflows and build connected business reports.",
    features: [
      "Formulas and functions",
      "Tables and filters",
      "Charts",
      "Shared editing",
      "Data imports",
      "AI-assisted analysis",
    ],
    hero: {
      headline: "Spreadsheets built for shared business data",
      copy: "Jeeym Spreadsheets handles the formulas, tables and reports your teams rely on—edited together, connected to your files and explained by AI when the data gets dense.",
    },
    benefits: [
      {
        title: "The functions your work depends on",
        copy: "A full formula library, structured tables, filters and pivot views cover everything from budgets to project trackers.",
        points: [
          "Comprehensive formula library",
          "Structured tables with filters and sorting",
          "Pivot summaries and conditional formatting",
        ],
      },
      {
        title: "One sheet, not twelve copies",
        copy: "Shared editing with cell-level history means finance, operations and leadership work from the same numbers.",
        points: [
          "Real-time shared editing",
          "Cell-level edit history",
          "Protected ranges for sensitive figures",
        ],
      },
      {
        title: "Ask your data questions",
        copy: "Jeeym AI writes formulas, explains what a sheet shows and builds charts from plain-language requests.",
        points: [
          "AI formula generation",
          "Plain-language data summaries",
          "Chart suggestions from your data",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Formulas and functions",
        copy: "The functions teams expect, from SUMIFS to XLOOKUP.",
      },
      {
        title: "Tables and filters",
        copy: "Structure data with tables, filters and grouping.",
      },
      {
        title: "Charts",
        copy: "Bar, line, pie and combo charts that update live.",
      },
      {
        title: "Shared editing",
        copy: "Work in the same sheet with edit history per cell.",
      },
      {
        title: "Data imports",
        copy: "Import CSV and Excel files and keep working.",
      },
      {
        title: "AI-assisted analysis",
        copy: "Generate formulas and summaries from plain language.",
      },
    ],
    integrations: [
      {
        with: "documents",
        copy: "Embed live tables and charts in documents and reports.",
      },
      {
        with: "presentations",
        copy: "Charts stay current when pasted into slides.",
      },
      {
        with: "ai",
        copy: "Ask questions about your data in plain language.",
      },
    ],
    security:
      "Spreadsheets use Drive permissions, encryption and audit trails, with protected ranges and controlled export options for sensitive data.",
    related: ["documents", "presentations", "drive"],
    seo: {
      title: "Jeeym Spreadsheets — Collaborative business data",
      description:
        "Formulas, tables, charts and AI-assisted analysis in spreadsheets your whole team can edit together.",
    },
  },
  {
    id: "presentations",
    name: "Presentations",
    href: "/presentations",
    tagline: "Build and present polished team presentations.",
    color: "#F59E0B",
    icon: Presentation,
    category: "Create and collaborate",
    description:
      "Create polished presentations collaboratively and present them from anywhere.",
    features: [
      "Professional templates",
      "Collaborative editing",
      "Presenter mode",
      "Comments",
      "Media support",
      "AI-generated outlines",
    ],
    hero: {
      headline: "Presentations your team builds together",
      copy: "Jeeym Presentations pairs professional templates with real-time collaboration and AI outlines—so decks come together faster and look consistent every time.",
    },
    benefits: [
      {
        title: "Decks that look designed",
        copy: "Company templates, brand colours and layout guides keep every presentation on-brand without a designer on call.",
        points: [
          "Organisation template gallery",
          "Brand kits with fonts and colours",
          "Smart layout suggestions",
        ],
      },
      {
        title: "Build it together, present it anywhere",
        copy: "Co-edit slides in real time, rehearse with speaker notes and present in the room, on a call or with a shared link.",
        points: [
          "Real-time co-editing",
          "Presenter view with notes and timer",
          "Present directly into Jeeym Meetings",
        ],
      },
      {
        title: "From outline to draft in minutes",
        copy: "Give Jeeym AI a topic, a document or meeting notes and get a structured outline with draft slides to refine.",
        points: [
          "AI outlines from prompts and documents",
          "Draft slides with suggested structure",
          "Rewrite and shorten slide text with AI",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Professional templates",
        copy: "Start from layouts that already look right.",
      },
      {
        title: "Collaborative editing",
        copy: "Multiple editors on the same deck at once.",
      },
      {
        title: "Presenter mode",
        copy: "Notes, timers and previews while you present.",
      },
      {
        title: "Comments",
        copy: "Collect feedback on specific slides.",
      },
      {
        title: "Media support",
        copy: "Images, video and embedded charts on any slide.",
      },
      {
        title: "AI-generated outlines",
        copy: "Structured outlines and draft slides from a prompt.",
      },
    ],
    integrations: [
      {
        with: "spreadsheets",
        copy: "Embedded charts update when the data changes.",
      },
      {
        with: "meetings",
        copy: "Present a deck directly into a video meeting.",
      },
      {
        with: "drive",
        copy: "Decks live in Drive with permissions and versions.",
      },
    ],
    security:
      "Presentations follow Drive permissions and encryption, with sharing controls and watermark options for confidential decks.",
    related: ["documents", "spreadsheets", "meetings"],
    seo: {
      title: "Jeeym Presentations — Collaborative slide decks",
      description:
        "Build polished presentations together with templates, presenter mode and AI-generated outlines.",
    },
  },
  {
    id: "tasks",
    name: "Tasks",
    href: "/tasks",
    tagline: "Manage individual and team tasks.",
    color: "#7C3AED",
    icon: ListChecks,
    category: "Organise work",
    description:
      "Turn conversations and meetings into clear, accountable work.",
    features: [
      "Personal tasks",
      "Team task lists",
      "Owners and deadlines",
      "Priorities",
      "Recurring tasks",
      "AI-generated actions",
    ],
    hero: {
      headline: "Every commitment, captured and owned",
      copy: "Jeeym Tasks turns the outcomes of emails, chats and meetings into work with owners, deadlines and visible progress—so nothing agreed is forgotten.",
    },
    benefits: [
      {
        title: "Tasks born where work happens",
        copy: "Create tasks from an email, a chat message, a document line or a meeting action item—with the source linked for full context.",
        points: [
          "Create tasks from Mail, Chat and Meetings",
          "Source message linked to every task",
          "AI-extracted action items",
        ],
      },
      {
        title: "Clear ownership, visible progress",
        copy: "Every task has one owner, a deadline and a status. Team lists show what is moving, what is blocked and what is done.",
        points: [
          "Single owner per task",
          "Team lists with board and list views",
          "Progress visible to the whole team",
        ],
      },
      {
        title: "Your day, organised for you",
        copy: "A personal view collects everything assigned to you across teams, ordered by priority and due date—with a morning digest from Jeeym AI.",
        points: [
          "Unified personal task view",
          "Priorities and due-date ordering",
          "AI daily digest of what needs attention",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Personal tasks",
        copy: "One view of everything assigned to you.",
      },
      {
        title: "Team task lists",
        copy: "Shared lists and boards for projects and teams.",
      },
      {
        title: "Owners and deadlines",
        copy: "Clear accountability on every item.",
      },
      {
        title: "Priorities",
        copy: "Flag what matters most today.",
      },
      {
        title: "Recurring tasks",
        copy: "Routines and rituals that schedule themselves.",
      },
      {
        title: "AI-generated actions",
        copy: "Action items extracted from meetings and threads.",
      },
    ],
    integrations: [
      {
        with: "meetings",
        copy: "Meeting action items arrive as tasks with owners set.",
      },
      {
        with: "chat",
        copy: "Turn any message into a task without switching apps.",
      },
      {
        with: "calendar",
        copy: "Deadlines appear alongside your meetings.",
      },
    ],
    security:
      "Tasks respect team permissions, with private lists, controlled visibility and audit history on assignments and changes.",
    related: ["meetings", "chat", "notes"],
    seo: {
      title: "Jeeym Tasks — Accountable team task management",
      description:
        "Turn conversations and meetings into tasks with owners, deadlines and AI-generated action items.",
    },
  },
  {
    id: "notes",
    name: "Notes",
    href: "/notes",
    tagline: "Capture ideas, decisions and knowledge.",
    color: "#CA8A04",
    icon: StickyNote,
    category: "Create and collaborate",
    description:
      "Capture ideas, decisions and important information in an organised workspace.",
    features: [
      "Personal notes",
      "Shared notebooks",
      "Rich text",
      "Tags",
      "Quick capture",
      "AI organisation",
    ],
    hero: {
      headline: "A home for everything worth remembering",
      copy: "Jeeym Notes captures ideas, decisions and know-how in personal notes and shared notebooks—organised, searchable and connected to the rest of your work.",
    },
    benefits: [
      {
        title: "Capture at the speed of thought",
        copy: "Quick capture from anywhere in Jeeym—during a meeting, inside a chat or from the search bar—files the note now and lets you organise later.",
        points: [
          "Quick capture from any app",
          "Meeting notes linked to events",
          "Clip messages and files into notes",
        ],
      },
      {
        title: "Notebooks your team maintains together",
        copy: "Shared notebooks hold runbooks, onboarding guides, project context and decisions—versioned, permissioned and always current.",
        points: [
          "Shared notebooks per team or project",
          "Rich text, tables, checklists and media",
          "Permissions and version history",
        ],
      },
      {
        title: "Organised without the filing",
        copy: "Tags, backlinks and AI-suggested structure keep notes findable. Search reaches every note you are allowed to see.",
        points: [
          "Tags and backlinks",
          "AI-suggested titles and structure",
          "Full-text, permission-aware search",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Personal notes",
        copy: "A private space for thinking and drafts.",
      },
      {
        title: "Shared notebooks",
        copy: "Team knowledge that stays organised.",
      },
      {
        title: "Rich text",
        copy: "Headings, tables, checklists, code and media.",
      },
      {
        title: "Tags",
        copy: "Flexible organisation across notebooks.",
      },
      {
        title: "Quick capture",
        copy: "Save a thought from anywhere in Jeeym.",
      },
      {
        title: "AI organisation",
        copy: "Summaries, structure and suggested tags.",
      },
    ],
    integrations: [
      {
        with: "meetings",
        copy: "Meeting notes attach to the event and its attendees.",
      },
      {
        with: "tasks",
        copy: "Checklists in notes become tracked tasks.",
      },
      {
        with: "search",
        copy: "Notes are part of organisation-wide search and AI answers.",
      },
    ],
    security:
      "Notes are encrypted and permissioned like every Jeeym surface, with private-by-default personal notes and controlled notebook sharing.",
    related: ["documents", "tasks", "search"],
    seo: {
      title: "Jeeym Notes — Ideas, decisions and team knowledge",
      description:
        "Personal notes and shared notebooks with rich text, tags, quick capture and AI organisation.",
    },
  },
  {
    id: "directory",
    name: "Directory",
    href: "/directory",
    tagline: "Find people, teams, roles and contact information.",
    color: "#0284C7",
    icon: Users,
    category: "Organise work",
    description:
      "Help employees find colleagues, teams, roles and company information.",
    features: [
      "Employee profiles",
      "Teams and departments",
      "Organisation structure",
      "Skills and expertise",
      "Contact information",
      "Searchable directory",
    ],
    hero: {
      headline: "Everyone in your organisation, one search away",
      copy: "Jeeym Directory keeps profiles, teams, reporting lines and expertise current—so finding the right person takes seconds, even in a large organisation.",
    },
    benefits: [
      {
        title: "Profiles with real context",
        copy: "Every profile shows role, team, manager, location, working hours and how to reach them—plus the channels and projects you share.",
        points: [
          "Role, team and reporting line",
          "Location and working hours",
          "Shared channels and recent collaboration",
        ],
      },
      {
        title: "The org chart that stays accurate",
        copy: "Directory syncs with your identity provider, so teams, departments and structure reflect reality—not last year's spreadsheet.",
        points: [
          "Live organisation structure",
          "Sync with identity providers",
          "Department and team pages",
        ],
      },
      {
        title: "Find expertise, not just names",
        copy: "Search by skill, language, project or responsibility to find the person who can actually help.",
        points: [
          "Skills and expertise on profiles",
          "Search by capability or project",
          "New-starter visibility from day one",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Employee profiles",
        copy: "Rich profiles with role, team and contact details.",
      },
      {
        title: "Teams and departments",
        copy: "Browse the organisation by structure.",
      },
      {
        title: "Organisation structure",
        copy: "A live org chart everyone can navigate.",
      },
      {
        title: "Skills and expertise",
        copy: "Find people by what they know.",
      },
      {
        title: "Contact information",
        copy: "Email, chat and meeting links on every profile.",
      },
      {
        title: "Searchable directory",
        copy: "Fast people search from anywhere in Jeeym.",
      },
    ],
    integrations: [
      {
        with: "chat",
        copy: "Message anyone directly from their profile.",
      },
      {
        with: "calendar",
        copy: "See availability and book time from a profile.",
      },
      {
        with: "search",
        copy: "People results appear in universal search.",
      },
    ],
    security:
      "Directory visibility follows organisation policy, with admin control over which profile fields are shown and to whom.",
    related: ["chat", "calendar", "search"],
    seo: {
      title: "Jeeym Directory — People and organisation search",
      description:
        "Employee profiles, teams, org structure and expertise search for your whole organisation.",
    },
  },
  {
    id: "search",
    name: "Search",
    href: "/search",
    tagline: "Search across messages, files, meetings and company knowledge.",
    color: "#6366F1",
    icon: Search,
    category: "Organise work",
    description:
      "Find messages, meetings, documents, people and knowledge from one search bar.",
    features: [
      "Universal search",
      "Filters",
      "Permissions-aware results",
      "Semantic search",
      "Recent activity",
      "AI answers",
    ],
    hero: {
      headline: "One search bar for everything you're allowed to see",
      copy: "Jeeym Search looks across mail, chat, files, meetings, notes and people at once—returning only what each person is authorised to view.",
    },
    benefits: [
      {
        title: "Everything, in one query",
        copy: "Stop searching five apps for one answer. A single query covers messages, documents, events, recordings, notes and people.",
        points: [
          "Mail, chat, files, meetings, notes and people",
          "Instant results as you type",
          "Keyboard-first quick switcher",
        ],
      },
      {
        title: "Results that respect permissions",
        copy: "Search is permission-aware by design. People only ever see results for content they already have access to.",
        points: [
          "Permission checks on every result",
          "No leakage across teams or guests",
          "Admin-auditable search access",
        ],
      },
      {
        title: "Answers, not just links",
        copy: "Semantic search understands what you mean, and Jeeym AI can answer questions directly with citations to the source.",
        points: [
          "Semantic matching beyond keywords",
          "AI answers with source citations",
          "Filters by app, person, team and time",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Universal search",
        copy: "One query across every Jeeym application.",
      },
      {
        title: "Filters",
        copy: "Narrow by app, person, date, team or type.",
      },
      {
        title: "Permissions-aware results",
        copy: "Only content the searcher can access.",
      },
      {
        title: "Semantic search",
        copy: "Meaning-based matching, not just keywords.",
      },
      {
        title: "Recent activity",
        copy: "Jump back into what you touched last.",
      },
      {
        title: "AI answers",
        copy: "Direct answers with citations to sources.",
      },
    ],
    integrations: [
      {
        with: "ai",
        copy: "Search powers Jeeym AI's grounded, cited answers.",
      },
      {
        with: "drive",
        copy: "Full-content search inside every file you can open.",
      },
      {
        with: "directory",
        copy: "People and teams appear alongside content results.",
      },
    ],
    security:
      "Search enforces source permissions on every query, with no cross-tenant indexing and full audit logging of administrative search settings.",
    related: ["ai", "drive", "directory"],
    seo: {
      title: "Jeeym Search — Universal workplace search",
      description:
        "One permission-aware search across mail, chat, files, meetings, notes and people—with AI answers.",
    },
  },
  {
    id: "ai",
    name: "Jeeym AI",
    href: "/ai",
    tagline: "An AI assistant connected to your organisation's work.",
    color: "#6D5AE6",
    icon: Sparkles,
    category: "Intelligence",
    description:
      "An assistant that understands your organisation's work—finding information, drafting content and turning decisions into action.",
    features: [
      "Answers across company knowledge",
      "Drafting and rewriting",
      "Meeting and thread summaries",
      "Action-item extraction",
      "Meeting preparation briefs",
      "Permission-aware by design",
    ],
    hero: {
      headline: "Your workplace, with an intelligent layer",
      copy: "Jeeym AI helps employees understand information, create content, prepare for work and take action across the tools they already use.",
    },
    benefits: [
      {
        title: "Ask questions across company knowledge",
        copy: "Jeeym AI answers questions using your organisation's messages, files, documents, meetings and approved knowledge—with citations, and only from sources the person asking can access.",
        points: [
          "Grounded answers with source citations",
          "Covers mail, chat, files, meetings and notes",
          "Strictly permission-aware retrieval",
        ],
      },
      {
        title: "Write, summarise and prepare",
        copy: "Draft emails and documents, summarise long threads and meetings, and get a briefing before every meeting—built from the context that matters.",
        points: [
          "Drafts in your organisation's tone",
          "Summaries of meetings, threads and documents",
          "Meeting preparation briefs",
        ],
      },
      {
        title: "Turn decisions into action",
        copy: "Jeeym AI extracts action items, creates tasks, schedules meetings and organises information—moving work forward instead of just describing it.",
        points: [
          "Action items extracted and assigned",
          "Meetings scheduled from a request",
          "Documents turned into presentations",
        ],
      },
    ],
    featureGrid: [
      {
        title: "Understand company knowledge",
        copy: "Ask questions across messages, files, documents, meetings and approved company knowledge.",
      },
      {
        title: "Write and create",
        copy: "Draft emails, documents, reports, presentations and internal communications.",
      },
      {
        title: "Summarise work",
        copy: "Turn long conversations, meetings and documents into clear summaries.",
      },
      {
        title: "Take action",
        copy: "Create tasks, schedule meetings, organise information and move work forward.",
      },
      {
        title: "Respect permissions",
        copy: "Jeeym AI only accesses information the user is authorised to view.",
      },
      {
        title: "Administrative controls",
        copy: "Admins govern where AI is available and how it uses organisational data.",
      },
    ],
    integrations: [
      {
        with: "search",
        copy: "Grounded answers built on permission-aware search.",
      },
      {
        with: "meetings",
        copy: "Notes, summaries and action items for every meeting.",
      },
      {
        with: "documents",
        copy: "Drafting and rewriting inside every editor.",
      },
    ],
    security:
      "Jeeym AI operates within your organisation's permission model, with administrative controls over availability, data use and retention. Organisational content is not used to train models for other customers.",
    related: ["search", "meetings", "documents"],
    seo: {
      title: "Jeeym AI — AI connected to your organisation's work",
      description:
        "An AI assistant that answers questions, drafts content, summarises meetings and takes action—while respecting user permissions.",
    },
  },
];

export const productMap: Record<ProductId, Product> = Object.fromEntries(
  products.map((p) => [p.id, p])
) as Record<ProductId, Product>;

export function getProduct(id: ProductId): Product {
  return productMap[id];
}

export const productCategories: {
  label: ProductCategory;
  ids: ProductId[];
}[] = [
  { label: "Communication", ids: ["mail", "chat", "meetings", "calendar"] },
  {
    label: "Create and collaborate",
    ids: ["documents", "spreadsheets", "presentations", "notes"],
  },
  { label: "Organise work", ids: ["drive", "tasks", "directory", "search"] },
  { label: "Intelligence", ids: ["ai"] },
];
