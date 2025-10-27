import { useEffect, RefObject } from 'react'
import { useGSAP } from './useGSAP'

interface ParallaxOptions {
  speed?: number // Parallax speed multiplier (0.5 = slower, 2 = faster)
  direction?: 'vertical' | 'horizontal'
}

/**
 * Hook to add parallax scrolling effect to an element
 * @param ref - React ref to the element
 * @param options - Parallax configuration options
 */
export function useParallax(ref: RefObject<HTMLElement>, options: ParallaxOptions = {}) {
  const { speed = 0.5, direction = 'vertical' } = options
  const { gsap, ScrollTrigger } = useGSAP()

  useEffect(() => {
    if (!ref.current) return

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const element = ref.current

    const movement = (speed - 1) * 100

    gsap.to(element, {
      [direction === 'vertical' ? 'y' : 'x']: movement,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [ref, speed, direction, gsap, ScrollTrigger])
}
