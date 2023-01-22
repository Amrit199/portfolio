import Image from "next/image";
import React from "react";
import weather from "../public/assets/projects/weather.png";
import react from "../public/assets/skills/react.png";
import tailwind from "../public/assets/skills/tailwind.png";
import geodb from "../public/assets/projects/geodb.png";
import openweather from "../public/assets/projects/openweather.png";
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
            <h1>Today's Weather</h1>
            <p>
              Introducing today's weather app, built using of React, Tailwind,
              Openweather API and GeoDB API. With this app, users can easily
              search and browse any citis current weather conditions and one
              week weather forcast.
            </p>
          </div>
          {/* project image */}
          <Link href="https://gallery-react-tailwind-firebase.vercel.app/">
            <Image
              src={weather}
              alt="gallery"
              className=" cursor-pointer transition-all border-4 border-white hover:border-black hover:border-4 active:border-green-600"
            />
          </Link>
          {/* A brief description and technologies */}
          <div className=" w-full flex flex-col gap-4">
            <h2>The Brief</h2>
            <div className="flex flex-col gap-3">
              <p>
                This app is designed with a clean, responsive layout using the
                popular CSS framework, Tailwind, making it easy for users to
                navigate.
              </p>
              <p>
                It utilizes the OpenWeather API to retrieve current weather data
                for a given location, and the GeoDB API to determine the user's
                location. The app displays the current temperature, humidity,
                and weather conditions, as well as a one week forecast.
              </p>
              <p>
                It also includes a search feature that allows the user to search
                for weather data by city name. The app is designed to be
                lightweight and fast, providing users with accurate and
                up-to-date weather information.
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
                  src={tailwind}
                  alt="tailwind"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={geodb}
                  alt="firebase"
                  className=" w-14 cursor-pointer transition-transform hover:scale-125"
                />
                <Image
                  src={openweather}
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

export default Weather;
