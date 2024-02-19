import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Protest Riot', sans-serif;
        text-decoration: none;
        
    }
    #root {
        height: 100dvh;
        margin: 0 auto;
        
        @media screen  and (max-width: 950px) {
            width: 100%;
        }

        
    }


    ul, li {
        list-style: none;
    }

    .App{
        background: rgb(13,12,12);
        background: linear-gradient(45deg, rgba(13,12,12,1) 3%, rgba(11,24,107,1) 50%, rgba(0,0,0,1) 98%);
        
    }
`;
