import React from "react";
import { Data } from "../data";
import Socialcontacts from "../components/Socialcontacts";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { MdSchool } from "react-icons/md";

const Resume = () => {
  return (
    <div
      id="Resume"
      className=" w-full lg:w-[80%] mx-auto lg:text-lg h-full py-20"
    >
      <h1 className=" text-center pb-4">Experience and Education</h1>
      <div className="w-[95%] mx-auto h-full px-1 py-4 lg:py-8 lg:px-10 shadow-2xl shadow-gray-700 flex flex-col gap-4 rounded-lg">
        {/* Name and icons */}
        <div className="w-full p-3 lg:p-6 bg-white flex items-center justify-center rounded-xl gap-6">
          {Data.socialicons.map((icon, id) => (
            <Socialcontacts key={id} item={icon} />
          ))}
        </div>
        <VerticalTimeline>
          {Data.works.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#1f1f1f" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.year}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">{item.role}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.company}
              </h4>
              <p>{item.location}</p>
              <p>{item.responsibility}</p>
              <p>{item.skills}</p>
            </VerticalTimelineElement>
          ))}

          {Data.educations.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(233, 30, 99)",
              }}
              date={item.year}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">{item.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
              <p>{item.university}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Resume;
