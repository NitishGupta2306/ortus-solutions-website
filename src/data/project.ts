import { Project } from '@/types'

// TODO: Replace this with your actual project details
export const featuredProject: Project = {
  id: 'project-1',
  title: 'Enterprise Data Pipeline Modernization',
  client: 'FinTech Solutions Inc.', // Or use "Confidential" or "Enterprise Healthcare Company"
  industry: 'Financial Technology',
  duration: '3 months',
  challenge: `The client was processing millions of financial transactions daily using legacy batch
    scripts that ran overnight. Processing frequently failed, taking 8+ hours to complete, and there
    was no visibility into data quality issues until the next business day.`,
  solution: `I designed and implemented a modern data pipeline using Apache Airflow, AWS S3, and
    Snowflake. The new architecture included real-time monitoring, automated data quality checks,
    and parallel processing capabilities. I also built a custom dashboard for the operations team
    to monitor pipeline health and data quality metrics in real-time.`,
  technologies: [
    'Python',
    'Apache Airflow',
    'AWS (S3, Lambda, RDS)',
    'Snowflake',
    'PostgreSQL',
    'Docker',
    'Terraform',
  ],
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
    {
      metric: 'Uptime',
      value: '99.9%',
      description: 'Automated monitoring and alerting',
    },
  ],
  images: [
    '/images/project-1-hero.jpg', // TODO: Add your project images
    '/images/project-1-architecture.jpg',
    '/images/project-1-dashboard.jpg',
  ],
  link: 'https://example.com/case-study', // Optional: Link to full case study
  github: '', // Optional: If it's open source
}

// Placeholder for future projects (shown as "Coming Soon")
export const upcomingProjects = [
  {
    id: 'upcoming-1',
    title: 'Project #2',
    status: 'Coming Soon',
  },
  {
    id: 'upcoming-2',
    title: 'Project #3',
    status: 'Coming Soon',
  },
]
