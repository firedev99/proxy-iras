import styled from "styled-components"

export const CourseHomePageWrapper = styled.div`
  padding: 2.8rem 0 3rem 0;

  @media only screen and (max-width: 768px) {
    padding: 1.5rem 0 2rem 0;
  }
`

export const CoursePageTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-left: 0.7rem;
    letter-spacing: 0.3px;
    font-family: var(--font-mono);
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`

export const ClassroomIconWrapper = styled.div`
  width: 3rem;
  height: 3rem;

  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media only screen and (max-width: 415px) {
    margin-left: -0.1rem;
  }
`

export const GoogleLoginWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-items: center;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: var(--font-mono);
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 420px;

    h1 {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 415px) {
    max-width: 420px;

    h1 {
      font-size: 1.1rem;
    }
  }
`
