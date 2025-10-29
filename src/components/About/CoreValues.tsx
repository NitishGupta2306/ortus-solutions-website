import { useState } from 'react'
import { Section } from '@/components/common/Section'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { SlideUp } from '@/components/common/SlideUp'
import { Card } from '@/components/common/Card'
import { companyInfo } from '@/data/company'
import { MessageSquare, Shield, Code, Zap, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

// Icon mapping
const iconMap: Record<string, any> = {
  MessageSquare,
  Shield,
  Code,
  Zap,
}

interface ValueCardProps {
  value: typeof companyInfo.values[0]
  index: number
}

function ValueCard({ value, index }: ValueCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = iconMap[value.icon]

  return (
    <SlideUp delay={0.1 + index * 0.05} className="h-full">
      <div className="h-full w-full [perspective:1000px]">
        <motion.div
          className="relative w-full h-full [transform-style:preserve-3d] group"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 17 }}
        >
          {/* Front of card */}
          <button
            type="button"
            onClick={() => setIsFlipped(true)}
            className="absolute inset-0 w-full h-full [backface-visibility:hidden] text-left"
            aria-label={`Learn more about ${value.title}`}
          >
            <Card glass className="h-full shadow-xl">
              <div className="flex flex-col items-center h-full text-center pointer-events-none p-6">
                {/* Top spacing */}
                <div className="flex-1" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-accent dark:text-accent-light font-medium text-base italic min-h-[3rem]">
                  {value.subtitle}
                </p>

                {/* Bottom spacing */}
                <div className="flex-1" />

                {/* Helper Text - pinned to bottom */}
                <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                  Click to learn more
                </div>
              </div>
            </Card>
          </button>

          {/* Back of card */}
          <button
            type="button"
            onClick={() => setIsFlipped(false)}
            className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] text-left"
            aria-label={`Return to ${value.title} overview`}
          >
            <Card glass className="h-full shadow-xl">
              <div className="flex flex-col h-full p-6">
                {/* Title on Back */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {value.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <div className="flex-1 overflow-y-auto">
                  <ul className="space-y-2">
                    {value.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent dark:text-accent-light flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Helper Text */}
                <div className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400 italic flex-shrink-0">
                  Click to go back
                </div>
              </div>
            </Card>
          </button>
        </motion.div>
      </div>
    </SlideUp>
  )
}

export function CoreValues() {
  return (
    <Section id="values" background="dark" className="py-16">
      <Container>
        <SlideUp>
          <SectionHeading
            centered
            subtitle=""
            className="mb-6"
          >
            Our Core Values
          </SectionHeading>

          {/* Quote Badge */}
          <div className="max-w-4xl mx-auto mb-8 p-4 border-2 border-accent/30 dark:border-accent-light/30 rounded-xl">
            <p className="font-sans text-lg md:text-xl text-slate-700 dark:text-slate-100 text-center italic mb-2">
              "<span className="font-bold text-accent dark:text-accent-light">Excellence</span> is what we{' '}
              <span className="font-bold text-accent dark:text-accent-light">strive</span> for.{' '}
              <span className="font-bold text-accent dark:text-accent-light">Integrity</span> is what we{' '}
              <span className="font-bold text-accent dark:text-accent-light">stand</span> for."
            </p>
            <p className="font-sans text-xs text-slate-500 dark:text-slate-400 text-center">
              — Nitish Gupta, Founding Engineer
            </p>
          </div>
        </SlideUp>

        {/* Values Grid - 3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ gridAutoRows: '320px' }}>
          {companyInfo.values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
