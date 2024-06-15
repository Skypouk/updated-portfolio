import React from "react";
import "./Experience.css";

const experience = () => {
  return (
    <section id="xp" className="xp-section">
      <article className="xp">
        <h1 className="desc-xp">
          Anonymization of personal data existing inside thousands of user
          emails using Google's Transformer and BERT models.
        </h1>
        <cite>Crédit Agricole bank</cite>
        <ul className="task-list">
          <li>
            <h1 className="task-title">Main tasks:</h1>
          </li>
          <li>
            <p>Data cleaning</p>
          </li>
          <li>
            <p>Data preprocessing</p>
          </li>
          <li>
            <p>Conception and developement of the model</p>
          </li>
          <li>
            <p>Measuring performance</p>
          </li>
          <li>
            <p>Post-processing and performance boosting</p>
          </li>
        </ul>
        <div className="tech-row">
          <ul className="tech-col">
            <li>
              <h1 className="tech-title">Technologies :</h1>
            </li>
            <li>
              <p>python (pandas, numpy, etc)</p>
              <p>BERT models</p>
            </li>
          </ul>
          <ul className="env-col">
            <li>
              <h1 className="env-title">Environment :</h1>
            </li>
            <li>
              <p>pycharm</p>
              <p>conda</p>
            </li>
          </ul>
        </div>
      </article>
      <article className="xp">
        <h1 className="desc-xp">
          Automation of banking network workflows using python APIs
        </h1>
        <cite>Société Générale bank</cite>
        <ul className="task-list">
          <li>
            <h1 className="task-title">Main tasks:</h1>
          </li>
          <li>
            <p>Analysis of client needs</p>
          </li>
          <li>
            <p>Development & maintenance of python Apis </p>
          </li>
          <li>
            <p>Development of React js front</p>
          </li>
          <li>
            <p>Continuous integration and continuous delivery/deployment</p>
          </li>
          <li>
            <p>Client support</p>
          </li>
        </ul>
        <div className="tech-row">
          <ul className="tech-col">
            <li>
              <h1 className="tech-title">Technologies :</h1>
            </li>
            <li>
              <p>python (Flask, SQLAlchemy, etc)</p>
              <p>Postgresql database</p>
              <p>React, CSS, Html</p>
              <p>Jenkins</p>
              <p>Docker</p>
            </li>
          </ul>
          <ul className="env-col">
            <li>
              <h1 className="env-title">Environment :</h1>
            </li>
            <li>
              <p>VS Code</p>
              <p>Github</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default experience;
