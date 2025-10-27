import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700',
        hover && 'transition-[transform,box-shadow] duration-300 hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
