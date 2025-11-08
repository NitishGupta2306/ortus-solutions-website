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
    photo: '/images/team/nitish.jpg',
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
    id: 'member-3',
    name: 'Santhoshi Ramanathan',
    title: 'Product Designer',
    tagline: 'Designing user-centered digital experiences through accessibility, research, and design systems',
    bio: [
      `I found design through a fascination with color, communication, and storytelling. That curiosity evolved into a passion for systems thinking and user experience. After earning a B.A. in Design from UC Davis, I pursued an M.S. in Computer Graphics Technology at Purdue University, focusing on user-centered digital experiences that connect clarity and purpose.`,
      `My process is grounded in accessibility and universal design. I combine research, visual design, and prototyping to create inclusive solutions that balance user needs and business goals. I thrive in agile, cross-functional environments and focus on making design outcomes measurable, adaptable, and lasting.`,
      `Beyond design, I explore how technology influences accessibility and communication. I enjoy mentoring, testing new tools, and studying how design will evolve. My goal is to create design that feels intuitive, equitable, and human.`,
    ],
    photo: '/images/team/santhoshi.jpeg',
    email: 'santhoshi@ortus-solutions.com',
    expertise: [
      'UX Research',
      'Interaction Design',
      'Accessibility Design',
      'Prototyping',
      'Design Systems',
      'Usability Testing',
      'Figma',
      'Adobe Creative Suite',
    ],
    yearsOfExperience: 4,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/santhoshi14',
      email: 'santhoshi@ortus-solutions.com',
      portfolio: 'https://santhoshi.webflow.io/',
    },
  },
  {
    id: 'member-2',
    name: 'Laila Dodhy',
    title: 'UI/UX Designer',
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
]

// Helper function to get team member by ID
export function getTeamMemberById(id: string): TeamMember | undefined {
  return teamMembers.find(member => member.id === id)
}

// Helper function to get team members by IDs
export function getTeamMembersByIds(ids: string[]): TeamMember[] {
  return teamMembers.filter(member => ids.includes(member.id))
}
