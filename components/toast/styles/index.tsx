import { motion } from "framer-motion"
import styled from "styled-components"

export const ToastContainerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

export const ToastWrapper = styled(motion.div)`
  width: 14.5rem;
  padding: 0.8rem;
  margin-top: 16px;
  margin-right: 16px;
  font-size: 0.9rem;
  background: rgba(4, 176, 255, 1);
  color: rgb(var(--background-base));
  font-weight: 600;
  border-radius: 0.5rem;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
`
