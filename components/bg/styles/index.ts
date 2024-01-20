import styled from "styled-components"

export const BGSceneWrapper = styled.div`
  min-width: 20rem;
  min-height: 20rem;
  margin-top: 3rem;
  position: relative;

  img {
    min-width: 100%;
    width: 100% !important;
    height: 100% !important;
    opacity: 0.7;
  }

  @media only screen and (max-width: 390px) {
    min-width: 12rem;
    min-height: 12rem;
  }
`
