import React from 'react'
import gallery from '../public/assets/projects/gallery.png'
import momo from '../public/assets/projects/momo.png'
import weather from '../public/assets/projects/weather.png'
import webstudio from '../public/assets/projects/webstudio.png'
import ProjectCard from '../components/ProjectCard'

export const porjectsImg = [
  {
    img: gallery,
    name: "Image Gallery",
    link: "/Gallery",
  },
  {
    img: momo,
    name: "MOMO",
    link: "/Momo",
  },
  {
    img: weather,
    name: "Today's Weather",
    link: "/Weather",
  },
  {
    img: webstudio,
    name: "Web Studio",
    link: "/Webstudio",
  },
]

const Projects = () => {
  return (
    <div id='projects' className='w-full h-full pt-24'>
      <h2 className='text-center my-4'>PROJECTS</h2>
      <div className='w-[80%] mx-auto bg-slate-900 p-8 flex items-center justify-center gap-8 flex-wrap'>
          {porjectsImg.map((item) => (
            <ProjectCard item={item} />
          ))}
      </div>
    </div>
  )
}

export default Projects
