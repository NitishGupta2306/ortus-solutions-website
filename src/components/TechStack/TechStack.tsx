import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'

// Full stack combinations
const techStacks = [
  {
    name: 'Modern Web Apps',
    description: 'Fast, responsive, production-ready',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    gradient: 'from-blue-600 to-indigo-500',
  },
  {
    name: 'Data Pipelines',
    description: 'Scalable automation & analytics',
    technologies: ['Python', 'Pandas', 'FastAPI', 'PostgreSQL', 'AWS S3'],
    gradient: 'from-indigo-600 to-blue-500',
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Secure, scalable deployment',
    technologies: ['Docker', 'AWS/GCP', 'GitHub Actions', 'Terraform', 'Nginx'],
    gradient: 'from-sky-600 to-blue-500',
  },
  {
    name: 'AI Integration',
    description: 'Smart features, real insights',
    technologies: ['OpenAI', 'LangChain', 'Vector DBs', 'RAG', 'Fine-tuning'],
    gradient: 'from-blue-500 to-indigo-400',
  },
]

export function TechStack() {
  return (
    <Section background="dark">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Your business comes first — we tailor the tech to match your needs."
          >
            Tech Stack
          </SectionHeading>
        </SlideUp>

        {/* 4 Tech Stack Bubbles */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {techStacks.map((stack, index) => (
            <SlideUp key={stack.name} delay={0.1 + index * 0.1}>
              <div className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-accent/30 transition-all hover:scale-105 hover:shadow-2xl">
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${stack.gradient} rounded-t-2xl`} />

                {/* Stack Name */}
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${stack.gradient} bg-clip-text text-transparent mb-2 mt-2`}>
                  {stack.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 italic">
                  {stack.description}
                </p>

                {/* Technologies as tags */}
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 text-sm bg-gradient-to-r ${stack.gradient} text-white rounded-full font-medium shadow-md`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Tagline */}
        <SlideUp delay={0.5}>
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg text-slate-700 dark:text-slate-200 font-medium">
              Every project is unique. We pick the right tools for <span className="text-accent dark:text-accent-light font-bold">your</span> goals.
            </p>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}
