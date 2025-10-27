import { Search, Layout, Code2, Rocket } from 'lucide-react'
import { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Discovery & Planning',
    description: `I start by understanding your business goals and technical requirements. We'll
      discuss your current data challenges, define success metrics, and outline the project scope.
      This initial consultation is free and helps us determine if we're a good fit.`,
    icon: Search,
  },
  {
    id: 'design',
    title: 'Design & Architecture',
    description: `I design a scalable solution tailored to your needs, selecting the right
      technologies and defining clear milestones. You'll get a detailed architecture diagram,
      technical specification, and transparent timeline with cost estimates.`,
    icon: Layout,
  },
  {
    id: 'development',
    title: 'Development & Testing',
    description: `Using agile methodology, I build your solution in iterations, keeping you updated
      with regular progress reports. Rigorous testing ensures reliability and performance at scale.
      You'll have access to staging environments to review progress.`,
    icon: Code2,
  },
  {
    id: 'deployment',
    title: 'Deployment & Support',
    description: `I deploy to production with minimal disruption, provide complete documentation,
      and offer training to your team. Post-launch support ensures smooth operation, and I'm
      available for ongoing maintenance and enhancements as needed.`,
    icon: Rocket,
  },
]
