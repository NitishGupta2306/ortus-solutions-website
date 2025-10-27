import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SlideUp } from '@/components/common/SlideUp'
import { FadeIn } from '@/components/common/FadeIn'
import { personalInfo } from '@/data/personal'

export function About() {
  return (
    <Section id="about" background="white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image doesn't load
                    e.currentTarget.src = 'https://via.placeholder.com/600x600/06B6D4/FFFFFF?text=Your+Photo'
                  }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <div>
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
                <SlideUp key={index} delay={0.1 * (index + 1)}>
                  <p>{paragraph}</p>
                </SlideUp>
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
