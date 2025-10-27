import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className, hover = false, glass = false }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-lg border',
        glass
          ? 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border-white/20 dark:border-slate-700/50 shadow-xl'
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700',
        hover && 'transition-[transform,box-shadow] duration-300 hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
