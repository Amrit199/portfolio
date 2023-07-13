import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Data } from "../data";
import Socialcontacts from "../components/Socialcontacts";

const Resume = () => {
  return (
    <div
      id="Resume"
      className=" w-full lg:w-[70%] mx-auto lg:text-lg h-full pt-20"
    >
      <h1 className=" text-center pb-4">Resume</h1>
      <div className="w-[90%] mx-auto h-full px-1 py-4 lg:py-8 lg:px-10 shadow-2xl shadow-gray-700 flex flex-col gap-4 rounded-lg">
        {/* Name and icons */}
        <div className="w-full p-1 lg:p-4 bg-white flex items-center justify-between">
          <h2>Amrit Tamang</h2>
          <div className="flex items-center justify-between gap-3">
            {Data.socialicons.map((icon, id) => (
              <Socialcontacts key={id} item={icon} />
            ))}
          </div>
        </div>
        {/* profile description */}
        <div className=" w-full p-1 flex flex-col gap-3 text-center">
          <h3>FRONT-END DEVELOPER</h3>
          <p>{Data.about.parag1}</p>
        </div>
        {/* experience */}
        <div className=" w-full p-1 flex flex-col gap-1">
          <h3 className="text-center">EXPERIENCE</h3>
          <div className="w-full bg-white p-1 flex items-center justify-between">
            <h4>{Data.works.position}</h4>
            <p>
              <span>{Data.works.start}</span>
              <span className="mx-2">to</span>
              <span>{Data.works.end}</span>
            </p>
          </div>
          <p>{Data.works.company}</p>
          <ul className=" text-start list-disc list-inside leading-6">
            {Data.works.responsibilities.map((responsibility, id) => (
              <li key={id}>{responsibility.title}</li>
            ))}
          </ul>
        </div>
        {/* education */}
        <div className=" w-full p-1 flex flex-col gap-1">
          <h3 className="text-center">EDUCATION</h3>
          {Data.educations.map((education, id) => (
            <div key={id}>
              <div className="w-full flex flex-col md:flex-row justify-between">
                <h4 className="bg-white p-1">{education.degree}</h4>
                <p>
                  <span>{education.start}</span>
                  <span className="mx-2">to</span>
                  <span>{education.end}</span>
                </p>
              </div>
              <p>{education.university}</p>
            </div>
          ))}
        </div>
        {/* language skills */}
        <div className=" w-full p-1 flex flex-col gap-1">
          <h3 className=" text-center">LANGUAGE SKILLS</h3>
          <ul className=" text-start list-disc list-inside leading-6">
            {Data.languages.map((language, id) => (
              <li key={id}>
                <span className="font-bold mr-1">{language.title}:</span>
                {language.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
