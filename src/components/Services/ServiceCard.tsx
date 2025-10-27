import { useRef } from 'react'
import { Card } from '@/components/common/Card'
import { Service } from '@/types'
import { Check } from 'lucide-react'
import { useTilt } from '@/hooks/useTilt'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon
  const cardRef = useRef<HTMLDivElement>(null)

  // Apply 3D tilt effect
  useTilt(cardRef, { max: 10, scale: 1.03, speed: 400 })

  return (
    <div ref={cardRef} className="h-full">
      <Card hover className="h-full relative overflow-hidden">
        {/* Glare effect */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.8), transparent 50%)',
          }}
        />

        <div className="flex flex-col h-full relative z-10">
          {/* Icon */}
          <div className="w-14 h-14 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-accent dark:text-accent-light" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                <Check className="w-4 h-4 text-accent dark:text-accent-light mt-0.5 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
}
