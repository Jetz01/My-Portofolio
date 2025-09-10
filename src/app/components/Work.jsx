"use client";

import { assetList, workData } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <div id="project" className="w-full scroll-mt-20 px-[8%] sm:px-[12%] py-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-center font-Ovo text-3xl"
      >
        Project
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 my-10 gap-5 dark:text-black"
      >
        {workData.projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="group relative aspect-square rounded-lg bg-cover bg-center bg-no-repeat border-2 border-black"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="items-center text-start absolute bottom-5 left-1/2 flex w-11/12 border -translate-x-1/2 justify-between rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7"
            >
              <div className="w-[80%]">
                <h2 className="font-semibold text-xs md:text-sm">
                  {project.title}
                  <span className="ml-1 font-normal text-xs md:inline md:text-sm">
                    -{" "}
                    {project.type === "client"
                      ? "Client Project"
                      : "Personal Project"}
                  </span>
                </h2>
                <p className="text-gray-700 text-xs sm:block md:text-sm">
                  {project.description}
                </p>
                {project.technologies.map((technology, index) => (
                  <p
                    key={index}
                    className="inline-block text-xs text-white bg-gray-700 px-2 py-1/2 rounded-full mx-[2px]"
                  >
                    {technology}
                  </p>
                ))}
                <p className="hidden text-gray-500 text-xs sm:inline md:text-sm"></p>
              </div>
              <div className="flex aspect-square w-5 h-5 sm:w-9 sm:h-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                <Image
                  src={assetList.send_icon}
                  alt="send icon"
                  className="w-3 sm:w-5 pointer-events-none"
                />
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
