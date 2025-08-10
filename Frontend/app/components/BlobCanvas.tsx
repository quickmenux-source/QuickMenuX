"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function FloatingBlob({ color, position, scale }: { color: string; position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.2;
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = t * 0.15;

    // Parallax interaction
    meshRef.current.position.x = position[0] + mouse.x * 2;
    meshRef.current.position.z = position[2] + mouse.y * 2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale || 1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.3} />
    </mesh>
  );
}

export default function BlobCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <FloatingBlob color="#FEEBCB" position={[-3, 1, -2]} scale={1.8} />
      <FloatingBlob color="#C7F9CC" position={[2.5, -1, -3]} scale={1.4} />
      <FloatingBlob color="#FFFACD" position={[0, 2.5, -1]} scale={1.2} />

      {/* Optional user control for testing */}
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}
