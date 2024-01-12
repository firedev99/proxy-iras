import { motion } from "framer-motion"
import styled from "styled-components"

export const TextWrapper = styled(motion.div)`
  width: 100%;
  min-height: 20rem;
  margin-top: auto;
  display: grid;
  place-items: center;

  h3 {
    font-family: var(--font-mono);
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
  }

  @media screen and (max-width: 1536px) {
    h3 {
      font-size: 3.25rem;
    }
  }

  @media screen and (max-width: 768px),
    (max-height: 768px) and (orientation: landscape) {
    height: calc(100vh - 5rem);
    h3 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 415px) {
    height: calc(100vh - 4.3rem);

    h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 330px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`
