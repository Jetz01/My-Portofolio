"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Work = () => {
  const [projectStatus, setProjectStatus] = useState("client");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full scroll-mt-20 px-[12%] py-10"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center font-Ovo text-3xl"
      >
        Project
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mx-auto flex flex-row items-center justify-center my-5 gap-5"
      >
        <button
          className={`px-7 py-2 border border-gray-200 rounded-full font-Ovo text-lg
            hover:bg-gray-200 ${projectStatus === "client" ? "bg-gray-200" : ""}`}
          onClick={() => setProjectStatus("client")}
        >
          Client Project
        </button>
        <button
          className={`px-7 py-2 border border-gray-200 rounded-full font-Ovo text-lg
            hover:bg-gray-200 ${projectStatus === "personal" ? "bg-gray-200" : ""}`}
          onClick={() => setProjectStatus("personal")}
        >
          Personal Project
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="grid grid-cols-2 xl:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        {projectStatus === "client"
          ? workData.client_project.map((project, index) => (
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
                  className="items-center text-start absolute bottom-5 left-1/2 flex w-10/12 border -translate-x-1/2 justify-between rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7"
                >
                  <div className="w-[75%]">
                    <h2 className="font-semibold text-xs md:text-base">
                      {project.title} -{" "}
                      <span className="font-normal">{project.description}</span>
                    </h2>
                    <p className="text-gray-700 text-xs md:text-base">
                      {project.tech}
                    </p>
                  </div>
                  <div className="flex aspect-square w-5 h-5 sm:w-9 sm:h-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-3 sm:w-5 pointer-events-none"
                    />
                  </div>
                </a>
              </motion.div>
            ))
          : workData.personal_project.map((project, index) => (
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
                  className="item-center absolute bottom-5 left-1/2 flex w-10/12 border -translate-x-1/2 justify-between rounded-md bg-white px-5 py-3 duration-500 group-hover:bottom-7"
                >
                  <div className="w-[75%]">
                    <h2 className="font-semibold text-xs md:text-base">
                      {project.title} -{" "}
                      <span className="font-normal text-xs md:text-base">
                        {project.description}
                      </span>
                    </h2>
                    <p className="text-gray-700 text-xs md:text-base">
                      {project.tech}
                    </p>
                  </div>
                  <div className="my-2 flex aspect-square  w-5 h-5 sm:w-9 sm:h-9 items-center justify-center rounded-full border border-black shadow-[2px_2px_0_#000] transition group-hover:bg-lime-300">
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-3 sm:w-5 pointer-events-none"
                    />
                  </div>
                </a>
              </motion.div>
            ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
