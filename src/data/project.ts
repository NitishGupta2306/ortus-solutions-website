import { Project } from '@/types'

// TODO: Replace with actual project details from TEAM_DATA_COLLECTION_SHEET.md
// One project per team member (3 total)
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Enterprise Data Pipeline Modernization', // TODO: Update
    client: 'FinTech Solutions Inc.', // TODO: Update (or use "Confidential")
    industry: 'Financial Technology', // TODO: Update
    duration: '3 months', // TODO: Update
    challenge: `The client was processing millions of financial transactions daily using legacy batch
      scripts that ran overnight. Processing frequently failed, taking 8+ hours to complete, and there
      was no visibility into data quality issues until the next business day.`, // TODO: Update
    solution: `We designed and implemented a modern data pipeline using Apache Airflow, AWS S3, and
      Snowflake. The new architecture included real-time monitoring, automated data quality checks,
      and parallel processing capabilities. We also built a custom dashboard for the operations team
      to monitor pipeline health and data quality metrics in real-time.`, // TODO: Update
    technologies: [
      'Python',
      'Apache Airflow',
      'AWS (S3, Lambda, RDS)',
      'Snowflake',
      'PostgreSQL',
      'Docker',
      'Terraform',
    ], // TODO: Update
    results: [
      {
        metric: 'Processing Time',
        value: '75% reduction',
        description: 'From 8 hours to 2 hours',
      },
      {
        metric: 'Data Quality',
        value: '99.9% accuracy',
        description: 'Automated quality checks catch issues immediately',
      },
      {
        metric: 'Cost Savings',
        value: '$50K annually',
        description: 'Reduced infrastructure and manual intervention costs',
      },
    ], // TODO: Update with actual results
    images: [
      '/images/projects/project-1-hero.jpg', // TODO: Add your project images
    ],
    link: '', // Optional: Link to full case study
    github: '', // Optional: If it's open source
    teamMemberIds: ['member-1'], // TODO: Update with actual team member ID(s)
  },
  {
    id: 'project-2',
    title: 'Project Title #2', // TODO: Update
    client: 'Client Name', // TODO: Update
    industry: 'Industry', // TODO: Update
    duration: '4 months', // TODO: Update
    challenge: `[Describe the challenge/problem]`, // TODO: Update
    solution: `[Describe your solution]`, // TODO: Update
    technologies: [
      'Technology 1',
      'Technology 2',
    ], // TODO: Update
    results: [
      {
        metric: 'Metric Name',
        value: 'Value',
        description: 'Description',
      },
    ], // TODO: Update
    images: [
      '/images/projects/project-2-hero.jpg', // TODO: Add your project images
    ],
    teamMemberIds: ['member-2'], // TODO: Update with actual team member ID(s)
  },
  {
    id: 'project-3',
    title: 'Project Title #3', // TODO: Update
    client: 'Client Name', // TODO: Update
    industry: 'Industry', // TODO: Update
    duration: '2 months', // TODO: Update
    challenge: `[Describe the challenge/problem]`, // TODO: Update
    solution: `[Describe your solution]`, // TODO: Update
    technologies: [
      'Technology 1',
      'Technology 2',
    ], // TODO: Update
    results: [
      {
        metric: 'Metric Name',
        value: 'Value',
        description: 'Description',
      },
    ], // TODO: Update
    images: [
      '/images/projects/project-3-hero.jpg', // TODO: Add your project images
    ],
    teamMemberIds: ['member-3'], // TODO: Update with actual team member ID(s)
  },
]

// Helper to get featured/most recent projects
export const featuredProjects = projects.slice(0, 3)

// Backwards compatibility - keep the old export name for now
export const featuredProject = projects[0]
