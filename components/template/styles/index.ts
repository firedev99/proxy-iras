import { motion } from "framer-motion"
import styled from "styled-components"

export const TextWrapper = styled(motion.div)`
  width: 100%;
  min-height: 20rem;
  height: calc(100vh - 5rem);
  height: 400px;
  margin-top: auto;
  display: grid;
  place-items: center;
  max-width: 768px;
  margin: 0 auto;

  /* a {
    text-decoration: underline;
    text-decoration-color: red;
  } */

  h3 {
    font-family: var(--font-mono);
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;

    /* font-size: 1.5rem;
    max-width: 420px; */
  }

  @media screen and (max-width: 1536px) {
    h3 {
      font-size: 3.25rem;
    }

    h3 {
      font-size: 2rem;
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
