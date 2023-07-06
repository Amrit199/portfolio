import React from "react";
import accessiNor from "../public/assets/projects/accessiNor.png";
import gallery from "../public/assets/projects/gallery.png";
import momo from "../public/assets/projects/momo.png";
import weather from "../public/assets/projects/weather.png";
import wordpressportfolio from "../public/assets/projects/wordpressportfolio.png";
import webstudio from "../public/assets/projects/webstudio.png";
import ProjectCard from "../components/ProjectCard";
import { Tab } from "@headlessui/react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const porjectsImg = {
  categories: [
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
          name: "Web Studio",
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
          name: "Image Gallery",
          link: "/Gallery",
        },
        {
          img: weather,
          name: "Today's Weather",
          link: "/Weather",
        },
      ],
    },
    {
      id: "ecommerce",
      name: "E-commerce",
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
          name: "Portfolio Wordpress",
          link: "/Portfolio",
        },
      ],
    },
  ],
};

const Projects = () => {
  return (
    <div id="Projects" className="w-full h-full py-12">
      <h2 className="text-center">PROJECTS</h2>
      <Tab.Group>
        <Tab.List className="w-[80%] mx-auto flex items-center justify-center gap-12 rounded-xl p-4">
          {porjectsImg.categories.map((category) => (
            <Tab
              key={category.name}
              className={({ selected }) =>
                classNames(
                  "rounded-lg py-2 text-sm font-medium",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-gray-600 hover:text-black"
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {porjectsImg.categories.map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "w-[80%] h-full mx-auto rounded-2xl shadow-2xl py-28 bg-white flex items-center justify-center gap-14 flex-wrap"
              )}
            >
              {posts.projects.map((post, id) => (
                <ProjectCard key={id} item={post} />
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Projects;
