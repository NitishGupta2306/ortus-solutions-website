import { Technology } from '@/types'

// TODO: Update this list with your actual technologies
export const technologies: Technology[] = [
  // Languages
  { name: 'Python', category: 'Languages', logo: '/images/tech/python.svg' },
  { name: 'JavaScript', category: 'Languages', logo: '/images/tech/javascript.svg' },
  { name: 'TypeScript', category: 'Languages', logo: '/images/tech/typescript.svg' },
  { name: 'SQL', category: 'Languages', logo: '/images/tech/sql.svg' },
  { name: 'Bash', category: 'Languages', logo: '/images/tech/bash.svg' },

  // Cloud
  { name: 'AWS', category: 'Cloud', logo: '/images/tech/aws.svg' },
  { name: 'Google Cloud', category: 'Cloud', logo: '/images/tech/gcp.svg' },
  { name: 'Azure', category: 'Cloud', logo: '/images/tech/azure.svg' },
  { name: 'DigitalOcean', category: 'Cloud', logo: '/images/tech/digitalocean.svg' },

  // Data Engineering
  { name: 'Apache Airflow', category: 'Data Engineering', logo: '/images/tech/airflow.svg' },
  { name: 'Apache Kafka', category: 'Data Engineering', logo: '/images/tech/kafka.svg' },
  { name: 'Apache Spark', category: 'Data Engineering', logo: '/images/tech/spark.svg' },
  { name: 'dbt', category: 'Data Engineering', logo: '/images/tech/dbt.svg' },
  { name: 'Pandas', category: 'Data Engineering', logo: '/images/tech/pandas.svg' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', logo: '/images/tech/postgresql.svg' },
  { name: 'MySQL', category: 'Databases', logo: '/images/tech/mysql.svg' },
  { name: 'MongoDB', category: 'Databases', logo: '/images/tech/mongodb.svg' },
  { name: 'Redis', category: 'Databases', logo: '/images/tech/redis.svg' },
  { name: 'Snowflake', category: 'Databases', logo: '/images/tech/snowflake.svg' },

  // DevOps
  { name: 'Docker', category: 'DevOps', logo: '/images/tech/docker.svg' },
  { name: 'Kubernetes', category: 'DevOps', logo: '/images/tech/kubernetes.svg' },
  { name: 'Git', category: 'DevOps', logo: '/images/tech/git.svg' },
  { name: 'GitHub Actions', category: 'DevOps', logo: '/images/tech/github-actions.svg' },
  { name: 'Terraform', category: 'DevOps', logo: '/images/tech/terraform.svg' },

  // Web
  { name: 'React', category: 'Web', logo: '/images/tech/react.svg' },
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
