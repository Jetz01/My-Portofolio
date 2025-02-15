import React from "react";
import { motion } from "motion/react";
import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full scroll-mt-20 px-[18%] py-10 mt-10 mb-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center font-Ovo text-3xl mb-20"
      >
        My Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <div className="text-center w-full">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-xl font-Ovo mb-10"
          >
            Technology
          </motion.h3>
          <motion.ul
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex aspect-square cursor-pointer items-center justify-center 
                    rounded-full border border-gray-200 duration-500 hover:-translate-y-1 w-24 xl:w-28 dark:bg-slate-100"
              >
                <Image src={tool} alt="Tool" className="w-16 xl:w-20" />
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center w-full"
        >
          <motion.h3 className="text-xl font-Ovo mb-10">
            Work Experience
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="cursor-pointer ml-[10%]"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col xl:flex-row items-center gap-5 border-[0.5px] rounded-xl border-gray-200 p-6
                dark:border-white dark:bg-white dark:hover:bg-slate-100"
            >
              <div className="w-[20%] min-w-20">
                <Image
                  src={assets.linxchat_logo}
                  alt="icon"
                  className="mt-3 w-20"
                />
              </div>
              <div className="text-start w-[80%]">
                <h3 className=" font-semibold text-xl text-gray-700">
                  Frontend Developer - Intern, Linxchat
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Jun 2023 - Sep 2023
                </p>
                <p className="text-lg text-justify text-gray-600">
                  In this internship, I was assigned to develop the linxchat
                  website using the Next.js framework.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
