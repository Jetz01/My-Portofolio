"use client";
import { assetList } from "../../assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { toast, Bounce } from "react-toastify";

const Contact = ({ isDarkMode }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3cf8699a-0693-4887-b968-b768250ca901");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      toast.success("Form Submitted Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      console.log("Error", data);
      toast.error(`${data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-[length:90%_auto] 
        bg-center bg-no-repeat px-[12%] py-10 dark:bg-none"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-2 text-center font-Ovo text-3xl"
      >
        Connect With Me
      </motion.h4>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mx-auto mb-12 mt-5 max-w-xl text-center font-Ovo"
      >
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="mx-auto max-w-2xl"
      >
        <div className="mb-8 mt-10 grid grid-cols-auto gap-6">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            name="name"
            type="text"
            placeholder="Enter Your Name"
            required
            className="flex-1 rounded-md border-[0.5px] border-gray-400 
                bg-white p-3 outline-none dark:bg-darkHover/30 dark:border-white/90"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
            className="flex-1 rounded-md border-[0.5px] border-gray-400 
                bg-white p-3 outline-none dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="mb-6 w-full rounded-md border-[0.5px] border-gray-400 
            bg-white p-4 outline-none dark:bg-darkHover/30 dark:border-white/90"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="mx-auto flex w-max items-center justify-between gap-2 rounded-full 
            bg-black/80 px-8 py-3 text-white duration-500 hover:bg-black dark:bg-transparent
            dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <Image
            src={assetList.right_arrow_white}
            alt="arrow icon"
            className="w-4"
          />
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
