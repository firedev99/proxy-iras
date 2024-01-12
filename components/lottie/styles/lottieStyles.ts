import styled from "styled-components"

export const SceneWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  height: 100svh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  background-color: rgb(var(--background-base));
`

export const MainScene = styled.div`
  @media only screen and (max-height: 600px) {
    width: 396px;
  }
`
