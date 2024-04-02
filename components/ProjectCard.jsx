import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ProjectCard = ({ item }) => {
  const [view, setView] = useState(false);
  const handleView = () => {
    setView(!view);
  };
  console.log(item.link);
  return (
    <AnimatePresence>
    {/* <div
      className="relative transition-transform delay-150 ease-in-out hover:scale-110 shadow-xl shadow-gray-500 rounded-xl"
      onMouseEnter={handleView}
      onMouseLeave={handleView}
    >
      <div
        className={
          view
            ? "absolute text-center top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
            : "hidden"
        }
      >
        <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1, ease: "easeInOut"}}
        className="text-white bg-black/80 p-4 lg:p-16 rounded-xl"
        >
        <h2 className=" text-xl pb-2">{item.name}</h2>
        <Link href={`/projects/${item.name}`}>
          <button className="px-3 py-1 text-sm hover:bg-slate-300 active:bg-slate-600">
            see more
          </button>
        </Link>
        </motion.div>
      </div>
      <Image
        src={item.img}
        alt={item.name}
        className="w-[30rem] rounded-xl"
      />
    </div> */}
    <div className=" w-full h-full transition-transform delay-150 ease-in-out hover:scale-110 shadow-xl shadow-gray-500 hover:border-[#0077B5]">
    <Link href={`/projects/${item.name}`}>
    <Image
        src={item.img}
        alt={item.name}
        className="w-[30rem]"
      />
        </Link>
    </div>
    </AnimatePresence>
  );
};

export default ProjectCard;
