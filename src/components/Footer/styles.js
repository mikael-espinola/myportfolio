import styled from "styled-components";

export const Section = styled.section`
  margin: 15em 0;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 1.5em 0;
  }
  h3 {
    font-size: 16px;
  }
  h3,
  h2 {
    color: #fff;
    margin: 1.5em 0;
  }

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 12px;
    }
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 15em;
  > li {
  }

  @media screen and (min-width: 950px) {
    width: 50%;
  }
`;
