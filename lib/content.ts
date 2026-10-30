export type Project = {
  slug: string;
  name: string;
  label: string;
  sector: string;
  category: "Venture build" | "Client & product strategy" | "Strategic analysis";
  role: string;
  description: string;
  cover: string;
  theme: string;
  period: string;
  intro: string;
  context: string;
  constraint: string;
  insight: string;
  decisions: string[];
  execution: string;
  evidence: string[];
  learning: string;
  status: string;
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "artdera", name: "ArtDera", label: "01 / MARKETPLACE", sector: "Creative commerce · Pakistan",
    category: "Venture build", role: "Venture concept, marketplace and growth strategy",
    description: "Turning fragmented artist discovery into a more structured marketplace for creators and buyers.",
    cover: "/assets/artdera-cover.svg", theme: "sand", period: "Venture build · 2026",
    intro: "A marketplace is not just a collection of listings. It is a system of incentives, confidence and meaningful exchange.",
    context: "Pakistan has compelling creative talent, but independent artists often face fragmented discovery, limited digital presence, and weak pathways to commercial opportunity.",
    constraint: "The challenge was two-sided: give artists a reason to join while giving buyers enough information and trust to act.",
    insight: "The product needed both creator utility and buyer confidence. Supply acquisition without buying intent is not marketplace growth.",
    decisions: [
      "Structure seller plans, storefronts and commissions around marketplace economics.",
      "Treat verification, purchase confidence and delivery clarity as product concerns.",
      "Use exhibitions, creator stories and partnerships to develop reasons to discover the marketplace.",
      "Iterate onboarding, visibility and product direction based on creator conversations."
    ],
    execution: "Contributed to venture shaping, marketplace model, monetization, product direction, creator acquisition, positioning, growth planning and exhibition strategy. An initial MVP and marketplace model were assembled in approximately two weeks of focused work.",
    evidence: [
      "Top-30 national startup shortlist from more than 100 applicants, as documented in the brand brief.",
      "An early marketplace MVP and two-sided commercial model developed through a focused build cycle.",
      "Publicly visible creator and studio identities across marketplace and exhibition pages; current live totals require fresh verification."
    ],
    learning: "Trust, creator activation and economics must evolve together. The next useful feature is the one that reduces a real reason for a buyer or creator not to proceed.",
    status: "An operating venture; figures and screenshots should be revalidated before publication.",
    url: "https://artdera.com/"
  },
  {
    slug: "novuli", name: "Novuli", label: "02 / DIGITAL PRODUCTS", sector: "Software · AI · Digital services",
    category: "Client & product strategy", role: "Product, growth and client strategy work",
    description: "Connecting client problems with the right digital product, implementation plan and commercial direction.",
    cover: "/assets/novuli-cover.svg", theme: "mint", period: "Client & product work",
    intro: "The real brief is not to build a website. It is to understand what the business needs the website to accomplish.",
    context: "Client projects ranged across websites, AI automation, dashboards, marketplaces, commerce and digital growth systems.",
    constraint: "Technology requests often arrive before the real commercial need, customer behavior or success criteria have been defined.",
    insight: "Better solutions begin with discovery and prioritization. Features and channels should follow the problem, not dictate it.",
    decisions: [
      "Start with client discovery and business problem definition.",
      "Prioritize features by customer impact and commercial relevance.",
      "Link positioning and growth decisions to product and delivery work.",
      "Coordinate between development, design, marketing and sales functions."
    ],
    execution: "Worked on proposals, client communication, product and feature direction, business development, growth planning and cross-functional coordination. Specific client case studies require client consent and approved assets.",
    evidence: ["Experience across software, commerce, AI and digital workflows.", "Cross-functional client and delivery work documented in the brand brief."],
    learning: "Client success depends on building the right thing, defining what success means and connecting delivery decisions to the business model.",
    status: "Selected client work requires approval before screenshots, logos or outcomes are published.",
    url: "https://www.novuli.com/"
  },
  {
    slug: "famewheels", name: "FameWheels", label: "03 / GROWTH STRATEGY", sector: "Automotive marketplace · Pakistan",
    category: "Strategic analysis", role: "Cross-growth research and strategic recommendations",
    description: "Finding the constraints in an existing automotive platform, from search and trust to dealer value.",
    cover: "/assets/famewheels-cover.svg", theme: "orange", period: "Strategic review · 2026",
    intro: "When a marketplace already has users, listings and a team, the next growth move starts with finding its constraints — not adding activity.",
    context: "FameWheels was evaluated as an operating automotive platform with listings, dealers, customer journeys and established operational resources.",
    constraint: "Traffic and listings do not automatically become confident buyers, repeated dealer value or completed transactions.",
    insight: "Marketplace performance requires a joined-up view of search, listings, inspection, support, dealer incentives and conversion.",
    decisions: [
      "Map friction across search, listings, booking, inspection and trust journeys.",
      "Propose SEO, support and AI-assisted customer journey improvements.",
      "Explore a Dealer Pro value proposition with clearer dealer incentives.",
      "Focus measurement on customer and commercial outcomes, not vanity traffic."
    ],
    execution: "Developed strategic analysis and recommendations informed by research, an industrial visit and CEO interaction. These are proposals, not claims of changes implemented by FameWheels.",
    evidence: [
      "Company-reported context at the time: 23K+ listings, 13K+ users, 1,087 dealers and 5,100+ inspections. Not independently audited.",
      "Research, customer-journey recommendations and an industrial visit with leadership."
    ],
    learning: "For an established platform, prioritization means finding the bottleneck whose removal makes the entire system work better.",
    status: "Strategic proposals; implementation and business impact have not been verified."
  }
];

export const growthSteps = [
  { title: "Observe & understand", short: "Find the real problem", detail: "Study customers, alternatives, objections and the market gap before deciding what to make." },
  { title: "Position", short: "Become the clear choice", detail: "Create a distinct reason to choose: category, message, proof, differentiation and trust." },
  { title: "Design the business", short: "Make value sustainable", detail: "Shape the offer, pricing, business model, economics and key partnerships." },
  { title: "Shape the product", short: "Build what matters", detail: "Prioritize experiences and flows that produce meaningful value, rather than feature volume." },
  { title: "Build demand", short: "Earn relevant attention", detail: "Choose content, search, partnerships, outreach, community or paid channels based on the customer." },
  { title: "Convert", short: "Remove friction", detail: "Improve trust and action across pages, sales conversations, checkout and onboarding." },
  { title: "Retain", short: "Create reasons to return", detail: "Build repeat value, communication, habit and customer loyalty into the product." },
  { title: "Measure & scale", short: "Find the next constraint", detail: "Read user and commercial data, systemize what works and expand with discipline." }
];

export type Article = { slug: string; number: string; category: string; title: string; excerpt: string; readingTime: string; paragraphs: string[] };
export const articles: Article[] = [
  { slug: "build-from-the-customer-backward", number: "01", category: "Customer insight", title: "Build from the customer backward.", excerpt: "Before a feature, campaign or sales pitch comes a much more useful question: why should someone care?", readingTime: "3 min read", paragraphs: [
    "The most expensive place to start a business is often the place that feels the most productive: building things before understanding the person they are for.",
    "A founder can ship features, launch campaigns and fill a roadmap while staying strangely distant from the customer’s real decision. What problem feels urgent? Which alternative are they already using? Where do they hesitate? What would make change worthwhile?",
    "I like to work backward from those questions. First understand the customer and the constraint. Then design the offer, the product and the route to market. The job is not to make more things. It is to remove the distance between a real need and a credible solution.",
    "This approach is useful whether the business is a new marketplace or an established platform. The specifics change. The discipline does not.",
    "A product becomes easier to position when the team knows why it matters. A campaign becomes more effective when the promise reflects that reality. And a business becomes more durable when customer value connects to the economics behind it."
  ]},
  { slug: "growth-is-a-system", number: "02", category: "Growth strategy", title: "Growth is a system, not a campaign.", excerpt: "More traffic only helps when the product, conversion journey and business economics can support it.", readingTime: "3 min read", paragraphs: [
    "A campaign can bring attention. It cannot repair a business that people do not understand, trust or want to return to.",
    "That is why I view growth as a chain of dependent decisions: customer insight, positioning, business design, product, demand, conversion, retention and measurement. Each stage makes the next one stronger or weaker.",
    "A marketplace can have thousands of listings and still struggle to help buyers decide. A product can get signups without creating enough repeat value. A sales team can work hard without having a clear proposition to sell. These are system problems, not simply channel problems.",
    "When growth stalls, I prefer to look for the constraint. What is making the next step unnecessarily difficult? Which change would improve the whole journey instead of one dashboard metric?",
    "Clarity lets teams invest in the right work. Measurement lets them learn whether the work helped. Scale should come after the system earns it."
  ]},
  { slug: "remove-reasons-not-to-buy", number: "03", category: "Product thinking", title: "Remove reasons not to buy.", excerpt: "The best product improvement is sometimes less friction, not more functionality.", readingTime: "2 min read", paragraphs: [
    "When customers hesitate, teams often respond by adding another feature. Sometimes the customer needs something much simpler: a clearer promise, trustworthy proof or a shorter path to action.",
    "Think about an artist marketplace. More browsing options do not help if buyers are unsure who the seller is or what happens after checkout. Think about a services business. Another landing-page animation will not help if the offer and next step remain ambiguous.",
    "I look for four human questions: Is this relevant to me? Can I trust it? Is it worth it? Can I act without unnecessary effort?",
    "Product, design, marketing and sales all influence those answers. That is why they should solve the same customer problem together instead of improving separate departmental metrics.",
    "Build features when they solve something real. But first, remove the reasons people cannot move forward."
  ]}
];

export const evidence = [
  { value: "20+", label: "People led or coordinated", note: "Across cross-functional teams" },
  { value: "0 → 1", label: "Venture building", note: "From idea to early product" },
  { value: "Top 30", label: "National startup shortlist", note: "From 100+ applicants" },
  { value: "Multi-market", label: "Projects & client contexts", note: "Different industries, shared discipline" }
];

export const pillars = [
  { number: "01", name: "Venture building", copy: "Find the opportunity, shape the model, make the first version real." },
  { number: "02", name: "Product & growth", copy: "Connect user behavior to positioning, conversion, retention and monetization." },
  { number: "03", name: "Cross-functional leadership", copy: "Give design, development, marketing and sales one direction to execute." }
];
