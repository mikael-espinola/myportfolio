import React from "react";

import { Item, Link, List, NavBar } from "./style";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

function Contacts() {
  return (
    <NavBar>
      <List>
        <Item>
          <Link target="_blank" href="https://github.com/mikael-espinola">
            {<FaGithub color="black" title="github" />}
          </Link>
        </Item>
        <Item>
          <Link target="_blank" href="https://linkedin.com/in/mikaelespinola/">
            {<FaLinkedin color="blue" title="linkedin" />}
          </Link>
        </Item>
        <Item>
          <Link href="mailto:mikaelespinolaa@gmail.com">
            {<SiGmail color="#bd1c1c" title="gmail" />}
          </Link>
        </Item>
        <Item>
          <Link target="_blank" href="https://wa.me/5584998995683">
            {<FaWhatsapp color="green" title="whatsapp" />}
          </Link>
        </Item>
        <Item>
          <Link
            download={"CV_Mikael_Espinola"}
            href="https://drive.google.com/uc?export=download&id=1c_yaGantdaVfzAuoA0dsB8eu-qirXESY"
          >
            {<FaFileDownload color="gray" title="Résumé / CV" />}
          </Link>
        </Item>
      </List>
    </NavBar>
  );
}

export default Contacts;
