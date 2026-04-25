"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <octahedronGeometry args={[2, 0]} />
      <meshStandardMaterial color="#00d2ff" wireframe emissive="#00d2ff" emissiveIntensity={2} />
    </mesh>
  );
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingCube />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="z-10 text-center px-4" ref={titleRef}>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter mix-blend-difference cyber-text">
          ABDUR REHMAN
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
          Autonomous System Architect & Cybersecurity Specialist
        </p>
        <div className="mt-8 py-2 px-6 border border-[#00d2ff] text-[#00d2ff] rounded-full inline-block uppercase tracking-widest text-sm font-semibold hover:bg-[#00d2ff] hover:text-black transition-colors cursor-pointer backdrop-blur-sm">
          Enter Protocol
        </div>
      </div>
    </section>
  );
}