/**
 * Approved site content.
 *
 * Every string in this file comes from the approved Athletic Performance
 * Intelligence design export. Copy is edited here, never inside components.
 */

export const CONTACT_EMAIL = 'hello@flolabs.com';
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;
export const CONSULT_HREF = `mailto:${CONTACT_EMAIL}?subject=Initial%20consultation`;

export const SITE_NAME = 'Athletic Performance Intelligence';
export const SITE_DESCRIPTION =
  "MoodChanger's hardware-agnostic athletic performance intelligence system. Integrates multi-source athlete data into actionable insights, powered by FloBrain.";

/* ── Header navigation ──────────────────────────────────────────────── */

export const navLinks = [
  { href: '#moodchanger', label: 'MoodChanger' },
  { href: '#flobrain', label: 'FloBrain' },
  { href: '#api', label: 'Athletic Performance Intelligence' },
];

export const servicesLinks = [
  { href: '#tier-1-deliverables', label: 'Tier 1 · No Wearable' },
  { href: '#tier-2', label: 'Tier 2 · With Wearable' },
  { href: '#tier-3', label: 'Tier 3 · System Design' },
  { href: '#tiers', label: 'Compare Tiers 1-3' },
  { href: '#pricing', label: 'Pricing' },
];

/* ── What Is Athletic Performance Intelligence — accordion ──────────── */

export const apiGroups = [
  {
    title: 'Sports Science and Performance Models',
    lead: null,
    points: [
      'Heart Rate Variability (HRV) measures autonomic nervous system balance and recovery status',
      'Acute to Chronic Workload Ratio (ACWR) tracks training load progression and injury risk',
      'Standard Sports Science Metrics includes volume, intensity, frequency, and performance outputs',
    ],
  },
  {
    title: 'Behavioral and Athlete Wellness Models',
    lead: null,
    points: [
      'Track mood, stress, readiness levels',
      'Analyze behavioral patterns and consistency',
      'Include wellness assessments for holistic performance monitoring',
    ],
  },
  {
    title: 'Service Standardization Models',
    lead: 'Enables',
    points: [
      'Repeatable processes across teams and organizations',
      'Comparable performance insights and Personalized recommendations at scale',
    ],
  },
];

/* ── System models ──────────────────────────────────────────────────── */

export const models = [
  { name: 'Readiness', purpose: 'Determines if the athlete is physically and mentally prepared to perform' },
  { name: 'Load', purpose: 'Measures the stress applied through training and matches' },
  { name: 'Recovery', purpose: 'Evaluates how well the athlete is adapting to training stimuli' },
  { name: 'Risk', purpose: 'Identifies injury risk and performance decline signals' },
  { name: 'Performance', purpose: 'Tracks improvement trends and output progression' },
  { name: 'Context', purpose: 'Explains why performance data appears the way it does' },
];

/* ── The Challenge ──────────────────────────────────────────────────── */

export const challenges = [
  {
    n: '1',
    title: 'Lack of Comprehensive Athlete Overview',
    body: 'Athlete data is spread across training logs, readiness reports, coaching notes, external tools. No unified system to combine physical, mental, behavioral data.',
    outcome: "→ Incomplete understanding of athlete's overall readiness",
  },
  {
    n: '2',
    title: 'Limited Integrated Decision Support',
    body: 'Performance decisions are often made using fragmented or incomplete data sources and observations. Limited access to real-time, integrated insights.',
    outcome: '→ Challenges in maintaining consistent performance outcomes and optimal training balance',
  },
  {
    n: '3',
    title: 'Inefficient Performance Workflow',
    body: 'Coaching staffs spend excessive time on manual data tracking, switching between platforms, compiling reports, because systems are not integrated and automated.',
    outcome: '→ Reduced efficiency and Delayed decision-making',
  },
  {
    n: '4',
    title: 'Lack of Actionable Insights',
    body: 'Existing tools provide raw data and static dashboards. But, fail to deliver clear recommendations and contextual interpretation.',
    outcome: '→ Data overload without clarity and Difficulty translating data into action',
  },
];

/* ── The Solution ───────────────────────────────────────────────────── */

export const solutions = [
  {
    n: '1',
    title: 'Unified Athlete Intelligence',
    points: [
      'Aggregates physical, mental, and behavioral data patterns',
      'Creates a clear athlete profile',
      'Enables complete visibility of athlete condition and holistic performance analysis',
    ],
  },
  {
    n: '2',
    title: 'Data-Driven Decision Support',
    points: [
      'Utilizes Athletic Performance Intelligence models → readiness, load, recovery, risk, performance, context',
      'Provides real-time insights, predictive indicators, decision recommendations',
    ],
  },
  {
    n: '3',
    title: 'Automated Workflow Optimization',
    points: [
      'Automates data collection, data processing, report generation',
      'Integrates multiple data streams into one system',
      'Reduces manual workload and time spent on admin tasks',
    ],
  },
  {
    n: '4',
    title: 'Actionable Intelligence',
    points: [
      'Converts raw data into clear insights, contextual explanations, recommended actions',
      'Delivers personalized athlete insights and team-level analytics',
    ],
  },
];

export const solutionBenefits = [
  'Real-time performance monitoring',
  'Holistic athlete management',
  'Reduced injury risk',
  'Improved training efficiency',
  'Scalable across teams and organizations',
  'Works with or without wearables → Hardware agnostic',
];

/* ── Tiers ──────────────────────────────────────────────────────────── */

export const tier1Benefits = [
  'No hardware required',
  'Fast implementation',
  'Clear understanding of current performance system',
  'Identification of inefficiencies and gaps',
  'Foundation for future scaling',
];

export const tier2Benefits = [
  'Higher data accuracy',
  'Predictive performance insights',
  'Improved injury prevention',
  'Enhanced training optimization',
  'Real-time monitoring capabilities',
];

export const tier3Benefits = [
  'Fully tailored solution',
  'Seamless integration with existing systems',
  'Scalable across teams and departments',
  'Long-term performance optimization',
  'Strategic partnership with MoodChanger',
];

export const stepsWithout = [
  { n: '1', title: 'Onboarding', body: "We collect and evaluate the organization's current setup, assist with athlete profile setup, and define performance goals." },
  { n: '2', title: 'Workflow Integration', body: 'Existing training workflows, schedules, and coaching processes are structured and integrated into the platform.' },
  { n: '3', title: 'Data Collection', body: 'Athlete-reported data, training inputs, and behavioral indicators are consistently collected through structured forms and system inputs.' },
  { n: '4', title: 'Athletic Performance Intelligence Analysis', body: 'The Athletic Performance Intelligence system processes structured workflow and behavioral data to identify performance patterns, readiness levels, and potential risks.' },
  { n: '5', title: 'Coaching Insights', body: 'Actionable dashboards and automated insights are delivered to coaches and performance staff in real-time to support decision-making.' },
];

export const stepsWith = [
  { n: '1', title: 'Onboarding', body: "We collect and evaluate the organization's current setup, assist with athlete profile setup, and define performance goals." },
  { n: '2', title: 'Device Integration', body: 'Existing wearable devices are connected to the platform, and data pipelines are configured based on sport and performance requirements.' },
  { n: '3', title: 'Data Collection', body: 'Physiological, behavioral, and performance data are continuously collected and streamed into the platform during training and competition.' },
  { n: '4', title: 'Athletic Performance Intelligence Analysis', body: 'The Athletic Performance Intelligence system processes integrated data to identify performance patterns, fatigue indicators, and readiness signals.' },
  { n: '5', title: 'Coaching Insights', body: 'Actionable dashboards and automated insights are delivered to coaches and performance staff in real-time to support decision-making.' },
];

export const wearables = [
  { name: 'Garmin', img: '/images/wearables/garmin.png' },
  { name: 'Apple Watch', img: '/images/wearables/apple-watch.png' },
  { name: 'WHOOP', img: '/images/wearables/whoop.png' },
  { name: 'Catapult', img: '/images/wearables/catapult.png' },
  { name: 'Polar', img: '/images/wearables/polar.png' },
];

export const deviceFlow = [
  { n: '1', title: 'Device Syncs', body: 'Connects with widely used wearable ecosystems, such as examples.' },
  { n: '2', title: 'Data Normalized', body: 'Athlete data from different devices is standardized into a unified performance dataset.' },
  { n: '3', title: 'Platform Analyzed', body: 'AI models process physiological and biomechanical signals to identify workload, fatigue, and readiness patterns.' },
  { n: '4', title: 'Interpreted Insights Delivered', body: 'Clear dashboards and alerts support decisions on training load, recovery timing, and player availability.' },
];

export const tiers = [
  {
    kicker: 'Tier 1',
    title: 'Sport Performance Optimization',
    start: ['No wearable data', 'Lack a structured performance system'],
    plus: ['Structured workflows', 'Organized performance tracking', 'Foundational decision-making framework'],
    arrow: 'Enhancing existing workflows with structured performance intelligence',
    tag: 'Structure → Foundation',
  },
  {
    kicker: 'Tier 2',
    title: 'Wearable Data Performance',
    start: ['Wearable data available', 'Need deeper interpretation'],
    plus: ['Data integration', 'Advanced analysis', 'Actionable insights'],
    arrow: 'Turn FloBrain and wearable data into intelligence decision system',
    tag: 'Insight → Intelligence',
  },
  {
    kicker: 'Tier 3',
    title: 'Sport Performance System Design Consulting',
    start: ['Require full system integration', 'Want long-term performance optimization'],
    plus: [
      'Fully customized system',
      'Athletic Performance Intelligence integration into existing infrastructure',
      'End-to-end performance intelligence ecosystem',
    ],
    arrow: 'Transition from tools to a fully integrated system',
    tag: 'System → Transformation',
  },
];

/* ── CAIPO ──────────────────────────────────────────────────────────── */

export const caipoCaps = [
  { n: '1', title: 'Sport-Specific Sensors', body: 'Metrics tailored for team and individual sports, such as workload, movement patterns, and fatigue indicators, not repurposed consumer health tracking.' },
  { n: '2', title: 'Native Platform Integration', body: 'Zero-friction data sync directly into the Performance Optimization dashboard, eliminating the need for third-party data bridges.' },
  { n: '3', title: 'Extended Battery Life', body: 'Full training day and competition coverage without recharging interruptions.' },
  { n: '4', title: 'Real-Time Alerts', body: 'Instant flagging of physiological thresholds to coaching staff during live sessions or matches.' },
  { n: '5', title: 'Lightweight and Durable Build', body: 'Engineered for contact sports, all-weather conditions, and intensive training loads.' },
];

/* ── Coming Soon ────────────────────────────────────────────────────── */

export const comingSoon = [
  { name: 'Smart Glasses', img: '/images/coming-soon/smart-glasses.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-glasses' },
  { name: 'EEG Hardware', img: '/images/coming-soon/eeg-hardware.jpg', href: 'https://moodchanger.ai/Wearables.html#eeg-hardware' },
  { name: 'Smart Ring', img: '/images/coming-soon/smart-ring.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-ring' },
  { name: 'Brain Monitoring', img: '/images/coming-soon/brain-monitoring.jpg', href: 'https://moodchanger.ai/Wearables.html#brain-monitor' },
  { name: 'Smart Foot Pods', img: '/images/coming-soon/smart-foot-pods.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-foot-pods' },
  { name: 'Smart Insoles', img: '/images/coming-soon/smart-insoles.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-insoles' },
  { name: 'Smart Watch', img: '/images/coming-soon/smart-watch.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-watch' },
  { name: 'Exoskeleton', img: '/images/coming-soon/exoskeleton.jpg', href: 'https://moodchanger.ai/Wearables.html#exoskeleton' },
  { name: 'Smart Gloves', img: '/images/coming-soon/smart-gloves.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-gloves' },
  { name: 'Smart Shirts', img: '/images/coming-soon/smart-shirts.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-shirt' },
  { name: 'Smart Suit', img: '/images/coming-soon/smart-suit.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-suit' },
  { name: 'Smart Posture Trainer', img: '/images/coming-soon/smart-posture-trainer.jpg', href: 'https://moodchanger.ai/Wearables.html#smart-posture-trainer' },
];

/* ── Why MoodChanger ────────────────────────────────────────────────── */

export const whyItems = [
  { n: '1', title: 'Sport-first Platform', body: 'Unlike other health platforms: We are built specifically for athletic performance environments. Every feature is grounded in sports science and aligned with real training demands.' },
  { n: '2', title: 'Device-agnostic Ecosystem', body: 'Works with or without wearables. No need to change existing hardware and disrupt workflows.' },
  { n: '3', title: 'Consultancy-backed Insights', body: 'Provide interpretation + guidance. Ensures every insight leads to action and coaches can actually use the data.' },
  { n: '4', title: 'Scalable for Organizations', body: 'Works for small teams, elite academies, professional organizations. Scales with complexity, data volume, organizational growth.' },
];

/* ── Footer ─────────────────────────────────────────────────────────── */

export const footerNav = [
  { href: '#hero', label: 'Home' },
  { href: '#moodchanger', label: 'MoodChanger' },
  { href: '#flobrain', label: 'FloBrain' },
  { href: '#api', label: 'Athletic Performance Intelligence' },
  { href: '#tier-1', label: 'Services' },
  { href: '#caipo', label: 'CAIPO' },
  { href: '#pricing', label: 'Contact' },
];

export const footerProjects = [
  { href: 'https://www.athleticperformanceintelligence.com/', label: 'Athletic Performance Intelligence' },
  { href: 'https://www.caipo.ai/', label: 'CAIPO' },
  { href: 'https://www.youtube.com/@flolabsinnovation', label: 'Connecting the Dots' },
  { href: 'https://cosmosintelligence.org/', label: 'Cosmos Intelligence' },
  { href: 'https://www.flomadtravel.com/', label: 'Flo Travel' },
  { href: 'https://www.flobrain.ai/', label: 'FloBrain' },
  { href: 'https://www.flolabsinnovations.com/', label: 'FloLabs Innovations Group' },
  { href: 'https://www.flolabs.international/', label: 'FloLabs International' },
  { href: 'https://www.flostudios.ai/', label: 'FloStudios' },
  { href: 'https://hephaestus.international/', label: 'Hephaestus International' },
  { href: 'https://www.bootcampuniversity.org/', label: 'Innovation Bootcamp University' },
  { href: 'https://www.moodchanger.ai/', label: 'MoodChanger' },
  { href: 'https://www.legalethicsventuresinstitute.com/', label: 'Legal & Ethics Ventures Institute' },
  { href: 'https://www.robocollective.ai/', label: 'RoboCollective' },
  { href: 'https://www.spaceventuresinstitute.com/', label: 'Space Ventures Institute' },
  { href: 'https://tarrl.org/', label: 'TARRL' },
];

export const footerCompany = [
  { href: 'https://www.flolabsinnovations.com/', label: 'Careers', external: true },
  { href: CONTACT_HREF, label: 'Contact Us' },
  { href: 'https://flolabsrd.notion.site/merch-background', label: 'Merch', external: true },
  { href: CONSULT_HREF, label: 'Initial consultation' },
];
