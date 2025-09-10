import user_profile from "./user-profile.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import html from "./html.svg";
import css from "./css.svg";
import tailwind from "./tailwind.svg";
import reactjs from "./react.svg";
import nextjs from "./nextjs.svg";
import bootstrap from "./bootstrap.png";
import php from "./php.svg";
import laravel from "./laravel.svg";
import mysql from "./mysql.png";
import javascript from "./javascript.svg";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";
import linxchat_logo from "./linxchat.png";
import polban_logo from "./polban.jpg";

export const assetList = {
  user_profile,
  html,
  nextjs,
  bootstrap,
  css,
  tailwind,
  laravel,
  php,
  mysql,
  javascript,
  reactjs,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  linkedin,
  instagram,
  linxchat_logo,
  polban_logo,
};

export const workData = {
  projects: [
    {
      id: 1,
      type: "client",
      title: "Polban Audit Mutu Internal (PAMIOL)",
      description: "Web Application",
      technologies: ["Bootstrap", "PHP", "MySQL"],
      bgImage: "/Pamiol_webapp.png",
      href: "https://drive.google.com/drive/folders/1gz06C_w-zHYCfKs4obSzw-UbIcaB0xjb?usp=sharing",
    },
    {
      id: 2,
      title: "Linxchat",
      type: "client",
      description: "Web Application",
      technologies: ["Tailwind", "Next.js", "Typescript", " Socket.io"],
      bgImage: "/Linxchat_webapp.png",
      href: "https://drive.google.com/drive/folders/1KLOixaM36vDv6qGK81tUi9bLSeGqeYt1?usp=sharing",
    },
    {
      id: 3,
      title: "Dunia Bangun Datar",
      type: "client",
      description: "Educational Games",
      technologies: ["Scratch"],
      bgImage: "/scratch-bangun-datar.png",
      href: "https://scratch-bangun-datar.vercel.app/",
    },
    {
      id: 4,
      title: "Segi Banyak Beraturan",
      type: "client",
      description: "Educational Games",
      technologies: ["Scratch"],
      bgImage: "/scratch-segi-banyak-beraturan.png",
      href: "https://segi-banyak-beraturan.vercel.app/",
    },
    {
      id: 5,
      title: "Thread App",
      type: "personal",
      description: "Web Application",
      technologies: ["CSS", "React.js", "Redux", "Rest APIs"],
      bgImage: "/thread-app.png",
      href: "https://threads-app-murex-psi.vercel.app/",
    },
    {
      id: 6,
      title: "Notes App",
      type: "personal",
      description: "Web Application",
      technologies: ["CSS", "React.js"],
      bgImage: "/personal-notes-app.png",
      href: "https://personal-notes-app-roan.vercel.app/",
    },
    {
      id: 7,
      title: "BBC Clone",
      type: "personal",
      description: "Web Application",
      technologies: ["HTML", "CSS"],
      bgImage: "/BBC-clone.png",
      href: "https://bbcclone-tan.vercel.app/",
    },
  ],

  experiences: [
    {
      id: 1,
      image: assetList.linxchat_logo,
      position: "Frontend Developer",
      status: "Internship",
      company: "PT Linxchat Global Indonesia",
      date: "Jun 2023 - Sep 2023",
      descriptions: [
        "Developed social commerce web application",
        "Built real-time chat features between users",
        "Integrate web application with REST APIs and Websocket",
        "Performed manual testing",
      ],
    },
    {
      id: 2,
      image: assetList.polban_logo,
      position: "Fullstack Developer",
      status: "Part Time",
      company: "P2MPP - Politeknik Negeri Bandung",
      date: "Sep 2024 - Dec 2024",
      descriptions: [
        "Developed automatic scoring feature",
        "Built data visualization with bar chart and radar chart",
        "Redisigned data storage system",
        "Improved database schema to ensure data consistency",
      ],
    },
  ],

  trainings: [
    {
      id: 1,
      name: "IDCamp - React Developer",
      image: assetList.reactjs,
      organizer: "Dicoding & Indosat Ooredoo Hutchison",
      date: "Dec 2024 - June 2025",
      description:
        "IDCamp (Indosat Ooredoo Digital Camp) is a scholarship program by Indosat Ooredoo Hutchison in collaboration with Dicoding, offering training in React.js covering components, state, props, hooks, routing, and building interactive web applications.",
    },
  ],
};

export const toolsData = [
  {
    name: "HTML",
    image: assetList.html,
  },
  {
    name: "CSS",
    image: assetList.css,
  },
  {
    name: "Javascript",
    image: assetList.javascript,
  },
  {
    name: "PHP",
    image: assetList.php,
  },
  {
    name: "Bootstrap",
    image: assetList.bootstrap,
  },
  {
    name: "Tailwind",
    image: assetList.tailwind,
  },
  {
    name: "Reactjs",
    image: assetList.reactjs,
  },
  {
    name: "Nextjs",
    image: assetList.nextjs,
  },
  {
    name: "Laravel",
    image: assetList.laravel,
  },
  {
    name: "MySQL",
    image: assetList.mysql,
  },
];

export const socialMedia = [
  {
    name: "LinkedIn",
    icon: assetList.linkedin,
    href: "https://www.linkedin.com/in/tubagus-aji-prasetia-iskandar-a3a917246/",
  },
  {
    name: "Github",
    icon: assetList.github,
    href: "https://github.com/Tubagus31",
  },
  {
    name: "Instagram",
    icon: assetList.instagram,
    href: "https://instagram.com/tuba_313",
  },
];
