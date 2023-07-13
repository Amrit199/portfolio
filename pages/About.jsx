import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import about from "../public/assets/about.jpg";

const About = () => {
  return (
    <AnimatePresence>
      <div id="About" className="w-full h-full pt-20 overflow-hidden">
        <h1 className="text-center">ABOUT</h1>
        <div className="w-full h-full p-6 flex items-center justify-center">
          <motion.div
            className=" hidden lg:block lg:w-full"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            // whileInView={{ x: "0" }}
            // exit={{ x: "0"}}
          >
            <Image
              src={about}
              alt="about"
              className=" hidden lg:block p-6 rounded-full max-w-lg mx-auto object-cover object-center"
            />
          </motion.div>
          <motion.div
            className="w-full text-center flex flex-col gap-4"
            initial={{ x: "100%" }}
            transition={{ duration: 2 }}
            animate={{ x: 0 }}
            // whileInView={{ x: "0" }}
          >
            <h2>Who I Am</h2>
            <p className="text-base md:text-xl">
              I am passionate for creating visually stunning and highly
              functional web applications and websites. With a strong
              understanding of HTML, CSS and JavaScript, I have experience
              working with modern front-end frameworks and libraries such as
              React and Next.js. I am dedicated to staying up-to-date with the
              latest web developement trends and technologies, and always eager
              to learn new skills and improve my craft. I am highly motivated
              self-strater with a strong attention to detail and problem-solving
              skills. I am able to work well under pressure and a good team
              player with a positive attitude. I have a excellent communication
              skills and always willing to share my knowledge and collaborate
              with others to achieve a common goal.
            </p>
            <p className="text-base md:text-xl">
              I have a Master&#39;s degree in Universal Design of ICT and Bachelor&#39;s
              degree in Information Management System. I have a experience of
              working as a junior front-end developer for a year and worked on
              several personal projects to boost solid foundation in this field.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default About;
