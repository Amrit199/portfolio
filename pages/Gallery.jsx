import Image from "next/image";
import React from "react";
import gallery from "../public/assets/projects/gallery.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import firebase from "../public/assets/skills/firebase.png";
import pixabay from "../public/assets/projects/pixabay.png";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const Gallery = () => {
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
            <h1>Image Gallery</h1>
            <p>
              Introducing image gallery app, built using the latest technologies
              of React, Tailwind, firebase and Pixabay API. With this app, users
              can easily search and browse through a wide variety of beautiful
              images.
            </p>
          </div>
          {/* project image */}
          <Link href="https://gallery-image-react-tailwind.vercel.app/">
            <Image
              src={gallery}
              alt="gallery"
              className=" cursor-pointer transition-all border-4 border-white hover:border-black hover:border-4 active:border-green-600"
            />
          </Link>
          {/* A brief description and technologies */}
          <div className=" w-full flex flex-col gap-4">
            <h2>The Brief</h2>
            <div className="flex flex-col gap-3">
              <p>
                This app is designed with a clean, minimalistic layout using the
                popular CSS framework, Tailwind, making it easy for users to
                navigate and find the perfect image for their needs.
              </p>
              <p>
                The powerful Pixabay API provides access to millions of
                high-quality images, so users can find the exact image they're
                looking for. Firebase is used for the app's back-end, providing
                a secure and reliable way to login and create their own account.
              </p>
              <p>
                React is used for the app's front-end development, ensuring fast
                and smooth performance, even with large amounts of data. This
                app is perfect for designers, photographers, or anyone in need
                of high-quality images for their projects. With a wide range of
                categories and a user-friendly interface, finding the perfect
                image has never been easier.
              </p>
              <div className="flex items-center justify-center gap-6 py-4">
                <Link href="https://github.com/Amrit199/Gallery">
                  <button className=" bg-black text-white px-4 transition-all hover:scale-110 hover:bg-black/80 font-bold">
                    Code
                  </button>
                </Link>
                <Link href="https://gallery-image-react-tailwind.vercel.app/">
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
                  src={firebase}
                  alt="firebase"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={pixabay}
                  alt="pixabay"
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

export default Gallery;
