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

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const cards = cardsRef.current.querySelectorAll('.service-card')
    const triggers: gsap.core.Tween[] = []

    cards.forEach((card, index) => {
      // Alternate between left and right with larger movement
      const direction = index % 2 === 0 ? -200 : 200

      const tween = gsap.fromTo(
        card,
        {
          x: direction,
          y: 100,
          opacity: 0,
          rotateY: direction > 0 ? 45 : -45,
          rotateZ: direction > 0 ? 10 : -10,
          scale: 0.6,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
            scrub: 0.5,
          },
        }
      )
      triggers.push(tween)
    })

    // Cleanup function to kill all ScrollTriggers and tweens
    return () => {
      triggers.forEach(tween => {
        tween.scrollTrigger?.kill()
        tween.kill()
      })
    }
  }, [gsap, ScrollTrigger])

  return (
    <Section id="services" background="subtle">
      <Container>
        <SlideUp>
          <SectionHeading centered subtitle="Comprehensive solutions for your data infrastructure needs">
            What We Do
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
