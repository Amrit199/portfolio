import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import about from "../public/assets/about.jpg";
import { Data } from "../data";

const About = () => {
  return (
    <AnimatePresence>
      <div id="About" className="w-full h-full pt-20 overflow-hidden">
        <h1 className="text-center">ABOUT</h1>
        <div className="w-full h-full p-6 flex items-center justify-center">
          <motion.div
            className=" hidden lg:block lg:w-full"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", type: 'tween' }}
            viewport={{ once: true }}
          >
            <Image
              src={about}
              alt="about"
              className=" hidden lg:block p-6 rounded-full max-w-lg mx-auto object-cover object-center"
            />
          </motion.div>
          <motion.div
            className="w-full text-center flex flex-col gap-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", type: 'tween' }}
            viewport={{ once: true }}
          >
            <h2>{Data.about.title}</h2>
            <p className="text-base md:text-xl">{Data.about.parag1}</p>
            <p className="text-base md:text-xl">{Data.about.parag2}</p>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
