import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { FadeIn } from '@/components/common/FadeIn'
import { technologies, techCategories } from '@/data/techStack'

export function TechStack() {
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

        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => {
            const categoryTech = technologies.filter(tech => tech.category === category)

            if (categoryTech.length === 0) return null

            return (
              <FadeIn key={category} delay={0.1 * categoryIndex}>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center md:text-left">
                    {category}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categoryTech.map((tech, techIndex) => (
                      <FadeIn key={tech.name} delay={0.05 * techIndex}>
                        <div className="group flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700">
                          <div className="w-12 h-12 mb-3 flex items-center justify-center">
                            {/* Placeholder for tech logo */}
                            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-accent dark:text-accent-light font-bold text-xs">
                              {tech.name.substring(0, 2).toUpperCase()}
                            </div>
                          </div>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                            {tech.name}
                          </p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>
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
