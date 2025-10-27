import clsx, { ClassValue } from 'clsx'

/**
 * Utility function to merge class names with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
