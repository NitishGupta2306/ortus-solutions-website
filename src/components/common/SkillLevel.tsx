import { cn } from '@/utils/cn'

interface SkillLevelProps {
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  className?: string
}

const levelConfig = {
  beginner: { dots: 1, color: 'bg-[#96897B]', label: 'Beginner' },
  intermediate: { dots: 2, color: 'bg-[#0D5C63]', label: 'Intermediate' },
  advanced: { dots: 3, color: 'bg-[#931F1D]', label: 'Advanced' },
  expert: { dots: 4, color: 'bg-accent', label: 'Expert' }
}

/**
 * Visual skill level indicator with animated dots
 */
export function SkillLevel({ level, className = '' }: SkillLevelProps) {
  const config = levelConfig[level]

  return (
    <div className={cn('flex items-center gap-1', className)} title={config.label}>
      {[1, 2, 3, 4].map((dot) => (
        <div
          key={dot}
          className={cn(
            'w-1.5 h-1.5 rounded-full transition-all duration-300',
            dot <= config.dots
              ? cn(config.color, 'scale-100 opacity-100')
              : 'bg-slate-300 dark:bg-slate-600 scale-75 opacity-50'
          )}
        />
      ))}
    </div>
  )
}
