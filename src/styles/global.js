import { createGlobalStyle } from 'styled-components'

import * as V from './variables'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */

  @import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo:800&subset=korean');
  @import url('//fonts.googleapis.com/earlyaccess/notosanskr.css');
  @font-face {
    font-family: 'BMHANNAPro';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'D2Coding';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: 0;
    padding: 0;
  }

  img {
    display: block;
  	height: auto;
  	max-width: 100%;
  }

  svg {
    fill: currentColor;
  }

  .small,
  small {
    font-size: .8em;
  }

  html {
    font-size: 10px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  b, strong {
    font-weight: 600;
  }

  i, em {
    font-style: italic;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  *::placeholder {
    color: var(--secondaryColor);
  }

  *::-webkit-input-placeholder {
    color: var(--secondaryColor);
  }

  body {
    background-color: var(--bg);
    color: var(--primaryColor);
    font-family: "D2Coding", "Roboto", sans-serif;
    font-size: 2rem;
    min-height: calc(100vh);
    -webkit-overflow-scrolling: touch;
    overflow-anchor: none;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    transition: background-color ${V.Transition.default};
    will-change: background-color;

    --bg: ${V.Color.white};
    --bgSolid: ${V.Color.whiteSolid};
    --bgSecondary: ${V.Color.grayWhite};
    --borderColor: ${V.Color.grayWhite};
    --highlightColor: ${V.Color.blue};
    --primaryColor: ${V.Color.black};
    --secondaryColor: ${V.Color.gray};
    --boxShadow: rgba(18, 18, 18, .12);
  }

  body.theme-dark {
    --bg: ${V.Color.grayDarker};
    --bgSolid: ${V.Color.blackSolid};
    --bgSecondary: ${V.Color.grayDark};
    --borderColor: ${V.Color.grayDark};
    --highlightColor: ${V.Color.blueLight};
    --primaryColor: ${V.Color.white};
    --secondaryColor: ${V.Color.grayLight};
    --boxShadow: rgba(250, 250, 250, .12);
  }

  p a {
    color: var(--highlightColor);
  }

  ::selection {
    background: var(--highlightColor);
    color: ${V.Color.white};
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none;
      transition: none;
    }
  }

  // gus
  nav li, .sidebar-2 .count, h1, h2, h3, h4 {
    font-family: 'BMHANNAPro';
  }
  code:not(pre *) {
    font-family: 'D2Coding';
    border-radius: 5px;
    background-color: rgba(255, 246, 228, 0.4);
    animation: ulineonoff 4s infinite;
  }
  @keyframes ulineonoff{
    0% {
        text-decoration: rgba(255,0,0,0.6) wavy underline;
    }
    50% {
        text-decoration: rgba(255,150,0,0.6) wavy underline;
    }
    100% {
        text-decoration: rgba(255,0,0,0.6) wavy underline;
    }
  }
  article img {
    margin:auto auto;
    max-width: 80%;
  }
`
export default GlobalStyles
