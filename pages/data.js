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
import typescript from "../public/assets/skills/typescript.png";
import sanity from "../public/assets/skills/sanity.png";
import sass from "../public/assets/projects/sass.png";
import pixabay from "../public/assets/projects/pixabay.png";
import framer from "../public/assets/projects/framer.png";
import wordpress from "../public/assets/skills/wordpress.png";

// social icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const Data = {
  projectsImg: [
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
          name: "TodaysWeather",
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

  socialicons: [
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

  projects: [
    {
      name: "AccessiNor",
      title: "AccessiNor AS",
      intro:
        "Introducing web accessibility checker website, built using of NextJS, Tailwind, TypeScript and Sanity. This website is designed to provide an interactive and visually pleasing experience for users.",
      img: accessiNor,
      desc1:
        "This app is designed with a clean, responsive layout using the Tailwind, making it easy for users to navigate.",
      desc2:
        "The Web Accessibility Checker is a comprehensive solution that automates the process of checking website accessibility. It offers a range of features that make it easier for users to identify and address potential accessibility issues. Leveraging the power of Next.js, TypeScript, Tailwind CSS, and Sanity, this tool provides a seamless and intuitive experience for users.",
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
      ],
    },
    {
      name: "WebStudio",
      title: "Web Studio",
      intro:
        "Introducing webstudio a web development agency specializes in creating stunning, high performance websites built using React, a popular JavaScript library for building user interfaces, and SASS, a powerful CSS preprocessor, to design and develop a sleek, responsive website.",
      img: webstudio,
      desc1:
        "The website features a modern, minimalist design that is optimized for both desktop and mobile devices. It is built using React components, allowing for a highly modular and easily maintainable codebase. The use of SASS allows for efficient and organized management of the website's CSS, including the use of variables, mixins, and nested selectors.",
      desc2:
        "Additionally, the website includes various interactive elements such as forms, sliders, and modals, all built using React and SASS. Overall, the website is an excellent example of how React and SASS can be used together to create a visually stunning and highly functional website.",
      code: "https://github.com/Amrit199/webstudio",
      demo: "https://webstudio-liard.vercel.app/",
      technologies: [
        {
          img: react,
          alt: "React",
        },
        {
          img: sass,
          alt: "SASS",
        },
      ],
    },
    {
      name: "ImageGallery",
      title: "Image Gallery",
      intro:
        "Introducing image gallery app, built using the latest technologies of React, Tailwind, firebase and Pixabay API. With this app, users can easily search and browse through a wide variety of beautiful images.",
      img: gallery,
      desc1:
        "This app is designed with a clean, minimalistic layout using the popular CSS framework, Tailwind, making it easy for users to navigate and find the perfect image for their needs. The powerful Pixabay API provides access to millions of high-quality images, so users can find the exact image they're looking for. Firebase is used for the app's back-end, providing a secure and reliable way to login and create their own account.",
      desc2:
        "React is used for the app's front-end development, ensuring fast and smooth performance, even with large amounts of data. This app is perfect for designers, photographers, or anyone in need of high-quality images for their projects. With a wide range of categories and a user-friendly interface, finding the perfect image has never been easier.",
      code: "https://github.com/Amrit199/Gallery",
      demo: "https://gallery-image-react-tailwind.vercel.app/",
      technologies: [
        {
          img: react,
          alt: "React",
        },
        {
          img: tailwind,
          alt: "Tailwid CSS",
        },
        {
          img: firebase,
          alt: "Firebase",
        },
        {
          img: pixabay,
          alt: "Pixabay API",
        },
      ],
    },
    {
      name: "TodaysWeather",
      title: "Today's Weather",
      intro:
        "Introducing today's weather app, built using of React, Tailwind, Openweather API and GeoDB API. With this app, users can easily search and browse any citis current weather conditions and one week weather forcast.",
      img: weather,
      desc1:
        "This app is designed with a clean, responsive layout using the popular CSS framework, Tailwind, making it easy for users to navigate. It utilizes the OpenWeather API to retrieve current weather data for a given location, and the GeoDB API to determine the user's location. The app displays the current temperature, humidity, and weather conditions, as well as a one week forecast.",
      desc2:
        "It also includes a search feature that allows the user to search for weather data by city name. The app is designed to be lightweight and fast, providing users with accurate and up-to-date weather information.",
      code: "https://github.com/Amrit199/weather-app-react-tailwind",
      demo: "https://weather-app-react-tailwind-lf9w.vercel.app/",
      technologies: [
        {
          img: react,
          alt: "React",
        },
        {
          img: tailwind,
          alt: "Tailwid CSS",
        },
        {
          img: firebase,
          alt: "Firebase",
        },
        {
          img: pixabay,
          alt: "Pixabay API",
        },
      ],
    },
    {
      name: "MOMO",
      title: "MOMO Restaurant",
      intro:
        "Introducing a restaurant website, built using the latest technologies of React, Tailwind, Framer Motion and Redux. This website is designed to provide an interactive and visually pleasing experience for users.",
      img: momo,
      desc1:
        "Tailwind is used for the styling, providing a clean and minimalistic design, making it easy to navigate the site and find the information you're looking for.",
      desc2:
        "React is used for the website's front-end development, ensuring fast and smooth performance. React Hooks are used for state management, making it easy to handle the dynamic data such as menu items, pricing and special offers. Framer Motion is used to add smooth animations throughout the website, making it more engaging and interactive for the user.",
      code: "https://github.com/Amrit199/momohub",
      demo: "https://momohub.vercel.app/",
      technologies: [
        {
          img: react,
          alt: "React",
        },
        {
          img: tailwind,
          alt: "Tailwid CSS",
        },
        {
          img: framer,
          alt: "Framer Motion",
        },
      ],
    },
    {
      name: "PortfolioWordpress",
      title: "Portfolio Wordpress",
      intro:
        "Introducing my portfolio website, built using the popular CMS platform, WordPress. My website is designed to showcase my work and skills in a professional, visually appealing and responsive manner.",
      img: wordpressportfolio,
      desc1:
        "WordPress provides a user-friendly interface that allows me to easily customize the design and layout of my website. I can choose from a wide range of templates and themes, and customize them to suit my needs. This makes it easy for me to create a unique and personalized website that reflects my personal brand.",
      desc2:
        "On my portfolio website, you can view my work, read my blog posts, and learn more about my skills and experience. WordPress provides powerful plugins that allow me to showcase my work in a professional and visually appealing way, such as image sliders, galleries, and portfolio pages. The platform also provides powerful SEO tools, making it easy for me to optimize my website for search engines and improve my online visibility. This allows me to reach a wider audience and attract more potential clients and collaborators. Overall, WordPress has allowed me to create a professional and polished portfolio website that showcases my work and skills in the best possible way. It's a powerful platform that provides all the tools I need to succeed in the competitive world of creative industries.",
      code: "#",
      demo: "https://tamangamrit.com/",
      technologies: [
        {
          img: wordpress,
          alt: "Wordpress",
        },
      ],
    },
  ],
};
