import React from "react";
import "./about.css";
import myimg from "../../web image/formalPhoto.JPG";

const About = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div id="about-Contain" className="bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 mt-[70px] mb-[50px]  sm:flex sm:flex-col lg:flex lg:flex-row ">
          <div id="imgDiv" className="w-[100%] flex justify-center my-[30px] ">
            <div
              id="formalImg"
              className="sm:w-[280px] sm:h-[350px] flex justify-center lg:w-[250px] lg:h-[320px]"
            >
              <img
                className="sm:w-[280px] sm:h-[350px] lg:w-[250px] lg:h-[320px]"
                src={myimg}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center mx-[20px]">
            <div className="my-[20px]">
              <h1
                id="about-intro"
                className="text-[#3eefe0b1] text-[20px] font-medium relative"
              >
                Introduction
              </h1>
              <h1
                className="text-[white] text-[28px] font-bold
             underline decoration-wavy py-[10px] decoration-gray-400  underline-offset-8"
              >
                Myself
              </h1>
              <p className="mt-[5px] text-gray-400 pt-[20px]">
                I'm a skilled Web Application developer with experience in
                Javascript & expertise in frameworks like{" "}
                <span className="font-bold text-[16px] text-gray-400">
                  React, Node.js, Express.js & MongoDB (MERN)
                </span>
                , along with I'm a{" "}
                <span className="font-bold text-[16px] text-gray-400">
                  Python (Django)
                </span>{" "}
                developer. I have quick self learning skills. Collaborate with
                clients to create efficient, scalable & user-friendly solution
                that solve real-world problems. let's work together to bring
                ideas to life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
