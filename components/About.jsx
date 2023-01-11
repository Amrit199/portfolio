import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import about from "../public/assets/about.jpg";

const About = () => {
  return (
    <AnimatePresence>
      <div className="w-full h-full lg:h-screen overflow-hidden my-5">
      <div className="w-full h-full p-4 flex items-center justify-center">
        <motion.div 
          className=" hidden w-full lg:block"
          initial={{ x: "-100%" }}
          whileInView={{ x: "0", }}
          transition={{duration: 3}}
          >
          <Image
            src={about}
            alt="about"
            className="p-6 rounded-full max-w-lg mx-auto object-cover object-center"
          />
        </motion.div>
        <motion.div 
          className="w-full text-center flex flex-col gap-4 p-6 lg:p-1"
          initial={{ x: "100%" }}
          whileInView={{ x: "0", }}
          transition={{duration: 3}}
          >
          <h3>ABOUT</h3>
          <h1>Who I Am</h1>
          <p className="text-xl">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="text-xl">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
        </motion.div>
      </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
