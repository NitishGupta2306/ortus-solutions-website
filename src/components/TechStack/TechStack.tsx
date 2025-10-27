import { useRef, useEffect } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { technologies, techCategories } from '@/data/techStack'
import { useGSAP } from '@/hooks/useGSAP'

export function TechStack() {
  const stackRef = useRef<HTMLDivElement>(null)
  const { gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    if (!stackRef.current) return

    const categories = stackRef.current.querySelectorAll('.tech-category')

    categories.forEach((category) => {
      const logos = category.querySelectorAll('.tech-logo')

      gsap.fromTo(
        logos,
        {
          scale: 0,
          opacity: 0,
          rotateY: 360,
          rotateZ: 180,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          rotateZ: 0,
          y: 0,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: 'random'
          },
          ease: 'elastic.out(1, 0.6)',
          scrollTrigger: {
            trigger: category,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      // Add a pulsing effect on each logo
      logos.forEach((logo) => {
        gsap.to(logo, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: logo,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        })
      })
    })
  }, [gsap, ScrollTrigger])

  return (
    <Section background="subtle">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle="Modern tools and technologies I use to build robust solutions"
          >
            Tech Stack
          </SectionHeading>
        </SlideUp>

        <div ref={stackRef} className="space-y-12">
          {techCategories.map((category) => {
            const categoryTech = technologies.filter(tech => tech.category === category)

            if (categoryTech.length === 0) return null

            return (
              <div key={category} className="tech-category">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center md:text-left">
                  {category}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" style={{ perspective: '1000px' }}>
                  {categoryTech.map((tech) => (
                    <div key={tech.name} className="tech-logo group flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-[transform,box-shadow] duration-300 border border-slate-200 dark:border-slate-700">
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        {/* Placeholder for tech logo */}
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-lg flex items-center justify-center text-accent dark:text-accent-light font-bold text-xs">
                          {tech.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <SlideUp delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              ...and many more tools as needed for your specific project
            </p>
          </div>
        </SlideUp>
      </Container>
    </Section>
  )
}
