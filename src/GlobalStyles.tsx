import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul {
        list-style: none;
    }
    body {
        color: #fff;
        background: rgb(13, 12, 12);
  background: linear-gradient(
    45deg,
    rgba(13, 12, 12, 1) 3%,
    rgba(11, 24, 107, 1) 50%,
    rgba(0, 0, 0, 1) 98%
  );
    }
`;
