import React, { useEffect, useRef } from "react";
import {
  Container,
  Description,
  Card,
  List,
  Techs,
  TechsContainer,
  Title,
  TitleContainer,
  DescriptionContainer,
  Button,
  SpaceP,
  LinkContainer,
  Flip,
  FaceCard,
  BackCard,
  CardTitleContainer,
  CardTitle,
  TechTitle,
} from "./style";
import Data from "../../Hooks/data/Data";
import { useDispatch, useSelector } from "react-redux";
import { getProjectsRef } from "../../redux/headerSlice";
import { currentLang } from "../../redux/langSlice";

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
            Data.map((item) => (
              <Card key={item.id}>
                <Flip className="flip">
                  <FaceCard $image_url={`${item.image}`}>
                    <CardTitleContainer>
                      <CardTitle>{item.name}</CardTitle>
                    </CardTitleContainer>
                  </FaceCard>
                  <BackCard>
                    <DescriptionContainer>
                      <Description>
                        {lang === "EN"
                          ? item.description_EN
                          : item.description_PT}
                      </Description>
                    </DescriptionContainer>
                    <LinkContainer>
                      <Button
                        href={item.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Deploy
                      </Button>
                      <Button
                        href={item.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </Button>
                    </LinkContainer>
                    <TechsContainer>
                      <TechTitle>Techs: </TechTitle>
                      {item.techs.map((tech, index) => (
                        <Techs key={index} color="">
                          {tech}
                        </Techs>
                      ))}
                    </TechsContainer>
                  </BackCard>
                </Flip>
              </Card>
            ))}
        </List>
      </Container>
    </>
  );
}

export default Projects;
