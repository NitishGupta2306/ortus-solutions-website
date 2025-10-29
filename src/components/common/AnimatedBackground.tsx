/**
 * Subtle CSS-based animated background with floating gradient orbs
 * Provides visual interest without overwhelming the content
 */

interface AnimatedBackgroundProps {
  variant?: 'subtle' | 'dark'
}

export function AnimatedBackground({ variant = 'subtle' }: AnimatedBackgroundProps) {
  // Different orb colors based on variant - Professional blue theme
  const orbColors = variant === 'dark'
    ? {
        orb1: 'from-blue-500/60 to-indigo-500/60',
        orb2: 'from-indigo-600/50 to-blue-600/50',
        orb3: 'from-sky-500/45 to-blue-500/45',
      }
    : {
        orb1: 'from-blue-300/50 to-indigo-300/50',
        orb2: 'from-indigo-300/45 to-sky-300/45',
        orb3: 'from-blue-200/40 to-indigo-200/40',
      }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating gradient orbs - MUCH larger and more visible */}
      <div
        className={`absolute top-0 -left-20 w-[600px] h-[600px] bg-gradient-to-br ${orbColors.orb1} rounded-full blur-3xl animate-float-slow`}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={`absolute bottom-0 -right-20 w-[500px] h-[500px] bg-gradient-to-br ${orbColors.orb2} rounded-full blur-3xl animate-float-slower`}
        style={{ animationDelay: '2s' }}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-br ${orbColors.orb3} rounded-full blur-3xl animate-float-slowest`}
        style={{ animationDelay: '4s' }}
      />

      {/* Animated gradient overlay - more visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/12 to-transparent animate-gradient-shift" />
    </div>
  )
}
