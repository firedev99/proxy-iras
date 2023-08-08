import styled from "styled-components"

export const LoginPageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    opacity: 0.15;
    position: relative;
    z-index: -1;

    @media (prefers-color-scheme: dark) {
      opacity: 0.1 !important;
      filter: grayscale(1) !important;
    }
  }
`
