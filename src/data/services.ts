import { Database, Workflow, Zap, Code } from 'lucide-react'
import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'data-pipelines',
    title: 'Data Pipeline Development',
    description: `We build scalable, reliable data pipelines from scratch using modern tools like
      Apache Airflow, AWS, and Python. Whether you need real-time streaming or batch processing,
      we design architectures that handle millions of records while maintaining data quality and
      comprehensive monitoring.`,
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
    description: `Automate repetitive tasks and business processes to save time and reduce errors.
      We create custom automation solutions that integrate with your existing tools, from simple
      scripts to complex orchestrated workflows, freeing your team to focus on high-value work.`,
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
    description: `Connect disparate systems and data sources seamlessly. We specialize in building
      robust integrations between databases, APIs, and third-party services, ensuring your data
      flows smoothly across your entire technology stack with proper error handling and monitoring.`,
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
    description: `Every business has unique needs. We develop tailored software solutions that
      address your specific challenges, from custom dashboards and internal tools to specialized
      data processing applications. Full-stack capabilities ensure end-to-end solution delivery.`,
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
