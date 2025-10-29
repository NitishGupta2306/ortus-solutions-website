import { TeamMember } from '@/types'

// TODO: Replace with actual team member information from TEAM_DATA_COLLECTION_SHEET.md
export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Nitish Gupta',
    title: 'Founding Engineer',
    tagline: 'Build scalable systems and data automations for startups and SMEs',
    bio: [
      `At 19, I launched my first iOS app and watched it scale to over 1,000 users within four weeks—sparking my passion for building products that people actually use. My journey spans full-stack development, DevOps engineering, and data infrastructure, with experience from early-stage startups to enterprise systems.`,
      `What sets me apart is my ability to balance technical precision with creative problem-solving. I believe great engineering should be both powerful and enjoyable—architecting scalable solutions while maintaining code quality and developer experience. I thrive in fast-moving environments where technical decisions directly impact business outcomes.`,
      `My expertise spans the full development lifecycle: Python backends with Django/FastAPI, React frontends, PostgreSQL databases, and modern DevOps practices with Docker and Kubernetes. I'm particularly drawn to early-stage companies where technical decisions shape the entire product trajectory. I also leverage AI-assisted development tools to accelerate debugging and optimize workflows.`,
    ],
    photo: '/images/team/member-1.jpg', // TODO: Add your professional headshot
    email: 'nitish@ortus-solutions.com',
    expertise: [
      'Python',
      'React',
      'TypeScript',
      'PostgreSQL',
      'AWS',
      'Docker',
    ],
    yearsOfExperience: 5,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/nitish2306/',
      github: 'https://github.com/NitishGupta2306',
      email: 'nitish@ortus-solutions.com',
    },
  },
  {
    id: 'member-2',
    name: 'Laila Dodhy',
    title: 'Published UI/UX Researcher and Software Product Designer',
    tagline: 'Creating accessible and impactful user experiences through research-driven design',
    bio: [
      `I discovered my passion for UX engineering through the intersection of music and technology. My award-winning capstone project at Purdue University, Gaana Mangwao, is an AI-powered tool that makes linguistic content accessible through automated transcription and transliteration—merging my love for both UX research and music. This work earned me the Top UX Thesis Award and shaped my approach to building inclusive digital experiences.`,
      `I believe in research-driven design that centers accessibility and user needs. My work spans diverse domains—from agriculture and biotechnology to disability justice and healthcare. At Purdue's Coliberation Lab, I co-authored research on photosensitivity presented at ACM ASSETS 2024, developed eye-tracking games for paraplegics, and designed virtual exhibitions on assistive technologies. I approach every project with empathy, bringing together cross-functional teams to create solutions that truly serve users.`,
      `When I'm not conducting user research or designing product experiences, I channel my creativity into 2D/3D audiovisual animations, VR exhibitions, and computer vision projects (shared on Instagram @somewhatmajnoon). I also write and curate music for Pakistani music magazines, with a focus on music infographics and community fundraising initiatives. My diverse interests fuel my ability to bring fresh perspectives to complex design challenges.`,
    ],
    photo: '/images/team/laila.jpeg',
    email: 'laila@ortus-solutions.com',
    expertise: [
      'UX Research',
      'UI/UX Design',
      'Accessibility',
      'User Testing',
      'Figma',
      'React',
      'Python',
      'Eye Tracking',
    ],
    yearsOfExperience: 4,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/laila-dodhy/',
      email: 'laila@ortus-solutions.com',
      portfolio: 'https://lailadodhy.framer.website/',
    },
  },
  {
    id: 'member-3',
    name: 'Future Team Member', // PLACEHOLDER: Position open for Data Infrastructure Engineer
    title: 'Data Infrastructure Engineer',
    tagline: 'Optimizing data systems for performance and scale',
    bio: [
      `This position is currently open. We're looking for a data infrastructure specialist to join our team.`,
      `Ideal candidate will have experience with database optimization, real-time streaming, and distributed systems.`,
      `Interested in building scalable data infrastructure? Get in touch!`,
    ],
    photo: '/images/team/member-3.jpg', // PLACEHOLDER: Add team member photo when hired
    email: 'careers@ortus-solutions.com',
    expertise: [
      'Database Optimization',
      'Real-time Streaming',
      'Apache Kafka',
      'PostgreSQL',
    ],
    yearsOfExperience: 6,
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ortus-solutions',
      github: 'https://github.com/ortus-solutions',
      email: 'careers@ortus-solutions.com',
    },
  },
  {
    id: 'member-4',
    name: 'Future Team Member', // PLACEHOLDER: Position open for Machine Learning Engineer
    title: 'Machine Learning Engineer',
    tagline: 'Building intelligent data systems with ML/AI',
    bio: [
      `This position is currently open. We're seeking an ML engineer to help build intelligent solutions.`,
      `Looking for expertise in Python, TensorFlow, MLOps, and production ML systems.`,
      `Want to work on cutting-edge ML projects? Reach out!`,
    ],
    photo: '/images/team/member-4.jpg', // PLACEHOLDER: Add team member photo when hired
    email: 'careers@ortus-solutions.com',
    expertise: [
      'Machine Learning',
      'Python',
      'TensorFlow',
      'MLOps',
      'Data Science',
    ],
    yearsOfExperience: 5,
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ortus-solutions',
      github: 'https://github.com/ortus-solutions',
      email: 'careers@ortus-solutions.com',
    },
  },
  {
    id: 'member-5',
    name: 'Future Team Member', // PLACEHOLDER: Position open for DevOps Engineer
    title: 'DevOps & Automation Engineer',
    tagline: 'Streamlining deployments and infrastructure automation',
    bio: [
      `This position is currently open. We're hiring a DevOps engineer to scale our infrastructure.`,
      `Seeking experience with CI/CD, Kubernetes, Docker, and infrastructure as code.`,
      `Passionate about automation and infrastructure? Let's talk!`,
    ],
    photo: '/images/team/member-5.jpg', // PLACEHOLDER: Add team member photo when hired
    email: 'careers@ortus-solutions.com',
    expertise: [
      'CI/CD',
      'Kubernetes',
      'Docker',
      'Terraform',
      'Jenkins',
      'GitOps',
    ],
    yearsOfExperience: 4,
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ortus-solutions',
      github: 'https://github.com/ortus-solutions',
      email: 'careers@ortus-solutions.com',
    },
  },
  {
    id: 'member-6',
    name: 'Future Team Member', // PLACEHOLDER: Position open for Data Analytics Engineer
    title: 'Data Analytics Engineer',
    tagline: 'Transforming data into actionable business insights',
    bio: [
      `This position is currently open. We need a data analytics expert to help our clients make data-driven decisions.`,
      `Looking for proficiency in SQL, BI tools (Tableau/Power BI), and data modeling.`,
      `Love turning data into insights? We'd love to hear from you!`,
    ],
    photo: '/images/team/member-6.jpg', // PLACEHOLDER: Add team member photo when hired
    email: 'careers@ortus-solutions.com',
    expertise: [
      'Business Intelligence',
      'SQL',
      'Tableau',
      'Power BI',
      'Data Modeling',
    ],
    yearsOfExperience: 6,
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ortus-solutions',
      github: 'https://github.com/ortus-solutions',
      email: 'careers@ortus-solutions.com',
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
