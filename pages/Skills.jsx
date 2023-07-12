import React from "react";
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
import SkillCard from "../components/SkillCard";
import { AnimatePresence, motion } from "framer-motion";
import { Data } from "./data";

// const logos1 = [
//   {
//     img: html,
//     name: "HTML5",
//   },
//   {
//     img: css,
//     name: "CSS3",
//   },
//   {
//     img: javascript,
//     name: "JavaScript",
//   },
//   {
//     img: react,
//     name: "React",
//   },
//   {
//     img: nodejs,
//     name: "NodeJS",
//   },
//   {
//     img: github,
//     name: "GitHub",
//   },
// ];

// const logos2 = [
//   {
//     img: material,
//     name: "Material UI",
//   },
//   {
//     img: tailwind,
//     name: "Tailwind",
//   },
//   {
//     img: figma,
//     name: "Figma",
//   },
//   {
//     img: redux,
//     name: "Redux",
//   },
//   {
//     img: next,
//     name: "NextJS",
//   },
//   {
//     img: firebase,
//     name: "Firebase",
//   },
// ];

const Skills = () => {
  return (
    <AnimatePresence>
      <div id="Skills" className="w-full h-full pt-20 md:py-28 overflow-hidden">
        <h1 className="text-center">SKILLS</h1>
        <div className="w-full md:w-[85%] lg:w-[70%] mx-auto px-6 py-6 md:py-14 h-full items-center justify-between grid grid-cols-3 lg:grid-cols-6 gap-8">
          {Data.skills.map((skill, index) => (
            <SkillCard data={skill} key={index} />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Skills;
