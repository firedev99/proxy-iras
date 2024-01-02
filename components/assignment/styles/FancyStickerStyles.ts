import { motion } from "framer-motion"
import styled from "styled-components"

export const FancyStickerWrapper = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  width: 86px;
  height: 136px;
`

export const FancyStickerImage = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;

  img {
    object-fit: contain;
  }
`
