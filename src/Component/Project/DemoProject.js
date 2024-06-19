import React from "react";
import "./demoPro.css";
import bloodApp from "../../web image/bloodApp.png";
import github from "../../web image/githubevo.png";

const DemoProject = () => {
  return (
    <>
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        <div id="glassEffect" className="w-[100%] h-[100%]"></div>

        <div className="absolute top-0 w-[100%] h-[100%]">
          <div className="my-[30px] flex px-4 text-[rgba(72,72,72,0.90)]">
            <h1 id="demo-h1" className="text-[22px] font-semibold">
              Complite Projects
            </h1>
          </div>
          <div className="container mx-auto px-4 justify-center w-[100%]">
            <div className="project_contain  ">
              <div id="project_gelary" className=" self-center  bg-green-600">
                <div id="img" className="relative overflow-hidden">
                  <img src={bloodApp} alt="" />
                  <div id="glass">
                    <h1>Helloo</h1>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                  excepturi?
                </div>
              </div>
              <div id="project_gelary" className=" self-center  bg-green-600">
                <div id="img" className="relative overflow-hidden">
                  <img src={bloodApp} alt="" />
                  <div id="glass">
                    <h1>Helloo</h1>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                  excepturi?
                </div>
              </div>
              <div id="project_gelary" className=" self-center  bg-green-600">
                <div id="img" className="relative overflow-hidden">
                  <img src={bloodApp} alt="" />
                  <div id="glass">
                    <div className="flex">
                      <a href="https://github.com/TheARTDeveloper/Blood_app">
                        <img
                          className="w-[50px] h-[50px] rounded-full"
                          src={github}
                          alt=""
                        />
                      </a>

                      <a href="https://blood-mu.vercel.app/">
                        <img
                          className="w-[50px] h-[50px] rounded-full"
                          src={github}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                  excepturi?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoProject;
