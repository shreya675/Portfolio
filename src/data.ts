// ---------------------------------------------------------------------------
// All site content lives here. Edit this file, not the components.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Shreya Jaiswal',
  initials: 'SJ',
  tagline: 'Software Developer',
  roles: ['full-stack apps', 'real-time systems', 'ML systems that ship', 'things that actually work'],
  location: 'IIT Ropar, Punjab',
  availability: 'Open to SDE roles · 2027 batch',
  intro:
    "I'm a final-year Electrical Engineering student at IIT Ropar. I build full-stack web apps and ML systems that actually get deployed — most recently a PCB inspection service running on Cloud Run and an explainable fraud-detection API. I like the part where a thing finally works end to end.",
  resume: '/Shreya_Jaiswal_Resume.pdf',
  /** Your photo — drop a square-ish JPG/PNG at public/me.jpg (≥ 400×400). Falls back to initials if missing. */
  photo: '/me.jpg',
  email: 'jaiswalshreya246@gmail.com',
  links: {
    github: 'https://github.com/shreya675',
    linkedin: 'https://www.linkedin.com/in/shreya-jaiswal-291591288/',
    leetcode: 'https://leetcode.com/u/shreya246/',
    codeforces: 'https://codeforces.com/profile/Shreya246',
  },
  stats: [
    { label: 'LeetCode solved', value: '400+' },
    { label: 'Projects shipped', value: '5' },
    { label: 'Live demos', value: '3' },
    { label: 'Graduating', value: '2027' },
  ],
}

export const now = [
  { label: 'Now', text: 'Final year of B.Tech EE at IIT Ropar · looking for full-time SDE roles, 2027 batch' },
  { label: 'Recently', text: 'SDE intern at Chitwan — multiplayer game rooms and real-time state' },
  { label: 'Practising', text: 'LeetCode 400+ problems · Codeforces max rating 1160' },
]

export const marquee = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Socket.IO', 'PostgreSQL', 'Prisma', 'Python', 'FastAPI',
  'YOLO11', 'OpenCV', 'XGBoost', 'SHAP', 'scikit-learn', 'Streamlit', 'Docker', 'GitHub Actions', 'Cloud Run', 'C++',
]

export type Project = {
  slug: 'velocity' | 'pcb' | 'fraud' | 'pmu' | 'fittrack'
  title: string
  status: 'Live' | 'Completed' | 'Dept. project'
  period: string
  blurb: string
  points: string[]
  stack: string[]
  live?: string
  code: string
  /** Real screenshot, served from public/. Put files in public/screens/. Falls back to the illustration if missing. */
  image?: string
  featured?: boolean
  /** featured only: put the illustration on the right */
  flip?: boolean
}

export const projects: Project[] = [
  {
    slug: 'pcb',
    image: '/screens/pcb.png',
    title: 'PCB Optical Inspection',
    status: 'Live',
    period: 'Jul – Sep 2026',
    featured: true,
    blurb:
      'Automated optical inspection for PCBs: upload a board image, get annotated defects, a severity-graded PASS / WARNING / FAIL verdict and a PDF report, with inspection history and defect analytics.',
    points: [
      'YOLO11 trained on DeepPCB — 95.8% precision, 94.0% recall, 97.8% mAP@0.5 on the 500-image held-out test set.',
      'Pipeline: CLAHE → ORB + RANSAC registration against a golden reference → detection → reference comparison → rule-based severity.',
      'FastAPI + SQLAlchemy backend, React/TypeScript dashboard, Docker + GitHub Actions CI, deployed on Google Cloud Run.',
    ],
    stack: ['Python', 'YOLO11', 'OpenCV', 'FastAPI', 'SQLAlchemy', 'React', 'TypeScript', 'Docker', 'Cloud Run'],
    live: 'https://pcb-aoi-723755393271.us-central1.run.app',
    code: 'https://github.com/shreya675/PCB-Detector',
  },
  {
    slug: 'velocity',
    image: '/screens/velocity.png',
    title: 'Velocity Keys',
    status: 'Live',
    period: 'May – Aug 2026',
    featured: true,
    flip: true,
    blurb:
      'A typing-practice platform with real-time multiplayer races. Practise solo, see which friends are online, challenge them directly, and race live. WPM history is saved to your profile.',
    points: [
      'Race state (countdown, progress, finish order) synced over Socket.IO; presence and challenges ride the same connection.',
      'JWT + bcrypt auth; profiles and race results in PostgreSQL through Prisma.',
      'First project where I had to handle a player disconnecting mid-race — most of the tricky bugs lived there.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Node', 'Socket.IO', 'PostgreSQL', 'Prisma'],
    live: 'https://velocity-keys-production.up.railway.app/',
    code: 'https://github.com/shreya675/Velocity-Keys',
  },
  {
    slug: 'fraud',
    image: '/screens/fraud.png',
    title: 'FraudGuard',
    status: 'Completed',
    period: 'May – Aug 2026',
    featured: true,
    blurb:
      'Explainable, end-to-end fraud detection for PaySim mobile-money transactions (6.36M rows): a time-aware, leakage-safe training pipeline, model comparison, threshold tuning, SHAP explanations, a FastAPI scoring service and a Streamlit dashboard.',
    points: [
      'Chronological train / validation / test split — evaluated on a later period with a ~4× higher fraud rate, no leakage from the future.',
      '26 engineered features; compared Logistic Regression, Random Forest and XGBoost on validation PR-AUC, deployed XGBoost at a tuned 0.98 threshold.',
      'TreeSHAP reason codes on every prediction; FastAPI single/batch scoring, Streamlit dashboard, Docker Compose, 55 pytest tests, CI. PaySim is synthetic, so the near-perfect numbers say more about the data than the model.',
    ],
    stack: ['Python', 'XGBoost', 'scikit-learn', 'SHAP', 'Pandas', 'FastAPI', 'Streamlit', 'Docker', 'GitHub Actions'],
    code: 'https://github.com/shreya675/Fraud-Detection',
  },
  {
    slug: 'pmu',
    image: '/screens/pmu.png',
    title: 'PMU Desktop Simulator',
    status: 'Dept. project',
    period: 'Jan – May 2026',
    blurb:
      'A desktop app that simulates a Phasor Measurement Unit streaming to a Phasor Data Concentrator over TCP/IP, following the IEEE C37.118 frame format. Built for the EE department.',
    points: [
      'Binary frame parsing and the TCP stream between PMU and PDC.',
      'Packaged as an Electron app so it runs as a normal desktop program.',
      'The most "EE meets software" thing I have built — reading the standard was half the work.',
    ],
    stack: ['Electron', 'Node.js', 'TCP/IP', 'Binary protocols'],
    code: 'https://github.com/shreya675/pmu-desktop-app',
  },
  {
    slug: 'fittrack',
    image: '/screens/fittrack.png',
    title: 'FitTrack',
    status: 'Live',
    period: 'Oct 2025 – Jan 2026',
    blurb:
      'A workout tracker with progress charts and exercise recommendations. Log what you did, see how you are trending, and get suggestions based on your history.',
    points: [
      'Content-based recommender: cosine similarity over 6+ exercise features across 50+ exercises, top 3 returned.',
      'Firebase Auth + Cloud Firestore; React + Vite front end.',
      'My first real React project — I would structure the state very differently today.',
    ],
    stack: ['React', 'Vite', 'Firebase', 'Firestore'],
    live: 'https://fit-track-ten-liart.vercel.app/',
    code: 'https://github.com/shreya675/Fit-Track',
  },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    org: 'Chitwan',
    period: 'May – Jul 2026',
    mode: 'Remote',
    summary: 'Worked on the multiplayer side of a browser-based games platform — six games, up to six players per room.',
    points: [
      'Room creation and shareable-link joining, player interactions, turn validation and real-time game-state workflows.',
      'REST API integration and client-side JavaScript for player, room, match and leaderboard data, with input validation and API error handling.',
    ],
    stack: ['JavaScript', 'REST APIs', 'Real-time state'],
  },
  {
    role: 'WiSH 2025 Mentee',
    org: 'Texas Instruments',
    period: 'May – Jun 2025',
    mode: 'On-site',
    summary: 'Women in Semiconductor & Hardware mentorship. Designed and tested analog and embedded prototypes — circuit simulation, sensor interfacing and firmware.',
    points: [],
    stack: ['Code Composer Studio', 'QUCS', 'MSPM0', 'ASLK kit', 'ESP32'],
  },
]

export const education = {
  degree: 'B.Tech, Electrical Engineering',
  school: 'Indian Institute of Technology Ropar',
  period: '2023 – 2027',
  coursework: ['Data Structures', 'Operating Systems', 'DBMS', 'Computer Networks', 'Linear Algebra', 'Probability', 'Calculus', 'Differential Equations', 'Signals & Systems', 'Digital Circuits', 'Control Engineering'],
}

export const competitive = {
  leetcode: { label: 'LeetCode', value: '400+ problems', url: 'https://leetcode.com/u/shreya246/' },
  codeforces: { label: 'Codeforces', value: 'max rating 1160', handle: 'Shreya246', url: 'https://codeforces.com/profile/Shreya246' },
}

export const leadership = [
  { role: 'Coordinator, Aeromodelling Club', org: 'IIT Ropar', period: 'Apr 2024 – May 2025' },
  { role: 'Co-Head, Event Management — Advitiya ’25', org: 'IIT Ropar tech fest', period: 'Dec 2024 – Mar 2025' },
]

export const skills = [
  { group: 'Languages', items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'C'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Electron'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Socket.IO', 'REST'] },
  { group: 'Data', items: ['PostgreSQL', 'Prisma', 'SQLAlchemy', 'MongoDB', 'Firebase'] },
  { group: 'ML / Vision', items: ['PyTorch', 'YOLO11', 'OpenCV', 'XGBoost', 'scikit-learn', 'SHAP', 'NumPy', 'Pandas'] },
  { group: 'Tools & infra', items: ['Git', 'Docker', 'GitHub Actions', 'Cloud Run', 'Streamlit', 'Linux'] },
]
