import React from "react";
import html from "../../web image/html.png";
import css from "../../web image/css.png";
import tailwind from "../../web image/tailwind.png";
import bootstrap from "../../web image/bootstrap.png";
import javascript from "../../web image/javascript.png";
import react from "../../web image/reactjs.png";
import python from "../../web image/python.png";
import django from "../../web image/django.png";
import restapi from "../../web image/restApi.png";
import api from "../../web image/api.png";
import motion from "../../web image/motion.png";
import redux from "../../web image/redux.png";
import scss from "../../web image/scss.png";
import node from "../../web image/nodejs.png";
import express from "../../web image/expressjs.png";
import mongodb from "../../web image/mongodb.png";
import mongoose from "../../web image/mongoose.png";
import github from "../../web image/githubevo.png";
import netlify from "../../web image/netly.png";
import vercel from "../../web image/vercel.png";
import render from "../../web image/renderr.png";
import vscode from "../../web image/vscode.png";
import git from "../../web image/git.png";
import gpt from "../../web image/gpt.png";
import chrome from "../../web image/chrome.png";
import mongocompass from "../../web image/mongodbCompass.png";
import postman from "../../web image/postman.png";
import sql from "../../web image/sql.png";
import sqlite from "../../web image/sqlite.png";

const Skills = () => {
  return (
    <div className="w-[100%]">
      <h2 className="skills">Skills</h2>
      <div className="languages_container">
        <div className="language ">
          <img src={html} alt="" />
          <p>HTML</p>
        </div>
        <div className="language ">
          <img src={css} alt="" />
          <p>CSS</p>
        </div>
        <div className="language ">
          <img src={javascript} alt="" />
          <p>Javascript</p>
        </div>
        <div className="language ">
          <img src={tailwind} alt="" />
          <p>Tailwind CSS</p>
        </div>
        <div className="language ">
          <img src={bootstrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="language ">
          <img src={react} alt="" />
          <p>React js</p>
        </div>
        <div className="language motion">
          <img src={motion} alt="" />
          <p>
            Framer <br />
            Motion
          </p>
        </div>

        <div className="language ">
          <img src={python} alt="" />
          <p>Python</p>
        </div>

        <div className="language ">
          <img src={django} alt="" />
          <p>Django</p>
        </div>

        <div className="language ">
          <img src={restapi} alt="" />
          <p>
            Rest <br />
            framework
          </p>
        </div>

        <div className="language ">
          <img src={redux} alt="" />
          <p>Redux</p>
        </div>
        <div className="language ">
          <img src={scss} alt="" />
          <p>Scss</p>
        </div>
        <div className="language ">
          <img src={node} alt="" />
          <p>Node js</p>
        </div>
        <div className="language ">
          <img src={express} alt="" />
          <p>Express js</p>
        </div>

        <div className="language ">
          <img src={mongodb} alt="" />
          <p>MongoDB</p>
        </div>
        <div className="language ">
          <img src={sql} alt="" />
          <p>SQL</p>
        </div>
        <div className="language ">
          <img src={sqlite} alt="" />
          <p>SQLite</p>
        </div>
        <div className="language ">
          <img src={mongoose} alt="" />
          <p>Mongoose</p>
        </div>
        <div className="language ">
          <img src={api} alt="" />
          <p>Rest API</p>
        </div>
        <div className="language ">
          <img src={github} alt="" />
          <p>GitHub</p>
        </div>
        <div className="language ">
          <img src={netlify} alt="" />
          <p>Netlify</p>
        </div>

        <div className="language ">
          <img src={vercel} alt="" />
          <p>Vercel</p>
        </div>
        <div className="language ">
          <img src={render} alt="" />
          <p>Render</p>
        </div>
      </div>

      {/* tools & software */}
      <div className="tools">
        <div className="tool_headline">
          <div>
            <h1 className="tools_h1">Tools & Software</h1>
          </div>
          <div className="languages_container">
            <div className="language ">
              <img src={vscode} alt="" />
              <p>VS Code</p>
            </div>
            <div className="language ">
              <img src={git} alt="" />
              <p>Git</p>
            </div>
            <div className="language ">
              <img src={gpt} alt="" />
              <p>ChatGPT</p>
            </div>
            <div className="language ">
              <img src={chrome} alt="" />
              <p>Chrome</p>
            </div>
            <div className="language ">
              <img src={mongocompass} alt="" />
              <p>
                MongoDB <br /> Compass
              </p>
            </div>
            <div className="language ">
              <img src={postman} alt="" />
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
