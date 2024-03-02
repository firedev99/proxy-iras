import { motion } from "framer-motion"
import styled from "styled-components"

export const SVGWrapper = styled.div``

export const AvatarSVG = styled.svg`
  width: 86px;

  @media only screen and (max-width: 768px) {
    width: 68px;
  }

  @media only screen and (max-width: 468px) {
    width: 48px;
  }
`

export const BlueBackground = styled(motion.circle)`
  fill: #4c9aff;
  transform-origin: 50% 50%;
`

export const HandLeft = styled(motion.ellipse)`
  fill: #e8b356;
  transform-origin: center;
`

export const HandRight = styled(motion.ellipse)`
  fill: #e8b356;
  transform-origin: center;
`

export const AvatarMain = styled(motion.g)`
  transform-origin: top;
`
