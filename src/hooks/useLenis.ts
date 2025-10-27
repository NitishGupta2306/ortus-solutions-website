import { useEffect } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Hook to initialize Lenis smooth scrolling
 * Integrates with GSAP ScrollTrigger for synchronized animations
 */
export function useLenis() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 2,
    })

    // Expose Lenis instance globally for scrollToSection utility
    ;(window as any).lenis = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Request animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])
}
