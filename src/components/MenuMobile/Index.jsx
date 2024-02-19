import React, { useEffect } from "react";
import { Container } from "./styles";

import { IoIosCloseCircleOutline } from "react-icons/io";

function MenuMobile({ setMenuIsVisible, menuIsVisible }) {
  const scrollToTag = (e) => {
    const title = e.target.title;
    const getTag = document.querySelector(`#${title}`);

    setMenuIsVisible(false);
    switch (title) {
      case "Home":
        return getTag.scrollIntoView({ behavior: "smooth" });
      case "Projects":
        return getTag.scrollIntoView({ behavior: "smooth" });
      case "Contacts":
        return getTag.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <IoIosCloseCircleOutline
        size={45}
        color="#fff"
        onClick={() => setMenuIsVisible(false)}
      />
      <nav>
        <a title="Home" onClick={(e) => scrollToTag(e)}>
          Home
        </a>
        <a title="Projects" onClick={(e) => scrollToTag(e)}>
          Projects
        </a>
        <a title="Contacts" onClick={(e) => scrollToTag(e)}>
          Contact me
        </a>
      </nav>
    </Container>
  );
}

export default MenuMobile;
