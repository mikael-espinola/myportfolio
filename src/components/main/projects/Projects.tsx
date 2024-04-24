import React, { useEffect, useRef, useState } from "react";
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
  ButtonContainer,
  Button,
  ProjectContainer,
  SpaceP,
} from "./style";
import Data from "../../Hooks/data/Data";
import DefaultImg from "../../assets/images/Profile.png";
import { useDispatch } from "react-redux";
import { getProjectsRef } from "../../redux/headerSlice";

interface ItemData {
  name: string;
  description: string;
  image: string;
  techs: string[];
  html_url: string;
  homepage: string;
  id: number;
}

interface Props {
  Data: ItemData[];
}

function Projects() {
  const [isLink, setIsLink] = useState<boolean>();
  const projectsRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsRef(projectsRef));
  }, []);

  return (
    <>
      <SpaceP ref={projectsRef}></SpaceP>
      <Container>
        <TitleContainer>
          <Title>Projects</Title>
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
                  <Title>{item.name.toUpperCase()}</Title>
                  <DescriptionContainer>
                    <Description>{item.description}</Description>
                  </DescriptionContainer>
                </ProjectContainer>
                <ButtonContainer>
                  <Button
                    link={item.html_url === "" ? "false" : "true"}
                    href={item.html_url}
                    target="_blank"
                  >
                    Repo
                  </Button>
                  <Button
                    link={item.homepage === "" ? "false" : "true"}
                    href={item.homepage}
                    target="_blank"
                  >
                    Live
                  </Button>
                </ButtonContainer>
                <TechsContainer>
                  <Techs color="1">Techs: </Techs>
                  {item.techs.map((tech) => (
                    <Techs color="">{tech}</Techs>
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
