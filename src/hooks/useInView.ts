import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = false } = options

  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // If already been in view and freeze is enabled, don't observe
    if (freezeOnceVisible && hasBeenInView) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)

        if (inView && !hasBeenInView) {
          setHasBeenInView(true)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible, hasBeenInView])

  return { ref, isInView, hasBeenInView }
}
