import { Project } from '@/types'

// TODO: Replace with actual project details from TEAM_DATA_COLLECTION_SHEET.md
// One project per team member (3 total)
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'BNI PALMS Analytics Platform',
    client: 'BNI Deira',
    industry: 'Business Networking',
    duration: '6 months',
    challenge: `BNI Deira chapters were managing member engagement data across scattered Excel spreadsheets
      with no centralized reporting system. Leadership teams had no real-time visibility into member
      performance, referral patterns, or networking effectiveness. Report generation was a manual,
      time-consuming process taking hours each month, and data inconsistencies made it difficult to
      track trends or identify high-performing members.`,
    solution: `Architected and deployed a production-grade full-stack analytics platform with React 18/TypeScript
      frontend and Django 4.2/PostgreSQL backend. Built serverless-ready Django REST API with 40+ endpoints,
      JWT authentication, Redis caching, and comprehensive security headers. Developed modular Excel processing
      pipeline using Pandas/openpyxl to parse complex BNI PALMS reports and generate professional multi-sheet
      analytics with conditional formatting. Optimized database performance by 95% using select_related/prefetch_related
      and composite indexes, achieving 10-50x speedup on high-traffic endpoints.`,
    technologies: [
      'React 18',
      'TypeScript',
      'Django 4.2',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Vercel',
      'GitHub Actions',
      'Pandas',
      'TailwindCSS',
    ],
    results: [
      {
        metric: 'Query Performance',
        value: '95% improvement',
        description: 'Reduced from 100+ queries to 5-7 per page load',
      },
      {
        metric: 'Decision Speed',
        value: '80% faster',
        description: 'Real-time dashboards vs weekly manual Excel reports',
      },
      {
        metric: 'Data Processing',
        value: '1,000+ referrals/month',
        description: 'Automated processing of multi-chapter business referrals',
      },
    ],
    images: [
      '/images/projects/project-1-hero.jpg', // TODO: Add BNI PALMS dashboard screenshot
    ],
    link: '', // Optional: Link to live demo or case study
    github: '', // Private client project
    teamMemberIds: ['member-1'],
  },
  {
    id: 'project-2',
    title: 'Future Client Project', // PLACEHOLDER: Case study coming soon
    client: 'Confidential',
    industry: 'Various',
    duration: 'TBD',
    challenge: `This is a placeholder for an upcoming client project. We're actively working with clients
      to deliver exceptional solutions. Check back soon for a detailed case study.`,
    solution: `Full project details and case study will be published here once the project is complete
      and client approval is received.`,
    technologies: [
      'React',
      'Python',
      'PostgreSQL',
      'AWS',
    ],
    results: [
      {
        metric: 'Project Status',
        value: 'Coming Soon',
        description: 'Case study under development',
      },
    ],
    images: [
      '/images/projects/project-2-hero.jpg', // PLACEHOLDER: Add project screenshot
    ],
    teamMemberIds: ['member-1'],
  },
  {
    id: 'project-3',
    title: 'Future Client Project', // PLACEHOLDER: Case study coming soon
    client: 'Confidential',
    industry: 'Various',
    duration: 'TBD',
    challenge: `This is a placeholder for an upcoming client project. Ortus Solutions is growing and
      taking on new challenges. This space will showcase our next success story.`,
    solution: `Detailed case study will be published here once project milestones are reached and
      documented with measurable results.`,
    technologies: [
      'TypeScript',
      'Django',
      'Docker',
      'Kubernetes',
    ],
    results: [
      {
        metric: 'Project Status',
        value: 'Coming Soon',
        description: 'Case study under development',
      },
    ],
    images: [
      '/images/projects/project-3-hero.jpg', // PLACEHOLDER: Add project screenshot
    ],
    teamMemberIds: ['member-1'],
  },
  {
    id: 'project-4',
    title: 'Future Client Project', // PLACEHOLDER: Case study coming soon
    client: 'Confidential',
    industry: 'Various',
    duration: 'TBD',
    challenge: `Placeholder for upcoming project. As Ortus Solutions grows, we'll showcase additional
      client success stories demonstrating our technical expertise and business impact.`,
    solution: `Case study details will be added once project is completed and results are documented
      with client approval.`,
    technologies: [
      'FastAPI',
      'React',
      'AWS',
      'PostgreSQL',
    ],
    results: [
      {
        metric: 'Project Status',
        value: 'Coming Soon',
        description: 'Case study under development',
      },
    ],
    images: [
      '/images/projects/project-4-hero.jpg', // PLACEHOLDER: Add project screenshot
    ],
    link: '',
    github: '',
    teamMemberIds: ['member-1'],
  },
  {
    id: 'project-5',
    title: 'Future Client Project', // PLACEHOLDER: Case study coming soon
    client: 'Confidential',
    industry: 'Various',
    duration: 'TBD',
    challenge: `Placeholder for future client engagement. This space reserved for showcasing our next
      innovative solution and measurable client impact.`,
    solution: `Detailed technical case study will be published here with architecture details, challenges
      overcome, and quantifiable business results.`,
    technologies: [
      'Terraform',
      'Kubernetes',
      'Docker',
      'CI/CD',
    ],
    results: [
      {
        metric: 'Project Status',
        value: 'Coming Soon',
        description: 'Case study under development',
      },
    ],
    images: [
      '/images/projects/project-5-hero.jpg', // PLACEHOLDER: Add project screenshot
    ],
    link: '',
    github: '',
    teamMemberIds: ['member-1'],
  },
  {
    id: 'project-6',
    title: 'Future Client Project', // PLACEHOLDER: Case study coming soon
    client: 'Confidential',
    industry: 'Various',
    duration: 'TBD',
    challenge: `Placeholder for upcoming work. Ortus Solutions is actively building solutions for clients
      across multiple industries. More case studies coming soon.`,
    solution: `Full project breakdown with technical implementation details, architecture decisions, and
      measurable outcomes will be documented here.`,
    technologies: [
      'Python',
      'TypeScript',
      'PostgreSQL',
      'Cloud Infrastructure',
    ],
    results: [
      {
        metric: 'Project Status',
        value: 'Coming Soon',
        description: 'Case study under development',
      },
    ],
    images: [
      '/images/projects/project-6-hero.jpg', // PLACEHOLDER: Add project screenshot
    ],
    link: '',
    github: '',
    teamMemberIds: ['member-1'],
  },
]

// Helper to get featured/most recent projects
export const featuredProjects = projects.slice(0, 6)

// Backwards compatibility - keep the old export name for now
export const featuredProject = projects[0]
