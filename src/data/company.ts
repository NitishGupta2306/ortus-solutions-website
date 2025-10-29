import { CompanyInfo } from '@/types'

export const companyInfo: CompanyInfo = {
  name: 'Ortus Solutions',
  tagline: 'Scalable Systems & Data Automations for Startups and SMEs',
  mission: 'We build production-grade software infrastructure that enables startups and SMEs to scale efficiently, make data-driven decisions, and focus on their core business.',
  values: [
    {
      title: 'No-BS Communication',
      subtitle: 'You always know what\'s happening—budget, blockers, trade-offs',
      points: [
        'Clear updates on progress, blockers, and timelines',
        'No hidden costs—budget transparency from day one',
        'Direct access to your codebase, documentation, and deployment',
        'Not sure? We say so and research the right answer',
        'Can\'t do it? We tell you upfront—your trust matters more than winning a contract',
      ],
      icon: 'MessageSquare',
    },
    {
      title: 'Leave It Better',
      subtitle: 'Code that lasts beyond us',
      points: [
        'Industry-standard code + comprehensive documentation',
        'Clean architecture that scales with your business',
        'Easy to understand and handle for any future engineers',
      ],
      icon: 'Code',
    },
    {
      title: 'Never Stop Learning',
      subtitle: 'Technology evolves, so do we',
      points: [
        'Research backgrounds meet real-world engineering',
        'AI, cloud, new frameworks—we master them',
        'Your project benefits from cutting-edge expertise',
      ],
      icon: 'Zap',
    },
  ],
  founded: '2025',
  description: [
    'Founded by Nitish Gupta, a full-stack engineer who\'s spent 5 years turning startup chaos into scalable systems.',
    'We specialize in the work that doesn\'t scale manually: data pipelines that process thousands of records, automations that run while you sleep.',
    'Infrastructure built to handle your next growth spike. We architect systems that scale with your business, not against it.',
    'Our track record? Projects like the BNI PALMS Analytics Platform—where we turned 16 hours of monthly manual reporting into a 60-minute automated system.',
  ],
  stats: {
    totalExperience: 5, // Founder's years of experience
    projectsCompleted: 3, // Real completed projects (BNI PALMS + previous work)
    industriesServed: 3, // Business Networking, E-commerce, Education
    happyClients: 2, // Current and recent clients
  },
}
