import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 3em 0 1em 0;
`;

export const SpaceP = styled.div`
  height: 0.1em;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1;
  gap: 0.5em;
  @media screen and (min-width: 750px) and (max-width: 949px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 950px) and (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1251px) and (max-width: 1450px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1451px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  background-color: #04335986;
  padding: 1em;
  position: relative;
  border-radius: 6px;
`;

export const ProjectContainer = styled.div`
  overflow: auto;
  @media screen and (min-width: 750px) {
    height: 32em;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 12em;

  @media screen and (min-width: 700px) {
    height: 15em;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 9px;
`;
export const Title = styled.h2`
  padding: 0.5em 0;
`;

export const LinkContainer = styled.div`
  display: inline;
  font-size: 15px;
  margin-left: 1em;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 1em;
  width: 100%;
`;
export const Description = styled.span`
  font-size: 0.95em;
  @media screen and (min-width: 700px) {
    font-size: 0.7em;
  }
`;

export const ButtonContainer = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-evenly;
`;
export const Button = styled.a`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export const TechsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  bottom: 4px;
  left: 0;
`;

export const Techs = styled.span<{ color: string }>`
  background-color: ${(props) => (props.color === "" ? "#3f729455" : "none")};
  padding: 0.2em;
  border-radius: 8px;
  cursor: default;
  color: ${(props) => (props.color !== "" ? "#1e83d6" : "#fff")};
  font-size: 12px;
`;
