import { assetList, socialMedia } from "../../assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="text-3xl font-bold">Portfolio</div>

        <div className="mx-auto flex w-max items-center gap-2">
          <Image
            src={isDarkMode ? assetList.mail_icon_dark : assetList.mail_icon}
            alt="mail"
            className="w-6"
          />
          tubagusaji31@gmail.com
        </div>
      </div>

      <div className="mx-[10%] mt-12 items-center justify-between border-t border-gray-400 py-6 text-center sm:flex">
        <p>©2025 Tubagus Aji. All rights reserved</p>
        <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
