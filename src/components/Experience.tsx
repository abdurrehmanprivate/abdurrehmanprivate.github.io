"use client";

import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";

const experiences = [
  {
    title: "AI SOC Architect",
    company_name: "SOCentriq",
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Pioneering Autonomous Threat Reasoning by architecting an Agentic AI SOC.",
      "Utilizing Llama 3.1 to automate incident response across 6-VM hybrid-cloud clusters.",
      "Reducing response latency through orchestrated AI memory and analytical models processing real-time telemetry."
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "FAST-NUCES",
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Orchestrated enterprise-grade security infrastructure for 100+ students.",
      "Guided courses in Ethical Hacking, Network Security, and Computer Networks.",
      "Deployed complex vulnerability simulations handling distributed payloads."
    ],
  },
  {
    title: "Freelance Consultant",
    company_name: "Digital Forensics",
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Professional Digital Forensics & OSINT investigations for high-profile enterprise clients.",
      "Delivered highly classified memory forensics and dynamic malware analysis.",
      "Conducted sophisticated evidence recovery following cyber attacks."
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: any }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff", borderBottom: '4px solid #915eff' }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={<div className="w-full h-full rounded-full border-2 border-white/20 bg-[#915eff]" />}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-[#aaa6c3] text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point: string, index: number) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider text-gray-300"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b0b1a] py-24 sm:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          <p className="sm:text-[18px] text-[14px] text-[#dfd9ff] uppercase tracking-wider">
            What I have done so far
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}