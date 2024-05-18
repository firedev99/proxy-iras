import styled, { keyframes } from "styled-components"

export const CourseHomePageWrapper = styled.div<{ $g_auth: boolean }>`
  padding: ${(props) => (props.$g_auth ? "4rem 0" : "0.5rem 0 4rem 0")};

  @media only screen and (max-width: 1536px) {
    padding: ${(props) =>
      props.$g_auth ? "4rem 0.5rem" : "0.5rem 0.5rem 4rem 0.5rem"};
  }

  @media only screen and (max-width: 768px) {
    padding: ${(props) =>
      props.$g_auth ? "5rem 0.5rem" : "1.3rem 0.5rem 4rem 0.5rem"};
  }

  @media only screen and (max-width: 600px) {
    padding: ${(props) =>
      props.$g_auth ? "3rem 0.5rem" : "0 0.5rem 3rem 0.5rem"};
  }

  @media only screen and (max-width: 330px) {
    margin-top: -0.5rem;
  }
`

export const CoursePageTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-left: 0.7rem;
    letter-spacing: 0.3px;
    font-family: var(--font-josefin), sans-serif;
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
  max-width: 564px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-items: center;
  margin: 0 auto;
  text-align: center;
  margin-top: 2rem;

  h1 {
    font-family: var(--font-josefin), sans-serif;
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

// Specific Course Page Styling
const bgEffect = keyframes`
  from {
    background-size: 200%;
  }

  to {
    background-size: 100%;
  }

`

export const CoursePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0 2rem 0;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  .course_page_modal {
    max-width: 420px;
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      margin-left: auto;
      font-size: 0.9rem;
      font-family: var(--font-josefin), sans-serif;
    }

    h4 {
      font-weight: 600;
      font-size: 0.9rem;
    }

    .due_assignment_next {
      width: 72px;
      height: 32px;
      background: rgba(var(--btn-color), 0.15);
      outline: none;
      border: none;
      border-radius: 4px;
      color: rgba(18, 18, 18, 0.8);
      transition: all ease 0.1s;
      font-weight: 600;
      margin-top: 0.75rem;

      &:hover {
        background: rgba(var(--btn-color), 0.2);
        cursor: pointer;
      }
    }
  }

  h2 {
    font-size: 5rem;
    font-family: var(--font-josefin), sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    animation: ${bgEffect} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: -webkit-linear-gradient(
      74deg,
      #4285f4 0%,
      #9b72cb 10%,
      #d96570 20%,
      #d96570 25%,
      #9b72cb 35%,
      #4285f4 45%,
      #9b72cb 50%,
      #d96570 55%,
      #272d33 75%,
      #121212 100%
    );
    background: linear-gradient(
      74deg,
      #4285f4 0%,
      #9b72cb 10%,
      #d96570 20%,
      #d96570 25%,
      #9b72cb 35%,
      #4285f4 45%,
      #9b72cb 50%,
      #d96570 55%,
      #272d33 75%,
      #121212 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: rgb(0 0 0 / 20%);
  }

  @media only screen and (max-width: 600px) {
    padding: 4.5rem 0 0 0;

    h2 {
      font-size: 4.4rem;

      background: -webkit-linear-gradient(
        74deg,
        #4285f4 0%,
        #9b72cb 10%,
        #d96570 20%,
        #d96570 25%,
        #9b72cb 35%,
        #4285f4 45%,
        #9b72cb 50%,
        #d96570 80%,
        #272d33 95%,
        #121212 100%
      );
      background: linear-gradient(
        74deg,
        #4285f4 0%,
        #9b72cb 10%,
        #d96570 20%,
        #d96570 25%,
        #9b72cb 35%,
        #4285f4 45%,
        #9b72cb 50%,
        #d96570 80%,
        #272d33 95%,
        #121212 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: rgb(0 0 0 / 20%);
    }
  }

  @media only screen and (max-width: 416px) {
    h2 {
      font-size: 4rem;
    }
  }

  @media only screen and (max-width: 360px) {
    h2 {
      font-size: 3rem;
      background-clip: text;
      -webkit-background-clip: text;
      color: rgb(0 0 0 / 20%);
    }
  }

  @media only screen and (max-width: 338px) {
    padding-top: 4rem;
  }
`

export const CoursePageContent = styled.div`
  width: 100%;
`

export const AnimatedSceneWrapper = styled.div`
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem;

  p {
    margin-top: -2.5rem;
    margin-left: -1rem;
  }

  @media only screen and (max-width: 368px) {
    p {
      margin-top: -1.5rem;
      margin-left: -0.5rem;
    }
  }
`

export const CourseWorksWrapper = styled.div`
  font-family: var(--font-josefin), sans-serif;
  margin-left: auto;
  margin-bottom: 1rem;
  width: 13.25rem;
  height: 7rem;
  padding: 1rem;
  border-radius: 0.3rem;
  background: rgba(235, 239, 248, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`
export const CoursePostsWrapper = styled.div`
  width: 100%;
`
