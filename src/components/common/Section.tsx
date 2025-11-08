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
    white: 'bg-[#F4FAFF] dark:bg-[#040303]',
    subtle: 'bg-[#96897B]/10 dark:bg-[#0D5C63]/10',
    dark: 'bg-[#0D5C63] dark:bg-[#040303]',
  }

  return (
    <section id={id} className={cn('py-16 md:py-24', backgrounds[background], className)}>
      {children}
    </section>
  )
}
