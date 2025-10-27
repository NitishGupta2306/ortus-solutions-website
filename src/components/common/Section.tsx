import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'subtle' | 'dark'
}

export function Section({ id, children, className, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white dark:bg-slate-900',
    subtle: 'bg-slate-50 dark:bg-slate-800',
    dark: 'bg-slate-100 dark:bg-slate-950',
  }

  return (
    <section id={id} className={cn('py-16 md:py-24', backgrounds[background], className)}>
      {children}
    </section>
  )
}
