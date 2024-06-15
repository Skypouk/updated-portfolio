import React from "react";
import "./Experience.css";

const experience = () => {
  return (
    <section id="xp" className="xp-section">
      <article className="xp">
        <h1 className="desc-xp">
          Anonymization of personal data in a real corpus of thousands of email
          for a bank using google's Transformer and BERT models.
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
            <p>Measure of performances</p>
          </li>
          <li>
            <p>Data postprocessing to enhance the perfomance</p>
          </li>
        </ul>
        <div className="tech-row">
          <ul className="tech-col">
            <li>
              <h1 className="tech-title">Technologies :</h1>
            </li>
            <li>
              <p>python (pandas, numpy)</p>
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
            <p>Development of python Apis </p>
          </li>
          <li>
            <p>Development of React js front</p>
          </li>
          <li>
            <p>Conception and developement of the model</p>
          </li>
          <li>
            <p>Measure of performances</p>
          </li>
          <li>
            <p>Data postprocessing to enhance the perfomance</p>
          </li>
        </ul>
        <div className="tech-row">
          <ul className="tech-col">
            <li>
              <h1 className="tech-title">Technologies :</h1>
            </li>
            <li>
              <p>python (pandas, numpy)</p>
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
    </section>
  );
};

export default experience;
