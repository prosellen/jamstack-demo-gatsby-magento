import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --blue: rgba(30,104,152,1);
  }
  html {
    font-size: 100%;
    height: 100%
  }
  body {
    font-size: 1rem;
    background: rgb(255, 255, 255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, var(--blue) 100%);
    background-attachment: fixed;
    overflow-y: scroll;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    /* background-color: var(--red) ; */
    border-radius: 6px;
    /* border: 3px solid var(--white); */
  }
  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
