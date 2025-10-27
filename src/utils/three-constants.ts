/**
 * Constants for Three.js 3D effects
 */

// Particle system configuration
export const PARTICLE_COUNT = 2000
export const PARTICLE_SPHERE_RADIUS = 5
export const PARTICLE_COLOR = '#06B6D4' // matches accent color from tailwind.config.js
export const PARTICLE_SIZE = 0.025
export const PARTICLE_OPACITY = 0.8

// Animation speeds
export const PARTICLE_ROTATION_SPEED_X = 0.05
export const PARTICLE_ROTATION_SPEED_Y = 0.075
export const PARTICLE_PARALLAX_FACTOR = 0.0005

// Mouse parallax sensitivity
export const MOUSE_PARALLAX_X = 0.05
export const MOUSE_PARALLAX_Y = 0.05

// Camera and fog
export const CAMERA_FOV = 75
export const CAMERA_POSITION: [number, number, number] = [0, 0, 3]
export const FOG_NEAR = 3
export const FOG_FAR = 8
export const FOG_COLOR_LIGHT = '#ffffff'
export const FOG_COLOR_DARK = '#0F172A'

// Performance
export const CANVAS_DPR: [number, number] = [1, 2] // min, max pixel ratio
