import * as styled from "styled-components"

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --background-base: 227, 230, 230;
    --text-base: 18, 18, 18;
    --btn-color: 23, 58, 116;
    --primary-blue: 12, 140, 233;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-base: 32, 33, 36;
      --text-base: 227, 230, 230;
    }
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
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
    font-family: var(--font-display), sans-serif;
  }

  body {
    color: rgb(var(--text-base));
    background: rgb(var(--background-base)) !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: var(--font-base), sans-serif;
  }

  /* style the hover context */
  [data-title] {
    position: relative;
  }

  :focus-visible {
    outline: 2px solid rgb(var(--btn-color));
    outline-offset: 4px;
  }

  /* only allow hover */
  @media (hover: hover) and (pointer: fine) {
    [data-title]:hover:after {
      opacity: 1;
      scale: 1;
      transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      visibility: visible;
    }

    [data-title]:after {
      content: attr(data-title);
      background-color: rgb(241, 245, 249);
      font-weight: 600;
      color: rgba(18, 18, 18, 0.7);
      font-size: 0.8rem;
      padding: 0.55rem 0.8rem;
      border-radius: 0.25rem;
      bottom: -2.1rem;
      white-space: nowrap;
      position: absolute;
      left: 55%;
      box-shadow: 1px 1px 4px rgba(18, 18, 18, 0.7);
      z-index: 99999;
      opacity: 0;
      scale: 0.7;
      visibility: hidden;
    }
  }

  /* style google gsi/client one tap signin dialog */
  [id="oneTap"] {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  @media (prefers-color-scheme: dark) {
    [id="oneTap"] {
      color-scheme: light !important;
    }
    [id="googleBtn"] {
      color-scheme: light !important;
    }
  }

  /* style routing progress bar */
  .progress_bar {
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: rgb(var(--btn-color));
    transform-origin: 0%;
  }

  /* styling for tablet or smaller screens */
  @media only screen and (max-width: 768px) {
    [data-title]:after {
      display: none;
    }
  }
`
