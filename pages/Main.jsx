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
            transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
            className="w-full z-20"
          >
            <h1 className="py-4 text-gray-700">
              Hi, I&#39;m <span className="text-[#0077B5]">Amrit Tamang</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
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
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit="hidden"
            transition={{ duration: 2, ease: "easeInOut", type: "tween" }}
            className="h-full hidden w-full lg:flex lg:items-center relative"
          >
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu blur-2xl sm:top-[8rem]"
              aria-hidden="true"
            >
              <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[-15deg] bg-[#a0cfe8] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
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
