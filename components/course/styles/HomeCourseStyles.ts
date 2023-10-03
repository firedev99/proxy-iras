import { motion } from "framer-motion"
import styled from "styled-components"

export const HomeCoursesWrapper = styled.div`
  width: 100%;
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

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
  }

  h5 {
    font-weight: 800;
    font-size: 1.1rem;
  }

  span {
    font-weight: 800;
  }

  .time {
    letter-spacing: 2px;
  }
`

export const GradeWrapper = styled.div`
  position: absolute;
  right: -1.7rem;
  top: -1.1rem;
  width: 3.5rem;
  height: 3.2rem;

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
  }
`

export const ClassScheduleWrapper = styled.div`
  margin-left: 1.2rem;
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 0.5rem;
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
    }
  }
`
