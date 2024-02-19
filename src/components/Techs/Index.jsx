import React, { useState } from "react";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

import * as s from "./styles";

function Techs({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev == 0 ? children.length - 1 : prev - 1));
  };

  return (
    <s.Container>
      <s.CarouselContent
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <li>
          <a title="JavaScript">
            <IoLogoJavascript color="#cd8b08" />
            <span>JavaScript</span>
          </a>
        </li>
        <li>
          <a title="React.JS">
            <FaReact color="#207de0" />
            <span>React.JS</span>
          </a>
        </li>
        <li>
          <a title="HTML">
            <FaHtml5 color="#e96a09" />
            <span>HTML</span>
          </a>
        </li>
        <li>
          <a title="CSS">
            <FaCss3Alt color="#207de0" />
            <span>CSS</span>
          </a>
        </li>
        <li>
          <a title="Sass">
            <FaSass color="#f141ec" />
            <span>Sass</span>
          </a>
        </li>
        <li>
          <a title="Git">
            <FaGit color="#e5662bb6" />
            <span>Git</span>
          </a>
        </li>
        <li>
          <a title="Bootstrap">
            <FaBootstrap color="#b459ed" />
            <span>Bootstrap</span>
          </a>
        </li>
        <li>
          <a title="Styled Components">
            <SiStyledcomponents color="#ff8afb" />
            <span>Styled Components</span>
          </a>
        </li>
      </s.CarouselContent>
    </s.Container>
  );
}

export default Techs;
