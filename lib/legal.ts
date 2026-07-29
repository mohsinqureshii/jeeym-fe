export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface LegalPage {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

const reviewNote =
  "This document is a template provided for the Jeeym website build. It must be reviewed and finalised by qualified legal counsel before publication.";

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy policy",
    description: "How Jeeym collects, uses and protects personal information.",
    lastUpdated: "January 2026",
    intro: reviewNote,
    sections: [
      {
        heading: "Information we collect",
        body: [
          "We collect information you provide when creating an account, such as your name, work email address and organisation details, together with content you and your organisation create while using Jeeym.",
          "We also collect limited technical information—such as device type, browser and usage events—needed to operate, secure and improve the service.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "We use information to provide and maintain the Jeeym service, secure accounts and organisational data, provide support, and communicate service updates.",
          "We do not sell personal information. Organisational content is processed only to deliver the service your organisation has configured.",
        ],
      },
      {
        heading: "AI features",
        body: [
          "Jeeym AI features operate on content each user is authorised to access. Your organisation's content is not used to train models made available to other customers.",
          "Administrators control where AI features are available within their organisation.",
        ],
      },
      {
        heading: "Data location and retention",
        body: [
          "Organisations may select from available hosting regions, including in-country options where offered. Data is retained according to your organisation's configured retention policies and applicable law.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Depending on your location, you may have rights to access, correct, export or delete personal information. Requests can be made through your organisation's administrator or by contacting us.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "For privacy questions or requests, contact privacy@jeeym.com.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of service",
    description: "The agreement governing use of the Jeeym workplace.",
    lastUpdated: "January 2026",
    intro: reviewNote,
    sections: [
      {
        heading: "The service",
        body: [
          "Jeeym provides a workplace platform including email, messaging, meetings, calendar, storage, productivity applications and AI assistance, made available to organisations under these terms.",
        ],
      },
      {
        heading: "Accounts and organisations",
        body: [
          "Workspaces are created and administered by organisations. Administrators manage users, applications, policies and data for their organisation, and are responsible for authorising access appropriately.",
        ],
      },
      {
        heading: "Customer content",
        body: [
          "Your organisation retains ownership of the content it creates and stores in Jeeym. We process content solely to provide the service, as described in our privacy policy and any applicable data processing agreement.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "Use of Jeeym must comply with our acceptable use policy. We may suspend accounts that present a security risk or materially breach these terms.",
        ],
      },
      {
        heading: "Plans and billing",
        body: [
          "The Free plan supports up to 5 users. Paid plans are billed as agreed at purchase. Fees are exclusive of applicable taxes unless stated otherwise.",
        ],
      },
      {
        heading: "Termination",
        body: [
          "Organisations may stop using Jeeym at any time and may export their data before closing a workspace. Provisions that by their nature should survive termination will do so.",
        ],
      },
    ],
  },
  {
    slug: "acceptable-use",
    title: "Acceptable use policy",
    description: "Rules that keep Jeeym safe and reliable for every organisation.",
    lastUpdated: "January 2026",
    intro: reviewNote,
    sections: [
      {
        heading: "Prohibited activity",
        body: ["You may not use Jeeym to:"],
        list: [
          "Violate applicable law or the rights of others",
          "Send spam or unsolicited bulk communications",
          "Distribute malware or interfere with the service's operation",
          "Attempt to access accounts or data without authorisation",
          "Harass, threaten or harm others",
          "Misrepresent your identity or organisation",
        ],
      },
      {
        heading: "Security testing",
        body: [
          "Security research on Jeeym is only permitted through our coordinated disclosure programme. Contact security@jeeym.com before conducting any testing.",
        ],
      },
      {
        heading: "Enforcement",
        body: [
          "We may investigate suspected violations and take proportionate action, including content removal, suspension or termination, and notification of authorities where required.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie policy",
    description: "How Jeeym uses cookies and similar technologies.",
    lastUpdated: "January 2026",
    intro: reviewNote,
    sections: [
      {
        heading: "What cookies we use",
        body: [
          "We use strictly necessary cookies to operate the service (such as authentication and security), preference cookies to remember settings such as language and region, and limited analytics cookies to understand how our website is used.",
        ],
      },
      {
        heading: "Managing cookies",
        body: [
          "You can control non-essential cookies through the cookie preferences on our website and through your browser settings. Blocking strictly necessary cookies may prevent parts of the service from working.",
        ],
      },
    ],
  },
  {
    slug: "data-processing",
    title: "Data processing agreement",
    description:
      "Terms governing Jeeym's processing of personal data on behalf of customers.",
    lastUpdated: "January 2026",
    intro: reviewNote,
    sections: [
      {
        heading: "Roles",
        body: [
          "For personal data contained in customer content, the customer acts as controller and Jeeym acts as processor, processing personal data only on the customer's documented instructions.",
        ],
      },
      {
        heading: "Security measures",
        body: [
          "Jeeym implements technical and organisational measures including encryption in transit and at rest, access controls, logging and personnel confidentiality obligations.",
        ],
      },
      {
        heading: "Subprocessors",
        body: [
          "Jeeym uses vetted subprocessors listed on our subprocessors page, and provides notice of changes as described in the agreement.",
        ],
      },
      {
        heading: "Data location",
        body: [
          "Where the customer has selected a hosting region or in-country deployment option, Jeeym processes and stores customer content in accordance with that selection, as described in the applicable order.",
        ],
      },
      {
        heading: "Assistance and deletion",
        body: [
          "Jeeym assists customers with data subject requests and security obligations as required, and deletes or returns customer content at the end of the engagement in line with the customer's instructions.",
        ],
      },
    ],
  },
  {
    slug: "subprocessors",
    title: "Subprocessors",
    description: "Third parties that support delivery of the Jeeym service.",
    lastUpdated: "January 2026",
    intro: reviewNote,
    sections: [
      {
        heading: "Current subprocessors",
        body: [
          "The following categories of subprocessors support the Jeeym service. Specific vendors are listed per deployment region and will be published here before launch:",
        ],
        list: [
          "Cloud infrastructure providers (per selected hosting region)",
          "Content delivery and network security providers",
          "Email delivery infrastructure",
          "Customer support tooling",
          "Billing and payment processing",
        ],
      },
      {
        heading: "Change notification",
        body: [
          "Customers with a data processing agreement can subscribe to receive notice before new subprocessors are engaged for their deployment.",
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPage | undefined {
  return legalPages.find((p) => p.slug === slug);
}
