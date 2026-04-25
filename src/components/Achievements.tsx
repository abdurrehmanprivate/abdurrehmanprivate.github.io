"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listItems = listRef.current?.children;
    if (listItems) {
      gsap.fromTo(
        listItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#0a0a0a] text-white py-24 sm:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tight cyber-green border-b border-[#333] pb-6">
          IMPACT ARCHITECTURE
        </h2>

        <ul ref={listRef} className="space-y-16">
          <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#00d2ff] before:rounded-full before:shadow-[0_0_10px_#00d2ff]">
            <h3 className="text-2xl font-bold cyber-text">SOCentriq | AI SOC Architect</h3>
            <p className="text-gray-300 mt-4 leading-relaxed tracking-wide text-lg">
              Pioneering Autonomous Threat Reasoning: Architected an Agentic AI SOC utilizing Llama 3.1 to automate incident response across 6-VM hybrid-cloud clusters. Reduced response latency through orchestrated AI memory and analytical models processing real-time telemetry.
            </p>
          </li>

          <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#00ff9d] before:rounded-full before:shadow-[0_0_10px_#00ff9d]">
            <h3 className="text-2xl font-bold cyber-green">Technical Leadership | Ethical Hacking Educator</h3>
            <p className="text-gray-300 mt-4 leading-relaxed tracking-wide text-lg">
              Orchestrated enterprise-grade security infrastructure for 100+ students as a Teaching Assistant in Ethical Hacking, Network Security, and Computer Networks. Deployed complex vulnerability simulations handling distributed payloads.
            </p>
          </li>

          <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#00d2ff] before:rounded-full before:shadow-[0_0_10px_#00d2ff]">
            <h3 className="text-2xl font-bold cyber-text">Freelance Consultant | Digital Forensics</h3>
            <p className="text-gray-300 mt-4 leading-relaxed tracking-wide text-lg">
              Professional Digital Forensics & OSINT: Delivered highly classified memory forensics, dynamic malware analysis, and evidence recovery for international enterprise clients navigating sophisticated cyber attacks.
            </p>
          </li>

           <li className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#ff00ff] before:rounded-full before:shadow-[0_0_10px_#ff00ff]">
            <h3 className="text-2xl font-bold text-[#ff00ff] drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">Certifications | Proven Expertise</h3>
            <p className="text-gray-300 mt-4 leading-relaxed tracking-wide text-lg">
              Highlighted specialized expert domains: <strong className="text-white">ISC2 Certified in Cybersecurity (CC)</strong> and <strong className="text-white">Belkasoft Windows Forensics</strong>. Demonstrating verifiable proficiencies in high-stakes environment operations.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}