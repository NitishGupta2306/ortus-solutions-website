import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

/**
 * Hook to use GSAP with ScrollTrigger
 * Provides access to gsap and ScrollTrigger
 */
export function useGSAP() {
  useEffect(() => {
    // Refresh ScrollTrigger on mount to ensure correct calculations
    ScrollTrigger.refresh()

    return () => {
      // Clean up all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return { gsap, ScrollTrigger }
}
