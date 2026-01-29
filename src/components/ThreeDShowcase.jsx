import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
  ContactShadows,
  Sphere,
  Cylinder,
  Box,
  Text,
  Html
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Procedural 3D Robot Character
const Robot = (props) => {
  const headRef = useRef();
  const bodyRef = useRef();
  const rightArmRef = useRef();
  const leftArmRef = useRef();
  const groupRef = useRef();

  // Animation state
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Floating animation logic is handled by <Float>, but let's add subtle looking around
    const t = state.clock.getElapsedTime();

    // Head follows mouse slightly
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX * 0.5, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY * 0.5, 0.1);
    }

    // Body breathing
    if (bodyRef.current) {
      bodyRef.current.scale.y = 1 + Math.sin(t * 2) * 0.02;
    }

    // Arm waving on hover
    if (rightArmRef.current) {
      const wave = hovered ? Math.sin(t * 15) * 0.5 - 0.5 : Math.sin(t * 2) * 0.1;
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, wave - 0.5, 0.1);
    }
  });

  const materialProps = {
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1
  };

  const accentColor = hovered ? "#8b5cf6" : "#6366f1"; // Purple to Indigo

  return (
    <group ref={groupRef} {...props} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      {/* Head Group */}
      <group ref={headRef} position={[0, 1.6, 0]}>
        {/* Face/Screen */}
        <Box args={[0.8, 0.6, 0.6]} castShadow receiveShadow>
          <meshStandardMaterial color="#1a1f36" {...materialProps} />
        </Box>

        {/* Eyes (Glowing) */}
        <Sphere args={[0.08]} position={[-0.2, 0.05, 0.31]}>
          <meshBasicMaterial color={hovered ? "#ec4899" : "#10b981"} />
        </Sphere>
        <Sphere args={[0.08]} position={[0.2, 0.05, 0.31]}>
          <meshBasicMaterial color={hovered ? "#ec4899" : "#10b981"} />
        </Sphere>

        {/* Antenna */}
        <Cylinder args={[0.02, 0.02, 0.4]} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#64748b" />
        </Cylinder>
        <Sphere args={[0.08]} position={[0, 0.6, 0]}>
          <meshEmissiveMaterial color={accentColor} emissive={accentColor} emissiveIntensity={2} />
        </Sphere>
      </group>

      {/* Body Group */}
      <group ref={bodyRef} position={[0, 0.6, 0]}>
        <Cylinder args={[0.3, 0.5, 1.2]} castShadow receiveShadow>
          <meshStandardMaterial color="#ffffff" {...materialProps} />
        </Cylinder>
        {/* Core Reactor */}
        <Sphere args={[0.15]} position={[0, 0.2, 0.26]}>
          <meshEmissiveMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={1.5} />
        </Sphere>
      </group>

      {/* Arms */}
      <group ref={rightArmRef} position={[0.55, 1, 0]}>
        <Box args={[0.2, 0.8, 0.2]} position={[0, -0.3, 0]} castShadow>
          <meshStandardMaterial color="#475569" {...materialProps} />
        </Box>
        <Sphere args={[0.15]} position={[0, -0.75, 0]}>
          <meshStandardMaterial color="#1e293b" />
        </Sphere>
      </group>

      <group ref={leftArmRef} position={[-0.55, 1, 0]} rotation={[0, 0, 0.2]}>
        <Box args={[0.2, 0.8, 0.2]} position={[0, -0.3, 0]} castShadow>
          <meshStandardMaterial color="#475569" {...materialProps} />
        </Box>
        <Sphere args={[0.15]} position={[0, -0.75, 0]}>
          <meshStandardMaterial color="#1e293b" />
        </Sphere>
      </group>

      {/* Chat Bubble Interface using HTML */}
      <Html position={[1.2, 2.2, 0]} distanceFactor={6} transform occlude>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-indigo-500/30 w-48 text-center pointer-events-none select-none"
        >
          <p className="text-sm font-bold text-slate-800 dark:text-white">
            {hovered ? "Let's Build!" : "Hi, I'm Rahul's AI Assistant!"}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {hovered ? "Click to view projects" : "Hover me to say hello!"}
          </p>
        </motion.div>
      </Html>

    </group>
  );
};

// Main Component
const ThreeDShowcase = () => {
  return (
    <section className="h-[600px] w-full bg-gradient-to-b from-[--color-background-custom] to-[--color-surface] relative overflow-hidden">

      {/* Accessible Fallback / Overlay Text */}
      <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-[--color-primary] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            The <span className="gradient-text">Future</span> is Interactive
          </h2>
          <p className="text-[--color-secondary] max-w-2xl mx-auto">
            Experience next-generation web interfaces with WebGL and React Three Fiber.
          </p>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 1, 6]} fov={50} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow shadow-mapSize={[2048, 2048]} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />

          {/* Environment */}
          <Environment preset="city" />

          {/* Floating Character */}
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Robot position={[0, -1, 0]} rotation={[0, -0.2, 0]} />
          </Float>

          {/* Shadows */}
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />

          {/* Interactive Controls (limited) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.8}
            minAzimuthAngle={-0.5}
            maxAzimuthAngle={0.5}
          />
        </Canvas>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[--color-background-custom] to-transparent pointer-events-none" />
    </section>
  );
};

export default ThreeDShowcase;
