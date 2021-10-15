import { createGlobalStyle } from 'styled-components';
import { primaryFont, backgroundColor } from 'theme';

const GlobalStyles = createGlobalStyle`
    html {
         box-sizing: border-box;
        // font-size: 62.5%;
        // @media only screen and (min-width: 600px) {
        //     font-size: 25%;
        // }
        // @media only screen and (min-width: 768px) {
        //     font-size: 37.5%;
        // }
        // @media only screen and (min-width: 992px) {
        //     font-size: 50%;
        // }
        // @media only screen and (min-width: 1200px) {
        //     font-size: 62.5%;
        // }
    }
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* -webkit-transition: all 0.30s ease-in-out;
        -moz-transition: all 0.30s ease-in-out;
        -ms-transition: all 0.30s ease-in-out;
        -o-transition: all 0.30s ease-in-out; */
    }
    body {
        background: ${backgroundColor[100]};
        transition: all 0.05s linear;
        line-height: 2.1rem;
        font-family: ${primaryFont};
        font-style: normal;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyles;
