import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { ServiceCard } from './ServiceCard'
import { services } from '@/data/services'

export function Services() {
  return (
    <Section id="services" background="white">
      <Container>
        <SlideUp>
          <SectionHeading centered subtitle="Comprehensive solutions for your data infrastructure needs">
            What We Do
          </SectionHeading>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ gridAutoRows: '400px' }}>
          {services.map((service, index) => (
            <SlideUp key={service.id} delay={0.1 + index * 0.1}>
              <ServiceCard service={service} />
            </SlideUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
