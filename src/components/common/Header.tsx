import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'
import { NAV_ITEMS, SITE_NAME } from '@/utils/constants'
import { cn } from '@/utils/cn'
import { scrollToSection as scrollToSectionUtil } from '@/utils/navigation'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen || !mobileMenuRef.current) return

    const menu = mobileMenuRef.current
    const focusableElements = menu.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Focus first element when menu opens
    firstElement?.focus()

    const handleTab = (e: KeyboardEvent): void => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        // Shift + Tab: if on first element, go to last
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab: if on last element, go to first
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    menu.addEventListener('keydown', handleTab)
    return () => menu.removeEventListener('keydown', handleTab)
  }, [isMobileMenuOpen])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    scrollToSectionUtil(href)
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300',
          isScrolled
            ? 'bg-[#F4FAFF]/80 dark:bg-[#040303]/80 backdrop-blur-lg shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-lg md:text-xl font-bold text-[#040303] dark:text-[#F4FAFF] hover:text-[#0D5C63] dark:hover:text-[#0D5C63] transition-colors whitespace-nowrap flex-shrink-0"
              aria-label="Return to top of page"
            >
              {SITE_NAME}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm text-[#040303] dark:text-[#96897B] hover:text-[#0D5C63] dark:hover:text-[#0D5C63] transition-colors font-medium whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side: CTA */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <a
                href="/bni-analysis-deira-dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-semibold bg-gradient-to-r from-[#0D5C63] to-[#931F1D] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
              >
                BNI Login
              </a>
              <Button onClick={() => scrollToSection('#contact')} size="sm" variant="outline">
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-300 hover:text-[#0D5C63] dark:hover:text-[#0D5C63]-light transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-lg text-slate-700 dark:text-slate-300 hover:text-[#0D5C63] dark:hover:text-[#0D5C63]-light transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                <a
                  href="/bni-analysis-deira-dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center font-semibold bg-gradient-to-r from-[#0D5C63] to-[#931F1D] text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Login to BNI Analysis
                </a>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full"
                  variant="outline"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
