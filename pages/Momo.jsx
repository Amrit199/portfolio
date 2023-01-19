import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import momo from "../public/assets/projects/momo.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import framer from "../public/assets/projects/framer.png";
import Link from "next/link";

const Momo = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-full h-full pt-24 px-5 md:px-8 lg:px-10 xl:px-14 pb-7 font font-playfair bg-black">
        <div className=" w-full h-full my-4 p-5 md:p-8 lg:p-10 xl:p-14 shadow-lg shadow-white bg-white flex flex-col gap-4">
          {/* heading and intro */}
          <div className=" w-full text-center flex flex-col gap-4">
            <h1>MOMO Restaurant</h1>
            <p>
              Introducing a restaurant website, built using the latest
              technologies of React, Tailwind, Framer Motion and Redux. This
              website is designed to provide an interactive and visually
              pleasing experience for users.
            </p>
          </div>
          {/* project image */}
          <Link href="https://momohub.vercel.app/">
            <Image
              src={momo}
              alt="momo"
              className=" cursor-pointer transition-all border-4 border-white hover:border-black hover:border-4 active:border-green-600"
            />
          </Link>
          {/* A brief description and technologies */}
          <div className=" w-full flex flex-col gap-4">
            <h2>The Brief</h2>
            <div className="flex flex-col gap-3">
              <p>
                Tailwind is used for the styling, providing a clean and
                minimalistic design, making it easy to navigate the site and
                find the information you're looking for.
              </p>
              <p>
                React is used for the website's front-end development, ensuring
                fast and smooth performance. Redux is used for state management,
                making it easy to handle the dynamic data such as menu items,
                pricing and special offers.
              </p>
              <p>
                Framer Motion is used to add smooth animations throughout the
                website, making it more engaging and interactive for the user.
              </p>
              <div className="flex items-center justify-center gap-6 py-4">
                <Link href="https://github.com/Amrit199/momohub">
                  <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                    Code
                  </button>
                </Link>
                <Link href="https://momohub.vercel.app/">
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
                  src={tailwind}
                  alt="tailwind"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={framer}
                  alt="tailwind"
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

export default Momo;
