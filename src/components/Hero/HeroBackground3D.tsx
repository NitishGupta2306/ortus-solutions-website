import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import {
  PARTICLE_COUNT,
  PARTICLE_SPHERE_RADIUS,
  PARTICLE_COLOR,
  PARTICLE_SIZE,
  PARTICLE_OPACITY,
  PARTICLE_ROTATION_SPEED_X,
  PARTICLE_ROTATION_SPEED_Y,
  PARTICLE_PARALLAX_FACTOR,
  MOUSE_PARALLAX_X,
  MOUSE_PARALLAX_Y,
  CAMERA_FOV,
  CAMERA_POSITION,
  FOG_COLOR_LIGHT,
  FOG_NEAR,
  FOG_FAR,
  CANVAS_DPR,
} from '@/utils/three-constants'

/**
 * Animated particle field representing data flowing through a pipeline
 */
function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const particlesCount = PARTICLE_COUNT

  // Generate random particle positions
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      // Spread particles in a sphere
      const i3 = i * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)

      positions[i3] = PARTICLE_SPHERE_RADIUS * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = PARTICLE_SPHERE_RADIUS * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = PARTICLE_SPHERE_RADIUS * Math.cos(phi)
    }

    return positions
  }, [particlesCount])

  // Animate particles with scroll parallax
  useFrame((state) => {
    if (!ref.current) return

    const time = state.clock.getElapsedTime()

    // Rotate the entire particle field
    ref.current.rotation.x = time * PARTICLE_ROTATION_SPEED_X
    ref.current.rotation.y = time * PARTICLE_ROTATION_SPEED_Y

    // Mouse parallax effect
    const { mouse } = state
    ref.current.rotation.x += mouse.y * MOUSE_PARALLAX_Y
    ref.current.rotation.y += mouse.x * MOUSE_PARALLAX_X

    // Scroll parallax (read scroll position from window)
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY || 0
      ref.current.position.y = scrollY * PARTICLE_PARALLAX_FACTOR
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={PARTICLE_COLOR}
        size={PARTICLE_SIZE}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={PARTICLE_OPACITY}
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
        camera={{ position: CAMERA_POSITION, fov: CAMERA_FOV }}
        className="w-full h-full"
        dpr={CANVAS_DPR}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.5} />

        {/* Particle field */}
        <ParticleField />

        {/* Subtle fog for depth */}
        <fog attach="fog" args={[FOG_COLOR_LIGHT, FOG_NEAR, FOG_FAR]} />
      </Canvas>
    </div>
  )
}
