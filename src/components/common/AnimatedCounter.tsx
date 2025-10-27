import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

/**
 * Animated counter that counts up from 0 to the target number
 * Triggers when element enters viewport
 */
export function AnimatedCounter({ end, duration = 2000, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(counterRef.current)

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounter = (): void => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCounter = (): void => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuad = (t: number): number => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      const currentCount = Math.floor(easedProgress * end)
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return (
    <span ref={counterRef} className={className}>
      {count}{suffix}
    </span>
  )
}
