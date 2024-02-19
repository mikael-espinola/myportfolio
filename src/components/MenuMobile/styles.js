import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100dvw;
  height: 100dvh;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;

  background: rgb(8, 8, 11);
  background: linear-gradient(
    0deg,
    rgba(8, 8, 11, 1) 7%,
    rgba(9, 9, 121, 0.9407935049019608) 98%,
    rgba(0, 212, 255, 1) 100%
  );

  transform: translateX(-50px);
  transition: 0.8s;

  > svg {
    position: absolute;
    top: 1em;
    left: 1em;
    transform: rotate(45deg);
    transition: 0.4s;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2em;
    transform: scale(0.7);
    transition: 0.7s;

    a {
      text-decoration: none;
      color: #fff;
      font-size: 22px;
    }
  }
  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`;
