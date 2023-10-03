import { motion } from "framer-motion"
import styled from "styled-components"

export const CalenderPageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

export const CalenderElementWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 1fr));
  gap: 0.6rem 1.2rem;
  margin-top: 1rem;

  .day_title {
    width: 100%;
    text-align: center;
    padding: 1rem;

    h3 {
      font-size: 1.1rem;
      font-weight: 800;
      opacity: 0.7;
    }
  }

  .auto_view {
    background: rgb(24, 113, 172) !important;
  }

  .disable_view {
    cursor: not-allowed;
    background-color: rgba(126, 134, 158, 0.15) !important;
  }

  @media only screen and (max-width: 1280px) {
    max-width: 42rem;
    grid-template-columns: repeat(7, 1fr);
    gap: 1rem;
    margin: auto;
    margin-top: 7rem;

    .day_title {
      padding: 0rem;

      h3 {
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
`
