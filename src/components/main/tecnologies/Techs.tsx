import React, { useState } from "react";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import {
  Container,
  Button,
  Item,
  List,
  Span,
  ContainerButton,
  ListPlus,
} from "./style";

function Techs() {
  const [showList, setShowList] = useState(false);

  const handleButton = () => {
    setShowList(!showList);
  };

  return (
    <Container>
      <List>
        <Item>
          <IoLogoJavascript color="orange" />
          <Span>JavaScript</Span>
        </Item>
        <Item>
          <SiTypescript color="blue" />
          <Span>TypeScript</Span>
        </Item>
        <Item>
          <FaReact color="blue" />
          <Span>React</Span>
        </Item>
        <Item>
          <SiRedux color="#7906bb" />
          <Span>Redux</Span>
        </Item>
        <Item>
          <SiStyledcomponents color="#c513e8" />
          <Span>Styled-Components</Span>
        </Item>
        <Item>
          <FaSass color="#f80bb5" />
          <Span>SASS</Span>
        </Item>
      </List>
      {showList ? (
        <>
          <ListPlus>
            <Item>
              <FaHtml5 color="#f6690a" title="HTML" />
              <Span>HTML</Span>
            </Item>
            <Item>
              <FaCss3Alt color="blue" />
              <Span>CSS</Span>
            </Item>
            <Item>
              <FaGit color="#f6690a" />
              <Span>GIT</Span>
            </Item>
            <Item>
              <FaPython color="yellow" />
              <Span>Python</Span>
            </Item>
            <Item>
              <SiMysql color="#ffcd57" />
              <Span>MySQL</Span>
            </Item>
            <Item>
              <DiMongodb color="green" />
              <Span>MongoDB</Span>
            </Item>
            <Item>
              <FaNodeJs color="#527016" />
              <Span>Node JS</Span>
            </Item>
          </ListPlus>
          <ContainerButton>
            <Button onClick={handleButton}>
              <IoIosArrowUp />
            </Button>
          </ContainerButton>
        </>
      ) : (
        <ContainerButton>
          <Button onClick={handleButton}>
            <IoIosArrowDown />
          </Button>
        </ContainerButton>
      )}
    </Container>
  );
}

export default Techs;
