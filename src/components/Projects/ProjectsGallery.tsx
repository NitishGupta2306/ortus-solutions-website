import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/data/project'

export function ProjectsGallery() {
  return (
    <Section id="projects" background="white">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Real-world projects with measurable impact"
          >
            Our Projects
          </SectionHeading>
        </SlideUp>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SlideUp key={project.id} delay={0.2 + index * 0.1}>
              <ProjectCard project={project} />
            </SlideUp>
          ))}
        </div>

        {/* Optional CTA */}
        <SlideUp delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Have a challenging data engineering project? Let's talk about how we can help.
            </p>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}
