import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Header() {
  return (
    <div
      id="home"
      className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="mb-5"
      >
        <Image
          src={assets.user_profile}
          alt="Profile"
          className="w-48 rounded-full border border-black bg-[#E5E1DE]"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-2 flex items-center gap-2 font-Ovo text-xl md:text-2xl"
      >
        Hi! I'm Tubagus Aji Prasetia Iskandar
        <Image src={assets.hand_icon} alt="hand-icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-Ovo text-3xl sm:text-5xl lg:text-[44px]"
      >
        I'm a Frontend Web Delveloper
      </motion.h1>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Profile" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/CV_ENG Tubagus Aji Prasetia Iskandar_ATS.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-gray-500 bg-white px-10 py-3 dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="Profile" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
