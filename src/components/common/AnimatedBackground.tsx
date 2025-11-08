/**
 * Subtle CSS-based animated background with floating gradient orbs
 * Provides visual interest without overwhelming the content
 */

interface AnimatedBackgroundProps {
  variant?: 'subtle' | 'dark'
}

export function AnimatedBackground({ variant = 'subtle' }: AnimatedBackgroundProps) {
  // Different orb colors based on variant - Custom palette theme
  const orbColors = variant === 'dark'
    ? {
        orb1: 'from-[#0D5C63]/60 to-[#931F1D]/60',
        orb2: 'from-[#931F1D]/50 to-[#0D5C63]/50',
        orb3: 'from-[#96897B]/45 to-[#0D5C63]/45',
      }
    : {
        orb1: 'from-[#0D5C63]/50 to-[#96897B]/50',
        orb2: 'from-[#96897B]/45 to-[#0D5C63]/45',
        orb3: 'from-[#0D5C63]/40 to-[#931F1D]/40',
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
