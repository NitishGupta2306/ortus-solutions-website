import { Technology } from '@/types'

// TODO: Update this list with your actual technologies
export const technologies: Technology[] = [
  // Languages
  { name: 'Python', category: 'Languages', logo: '/images/tech/python.svg', level: 'expert' },
  { name: 'JavaScript', category: 'Languages', logo: '/images/tech/javascript.svg', level: 'expert' },
  { name: 'TypeScript', category: 'Languages', logo: '/images/tech/typescript.svg', level: 'advanced' },
  { name: 'SQL', category: 'Languages', logo: '/images/tech/sql.svg', level: 'expert' },
  { name: 'Bash', category: 'Languages', logo: '/images/tech/bash.svg', level: 'advanced' },

  // Cloud
  { name: 'AWS', category: 'Cloud', logo: '/images/tech/aws.svg', level: 'expert' },
  { name: 'Google Cloud', category: 'Cloud', logo: '/images/tech/gcp.svg', level: 'advanced' },
  { name: 'Azure', category: 'Cloud', logo: '/images/tech/azure.svg', level: 'intermediate' },
  { name: 'DigitalOcean', category: 'Cloud', logo: '/images/tech/digitalocean.svg', level: 'advanced' },

  // Data Engineering
  { name: 'Apache Airflow', category: 'Data Engineering', logo: '/images/tech/airflow.svg', level: 'expert' },
  { name: 'Apache Kafka', category: 'Data Engineering', logo: '/images/tech/kafka.svg', level: 'advanced' },
  { name: 'Apache Spark', category: 'Data Engineering', logo: '/images/tech/spark.svg', level: 'advanced' },
  { name: 'dbt', category: 'Data Engineering', logo: '/images/tech/dbt.svg', level: 'expert' },
  { name: 'Pandas', category: 'Data Engineering', logo: '/images/tech/pandas.svg', level: 'expert' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', logo: '/images/tech/postgresql.svg', level: 'expert' },
  { name: 'MySQL', category: 'Databases', logo: '/images/tech/mysql.svg', level: 'advanced' },
  { name: 'MongoDB', category: 'Databases', logo: '/images/tech/mongodb.svg', level: 'advanced' },
  { name: 'Redis', category: 'Databases', logo: '/images/tech/redis.svg', level: 'expert' },
  { name: 'Snowflake', category: 'Databases', logo: '/images/tech/snowflake.svg', level: 'advanced' },

  // DevOps
  { name: 'Docker', category: 'DevOps', logo: '/images/tech/docker.svg', level: 'expert' },
  { name: 'Kubernetes', category: 'DevOps', logo: '/images/tech/kubernetes.svg', level: 'advanced' },
  { name: 'Git', category: 'DevOps', logo: '/images/tech/git.svg', level: 'expert' },
  { name: 'GitHub Actions', category: 'DevOps', logo: '/images/tech/github-actions.svg', level: 'expert' },
  { name: 'Terraform', category: 'DevOps', logo: '/images/tech/terraform.svg', level: 'advanced' },

  // Web
  { name: 'React', category: 'Web', logo: '/images/tech/react.svg', level: 'expert' },
  { name: 'Node.js', category: 'Web', logo: '/images/tech/nodejs.svg' },
  { name: 'FastAPI', category: 'Web', logo: '/images/tech/fastapi.svg' },
  { name: 'Flask', category: 'Web', logo: '/images/tech/flask.svg' },
]

export const techCategories = [
  'Languages',
  'Cloud',
  'Data Engineering',
  'Databases',
  'DevOps',
  'Web',
] as const
