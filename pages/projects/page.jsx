import React from "react";
import { Tab } from "@headlessui/react";

import ProjectCard from "../../components/ProjectCard";
import { Data } from "../../data";
import ProjectSwiper from "../../components/ProjectSwiper";
import PortfolioScroll from "../../components/PortfolioScroll";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Projects = () => {
  return (
    <div id="Projects" className="w-full h-full pt-20 md:py-16">
      <h1 className="px-9">Explore My Latest Works</h1>
      <Tab.Group>
        <Tab.List className="w-full md:w-[80%] mx-auto flex items-center justify-center rounded-xl gap-2 py-6">
          {" "}
          {Data.projectsImg.map((category) => (
            <Tab
              key={category.name}
              className={({ selected }) =>
                classNames(
                  "rounded-lg py-2 text-lg font-medium",
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
                "w-full md:w-[95%] h-full mx-auto rounded-2xl shadow-2xl p-3 md:p-6 bg-[#1f1f1f] flex flex-col md:flex-row items-center justify-center gap-14 flex-wrap"
              )}
            >
              {/* {posts.projects.map((post, id) => (
                <div key={id}>
                  <ProjectCard key={id} item={post} />
                </div>

              ))} */}
              {/* <ProjectSwiper item={posts}/> */}
              <PortfolioScroll item={posts}/>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Projects;
