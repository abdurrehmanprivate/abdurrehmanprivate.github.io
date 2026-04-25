"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const experiences = [
  {
    title: "Software Engineer",
    company_name: "SOCentriq",
    icon: "/logo.svg", // Fallback placeholder
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Orchestrated complex automation pipelines bridging security and system health.",
      "Engineered an autonomous remediation agent using OpenHands, LLM tooling, and custom Bash scripting.",
      "Optimized multi-agent collaboration with a specialized orchestrator architecture.",
    ],
  },
  {
    title: "AI & Cybersecurity Specialist",
    company_name: "Freelance",
    icon: "/logo.svg",
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Led digital forensics investigations extracting core artifacts via Volatility, FTK, and Autopsy.",
      "Pioneered an AI-Driven SOC tool converting natural language into SIEM query structures.",
      "Published 'Automating System Configuration and Vulnerability Scanning with Ansible'.",
    ],
  },
  {
    title: "Bachelor of Science in Cyber Security",
    company_name: "FAST-NUCES",
    icon: "/logo.svg",
    iconBg: "#383E56",
    date: "2020 - 2024",
    points: [
      "Bronze Medalist consistently maintaining the Dean's List ranking.",
      "Directed IEEE operations as VP of the local student chapter.",
      "Pioneered critical research mapping real-world cyber threats.",
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: any }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[60%] h-[60%] object-contain bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
            {experience.company_name[0]}
          </div>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}