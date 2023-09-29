import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo.jpg";
import Socialcontacts from "../components/Socialcontacts";
import { Data } from "../data";
import ParticlesContainer from "../components/ParticlesContainer";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  return (
    <AnimatePresence>
      <div id="/" className="w-full h-screen">
        <div className=" w-full h-full text-center flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut", type: 'tween' }}
            className="w-full z-20"
          >
            <h1 className="py-4 text-gray-700">
              Hi, I&#39;m <span className="text-[#0077B5]">Amrit Tamang</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
            <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
              I&#39;m focused on building responsive web applications and
              websites that are visually pleasing.
            </p>
            {/* scoial contact icons */}
            <div className="w-full flex items-center justify-center gap-4 relative">
              {Data.socialicons.map((item, index) => (
                <Socialcontacts item={item} key={index} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit="hidden"
            transition={{ duration: 2, ease: "easeInOut", type: 'tween' }}
            className="h-full hidden w-full lg:flex lg:items-center"
          >
            <Image
              src={logo}
              alt="User"
              className="rounded-full w-[60%] mx-auto"
            />
          </motion.div>
        </div>
        <div className="w-full h-full absolute right-0 bottom-0">
          {/* bg can be added here */}
          <ParticlesContainer />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Main;
