// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaChartBar, FaAws, FaReact, FaChalkboardTeacher, FaJs, FaRegSnowflake, FaNode, FaVuejs, } from 'react-icons/fa';
import { SiExpress, SiKubernetes, SiMongodb, SiNestjs, SiPowerbi, SiTerraform } from 'react-icons/si';
import { PiMathOperationsFill } from "react-icons/pi";
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
{
    company: "Data Guiding",
    position: "DevOps and Data Engineer",
    duration: "Sep 2023 - present",
    year: 2024,
    description: [
      "Crafted Python simulations to visualize (Fourier Series, Laplace Transforms, PDEs) solutions, enhancing student understanding of the link between theory and real-world applications.",
      "Facilitated collaborative learning by leading group discussions and encouraging peer support, building a positive and productive learning environment.",
      "Received excellent student feedback, contributing to a 20% increase in satisfaction ratings compared to previous terms."
    ],
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "AWS", icon: FaAws },
      { name: "Terrform", icon: SiTerraform },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Node.js", icon: FaNode },
      { name: "React", icon: FaReact },
      { name: "CI/CD", icon: PiMathOperationsFill },
      { name: "SQL", icon: FaDatabase },
      { name: "Snowflake", icon: FaRegSnowflake },
    ],
    logo: "/logos/concordia-university.png" // Add the path to the Concordia University logo
  },
  {
    company: "Data Guiding",
    position: "DevOps Intern",
    duration: "Feb 2023 - July 2023",
    year: 2023,
    description: [
      "Engineered a predictive model using machine learning algorithms to forecast sales trends, enhancing decision-making accuracy and contributing to a 15% uplift in sales projections accuracy.",
      "Boosted data processing efficiency by 40% via custom Python scripts for ETL automation, ensuring precise data handling from extraction to in-depth analysis, integrating with AWS cloud.",
      "Led the team to optimize data processing workflows by 30% by migrating to AWS, enhancing both data handling efficiency and system scalability while also ensuring data accuracy.",
      "Developed a Python-based application with a Tkinter GUI for the marketing team to add and track quotes, integrating with Power BI to visually monitor progress and improve quote management efficiency.",
      "Established efficiency metrics and automated Excel dashboards using VBA scripting, which boosted the productivity and efficiency of designers and CAD technicians by over 25%.",
      "Enhanced business process efficiency and decision support by collaborating with teams to optimize data workflows and designing tailored Power BI dashboards and KPI reports, resulting in improved strategic planning across the organization."
    ],
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "AWS", icon: FaAws },
      { name: "Terraform", icon: SiTerraform },
      { name: "Node.js", icon: FaNode },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Nest.js", icon: SiNestjs },
      { name: "SQL", icon: FaDatabase },
    ],
    logo: "/logos/ia-flow.png"
  },
  {
    company: "Campusna",
    position: "Engineering Intern",
    duration: "June 2022 – July 2022",
    year: 2022,
    description: [
      "Designed flow elements according to provided specifications using RW Miller software, improving product performance in the oil & gas sector.",
      "Managed technical quotations, effectively converting quotes to orders, demonstrating strong business communication skills.",
      "Handled client-centric reporting and documentation, ensuring tailored solutions and high customer satisfaction."
    ],
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "Mongodb", icon: SiMongodb  },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNode },
    ],
    logo: "/logos/ia-flow.png"
  }
];
