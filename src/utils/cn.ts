import clsx, { ClassValue } from 'clsx'

/**
 * Utility function to merge class names with clsx
 * @param inputs - Class names to merge (strings, objects, arrays)
 * @returns Combined class name string
 * @example
 * cn('base-class', condition && 'conditional-class', { 'dynamic': isDynamic })
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}
