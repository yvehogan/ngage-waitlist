export const categories = [
  "General Questions",
  "Data & Technical Questions",
  "Council Resource Questions",
  "Political & Reputational Questions",
  "Impact & Evaluation Questions",
  "Financial Questions",
  "Partnership & Governance Questions",
  "Practical Implementation Questions",
  "Youth Engagement Questions",
  "Comparison & Alternatives Questions",
  "Council Culture & Change Management",
  "Next Steps",
];

export const faqsByCategory: Record<string, { question: string; answer: string }[]> = {
  "General Questions": [
    {
      question: "What is CitizensNgage?",
      answer:
        "CitizensNgage is the CiH philosophy in motion - a youth civic programme and digital platform (programme first, platform second). The programme (delivered with CiH Academy and local youth services across the councils) awakens, educates and enables young people as agents of change through 4–6 week journeys: capacity building, design sprints and real civic actions (FOI, consultations, budget inputs). The platform (app) gives them hyperlocal council information and participation tools, and gives councils dashboards to see and respond to youth voice. Together they add structured programme plus digital infrastructure, building on and complementing existing democratic education and youth engagement work, so young people can engage - and councils can respond - at scale.",
    },
    {
      question: "Who is Creative Ideation Hub?",
      answer:
        "A UK social enterprise with four pillars: Innovation (civic tech), Academy (capacity building), Fund (support for local solutions), and Research/Advisory. CitizensNgage is CiH's flagship pilot that links all four-testing our model for youth civic engagement in the UK (including the North West).",
    },
    {
      question: "Why focus specifically on youth?",
      answer:
        "Young people are the most underutilised resource in local democracy. The system has not failed them for lack of interest - it has failed them for lack of access, knowledge, and space to act. They are significantly affected by council decisions on housing, transport, education, employment, and climate, yet systematically excluded from the processes that shape those decisions. CitizensNgage exists to close that gap - not because youth engagement is useful to councils, but because young people have the right to be actors, not recipients, in the systems that shape their lives.",
    },
    {
      question: 'What does "pilot partnership" mean?',
      answer:
        "We're selecting 5–8 councils (with a priority on the North West, e.g. Salford) to run the programme and platform in 2026. Pilots help us refine the programme and platform while providing councils with free access and dedicated support. Post-pilot, councils can choose to continue with preferential ongoing terms.",
    },
  ],
  "Data & Technical Questions": [
    {
      question: "What data do you need from us?",
      answer:
        "Only publicly available data you already publish:\n• Councillor names, wards, party affiliations, contact details\n• Council budget documents (headline figures and budget categories)\n• Campaign manifestos/promises from recent elections (public documents)\n• Council performance data you report to central government or publish online\n• Meeting agendas, minutes, and decisions (already public)\nWe do NOT need confidential, commercially sensitive, or personal data.",
    },
    {
      question: "How will you access this data?",
      answer:
        "Combination of:\n1. Automated scraping from your public website (with your permission)\n2. Structured data files if you can provide them (CSV, JSON, etc.)\n3. API access if you have open data portals\n4. Manual curation where automated collection isn't feasible",
    },
    {
      question: "Do we need to build anything technically?",
      answer:
        "No. We handle all technical development. You simply provide data access through a simple data-sharing agreement. If you have structured data formats, sharing those reduces our workload, but it's not required.",
    },
    {
      question: "What about data protection and GDPR compliance?",
      answer:
        "We only use publicly available data. For user data (young people using the platform), we maintain full GDPR compliance with secure storage, clear privacy policies, and user consent mechanisms. We're happy to complete any data protection impact assessments required by your council.",
    },
    {
      question: "How often will data be updated?",
      answer:
        "We'll work with you to establish appropriate refresh cycles:\n• Councillor info: after elections or changes\n• Budgets: annually or when new budgets published\n• Performance data: quarterly or as published\n• Decisions/minutes: monthly or as available\nAutomated systems can sync regularly where possible.",
    },
    {
      question: "What if data on the platform becomes inaccurate?",
      answer:
        "We have verification processes including manual checking and version tracking. The platform includes user reporting mechanisms for errors. We'll establish correction protocols with your liaison officer for rapid fixes.",
    },
  ],
  "Council Resource Questions": [
    {
      question: "How much staff time will this require?",
      answer:
        "Minimal - approximately 2-3 hours per month. \n• Monthly 30-minute liaison call with CiH team. \n• Quarterly review of youth feedback and insights. \n• 1-2 facilitated youth-council forums during pilot (2 hours each). \n• Ad-hoc responses to specific youth questions/feedback as needed.",
    },
    {
      question: "Who should be our liaison officer?",
      answer:
        "Ideally someone from democratic services, youth services, or communications/engagement who understands both council operations and youth engagement. Doesn't need to be senior - coordinator or officer level works well.",
    },
    {
      question: "Do we need to promote the platform ourselves?",
      answer:
        "No - CiH handles youth mobilisation through schools, youth organisations, universities, and social media. However, if you'd like to amplify through your channels (e.g., council social media, youth services networks), that's welcomed and helpful.",
    },
    {
      question: "What if young people submit lots of feedback we can't respond to?",
      answer:
        "We'll establish realistic expectations upfront about council response capacity. Early in the pilot, volume typically starts low and builds. We can help prioritise which feedback needs responses and create template responses for common queries. The platform isn't designed to overwhelm you - it's designed to make engagement manageable.",
    },
    {
      question: "What if a young person submits something inappropriate or offensive?",
      answer:
        "We have moderation policies and community standards. Inappropriate content is flagged and removed. Serious safeguarding concerns are escalated through proper channels. You won't be exposed to unmoderated content.",
    },
  ],
  "Political & Reputational Questions": [
    {
      question: "Will this platform criticise the council or make us look bad?",
      answer:
        "CitizensNgage enables transparency and accountability - not partisan criticism. All councillors and parties are treated equally. Promise-tracking applies to whoever made commitments. The platform presents factual data neutrally. Greater transparency typically builds trust, not damages it.",
    },
    {
      question: "What if opposition councillors use this to score political points?",
      answer:
        "The platform is non-partisan by design. All councillors have equal visibility. Opposition and ruling parties both benefit from direct youth engagement. Evidence from similar platforms shows transparency tends to benefit councils overall by demonstrating responsiveness.",
    },
    {
      question: "Will this create negative media attention?",
      answer:
        'Quite the opposite. Pilot councils position themselves as innovative leaders on youth engagement. Media coverage typically focuses on the positive angle: "Council pioneers youth democracy platform." Negative stories arise from councils ignoring youth, not from councils transparently engaging them.',
    },
    {
      question: "What if youth highlight problems we can't immediately fix?",
      answer:
        "That's valuable information! The platform helps councils understand youth priorities and explain constraints. Transparency about trade-offs and budget realities builds understanding. Young people appreciate honesty about limitations more than being ignored.",
    },
    {
      question: "How do you ensure balanced political representation?",
      answer:
        "Platform design is strictly non-partisan. All councillors, wards, and parties receive equal treatment. We don't endorse candidates or policies. Our methodology is transparent and auditable.",
    },
  ],
  "Impact & Evaluation Questions": [
    {
      question: "How will we measure success?",
      answer:
        "We track multiple metrics:\n• Reach - number of young people registered and actively using platform in your area\n• Engagement - frequency and depth of platform usage, feedback submitted\n• Influence - documented cases where youth input affected council decisions\n• Satisfaction - youth and council feedback on platform usefulness\n• Systems change - changes in council practices around youth engagement\nYou'll receive quarterly impact reports during the pilot.",
    },
    {
      question: "What outcomes can we realistically expect in 6 months?",
      answer:
        "Realistic targets:\n• 100-300 young people actively engaged per council (depending on population)\n• 50+ pieces of substantive youth feedback on council processes\n• 2-3 specific instances where youth input influences decisions\n• Measurable increase in youth awareness of local governance\n• Enhanced council capacity for ongoing youth engagement.",
    },
    {
      question: "What evidence will you provide that this works?",
      answer:
        "Comprehensive evaluation including:\n• User analytics and engagement data\n• Pre/post surveys of youth civic knowledge and efficacy\n• Case studies of policy influence pathways\n• Council officer testimonials on usefulness\n• Comparative analysis across pilot councils\n• Cost-effectiveness assessment.",
    },
    {
      question: "What happens after the 6-month pilot?",
      answer:
        "Three options:\n1. Continue partnership - transition to paid subscription with preferential pilot pricing\n2. Scale internally - councils can build on learnings to enhance own youth engagement\n3. Conclude partnership - no obligation to continue, but keep access to pilot insights\nRegardless of choice, you'll have contributed to advancing youth participation nationally.",
    },
  ],
  "Financial Questions": [
    {
      question: "Is there really no cost during the pilot?",
      answer:
        "Correct. CiH covers all costs:\n• Platform development and hosting\n• Youth mobilization and marketing\n• Civic literacy workshops\n• Facilitation of youth-council forums\n• Data processing and curation\n• Impact evaluation and reporting\nFunded through philanthropic R&D (year 1); council licensing from year 2. Democratic Innovations Accelerator and CiH core funding support the pilot.",
    },
    {
      question: "What would post-pilot costs look like?",
      answer:
        "Post-pilot pricing (still being finalised):\n• Likely £3,000-£8,000/year depending on council size and features\n• Substantially below the cost of equivalent youth engagement staffing or consultancy\n• Pilot partners receive preferential long-term pricing\n• Flexible payment structures available (e.g., linking to specific budget lines).",
    },
    {
      question: "Can we access grant funding to cover post-pilot costs?",
      answer:
        "Potentially yes. Youth engagement platforms align with multiple funding streams:\n• Local Government Association innovation grants\n• DLUHC community engagement funding\n• Youth sector grants focused on civic participation\n• Digital inclusion funding\nWe can provide supporting materials for grant applications.",
    },
    {
      question: "What's the value we're receiving during the free pilot?",
      answer:
        "Estimated £15,000-£20,000 value including:\n• Platform development and customization (£8,000)\n• Youth mobilization campaigns (£3,000)\n• Civic literacy workshops and training (£2,000)\n• Facilitation and liaison support (£2,000)\n• Impact evaluation and reporting (£2,000)\n• Technical support and maintenance (£1,000)\nPlus intangible value: innovation credentials, youth engagement data, and strengthened community relationships.",
    },
  ],
  "Partnership & Governance Questions": [
    {
      question: "What's the legal structure of the partnership?",
      answer:
        "Simple Memorandum of Understanding (MoU) outlining:\n• Mutual commitments and responsibilities\n• Data sharing protocols and permissions\n• Intellectual property (platform remains CiH's, data insights shared with council)\n• Duration and termination provisions\n• Safeguarding and data protection compliance\n• Review and evaluation processes\nYour legal team can review before signing. Template available upon request.",
    },
    {
      question: "Who owns the data and insights?",
      answer:
        "Data ownership breakdown:\n• Council data on platform - remains council's public data, simply republished in accessible format\n• User-generated content - users own their contributions, platform has license to display\n• Aggregated insights - shared with partner councils while protecting individual user privacy\n• Platform technology - CiH retains intellectual property in platform itself.",
    },
    {
      question: "Can we withdraw from the pilot if it's not working?",
      answer:
        "Yes. Either party can exit with 30 days' notice. If council withdraws:\n• Platform access for your area discontinued\n• Youth engagement data provided to you for records\n• No financial penalty\n• Feedback welcome to inform platform improvements.",
    },
    {
      question: "How do you handle safeguarding concerns?",
      answer:
        "Comprehensive safeguarding framework:\n• All CiH staff DBS checked\n• Clear safeguarding policies aligned with UK standards\n• Named safeguarding leads with 24/7 contact\n• Protocols for identifying and escalating concerns\n• Partnership with council's safeguarding teams\n• Age verification and parental consent processes for under-18s\n• Moderation systems for inappropriate content\n• Secure reporting mechanisms.",
    },
    {
      question: "What about accessibility requirements?",
      answer:
        "Platform designed to WCAG 2.1 AA standards minimum:\n• Screen reader compatible\n• Keyboard navigation\n• High contrast options\n• Adjustable text sizes\n• Alternative text for images\n• Plain language content\n• Mobile accessibility\nWe welcome feedback on improvements.",
    },
  ],
  "Practical Implementation Questions": [
    {
      question: "When would the pilot start?",
      answer:
        "Flexible based on council readiness. Ideal timeline:\n• Week 1-2 - MoU signing and initial planning meeting\n• Week 3-6 - Data integration and platform customization\n• Week 7 - Soft launch with beta testing\n• Week 8 - Full public launch\n• Months 2-6 - Active engagement phase\nWe can adjust to fit council calendars (e.g., avoiding election periods).",
    },
    {
      question: "How do you handle elections and purdah periods?",
      answer:
        "Platform suspends promise-tracking and political content updates during purdah. Focus shifts to:\n• Non-political council service information\n• Budget and performance data\n• Civic literacy content\n• Candidate information (all parties treated equally)\nPost-election, new councillor data integrated within 2 weeks.",
    },
    {
      question: "What if our council is reorganising or facing structural changes?",
      answer:
        "We're flexible. The platform can be paused during major transitions and resumed when appropriate. Structural changes (boundary reviews, combined authorities, etc.) can be integrated as they occur.",
    },
    {
      question: "Can we pilot in specific wards rather than council-wide?",
      answer:
        "Yes, though broader coverage typically yields better results. We can start with 2–3 pilot wards and expand based on early learnings. Helps manage resource commitment while testing approach.",
    },
    {
      question: "What support do you provide to our liaison officer?",
      answer:
        "Comprehensive support package:\n• Detailed onboarding and training\n• User-friendly council dashboard for monitoring engagement\n• Weekly email updates during launch phase\n• Monthly coordination calls\n• 24/7 technical support email\n• Troubleshooting guides and FAQs\n• Templates for responding to common youth questions\n• Connection to peer liaison officers in other pilot councils.",
    },
  ],
  "Youth Engagement Questions": [
    {
      question: 'How will you reach diverse young people, not just the "usual suspects"?',
      answer:
        "Multi-pronged recruitment strategy:\n• Partner with youth services reaching NEET youth, care leavers, young carers\n• Engage further education colleges, not just universities\n• Work with faith-based youth groups across religious communities\n• Connect with LGBTQ+ youth organisations\n• Collaborate with disability youth networks\n• Target social media platforms (TikTok, Instagram) with paid promotion\n• Offer offline engagement options and printed materials\n• Paid Youth Ambassador roles incentivize participation.",
    },
    {
      question: "What if young people don't actually want to engage with the council?",
      answer:
        "That gap is a symptom of systemic barriers - not a lack of interest. The system has not failed young people for lack of interest; it has failed them for lack of access, knowledge, and space. Our evidence and experience consistently show that young people do want to engage when:\n• Information is accessible and relevant to their lives\n• They see concrete opportunities to influence decisions\n• Engagement doesn't require excessive time/effort\n• They feel heard and see responses\nPlatform design specifically addresses these barriers.",
    },
    {
      question: "How do you ensure youth feedback is constructive, not just complaints?",
      answer:
        "Platform design encourages constructive input through:\n• Structured feedback forms with specific questions\n• Examples and prompts guiding thoughtful responses\n• Civic literacy content helping youth understand constraints and trade-offs\n• Community standards emphasizing respectful dialogue\n• Highlighting examples of constructive youth engagement\nThat said, complaints contain valuable information about service gaps and priorities.",
    },
    {
      question: "What if youth feedback conflicts with other residents' priorities?",
      answer:
        "That's democracy! Youth perspectives may differ from older residents - that's exactly why their voices matter. The platform helps councils:\n• Understand full spectrum of community priorities\n• Make informed decisions considering diverse needs\n• Explain trade-offs transparently\n• Identify win-win solutions addressing multiple groups\nYouth aren't asking for their priorities to always win, just to be heard.",
    },
    {
      question: "How do you protect young people's privacy and safety online?",
      answer:
        "Robust privacy and safety measures:\n• No requirement to use real names (usernames allowed)\n• Personal data encrypted and securely stored\n• No public display of personal information\n• Age verification without exposing identity\n• Moderation preventing harassment or inappropriate contact\n• Ability to report concerns confidentially\n• Clear privacy policy in plain language\n• GDPR-compliant data handling\n• Option to delete account and data anytime.",
    },
  ],
  "Comparison & Alternatives Questions": [
    {
      question: "How is this different from our existing youth council/forums?",
      answer:
        "Complementary, not replacement. Youth councils are structured forums (often 18-20 members); CitizensNgage adds always-on, data-rich participation that any young person in the area can use - including those not in a youth council. We don't replace youth councils; we expand who can participate and give councils a clearer picture of youth voice at scale.\nKey differences:\n• Scale - reaches many more young people than typical youth council membership\n• Ongoing - continuous engagement vs. periodic meetings\n• Inclusive - broader youth demographics than traditional youth councils\n• Data-driven - evidence base for youth priorities vs. anecdotal\n• Lower barrier - participation can take minutes, not only monthly commitments\nYouth councils can use CitizensNgage to broaden their reach and evidence base.",
    },
    {
      question: "We already have consultation portals. Why do we need this?",
      answer:
        "Standard consultation portals typically:\n• Use complex, formal language\n• Assume existing civic literacy\n• Lack context and background information\n• Don't personalize to user's area\n• Don't make outcomes visible\n• Aren't designed with youth user experience in mind\nCitizensNgage specifically addresses these youth engagement barriers.",
    },
    {
      question: "Couldn't we just use social media for youth engagement?",
      answer:
        "Social media is valuable for outreach but limited for substantive engagement:\n• Conversations fragment across platforms\n• Difficult to track and analyse feedback systematically\n• No connection to official decision-making processes\n• Vulnerable to misinformation and manipulation\n• Ephemeral rather than building lasting civic literacy\nCitizensNgage combines social media's accessibility with structured engagement infrastructure.",
    },
    {
      question: "What about other civic tech platforms like FixMyStreet?",
      answer:
        "FixMyStreet focuses on service delivery issues (potholes, streetlights). CitizensNgage focuses on governance, accountability, and policy participation. Different tools for different purposes - they can work together.",
    },
  ],
  "Council Culture & Change Management": [
    {
      question: "Some councillors may resist transparency. How do you handle this?",
      answer:
        "Change management approach:\n• Early engagement with all parties to build buy-in\n• Clear communication about benefits (strengthened relationships, better intel on priorities)\n• Evidence from other councils showing transparency builds trust\n• Recognition that all councillors get equal visibility\n• Voluntary participation allows gradual cultural shift\n• Focus on opportunities, not threats\nResistance typically decreases once councillors see youth engagement firsthand.",
    },
    {
      question: "Our council is quite traditional. Will this work in our context?",
      answer:
        "Platform adapts to council culture, not vice versa. In more traditional settings:\n• Slower, phased rollout\n• More emphasis on formal structures and protocols\n• Greater hand-holding for councillors less familiar with digital tools\n• Highlighting alignment with existing youth engagement duties\nInnovation happens at different paces - we meet you where you are.",
    },
    {
      question: "What if this conflicts with our existing engagement strategies?",
      answer:
        "Platform designed to enhance, not replace, existing approaches:\n• Integrates with traditional consultations by driving youth participation\n• Complements in-person engagement by providing ongoing digital touchpoint\n• Supports statutory duties without creating conflicting obligations\n• Flexible enough to align with your engagement calendar and priorities\nWe'll work with you to ensure coherence with existing strategies.",
    },
  ],
  "Next Steps": [
    {
      question: "Interested in Pilot Partnership?",
      answer:
        "Here's how to get started:\n1. Initial conversation - 30-minute call to discuss your context and questions\n2. Council presentation - We can present to leadership team, cabinet, or officers\n3. MoU review - Your legal and data protection teams review partnership agreement\n4. Formal agreement - Sign MoU and initiate partnership\n5. Launch preparation - Data integration, planning, and communication (4-6 weeks)\n6. Go live - Platform launch with ongoing support\nTimeline: We're securing pilot partners now for 2026 launch (North West priority, e.g. Salford). Limited spaces available. See CitizensNgage Synopsis and Concept Note v3.0 for full context. The CitizensNgage Vision (Busayo, Feb 2026) provides the philosophical grounding for all programme and platform decisions.",
    },
  ],
};
