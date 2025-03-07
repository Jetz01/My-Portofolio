"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed right-0 top-0 -z-10 w-11/12 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="background" />
      </div>
      <nav
        className={`fixed z-50 flex w-full items-center justify-between px-5 py-4 lg:px-8 xl:px-[8%] ${isScroll ? "bg-white bg-opacity-50 shadow-sm backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20" : ""}`}
      >
        <a href="#home" className="text-3xl font-bold cursor-pointer">
          Portfolio
        </a>

        <ul
          className={`lg:gap-8" hidden items-center gap-6 rounded-full px-12 py-3 md:flex ${isScroll ? "" : "bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}
        >
          <li>
            <a className="font-Ovo" href="/#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/#work">
              Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={!isDarkMode ? assets.moon_icon : assets.sun_icon}
              alt="theme"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 font-Ovo md:flex dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow"
            />
          </a>

          <button className="ml-3 block md:hidden" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="fixed -right-64 bottom-0 top-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50 px-10 py-20 transition duration-500 md:hidden dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="/#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="/#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="/#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="/#work">
              Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
