import styled from "styled-components"

export const FAQPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  padding-bottom: 2rem;
`

export const PageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem 1.5rem 1rem;

  h2 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1.1rem;
  }

  a {
    padding: 0.55rem 1.75rem;
    border-radius: 0.25rem;
    margin-top: 0.8rem;
    border: none;
    color: rgb(241, 245, 249);
    font-family: var(--font-mono);
    font-weight: 500;
    background: rgb(var(--btn-color));
  }

  @media only screen and (max-width: 486px) {
    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
    }

    a {
      font-size: 0.85rem;
      padding: 0.5rem 1.2rem;
    }
  }
`

export const QuestionsWrapper = styled.div`
  width: 100%;
  padding: 1.2rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;

  .question_wrapper {
    border-bottom: 2px dashed;
    border-color: rgba(var(--text-base), 0.5);

    .answers {
      .faq_list {
        padding-bottom: 1rem;
        ul {
          list-style: none;
          li {
            margin: 0.25rem 0;
          }
        }
      }

      .links {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;

        a {
          text-decoration: underline red;
        }
      }
    }

    &:hover {
      cursor: pointer;
      .question {
        cursor: pointer;
        svg {
          fill: rgb(var(--text-base), 1);
        }
      }
    }
  }

  .question {
    display: flex;
    justify-content: space-between;
    min-height: 3rem;
    align-items: center;
    padding: 1rem 0;

    svg {
      width: 0.9rem !important;
      height: 0.9rem !important;
      fill: rgb(var(--text-base), 0.5);
    }
  }

  p {
    padding: 0 0 1rem 0;
  }

  @media only screen and (max-width: 486px) {
    padding: 0.5rem 1.2rem;

    .answers {
      .faq_list {
        ul {
          li {
            font-size: 0.9rem;
          }
        }
      }
    }

    .question {
      h4 {
        font-size: 0.95rem;
        font-weight: 600;
      }

      svg {
        display: none;
      }
    }
  }
`
