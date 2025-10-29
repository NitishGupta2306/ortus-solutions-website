/**
 * Constants for Three.js 3D effects
 */

// Particle system configuration
export const PARTICLE_COUNT = 2500 // Even more particles for better visibility
export const PARTICLE_SPHERE_RADIUS = 5
export const PARTICLE_COLOR = '#3B82F6' // Professional blue for visibility
export const PARTICLE_SIZE = 0.05 // Larger particles
export const PARTICLE_OPACITY = 0.9 // Very high opacity

// Animation speeds
export const PARTICLE_ROTATION_SPEED_X = 0.02 // Reduced from 0.05 - slower rotation
export const PARTICLE_ROTATION_SPEED_Y = 0.03 // Reduced from 0.075 - slower rotation
export const PARTICLE_PARALLAX_FACTOR = 0.0002 // Reduced from 0.0005

// Mouse parallax sensitivity
export const MOUSE_PARALLAX_X = 0.02 // Reduced from 0.05 - less mouse movement
export const MOUSE_PARALLAX_Y = 0.02 // Reduced from 0.05

// Camera and fog
export const CAMERA_FOV = 75
export const CAMERA_POSITION: [number, number, number] = [0, 0, 3]
export const FOG_NEAR = 3
export const FOG_FAR = 8
export const FOG_COLOR_LIGHT = '#ffffff'
export const FOG_COLOR_DARK = '#0F172A'

// Performance
export const CANVAS_DPR: [number, number] = [1, 2] // min, max pixel ratio
