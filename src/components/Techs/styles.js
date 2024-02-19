import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CarouselContent = styled.ul`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  padding: 1.5em;

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.2em;
  }

  li {
    padding: 0.5em;
    a {
      @media screen and (min-width: 900px) {
        transform: scale(1);
        transition: transform 1.5s;
        &:hover {
          transform: scale(1.2);
          transition: transform 0.2s;
        }
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #fff;
      cursor: default;
      span {
        padding-top: 1em;
      }
      svg {
        font-size: 3em;
      }
    }
  }
`;
