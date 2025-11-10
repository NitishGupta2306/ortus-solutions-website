import { Project } from '@/types'

// TODO: Replace with actual project details from TEAM_DATA_COLLECTION_SHEET.md
// One project per team member (3 total)
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'BNI Analysis Platform',
    client: 'BNI Deira - Dubai Regional Network',
    industry: 'Business Networking & Analytics',
    duration: '6 months',
    challenge: `Nine BNI chapters across Dubai region (Continental, Elevate, Energy, Excelerate, Givers, Gladiators,
      Legends, Synergy, United) were managing 326+ members' engagement data through scattered Excel spreadsheets
      with zero centralized visibility. Regional executives had no way to track cross-chapter performance, identify
      top performers, or generate comparative analytics. Chapter leaders spent hours manually processing PALMS slip
      audit reports each month, with no ability to analyze referral networks, one-to-one meetings, or TYFCB (Thank
      You For Closed Business) patterns. Data inconsistencies and manual processes made it impossible to identify
      growth opportunities or track member engagement trends over time.`,
    solution: `Built a production-grade full-stack analytics platform using Next.js 14 with TypeScript, combining
      server-side rendering for optimal performance with client-side interactivity. Implemented a monolithic
      architecture with Next.js API routes (29+ endpoints) handling all business logic, JWT authentication with
      role-based access control (Executive vs Chapter users), and Prisma ORM with PostgreSQL for type-safe database
      operations. Developed sophisticated Excel processing pipeline using ExcelJS to parse complex PALMS reports
      and auto-generate multi-sheet analytics with referral matrices, one-to-one engagement tracking, and TYFCB
      calculations. Implemented smart member name normalization to handle variations in naming conventions,
      pre-computed matrix storage in JSONB for instant dashboard loads, and comprehensive caching with Vercel KV
      (Redis) for repeated queries. Deployed on Vercel with Blob storage for file uploads and automated database
      migrations via Prisma.`,
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Prisma ORM',
      'PostgreSQL',
      'Vercel',
      'Vercel KV (Redis)',
      'Vercel Blob',
      'ExcelJS',
      'Zustand',
      'TailwindCSS',
      'Framer Motion',
      'JWT Auth',
    ],
    results: [
      {
        metric: 'Regional Coverage',
        value: '9 chapters, 326 members',
        description: 'Unified platform managing entire Dubai BNI regional network',
      },
      {
        metric: 'Report Generation',
        value: '95% time reduction',
        description: 'From hours of manual Excel work to instant automated reports',
      },
      {
        metric: 'Data Processing',
        value: '1,000+ transactions/month',
        description: 'Automated referral, one-to-one, and TYFCB tracking with analytics',
      },
      {
        metric: 'Executive Visibility',
        value: 'Real-time dashboards',
        description: 'Cross-chapter performance tracking and top performer identification',
      },
    ],
    images: [
      '/images/projects/bni-executive-dashboard.png',
      '/images/projects/bni-chapter-dashboard.png',
    ],
    link: 'https://bni-analysis-deira-dubai.vercel.app',
    github: '', // Private client project
    teamMemberIds: ['member-1'],
  },
]

// Helper to get featured/most recent projects
export const featuredProjects = projects.slice(0, 6)

// Backwards compatibility - keep the old export name for now
export const featuredProject = projects[0]
