import * as styled from "styled-components"

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --background-base: 241, 245, 249;
    --text-base: 18, 18, 18;
    --font-base: "Poppins";
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-base: 18, 18, 18;
      --text-base: 241, 245, 249;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: var(--font-base), sans-serif;
  }

  body {
    color: rgb(var(--text-base));
    background: rgb(var(--background-base));
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: var(--font-base), sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`
