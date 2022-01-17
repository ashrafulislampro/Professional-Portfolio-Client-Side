import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch(" https://ancient-plateau-08173.herokuapp.com/reviews")
      .then((res) => res.json())
      .then(data=>{
        if(data.length > 0){
          toggleSpinner();
          setReviewData(data)
        }
      })
  }, []);
  const toggleSpinner = () =>{
    const spinner = document.getElementById('spinner_buffer');
      spinner.classList.toggle('d-none');
  }
  return (
    <section id="testimonial" className="testimonial_section">
      <div className="testimonial_parent">
        <div className="testimonial_heading text-center">
          <h2 className="heading_text">Testimonial</h2>
          <p className="text-secondary">What My Client Say About Me.</p>
          <div className="heading_separator">
            <div className="separator_line"></div>
            <div className="separator_blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div id="spinner_buffer" className="d-done d-flex justify-content-center">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <Swiper
            breakpoints={{
              375: {
                width: 375,
                slidesPerView: 1,
              },
              780: {
                width: 780,
                slidesPerView: 2,
              },
              920: {
                width: 920,
                slidesPerView: 3,
                spaceBetween: 20
              },
              1300:{
                width: 1300,
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
              {reviewData.map((review) => 
                <SwiperSlide key={review._id}><TestimonialCard review={review}></TestimonialCard></SwiperSlide>
              )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;