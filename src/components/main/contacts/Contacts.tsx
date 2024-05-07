import React from "react";

import { Item, Link, List, NavBar } from "./style";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

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
            target="_blank"
            href="https://drive.google.com/file/d/1PvINJ3d2KnvGCsueh61q0uyvFqsGaAj8/view?usp=sharing"
          >
            {<IoDocument color="gray" title="Résumé" />}
          </Link>
        </Item>
      </List>
    </NavBar>
  );
}

export default Contacts;
