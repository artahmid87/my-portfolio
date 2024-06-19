import React from "react";
import "./service.css";
import "../Portfolio/portfolio.css";
import Skills from "./Skills";

const Service = () => {
  return (
    <div id="service-sector" className="bg-white">
      <div
        className="container h-[100%] w-[100%] mx-auto
       px-4  overflow-hidden flex flex-col justify-center 
        "
      >
        <div className="flex justify-center my-[50px] overflow-hidden">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Service;
