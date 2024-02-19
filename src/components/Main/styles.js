import styled from "styled-components";

const textColor = "#fff";

export const Container = styled.section`
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ProfileContainer = styled.div``;

export const Profile = styled.div`
  margin-top: 8em;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;
export const Picture = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 1em;

  @media screen and (max-width: 950px) {
    width: 250px;
    height: 250px;
  }
`;
export const Name = styled.h2`
  text-align: center;
  color: ${textColor};
  @media screen and (max-width: 950px) {
    padding: 0.3em;
  }
`;
export const ContactsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0.8em 0;
  background-color: #3e3939a1;
  padding: 0.2em;
  border-radius: 0.4em;
  @media screen and (max-width: 950px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
export const Introduction = styled.p`
  width: 60%;
  display: flex;
  align-items: center;
  padding: 0.2em;
  color: ${textColor};
  @media screen and (max-width: 950px) {
    width: 80%;
    text-align: center;
    transition: width 2s;
  }
  @media screen and (max-width: 950px) {
    width: 100%;
    transition: width 2s;
  }
`;

export const ContactItem = styled.li`
  cursor: pointer;

  @media screen and (min-width: 950px) {
    transform: scale(1);
    transition: transform 0.9s;
    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s;
    }
  }
`;
