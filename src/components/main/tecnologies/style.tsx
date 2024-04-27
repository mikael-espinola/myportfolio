import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;
  padding: 0.5em;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(6, 1fr);
    padding: 2.5em;
  }
`;
export const ListPlus = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;
  padding: 0.5em;

  margin-top: 2em;

  @media screen and (min-width: 700px) {
    padding: 0 2.5em;
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3em;

  @media screen and (min-width: 950px) {
    transform: scale(1);
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.2);
      transition: transform 0.1s;
    }
  }
`;
export const Span = styled.span`
  font-size: 11px;
  text-align: center;
  margin-top: 0.5em;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const Button = styled.button`
  padding: 0.2em;
  min-width: 5em;
  border-radius: 10px;
`;
