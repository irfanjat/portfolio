import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const STAR_COLORS = ['#a9c6dd', '#87adc9', '#6b93b3', '#4a7094', '#9a8fd4', '#7fb0a3', '#c8ae6e', '#c2776f']

function Stars() {
  const pointsRef = useRef<THREE.Points>(null)
  const speedsRef = useRef<Float32Array | null>(null)

  const geometry = useMemo(() => {
    const count = 2200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    const radius = 55

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius * (0.6 + Math.random() * 0.4)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const c = new THREE.Color(STAR_COLORS[i % STAR_COLORS.length])
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b

      speeds[i] = 0.02 + Math.random() * 0.05
    }
    speedsRef.current = speeds

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [])

  useFrame((state, delta) => {
    const ref = pointsRef.current
    const speeds = speedsRef.current
    if (!ref || !speeds) return

    ref.rotation.y += delta * 0.012

    const pos = ref.geometry.getAttribute('position') as THREE.BufferAttribute
    const arr = pos.array as Float32Array
    const t = state.clock.elapsedTime

    for (let i = 0; i < arr.length / 3; i++) {
      arr[i * 3 + 1] += (speeds[i] + Math.sin(t * 0.25 + i) * 0.004) * delta
      if (arr[i * 3 + 1] > 42) arr[i * 3 + 1] = -42
    }
    pos.needsUpdate = true
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.12}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function CameraRig() {
  useFrame((state) => {
    const { camera, pointer } = state
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.2, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.8, 0.02)
    camera.lookAt(0, 0, 0)
  })
  return null
}

function FloatingShapes() {
  const shapes = useMemo(
    () => [
      { position: [-9, 4, -4] as const, color: '#9a8fd4', scale: 1.4, speed: 1.2, type: 'ico' },
      { position: [8, -5, -6] as const, color: '#7fb0a3', scale: 1.1, speed: 1.6, type: 'oct' },
      { position: [11, 6, -8] as const, color: '#335f80', scale: 1.3, speed: 1.0, type: 'tor' },
      { position: [-11, -4, -7] as const, color: '#c8ae6e', scale: 0.9, speed: 1.4, type: 'box' },
      { position: [0, 9, -9] as const, color: '#c2776f', scale: 1.0, speed: 1.3, type: 'dod' },
      { position: [-6, -9, -5] as const, color: '#274a63', scale: 1.2, speed: 1.5, type: 'ico' },
    ],
    [],
  )

  return (
    <group>
      {shapes.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={1.6} floatIntensity={1.8}>
          <mesh position={s.position} scale={s.scale}>
            {s.type === 'ico' && <icosahedronGeometry args={[0.9, 1]} />}
            {s.type === 'oct' && <octahedronGeometry args={[0.9, 0]} />}
            {s.type === 'tor' && <torusGeometry args={[0.8, 0.28, 12, 24]} />}
            {s.type === 'box' && <boxGeometry args={[1.1, 1.1, 1.1]} />}
            {s.type === 'dod' && <dodecahedronGeometry args={[0.9, 0]} />}
            <meshBasicMaterial color={s.color} wireframe transparent opacity={0.3} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export function Background3D() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 18], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Stars />
        <FloatingShapes />
        <CameraRig />
      </Canvas>
    </div>
  )
}
