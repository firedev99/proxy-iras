import styled from "styled-components"

export const ClassroomCoursesWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  grid-auto-rows: 14rem;
  gap: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
    gap: 1.6rem;
    grid-auto-rows: 13rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 600px) {
    column-gap: 1.1rem;
    row-gap: 1.6rem;
    grid-auto-rows: 11rem;
    margin-left: -0.1rem;
  }

  @media only screen and (max-width: 415px) {
    grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
    margin-left: -0.3rem;
  }
`

export const ClassroomCourseWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
  border: 2px solid rgba(var(--text-base), 0.7);
  box-shadow: 4px 4px rgb(var(--text-base), 1);
  display: flex;
  flex-direction: column;
`

export const ClassroomCourseMeta = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  padding: 0.5rem;

  h3 {
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    h3 {
      font-size: 1rem;
    }
  }
`

export const ClassroomAssignmentStatus = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(var(--text-base), 0.1);
  border-bottom-left-radius: 0.45rem;
  border-bottom-right-radius: 0.45rem;
  padding: 0.5rem;

  span {
    font-size: 0.8rem;
    font-family: var(--font-mono);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    min-height: 2rem;
    opacity: 0.9;

    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  @media only screen and (max-width: 768px) {
    span {
      font-size: 0.75rem;
    }
  }
`
