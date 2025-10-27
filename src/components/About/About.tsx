import { useRef, useEffect } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { personalInfo } from '@/data/personal'
import { useGSAP } from '@/hooks/useGSAP'
import { handleImageError } from '@/utils/image'

export function About() {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    if (!imageRef.current || !contentRef.current) return

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Image zoom and rotate effect - much more dramatic
    const imageTween = gsap.fromTo(
      imageRef.current,
      {
        scale: 0.5,
        opacity: 0,
        rotateY: -30,
        x: -100
      },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        x: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
          scrub: 1,
        },
      }
    )

    // Content paragraphs stagger with more dramatic entrance
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

    // Cleanup function to kill all ScrollTriggers
    return () => {
      imageTween.scrollTrigger?.kill()
      contentTween.scrollTrigger?.kill()
    }
  }, [gsap, ScrollTrigger])

  return (
    <Section id="about" background="white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div ref={imageRef}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError('Your Photo', 600, 600)}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <SlideUp>
              <p className="text-accent dark:text-accent-light font-semibold text-sm mb-2 uppercase tracking-wide">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Building Data Infrastructure That Scales
              </h2>
            </SlideUp>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <SlideUp delay={0.4}>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-accent dark:text-accent-light">
                    {personalInfo.yearsOfExperience}+
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent dark:text-accent-light">20+</p>
                  <p className="text-slate-600 dark:text-slate-400">Projects Completed</p>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </Container>
    </Section>
  )
}
