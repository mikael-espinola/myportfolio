import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 14em 0;
`;
export const SpaceF = styled.div`
  height: 0.1em;
`;
export const Text1 = styled.h1`
  font-size: 22px;
  margin: 1em 0;
`;
export const Text2 = styled.h4`
  font-size: 14px;
  margin: 0.5em;
  @media screen and (min-width: 700px) {
    font-size: 20px;
  }
`;
export const ContactsContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 700px) {
    width: 75%;
  }
`;
export const CreditsContainer = styled.div`
  margin: 2em 0;
`;
export const Rights = styled.strong`
  font-size: 12px;
`;
