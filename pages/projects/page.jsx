import React from "react";
import { Tab } from "@headlessui/react";

import ProjectCard from "../../components/ProjectCard";
import { Data } from "../../data";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Projects = () => {
  return (
    <div id="Projects" className="w-full h-full pt-20 md:py-16">
      <h1 className="text-center">PROJECTS</h1>
      <Tab.Group>
        <Tab.List className="w-full md:w-[80%] mx-auto flex items-center justify-center rounded-xl gap-2 py-6">
          {" "}
          {Data.projectsImg.map((category) => (
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
          {Data.projectsImg.map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "w-full md:w-[95%] h-full mx-auto rounded-2xl shadow-2xl px-6 py-16 lg:py-20 bg-white flex flex-col md:flex-row items-center justify-center gap-14 flex-wrap"
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
