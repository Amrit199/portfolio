import Image from "next/image";
import React from "react";

const SkillCard = ({ data }) => {
  return (
    <div
      className="p-2 shadow-xl shadow-gray-500 cursor-pointer transition-transform hover:scale-110"
      key={data.id}
    >
      <Image
        title={data.name}
        src={data.img}
        alt={data.name}
        className="w-full"
      />
    </div>
  );
};

export default SkillCard;
