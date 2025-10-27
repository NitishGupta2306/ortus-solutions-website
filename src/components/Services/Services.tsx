import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { ServiceCard } from './ServiceCard'
import { services } from '@/data/services'

export function Services() {
  return (
    <Section id="services" background="subtle">
      <Container>
        <SlideUp>
          <SectionHeading centered subtitle="Comprehensive solutions for your data infrastructure needs">
            What I Do
          </SectionHeading>
        </SlideUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <SlideUp key={service.id} delay={0.1 * index}>
              <ServiceCard service={service} />
            </SlideUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
