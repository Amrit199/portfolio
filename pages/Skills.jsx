import React from "react";
import bootstrap from "../public/assets/skills/bootstrap.png";
import css from "../public/assets/skills/css.png";
import html from "../public/assets/skills/html.png";
import github from "../public/assets/skills/github.png";
import firebase from "../public/assets/skills/firebase.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import redux from "../public/assets/skills/redux.png";
import sass from "../public/assets/skills/sass.png";
import nodejs from "../public/assets/skills/nodejs.png";
import expressjs from "../public/assets/skills/expressjs.png";
import tailwind from "../public/assets/skills/tailwind.png";

import SkillCard from "../components/SkillCard";
import { AnimatePresence, motion } from "framer-motion";

const logos1 = [
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
];

const logos2 = [
  {
    img: bootstrap,
    name: "Bootstrap",
  },
  {
    img: tailwind,
    name: "Tailwind",
  },
  {
    img: sass,
    name: "SASS",
  },
  {
    img: redux,
    name: "Redux",
  },
  {
    img: expressjs,
    name: "ExpressJS",
  },
  {
    img: firebase,
    name: "Firebase",
  },
];

const Skills = () => {
  return (
    <AnimatePresence>
      <div id="skills" className="w-full h-full pt-16 overflow-hidden">
        <h2 className="text-center my-4">SKILLS</h2>
        <div className="w-full h-full items-center lg:pt-10 pb-6 justify-between flex lg:flex-col">
          <motion.div
            className="w-full flex flex-col lg:flex-row items-center justify-center gap-6"
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 3 }}
          >
            {logos1.map((logo) => (
              <SkillCard data={logo} />
            ))}
          </motion.div>
          <motion.div
            className="w-full lg:my-14 flex flex-col lg:flex-row items-center justify-center gap-6"
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            transition={{ duration: 3 }}
          >
            {logos2.map((logo) => (
              <SkillCard data={logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Skills;
