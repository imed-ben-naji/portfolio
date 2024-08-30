// data/projects.ts
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLinkedin, FaSyncAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTensorflow, SiPostgresql } from 'react-icons/si';

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB, featuring user authentication, product management, and payment processing.",
  icon: FaReact,
  technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  githubLink: "https://github.com/imed-ben-naji",
  skills: [
    {name: "Frontend Development"},
    { name: "UI/UX Design"},
    { name: "Responsive Web Design"},
    { name: "Performance Optimization"}
  ]
  },
  {
    id: 2,
  title: "Social Media Management Platform",
  description: "A full-stack social media management platform built, featuring user authentication, post scheduling, and analytics tracking, deployed on AWS using Terraform and Github Actions.",
  icon: FaNodeJs,
  technologies: ["Vue.js", "Node.js", "Nest.js", "MySQL", "Terrform", "AWS", "Github Actions"],
  githubLink: "https://github.com/imed-ben-naji",
  skills: [
    { name: "Web Scraping"},
    { name: "Natural Language Processing"},
    { name: "CI/CD Pipelines"},
    { name: "Infrastructure as Code"}
  ]
  },
  // {
  //   id: 2,
  // title: "TickTick-Notion Two-Way Sync",
  // description: "A Python-based application that enables two-way synchronization between TickTick tasks and Notion databases, allowing seamless task management across both platforms.",
  // icon: FaSyncAlt,
  // technologies: ["Python", "TickTick API", "Notion API", "aiohttp", "asyncio"],
  // githubLink: "https://github.com/imed-ben-naji",
  // skills: [
  //   { name: "API Integration"},
  //   { name: "Asynchronous Programming"},
  //   { name: "Data Synchronization"},
  //   { name: "Python Development"},
  //   { name: "Task Automation"}
  // ]
  // },
  // {
  //   id: 3,
  // title: "TickTick-Notion Two-Way Sync",
  // description: "A Python-based application that enables two-way synchronization between TickTick tasks and Notion databases, allowing seamless task management across both platforms.",
  // icon: FaSyncAlt,
  // technologies: ["Python", "TickTick API", "Notion API", "aiohttp", "asyncio"],
  // githubLink: "https://github.com/imed-ben-naji",
  // skills: [
  //   { name: "API Integration"},
  //   { name: "Asynchronous Programming"},
  //   { name: "Data Synchronization"},
  //   { name: "Python Development"},
  //   { name: "Task Automation"}
  // ]
  // },
  // {
  //   id: 4,
  // title: "TickTick-Notion Two-Way Sync",
  // description: "A Python-based application that enables two-way synchronization between TickTick tasks and Notion databases, allowing seamless task management across both platforms.",
  // icon: FaSyncAlt,
  // technologies: ["Python", "TickTick API", "Notion API", "aiohttp", "asyncio"],
  // githubLink: "https://github.com/imed-ben-naji",
  // skills: [
  //   { name: "API Integration"},
  //   { name: "Asynchronous Programming"},
  //   { name: "Data Synchronization"},
  //   { name: "Python Development"},
  //   { name: "Task Automation"}
  // ]
  // },
  // {
  //   id: 5,
  // title: "TickTick-Notion Two-Way Sync",
  // description: "A Python-based application that enables two-way synchronization between TickTick tasks and Notion databases, allowing seamless task management across both platforms.",
  // icon: FaSyncAlt,
  // technologies: ["Python", "TickTick API", "Notion API", "aiohttp", "asyncio"],
  // githubLink: "https://github.com/imed-ben-naji",
  // skills: [
  //   { name: "API Integration"},
  //   { name: "Asynchronous Programming"},
  //   { name: "Data Synchronization"},
  //   { name: "Python Development"},
  //   { name: "Task Automation"}
  // ]
  // },
];
