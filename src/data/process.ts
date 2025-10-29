import { Search, Layout, Code2, Rocket } from 'lucide-react'
import { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Discovery & Planning',
    description: `Free 30-minute call where we figure out if we can actually help you (no sales pitch). We'll discuss your current challenges, define success metrics, and outline what's realistic. If we're not the right fit, we'll tell you upfront.`,
    icon: Search,
  },
  {
    id: 'design',
    title: 'Design & Architecture',
    description: `You get a visual architecture diagram showing exactly what we're building, plus a clear timeline and cost breakdown—no surprises later. We pick the right technologies for your needs, not whatever's trendy this month.`,
    icon: Layout,
  },
  {
    id: 'development',
    title: 'Development & Testing',
    description: `Weekly demos in staging—you see progress, not just status updates. We build in iterations and adapt based on your feedback. Rigorous testing ensures things don't break when you hit production. You always have access to review what we've built so far.`,
    icon: Code2,
  },
  {
    id: 'deployment',
    title: 'Deployment & Support',
    description: `We don't just ship and disappear. You get complete documentation and training so your team owns the system. We deploy with minimal disruption, monitor the launch, and stick around for post-launch support. Available for ongoing maintenance when you need it.`,
    icon: Rocket,
  },
]
