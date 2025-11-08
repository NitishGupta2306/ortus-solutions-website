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

// Map of color names to hex values - Custom palette theme
const colorMap: Record<string, string> = {
  'teal-300': '#2D9DA8',
  'teal-400': '#1D8D98',
  'teal-500': '#0D5C63',
  'teal-600': '#0A4A4F',
  'teal-700': '#073A3E',
  'red-300': '#C04745',
  'red-400': '#A83735',
  'red-500': '#931F1D',
  'red-600': '#7A1917',
  'taupe-300': '#B5A899',
  'taupe-400': '#A5988A',
  'taupe-500': '#96897B',
  'taupe-600': '#7A6F63',
}

export function BlobShape({
  colorStart = 'teal-400',
  colorEnd = 'teal-600',
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
            <stop offset="0%" stopColor={colorMap[colorStart] || '#0D5C63'} />
            <stop offset="100%" stopColor={colorMap[colorEnd] || '#0A4A4F'} />
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
