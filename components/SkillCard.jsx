import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const SkillCard = ({ data }) => {
  return (
    <AnimatePresence>
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: "circInOut" }}
        className="p-2 shadow-xl shadow-gray-500 cursor-pointer transition-transform hover:scale-110 rounded-xl"
        key={data.id}
      >
        <Image
          title={data.name}
          src={data.img}
          alt={data.name}
          className="w-full"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillCard;
