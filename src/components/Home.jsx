import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <h1>Achraf Bentaher</h1>
      <p>Python Programmer & Backend Developer.</p>
      <p> Python developper of automation API's at Société Générale.</p>
      <ul className="socials-list">
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
      <blockquote>
        <p>Learning never exhausts the mind.</p>
        <cite>Leonardo Davinci</cite>
      </blockquote>
    </section>
  );
};

export default Home;
