import React from "react";
import SkillCard from "../components/SkillCard";
import { AnimatePresence } from "framer-motion";
import { Data } from "../data";


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
