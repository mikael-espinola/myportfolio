import React, { useEffect, useRef } from "react";
import { Container, Space } from "./style";
import Profile from "./profile/Profile";
import Techs from "./tecnologies/Techs";
import Projects from "./projects/Projects";
import { useDispatch } from "react-redux";
import { getHomeRef } from "../redux/headerSlice";

function Main() {
  const homeRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeRef(homeRef));
  }, []);

  return (
    <>
      <Space ref={homeRef}></Space>
      <Container>
        <Profile />
        <Techs />
        <Projects />
      </Container>
    </>
  );
}

export default Main;
