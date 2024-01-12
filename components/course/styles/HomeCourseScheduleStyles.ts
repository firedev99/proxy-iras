import styled from "styled-components"

export const ClassScheduleWrapper = styled.div`
  margin-left: 0.5rem;
  margin-top: 1.5rem;

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

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 338px) {
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
