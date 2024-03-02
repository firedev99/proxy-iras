import { motion } from "framer-motion"
import styled from "styled-components"

// tools - home page styles
export const ToolsPageInformation = styled.div`
  margin-bottom: 1.5rem;

  h1 {
    width: 545px;
    font-size: 64px;
    display: flex;
    font-family: var(--font-josefin), sans-serif;
    font-weight: 900;
  }

  p {
    width: 516px;
    font-size: 18px;
    line-height: 22px;
  }

  @media only screen and (max-width: 1366px) {
    margin-left: 1.1rem;

    h1 {
      width: 372px;
      font-size: 42px;
    }

    p {
      font-size: 16px;
      width: 424px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0.4rem;

    h1 {
      line-height: 44px;
    }

    p {
      line-height: 20px;
    }
  }

  @media only screen and (max-width: 486px) {
    h1 {
      width: 320px;
      font-size: 36px;
    }

    p {
      font-size: 15px;
      width: 100%;
    }
  }

  @media only screen and (max-width: 360px) {
    h1 {
      width: 256px;
      font-size: 28px;
      line-height: 32px;
    }

    p {
      font-size: 13px;
      line-height: 18px;
    }
  }
`
export const ToolsPageBG = styled.div`
  width: 674px;
  min-width: 674px;
  height: 684px;
  position: absolute;
  z-index: -1;
  top: -20%;
  left: 85%;
  transform: translateX(-85%);
  mix-blend-mode: luminosity;

  @media only screen and (max-width: 1366px) {
    width: 512px;
    min-width: 512px;
    height: 512px;
    top: -10%;
  }

  @media only screen and (max-width: 1080px) {
    width: 424px;
    min-width: 424px;
    height: 424px;
    top: -1%;
    opacity: 0.5;
  }

  @media only screen and (max-width: 768px) {
    width: 296px;
    min-width: 296px;
    height: 296px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 330px) {
    display: none;
  }
`
export const ToolsPageFeatures = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 224px);
  grid-auto-rows: 224px;
  gap: 24px;
  margin-left: -0.3rem;

  @media only screen and (max-width: 1366px) {
    margin-left: 0.75rem;
  }

  @media only screen and (max-width: 1080px) {
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(156px, 200px));
    grid-auto-rows: 212px;
    gap: 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 420px;
    margin-left: 0;
  }

  @media only screen and (max-width: 486px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(146px, 1fr));
    grid-auto-rows: 196px;
    gap: 16px;
  }

  @media only screen and (max-width: 330px) {
    grid-auto-rows: 156px;

    gap: 12px;
  }
`

export const ToolsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-top: 2rem;
  justify-content: center;
  position: relative;
  min-height: 800px;
  margin: auto 0;

  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: center;
  }

  @media only screen and (max-width: 486px) {
    justify-content: flex-start;
    min-height: 100%;
    padding-bottom: 2rem;
  }

  @media only screen and (max-width: 416px) {
    padding-top: 4rem;
  }
`

export const ToolsFeatureContent = styled(motion.div)`
  background: rgb(217, 217, 217);
  border-radius: 1rem;
  padding: 24px;
  display: flex;
  flex-direction: column;

  h4 {
    font-family: var(--font-josefin), sans-serif;
    font-size: 24px;
    color: rgba(18, 18, 18, 0.9);
    width: 156px;
    font-weight: 800;
  }

  .tools_feature_img {
    position: relative;
    width: 104px;
    height: 104px;
    margin-top: auto;
    margin-left: auto;
    margin-right: -1.2rem;
    margin-bottom: -1.2rem;
    mix-blend-mode: luminosity;
  }

  &:last-of-type {
    margin-right: 0;
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    .tools_feature_img {
      margin-bottom: -1rem;
      margin-right: -1.6rem;
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1366px) {
    h4 {
      font-size: 20px;
      line-height: 22px;
      color: rgba(18, 18, 18, 0.9);
      width: 132px;
      font-weight: 800;
    }

    .tools_feature_img {
      width: 96px;
      height: 96px;
    }
  }

  @media only screen and (max-width: 486px) {
    padding: 16px;

    h4 {
      font-size: 18px;
      line-height: 19px;
      color: rgba(18, 18, 18, 0.9);
      width: 124px;
    }

    .tools_feature_img {
      width: 72px;
      height: 72px;
      margin-right: -0.75rem;
      margin-bottom: -0.75rem;
    }

    &:nth-of-type(1),
    &:nth-of-type(4) {
      .tools_feature_img {
        width: unset;
        height: unset;
        width: 78px;
        height: 78px;
      }
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
      .tools_feature_img {
        margin-bottom: -0.5rem;
        margin-right: -1.1rem;
      }
    }
  }
`

// tools - eligible courses

export const ToolCoursesPageWrapper = styled.div`
  height: 100%;
  width: 100%;
`
