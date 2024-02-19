import styled from "styled-components";

const textColor = "#fff";

export const Container = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.904);
  z-index: 4;
  backdrop-filter: blur(2.5px);
`;

export const Title = styled.h1`
  color: ${textColor};
  text-align: center;
  padding: 0.5em;
`;

export const MenuOptions = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0.2em;
  li {
    color: ${textColor};
    a {
      cursor: pointer;
    }
    @media screen and (max-width: 950px) {
      display: none;
    }
  }
`;

export const Burger = styled.div`
  display: none;
  color: ${textColor};
  padding: 0.7em;
  @media screen and (max-width: 950px) {
    display: inline;
    margin-right: 0.9em;
  }
`;
