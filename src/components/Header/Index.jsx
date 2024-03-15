import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import * as s from "./styles";
import MenuMobile from "../MenuMobile/Index";

function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [borderColor, setBorderColor] = useState("orange");
  const [selectHome, setSelectHome] = useState(false);
  const [selectProjects, setSelectProjects] = useState(false);
  const [selectContacts, setSelectContacts] = useState(false);

  const scrollToTag = (e) => {
    const title = e.target.title;
    const getTag = document.querySelector(`#${title}`);

    const scrollToElement = () => {
      getTag.scrollIntoView({ behavior: "smooth" });
    };

    const setTitleStates = {
      Home: () => {
        scrollToElement();
        setSelectHome(true);
        setSelectProjects(false);
        setSelectContacts(false);
      },
      Projects: () => {
        scrollToElement();
        setSelectProjects(true);
        setSelectHome(false);
        setSelectContacts(false);
      },
      Contacts: () => {
        scrollToElement();
        setSelectContacts(true);
        setSelectProjects(false);
        setSelectHome(false);
      },
    };

    setTitleStates[title]();
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
          <li
            style={
              selectHome
                ? { borderBottom: `1.8px solid ${borderColor}` }
                : { borderBottom: "none" }
            }
          >
            <a title="Home" onClick={(e) => scrollToTag(e)}>
              Home
            </a>
          </li>
          <li
            style={
              selectProjects
                ? { borderBottom: `1.8px solid ${borderColor}` }
                : { borderBottom: "none" }
            }
          >
            <a title="Projects" onClick={(e) => scrollToTag(e)}>
              Projects
            </a>
          </li>
          <li
            style={
              selectContacts
                ? { borderBottom: `1.8px solid ${borderColor}` }
                : { borderBottom: "none" }
            }
          >
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
