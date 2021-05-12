// global base styling using styled components

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Nunito", "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

.app-container {
    text-align: left;
  }
  
.deck-tooltip {
    border-radius: 10px;
  }

.nav {
      position: absolute,
      z-index: 301,
      top: 10,
      right: 10,
  }

  `;
