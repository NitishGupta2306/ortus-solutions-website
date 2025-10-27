import { useRef, useEffect } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { companyInfo } from '@/data/company'
import { useGSAP } from '@/hooks/useGSAP'
import { CheckCircle2 } from 'lucide-react'

export function CompanyAbout() {
  const contentRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const { gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    if (!contentRef.current || !valuesRef.current) return

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Content paragraphs stagger
    const paragraphs = contentRef.current.querySelectorAll('p')
    const contentTween = gsap.fromTo(
      paragraphs,
      {
        x: 100,
        y: 50,
        opacity: 0,
        scale: 0.9
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Values items stagger
    const valueItems = valuesRef.current.querySelectorAll('li')
    const valuesTween = gsap.fromTo(
      valueItems,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: valuesRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Cleanup function to kill all ScrollTriggers
    return () => {
      contentTween.scrollTrigger?.kill()
      valuesTween.scrollTrigger?.kill()
    }
  }, [gsap, ScrollTrigger])

  return (
    <Section id="about" background="white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <SlideUp>
            <div className="text-center mb-12">
              <p className="text-accent dark:text-accent-light font-semibold text-sm mb-2 uppercase tracking-wide">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                {companyInfo.tagline}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
                {companyInfo.mission}
              </p>
            </div>
          </SlideUp>

          {/* Company Description */}
          <div ref={contentRef} className="space-y-4 text-slate-600 dark:text-slate-300 text-lg mb-12">
            {companyInfo.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Core Values */}
          <SlideUp delay={0.2}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Our Core Values
              </h3>
              <ul ref={valuesRef} className="grid md:grid-cols-2 gap-4">
                {companyInfo.values.map((value, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent dark:text-accent-light flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideUp>

          {/* Company Stats */}
          <SlideUp delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 p-8 bg-gradient-to-br from-accent/5 to-accent-light/5 dark:from-accent/10 dark:to-accent-light/10 rounded-2xl">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent dark:text-accent-light">
                  <AnimatedCounter end={companyInfo.stats.totalExperience} suffix="+" />
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">
                  Combined Years
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent dark:text-accent-light">
                  <AnimatedCounter end={companyInfo.stats.projectsCompleted} suffix="+" />
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">
                  Projects
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent dark:text-accent-light">
                  <AnimatedCounter end={companyInfo.stats.industriesServed} suffix="+" />
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">
                  Industries
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent dark:text-accent-light">
                  <AnimatedCounter end={companyInfo.stats.happyClients} suffix="+" />
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">
                  Happy Clients
                </p>
              </div>
            </div>
          </SlideUp>

          {/* Founded Date */}
          <SlideUp delay={0.5}>
            <p className="text-center text-slate-500 dark:text-slate-400 mt-8 text-sm">
              Founded {companyInfo.founded}
            </p>
          </SlideUp>
        </div>
      </Container>
    </Section>
  )
}
