import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import * as s from "./styles";

import * as ss from "../Main/styles";

function Footer() {
  return (
    <s.Section id="Contacts">
      <h2>Thank you for your visit! </h2>
      <h3>Let's work together? Get in touch with me: </h3>
      <s.ContactsList>
        <ss.ContactItem>
          <a target="_blank" href="https://github.com/mikael-espinola">
            <FaGithub color="black" size={30} />
          </a>
        </ss.ContactItem>
        <ss.ContactItem>
          <a target="_blank" href="mailto:mikaelespinolaa@gmail.com">
            <SiGmail color="#B22222" size={30} />
          </a>
        </ss.ContactItem>
        <ss.ContactItem>
          <a target="_blank" href="https://www.linkedin.com/in/mikaelespinola/">
            <FaLinkedin color="#053bb9" size={30} />
          </a>
        </ss.ContactItem>
        <ss.ContactItem>
          <a target="_blank" href="https://wa.me/5584998995683">
            <FaWhatsapp color="green" size={30} />
          </a>
        </ss.ContactItem>
      </s.ContactsList>
    </s.Section>
  );
}

export default Footer;
