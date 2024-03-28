import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgba(32, 39, 51, 1);
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 120px 16px 0 16px;
  font-family: "Man-rope", sans-serif;
  width: 100%;
}

button {
  font-family: "Man-rope", sans-serif;
}


`;

export default GlobalStyles;
