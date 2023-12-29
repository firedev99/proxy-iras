import { motion } from "framer-motion"
import styled from "styled-components"

export const ToastWrapper = styled(motion.div)`
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 14.5rem;
  padding: 0.8rem;
  font-size: 0.8rem;
  background: rgb(34, 153, 221);
  font-weight: 500;
  color: rgba(241, 245, 249, 1);
  border-radius: 0.5rem;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;

  @media only screen and (max-width: 415px) {
    padding: 0.6rem;
  }
`
