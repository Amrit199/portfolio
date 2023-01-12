import Image from "next/image";
import React, { useState } from "react";

const ProjectCard = ({ item }) => {
  const [view, setView] = useState(false);
  const handleView = () => {
    setView(!view);
  };
  return (
    <div
      className="relative transition-transform hover:scale-110"
      onMouseEnter={handleView}
      onMouseLeave={handleView}
    >
      <div
        className={
          view
            ? "absolute text-center top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white bg-black/80 p-4 rounded-xl"
            : "hidden"
        }
      >
        <h2 className=" text-xl pb-2">{item.name}</h2>
        <button>see more</button>
      </div>
      {/* <h1 className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] text-white bg-black/80 p-4 rounded-xl'>{item.name}</h1> */}
      <Image src={item.img} alt={item.name} className="w-96" />
    </div>
  );
};

export default ProjectCard;
