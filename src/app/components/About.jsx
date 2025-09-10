import { toolsData } from "../../assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IoSchool, IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import clsx from "clsx";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full scroll-mt-20 px-[8%] sm:px-[12%] lg:px-[15%] py-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center font-Ovo text-3xl mb-6"
      >
        About
      </motion.h2>

      <div className="w-full flex flex-col items-center lg:flex-row">
        <div className="p-10 w-full lg:w-[50%]">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-2-2xl lg:mb-5 text-justify text-base md:text-lg"
          >
            I'm a passionate Frontend Developer with experience in building
            responsive and interactive web applications. I've worked on projects
            using modern technologies to create user-friendly interfaces. <br />
            <br />
            My skills include HTML, CSS, JavaScript, React.js, and Next.js,
            along with knowledge of state management, API integration, and UI
            libraries such as Tailwind CSS and Bootstrap. I'm eager to keep
            learning and delivering clean, maintainable, and scalable solutions.
          </motion.p>
        </div>
        <div className="px-5 w-full lg:w-[50%]">
          <motion.ul
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="px-[5%] mb-12 text-base md:text-lg"
          >
            <li className="flex gap-5 items-center mb-2">
              <div>
                <div className="w-12 aspect-square flex items-center justify-center border rounded-full text-black border-gray-300 bg-white">
                  <IoSchool size={25} />
                </div>
              </div>
              <p>Diploma III - Informatics Engineering</p>
            </li>
            <li className="flex gap-5 items-center mb-2">
              <div>
                <div className="w-12 aspect-square flex items-center justify-center border rounded-full text-black border-gray-300 bg-white">
                  <BiSolidSchool size={25} />
                </div>
              </div>
              <p>Bandung State Polytechnic</p>
            </li>
            <li className="flex gap-5 items-center mb-2">
              <div>
                <div className="w-12 aspect-square flex items-center justify-center border rounded-full text-black border-gray-300 bg-white">
                  <IoLocationSharp size={25} />
                </div>
              </div>
              <p>Based in Bandung</p>
            </li>
            <li className="flex gap-5 items-center mb-2">
              <div>
                <div className="w-12 aspect-square flex items-center justify-center border rounded-full text-black border-gray-300 bg-white">
                  <MdEmail size={25} />
                </div>
              </div>
              <p>tubagusaji31@gmail.com</p>
            </li>
          </motion.ul>
        </div>
      </div>

      <div className="text-center w-full">
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-xl mb-10"
        >
          Tech Stack
        </motion.h3>
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="grid px-[25%] text-black justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {toolsData.map((tool, index) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              key={index}
              className="flex relative group aspect-square cursor-pointer items-center justify-center 
                            rounded-full border border-gray-200 duration-500 hover:-translate-y-1 w-12 xl:w-16 dark:bg-slate-100"
            >
              <div
                className={clsx(
                  "text-xs bg-slate-100 px-3 py-1 rounded-xl absolute -top-3 -right-7 z-50 opacity-0 group-hover:opacity-100"
                )}
              >
                {tool.name}
              </div>
              <Image src={tool.image} alt="Tool" className="w-8 xl:w-10" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default About;
