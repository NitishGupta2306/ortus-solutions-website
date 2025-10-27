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
