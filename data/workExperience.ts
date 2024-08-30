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
      "Implemented EKS infrastructure using Terraform, simplifying the deployment of scalable and highly available Kubernetes clusters for containerized applications.",
      "Created Helm Charts to streamline and automate the deployment of SFTPGo, OpenSearch, OpenSearch Dashboard, Fluent Bit, and Metricbeat in an EKS cluster, for file transfer, log management, and monitoring.",
      "Configured Identity and Access Management (IAM: users/roles) for fine-grained permission management and ensured secure access to AWS resources.",
      "Set up and manage configurations in Route 53 for efficient domain and DNS service management.",
      "Configured CloudWatch Dashboards with settings for EKS clusters, enabling efficient log export and monitoring.",
      "Developed applications and configured infrastructure with Terraform, and CI/CD pipelines with GitHub Actions deployed to ECS Fargate.",
      "Used GitLab CI to automate the deployment process of applications and jobs to EKS.",
      "Worked on ETL and ELT processes to ingest data from different sources to Cassandra using jobs developed with Python.",
      "Worked on ingesting data from S3 to Snowflake using Snowflake technologies like Snowpipe, external tables, and tasks for automation.",
      "Processed data using SQL and Python, mapping and cleaning data in Cassandra and Snowflake.",
      "Built pipelines to ingest data using API Gateway, Lambda functions, DynamoDB, and SQS for data management and processing.",
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
      "Designed and developed a social media management platform using Nest.js, Vue.js, and MySQL.",
      "Implemented user authentication, post scheduling, and analytics tracking features, enabling users to manage social media content effectively.",
      "Built the AWS cloud architecture for the social media management platform, ensuring high availability and optimal scalability using AWS services.",
      "Architected the infrastructure in AWS using Terraform, automating the deployment for efficient and reproducible cloud resource management.",
      "Set up pipelines with GitHub Actions for automated deployment of the social media management platform on AWS ECS, ensuring continuous delivery and efficient version management.",
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
      "Designed and developed an e-commerce website for a cosmetics store using React, Node.js, Express, and MongoDB, enabling online sales and customer management.",
      "Implemented user authentication and authorization features using JWT tokens and bcrypt for secure access control and data protection.",
      "Managed source code with Git. Collaborated with the team to ensure code quality and version control, facilitating seamless integration and deployment processes.",
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
