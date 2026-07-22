import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { ContactShadows, Environment } from '@react-three/drei'
import * as THREE from 'three'

function BookMesh({ cover, back, accent = '#D4AF37' }) {
  const group = useRef()
  const [dragging, setDragging] = useState(false)
  const lastX = useRef(0)
  const [coverTexture, backTexture] = useLoader(THREE.TextureLoader, [cover, back])
  coverTexture.colorSpace = THREE.SRGBColorSpace
  coverTexture.anisotropy = 8
  backTexture.colorSpace = THREE.SRGBColorSpace
  backTexture.anisotropy = 8

  useFrame((_, delta) => {
    if (!dragging && group.current) group.current.rotation.y += delta * 0.22
  })

  const side = new THREE.MeshStandardMaterial({ color: '#10131d', roughness: 0.58, metalness: 0.08 })
  const pages = new THREE.MeshStandardMaterial({ color: '#e8dfca', roughness: 0.92 })
  const frontMaterial = new THREE.MeshStandardMaterial({ map: coverTexture, roughness: 0.62 })
  const backMaterial = new THREE.MeshStandardMaterial({ map: backTexture, roughness: 0.7 })

  return (
    <group
      ref={group}
      position={[0, 0.25, 0]}
      rotation={[-0.04, -0.28, 0]}
      onPointerDown={(event) => {
        event.stopPropagation()
        event.currentTarget.setPointerCapture(event.pointerId)
        lastX.current = event.clientX
        setDragging(true)
      }}
      onPointerMove={(event) => {
        if (!dragging || !group.current) return
        group.current.rotation.y += (event.clientX - lastX.current) * 0.012
        lastX.current = event.clientX
      }}
      onPointerUp={(event) => {
        event.currentTarget.releasePointerCapture(event.pointerId)
        setDragging(false)
      }}
    >
      <mesh castShadow material={[side, side, pages, pages, frontMaterial, backMaterial]}>
        <boxGeometry args={[2.05, 3.05, 0.28]} />
      </mesh>
      <mesh position={[0, -1.82, 0]} receiveShadow>
        <cylinderGeometry args={[1.46, 1.58, 0.34, 64]} />
        <meshStandardMaterial color="#111827" metalness={0.82} roughness={0.24} />
      </mesh>
      <mesh position={[0, -1.63, 0]} receiveShadow>
        <cylinderGeometry args={[1.48, 1.48, 0.035, 64]} />
        <meshStandardMaterial color={accent} metalness={0.95} roughness={0.19} />
      </mesh>
    </group>
  )
}

function MobileBook({ cover, title }) {
  return (
    <div className="mobile-book-stage" aria-label={`Rotating cover of ${title}`}>
      <img src={cover} alt={`${title} book cover`} loading="lazy" className="mobile-book" />
      <div className="mobile-pedestal" />
    </div>
  )
}

export default function Book3D({ cover, back, title }) {
  return (
    <>
      <div className="hidden h-[410px] cursor-grab touch-none md:block active:cursor-grabbing">
        <Canvas
          dpr={[1, 1.6]}
          camera={{ position: [0, 0.3, 6.7], fov: 37 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          shadows
        >
          <ambientLight intensity={0.7} />
          <spotLight position={[4, 6, 5]} angle={0.42} penumbra={0.8} intensity={55} castShadow />
          <pointLight position={[-3, 1, 3]} intensity={12} color="#5576a8" />
          <Suspense fallback={null}>
            <BookMesh cover={cover} back={back} />
            <Environment preset="city" />
            <ContactShadows position={[0, -2, 0]} opacity={0.55} scale={6} blur={2.5} far={5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="md:hidden">
        <MobileBook cover={cover} title={title} />
      </div>
    </>
  )
}
