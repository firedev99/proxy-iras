import styled from "styled-components"

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
  padding: 4vh 0;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1920px) {
    padding: 2rem 1rem;
  }

  @media only screen and (max-width: 380px) {
    padding: 2rem 0.5rem;
  }
`

export const MetaLayoutWrapper = styled.div`
  min-height: 100vh;
  min-height: 100svh;

  @media only screen and (max-width: 768px) {
    margin: 0 1.4rem;
  }

  @media only sceen and (max-width: 415px) {
    margin: 0 1rem;
  }
`
