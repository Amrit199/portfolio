import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import gallery from "../public/assets/projects/gallery.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import firebase from "../public/assets/skills/firebase.png";

const Momo = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-full h-full pt-24 px-5 pb-7 font font-playfair bg-black">
        <div className=" w-full h-full my-4 p-5 shadow-lg shadow-white bg-white flex flex-col gap-4">
          <div className=" w-full text-center flex flex-col gap-4">
            <h1>Image Gallery</h1>
            <p>
              A restaurant website built using the latest technologies of React
              and Tailwind. Fast, responsive and modern design where it's easy
              to navigte. Visually pleasing with the use of Tailwind's clean and
              minimalistic design.
            </p>
          </div>
          <Image src={gallery} alt="gallery" />
          <div className="w-[60%] mx-auto flex items-center justify-between">
            <div>
              <p>
                Built a fully responsive restaurant website using react and
                tailwind CSS with optimized images and codes for better
                performance. Interactive UI components such as menu items,
                images, and wines.
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
  )
}

export default Momo
