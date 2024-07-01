import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const XpContainer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <div className="xpsection">
      <article id="xp1" className="xpcontainer">
        <h1 className="xpcontainer__title">
          Anonymization of personal data existing inside thousands of user
          emails using Google's Transformer and BERT models.
        </h1>
        <cite>Crédit Agricole bank</cite>
        <div className="xpcontainer__description">
          <h1 className="xpcontainer__description__title">Main tasks:</h1>
          <div className="xpcontainer__description__values">
            <p className="main_p">Data cleaning</p>
            <p className="main_p">Data preprocessing</p>
            <p className="main_p">Conception and developement of the model</p>
            <p className="main_p">Measuring performance</p>
            <p className="main_p">Post-processing and performance boosting</p>
          </div>
        </div>
        <div className="xpcontainer__description">
          <h1 className="xpcontainer__description__title">Technologies :</h1>
          <div className="xpcontainer__description__values">
            <p className="tech_p">python (pandas, numpy, etc)</p>
            <p className="tech_p">BERT models</p>
          </div>
        </div>
        <div className="xpcontainer__description">
          <h1 className="xpcontainer__description__title">Environment :</h1>
          <div className="xpcontainer__description__values">
            <p className="env_p">pycharm</p>
            <p className="env_p">conda</p>
          </div>
        </div>
      </article>
      <article className="xpcontainer">
        <h1 className="xpcontainer__title">
          Automation of banking network workflows using python APIs
        </h1>
        <cite>Société Générale bank</cite>

        <div id="xp2" className="xpcontainer__description">
          <h1 className="xpcontainer__description__title">Main tasks:</h1>
          <div className="xpcontainer__description__values">
            <p className="main_p">Analysis of client needs</p>
            <p className="main_p">Development & maintenance of python Apis </p>
            <p className="main_p">Development of React js front</p>
            <p className="main_p">
              Continuous integration and continuous delivery/deployment
            </p>
            <p className="main_p">Client support</p>
          </div>
        </div>
        <div className="xpcontainer__description">
          <h1 className="xpcontainer__description__title">Technologies :</h1>
          <div className="xpcontainer__description__values">
            <p className="tech_p">python (Flask, SQLAlchemy, etc)</p>
            <p className="tech_p">React, CSS, Html</p>
            <p className="tech_p">Postgresql database</p>
            <p className="tech_p">Jenkins</p>
            <p className="tech_p">Docker</p>
          </div>
        </div>
        <div className="xpcontainer__description">
          <h1 className="xpcontainer__description__title">Environment :</h1>
          <div className="xpcontainer__description__values">
            <p className="env_p">VS Code</p>
            <p className="env_p">Github</p>
          </div>
        </div>
      </article>
    </div>
  );
};
