import React from "react";
import img_py from "../assets/python.png";
import img_k8s from "../assets/k8s.png";
import img_docker from "../assets/docker.png";
import img_css from "../assets/css.png";
import img_react from "../assets/react.png";
import img_algo from "../assets/algo.png";
import img_git from "../assets/github.png";
import img_api from "../assets/api.png";
import img_html from "../assets/html.png";

import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <p className="skills-text">
        Throughout both my personal projects and my professional experiences, I
        had the opportunity to learn, manipulate and master the following
        languages, tools and technologies.
      </p>
      <div className="row">
        <div className="column">
          <img src={img_html} alt="html" />
          <img src={img_docker} alt="docker" />
          <img src={img_py} alt="python" />
        </div>
        <div className="column">
          <img src={img_react} alt="react js" />
          <img src={img_git} alt="github" />
          <img src={img_api} alt="api" />
        </div>
        <div className="column">
          <img src={img_css} alt="css" />
          <img src={img_k8s} alt="kubernetes" />
          <img src={img_algo} alt="problem solving" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
