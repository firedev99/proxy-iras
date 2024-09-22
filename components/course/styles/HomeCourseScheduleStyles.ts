import { motion } from "framer-motion"
import styled from "styled-components"

export const ClassScheduleHeader = styled.div`
  position: relative;
  width: fit-content;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.3px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: rgba(var(--text-base), 0.8);
  }

  .share_control {
    border: none;
    position: absolute;
    top: 0.1rem;
    right: -3.5rem;
    cursor: pointer;
    width: 2.4rem;
    border-radius: 0.25rem;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(var(--text-base), 0.15);

    svg {
      path {
        stroke: rgba(var(--text-base), 0.8);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }

    .share_control {
      right: -2.8rem;
      width: 2rem;
      border-radius: 0.15rem;
      padding: 0.15rem;

      svg {
        width: 1.15rem;
        height: 1.15rem;

        path {
          stroke: rgba(var(--text-base), 0.8);
        }
      }
    }
  }

  @media only screen and (max-width: 415px) {
    h2 {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 338px) {
    h2 {
      font-size: 1rem;
    }

    .share_control {
      top: -1px;
      right: -2.5rem;
      border-radius: 0.15rem;
      padding: 0.2rem;

      svg {
        width: 1rem;
        height: 1rem;

        path {
          stroke-width: 1px;
          stroke: rgba(var(--text-base), 0.8);
        }
      }
    }
  }
`

export const ClassScheduleWrapper = styled(motion.div)`
  margin-left: 0.5rem;
  margin-top: 1.5rem;

  h4 {
    color: rgba(var(--text-base), 0.8);
  }

  .course_meta_wrapper {
    display: grid;
    max-width: 50rem;
    grid-template-columns: 80px 224px 48px 82px 150px;
    row-gap: 0.2rem;

    .section_single {
      margin-left: 0.45rem;
    }

    .section_double {
      margin-left: 0.2rem;
    }

    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: rgba(var(--text-base), 0.8);
      font-weight: 500;
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 2px;

    h2 {
      font-size: 1.3rem;
    }

    h4 {
      font-size: 0.95rem;
      letter-spacing: 0.1px;
      font-weight: 600;
    }

    .course_meta_wrapper {
      column-gap: 0.3rem;
      margin-left: 0;
      font-size: 0.95rem;
      grid-template-columns: 72px 196px 42px 68px 120px;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 2rem;

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.2rem;
    }

    h4 {
      font-size: 0.9rem;
    }

    .course_meta_wrapper {
      margin-left: 0;
      font-size: 0.85rem;
      grid-template-columns: 60px 160px 36px 60px 110px;

      .section_single {
        margin-left: 0.35rem;
      }
    }
  }

  @media only screen and (max-width: 486px) {
    margin-bottom: 1.8rem;
    margin-top: 1.2rem;

    h4 {
      font-size: 0.85rem;
    }

    .course_meta_wrapper {
      font-size: 0.8rem;
      grid-template-columns: 50px 104px 25px 52px 96px;
    }
  }

  @media only screen and (max-width: 415px) {
    margin-left: 0;

    h2 {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 380px) {
    margin-left: 2px;
    margin-bottom: 1.5rem;
    margin-top: 1rem;

    h4 {
      font-size: 0.8rem;
    }

    .course_meta_wrapper {
      font-size: 0.7rem;
      grid-template-columns: 46px 92px 22px 46px 86px;
    }
  }

  @media only screen and (max-width: 338px) {
    margin-left: 0;

    h2 {
      font-size: 1rem;
    }

    h4 {
      font-size: 0.7rem;
    }

    .course_meta_wrapper {
      font-size: 0.6rem;
      grid-template-columns: 38px 76px 20px 38px 72px;
    }
  }

  @media only screen and (max-width: 290px) {
    .course_meta_wrapper {
      font-size: 0.6rem;
      grid-template-columns: 40px 64px 20px 40px 72px;
    }
  }
`
