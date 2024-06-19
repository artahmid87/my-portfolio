import React, { useState } from "react";

// Swiper//
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ServiceData from "./serviceData";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  "
      >
        {ServiceData.map((data) => {
          return (
            <div className="bg-slate-900">
              <SwiperSlide id="slider">
                <div key={data.id} id="expart_list">
                  <div className="export_detail ">
                    <h1 className="p-[10px] font-bold text-[20px] ">
                      {data.title}
                    </h1>
                    <p className="text-gray-500 text-[16px] p-[10px]">
                      {data.label}
                    </p>
                    <ul className="listStyle">
                      <li>{data.list1}</li>
                      <li>{data.list2}</li>
                      <li>{data.list3}</li>
                      <li>{data.list4}</li>
                      <li>{data.list5}</li>
                      <li>{data.list6}</li>
                      <li>{data.list7}</li>
                      <li>{data.list8}</li>
                      <li>{data.list9}</li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};
export default Slider;
