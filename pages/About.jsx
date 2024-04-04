import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import about from "../public/assets/about.jpg";
import { Data } from "../data";

const About = () => {
  return (
    <AnimatePresence>
      <div id="About" className="w-full h-full md:h-screen flex items-center justify-center ">
        <div className="w-full h-full py-20 md:py-6 md:p-6 flex items-center justify-center">
          <motion.div
            className="hidden lg:block lg:w-full"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", type: "tween" }}
            viewport={{ once: true }}
          >
            <Image
              src={about}
              alt="about"
              className="hidden lg:block max-w-lg mx-auto object-cover object-center"
              style={{
                clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
              }}
            />
          </motion.div>
          <motion.div
            className="w-full flex flex-col items-center justify-center text-center gap-4"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", type: "tween" }}
            viewport={{ once: true }}
          >
            <h2>{Data.about.title}</h2>
            <p className="text-lg md:text-xl">{Data.about.parag1}</p>
            <p className="text-lg md:text-xl">{Data.about.parag2}</p>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
