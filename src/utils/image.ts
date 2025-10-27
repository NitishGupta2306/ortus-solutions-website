import React from 'react'

/**
 * Generates a placeholder image URL
 * @param text - Text to display in the placeholder
 * @param width - Image width (default: 600)
 * @param height - Image height (default: 600)
 * @returns Placeholder image URL
 */
export function getPlaceholderImage(text: string, width = 600, height = 600): string {
  return `https://via.placeholder.com/${width}x${height}/06B6D4/FFFFFF?text=${encodeURIComponent(text)}`
}

/**
 * Creates an error handler for images that sets a placeholder fallback
 * @param fallbackText - Text to display in the placeholder
 * @param width - Image width (default: 600)
 * @param height - Image height (default: 600)
 * @returns Event handler function
 */
export function handleImageError(
  fallbackText: string,
  width?: number,
  height?: number
): (e: React.SyntheticEvent<HTMLImageElement>) => void {
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = getPlaceholderImage(fallbackText, width, height)
  }
}

/**
 * Lazy loads an image when it enters the viewport
 * Uses Intersection Observer API for performance
 * @param imgElement - The image element to lazy load
 */
export function lazyLoadImage(imgElement: HTMLImageElement): void {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const dataSrc = img.getAttribute('data-src')
          if (dataSrc) {
            img.src = dataSrc
            img.removeAttribute('data-src')
          }
          observer.unobserve(img)
        }
      })
    }, {
      rootMargin: '50px' // Start loading 50px before image enters viewport
    })

    observer.observe(imgElement)
  } else {
    // Fallback for browsers without Intersection Observer
    const dataSrc = imgElement.getAttribute('data-src')
    if (dataSrc) {
      imgElement.src = dataSrc
      imgElement.removeAttribute('data-src')
    }
  }
}

/**
 * Common image props for optimized loading
 * @param src - Image source URL
 * @param alt - Alt text for accessibility
 * @param lazy - Whether to enable lazy loading (default: true)
 * @returns Object with optimized image props
 */
export function getOptimizedImageProps(src: string, alt: string, lazy = true): {
  src?: string
  'data-src'?: string
  alt: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async'
} {
  if (lazy) {
    return {
      'data-src': src,
      alt,
      loading: 'lazy',
      decoding: 'async'
    }
  }

  return {
    src,
    alt,
    loading: 'eager'
  }
}
