import styled from "styled-components"

export const RootLayoutWrapper = styled.div`
  height: 100vh;
  margin: 0 3.2rem 0 7rem;

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 5rem);
    margin: 0 1.2rem;
  }

  @media only screen and (max-width: 576px) {
    margin: 0 1rem;
  }

  @media only screen and (max-width: 415px) {
    height: calc(100vh - 4.3rem);
    margin: 0 0.6rem;
  }
`
