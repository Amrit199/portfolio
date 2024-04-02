import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const ProjectSwiper = ({ item }) => {
  if (item === null || !item.projects) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="w-full h-full"
      >
        {item?.projects.map((post, id) => (
          <SwiperSlide key={id} className="flex items-center justify-center gap-10">
            <ProjectCard item={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSwiper;
