"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';
import { IoIosAnalytics } from 'react-icons/io';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hello there! I&apos;m Imed Ben Naji, a DevOps & Data Engineer with a passion for cloud computing and automation. My journey into the world of technology began with a deep curiosity for how things work, and it has evolved into a career dedicated to optimizing and orchestrating cloud infrastructures.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              After earning my degree in Software Engineering from the National Engineering School of Tunis (ENIT), I dove headfirst into the dynamic field of DevOps. I&apos;ve had the pleasure of working on projects that involve everything from implementing scalable Kubernetes clusters to automating complex deployment pipelines.
            </p>
            <p>
              When I&apos;m not architecting cloud solutions or optimizing data pipelines, you might find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><FaCode className="inline-block mr-2" /> Developing applications and exploring new programming frameworks</li>
              <li><IoIosAnalytics className="inline-block mr-2" /> Delving into data analytics and learning more about data management</li>
              <li><FaBookOpen className="inline-block mr-2" /> Enjoying a good book or movie to unwind</li>
            </ul>
            <p>
            At present, I&apos;m deeply invested in mastering the latest DevOps practices, with a focus on AWS, Kubernetes, and Terraform, while also leveraging my experience in data processing and management. The intersection of development, data, and DevOps is where I thrive, and I&apos;m excited to continue exploring and pushing the boundaries in these fields. For me, every project is a chance to innovate and drive meaningful improvements, and that&apos;s what keeps me motivated.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
