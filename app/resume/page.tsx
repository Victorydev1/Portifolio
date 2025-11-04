'use client';
import React from 'react'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
 } from 'react-icons/fa';

 const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolor maxime? Tempora sint impedit omnis iure? Rem veniam mollitia, tenetur obcaecati ea tempore impedit eos?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anidueme Victory"
    },
    {
      fieldName: "Phone",
      fieldValue: "N/A"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Skype",
      fieldValue: "victor.24"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian"
    },
    {
      fieldName: "Email",
      fieldValue: "N/A"
    },
    {
      fieldName: "Languages",
      fieldValue: "English"
    },
  ]
 };

 const experience = {
  icon: "",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vero expedita atque numquam tenetur culpa dicta labore eos totam, sed quidem? Atque, eligendi illo?",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Front-End Developer",
      duration: "2022 - Present"
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2024"
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021"
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020"
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019"
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2023 - 2025"
    },
  ]
 };

 const education = {
  icon: "",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vero expedita atque numquam tenetur culpa dicta labore eos totam, sed quidem? Atque, eligendi illo?",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Front-End Development",
      duration: "2023"
    },
    {
      institution: "Codecademy",
      degree: "Front-End Track",
      duration: "2022"
    },
    {
      institution: "Online Course",
      degree: "Programming COurse",
      duration: "2023"
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2023"
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Design",
      duration: "2023"
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2023"
    },
  ]
 };

 const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus labore impedit iusto, itaque id explicabo mollitia voluptatem nihil assumenda praesentium molestiae eos ipsam officiis sequi.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/tooltip";

import { ScrollArea } from "@/components/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}

      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container max-auto">
        <Tabs
          defaultValue="experience"
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text'>{experience.title}</h3>
                <p className='max-w-[600px] text-black/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=> {
                      return (
                      <li 
                        key={index} 
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-green-300'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-green-300'></span>
                          <p className='text-black/60'>{item.company}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>   
                     
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text'>{education.title}</h3>
                <p className='max-w-[600px] text-black/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index)=> {
                      return (
                      <li 
                        key={index} 
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-green-300'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-green-300'></span>
                          <p className='text-black/60'>{item.institution}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] tex-black/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index)=> {
                    return (
                      <li key={index}>{skill.name}</li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value='about' className='w-full'>
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume