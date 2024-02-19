import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import PicProfile from "../assets/images/Profile.png";

import * as s from "./styles";

function Main() {
  return (
    <>
      <s.Container>
        <s.Profile>
          <s.ProfileContainer>
            <s.Picture src={PicProfile}></s.Picture>
            <s.Name>Mikael Espínola</s.Name>
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
          Hello and welcome!
          <br />
          <br />
          I'm Mikael Espínola, a dedicated Front-End developer who loves
          learning. I'm working to improve my skills with the goal of becoming
          an outstanding Software Engineer.
          <br />
          <br />
          During my journey, I've worked on personal and study projects,
          exploring the possibilities of programming technologies. These
          experiences have taught me a lot, sharpening my technical abilities
          and interpersonal and analytical skills.
          <br />
          <br />
          I'm open to new opportunities and collaborations, and I'm ready to
          take on challenges that help me grow professionally.
          <br />
          <br />
          Feel free to check out my portfolio.
        </s.Introduction>
      </s.Container>
    </>
  );
}

export default Main;
