import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { projects } from '@/data/project'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <Section id="projects" background="dark" className="!py-12">
      <Container>
        {/* Compact Header */}
        <SlideUp>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2">
              Our Projects
            </h2>
            <p className="text-sm text-slate-400">Real impact, real results</p>
          </div>
        </SlideUp>

        {/* Featured Project - Full Width Flip Card */}
        <SlideUp delay={0.1}>
          <div className="max-w-6xl mx-auto h-[600px]">
            <ProjectCard project={projects[0]} />
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}
