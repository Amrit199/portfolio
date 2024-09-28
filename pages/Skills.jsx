import React from "react";
import SkillCard from "../components/SkillCard";
import { AnimatePresence, motion } from "framer-motion";
import {
  backendSkills,
  Data,
  designTools,
  frontendSkills,
  languages,
  versionControl,
} from "../data";
import SkillCarousel from "../components/SkillCarousel";

const Skills = () => {
  return (
    <AnimatePresence>
      <div id="Skills" className="w-full h-full ">
        <div className="w-full h-full flex flex-col items-center justify-center py-24 text-center">
          <h1 className="text-3xl font-bold mb-10 text-center">Skills</h1>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Languages
              </h2>
              <SkillCarousel skills={languages} />
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Frontend Frameworks & Libraries
              </h2>
              <SkillCarousel skills={frontendSkills} />
            </section>
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between">
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-center">
                Backend Tools & Databases
              </h2>
              <SkillCarousel skills={backendSkills} />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2 text-center">Design Tools</h2>
              <SkillCarousel skills={designTools} />
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-2 text-center">Version Control</h2>
              <SkillCarousel skills={versionControl} />
            </section>
          </div>
        </div>
        {/* <div className="w-full h-full flex flex-col items-center justify-center py-24 text-center">
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
        </div> */}
      </div>
    </AnimatePresence>
  );
};

export default Skills;
