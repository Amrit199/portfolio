// projects images
import receel from "./public/assets/projects/receel.png";
import accessiNor from "./public/assets/projects/accessiNor.png";
import gallery from "./public/assets/projects/gallery.png";
import momo from "./public/assets/projects/momo.png";
import weather from "./public/assets/projects/weather.png";
import wordpressportfolio from "./public/assets/projects/wordpressportfolio.png";
import webstudio from "./public/assets/projects/webstudio.png";
import miljø from "./public/assets/projects/Miljo.png";

// skills images
import css from "./public/assets/skills/css.png";
import html from "./public/assets/skills/html.png";
import github from "./public/assets/skills/github.png";
import firebase from "./public/assets/skills/firebase.png";
import javascript from "./public/assets/skills/javascript.png";
import react from "./public/assets/skills/react.png";
import redux from "./public/assets/skills/redux.png";
import nodejs from "./public/assets/skills/nodejs.png";
import tailwind from "./public/assets/skills/tailwind.png";
import next from "./public/assets/skills/nextjs.svg";
import material from "./public/assets/skills/materialUI.png";
import figma from "./public/assets/skills/figma.png";
import typescript from "./public/assets/skills/typescript.png";
import sanity from "./public/assets/skills/sanity.png";
import sass from "./public/assets/projects/sass.png";
import pixabay from "./public/assets/projects/pixabay.png";
import framer from "./public/assets/projects/framer.png";
import wordpress from "./public/assets/skills/wordpress.png";

// social icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const Data = {
  projectsImg: [
    {
      id: "webdevelopment",
      name: "Web Development",
      projects: [
        {
          img: receel,
          name: "Receel",
          link: "/Receel",
          desc1:
            "Discover the future of energy at Receel, your online destination for high-quality solar panels, inverters, batteries, regulators, and more. From cozy homes to expansive farms, find the perfect solar solution tailored to your needs. Shop with confidence and convenience, knowing you're investing in sustainable living. Visit Receel today and embrace the power of the sun!",
          code: "https://github.com/Amrit199/receel",
          demo: "https://receel.no/",
        },
        {
          img: accessiNor,
          name: "AccessiNor",
          link: "/AccessiNor",
          desc1:
            "Unlock the full potential of your website with AccessiNor, your go-to tool for ensuring accessibility for all users. From small websites to large web applications, AccessiNor empowers you to identify and address accessibility issues effortlessly. Whether it's ensuring color contrast compliance or conducting comprehensive audits and user testing, our platform provides the support you need to enhance your website's accessibility. Join the accessibility revolution with AccessCheck and create inclusive digital experiences for all.",
          code: "https://github.com/Amrit199/accessinor_as",
          demo: "https://accessinor-as.vercel.app/",
        },
        {
          img: miljø,
          name: "Miljø",
          link: "/Miljø",
          desc1:
            "Welcome to Miljø Renholdtjenester AS, your premier destination for top-notch cleaning services tailored to meet the needs of shopping centers, offices, schools, kindergartens, stores, clinics, and more. With Miljø Renholdtjenester, maintaining a pristine environment has never been easier. Our user-friendly website allows you to schedule services anytime, ensuring convenience and flexibility to suit your busy schedule. Experience the difference with Miljø Renholdtjenester and let us bring a touch of sparkle to your space.",
          code: "https://github.com/Amrit199/cleaning_website",
          demo: "https://cleaning-website-beta.vercel.app/",
        },
        {
          img: momo,
          name: "MOMO",
          link: "/Momo",
          desc1:
            "Craving convenience and delicious meals delivered right to your doorstep? Look no further than MOMO, your go-to online food service platform. MOMO offers a seamless ordering experience, allowing you to browse a mouthwatering selection of dishes and explore their full descriptions with just a few clicks. From tantalizing appetizers to hearty mains and decadent desserts, MOMO has something for every craving. Order now and indulge in culinary delights from the comfort of your home with MOMO.",
          code: "https://github.com/Amrit199/momohub",
          demo: "https://momohub.vercel.app/",
        },
        {
          img: webstudio,
          name: "WebStudio",
          link: "/Webstudio",
          desc1:
            "Elevate your online presence with WebStudio, your all-in-one hub for web development, design services, and outsourcing solutions. Whether you're a small business or a large enterprise, WebStudio is here to cater to your digital needs. Our platform offers a seamless experience, allowing you to access our services anytime, anywhere. From creating stunning websites to outsourcing your development projects, WebStudio is your trusted partner in achieving online success. Explore our offerings today and let WebStudio bring your digital vision to life.",
          code: "https://github.com/Amrit199/webstudio",
          demo: "https://webstudio-liard.vercel.app/",
        },
      ],
    },
    {
      id: "mobile",
      name: "Mobile",
      projects: [
        {
          img: gallery,
          name: "ImageGallery",
          link: "/Gallery",
          desc1:
            "Welcome to ImageGallery app, where the perfect image or video is just a click away. Whether you're seeking inspiration for a project, blog, or simply looking to enhance your digital content, ImageGallery has you covered. Our vast collection of high-quality images and videos is curated to meet all your creative needs. With seamless navigation and easy download options, finding and saving your favorites has never been easier. Explore ImageGallery today and unlock a world of visual possibilities.",
          code: "https://github.com/Amrit199/Gallery",
          demo: "https://gallery-image-react-tailwind.vercel.app/",
        },
        {
          img: weather,
          name: "TodaysWeather",
          link: "/Weather",
          desc1:
            "TodaysWeather has you covered. With our user-friendly platform, you can access current and future weather information anytime, anywhere. Say goodbye to unexpected weather surprises and hello to seamless planning with TodaysWeather. Visit us now and take control of your day with confidence.",
          code: "https://github.com/Amrit199/weather-app-react-tailwind",
          demo: "https://weather-app-react-tailwind-lf9w.vercel.app/",
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
      link: "/",
    },
    {
      icon: MdEmail,
      name: "EMAIL",
      color: "c71610",
      link: "/",
    },
  ],

  projects: [
    {
      name: "Receel",
      title: "Receel AS",
      intro:
        "Introducing solar panel and equipments e-website, built using of NextJS, Tailwind, stripe and Sanity.io. This website is designed to provide an interactive and visually pleasing experience for users.",
      img: receel,
      desc1:
        "Receel is a suppliers of solar panel and its necessary equipements such as inverter, battery, regulator, etc. This online store has been carefully designed to provide products informations effectively and efficiently to the customers.",
      desc2: "",
      code: "https://github.com/Amrit199/receel",
      demo: "https://receel.no/",
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
          img: sanity,
          alt: "Sanity",
        },
      ],
    },
    {
      name: "AccessiNor",
      title: "AccessiNor AS",
      intro:
        "Introducing web accessibility checker website, built using of NextJS, Tailwind, TypeScript and Sanity. This website is designed to provide an interactive and visually pleasing experience for users.",
      img: accessiNor,
      desc1:
        "AccessiNor is a Startups company which offers, a comprehensive web accessibility checker. This innovative product has been carefully designed to assist website owners and developers in ensuring compliance with both web accessibility standards and the stringent regulations set by the Norwegian government. Web accessibility checker goes beyond standard compliance checks by incorporating user experience and design considerations, with the ultimate aim of making the web more inclusive for all users",
      desc2: "",
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
      name: "Miljø",
      title: "Miljø Renholdstjenester AS",
      intro:
        "Introducing web accessibility checker website, built using of NextJS, Tailwind, TypeScript and Sanity. This website is designed to provide an interactive and visually pleasing experience for users.",
      img: miljø,
      desc1:
        "Miljø Renholdtjenester AS a cleaning company located in center of Oslo. Primary focus of this company is to provide high quality cleaning solutions and adaptable expertise that covers a wide range of commercial environments. Service offers in various locations including busy shopping malls, health clinics, restaurants, canteens, offices and shops.",
      desc2: "",
      code: "https://github.com/Amrit199/cleaning_website",
      demo: "https://cleaning-website-beta.vercel.app/",
      technologies: [
        {
          img: next,
          alt: "NextJS",
        },
        {
          img: tailwind,
          alt: "Tailwind CSS",
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

  about: {
    title: "About myself",
    parag1:
      "I am deeply passionate about creating digital solutions that streamline user access to information. My work ethic is characterized by strong self-motivation, attention to detail, effective communication, and problem-solving skills. I actively seek opportunities to share my knowledge and collaborate towards achieving common objectives.",
    parag2:
      "I hold a Master's degree in Universal Design of ICT and a Bachelor's degree in Information Management System. Additionally, I have undertaken various personal projects to further solidify my foundation in this field.",
  },

  works: [
    {
      year: "May 2023 - Present",
      company: "AccessiNor AS",
      role: "Frontend Developer",
      location: "Oslo, Norway",
      responsibility:
        "Web developement, Visual Design, E-commerce developement, CMS, Project Management, Responsive web design",
      skills:
        "Nextjs, Tailwind CSS, Sanity, Nodejs, Expressjs, TypeScript, MUI",
    },
    {
      year: "March 2016 - March 2017",
      company: "Ultrabyte International Pvt. Ltd",
      role: "Junior Frontend Developer",
      location: "Kathmandu, Nepal",
      responsibility: "Responsive web design, web design, web development",
      skills: "HTML, CSS, JavaScript, Reactjs",
    },
  ],

  educations: [
    {
      degree: "Master's Degree in Universal Design of ICT",
      year: "August 2017 - August 2019",
      location: "Oslo, Norway",
      university: "Oslo Metropolitan University",
    },
    {
      degree: "Bachelor's Degree in Information Management",
      year: "March 2010 - March 2014",
      location: "Kathmandu, Nepal",
      university: "AWES - Institute of Management Studies",
    },
  ],

  languages: [
    {
      title: "Nepali",
      level: "Excellent skills, mother tongue",
    },
    {
      title: "English",
      level: "Professional working proficiency both written and oral",
    },
    {
      title: "Hindi",
      level: "Professional working proficiency both written and oral",
    },
    {
      title: "Bokmål Norsk",
      level: "Limited working proficiency, completed A1 and A2",
    },
  ],
};
