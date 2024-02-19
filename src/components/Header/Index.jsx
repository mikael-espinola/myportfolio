import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import * as s from "./styles";
import MenuMobile from "../MenuMobile/Index";

function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const scrollToTag = (e) => {
    const title = e.target.title;
    const getTag = document.querySelector(`#${title}`);

    switch (title) {
      case "Home":
        return getTag.scrollIntoView({ behavior: "smooth" });
      case "Projects":
        return getTag.scrollIntoView({ behavior: "smooth" });
      case "Contacts":
        return getTag.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="Home">
      <s.Container>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <s.Title>Mikael Espínola</s.Title>
        <s.MenuOptions>
          <li>
            <a title="Home" onClick={(e) => scrollToTag(e)}>
              Home
            </a>
          </li>
          <li>
            <a title="Projects" onClick={(e) => scrollToTag(e)}>
              Projects
            </a>
          </li>
          <li>
            <a title="Contacts" onClick={(e) => scrollToTag(e)}>
              Contact me
            </a>
          </li>
        </s.MenuOptions>
        <s.Burger>
          <RxHamburgerMenu size={22} onClick={() => setMenuIsVisible(true)} />
        </s.Burger>
      </s.Container>
    </div>
  );
}

export default Header;
