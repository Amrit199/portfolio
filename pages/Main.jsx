import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo.jpg";
import Socialcontacts from "../components/Socialcontacts";
import { Data } from "../data";
import ParticlesContainer from "../components/ParticlesContainer";

const Main = () => {
  return (
    <div id="/" className="w-full h-screen">
      <div className=" w-full h-full p-4 text-center flex items-center justify-between">
        <div className="w-full">
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#0077B5]">Amrit Tamang</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I&#39;m focused on building responsive web applications and websites
            that are visually pleasing.
          </p>
          {/* scoial contact icons */}
          <div className="w-full flex items-center justify-center gap-4 relative">
            {Data.socialicons.map((item, index) => (
              <Socialcontacts item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="hidden w-full lg:block">
          <Image
            src={logo}
            alt="User"
            className="max-w-lg rounded-full p-6 mx-auto"
          />
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg can be added here */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Main;
