import styled from "styled-components"

export const FooterWrapper = styled.footer`
  text-align: center;
  font-family: var(--font-josefin), sans-serif;
  font-size: 1.1rem;
  letter-spacing: -1px;
  margin-top: auto;
  position: relative;

  a {
    &:hover {
      color: #e35384;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const WalingDogWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  position: absolute;
  left: 38%;
  top: -3rem;
  z-index: -1;

  @media only screen and (max-width: 1536px) {
    left: 36.5%;
  }

  @media only screen and (max-width: 1336px) {
    left: 34%;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`
