import styled from "styled-components"

export const MetaLayoutWrapper = styled.div`
  height: 100vh;
  height: 100svh;

  @media only screen and (max-width: 768px) {
    margin: 0 1.4rem;
  }

  @media only sceen and (max-width: 415px) {
    margin: 0 1rem;
  }
`

export const RootLayoutWrapper = styled.div`
  margin: 0 2rem 0 6rem;
  height: 100vh;
  height: 100svh;

  @media only screen and (max-width: 768px), (max-height: 600px) {
    height: calc(100vh - 4.2rem); //fallback
    height: calc(100svh - 4.2rem);
    margin: 0 1.2rem;
  }

  @media only sceen and (max-width: 415px) {
    margin: 0 1rem;
  }
`
