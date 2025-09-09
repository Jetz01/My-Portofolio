import { assetList, socialMedia } from "../../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full scroll-mt-20 px-[18%] py-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center font-Ovo text-3xl"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-16 flex w-full flex-col items-center gap-20 lg:flex-row"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 max-w-none rounded-3xl sm:w-80"
        >
          <Image
            src={assetList.user_image}
            alt="user"
            className="w-full rounded-3xl bg-[#E5E1DE]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 content-between"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-2-2xl mb-5 font-Ovo text-justify text-lg"
          >
            I am an Informatics Engineering graduate with an Associate Degree
            from Politeknik Negeri Bandung who has an interest in web
            development, especially in the field of Frontend Developer. I have
            experience in entry-level web development, such as creating user
            interfaces using frontend technologies like HTML, CSS, and
            JavaScript, and working with frameworks like React.js and Next.js to
            build interactive and responsive user experiences. I also understand
            the basics of state management, API consumption, and the use of UI
            libraries such as Tailwind CSS or Bootstrap.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="px-[5%] mb-12"
          >
            <li className="flex gap-5 items-center mb-2">
              <Image
                src={assetList.world}
                alt="world icon"
                className="w-10 border-1 border-white rounded-full bg-white"
              />
              <p className="font-Ovo text-lg">Based in Bandung</p>
            </li>
            <li className="flex gap-5 items-center mb-2">
              <Image
                src={assetList.education}
                alt="world icon"
                className="w-11 border border-1 border-gray-300 p-1 rounded-full bg-white"
              />
              <p className="font-Ovo text-lg">Bandung State Polytechnic</p>
            </li>
            <li className="flex gap-5 items-center mb-2">
              <Image
                src={assetList.gmail}
                alt="world icon"
                className="w-10 border-1 border-white rounded-full bg-white"
              />
              <p className="font-Ovo text-lg">tubagusaji31@gmail.com</p>
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-10 flex flex-col justify-center items-center"
          >
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl font-Ovo"
            >
              Find me on
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 my-4"
            >
              {socialMedia.map(({ icon, href }, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  key={index}
                  className="rounded-full p-2 border-2 border-black dark:bg-slate-200"
                >
                  <a href={href} target="_blank">
                    <Image
                      src={icon}
                      alt="icon-social-media"
                      className="w-8 aspect-square"
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
