import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  background-color: #3f729455;
  border-radius: 5px;
  padding: 0.9em 0;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const Item = styled.li`
  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  font-size: 25px;

  @media screen and (min-width: 950px) {
    transform: scale(1);
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.2);
      transition: transform 0.1s;
    }
  }
`;
