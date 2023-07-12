// projects images
import accessiNor from "../public/assets/projects/accessiNor.png";
import gallery from "../public/assets/projects/gallery.png";
import momo from "../public/assets/projects/momo.png";
import weather from "../public/assets/projects/weather.png";
import wordpressportfolio from "../public/assets/projects/wordpressportfolio.png";
import webstudio from "../public/assets/projects/webstudio.png";

// skills images
import css from "../public/assets/skills/css.png";
import html from "../public/assets/skills/html.png";
import github from "../public/assets/skills/github.png";
import firebase from "../public/assets/skills/firebase.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import redux from "../public/assets/skills/redux.png";
import nodejs from "../public/assets/skills/nodejs.png";
import tailwind from "../public/assets/skills/tailwind.png";
import next from "../public/assets/skills/nextjs.svg";
import material from "../public/assets/skills/materialUI.png";
import figma from "../public/assets/skills/figma.png";
import typescript from "../public/assets/skills/typescript.png"
import sanity from "../public/assets/skills/sanity.png";
import sass from "../public/assets/projects/sass.png";

// social icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const Data = {
    projectsImg : [
        {
            id: "startUps",
            name: "StartUps",
            projects: [
              {
                img: accessiNor,
                name: "AccessiNor",
                link: "/AccessiNor",
              },
              {
                img: webstudio,
                name: "WebStudio",
                link: "/Webstudio",
              },
            ],
          },
          {
            id: "portfolio",
            name: "portfolio",
            projects: [
              {
                img: gallery,
                name: "ImageGallery",
                link: "/Gallery",
              },
              {
                img: weather,
                name: "Today'sWeather",
                link: "/Weather",
              },
            ],
          },
          {
            id: "ecommerce",
            name: "Ecommerce",
            projects: [
              {
                img: momo,
                name: "MOMO",
                link: "/Momo",
              },
            ],
          },
          {
            id: "cms",
            name: "CMS",
            projects: [
              {
                img: wordpressportfolio,
                name: "PortfolioWordpress",
                link: "/Portfolio",
              },
            ],
          },
    ],

    skills: [
      {
        img: html,
        name: "HTML5",
      },
      {
        img: css,
        name: "CSS3",
      },
      {
        img: javascript,
        name: "JavaScript",
      },
      {
        img: react,
        name: "React",
      },
      {
        img: nodejs,
        name: "NodeJS",
      },
      {
        img: github,
        name: "GitHub",
      },
      {
        img: material,
        name: "Material UI",
      },
      {
        img: tailwind,
        name: "Tailwind",
      },
      {
        img: figma,
        name: "Figma",
      },
      {
        img: redux,
        name: "Redux",
      },
      {
        img: next,
        name: "NextJS",
      },
      {
        img: firebase,
        name: "Firebase",
      },
    ],

    socialicons : [
      {
        icon: BsLinkedin,
        name: "LINKEDIN",
        color: "0077B5",
        link: "https://www.linkedin.com/in/amrit-tamangsi/",
      },
      {
        icon: BsGithub,
        name: "GITHUB",
        color: "171515",
        link: "https://github.com/Amrit199",
      },
      {
        icon: HiDocumentText,
        name: "RESUME",
        color: "008000",
        link: "/Resume",
      },
      {
        icon: MdEmail,
        name: "EMAIL",
        color: "c71610",
        link: "/#contact",
      },
    ],

    projects : [
      {
        name: "AccessiNor",
        title: "AccessiNor AS",
        intro: "Introducing web accessibility checker website, built using of NextJS, Tailwind, TypeScript and Sanity. This website is designed to provide an interactive and visually pleasing experience for users.",
        img: accessiNor,
        desc1: "This app is designed with a clean, responsive layout using the Tailwind, making it easy for users to navigate.",
        desc2: "The Web Accessibility Checker is a comprehensive solution that automates the process of checking website accessibility. It offers a range of features that make it easier for users to identify and address potential accessibility issues. Leveraging the power of Next.js, TypeScript, Tailwind CSS, and Sanity, this tool provides a seamless and intuitive experience for users.",
        code: "https://github.com/Amrit199/accessinor_as",
        demo: "https://accessinor-as.vercel.app/",
        technologies: [
          {
            img: next,
            alt: "NextJS",
          },
          {
            img: tailwind,
            alt: "Tailwind CSS",
          },
          {
            img: typescript,
            alt: "TypeScript",
          },
          {
            img: sanity,
            alt: "Sanity",
          },
        ]
      },
      {
        name: "WebStudio",
        title: "Web Studio",
        intro: "Introducing webstudio a web development agency specializes in creating stunning, high performance websites built using React, a popular JavaScript library for building user interfaces, and SASS, a powerful CSS preprocessor, to design and develop a sleek, responsive website.",
        img: webstudio,
        desc1: "The website features a modern, minimalist design that is optimized for both desktop and mobile devices. It is built using React components, allowing for a highly modular and easily maintainable codebase. The use of SASS allows for efficient and organized management of the website's CSS, including the use of variables, mixins, and nested selectors.",
        desc2: "Additionally, the website includes various interactive elements such as forms, sliders, and modals, all built using React and SASS.",
        code: "https://github.com/Amrit199/gallery_react_tailwind_firebase",
        demo: "https://gallery-react-tailwind-firebase.vercel.app/",
        technologies: [
          {
            img: react,
            alt: "React",
          },
          {
            img: sass,
            alt: "SASS",
          },
        ]
      }
    ]
}