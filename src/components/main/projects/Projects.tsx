import React, { useEffect, useRef } from "react";
import {
  Container,
  Description,
  Image,
  ImageContainer,
  Item,
  List,
  Techs,
  TechsContainer,
  Title,
  TitleContainer,
  DescriptionContainer,
  Button,
  ProjectContainer,
  SpaceP,
  LinkContainer,
} from "./style";
import Data from "../../Hooks/data/Data";
import DefaultImg from "../../assets/images/Profile.png";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsRef } from "../../redux/headerSlice";
import { currentLang } from "../../redux/langSlice";
import { RiShareBoxLine } from "react-icons/ri";

function Projects() {
  const projectsRef = useRef(null);
  const lang = useSelector(currentLang);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsRef(projectsRef));
  }, []);

  return (
    <>
      <SpaceP ref={projectsRef}></SpaceP>
      <Container>
        <TitleContainer>
          <Title>{lang === "EN" ? "Projects" : "Projetos"}</Title>
        </TitleContainer>
        <List>
          {Data &&
            Data.map((item, index) => (
              <Item key={index}>
                <ProjectContainer>
                  <ImageContainer>
                    <Image
                      src={
                        (item.image && require(`../../${item.image}`)) ||
                        DefaultImg
                      }
                      alt="logo"
                    ></Image>
                  </ImageContainer>
                  <Title>
                    {item.name.toUpperCase()}
                    <LinkContainer>
                      <Button href={item.html_url} target="_blank">
                        <RiShareBoxLine />
                      </Button>
                    </LinkContainer>
                  </Title>
                  <DescriptionContainer>
                    <Description>
                      {lang === "EN"
                        ? item.description_EN
                        : item.description_PT}
                    </Description>
                  </DescriptionContainer>
                </ProjectContainer>
                <TechsContainer>
                  <Techs color="1">Techs: </Techs>
                  {item.techs.map((tech, index) => (
                    <Techs key={index} color="">
                      {tech}
                    </Techs>
                  ))}
                </TechsContainer>
              </Item>
            ))}
        </List>
      </Container>
    </>
  );
}

export default Projects;
