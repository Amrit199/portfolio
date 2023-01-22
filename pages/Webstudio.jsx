import Image from "next/image";
import React from "react";
import webstudio from "../public/assets/projects/webstudio.png";
import react from "../public/assets/skills/react.png";
import sass from "../public/assets/projects/sass.png";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const Webstudio = () => {
  return (
    <div>
      <div className=" w-full h-full pt-5 px-5 md:px-8 lg:px-10 xl:px-14 pb-7 font font-playfair bg-slate-200">
      <div className=" w-[80%] mx-auto">
        <Link href="/">
          <button className=" flex items-center gap-2 transition-all hover:scale-110 hover:bg-slate-300">
            <BiArrowBack size={25} />
            <p>Back</p>
          </button>
        </Link>
        </div>
        <div className=" w-[80%] mx-auto h-full my-4 p-5 md:p-8 lg:p-10 xl:p-14 shadow-lg shadow-gray-700 bg-white flex flex-col gap-4">
          {/* heading and intro */}
          <div className=" w-full text-center flex flex-col gap-4">
            <h1>Web Studio</h1>
            <p>
              Introducing webstudio a web development agency specializes in
              creating stunning, high performance websites built using React, a
              popular JavaScript library for building user interfaces, and SASS,
              a powerful CSS preprocessor, to design and develop a sleek,
              responsive website.
            </p>
          </div>
          {/* project image */}
          <Link href="https://gallery-react-tailwind-firebase.vercel.app/">
            <Image
              src={webstudio}
              alt="gallery"
              className=" cursor-pointer transition-all border-4 border-white hover:border-black hover:border-4 active:border-green-600"
            />
          </Link>
          {/* A brief description and technologies */}
          <div className=" w-full flex flex-col gap-4">
            <h2>The Brief</h2>
            <div className="flex flex-col gap-3">
              <p>
                The website features a modern, minimalist design that is
                optimized for both desktop and mobile devices. It is built using
                React components, allowing for a highly modular and easily
                maintainable codebase. The use of SASS allows for efficient and
                organized management of the website's CSS, including the use of
                variables, mixins, and nested selectors.
              </p>
              <p>
                Additionally, the website includes various interactive elements
                such as forms, sliders, and modals, all built using React and
                SASS.
              </p>
              <p>
                Overall, the website is an excellent example of how React and
                SASS can be used together to create a visually stunning and
                highly functional website.
              </p>
              <div className="flex items-center justify-center gap-6 py-4">
                <Link href="https://github.com/Amrit199/gallery_react_tailwind_firebase">
                  <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                    Code
                  </button>
                </Link>
                <Link href="https://gallery-react-tailwind-firebase.vercel.app/">
                  <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                    Demo
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <h3>Technologies</h3>
              <div className="flex items-center gap-4">
                <Image
                  src={react}
                  alt="react"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={sass}
                  alt="sass"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webstudio;
