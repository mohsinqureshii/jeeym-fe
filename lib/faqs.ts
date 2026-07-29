export interface FaqItem {
  question: string;
  answer: string;
}

export const pricingFaqs: FaqItem[] = [
  {
    question: "Is Jeeym really free for 5 users?",
    answer:
      "Yes. Organisations with up to 5 users can use Jeeym's core workplace applications—email, chat, meetings, calendar, drive, documents, spreadsheets, presentations, tasks and notes—free of charge, including starter access to Jeeym AI.",
  },
  {
    question: "Is a credit card required?",
    answer:
      "No. You can create your workplace, invite your team and start working without entering any payment details. Payment is only needed if you choose to upgrade to a paid plan.",
  },
  {
    question: "Can I use my own company domain?",
    answer:
      "Yes. You can connect your company domain for business email and your workspace identity. Guided domain setup walks you through verification and DNS configuration.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes. You can move from Free to Business or Enterprise at any time. Your data, users and settings carry over—upgrading simply unlocks more capacity and controls.",
  },
  {
    question: "Can Jeeym host data in my country?",
    answer:
      "Jeeym offers regional hosting options and in-country deployment options for organisations with data residency requirements, including dedicated environments. Talk to our team about availability for your country and requirements.",
  },
  {
    question: "Does Jeeym support migration?",
    answer:
      "Yes. Jeeym provides migration tooling and guided onboarding for users, email, calendars, contacts and files from platforms including Google Workspace, Microsoft 365, Slack, Dropbox and Box, as well as existing mail servers and CSV-based user directories.",
  },
  {
    question: "Can enterprise customers use dedicated infrastructure?",
    answer:
      "Yes. Enterprise plans offer dedicated deployment options, including dedicated cloud environments and approved private deployment models, for organisations with enhanced isolation or security requirements.",
  },
  {
    question: "What happens when we add a sixth user?",
    answer:
      "You'll be prompted to choose a paid plan for your organisation. Nothing is deleted and nobody loses access mid-task—you simply select a plan that covers your team size and continue working.",
  },
  {
    question: "Is Jeeym available on mobile?",
    answer:
      "Yes. Jeeym works in the browser and through desktop and mobile applications, with real-time synchronisation, notifications and secure device sessions across all of them.",
  },
  {
    question: "How does Jeeym AI use company data?",
    answer:
      "Jeeym AI answers using only the content each user is already authorised to access, and administrators control where AI is available. Your organisation's content is not used to train models for other customers.",
  },
];
