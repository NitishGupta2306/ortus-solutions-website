import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { Card } from '@/components/common/Card'
import { processSteps } from '@/data/process'

export function Process() {
  return (
    <Section id="process" background="white">
      <Container>
        <SlideUp>
          <SectionHeading centered subtitle="A transparent, collaborative approach to building your solution">
            How We Work
          </SectionHeading>
        </SlideUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <SlideUp key={step.id} delay={0.1 * index}>
                <Card hover className="relative h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent dark:bg-accent-light flex items-center justify-center text-white dark:text-slate-900 font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent dark:text-accent-light" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </SlideUp>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
