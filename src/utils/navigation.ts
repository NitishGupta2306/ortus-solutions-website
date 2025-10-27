/**
 * Smoothly scrolls to a section on the page
 * @param href - The selector for the target element (e.g., '#about')
 */
export function scrollToSection(href: string): void {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
