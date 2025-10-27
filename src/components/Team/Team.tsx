import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { TeamMemberCard } from './TeamMemberCard'
import { teamMembers } from '@/data/team'

export function Team() {
  return (
    <Section id="team" background="white">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Meet the experts behind Ortus Solutions"
          >
            Our Team
          </SectionHeading>
        </SlideUp>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <SlideUp key={member.id} delay={0.2 + index * 0.1}>
              <TeamMemberCard member={member} />
            </SlideUp>
          ))}
        </div>

        {/* Optional: Team Stats or CTA */}
        <SlideUp delay={0.6}>
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Ready to work with our team? Let's discuss your project.
            </p>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}
