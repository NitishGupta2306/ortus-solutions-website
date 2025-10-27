import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl', // 768px - For text content
    md: 'max-w-5xl', // 1024px
    lg: 'max-w-7xl', // 1280px - Default
    xl: 'max-w-screen-2xl', // 1536px - Wide sections
  }

  return <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>{children}</div>
}
