import React from "react";
import { motion } from "motion/react";
import { assetList, toolsData, workData } from "../../assets/assets";
import Image from "next/image";
import clsx from "clsx";

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
        className="text-center font-Ovo text-3xl mb-12"
      >
        Work Experience
      </motion.h2>
      {/* <div className="text-center w-full">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-xl font-Ovo my-10"
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
        </div> */}
      {workData.experiences.map((experience, index) => (
        <div
          key={experience.id}
          className="grid grid-cols-1 lg:grid-cols-[1fr_4px_1fr] justify-items-center"
        >
          <div
            className={`hidden row-start-1 col-start-2 lg:block bg-black dark:bg-white w-full`}
          >
            <div className="relative text-center rounded-full ">
              <div className="absolute -right-2 top-[5em] bg-black dark:bg-white w-5 h-5 rounded-full">
                -
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={clsx(
              `col-span-1 row-span-1 lg:row-start-${experience.id} px-5 w-full cursor-pointer `,
              {
                "lg:col-start-1": experience.id % 2 == 1,
                "lg:col-start-3": experience.id % 2 == 0,
              }
            )}
          >
            <motion.div
              key={experience.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "flex flex-col my-3 xl:flex-row items-center gap-5 border-[0.5px] rounded-xl border-gray-200 p-6 dark:border-white dark:bg-white dark:hover:bg-slate-100"
              )}
            >
              <div className="w-[20%] min-w-20">
                <Image
                  src={experience.image}
                  alt="icon"
                  className="mt-3 w-full rounded-full"
                />
              </div>
              <div className="text-start w-[80%]">
                <h3 className="font-semibold text-base md:text-lg text-gray-700 text-justify">
                  {experience.position} - {experience.status}
                </h3>
                <p className="text-sm text-gray-600 md:text-base">
                  {experience.company}
                </p>
                <p className="text-sm text-gray-600 mb-1/2 md:text-base">
                  {experience.date}
                </p>
                <ul className="px-6">
                  {experience.descriptions.map((description, index) => (
                    <li
                      key={index}
                      className="text-sm list-disc text-gray-600 md:text-base"
                    >
                      <p className="text-justify">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Experience;
