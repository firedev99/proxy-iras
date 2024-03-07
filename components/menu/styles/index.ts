import { motion } from "framer-motion"
import styled from "styled-components"

export const MenuWrapperBtn = styled(motion.button)<{ $expand: boolean }>`
  position: fixed;
  z-index: 55;
  top: 2rem;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: rgb(var(--btn-color));
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 100%;

    &:after,
    &:before {
      content: "";
      position: relative;
      display: block;
      margin: auto;
      width: 40%;
      background: rgb(235, 239, 248);
      height: 0.15rem;
      border-radius: 0.15rem;
      transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
    }

    &:after {
      transform-origin: 0% 0%;
      transform: ${(props) =>
        props.$expand
          ? `rotate(45deg) translate(-4px, -12px)`
          : `rotate(0) translate(0, -5px)`};
    }

    &:before {
      transform-origin: 0% 100%;
      opacity: 1;
      transform: ${(props) =>
        props.$expand
          ? `rotate(-45deg) translate(-5px, 13px)`
          : `rotate(0) translate(0, 5px)`};
    }
  }

  /* only focus on keyboard tab press */
  &:focus-visible {
    border-radius: 50%;
    outline: 2px solid rgb(var(--btn-color));
    outline-offset: 4px;
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;

    span {
      &:after {
        transform: ${(props) =>
          props.$expand
            ? `rotate(45deg) translate(-4px, -10px)`
            : `rotate(0) translate(0, -5px)`};
      }

      &:before {
        transform: ${(props) =>
          props.$expand
            ? `rotate(-45deg) translate(-4px, 10px)`
            : `rotate(0) translate(0, 5px)`};
      }
    }
  }

  @media only screen and (max-width: 330px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`

export const NavigationWrapper = styled(motion.div)`
  position: fixed;
  z-index: 5;
  min-height: 100vh;
  min-height: 100svh;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-attachment: fixed;
`

export const NavigationOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 11;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.35);
  -webkit-backdrop-filter: blur(8px) contrast(90%);
  backdrop-filter: blur(8px) contrast(90%);

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const NavigationInner = styled(motion.div)`
  position: relative;
  z-index: 22;
  height: 100%;
  width: clamp(32rem, 35%, 50rem);
  padding: 15vh 6.5vw 10vh 6.5vw;
  background: rgb(32, 33, 36);
  margin-left: auto;
  color: rgb(var(--background-base));
  display: flex;
  flex-direction: column;

  svg {
    position: absolute;
    top: 0;
    left: -99px;
    width: 100px;
    height: 100%;
    fill: rgb(32, 33, 36);
    stroke: none;
    overflow: none;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    background: rgb(var(--text-base));
    color: rgb(32, 33, 36);

    svg {
      fill: rgb(var(--text-base));
    }
  }

  @media only screen and (max-width: 1920px) {
    padding: 10rem 6.5rem 7.5rem 6.5rem;
  }

  @media only screen and (max-width: 1366px) {
    padding: 7.5rem 6.5rem 5rem 6.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: unset;
    width: 100%;

    svg {
      display: none;
    }
  }

  @media only screen and (max-height: 768px) {
    padding: 6.5rem 6.5rem 3rem 6.5rem;
    overflow: auto;

    svg {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 7rem 4.8rem 4rem 4.8rem;
  }

  @media only screen and (max-width: 486px) {
    padding: 7rem 3rem 4rem 3rem;
  }

  @media only screen and (max-width: 330px) {
    padding: 7rem 2.5rem 4rem 2.5rem;
  }
`

export const NavHeader = styled(motion.div)`
  position: relative;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.4px;
    font-size: 0.8rem;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgba(var(--background-base), 0.7);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 330px) {
    p {
      margin-bottom: 0.5rem;
    }
  }
`

export const LinkWrapper = styled(motion.div)`
  margin-top: 0.6rem;
  margin-left: -0.15rem;
  position: relative;

  a {
    font-size: clamp(16px, 2.6vw, 86px);
    font-family: var(--font-mono);

    @media (prefers-color-scheme: dark) {
      color: rgb(32, 33, 36);
    }
  }

  span {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: rgb(var(--background-base));
    position: absolute;
    left: -2rem;
    top: 50%;
  }

  @media only screen and (max-width: 1920px) {
    a {
      margin-top: 0;
      font-size: unset;
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 1366px) {
    a {
      font-size: 2.625rem;
      line-height: 3.2rem;
    }
  }

  @media only screen and (max-height: 768px) {
    a {
      font-size: 2.625rem;
      line-height: 3.2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: -0.2rem;
    overflow: hidden;

    a {
      /* line-height: 4rem; */
      overflow: hidden;
    }

    span {
      left: unset;
      right: 2rem;
      top: 40%;
    }
  }

  @media only screen and (max-width: 486px) {
    margin-left: -0.2rem;

    a {
      font-size: 2.625rem;
      line-height: 3.4rem;
    }
  }

  @media only screen and (max-width: 486px) and (max-height: 768px) {
    a {
      font-size: 2rem;
      line-height: 2.2rem;
    }
  }

  @media only screen and (max-width: 330px) {
    margin-left: -0.1rem;

    a {
      font-size: 1.8rem;
      line-height: 2rem;
    }
  }
`

export const NavFooter = styled(motion.div)`
  margin-top: auto;
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 1.2rem;
    margin-left: -0.1rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    a {
      font-family: var(--font-mono);
      font-size: clamp(1rem, 1vw, 1.1rem);
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 1920px) {
    ul {
      a {
        font-size: unset;
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (max-width: 1536px) {
    ul {
      a {
        font-size: 0.75rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;

    button {
      margin-top: 1.5rem;
      margin-bottom: 0;
      margin-left: auto;
    }
  }

  @media only screen and (max-width: 600px) {
    button {
      margin-top: 1.3rem;
      margin-left: -0.3rem;
      margin-right: auto;
    }
  }

  @media only screen and (max-height: 636px) {
    margin-top: 5rem;
  }

  @media only screen and (max-width: 486px) {
    ul {
      a {
        font-size: 0.7rem;
      }

      :nth-of-type(2) {
        /* letter-spacing: -1px; */
      }
    }
  }

  @media only screen and (max-width: 330px) {
    ul {
      flex-direction: column;
      a {
        font-size: 0.8rem;
        margin-top: 0.2rem;
      }

      :nth-of-type(2) {
        letter-spacing: 0;
      }
    }
  }
`

export const LogoutBtnWrapper = styled(motion.button)`
  width: 8rem;
  height: 3.2rem;
  border-radius: 0.6rem;
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: var(--font-mono);
  font-weight: 500;
  background: rgb(var(--btn-color));
  color: rgb(235, 239, 248);

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    width: 7.5rem;
    height: 2.9rem;
    font-size: 0.9rem;
    margin-right: -0.1rem;
  }
`
