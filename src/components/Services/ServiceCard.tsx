import { useState } from 'react'
import { Card } from '@/components/common/Card'
import { Service } from '@/types'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = service.icon

  return (
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
          aria-label={`Learn more about ${service.title}`}
        >
          <Card glass className="h-full shadow-xl">
            <div className="flex flex-col items-center justify-center h-full text-center pointer-events-none p-8">
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                {service.title}
              </h3>

              {/* Short Description */}
              <p className="text-accent dark:text-accent-light font-medium text-base">
                {service.description.split('.')[0]}.
              </p>

              {/* Helper Text */}
              <div className="mt-6 text-xs text-slate-500 dark:text-slate-400 italic">
                Click to see details
              </div>
            </div>
          </Card>
        </button>

        {/* Back of card */}
        <button
          type="button"
          onClick={() => setIsFlipped(false)}
          className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] text-left"
          aria-label={`Return to ${service.title} overview`}
        >
          <Card glass className="h-full shadow-xl">
            <div className="flex flex-col h-full p-6">
              {/* Title on Back */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent to-accent-light flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>
              </div>

              {/* Full Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex-1 overflow-y-auto">
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent dark:text-accent-light flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug">
                        {feature}
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
  )
}
