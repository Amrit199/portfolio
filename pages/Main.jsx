import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import Socialcontacts from "../components/Socialcontacts";
import { Data } from "../data";
import ParticlesContainer from "../components/ParticlesContainer";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  return (
    <AnimatePresence>
      <div
        id="/"
        className="w-full h-full md:h-screen flex items-center justify-center"
      >
        <div className=" w-full h-full py-32 px-4 md:py-3 md:px-3 text-center flex flex-col items-center justify-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit="hidden"
            transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
            className="h-full hidden w-full lg:flex lg:items-center relative"
          >
            <Image
              src={logo}
              alt="User"
              className="rounded-full w-[16rem] mx-auto"
            />
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
            className="w-full z-20"
          >
            <Image
              src={logo}
              alt="User"
              className="rounded-full w-[20rem] mx-auto"
            />
            <h1 className="py-4 text-gray-700">
              Hi, I&#39;m <span className="text-[#0077B5]">Amrit Tamang</span>
            </h1>
            <p className="py-4 text-gray-800 sm:max-w-[70%] m-auto text-lg">
              I&#39;m Self-taught developer with expertise in front-end
              development. My passion is to create innovative and user-friendly
              digital solutions.
            </p>
            {/* scoial contact icons */}
            <div className="w-full flex items-center justify-center gap-4 relative">
              {Data.socialicons.map((item, index) => (
                <Socialcontacts item={item} key={index} />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full absolute right-0 bottom-0">
          {/* bg can be added here */}
          {/* <ParticlesContainer /> */}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Main;
