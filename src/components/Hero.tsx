"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Float } from "@react-three/drei";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════════
   3D SCENE — Wireframe Icosahedron + Floating Particles
   ═══════════════════════════════════════════════════════════ */

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshStandardMaterial
          color="#915eff"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial
          color="#5eead4"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 80 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#5eead4"
        size={0.03}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

/* ═══════════════════════════════════════════════════════════
   ROTATING TEXT — Specializations
   ═══════════════════════════════════════════════════════════ */

const specializations = [
  "SOC Operations",
  "Security Automation",
  "Digital Forensics",
];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % specializations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[40px] sm:h-[48px] lg:h-[56px] overflow-hidden relative">
      <motion.div
        key={index}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-accent font-semibold lg:text-[42px] sm:text-[32px] text-[24px] tracking-wide"
      >
        {specializations[index]}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION — Reference-aligned layout
   ═══════════════════════════════════════════════════════════ */

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full h-screen mx-auto overflow-hidden bg-hero-bg"
    >
      {/* Text Content — z-10 above canvas */}
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5 z-10">
        {/* Accent Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent font-light sm:text-[20px] text-[16px] lg:text-[24px] tracking-[2px]"
          >
            Hello! I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
          >
            ABDUR{" "}
            <span className="text-violet">REHMAN</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4"
          >
            <p className="text-secondary font-light lg:text-[20px] sm:text-[18px] text-[14px] tracking-wide mb-3">
              Cybersecurity Specialist &amp;
            </p>
            <RotatingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-secondary font-light text-[14px] sm:text-[16px] mt-6 max-w-[520px] leading-[30px] opacity-80"
          >
            8th-semester BS Cybersecurity student at FAST-NUCES (Expected June 2026).
            Specializing in SOC operations, security automation, and digital forensics.
          </motion.p>
        </div>
      </div>

      {/* 3D Canvas — z-0 behind text */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#915eff" />
            <pointLight position={[0, 0, 0]} intensity={0.5} color="#5eead4" />
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate
              autoRotateSpeed={1.5}
            />
            <FloatingIcosahedron />
            <Particles />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>

      {/* Scroll Indicator — absolute bottom */}
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center z-10">
        <a href="#experience" aria-label="Scroll to experience section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}