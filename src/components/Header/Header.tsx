import React, { useEffect, useRef, useState } from "react";
import { Container, Item, List, Nav, Title } from "./style";
import { useSelector } from "react-redux";
import { currentRef } from "../redux/headerSlice";

function Header() {
  const [clickedOn, setClickOn] = useState<number>(1);
  const [scrollY, setScrollY] = useState<number>();
  const [showTitle, setShowTitle] = useState(true);
  const isRef = useSelector(currentRef);

  useEffect(() => {
    const handleScroll = () => {
      const valueY = window.scrollY;
      setScrollY(valueY);
      valueY > 25 ? setShowTitle(false) : setShowTitle(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleHomeRef = (key: number) => {
    isRef.homeRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setClickOn(key);
  };
  const handleProjectsRef = (key: number) => {
    isRef.ProjectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setClickOn(key);
  };
  const handleFooterRef = (key: number) => {
    isRef.footerRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setClickOn(key);
  };

  return (
    <Container>
      {showTitle && <Title>Mikael Espínola</Title>}

      <Nav>
        <List>
          <Item
            key={1}
            active={(clickedOn === 1).toString()}
            onClick={() => handleHomeRef(1)}
          >
            Home
          </Item>
          <Item
            key={2}
            active={(clickedOn === 2).toString()}
            onClick={() => handleProjectsRef(2)}
          >
            Projects
          </Item>
          <Item
            key={3}
            active={(clickedOn === 3).toString()}
            onClick={() => handleFooterRef(3)}
          >
            Contacts
          </Item>
        </List>
      </Nav>
    </Container>
  );
}

export default Header;
