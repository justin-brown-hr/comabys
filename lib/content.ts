export type Service = {
  slug: string;
  title: string;
  short: string;
  detail: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "data-centralization",
    title: "Data Centralization",
    short:
      "Unify data from across systems into a trusted, governed foundation.",
    detail:
      "Bring information from multiple systems into a trusted, governed data foundation to improve consistency and accessibility across the organization.",
    outcomes: [
      "Single source of truth for critical business data",
      "Clear ownership, quality, and access controls",
      "Faster reporting and fewer conflicting numbers",
    ],
  },
  {
    slug: "data-integration",
    title: "Data Integration",
    short: "Connect systems and data to enable a single, consistent view.",
    detail:
      "Connect databases, applications, and external platforms so information flows reliably across the organization—without fragile, manual handoffs.",
    outcomes: [
      "Reliable pipelines between core systems",
      "Reduced duplicate entry and reconciliation work",
      "Near-real-time visibility where it matters",
    ],
  },
  {
    slug: "analytics-intelligence",
    title: "Analytics & Intelligence",
    short: "Turn data into actionable insights for better decisions.",
    detail:
      "Develop dashboards, performance indicators, analytical models, and decision-support capabilities that turn data into actionable insight for leaders and operators.",
    outcomes: [
      "KPIs aligned to business priorities",
      "Trusted dashboards for executives and teams",
      "Analytics that support action, not just charts",
    ],
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    short: "Plan and execute secure, scalable cloud transformation.",
    detail:
      "Plan and execute cloud transitions with attention to security, application dependencies, cost, performance, and business continuity.",
    outcomes: [
      "Migration roadmap with clear sequencing",
      "Security and cost controls from day one",
      "Minimal disruption during cutover",
    ],
  },
  {
    slug: "automation",
    title: "Automation",
    short:
      "Streamline processes and reduce manual effort through automation.",
    detail:
      "Streamline repetitive tasks, approvals, reporting, and business workflows to reduce manual effort and improve operational consistency.",
    outcomes: [
      "Fewer manual handoffs and errors",
      "Faster cycle times for approvals and reporting",
      "Repeatable, documented processes",
    ],
  },
  {
    slug: "business-systems-analysis",
    title: "Business Systems Analysis",
    short: "Align business needs with technology solutions.",
    detail:
      "Translate business goals into clear requirements, process models, functional specifications, solution designs, and testable outcomes.",
    outcomes: [
      "Requirements stakeholders can agree on",
      "Designs tied to measurable outcomes",
      "Less rework between business and delivery teams",
    ],
  },
  {
    slug: "business-continuity-disaster-recovery",
    title: "Business Continuity & Disaster Recovery",
    short:
      "Build resilient operations to prepare for and respond to disruption.",
    detail:
      "Assess operational risks and develop recovery strategies, backup approaches, continuity plans, and testing procedures to help organizations recover from disruption.",
    outcomes: [
      "Documented recovery objectives and plans",
      "Tested backup and restore procedures",
      "Clear roles when incidents occur",
    ],
  },
];

export const values = [
  {
    title: "Integrity",
    description: "Communicate transparently and act responsibly.",
  },
  {
    title: "Practical Innovation",
    description: "Recommend solutions that address real business needs.",
  },
  {
    title: "Collaboration",
    description: "Work closely with clients and their teams.",
  },
  {
    title: "Reliability",
    description: "Emphasize security, quality, documentation, and maintainability.",
  },
  {
    title: "Continuous Improvement",
    description: "Help clients strengthen their capabilities over time.",
  },
];

export const approachSteps = [
  {
    title: "Discover",
    description:
      "Understand business goals, challenges, existing systems, risks, and opportunities.",
  },
  {
    title: "Design",
    description:
      "Develop requirements, target architecture, recommendations, and an achievable roadmap.",
  },
  {
    title: "Deliver",
    description:
      "Implement, integrate, test, document, and validate the agreed solution.",
  },
  {
    title: "Support",
    description:
      "Provide knowledge transfer, optimization, operational support, and resilience planning as agreed.",
  },
];

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  focus: string[];
};

export const industries: Industry[] = [
  {
    slug: "government",
    title: "Government & Public Sector",
    summary:
      "Strengthen data foundations, reporting, and continuity for agencies that need trustworthy information and resilient operations.",
    focus: [
      "Governed data platforms and reporting",
      "Systems analysis for modernization programs",
      "Continuity and recovery planning",
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    summary:
      "Connect clinical, operational, and administrative systems so leaders can act on consistent, secure information.",
    focus: [
      "Integration across care and operations systems",
      "Analytics for performance and quality",
      "Secure cloud and access patterns",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    summary:
      "Unify fragmented data, improve decision support, and reduce operational risk across product and compliance teams.",
    focus: [
      "Centralized, auditable data foundations",
      "Automation for reporting workflows",
      "Resilience for critical services",
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    summary:
      "Help growing firms replace spreadsheet-driven processes with integrated systems and practical analytics.",
    focus: [
      "Business systems analysis and roadmaps",
      "Workflow automation",
      "Dashboards for delivery and finance",
    ],
  },
  {
    slug: "technology",
    title: "Technology & Product Companies",
    summary:
      "Support data platforms, cloud migration, and operational tooling so product and engineering teams scale with confidence.",
    focus: [
      "Cloud migration with cost and security controls",
      "Data pipelines and intelligence layers",
      "Operational resilience",
    ],
  },
  {
    slug: "education-nonprofit",
    title: "Education & Nonprofit",
    summary:
      "Improve visibility across programs, funding, and operations without overbuilding for the size of the organization.",
    focus: [
      "Practical data centralization",
      "Lightweight integrations",
      "Clear reporting for leadership and stakeholders",
    ],
  },
];

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readMinutes: number;
};

export const insights: Insight[] = [
  {
    slug: "five-signs-your-data-foundation-is-holding-you-back",
    title: "Five signs your data foundation is holding you back",
    category: "Data Strategy",
    date: "2026-09-12",
    excerpt:
      "When teams argue about whose numbers are right, the problem is rarely the dashboard—it’s the foundation underneath.",
    readMinutes: 6,
  },
  {
    slug: "integration-without-the-spaghetti",
    title: "Integration without the spaghetti",
    category: "Integration",
    date: "2026-08-21",
    excerpt:
      "A practical way to connect systems so information flows reliably—without creating a brittle web of one-off interfaces.",
    readMinutes: 7,
  },
  {
    slug: "cloud-migration-that-protects-continuity",
    title: "Cloud migration that protects continuity",
    category: "Cloud",
    date: "2026-07-30",
    excerpt:
      "Moving to the cloud is not only a technology project. Security, dependencies, cost, and recovery must travel with you.",
    readMinutes: 8,
  },
  {
    slug: "automation-that-teams-actually-adopt",
    title: "Automation that teams actually adopt",
    category: "Automation",
    date: "2026-06-18",
    excerpt:
      "Successful automation starts with the process people live in—not the tool catalog. Here’s how we scope for adoption.",
    readMinutes: 5,
  },
  {
    slug: "from-requirements-to-testable-outcomes",
    title: "From requirements to testable outcomes",
    category: "Analysis",
    date: "2026-05-09",
    excerpt:
      "Business systems analysis works when goals become clear requirements, designs, and checks everyone can verify.",
    readMinutes: 6,
  },
  {
    slug: "continuity-plans-that-survive-first-contact",
    title: "Continuity plans that survive first contact",
    category: "Resilience",
    date: "2026-04-02",
    excerpt:
      "A continuity plan only counts if people can execute it under pressure. Testing and ownership make the difference.",
    readMinutes: 7,
  },
];

export type CaseStudy = {
  slug: string;
  clientType: string;
  title: string;
  challenge: string;
  approach: string;
  results: string[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "agency-data-foundation",
    clientType: "Public sector agency",
    title: "Building a trusted reporting foundation across disconnected systems",
    challenge:
      "Leadership received conflicting metrics from multiple program systems, slowing decisions and eroding confidence in reports.",
    approach:
      "We assessed source systems, defined a governed centralization model, and delivered integrated pipelines with clear ownership and quality checks.",
    results: [
      "One agreed set of executive KPIs",
      "Reduced manual reconciliation effort",
      "Documented data ownership and access rules",
    ],
    services: ["Data Centralization", "Data Integration", "Analytics & Intelligence"],
  },
  {
    slug: "healthcare-operations-visibility",
    clientType: "Regional healthcare organization",
    title: "Connecting operations data for clearer day-to-day decisions",
    challenge:
      "Operational teams tracked performance in spreadsheets while core systems held the real activity data—creating lag and blind spots.",
    approach:
      "We mapped critical workflows, integrated key systems, and stood up dashboards tied to operational priorities—not vanity metrics.",
    results: [
      "Near-real-time operational visibility",
      "Fewer handoffs between systems and spreadsheets",
      "Shared definitions across clinical and admin teams",
    ],
    services: ["Data Integration", "Analytics & Intelligence", "Business Systems Analysis"],
  },
  {
    slug: "cloud-move-with-continuity",
    clientType: "Mid-market technology firm",
    title: "Migrating critical workloads without disrupting the business",
    challenge:
      "Legacy hosting limited scale, but the organization could not risk downtime for customer-facing services during migration.",
    approach:
      "We sequenced dependencies, designed security and cost controls, and paired cutover with tested recovery procedures.",
    results: [
      "Phased migration with minimal service interruption",
      "Clear cost and security guardrails",
      "Tested backup and restore path",
    ],
    services: ["Cloud Migration", "Business Continuity & Disaster Recovery"],
  },
  {
    slug: "services-firm-automation",
    clientType: "Professional services firm",
    title: "Automating approvals and reporting to reclaim delivery time",
    challenge:
      "Partners and project managers spent hours each week on repetitive approvals, status collection, and month-end reporting.",
    approach:
      "We analyzed the real process, automated high-friction steps, and documented maintainable workflows the firm could own.",
    results: [
      "Faster approval cycles",
      "More consistent status reporting",
      "Hours returned to client delivery each week",
    ],
    services: ["Automation", "Business Systems Analysis"],
  },
];
