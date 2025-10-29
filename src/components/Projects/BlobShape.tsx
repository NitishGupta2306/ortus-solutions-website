import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

interface BlobShapeProps {
  colorStart?: string
  colorEnd?: string
  className?: string
  breathing?: boolean
  scale?: number
}

// Map of color names to hex values - Professional blue theme
const colorMap: Record<string, string> = {
  'blue-300': '#93C5FD',
  'blue-400': '#60A5FA',
  'blue-500': '#3B82F6',
  'blue-600': '#2563EB',
  'blue-700': '#1D4ED8',
  'indigo-300': '#A5B4FC',
  'indigo-400': '#818CF8',
  'indigo-500': '#6366F1',
  'indigo-600': '#4F46E5',
  'sky-300': '#7DD3FC',
  'sky-400': '#38BDF8',
  'sky-500': '#0EA5E9',
  'sky-600': '#0284C7',
}

export function BlobShape({
  colorStart = 'blue-400',
  colorEnd = 'blue-600',
  className = '',
  breathing = true,
  scale = 1
}: BlobShapeProps) {
  const blobRef = useRef<SVGPathElement>(null)
  const gradientId = `blob-gradient-${colorStart}-${colorEnd}`

  useEffect(() => {
    if (!breathing || !blobRef.current) return

    // Breathing animation - morph between blob shapes
    const tl = gsap.timeline({ repeat: -1, yoyo: true })

    // Define different blob shapes (SVG path data)
    const shapes = [
      // Shape 1: Original blob
      'M 300,200 C 400,100 500,100 600,200 C 700,300 700,400 600,500 C 500,600 400,600 300,500 C 200,400 200,300 300,200 Z',
      // Shape 2: Slightly morphed
      'M 320,180 C 420,120 520,120 620,220 C 680,320 680,420 580,520 C 480,600 380,600 280,500 C 220,400 220,300 320,180 Z',
      // Shape 3: More variation
      'M 310,210 C 390,110 510,90 610,190 C 710,290 690,410 590,510 C 490,610 390,620 290,520 C 190,420 210,310 310,210 Z',
    ]

    tl.to(blobRef.current, {
      duration: 4,
      attr: { d: shapes[1] },
      ease: 'sine.inOut',
    })
      .to(blobRef.current, {
        duration: 3.5,
        attr: { d: shapes[2] },
        ease: 'sine.inOut',
      })
      .to(blobRef.current, {
        duration: 4,
        attr: { d: shapes[0] },
        ease: 'sine.inOut',
      })

    return () => {
      tl.kill()
    }
  }, [breathing])

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: scale, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: 'url(#gooey-filter)' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorMap[colorStart] || '#60A5FA'} />
            <stop offset="100%" stopColor={colorMap[colorEnd] || '#2563EB'} />
          </linearGradient>
        </defs>
        <path
          ref={blobRef}
          d="M 300,200 C 400,100 500,100 600,200 C 700,300 700,400 600,500 C 500,600 400,600 300,500 C 200,400 200,300 300,200 Z"
          fill={`url(#${gradientId})`}
          opacity="0.9"
        />
      </svg>
    </motion.div>
  )
}
