import React from "react";
import "./portfolio.css";
import Slider from "../Swiper/Swiper";

const Portfolio = () => {
  return (
    <div
      id="portfolio-contain"
      className=" bg-slate-900 overflow-hidden p-[30px]"
    >
      <div>
        <h1 className="text-[#fff] font-bold text-[30px] text-center py-[20px]">
          Work Experience
        </h1>
      </div>
      <Slider />
    </div>
  );
};

export default Portfolio;
