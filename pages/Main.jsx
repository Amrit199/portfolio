import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.jpg";
import { socialicons } from "../pages/Contact";
import Socialcontacts from "../components/Socialcontacts";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen">
      <div className=" w-full h-full p-4 text-center flex items-center justify-between">
        <div className="w-full">
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#0077B5]">Amrit Tamang</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive web applications and websites that are visually pleasing.
          </p>
          {/* scoial contact icons */}
          <div className="w-full flex items-center justify-center gap-4 relative">
            {socialicons.map((item, index) => (
              <Socialcontacts item={item} key={index}/>
            ))}
            {/* <div
              className="p-3 shadow-xl shadow-black/30 rounded-full cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setTip(!tip)}
              onMouseLeave={() => setTip(!tip)}
            >
              <p
                className={
                  tip
                    ? "absolute top-11 bg-white p-1 rounded-xl text-black"
                    : "hidden"
                }
              >
                linkedIn
              </p>
              <BsLinkedin size={20} />
            </div>
            <div
              className="p-3 shadow-xl shadow-black/30 rounded-full cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setTip1(!tip1)}
              onMouseLeave={() => setTip1(!tip1)}
            >
              <p
                className={
                  tip1
                    ? "absolute top-11 bg-white p-1 rounded-xl text-black"
                    : "hidden"
                }
              >
                GitHub
              </p>
              <BsGithub size={20} />
            </div>
            <div
              className="p-3 shadow-xl shadow-black/30 rounded-full cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setTip2(!tip2)}
              onMouseLeave={() => setTip2(!tip2)}
            >
              <p
                className={
                  tip2
                    ? "absolute top-11 bg-white p-1 rounded-xl text-black"
                    : "hidden"
                }
              >
                Email
              </p>
              <MdEmail size={20} />
            </div>
            <div
              className="p-3 shadow-xl shadow-black/30 rounded-full cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setTip3(!tip3)}
              onMouseLeave={() => setTip3(!tip3)}
            >
              <p
                className={
                  tip3
                    ? "absolute top-11 bg-white p-1 rounded-xl text-black"
                    : "hidden"
                }
              >
                Resume
              </p>
              <HiDocumentText size={20} />
            </div> */}
          </div>
        </div>
        <div className="hidden w-full lg:block">
          <Image src={logo} alt="User" className="max-w-lg rounded-full p-6 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Main;
