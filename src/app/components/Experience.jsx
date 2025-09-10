import React from "react";
import { motion } from "motion/react";
import { workData } from "../../assets/assets";
import Image from "next/image";
import clsx from "clsx";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full scroll-mt-20 py-10 mt-10 mb-20 px-[5%] sm:px-[8%] lg:px-[12%]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-center font-Ovo text-3xl mb-12"
      >
        Work Experience
      </motion.h2>
      {workData.experiences.map((experience) => (
        <div
          key={experience.id}
          className="grid justify-items-center grid-rows-1 grid-cols-1 lg:grid-cols-[1fr_4px_1fr]"
        >
          <div
            className={`row-span-full col-start-2 hidden lg:block bg-black dark:bg-white w-[2px]`}
          >
            <div className="relative">
              <div className="absolute left-1/2 top-10 -translate-x-1/2 bg-black dark:bg-white w-5 h-5 rounded-full"></div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className={clsx(
              `col-span-1 row-span-1 lg:row-start-${experience.id} w-full cursor-pointer `,
              {
                "lg:col-start-1 lg:pr-5": experience.id % 2 == 1,
                "lg:col-start-3 lg:pl-5": experience.id % 2 == 0,
              }
            )}
          >
            <motion.div
              key={experience.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className={clsx(
                "flex flex-col xl:flex-row my-3 px-3 py-6 md:px-6 items-center gap-5 border-[0.5px] rounded-xl bg-slate-50 border-gray-200 dark:border-white dark:bg-white"
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
    </div>
  );
};

export default Experience;
