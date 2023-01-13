import React from "react";
import Navbar from "../components/Navbar";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Resume = () => {
  return (
    <div className=" w-full h-full">
      <Navbar />
      <div className=" w-full h-full pt-24 px-6">
        <h2 className=" text-center my-4">Resume</h2>
        <div className="w-[80%] h-full p-6 lg:px-10 mx-auto my-5 shadow-2xl shadow-gray-700 flex flex-col gap-4">
          {/* Name and icons */}
          <div className="w-full p-3 bg-green-100 flex items-center justify-between">
            <h1>Amrit Tamang</h1>
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
          <div className=" w-full p-3 flex flex-col gap-3 text-center">
            <h3>
              PROVEN LEADERSHIP | WEB DEVELOPMENT | COMPLEX PROBLEM SOLVING
            </h3>
            <p>
              Analytical, innovative, and motivated web development professional
              with experience in customer service, team leadership, and
              organizational effectiveness in fast-paced and challenging
              environments. Adept at developing strategies and driving
              streamlined operations. Diverse analytical skills, team
              collaboration, and relationship building. Consummate professional,
              and motivated leader, with solid interpersonal abilities and
              complex problem-solving skills. Effective and proven track record
              of critical thinking, idea generation, and optimizing
              efficiencies.
            </p>
          </div>
          {/* experience */}
          <div className=" w-full p-3 flex flex-col gap-1">
            <h2 className="text-2xl text-center">EXPERIENCE</h2>
            <div className="w-full bg-green-100 flex items-center justify-between">
              <h3>Junior Frontend Developer</h3>
              <p>March 2016 - March 2017</p>
            </div>
            <p>Ultra Byte International, Kathmandu, Nepal</p>
            <ul className=" text-start list-disc list-inside leading-6">
              <li>
                Built 10+ fully responsive websites from scratch using HTML,
                CSS, and Javascript.
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
          <div className=" w-full p-3 flex flex-col gap-1">
            <h2 className="text-2xl text-center">EDUCATION</h2>
            <div className="w-full flex flex-col md:flex-row justify-between">
              <h3 className="bg-green-100">
                Master's Degree in Universal Design of ICT
              </h3>
              <p>August 2017 - August 2019</p>
            </div>
            <p>Oslo Metropolitan University, Oslo, Norway</p>
            <h3>Grade: C</h3>
            <div className="w-full flex flex-col md:flex-row justify-between">
              <h3 className=" bg-green-100">
                Bachelor's Degree in Information Management
              </h3>
              <p>March 2010 - March 2014</p>
            </div>
            <p>AWES - Institute of Management Studies, Kathmandu, Nepal</p>
            <h3>Grade: B</h3>
          </div>
          {/* language skills */}
          <div className=" w-full p-3 flex flex-col gap-1">
            <h2 className="text-2xl text-center">LANGUAGE SKILLS</h2>
            <ul className=" text-start list-disc list-inside leading-6">
              <li>
                <span className="font-bold">English:</span> Professional working
                proficiency both written and oral
              </li>
              <li>
                <span className="font-bold">Nepali:</span> P Excellent skills, mother tongue
              </li>
              <li>
                <span className="font-bold">Hindi:</span> Professional working proficiency both written and oral
              </li>
              <li>
                <span className="font-bold">Bokmål Norsk:</span> Limited working proficiency, completed A1 and A2 from Oslo Metropolitan university
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
