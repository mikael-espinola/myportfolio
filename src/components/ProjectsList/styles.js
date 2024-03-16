import styled from "styled-components";

const textColor = "#fff";

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 0.5em;
  margin: 4em 0 1em 0;
  color: ${textColor};
`;
export const ProjectsList = styled.ul`
  width: 60%;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const Border = styled.div`
  border: 1px solid gray;
`;

export const ProjectItem = styled.li`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: 0.7s;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 0;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    > img {
      border-radius: 0.9em;
      width: 600px;
      height: 280px;
      object-fit: cover;
      @media screen and (max-width: 700px) {
        width: 240px;
        height: 200px;
        border-radius: 0.9em;
        width: 100%;
      }
    }
    > p {
      padding: 0.9em;
      font-size: 18px;
      color: ${textColor};
    }
  }
`;

export const ButtonsContainer = styled.div`
  > section {
    > button {
      border-radius: 0.5em;
      padding: 0.5em;

      @media screen and (min-width: 950px) {
        transform: scale(1);
        transition: transform 2s;
        &:hover {
          transform: scale(1.1);
          transition: transform 0.7s;
        }
      }
      &:last-child {
        margin-left: 0.9em;
      }

      > a {
        text-decoration: none;
        color: #222;
      }
    }
  }
`;

export const TechsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.493);
  border-radius: 0.5em;
  color: ${textColor};
  padding: 0.5em;
  > h4 {
    padding: 0.5em;
    @media screen and (max-width: 850px) {
      font-size: 12px;
    }
  }
  > li {
    color: ${textColor};
    padding: 0.5em;
    p {
      @media screen and (max-width: 850px) {
        font-size: 12px;
      }
    }
  }
`;

export const Description = styled.div`
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.493);
  padding: 0.3em;
  margin: 0.9em 0;
  > p {
    color: #ffffff;
  }
`;
