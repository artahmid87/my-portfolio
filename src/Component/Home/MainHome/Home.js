import React from "react";
import myImage from "../../../web image/me.png";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import myPdf from "../../../web image/javascript.pdf";
// import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [text] = useTypewriter({
    words: [" AR Tahmid", " Web designer", " Web Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <section className="h-[100dvh] overflow-hidden sm:h-[120dvh] md:h-[100dvh]">
        <div className="w-[100%] h-[100%] flex flex-col  ">
          {/* Home image side */}
          <div className="w-[100%] h-[100%] flex flex-col md:flex md:flex-row md:justify-between sm:h-[100%]">
            <div
              id="image"
              className="bg-gray-600 flex
                     justify-center items-center relative pb-[20px] w-[100%] sm:h-[60%] md:h-[100%]
                     md:z-10 md:w-[50%] "
            >
              <div className="sm:mt-[100px] md:absolute md:right-[-30%] md:mt-[50px]">
                <img
                  id="home-img"
                  className=" sm:w-[400px] sm:h-[600px] lg:w-[500px] lg:h-[700px] "
                  src={myImage}
                  alt=""
                />
              </div>
            </div>

            {/* Home text side */}
            <div className="w-[100%] pb-[20px] bg-[#C9C9C9] md:w-[60%] md:h-[100%] sm:h-[100%] ">
              <div className=" w-[100%] h-[100%] container mx-auto px-4 flex flex-col justify-center items-center">
                <div className="mt-[80px] w-[100%] sm:ml-[0%]  md:ml-[14%] lg:ml-[40%]">
                  <motion.h1
                    className="text-[rgb(72,72,72)] text-[50px] font-bold sm:text-[30px] md:text-[30px] lg:text-[40px]"
                    initial={{ x: -25 }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 1.5,
                      duration: 2,
                      type: "spring",
                      stiffness: 120,
                    }}
                  >
                    Hello!
                  </motion.h1>
                  <motion.h1
                    className="ml-[11px] text-[rgb(72,72,72)] text-[40px] font-bold sm:text-[30px] md:text-[30px] lg:text-[40px]"
                    initial={{ x: -25 }}
                    animate={{ x: -10 }}
                    transition={{
                      delay: 1.5,
                      duration: 2,
                      type: "spring",
                      stiffness: 120,
                    }}
                  >
                    {" "}
                    I'm
                    <span className="font-bold text-[#ff3535] ml-[3px] text-[40px] sm:text-[30px] md:text-[30px] lg:text-[40px]">
                      {text}
                    </span>
                    <span className="text-red-600">
                      <Cursor cursorStyle="|" />
                    </span>
                  </motion.h1>
                </div>

                <div className=" sm:p-[30px] sm:mt-[50px] md:mt-[50px]">
                  <button className="border-[1px] border-gray-500 rounded-xl px-[30px] py-[10px] bg-slate-300">
                    <a
                      className=" text-[rgb(72,72,72)] font-semibold"
                      href={myPdf}
                      download
                    >
                      {" "}
                      {/* Get Resume <FontAwesomeIcon icon={faFileArrowDown} /> */}
                      Get Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
