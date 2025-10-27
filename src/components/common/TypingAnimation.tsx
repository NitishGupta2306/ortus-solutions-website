import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}

/**
 * Typing animation that cycles through multiple text strings
 * Creates a typewriter effect
 */
export function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = ''
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]

    // If paused, wait before starting to delete
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    // Handle typing
    if (!isDeleting && currentText !== currentFullText) {
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    // Pause when full text is typed
    if (!isDeleting && currentText === currentFullText) {
      setIsPaused(true)
      return
    }

    // Handle deleting
    if (isDeleting && currentText !== '') {
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, deletingSpeed)
      return () => clearTimeout(timeout)
    }

    // Move to next text when deletion is complete
    if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
