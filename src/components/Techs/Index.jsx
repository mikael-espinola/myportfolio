import React, { useState } from "react";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";

import * as s from "./styles";

function Techs() {
  return (
    <s.Container>
      <s.CarouselContent>
        <li>
          <a title="JavaScript">
            <IoLogoJavascript color="#cd8b08" />
            <span>JavaScript</span>
          </a>
        </li>
        <li>
          <a title="TypeScript">
            <SiTypescript color="#0d54a0" />
            <span>TypeScript</span>
          </a>
        </li>
        <li>
          <a title="ReactJS">
            <FaReact color="#207de0" />
            <span>ReactJS</span>
          </a>
        </li>
        <li>
          <a title="Styled Components">
            <SiStyledcomponents color="#ff8afb" />
            <span>Styled Components</span>
          </a>
        </li>
        <li>
          <a title="Sass">
            <FaSass color="#f141ec" />
            <span>Sass</span>
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
          <a title="Python">
            <FaPython color="#fbfd6d" />
            <span>Python</span>
          </a>
        </li>
        <li>
          <a title="MySQL">
            <SiMysql color="#aa6600" />
            <span>MySQL</span>
          </a>
        </li>
        <li>
          <a title="MongoDB">
            <DiMongodb color="#0f421c" />
            <span>MongoDB</span>
          </a>
        </li>
        <li>
          <a title="NodeJS">
            <FaNodeJs color="#037909b6" />
            <span>NodeJS</span>
          </a>
        </li>
        <li>
          <a title="Git">
            <FaGit color="#e5662bb6" />
            <span>Git</span>
          </a>
        </li>
      </s.CarouselContent>
    </s.Container>
  );
}

export default Techs;
