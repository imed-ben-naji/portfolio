// data/projects.ts
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaLinkedin,
  FaSyncAlt,
  FaJs,
  FaAws,
  FaNode,
  FaVuejs,
  FaRegSnowflake, FaGithub, FaGitlab
} from 'react-icons/fa';
import {
    SiTypescript,
    SiMongodb,
    SiTensorflow,
    SiPostgresql,
    SiTerraform,
    SiKubernetes,
    SiMysql,
    SiNestjs,
    SiApachecassandra, SiOpensearch, SiHelm, SiAmazoneks, SiLogstash
} from 'react-icons/si';
import { TbLogs } from "react-icons/tb";
import {list} from "postcss";
import {PiMathOperationsFill} from "react-icons/pi";
import React from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
  detailedDescription?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
  title: "E-Commerce Platform",
  description: "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB, featuring user authentication, product management, and payment processing.",
  icon: FaReact,
  technologies: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
  githubLink: "https://github.com/imed-ben-naji/E-commerce-app",
  skills: [
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNode },
    { name: "Express", icon: SiNestjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "REST API", icon: FaLinkedin },
  ],
    detailedDescription: [
        "Developed a full-stack e-commerce platform using React, Node.js, Express, and MongoDB.",
        "Implemented user authentication and authorization using JWT tokens and bcrypt for password hashing.",
        "Developed a RESTful API for managing products, orders, and users.",
        "Implemented payment processing using Stripe API.",
        "Used Redux for state management and React Router for navigation.",
        "Implemented form validation using Formik and Yup.",
        "Used Material-UI for styling and responsiveness.",
        "Deployed the application on Heroku and MongoDB Atlas.",
    ]
  },
  {
    id: 2,
  title: "Social Media Management Platform",
  description: "A full-stack social media management platform built, featuring user authentication, post scheduling, and analytics tracking, deployed on AWS using Terraform and Github Actions.",
  icon: FaNodeJs,
  technologies: ["Vue.js", "Node.js", "Nest.js", "MySQL", "Terrform", "AWS", "Github Actions"],
  githubLink: "Private Repository",
  skills: [
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Vue.js", icon:  FaVuejs },
    { name: "Node.js", icon: FaNode },
    { name: "nestjs", icon: SiNestjs },
    { name: "AWS", icon: FaAws },
    { name: "Terrform", icon: SiTerraform },
    { name: "CI/CD", icon: PiMathOperationsFill },
    { name: "GitHub Actions", icon: FaGithub },
    { name: "MySQL", icon: SiMysql },
  ],
    detailedDescription: [
        "Designed and developed a social media management platform using Nest.js, Vue.js, and MySQL.",
        "Implemented user authentication and authorization using JWT tokens and bcrypt for secure access control and data protection.",
        "Implemented post scheduling and management features, enabling users to manage social media content effectively.",
        "Built the AWS cloud architecture using VPC, ECS, ALB, RDS and Route53 for the platform, ensuring high availability and optimal scalability.",
        "Created the infrastructure in AWS using Terraform, automating the deployment for efficient and reproducible cloud resource management.",
        "Set up pipelines with GitHub Actions for automated deployment.",
    ]
  },
  {
    id: 2,
  title: "ETL and Data Processing",
  description: "Developed ETL pipelines to ingest data from various sources to Cassandra and Snowflake using Python, and AWS services like API Gateway, Lambda, and DynamoDB.",
  icon: FaSyncAlt,
  technologies: ["Python", "Cassandra", "Snowflake", "AWS", "API Gateway", "Lambda", "DynamoDB", "terraform"],
  githubLink: "Private Repository",
    skills: [
        { name: "Python", icon: FaPython },
        { name: "SQL", icon: FaDatabase },
        { name: "Cassandra", icon: SiApachecassandra },
        { name: "Snowflake", icon: FaRegSnowflake },
        { name: "AWS", icon: FaAws },
        { name: "Terraform", icon: SiTerraform },
    ],
    detailedDescription: [
        "Developed ETL pipelines to ingest data from various sources to Cassandra and AWS S3 using Python.",
        "Worked on ingesting data from S3 to Snowflake using Snowflake technologies like Snowpipe, external tables, and tasks for automation.",
        "Built pipelines to ingest data using API Gateway, Lambda functions, DynamoDB, and SQS for data management and processing.",
        "Processed data using SQL and Python, mapping and cleaning data in Cassandra and Snowflake.",
        "Uses terraform to manage all the infrastructure in snowflake and AWS.",
        "Used GitLab CI to automate the deployment process infrastructure in Snowflake and AWS.",
    ]
  },
  {
    id: 3,
  title: "Kubernetes infrastructure in AWS",
  description: "Built a Kubernetes infrastructure in AWS using Terraform, enabling efficient deployment and management of containerized applications.",
  icon: SiKubernetes,
  technologies: ["Terraform", "Kubernetes", "AWS", "EKS", "GitLab CI"],
  githubLink: "Private Repository",
  skills: [
    { name: "Terraform", icon: SiTerraform },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "AWS", icon: FaAws },
    { name: "Gitlab CI", icon: FaGitlab },
  ],
    detailedDescription: [
        "Built a Kubernetes infrastructure composed of 4 clusters Factory(contain apps managed outside of the principal ENVs like the private Gitlab), development, QA, and production environments.",
        "build an architecture to empower this infrastructure to be scalable and secure (Route53 for DNS, S3 for storage, IAM for security, ACM for SSL certificates, etc).",
        "Create a terraform to manage this infrastructure",
        "Used GitLab CI to automate the deployment process of the infrastructure, applications and jobs to EKS.",
        "Used Helm (created a templates) to deploy applications and jobs to the Kubernetes cluster.",
    ]
  },
  {
    id: 4,
  title: "Developpe OpenSearch Dashboards for monitoring",
  description: "Developed OpenSearch Dashboards for monitoring the EKS cluster, enabling efficient log export and monitoring.",
  icon: SiOpensearch,
  technologies: ["OpenSearch", "OpenSearch Dashboards", "Helm", "EKS", "Logstash", "Metricbeat", "Filebeat"],
  githubLink: "Private Repository",
  skills: [
    { name: "OpenSearch", icon: SiOpensearch },
    { name: "OpenSearch Dashboards", icon: SiOpensearch },
    { name: "Helm", icon: SiHelm },
    { name: "EKS", icon: SiAmazoneks },
    { name: "Logstash", icon: SiLogstash },
    { name: "Metricbeat", icon: TbLogs },
    { name: "Filebeat", icon: TbLogs },
  ],
    detailedDescription: [
        "Developed OpenSearch Dashboards for monitoring the EKS cluster, enabling efficient log export and monitoring.",
        "Developed a Helm Chart to deploy OpenSearch Dashboards to the EKS cluster.",
        "Used Logstash, Metricbeat, and Filebeat to collect logs and metrics from the EKS cluster.",
        "Configured OpenSearch Dashboards to visualize logs and metrics of the 4 clusters.",
    ]
  },
];
