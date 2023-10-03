import { motion } from "framer-motion"
import styled from "styled-components"

export const ProfileMenu = styled(motion.div)`
  width: 186px;
  height: 3rem;
  position: absolute;
  bottom: 4rem;
  left: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media only screen and (max-width: 768px) {
    left: unset;
    right: 3.2rem;
    bottom: 11.2rem;
    border-radius: unset;

    button {
      border-top-left-radius: 0.2rem !important;
      border-top-right-radius: 0.2rem !important;

      &:last-of-type {
        border-top-left-radius: unset !important;
        border-top-right-radius: unset !important;
      }
    }

    .theme_settings {
      border-bottom-left-radius: 0.2rem !important;
      border-bottom-right-radius: 0.2rem !important;
      color: pointer;
    }
  }

  .theme_settings,
  button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: rgb(var(--background-base));
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    background: rgb(var(--text-base));
    border-radius: inherit;

    span {
      font-weight: 800;
      font-size: 1rem;
      opacity: 0.7;
    }

    svg {
      path {
        stroke: rgba(126, 134, 158, 1);
      }
    }

    .firey_stroke {
      stroke: rgba(126, 134, 158, 1);
    }

    &:not(.theme_settings):hover {
      background: rgba(24, 113, 172, 1);
      cursor: pointer;

      span {
        color: rgba(255, 255, 255, 1);
      }

      svg {
        .firey_stroke,
        path {
          stroke: rgba(241, 245, 249, 1);
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      }
    }
  }
`

export const SidebarWrapper = styled.div`
  position: absolute;
  z-index: 55;
  left: 0;
  top: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid rgba(126, 134, 158, 0.2);
  padding: 2rem 0 1rem 0;

  .smaller_modal {
    display: none;
    visibility: none;
  }

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
    transition: all 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);

    path {
      stroke: rgba(var(--text-base), 0.6);
    }
  }

  @media only screen and (max-width: 768px) {
    top: unset;
    left: unset;
    border-right: unset;
    border-top: 2px solid rgba(126, 134, 158, 0.2);
    min-height: auto;
    width: 100%;
    bottom: 0;
    /* bottom: -10rem; */
    left: 0;
    flex-direction: row;
    padding: unset;

    .smaller_modal {
      display: block !important;
      visibility: visible !important;
    }
  }
`
export const NavWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  right: 0;

  svg {
    path {
      fill: rgba(var(--text-base), 0.6);
    }
  }
`

export const UpperWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-around;

    .smaller_profile {
      display: block !important;
      visibility: visible !important;
      position: relative;
      background-color: transparent;
      outline: none;
      border: none;
      margin-left: -0.5rem;
      cursor: pointer;

      img {
        border-radius: 50% !important;
      }
    }
  }

  .active_layout {
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    background-color: rgba(126, 134, 158, 0.25);
    border-radius: 0.8rem;
  }

  .smaller_profile {
    display: none;
    visibility: hidden;
  }
`

export const BottomWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
  margin-top: auto;
  position: relative;

  .bottom {
    width: 3rem;
    height: 3rem;
  }

  img {
    border-radius: 50% !important;
  }
`

export const SideElementWrapper = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  margin: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(.disable_hover):hover {
    background-color: rgba(126, 134, 158, 0.25);
    border-radius: 0.8rem;
    transition: background-color 0.5s cubic-bezier(0.075, 0.42, 0.165, 1);
    transition: border-radius 0.5s cubic-bezier(0.075, 0.32, 0.165, 1);

    svg {
      scale: 1.09;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: unset;

    &:nth-child(4) {
      display: none;
    }
  }
`

export const SideElement = styled(motion.div)`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const TopElement = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  margin: 1rem;
  border-radius: 0.5rem;
  display: grid;
  place-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
