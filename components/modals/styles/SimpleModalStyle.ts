import { motion } from "framer-motion"
import styled from "styled-components"

export const PopupModalWrapper = styled(motion.div)<{ $overlay: boolean }>`
  border-radius: 0.4rem;
  min-width: 242px;
  min-height: 112px;
  background: rgb(235, 239, 248);
  position: fixed;
  position: ${(props) => props.$overlay && "absolute"};
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4.2rem 1rem 2rem 1rem;
  color: rgb(18, 18, 18);

  .close_control {
    background: rgba(217, 217, 217, 0.7);
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    transition: all ease 0.1s;
    position: absolute;
    top: 1rem;
    right: 0.8rem;

    svg {
      path {
        fill: rgba(18, 18, 18, 0.8);
      }
    }

    &:hover {
      cursor: pointer;
    }

    &:hover {
      background: rgba(217, 217, 217, 1);
    }
  }
`
