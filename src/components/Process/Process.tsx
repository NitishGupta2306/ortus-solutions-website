import { useState } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { Card } from '@/components/common/Card'
import { processSteps } from '@/data/process'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ProcessCardProps {
  step: typeof processSteps[0]
  index: number
}

function ProcessCard({ step, index }: ProcessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = step.icon

  return (
    <div className="h-full w-full [perspective:1000px] relative">
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <button
          type="button"
          onClick={() => setIsFlipped(true)}
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] text-left"
          aria-label={`Learn more about ${step.title}`}
        >
          <Card glass className="h-full shadow-xl relative overflow-visible bg-white dark:bg-slate-800">
            {/* Step Number Badge */}
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#0D5C63] to-[#96897B] flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                {index + 1}
              </div>

              <div className="flex flex-col items-center justify-center h-full text-center pointer-events-none p-6">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0D5C63] to-[#96897B] flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {step.title}
                </h3>

                {/* Helper Text */}
                <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic flex items-center gap-1 justify-center">
                  <span>Click for details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Card>
        </button>

        {/* Back of card */}
        <button
          type="button"
          onClick={() => setIsFlipped(false)}
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] text-left"
          aria-label={`Return to ${step.title} overview`}
        >
          <Card glass className="h-full shadow-xl relative overflow-hidden bg-white dark:bg-slate-800">

              <div className="flex flex-col h-full p-6 pointer-events-none">
                {/* Title on Back */}
                <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#0D5C63] to-[#96897B] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Helper Text */}
                <div className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400 italic flex-shrink-0">
                  Click to go back
                </div>
              </div>
            </Card>
        </button>
      </motion.div>
    </div>
  )
}

export function Process() {
  return (
    <Section id="process" background="white">
      <Container>
        <SlideUp>
          <SectionHeading centered subtitle="A transparent, collaborative approach to building your solution">
            How We Work
          </SectionHeading>
        </SlideUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" style={{ gridAutoRows: '450px' }}>
          {processSteps.map((step, index) => (
            <SlideUp key={step.id} delay={0.1 * index}>
              <ProcessCard step={step} index={index} />
            </SlideUp>
          ))}
        </div>
      </Container>
    </Section>
  )
}
