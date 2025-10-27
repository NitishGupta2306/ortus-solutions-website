import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Animated particle field representing data flowing through a pipeline
 */
function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const particlesCount = 2000
  const { viewport } = useThree()

  // Generate random particle positions
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      // Spread particles in a sphere
      const i3 = i * 3
      const radius = 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [particlesCount])

  // Animate particles with scroll parallax
  useFrame((state) => {
    if (!ref.current) return

    const time = state.clock.getElapsedTime()

    // Rotate the entire particle field
    ref.current.rotation.x = time * 0.05
    ref.current.rotation.y = time * 0.075

    // Mouse parallax effect
    const { mouse } = state
    ref.current.rotation.x += mouse.y * 0.05
    ref.current.rotation.y += mouse.x * 0.05

    // Scroll parallax (read scroll position from window)
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY || 0
      ref.current.position.y = scrollY * 0.0005 // Slower movement
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06B6D4"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

/**
 * 3D background canvas for Hero section
 * Respects prefers-reduced-motion for accessibility
 */
export function HeroBackground3D() {
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // If user prefers reduced motion, show static gradient instead
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-accent-subtle dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 bg-accent/5 dark:bg-accent/10" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        className="w-full h-full"
        dpr={[1, 2]} // Pixel ratio for performance
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.5} />

        {/* Particle field */}
        <ParticleField />

        {/* Subtle fog for depth */}
        <fog attach="fog" args={['#ffffff', 3, 8]} />
      </Canvas>
    </div>
  )
}
