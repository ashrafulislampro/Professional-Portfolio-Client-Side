import React, { useEffect, useState } from "react";
import "./Project.css";
import { projectData } from "./ProjectData";
import ProjectDetails from "./ProjectDetails";
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
const Project = () => {
  const [fakeData, setFakeData] = useState([]);
  useEffect(() => {
    setFakeData(projectData);
  }, []);
  return (
    <section id="project" className="project_section">
      <div className="project_container">
        <h2 className="heading_text text-center">My Project</h2>
        <p className="text-center">
          I am creating these projects with myself
        </p>
        <div className="heading_separator">
          <div className="separator_line"></div>
          <div className="separator_blob">
            <div></div>
          </div>
        </div>
        <div className="container py-5 mt-5">
          <Swiper
            breakpoints={{
              360:{
                width: 360,
                slidesPerView: 1
              },
              375:{
                width: 375,
                slidesPerView: 1
              },
              810:{
                width: 810,
                slidesPerView: 2,
              },
              910:{
                width: 910,
                slidesPerView: 3
              },
              1300: {
                width: 1300,
                slidesPerView: 4
              }
            }}
            modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={4}
            loop={Infinity}
            centeredSlides={true}
            autoplay={{
              delay:1000,
              disableOnInteraction: false
            }}
            effect='coverflow'
            grabCursor= {true}
            effectCoverflow={{
              rotate: 50,
              stretch: 0, 
              depth: 100, 
              modifier: 1, 
              slideShadows: true
            }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="row">
              {fakeData.map((data) => (
                <SwiperSlide key={data.id}>
                  <ProjectDetails data={data}></ProjectDetails>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
