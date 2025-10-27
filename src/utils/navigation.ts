import { HEADER_HEIGHT } from './constants'

/**
 * Smoothly scrolls to a section on the page
 * Works with Lenis if available, falls back to native smooth scroll
 * @param href - The selector for the target element (e.g., '#about')
 */
export function scrollToSection(href: string): void {
  const element = document.querySelector(href)
  if (!element) return

  // Try to use Lenis if available (via window.lenis)
  const lenis = window.lenis
  if (lenis && typeof lenis.scrollTo === 'function') {
    // For Lenis, we need to scroll to the element's position minus the header
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    lenis.scrollTo(elementPosition - HEADER_HEIGHT, {
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  } else {
    // Fallback to native smooth scroll
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - HEADER_HEIGHT,
      behavior: 'smooth'
    })
  }
}
