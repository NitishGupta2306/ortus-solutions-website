import { Card } from '@/components/common/Card'
import { Service } from '@/types'
import { Check } from 'lucide-react'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <Card hover className="h-full">
      <div className="flex flex-col h-full">
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
  )
}
