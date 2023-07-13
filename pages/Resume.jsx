import React from "react";
import Navbar from "../components/Navbar";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Resume = () => {
  return (
    <div id="Resume" className=" w-full h-full pt-20">
      <h1 className=" text-center pb-4">Resume</h1>
      <div className="w-[90%] mx-auto h-full px-1 py-4 lg:px-10 shadow-2xl shadow-gray-700 flex flex-col gap-4 rounded-lg">
        {/* Name and icons */}
        <div className="w-full p-1 bg-white flex items-center justify-between">
          <h2>Amrit Tamang</h2>
          <div className="flex items-center justify-between gap-3">
            <BsLinkedin
              size={30}
              color="0077B5"
              className=" shadow-xl shadow-black/30 rounded-full cursor-pointer transition-transform hover:scale-125"
            />
            <BsGithub
              size={30}
              color="171515"
              className=" shadow-xl shadow-black/30 rounded-full cursor-pointer transition-transform hover:scale-125"
            />
          </div>
        </div>
        {/* profile description */}
        <div className=" w-full p-1 flex flex-col gap-3 text-center">
          <h3>FRONT-END DEVELOPER</h3>
          <p>
            Passionate front-end developer with a master&apos;s degree in
            computer science. Skilled in developing modern web applications and
            websites with years of experience. Capable of learning new
            technologies and solving critical problems. Able to work well under
            pressure and a good team player with a positive attitude.
          </p>
        </div>
        {/* experience */}
        <div className=" w-full p-1 flex flex-col gap-1">
          <h3 className="text-center">EXPERIENCE</h3>
          <div className="w-full bg-white p-1 flex items-center justify-between">
            <h4>Junior Frontend Developer</h4>
            <p>March 2016 - March 2017</p>
          </div>
          <p>Ultra Byte International, Kathmandu, Nepal</p>
          <ul className=" text-start list-disc list-inside leading-6">
            <li>
              Built 10+ fully responsive websites from scratch using HTML, CSS,
              and Javascript.
            </li>
            <li>Optimized images and codes for a better user experience.</li>
            <li>
              Worked with a team of 8+ developers with agile methodology to
              boost productivity and teamwork.
            </li>
            <li>
              Collaborated with designers to build new features of own company
              website
            </li>
            <li>
              Participated with the senior developer to review codes and fix
              bugs in existing codes.
            </li>
          </ul>
        </div>
        {/* education */}
        <div className=" w-full p-1 flex flex-col gap-1">
          <h3 className="text-center">EDUCATION</h3>
          <div className="w-full flex flex-col md:flex-row justify-between">
            <h4 className="bg-white p-1">
              Master's Degree in Universal Design of ICT
            </h4>
            <p>August 2017 - August 2019</p>
          </div>
          <p>Oslo Metropolitan University, Oslo, Norway</p>
          <div className="w-full flex flex-col md:flex-row justify-between">
            <h4 className=" bg-white p-1">
              Bachelor's Degree in Information Management
            </h4>
            <p>March 2010 - March 2014</p>
          </div>
          <p>AWES - Institute of Management Studies, Kathmandu, Nepal</p>
        </div>
        {/* language skills */}
        <div className=" w-full p-1 flex flex-col gap-1">
          <h3 className=" text-center">LANGUAGE SKILLS</h3>
          <ul className=" text-start list-disc list-inside leading-6">
            <li>
              <span className="font-bold">English:</span> Professional working
              proficiency both written and oral
            </li>
            <li>
              <span className="font-bold">Nepali:</span> Excellent skills,
              mother tongue
            </li>
            <li>
              <span className="font-bold">Hindi:</span> Professional working
              proficiency both written and oral
            </li>
            <li>
              <span className="font-bold">Bokmål Norsk:</span> Limited working
              proficiency, completed A1 and A2 from Oslo Metropolitan university
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
