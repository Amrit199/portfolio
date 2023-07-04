import Image from "next/image";
import React from "react";
import accessiNor from "../public/assets/projects/accessiNor.png";
import nextjs from "../public/assets/skills/next-js.png";
import tailwind from "../public/assets/skills/tailwind.png";
import typescript from "../public/assets/skills/typescript.png";
import sanity from "../public/assets/skills/sanity.png";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const Weather = () => {
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
            <h1>AccessiNor AS</h1>
            <p>
              Introducing web accessibility checker website, built using of
              NextJS, Tailwind, TypeScript and Sanity. This website is designed
              to provide an interactive and visually pleasing experience for
              users.
            </p>
          </div>
          {/* project image */}
          <div className="w-full overflow-hidden">
            <Link href="https://accessinor-as.vercel.app/">
              <Image
                src={accessiNor}
                alt="momo"
                className=" cursor-pointer transition-all hover:scale-110 duration-300 active:border-green-600"
              />
            </Link>
          </div>
          {/* A brief description and technologies */}
          <div className=" w-full flex flex-col gap-4">
            <h2>The Brief</h2>
            <div className="flex flex-col gap-3">
              <p>
                This app is designed with a clean, responsive layout using the
                Tailwind, making it easy for users to navigate.
              </p>
              <p>
                The Web Accessibility Checker is a comprehensive solution that
                automates the process of checking website accessibility. It
                offers a range of features that make it easier for users to
                identify and address potential accessibility issues. Leveraging
                the power of Next.js, TypeScript, Tailwind CSS, and Sanity, this
                tool provides a seamless and intuitive experience for users.
              </p>
              <div className="flex items-center justify-center gap-6 py-4">
                <Link href="https://github.com/Amrit199/accessinor_as">
                  <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                    Code
                  </button>
                </Link>
                <Link href="https://accessinor-as.vercel.app/">
                  <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                    Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3>Technologies</h3>
              <div className="flex items-center gap-4">
                <Image
                  src={nextjs}
                  title="NextJS"
                  alt="NextJS"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={tailwind}
                  title="tailwind"
                  alt="tailwind"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={typescript}
                  title="typescript"
                  alt="typescript"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={sanity}
                  title="sanity"
                  alt="sanity"
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

export default Weather;
