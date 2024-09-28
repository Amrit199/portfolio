import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence, motion } from "framer-motion";

const SkillCarousel = ({ skills }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex px-6 py-4 flex-wrap items-center justify-center">
      {skills.map((skill, index) => (
        <div key={index} className="p-4">
          <div className="flex flex-col items-center justify-center">
            <AnimatePresence>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: "circInOut" }}
                className="p-2 shadow-md shadow-gray-500 cursor-pointer transition-transform hover:scale-110 rounded-xl"
              >
                <Image
                  width={400}
                  height={400}
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 mb-2"
                />
              </motion.div>
            </AnimatePresence>
            <p className="text-center text-lg font-semibold">{skill.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCarousel;
