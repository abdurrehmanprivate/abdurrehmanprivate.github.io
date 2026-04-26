"use client";

import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE DATA — IMMUTABLE FACTS ONLY
   ═══════════════════════════════════════════════════════════ */

interface ExperienceData {
  title: string;
  company: string;
  date: string;
  iconBg: string;
  iconLetter: string;
  points: string[];
}

const experiences: ExperienceData[] = [
  {
    title: "Cybersecurity Intern",
    company: "SNSKIES",
    date: "Jul 2025 – Sep 2025",
    iconBg: "#14b8a6",
    iconLetter: "S",
    points: [
      "Provided critical engineering support for the SOCentriq platform, utilizing Llama 3.1 for unstructured data processing and adaptive threat response.",
      "Deployed the architecture across 5 remote VMs provided by the company.",
      "Gained hands-on expertise in enterprise networking and digital forensics workflows.",
    ],
  },
  {
    title: "Red Teaming Intern",
    company: "ITSOLERA",
    date: "Jun 2025 – Aug 2025",
    iconBg: "#915EFF",
    iconLetter: "I",
    points: [
      "Developed custom Python-based offensive security tools for automated vulnerability assessments.",
      "Executed intensive penetration testing across client environments, identifying critical weaknesses and architecting mitigation strategies.",
    ],
  },
  {
    title: "Lab Demonstrator / Teaching Assistant",
    company: "FAST-NUCES",
    date: "Aug 2024 – Present",
    iconBg: "#E6DEDD",
    iconLetter: "F",
    points: [
      "Directed technical lab infrastructure for Ethical Hacking, Network Security, and Computer Networks.",
      "Orchestrated real-world security simulations and managed network uptime for cohorts of 50+ students.",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE CARD
   ═══════════════════════════════════════════════════════════ */

function ExperienceCard({ experience }: { experience: ExperienceData }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "1px solid rgba(94, 234, 212, 0.08)",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: `0 0 0 4px rgba(94, 234, 212, 0.15), 0 0 20px rgba(94, 234, 212, 0.2)`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <span className="text-white font-bold text-lg">
            {experience.iconLetter}
          </span>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p className="text-accent text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed opacity-90"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE SECTION — Reference-aligned wrapper
   ═══════════════════════════════════════════════════════════ */

export default function Experience() {
  return (
    <section
      id="experience"
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
          Work{" "}
          <span className="teal-gradient">Experience.</span>
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="transparent">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}