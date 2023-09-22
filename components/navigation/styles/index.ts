import { motion } from "framer-motion"
import styled from "styled-components"

export const ProfileMenu = styled(motion.div)`
  width: 156px;
  height: 3rem;
  position: absolute;
  background: rgb(var(--text-base));
  bottom: 4.8rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    color: rgb(var(--background-base));
    display: flex;
    align-items: center;
    padding-left: 0.3rem;

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
  }

  &:hover {
    background: rgba(24, 113, 172, 1);

    button {
      cursor: pointer;

      span {
        color: rgba(255, 255, 255, 1);
      }

      svg {
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
  .active_layout {
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    background-color: rgba(126, 134, 158, 0.25);
    border-radius: 0.8rem;
  }
`

export const BottomWrapper = styled.div`
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

export const SideElement = styled(motion.div)`
  width: 3.5rem;
  height: 3.5rem;
  margin: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:not(.disable_hover):hover {
    background-color: rgba(126, 134, 158, 0.25);
    border-radius: 0.8rem;
    transition: background-color 0.5s cubic-bezier(0.075, 0.42, 0.165, 1);
    transition: border-radius 0.5s cubic-bezier(0.075, 0.32, 0.165, 1);

    svg {
      scale: 1.09;
    }
  }
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
