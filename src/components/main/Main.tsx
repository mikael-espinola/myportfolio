import React, { useEffect, useRef } from "react";
import { Container } from "./style";
import Profile from "./profile/Profile";
import Techs from "./tecnologies/Techs";
import Projects from "./projects/Projects";
import { refs } from "../redux/refs";

function Main() {
  const homeRef = useRef(null);

  useEffect(() => {
    refs.homeRef = homeRef;
  }, []);

  return (
    <>
      <Container ref={homeRef}>
        <Profile />
        <Techs />
        <Projects />
      </Container>
    </>
  );
}

export default Main;
