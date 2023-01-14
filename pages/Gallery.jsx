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
          <div className="w-full relative">
            <div className=" absolute transform top-1/2 translate-y-[-50%] left-10 bg-white/90 p-3 rounded-xl">
              <h1>Image Gallery</h1>
              <div className=" flex items-center gap-4">
                <Image src={react} alt="react" className=" w-12" />
                <Image src={tailwind} alt="tailwind" className=" w-12" />
                <Image src={firebase} alt="firebase" className=" w-12" />
              </div>
            </div>
            <div>
              <Image src={gallery} alt="gallery" className="bg-black/90"/>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              doloribus, explicabo sint eaque aliquam numquam veniam modi, vero,
              ducimus quibusdam provident dolorum laudantium minima natus
              inventore quaerat eum porro quae.
            </div>
            <div className="text-center">
              <h3>Technologies</h3>
              <Image src={react} alt="react" className=" w-20 mx-auto" />
              <Image src={tailwind} alt="tailwind" className=" w-20 mx-auto" />
              <Image src={firebase} alt="firebase" className=" w-20 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
