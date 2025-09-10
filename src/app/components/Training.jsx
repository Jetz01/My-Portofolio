import React from "react";
import { motion } from "motion/react";
import { workData } from "../../assets/assets";
import Image from "next/image";

const Training = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="training"
      className="w-full scroll-mt-20 px-[8%] xl:px-[20%] py-10 mt-10 mb-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center font-Ovo text-3xl mb-8"
      >
        Professional Training
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="px-0 pb-10 lg:px-[5%]"
      >
        {workData.trainings.map((training) => (
          <motion.div
            key={training.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center py-5 sm:flex-row mb-5 rounded-lg border bg-slate-50 dark:bg-white"
          >
            <motion.div className="flex justify-center items-center w-full sm:w-[25%] lg:w-[15%]">
              <div className="flex justify-center p-2 rounded-lg bg-white dark:bg-slate-50">
                <Image src={training.image} alt="img" width={50} height={50} />
              </div>
            </motion.div>
            <motion.div className="text-center py-5 sm:pl-0 sm:pr-10 w-full sm:w-[75%] lg:w-[85%]">
              <div className="text-black justify-between lg:flex lg:items-center">
                <div className="text-base font-semibold md:text-lg">
                  {training.name}
                </div>
                <div className="text-sm font-semibold md:text-base">
                  {training.date}
                </div>
              </div>
              <div className="text-gray-500 mb-2 text-sm md:text-base text-center lg:text-justify">
                {training.organizer}
              </div>
              <div className="text-justify text-gray-800 px-6 sm:pl-0 sm:pr-5 text-sm md:text-base">
                {training.description}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Training;
