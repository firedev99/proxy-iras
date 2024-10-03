import { motion } from "framer-motion"
import styled from "styled-components"

export const TextWrapper = styled(motion.div)`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 64px 0;

  .warning_bitches {
    color: rgba(239, 68, 68, 1);
  }

  .notice {
    margin-top: 16px;
    text-align: center;
  }

  a {
    text-decoration: underline;
    text-decoration-color: rgba(239, 68, 68, 1);
  }

  h3 {
    font-family: var(--font-mono);
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
  }

  @media screen and (max-width: 1280px) {
    h3 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 640px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 415px) {
    /* height: calc(100vh - 4.3rem); */
  }

  @media screen and (max-width: 330px) {
    h3 {
      font-size: 1.2rem;
    }
  }
`
