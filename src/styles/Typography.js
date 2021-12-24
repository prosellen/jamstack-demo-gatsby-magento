import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`
  @font-face {}
  html {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0 0 .5em;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--blue);
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;
