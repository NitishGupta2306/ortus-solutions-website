import { TeamMember } from '@/types'

// TODO: Replace with actual team member information from TEAM_DATA_COLLECTION_SHEET.md
export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Team Member 1', // TODO: Update
    title: 'Senior Data Engineer', // TODO: Update
    tagline: 'Building scalable data pipelines for enterprise clients', // TODO: Update
    bio: [
      `[Paragraph 1: Your journey - how you got into data engineering]`,
      `[Paragraph 2: Your approach/philosophy - what makes you different]`,
      `[Paragraph 3: Outside work - hobbies, contributions, interests]`,
    ],
    photo: '/images/team/member-1.jpg', // TODO: Add photo
    email: 'member1@ortussolutions.com', // TODO: Update
    expertise: [
      'Data Pipelines',
      'Apache Airflow',
      'AWS',
      'Python',
    ], // TODO: Update with 4-6 key skills
    yearsOfExperience: 7, // TODO: Update
    socialLinks: {
      linkedin: 'https://linkedin.com/in/member1', // TODO: Update
      github: 'https://github.com/member1', // TODO: Update
      twitter: 'https://twitter.com/member1', // Optional
      email: 'member1@ortussolutions.com',
    },
  },
  {
    id: 'member-2',
    name: 'Team Member 2', // TODO: Update
    title: 'Cloud Solutions Architect', // TODO: Update
    tagline: 'Designing cloud-native data infrastructure', // TODO: Update
    bio: [
      `[Paragraph 1: Your journey - how you got into data engineering]`,
      `[Paragraph 2: Your approach/philosophy - what makes you different]`,
      `[Paragraph 3: Outside work - hobbies, contributions, interests]`,
    ],
    photo: '/images/team/member-2.jpg', // TODO: Add photo
    email: 'member2@ortussolutions.com', // TODO: Update
    expertise: [
      'Cloud Architecture',
      'AWS/GCP',
      'Kubernetes',
      'Terraform',
    ], // TODO: Update with 4-6 key skills
    yearsOfExperience: 5, // TODO: Update
    socialLinks: {
      linkedin: 'https://linkedin.com/in/member2', // TODO: Update
      github: 'https://github.com/member2', // TODO: Update
      email: 'member2@ortussolutions.com',
    },
  },
  {
    id: 'member-3',
    name: 'Team Member 3', // TODO: Update
    title: 'Data Infrastructure Engineer', // TODO: Update
    tagline: 'Optimizing data systems for performance and scale', // TODO: Update
    bio: [
      `[Paragraph 1: Your journey - how you got into data engineering]`,
      `[Paragraph 2: Your approach/philosophy - what makes you different]`,
      `[Paragraph 3: Outside work - hobbies, contributions, interests]`,
    ],
    photo: '/images/team/member-3.jpg', // TODO: Add photo
    email: 'member3@ortussolutions.com', // TODO: Update
    expertise: [
      'Database Optimization',
      'Real-time Streaming',
      'Apache Kafka',
      'PostgreSQL',
    ], // TODO: Update with 4-6 key skills
    yearsOfExperience: 6, // TODO: Update
    socialLinks: {
      linkedin: 'https://linkedin.com/in/member3', // TODO: Update
      github: 'https://github.com/member3', // TODO: Update
      email: 'member3@ortussolutions.com',
    },
  },
]

// Helper function to get team member by ID
export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}

// Helper function to get team members by IDs
export function getTeamMembersByIds(ids: string[]): TeamMember[] {
  return teamMembers.filter(member => ids.includes(member.id))
}
