import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  children: ReactNode
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  children,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4"
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
