/**
 * Smoothly scrolls to a section on the page
 * Works with Lenis if available, falls back to native smooth scroll
 * @param href - The selector for the target element (e.g., '#about')
 */
export function scrollToSection(href: string): void {
  const element = document.querySelector(href)
  if (!element) return

  // Try to use Lenis if available (via window.lenis)
  const lenis = (window as any).lenis
  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(element, { offset: -80, duration: 1.5 })
  } else {
    // Fallback to native smooth scroll
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
