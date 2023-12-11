import { motion } from "framer-motion"
import styled from "styled-components"

export const ProfileMenu = styled(motion.div)`
  position: absolute;
  left: 2.5rem;
  bottom: 4.6rem;
  width: 11rem;
  background: rgb(var(--text-base));
  border-radius: 0.4rem;

  .theme_settings {
    border-bottom-left-radius: 0.3rem !important;
    border-bottom-right-radius: 0.3rem !important;
  }

  .only_small {
    visibility: hidden !important;
    display: none !important;
    will-change: visibility display;
  }

  button,
  .theme_settings {
    width: 11rem;
    height: 3.2rem;
    color: rgb(var(--background-base));
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

    span {
      font-weight: 800;
      font-size: 1rem;
      opacity: 0.7;
    }

    svg {
      margin: 0 0.5rem;
      path {
        stroke: rgba(126, 134, 158, 1);
      }
    }

    .firey_stroke {
      stroke: rgba(126, 134, 158, 1);
    }

    border-radius: 0.3rem;

    &:hover {
      background: rgba(24, 113, 172, 1);

      span {
        color: rgba(255, 255, 255, 1);
      }

      svg {
        .firey_stroke,
        path {
          stroke: rgba(241, 245, 249, 1);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    left: unset;
    bottom: 3.7rem;
    right: 3.2rem;

    .only_small {
      visibility: visible !important;
      display: flex !important;
    }

    button,
    .theme_settings {
      border-radius: unset;
      border-top-left-radius: 0.3rem !important;
      border-top-right-radius: 0.3rem !important;

      &:last-of-type {
        border-top-left-radius: unset !important;
        border-top-right-radius: unset !important;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    bottom: 3.5rem;
    right: 2.8rem;
  }

  @media only screen and (max-width: 415px) {
    bottom: 3.2rem;
    right: 2.4rem;
  }
`

export const TopRightNav = styled.div`
  position: absolute;
  z-index: 55;
  top: 2rem;
  right: 3rem;

  svg {
    path {
      fill: rgba(var(--text-base), 0.6);
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const NavbarWrapper = styled.div`
  position: absolute;
  z-index: 55;
  left: 0;
  top: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid rgba(126, 134, 158, 0.2);

  .firey_stroke {
    stroke: rgba(var(--text-base), 0.6);
  }

  .firey_fill {
    fill: rgba(var(--text-base), 0.4);
  }

  svg {
    width: 2.24rem;
    height: 2.24rem;
    scale: 0.95;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

    path {
      stroke: rgba(var(--text-base), 0.6);
    }
  }

  @media only screen and (max-width: 768px) {
    /* overflow: hidden; */
    top: unset;
    bottom: 0rem;
    border-right: unset;
    border-top: none;
    flex-direction: row;
    width: 100%;
    min-height: 3rem;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: rgba(var(--text-base), 0.8);
      z-index: -1;
      backdrop-filter: blur(2.5px);
    }

    svg {
      width: 1.75rem;
      height: 1.75rem;

      path {
        stroke: rgba(var(--background-base), 0.6);
      }
    }

    .firey_stroke {
      stroke: rgba(var(--background-base), 0.6);
    }

    .firey_fill {
      fill: rgba(var(--background-base), 0.4);
    }
  }

  @media only screen and (max-width: 415px) {
    padding: 0 0.5rem;
  }

  @media only screen and (max-width: 330px) {
    padding: 0 1rem;
  }

  @media only screen and (max-width: 280px) {
    padding: 0 0.4rem;
  }
`

export const UpperWrapper = styled.div`
  width: 100%;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const BottomWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 1.5rem;

  button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    img {
      border-radius: 50% !important;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-right: 2rem;
    margin-left: 1.5rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media only screen and (max-width: 576px) {
    margin-right: 1.4rem;
  }

  @media only screen and (max-width: 415px) {
    width: 2.7rem;
    height: 2.7rem;
    margin-right: 0.9rem;
    margin-left: 1.2rem;
    margin-bottom: 0.7rem;
  }

  @media only screen and (max-width: 330px) {
    margin-right: 0.6rem;
    margin-left: 1rem;
  }

  @media only screen and (max-width: 330px) {
    margin-right: 0.8;
  }
`

export const SideElementWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  margin: 1.4rem 0.9rem;
  border-radius: 50%;

  &:not(.disable_hover):hover {
    background-color: rgba(126, 134, 158, 0.25);
    border-radius: 0.8rem;
    transition: background-color 0.25s cubic-bezier(0.075, 0.42, 0.165, 1);
    transition: border-radius 0.25s cubic-bezier(0.075, 0.32, 0.165, 1);

    svg {
      scale: 1.09;
    }
  }

  &:nth-child(1) {
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 768px) {
    margin: 1rem 0;
    width: 3rem;
    height: 3rem;

    &:nth-child(1) {
      margin-top: 1rem;
    }

    &:nth-child(4) {
      display: none;
    }
  }

  @media only screen and (max-width: 415px) {
    margin: 0.8rem 0;
    width: 2.7rem;
    height: 2.7rem;

    &:nth-child(1) {
      margin-top: 0.8rem;
    }
  }
`

export const SideElement = styled(motion.div)`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .active_layout {
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    background-color: rgba(126, 134, 158, 0.25);
    border-radius: 0.8rem;
  }

  @media only screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;

    .active_layout {
      width: 3rem;
      height: 3rem;
    }
  }

  @media only screen and (max-width: 415px) {
    width: 2.7rem;
    height: 2.7rem;

    .active_layout {
      width: 2.7rem;
      height: 2.7rem;
    }
  }
`
