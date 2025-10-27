import { CompanyInfo } from '@/types'

// TODO: Update with actual company information
export const companyInfo: CompanyInfo = {
  name: 'Ortus Solutions',
  tagline: 'Expert Data Engineering & Cloud Solutions',
  mission: 'We build data infrastructure that scales, enabling businesses to make data-driven decisions with confidence.', // TODO: Update
  values: [
    'Technical Excellence',
    'Clear Communication',
    'Client Success',
    'Continuous Learning',
    'Ethical Data Practices',
  ], // TODO: Update with 3-5 core values
  founded: 'June 2025',
  description: [
    `Ortus Solutions was founded in June 2025 by three data engineers who saw a gap in the market
    for boutique consulting that combines deep technical expertise with genuine partnership. We're not
    a massive agency with junior developers - we're three senior engineers who work directly with clients
    to solve their most challenging data problems.`,

    `What sets us apart is our commitment to building systems that last. We don't just deliver code and
    disappear. We create well-documented, maintainable infrastructure that your team can understand and
    evolve long after our engagement ends. Our combined 18+ years of experience means we've seen what works
    at scale and what doesn't.`,

    `We specialize in data pipelines, cloud architecture, and automation for companies that are serious
    about their data infrastructure. Whether you're processing millions of records daily or building your
    first production pipeline, we bring enterprise-grade expertise to every project.`,
  ], // TODO: Update with 2-3 paragraphs about the company
  stats: {
    totalExperience: 18, // TODO: Update with combined years from all team members
    projectsCompleted: 20, // TODO: Update with total project count
    industriesServed: 5, // TODO: Update (e.g., FinTech, Healthcare, E-commerce, SaaS, etc.)
    happyClients: 15, // TODO: Update with total unique clients
  },
}
