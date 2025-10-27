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
}
