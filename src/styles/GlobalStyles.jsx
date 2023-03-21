import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: #fff;
    /* background-color: #242424; */
    /* background-color: #1a1a1a; */
    background-color: #121212;
    /* background-color: #070600; */

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .App {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    place-items: center;
    min-width: 600px;
    min-height: 100vh;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
