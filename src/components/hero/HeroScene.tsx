import { Float, Html, OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { FaAws } from 'react-icons/fa6'
import {
  SiAnsible,
  SiArgo,
  SiDocker,
  SiGithubactions,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiNginx,
  SiPrometheus,
  SiTerraform,
} from 'react-icons/si'
import * as THREE from 'three'

const NODE_COUNT = 72
const RADIUS = 2.1
const NODE_COLORS = ['#87adc9', '#6b93b3', '#4a7094', '#a9c6dd', '#9a8fd4', '#7fb0a3', '#cf9a66']

const TOOLS = [
  { icon: SiDocker, name: 'Docker', color: '#5f9bc4' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#6f9ecb' },
  { icon: SiTerraform, name: 'Terraform', color: '#9a8fd4' },
  { icon: FaAws, name: 'AWS', color: '#cf9a66' },
  { icon: SiJenkins, name: 'Jenkins', color: '#c2776f' },
  { icon: SiAnsible, name: 'Ansible', color: '#c28a86' },
  { icon: SiHelm, name: 'Helm', color: '#6f9ecb' },
  { icon: SiGithubactions, name: 'GitHub Actions', color: '#aab3bd' },
  { icon: SiArgo, name: 'ArgoCD', color: '#7f9fd1' },
  { icon: SiPrometheus, name: 'Prometheus', color: '#cf8a5f' },
  { icon: SiGrafana, name: 'Grafana', color: '#c89a55' },
  { icon: SiLinux, name: 'Linux', color: '#c8ae6e' },
  { icon: SiNginx, name: 'Nginx', color: '#86aa7c' },
]

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    points.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)).multiplyScalar(radius))
  }
  return points
}

function ToolNodes() {
  const positions = useMemo(() => fibonacciSphere(TOOLS.length, RADIUS + 0.12), [])

  return (
    <group>
      {TOOLS.map((tool, i) => {
        const Icon = tool.icon
        return (
          <group key={tool.name} position={positions[i]}>
            <mesh>
              <sphereGeometry args={[0.08, 12, 12]} />
              <meshBasicMaterial color="#a9c6dd" />
            </mesh>
            <Html
              center
              zIndexRange={[40, 10]}
              style={{ pointerEvents: 'none' }}
            >
              <div className="pointer-events-none flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-[#0d1117]/85 px-2.5 py-1 text-[10px] font-medium text-slate-200 shadow-lg shadow-black/40 backdrop-blur-sm">
                <Icon className="h-3 w-3" style={{ color: tool.color }} />
                {tool.name}
              </div>
            </Html>
          </group>
        )
      })}
    </group>
  )
}

function NetworkShell() {
  const groupRef = useRef<THREE.Group>(null)

  const { positions, colors, edgePositions } = useMemo(() => {
    const nodes = fibonacciSphere(NODE_COUNT, RADIUS)
    const positions = new Float32Array(NODE_COUNT * 3)
    const colors = new Float32Array(NODE_COUNT * 3)

    nodes.forEach((p, i) => {
      positions.set([p.x, p.y, p.z], i * 3)
      const c = new THREE.Color(NODE_COLORS[i % NODE_COLORS.length])
      colors.set([c.r, c.g, c.b], i * 3)
    })

    const edges: THREE.Vector3[] = []
    const edgeColors: number[] = []
    const threshold = RADIUS * 0.42

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodes[i].distanceTo(nodes[j]) < threshold) {
          edges.push(nodes[i], nodes[j])
          const c = new THREE.Color('#87adc9')
          edgeColors.push(c.r, c.g, c.b, c.r, c.g, c.b)
        }
      }
    }

    const edgePositions = new Float32Array(edges.length * 3)
    edges.forEach((v, i) => edgePositions.set([v.x, v.y, v.z], i * 3))

    return { positions, colors, edgePositions }
  }, [])

  useFrame((state) => {
    const group = groupRef.current
    if (!group) return
    group.rotation.z = THREE.MathUtils.lerp(
      group.rotation.z,
      state.pointer.x * 0.12,
      0.04,
    )
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      state.pointer.y * 0.08,
      0.04,
    )

    const t = state.clock.elapsedTime
    group.children.forEach((child) => {
      const base = child.userData.base
      if (typeof base !== 'number') return
      const phase = child.userData.phase as number
      const s = base * (1 + Math.sin(t * 1.6 + phase) * 0.22)
      child.scale.setScalar(s)
    })
  })

  const edgeGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(edgePositions, 3))
    return geo
  }, [edgePositions])

  const nodeGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [positions, colors])

  const nodes = useMemo(() => fibonacciSphere(NODE_COUNT, RADIUS), [])

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0]}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial
          color="#87adc9"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      <points geometry={nodeGeometry}>
        <pointsMaterial
          size={0.09}
          sizeAttenuation
          transparent
          opacity={0.9}
          vertexColors
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {nodes.map((p, i) => (
        <mesh
          key={i}
          position={p}
          userData={{ base: 0.05, phase: i * 0.4 }}
          ref={(el) => {
            if (el) el.userData = { base: 0.05, phase: i * 0.4 }
          }}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={NODE_COLORS[i % NODE_COLORS.length]} />
        </mesh>
      ))}

      <ToolNodes />
    </group>
  )
}

function WireframeCore() {
  const shellRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    if (shellRef.current) {
      shellRef.current.rotation.x += delta * 0.12
      shellRef.current.rotation.y += delta * 0.16
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.4
      ringRef.current.rotation.z += delta * 0.25
    }
    if (coreRef.current) {
      const s = 1 + Math.sin(t * 2) * 0.12
      coreRef.current.scale.setScalar(s)
    }
  })

  return (
    <group>
      <mesh ref={shellRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshBasicMaterial color="#87adc9" wireframe transparent opacity={0.1} />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[3.4, 0.015, 8, 100]} />
        <meshBasicMaterial color="#6b93b3" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, Math.PI / 3, 0]}>
        <torusGeometry args={[3.8, 0.012, 8, 100]} />
        <meshBasicMaterial color="#9a8fd4" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh rotation={[Math.PI / 1.3, Math.PI / 4, 0]}>
        <torusGeometry args={[4.15, 0.01, 8, 100]} />
        <meshBasicMaterial color="#7fb0a3" transparent opacity={0.25} blending={THREE.AdditiveBlending} />
      </mesh>

      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#a9c6dd" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshBasicMaterial color="#6b93b3" transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
      <div
        className="pointer-events-none absolute -inset-16 rounded-full opacity-25 blur-[90px]"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #41658a 0%, transparent 55%), radial-gradient(circle at 70% 40%, #5b4f8a 0%, transparent 55%), radial-gradient(circle at 50% 80%, #3f6a6a 0%, transparent 55%)',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        dpr={[1, 1.8]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
          <NetworkShell />
          <WireframeCore />
        </Float>
        <Sparkles count={70} scale={7} size={2.4} speed={0.35} color="#a9c6dd" opacity={0.5} />
        <OrbitControls
          makeDefault
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  )
}
