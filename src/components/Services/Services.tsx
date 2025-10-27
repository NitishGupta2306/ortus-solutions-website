import { useRef, useEffect } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { ServiceCard } from './ServiceCard'
import { services } from '@/data/services'
import { useGSAP } from '@/hooks/useGSAP'

export function Services() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const { gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll('.service-card')

    cards.forEach((card, index) => {
      // Alternate between left and right
      const direction = index % 2 === 0 ? -100 : 100

      gsap.fromTo(
        card,
        {
          x: direction,
          opacity: 0,
          rotateY: direction > 0 ? 20 : -20,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [gsap, ScrollTrigger])

  return (
    <Section id="services" background="subtle">
      <Container>
        <SlideUp>
          <SectionHeading centered subtitle="Comprehensive solutions for your data infrastructure needs">
            What I Do
          </SectionHeading>
        </SlideUp>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1000px' }}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
