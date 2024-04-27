import styled from "styled-components";

export const Apresentation = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    padding: 1em;
  }
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin: 1em 0;

  @media screen and (min-width: 700px) {
    width: 280px;
    height: 280px;
  }
`;

export const LanguageButton = styled.button`
  position: absolute;
  top: 0;
  right: 20px;
  padding: 0.5em;
  border-radius: 20px;
  background: none;
  color: #fff;
`;
