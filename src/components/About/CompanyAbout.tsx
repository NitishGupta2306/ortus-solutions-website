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
  const { gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    if (!contentRef.current) return

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Content bullet points stagger
    const listItems = contentRef.current.querySelectorAll('li')
    const contentTween = gsap.fromTo(
      listItems,
      {
        x: 50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Cleanup function to kill all ScrollTriggers and tweens
    return () => {
      contentTween.scrollTrigger?.kill()
      contentTween.kill()
    }
  }, [gsap, ScrollTrigger])

  return (
    <Section id="about" background="subtle">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <SlideUp>
            <div className="text-center mb-12">
              <p className="text-[#0D5C63] dark:text-[#0D5C63] font-semibold text-sm mb-2 uppercase tracking-wide">
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

          {/* Company Description - Bullet Points */}
          <div ref={contentRef} className="mb-12">
            <ul className="grid md:grid-cols-2 gap-4">
              {companyInfo.description.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0D5C63] dark:text-[#0D5C63] flex-shrink-0 mt-1" />
                  <span className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Stats */}
          <SlideUp delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 p-8 bg-gradient-to-br from-[#0D5C63]/5 to-[#96897B]/5 dark:from-[#0D5C63]/10 dark:to-[#96897B]/10 rounded-2xl">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#0D5C63] dark:text-[#0D5C63]">
                  <AnimatedCounter end={companyInfo.stats.totalExperience} suffix="+" />
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">
                  Combined Years
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#0D5C63] dark:text-[#0D5C63]">
                  <AnimatedCounter end={companyInfo.stats.projectsCompleted} suffix="+" />
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">
                  Projects
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#0D5C63] dark:text-[#0D5C63]">
                  <AnimatedCounter end={companyInfo.stats.industriesServed} suffix="+" />
                </p>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1">
                  Industries
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#0D5C63] dark:text-[#0D5C63]">
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
