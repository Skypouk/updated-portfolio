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
export const SkillContainer = () => {
  return (
    <section className="skillsection">
      <div className="skillcontainer">
        <h1 className="skillcontainer__title">Skill Set</h1>
        <p className="skillcontainer__text">
          Through my personal projects and professional experiences, I have had
          the opportunity to learn, manipulate, and master a variety of
          languages, tools, and technologies.
        </p>
        <div className="skillcontainer__skillset">
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
        </div>
      </div>
    </section>
  );
};
