"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA — IMMUTABLE FACTS ONLY
   ═══════════════════════════════════════════════════════════ */

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accentColor: string;
  icon: string;
}

const projects: ProjectData[] = [
  {
    title: "SOCentriq",
    subtitle: "Agentic AI SOC",
    description:
      "Architected an autonomous threat reasoning framework using a local Llama 3.1 model to extract STIX 2.1 IOCs. Engineered real-time telemetry pipelines via Wazuh, Logstash, and PostgreSQL, maintaining a sub-5-minute MTTD over a Fortinet VPN hybrid-cloud.",
    tags: ["Llama 3.1", "Wazuh", "Logstash", "PostgreSQL", "STIX 2.1", "Fortinet"],
    accentColor: "#5eead4",
    icon: "🛡️",
  },
  {
    title: "Automation Bliss",
    subtitle: "SOAR Platform",
    description:
      "Developed a custom SOAR platform integrating Shuffle with TheHive. Slashed MTTR by automating incident response workflows, MISP threat intelligence lookups, and containment scripts.",
    tags: ["Shuffle", "TheHive", "MISP", "SOAR", "Incident Response"],
    accentColor: "#915EFF",
    icon: "⚡",
  },
  {
    title: "SIEM Stack Deployment",
    subtitle: "Digital Forensics Infrastructure",
    description:
      "Deployed a full-scale Wazuh SIEM and PostgreSQL-backed evidence tracking system to ensure rigorous chain of custody for digital forensic investigations.",
    tags: ["Wazuh", "PostgreSQL", "SIEM", "Digital Forensics", "Chain of Custody"],
    accentColor: "#14b8a6",
    icon: "🔍",
  },
];

/* ═══════════════════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════════════════ */

const defaultTiltOptions = {
  max: 15,
  scale: 1.02,
  speed: 450,
  glare: true,
  "max-glare": 0.15,
};

function ProjectCard({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  return (
    <div className="xs:w-[360px] w-full shrink-0">
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        <Tilt options={defaultTiltOptions}>
          <div
            className="relative rounded-2xl p-[1px] overflow-hidden group"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}20, transparent 50%, ${project.accentColor}10)`,
            }}
          >
            {/* Hover glow border */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}40, transparent 40%, transparent 60%, ${project.accentColor}30)`,
              }}
            />

            {/* Card Content */}
            <div className="relative bg-tertiary rounded-2xl p-5 min-h-[380px] flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{project.icon}</span>
                    <div
                      className="px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase"
                      style={{
                        background: `${project.accentColor}15`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}30`,
                      }}
                    >
                      {project.subtitle}
                    </div>
                  </div>
                  <h3 className="text-white text-[24px] font-bold mt-2">
                    {project.title}
                  </h3>
                </div>

                {/* Card Number */}
                <span
                  className="text-[48px] font-black opacity-10 leading-none"
                  style={{ color: project.accentColor }}
                >
                  0{index + 1}
                </span>
              </div>

              {/* Description */}
              <p className="text-secondary text-[14px] leading-[24px] flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-medium tracking-wide transition-all duration-300 hover:scale-105"
                    style={{
                      background: `${project.accentColor}10`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}15`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROJECTS SECTION — Reference-aligned wrapper
   ═══════════════════════════════════════════════════════════ */

export default function Projects() {
  return (
    <section
      id="projects"
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
          Projects<span className="text-accent">.</span>
        </h2>
        <p className="mt-4 text-secondary text-[15px] max-w-3xl leading-[30px]">
          Each project represents a real-world challenge in cybersecurity
          operations — from building autonomous threat reasoning systems to
          deploying enterprise SIEM infrastructure.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
