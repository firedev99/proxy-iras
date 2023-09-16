import { motion } from "framer-motion"
import styled from "styled-components"

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
    border-radius: 0.5rem;
  }
`

export const BottomWrapper = styled.div`
  margin-top: auto;
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
    border-radius: 0.5rem;
    transition: background-color 1s cubic-bezier(0.075, 0.42, 0.165, 1);
    transition: border-radius 0.7s cubic-bezier(0.075, 0.32, 0.165, 1);
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
