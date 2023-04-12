import Image from "next/image";
import React from "react";
import wordpressportfolio from "../public/assets/projects/wordpressportfolio.png";
import wordpress from "../public/assets/skills/wordpress.png";
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
            <h1>Portfolio Wordpress</h1>
            <p>
              Introducing my portfolio website, built using the popular CMS
              platform, WordPress. My website is designed to showcase my work
              and skills in a professional, visually appealing and responsive manner.
            </p>
          </div>
          {/* project image */}
          <Link href="https://tamangamrit.com/">
            <Image
              src={wordpressportfolio}
              alt="portfolio"
              className=" cursor-pointer transition-all border-4 border-white hover:border-black hover:border-4 active:border-green-600"
            />
          </Link>
          {/* A brief description and technologies */}
          <div className=" w-full flex flex-col gap-4">
            <h2>The Brief</h2>
            <div className="flex flex-col gap-3">
              <p>
                WordPress provides a user-friendly interface that allows me to
                easily customize the design and layout of my website. I can
                choose from a wide range of templates and themes, and customize
                them to suit my needs. This makes it easy for me to create a
                unique and personalized website that reflects my personal brand.
              </p>
              <p>
                On my portfolio website, you can view my work, read my blog
                posts, and learn more about my skills and experience. WordPress
                provides powerful plugins that allow me to showcase my work in a
                professional and visually appealing way, such as image sliders,
                galleries, and portfolio pages. The platform also provides
                powerful SEO tools, making it easy for me to optimize my website
                for search engines and improve my online visibility. This allows
                me to reach a wider audience and attract more potential clients
                and collaborators.
              </p>
              <p>
                Overall, WordPress has allowed me to create a professional and
                polished portfolio website that showcases my work and skills in
                the best possible way. It's a powerful platform that provides
                all the tools I need to succeed in the competitive world of
                creative industries.
              </p>
              <div className="flex items-center justify-center gap-6 py-4">
                <Link href="#">
                  <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                    Code
                  </button>
                </Link>
                <Link href="https://tamangamrit.com/">
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
                  src={wordpress}
                  alt="react"
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
