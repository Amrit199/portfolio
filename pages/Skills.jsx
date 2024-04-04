import React from "react";
import SkillCard from "../components/SkillCard";
import { AnimatePresence, motion } from "framer-motion";
import { Data } from "../data";

const Skills = () => {
  return (
    <AnimatePresence>
      <div id="Skills" className="w-full h-screen ">
        <div className="w-full h-full flex flex-col items-center justify-center py-24 text-center">
          <h1 className="text-center text">SKILLS</h1>
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", type: "tween" }}
            viewport={{ once: true }}
            className="w-full md:w-[85%] lg:w-[70%] mx-auto px-6 py-6 md:py-14 h-full items-center justify-between grid grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {Data.skills.map((skill, index) => (
              <SkillCard data={skill} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Skills;
