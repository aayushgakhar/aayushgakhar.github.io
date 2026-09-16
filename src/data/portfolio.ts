import retailStore from '../assets/retail_store.png'
import simpleRisc from '../assets/simple_risc.png'
import willHero from '../assets/will_hero.png'
import type {
  Achievement,
  Education,
  Experience,
  Project,
  SkillGroup,
  Social,
} from '../types'

export const profile = {
  name: 'Aayush Gakhar',
  role: 'Backend Software Engineer',
  location: 'New Delhi, India',
  email: 'aayushgakhar13@gmail.com',
  resumeUrl:
    'https://drive.google.com/drive/folders/13HcrwHrLQaYD21GnqePtUKqAcj-pgwQK?usp=sharing',
  tagline:
    'I build scalable, resilient backend systems — high-throughput services, distributed infrastructure and the tooling that keeps them running.',
  summary: [
    'Backend engineer with a focus on distributed systems and platform reliability. At WinZO I work across a suite of 30+ microservices, where I have shipped game logic serving 1M+ gameplays a day, a runtime-configurable job scheduler, a multi-cluster Redis access layer, and a distributed configuration cache.',
    'I care about the unglamorous parts: cutting cascading failures, removing redeploys from infra changes, and making systems observable. I like turning fragile, manual workflows into boring, automated ones.',
  ],
  facts: [
    { label: 'Currently', value: 'SDE, Backend @ WinZO' },
    { label: 'Focus', value: 'Distributed systems' },
    { label: 'Stack', value: 'Node.js · TypeScript' },
    { label: 'Based in', value: 'New Delhi, India' },
  ],
}

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/aayushgakhar', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aayush-gakhar/',
    icon: 'linkedin',
  },
  { label: 'Email', href: 'mailto:aayushgakhar13@gmail.com', icon: 'mail' },
  { label: 'Telegram', href: 'http://t.me/aayushgakhar', icon: 'telegram' },
  { label: 'Resume', href: profile.resumeUrl, icon: 'file' },
]

export const githubActivity = {
  username: 'aayushgakhar-winzo',
  profileUrl: 'https://github.com/aayushgakhar-winzo',
  apiUrl:
    'https://github-contributions-api.jogruber.de/v4/aayushgakhar-winzo?y=last',
}

export const experience: Experience[] = [
  {
    company: 'WinZO Games',
    role: 'Software Engineer, Backend',
    period: 'Jun 2024 — Present',
    location: 'New Delhi',
    summary:
      'Core backend team member scaling a real-money gaming platform through global expansion.',
    points: [
      'Worked within a 7-member core backend team to improve stability, resilience and scalability — playing a key role in scaling the platform from 150M to 250M users and expanding into the US and Germany.',
      'Designed and shipped end-to-end backend game logic for top-earning multiplayer titles (Bingo and Ludo), handling 1M+ gameplays/day and driving significant revenue growth and a 25% lift in engagement.',
      'Built a runtime-configurable scheduler with a real-time monitoring dashboard, reducing cron job deployment time from 1 hour to 5 minutes and enabling zero-downtime changes across 400+ scheduled jobs.',
      'Implemented a circuit-breaker library to handle downstream API failures, reducing cascading failures by 70% and lifting uptime from 98.5% to 99.8%.',
      'Built a distributed cache on S3, Redis and Kafka with real-time key-level updates, keeping configuration consistent across 30+ microservices with zero-downtime changes.',
      'Architected a resilient multi-cluster Redis access layer behind a "client resolver" abstraction, decoupling services from hardcoded hosts and enabling zero-downtime cluster switches at runtime.',
      'Developed a packet security framework (AES encryption + hash validation) to protect server-client communication, reducing cheating incidents by 60% across 10M+ daily transactions.',
      'Helped revamp the game architecture, reducing new game integration time from 2 months to 2 weeks.',
      'Built in-game voice and chat from scratch with the Agora SDK, reaching 80%+ adoption within 2 weeks and increasing average session time by 15%.',
    ],
    tech: [
      'Node.js',
      'TypeScript',
      'Express',
      'WebSocket',
      'MongoDB',
      'Kafka',
      'Redis',
      'Docker',
      'AWS',
    ],
  },
  {
    company: 'Natwest',
    role: 'Software Development Intern',
    period: 'May 2023 — Jul 2023',
    location: 'Gurugram, HR',
    summary: 'Database reliability and automation for core banking systems.',
    points: [
      'Automated PostgreSQL database backups using Java, creating timestamped backups for 12 production databases daily — reducing manual effort by 15 hours/week and improving disaster-recovery compliance.',
    ],
    tech: ['Java', 'PostgreSQL'],
  },
  {
    company: 'Space Systems Laboratory',
    role: 'Research Intern',
    period: 'Jan 2023 — May 2023',
    location: 'New Delhi',
    summary: 'Scientific visualization for orbital mechanics research.',
    points: [
      'Developed software for visualizing space-object orbits and their uncertainty regions using Node.js and Cesium.',
    ],
    tech: ['Node.js', 'Cesium'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript/typescript-original' },
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'Python', icon: 'python/python-original' },
      { name: 'Java', icon: 'java/java-original' },
      { name: 'C', icon: 'c/c-original' },
    ],
  },
  {
    category: 'Backend & Infra',
    items: [
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Express', icon: 'express/express-original' },
      { name: 'WebSocket', icon: 'socketio/socketio-original' },
      { name: 'Docker', icon: 'docker/docker-original' },
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark' },
      { name: 'Linux', icon: 'linux/linux-original' },
    ],
  },
  {
    category: 'Data & Messaging',
    items: [
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
      { name: 'Redis', icon: 'redis/redis-original' },
      { name: 'Kafka', icon: 'apachekafka/apachekafka-original' },
      { name: 'Amazon S3' },
    ],
  },
  {
    category: 'Frontend & Tooling',
    items: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Svelte', icon: 'svelte/svelte-original' },
      { name: 'HTML/CSS', icon: 'html5/html5-original' },
      { name: 'Git', icon: 'git/git-original' },
      { name: 'Figma', icon: 'figma/figma-original' },
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Retail Store',
    description:
      'A retail store management system covering inventory, billing and reporting, built on MySQL with a Python/Tkinter desktop client.',
    tags: ['Python', 'MySQL', 'Tkinter'],
    image: retailStore,
    link: 'https://github.com/aayushgakhar/retail_store',
  },
  {
    name: 'Will Hero',
    description:
      'A 2D RPG game in Java with a JavaFX frontend, built around OOP design and event-driven programming in a team of two.',
    tags: ['Java', 'JavaFX', 'OOP'],
    image: willHero,
    link: 'https://github.com/aayushgakhar/will-hero',
  },
  {
    name: 'Simple RISC',
    description:
      'An assembler and simulator for a simple RISC instruction set, modeling pipelined execution and register/memory state in Java.',
    tags: ['Java', 'Computer Architecture', 'Simulator'],
    image: simpleRisc,
    link: 'https://github.com/aayushgakhar/Simple-risc-assembler-and-simulator',
  },
]

export const achievements: Achievement[] = [
  {
    label: 'Codeforces',
    value: '1423',
    detail: 'Max rating — Specialist',
  },
  {
    label: 'Codeforces Round 798',
    value: '1017',
    detail: 'Global rank, Div 2 (2022)',
  },
  {
    label: 'Google Kickstart D',
    value: '565',
    detail: 'Global rank (2022)',
  },
  {
    label: 'JEE Mains 2020',
    value: 'AIR 2812',
    detail: 'JEE Advanced — AIR 11,000',
  },
]

export const education: Education[] = [
  {
    school: 'Indraprastha Institute of Information Technology, Delhi',
    degree: 'B.Tech, Computer Science and Engineering',
    period: 'Dec 2020 — May 2024',
    location: 'New Delhi',
    score: 'CGPA 8.68',
  },
  {
    school: 'Sant Gyaneshwar Model School, Alipur',
    degree: 'CBSE, Class XII',
    period: '2018 — 2020',
    location: 'New Delhi',
    score: '91.6%',
  },
]