import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

export const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner__container">
        <h1 className="hero-banner__header">Achraf Bentaher</h1>
        <h3 className="hero-banner__title">Python & Web developer</h3>
        <p className="hero-banner__description">
          Python developer working on automation API's at Société Générale bank
        </p>
        <ul className="hero-banner__socials-list">
          <li>
            <a
              href="https://github.com/Skypouk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abentaher/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/skypouk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
          </li>
        </ul>
        <blockquote className="hero-banner__quote">
          <p>Learning never exhausts the mind.</p>
          <cite>Leonardo Davinci</cite>
        </blockquote>
      </div>
    </div>
  );
};
