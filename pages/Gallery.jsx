import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import gallery from "../public/assets/projects/gallery.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import firebase from "../public/assets/skills/firebase.png";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-full h-full pt-24 px-5 pb-7">
        <div>
          <div className="w-[60%] mx-auto relative">
            <Image src={gallery} alt="gallery" className="opacity-60" />
            <div className="absolute transform top-1/2 translate-y-[-50%] left-10 bg-white p-3 rounded-xl">
              <h1>Image Gallery</h1>
              <div className=" flex items-center gap-4">
                <Image src={react} alt="react" className=" w-12" />
                <Image src={tailwind} alt="tailwind" className=" w-12" />
                <Image src={firebase} alt="firebase" className=" w-12" />
              </div>
            </div>
          </div>
          <div className="w-[60%] mx-auto flex items-center justify-between">
            <div>
              <p>
              Built a fully responsive restaurant website using react and
              tailwind CSS with optimized images and codes for better
              performance. Interactive UI components such as menu items, images,
              and wines.
              </p>
              <button>Code</button>
              <button>Demo</button>
            </div>
            <div className="text-center flex flex-col gap-4">
              <h3>Technologies</h3>
              <Image src={react} alt="react" className=" w-16 mx-auto" />
              <Image src={tailwind} alt="tailwind" className=" w-16 mx-auto" />
              <Image src={firebase} alt="firebase" className=" w-16 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
