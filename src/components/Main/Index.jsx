import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import PicProfile from "../assets/images/Profile.png";
import { PiHandWaving } from "react-icons/pi";

import * as s from "./styles";

function Main() {
  return (
    <>
      <s.Container>
        <s.Profile>
          <s.ProfileContainer>
            <s.Picture src={PicProfile}></s.Picture>
          </s.ProfileContainer>
          <s.ContactsList>
            <s.ContactItem>
              <a target="_blank" href="https://github.com/mikael-espinola">
                <FaGithub color="black" size={30} />
              </a>
            </s.ContactItem>
            <s.ContactItem>
              <a target="_blank" href="mailto:mikaelespinolaa@gmail.com">
                <SiGmail color="#B22222" size={30} />
              </a>
            </s.ContactItem>
            <s.ContactItem>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mikaelespinola/"
              >
                <FaLinkedin color="#053bb9" size={30} />
              </a>
            </s.ContactItem>
            <s.ContactItem>
              <a target="_blank" href="https://wa.me/5584998995683">
                <FaWhatsapp color="green" size={30} />
              </a>
            </s.ContactItem>
          </s.ContactsList>
        </s.Profile>
        <s.Introduction>
          Hey there!👋🏻
          <br />
          <br />
          I'm Mikael Espínola, a dedicated Front-End developer who's all about
          learning and growing.
          <br />
          My goal? becoming an outstanding Fullstack Software Engineer.
          <br />
          <br />
          Throughout my journey, I've worked on personal and study projects,
          diving into different programming technologies. These experience has
          improved my tech skills but also my ability to work with others and
          think analytically.
          <br />
          <br />
          I'm up for new opportunities and collaborations, ready to tackle
          challenges that push me forward in my career.
          <br />
          <br />
          Feel free to check out my portfolio.
        </s.Introduction>
      </s.Container>
    </>
  );
}

export default Main;
