import { motion } from "framer-motion"
import styled from "styled-components"

export const CalenderPageWrapper = styled.div`
  width: 100%;
  min-height: 950px;
  overflow: hidden;
  margin-top: 1rem;

  @media only screen and (max-width: 1280px) {
    min-height: 100%;
  }
`

export const CalenderElementWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 1fr));
  gap: 0.6rem 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  .calender_modal {
    position: absolute;
    height: 256px;
    overflow: auto;
    background-color: #eaeaea;
    box-shadow: 2px 2px 8px 2px rgba(18, 18, 18, 0.1);

    .assignment_info {
      margin-bottom: 0.5rem;
      span {
        font-size: 0.9rem;
      }
    }
  }

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

  @media only screen and (max-width: 768px) {
    max-width: 32rem;
    grid-template-columns: repeat(7, 1fr);
    gap: 0.5rem;
    row-gap: 1.5rem;
    column-gap: 0.5rem;
    margin: auto;
    margin-top: 6rem;

    .day_title {
      h3 {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    max-width: 28.5rem;
    width: 95%;
    margin-top: 8rem;

    .day_title {
      padding: 0rem;
    }

    .calender_modal {
      min-width: 100%;
    }
  }

  @media only screen and (max-width: 478px) {
    max-width: 25rem;
    row-gap: 1.2rem;
    column-gap: 0.2rem;

    .calender_modal {
      height: 95%;
      min-height: 95%;
    }
  }

  @media only screen and (max-width: 416px) {
    max-width: 20.5rem;
    row-gap: 1rem;
    column-gap: 0.1rem;

    .day_title {
      h3 {
        font-size: 0.7rem;
        margin-left: -0.25rem;
      }
    }
  }

  @media only screen and (max-height: 300px) {
    .calender_modal {
      height: 200px;
      min-height: 200px;
    }
  }

  @media only screen and (max-width: 338px) {
    row-gap: 0.6rem;
    max-width: 18rem;

    .calender_modal {
      min-height: 92%;
    }
  }
`
