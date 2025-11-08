import { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
  features: string[]
}

export interface Project {
  id: string
  title: string
  client: string
  industry: string
  duration?: string
  challenge: string
  solution: string
  technologies: string[]
  results: ProjectResult[]
  images: string[]
  link?: string
  github?: string
  teamMemberIds: string[] // IDs of team members who worked on this
}

export interface ProjectResult {
  metric: string
  value: string
  description?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  image?: string
  companyLogo?: string
  projectId?: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface Technology {
  name: string
  category: TechnologyCategory
  logo: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export type TechnologyCategory =
  | 'Languages'
  | 'Cloud'
  | 'Data Engineering'
  | 'Databases'
  | 'DevOps'
  | 'Web'

export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  bio: string[]
  email: string
  phone?: string
  location?: string
  yearsOfExperience: number
  photo: string
  resume?: string
}

export interface SocialLinks {
  linkedin?: string
  github?: string
  twitter?: string
  medium?: string
  email?: string
  portfolio?: string
}

export interface TeamMember {
  id: string
  name: string
  title: string
  tagline: string
  bio: string[]
  photo: string
  email: string
  expertise: string[] // e.g., ["Data Pipelines", "Cloud Architecture", "Python"]
  yearsOfExperience: number
  socialLinks: SocialLinks
}

export interface CoreValue {
  title: string
  subtitle: string
  points: string[] // Short bullet points instead of paragraph
  icon: string // Lucide icon name as string
}

export interface CompanyInfo {
  name: string
  tagline: string
  mission: string
  values: CoreValue[]
  founded: string // e.g., "June 2025"
  description: string[] // Array of paragraphs
  stats: CompanyStats
}

export interface CompanyStats {
  totalExperience: number // Combined years
  projectsCompleted: number
  industriesServed: number
  happyClients: number
}
