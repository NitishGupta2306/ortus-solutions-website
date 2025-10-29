import { Database, Workflow, Zap, Code } from 'lucide-react'
import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'data-pipelines',
    title: 'Data Pipeline Development',
    description: `Stop manually moving data between systems. We build automated pipelines that process millions of records monthly.`,
    icon: Database,
    features: [
      'ETL/ELT pipeline design and implementation',
      'Real-time and batch processing solutions',
      'Data quality monitoring and alerting',
      'Cloud-native architectures (AWS, GCP, Azure)',
      'Scalable to millions of records daily',
    ],
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: `If you're doing it more than twice, we can automate it. Eliminate repetitive tasks and free your team to focus on growth.`,
    icon: Workflow,
    features: [
      'Business process automation',
      'Custom scripting and scheduling',
      'Integration with existing systems',
      'Automated reporting and notifications',
      'Workflow orchestration and monitoring',
    ],
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    description: `Connect your systems so data flows automatically. No more manual syncing or version conflicts between platforms.`,
    icon: Zap,
    features: [
      'API development and integration',
      'Database synchronization',
      'Third-party service integration',
      'Data transformation and mapping',
      'Real-time and scheduled syncs',
    ],
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    description: `Off-the-shelf tools don't fit your workflow. We build custom applications tailored to your exact business needs.`,
    icon: Code,
    features: [
      'Custom application development',
      'Internal tools and dashboards',
      'API and backend development',
      'Database design and optimization',
      'Technical consulting and architecture',
    ],
  },
]
