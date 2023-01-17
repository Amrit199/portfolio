import React from "react";
import gallery from "../public/assets/projects/gallery.png";
import momo from "../public/assets/projects/momo.png";
import weather from "../public/assets/projects/weather.png";
import webstudio from "../public/assets/projects/webstudio.png";
import ProjectCard from "../components/ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

export const porjectsImg = [
  {
    img: gallery,
    name: "Image Gallery",
    link: "/Gallery",
  },
  {
    img: momo,
    name: "MOMO",
    link: "/Momo",
  },
  {
    img: weather,
    name: "Today's Weather",
    link: "/Weather",
  },
  {
    img: webstudio,
    name: "Web Studio",
    link: "/Webstudio",
  },
];

const Projects = () => {
  return (
    <AnimatePresence>
      <div id="projects" className="w-full h-full pt-16">
        <h2 className="text-center my-4">PROJECTS</h2>
        <div className="w-[90%] mx-auto bg-white p-8 flex items-center justify-center gap-14 flex-wrap">
          {porjectsImg.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: 0.5 }}
              key={index}
            >
              <ProjectCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Projects;
