import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1em;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background-color: #3f729455;
  backdrop-filter: blur(8px);
`;

export const Title = styled.h1`
  margin: 0.5em 0;
`;
export const Nav = styled.nav`
  width: 100%;
  margin: 0.5em 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
export const Item = styled.li<{ active: string }>`
  cursor: pointer;
  font-size: 17px;
  border-bottom: ${(props) =>
    props.active === "true" ? "3px solid #7e7676" : "none"};

  @media screen and (min-width: 950px) {
    overflow: hidden;
    transform: scale(1);
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.2);
      transition: transform 0.1s;
    }
  }
`;
