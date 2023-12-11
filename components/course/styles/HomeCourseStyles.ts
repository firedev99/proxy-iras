import { motion } from "framer-motion"
import styled from "styled-components"

export const HomeCoursesWrapper = styled.div`
  min-height: 25rem;
  margin-left: 1.05rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 14rem;
  gap: 2rem;

  h1 {
    margin: auto;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 800;
    opacity: 0.7;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
    gap: 1.6rem;
    grid-auto-rows: 13rem;
    margin-left: -0.3rem;
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(172px, 1fr));
    gap: 1.2rem;
    grid-auto-rows: 11rem;
    margin-left: -0.2rem;
  }

  @media only screen and (max-width: 415px) {
    grid-template-columns: repeat(auto-fit, minmax(146px, 1fr));
    grid-auto-rows: 11rem;
    margin-left: -0.6rem;
    padding: 0 0.5rem;
  }

  @media only screen and (max-width: 380px) {
    grid-auto-rows: 9rem;
    margin-left: -0.5rem;
  }

  @media only screen and (max-width: 330px) {
    grid-auto-rows: 8rem;
    padding: 0 0.5rem;
  }
`

export const CourseElementWrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
`

export const CourseElement = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 1.5rem 1.5rem 1.5rem;
  color: rgba(var(--text-base), 0.9);

  h3 {
    font-size: 1.3rem;
    font-family: var(--font-mono);
    font-weight: 800;
    text-align: center;
    text-shadow: 1px 2px 2px rgba(var(--background-base), 0.1);
  }

  h5 {
    font-weight: 600;
    font-size: 1.05rem;
    text-shadow: 1px 2px 2px rgba(var(--background-base), 0.1);
  }

  span {
    margin-top: auto;
    margin-left: auto;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .time {
    letter-spacing: 1px;
  }

  @media only screen and (max-width: 1024px) {
    h3 {
      font-size: 1.2rem;
      line-height: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.1rem;
    }

    h5 {
      font-weight: 400;
    }
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
    }

    h5 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 576px) {
    padding: 2.6rem 1rem 1rem 1rem;

    /* make sure the line clamps within 3 line */
    h3 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h5 {
      font-size: 0.9rem;
    }

    span {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 486px) {
    padding: 2.8rem 0.8rem 1rem 0.8rem;

    h3 {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    h5 {
      font-size: 0.85rem;
    }

    span {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 380px) {
    padding: 2rem 0.6rem 0.8rem 0.6rem;

    h3 {
      font-size: 0.9rem;
      line-height: 1.1rem;
    }

    h5 {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 380px) {
    h3 {
      -webkit-line-clamp: 1;
    }
  }
`

export const GradeWrapper = styled.div`
  position: absolute;
  right: -2.65rem;
  top: -1.2rem;
  width: 5rem;
  height: 5rem;
  display: flex;

  .shape_fill {
    fill: #0ecac2;
  }

  .shape_fill_f {
    fill: rgb(252, 75, 108);
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-weight: 800;
    margin-top: -0.9rem;
    margin-left: -0.75rem;
  }

  @media only screen and (max-width: 768px) {
    width: 3.8rem;
    height: 3.8rem;
    right: -2rem;
    top: -1.5rem;

    span {
      font-weight: 600;
      font-size: 0.9rem;
      margin-top: -0.05rem;
      margin-left: -0.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 3.2rem;
    height: 3.2rem;
    right: -1.8rem;
    top: -1.8rem;

    span {
      font-weight: 600;
      font-size: 0.85rem;
      margin-top: 0.35rem;
      margin-left: -0.4rem;
    }
  }
`

export const ClassScheduleWrapper = styled.div`
  margin-left: 1.2rem;
  margin-bottom: 3.2rem;

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.3px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    color: rgba(var(--text-base), 0.9);
  }

  h4 {
    color: rgba(var(--text-base), 0.9);
  }

  .course_meta_wrapper {
    display: grid;
    max-width: 50rem;
    grid-template-columns: 86px 224px 64px 100px 150px;
    gap: 0.5rem;
    margin-left: 0.2rem;

    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: rgba(var(--text-base), 0.8);
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;

    h2 {
      font-size: 1.3rem;
    }

    h4 {
      font-size: 0.95rem;
      letter-spacing: 0.1px;
      font-weight: 600;
    }

    .course_meta_wrapper {
      margin-left: 0;
      font-size: 0.95rem;
      grid-template-columns: 72px 196px 42px 68px 120px;
    }
  }

  @media only screen and (max-width: 576px) {
    margin-bottom: 2.4rem;

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
      gap: 0.2rem;
      grid-template-columns: 60px 160px 36px 68px 110px;
    }
  }

  @media only screen and (max-width: 486px) {
    h4 {
      font-size: 0.85rem;
    }

    .course_meta_wrapper {
      font-size: 0.8rem;
      grid-template-columns: 50px 104px 28px 56px 96px;
    }
  }

  @media only screen and (max-width: 415px) {
    h2 {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 380px) {
    margin-bottom: 2rem;

    h4 {
      font-size: 0.8rem;
    }

    .course_meta_wrapper {
      font-size: 0.7rem;
      grid-template-columns: 48px 92px 28px 50px 86px;
    }
  }

  @media only screen and (max-width: 330px) {
    margin-bottom: 1.8rem;

    h2 {
      font-size: 1rem;
    }

    h4 {
      font-size: 0.7rem;
    }

    .course_meta_wrapper {
      font-size: 0.6rem;
      grid-template-columns: 40px 76px 20px 40px 72px;
    }
  }

  @media only screen and (max-width: 290px) {
    .course_meta_wrapper {
      font-size: 0.6rem;
      grid-template-columns: 40px 64px 20px 40px 72px;
    }
  }
`
