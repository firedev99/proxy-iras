import { motion } from "framer-motion"
import styled from "styled-components"

export const HomeCoursesWrapper = styled.div`
  min-height: 25rem;
  margin-left: 1.05rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
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
    grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
    margin-left: 0.8rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
    gap: 1.6rem;
    grid-auto-rows: 12rem;
    gap: 1.2rem;
    margin-left: -0.2rem;
    margin-bottom: 1rem;

    h1 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 415px) {
    grid-template-columns: repeat(auto-fit, minmax(146px, 1fr));
    margin-left: -0.6rem;
    padding: 0 0.5rem;
    grid-auto-rows: 10rem;

    h1 {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 380px) {
    grid-auto-rows: 10rem;
    margin-left: -0.5rem;
  }

  @media only screen and (max-width: 338px) {
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
  padding: 1.5rem;
  color: rgba(var(--text-base), 0.9);
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`

export const HomeCourseMeta = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .time {
    letter-spacing: 1px;
  }

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
      font-size: 1rem;
      line-height: 1.15rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h5 {
      font-size: 0.85rem;
    }
  }

  @media only screen and (max-width: 380px) {
    h3 {
      font-size: 0.9rem;
      line-height: 1rem;
    }

    h5 {
      font-size: 0.8rem;
    }
  }
`
export const HomeCourseAttendanceStatus = styled.div`
  margin-left: auto;
  font-weight: 600;
  font-size: 1.1rem;

  @media only screen and (max-width: 768px) {
    span {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 380px) {
    span {
      font-size: 0.8rem;
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
