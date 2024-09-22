import { motion } from "framer-motion"
import styled from "styled-components"

export const HomeCoursesWrapper = styled.div<{ $graded: boolean }>`
  min-height: 25rem;
  margin-left: ${(props) => (props.$graded ? `-1.05rem` : `-0.7rem`)};
  margin-top: ${(props) => (props.$graded ? `3rem` : `1.8rem`)};
  margin-bottom: 1rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  grid-auto-rows: 14rem;
  gap: ${(props) => (props.$graded ? `2.4rem` : `1.5rem`)};
  padding: 0 1rem;
  padding-right: ${(props) => !props.$graded && "0"};

  h1 {
    margin: auto;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 800;
    opacity: 0.7;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
    margin-left: -0.8rem;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
    gap: ${(props) => (props.$graded ? `2rem` : `1.2rem`)};
    grid-auto-rows: 12rem;
    padding-left: 0.6rem;
    padding-right: ${(props) => (props.$graded ? "1rem" : "0")};
    margin-top: ${(props) => (props.$graded ? `2.5rem` : `1.6rem`)};

    h1 {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 415px) {
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
    grid-auto-rows: 10rem;

    h1 {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 380px) {
    gap: ${(props) => (props.$graded ? `1.6rem` : `1rem`)};
    padding-left: 0.8rem;
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
  box-shadow: inset 0 0 0 1px rgba(46, 46, 46, 0.3);

  @media (prefers-color-scheme: dark) {
    /* box-shadow: inset 0 0 0 1px rgba(248, 248, 248, 0.25); */
    box-shadow: inset 0 0 0 1px rgba(248, 248, 248, 0.35),
      2px 2px 6px 2px rgba(0, 0, 0, 0.1);
  }

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
    /* letter-spacing: 1px; */
  }

  h3 {
    font-size: 1.3rem;
    font-family: var(--font-josefin), sans-serif;
    font-weight: 600;
    text-align: center;
    opacity: 0.9;
  }

  h5 {
    font-weight: 500;
    font-size: 0.9rem;
    text-shadow: 1px 2px 2px rgba(var(--background-base), 0.1);
    opacity: 0.9;
  }

  @media only screen and (max-width: 1024px) {
    h3 {
      font-size: 1.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    h5 {
      /* font-weight: 500; */
    }
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    h5 {
      font-size: 0.85rem;
    }
  }

  @media only screen and (max-width: 380px) {
    h3 {
      font-size: 0.9rem;
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

  @media only screen and (max-width: 1024px) {
    opacity: 0.9;
    span {
      font-size: 0.9rem;
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
  right: -1.2rem;
  top: -1.2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  background: rgb(var(--btn-color));
  align-items: center;
  justify-content: center;

  span {
    color: rgb(235, 239, 248);
    font-size: 1.25rem;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;

    span {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 380px) {
    width: 2.5rem;
    height: 2.5rem;
    right: -1.2rem;
    top: -1.2rem;

    span {
      font-size: 0.85rem;
    }
  }
`

export const HomeEmptyWrapper = styled.div`
  min-height: 27rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 0;
  }

  p {
    text-align: center;
    opacity: 0.7;
  }

  .home {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 0.7rem;
    }
  }
`
