import styled from "styled-components"

export const TermsPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const TermsContentWrapper = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  padding: 2rem 0.5rem;

  button {
    background: transparent;
    outline: none;
    border: none;

    svg {
      width: 3.6rem;
      height: 3.6rem;
      stroke: rgba(var(--text-base), 0.7);
      transition: all 0.3s ease;
    }

    &:hover {
      cursor: pointer;
      svg {
        stroke: rgba(var(--btn-color, 0.7));
      }
    }
  }

  .btn_left {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }

  .btn_right {
    position: absolute;
    right: 2rem;
    top: 1.5rem;
    transform: rotate(180deg);
  }

  @media only screen and (max-width: 1536px) {
    padding: 3rem 1rem;

    .btn_left {
      right: unset;
      bottom: unset;
      top: 0.7rem;
      left: 0.3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 0rem;

    .btn_left {
      left: 1rem;
      top: 1.9rem;
      svg {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    .btn_right {
      right: 1.2rem;
      top: 1.2rem;

      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }
`

export const TermSection = styled.div`
  margin-top: 1.5rem;

  h1,
  h2 {
    font-family: var(--font-mono);
  }

  h2 {
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
    margin-left: 0.2rem;
  }

  p {
    font-size: 1.05rem;
    margin-top: 1.25rem;

    &:first-of-type {
      margin-top: 0.5rem;
    }

    a {
      color: #e35384;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 1.8rem;
    p {
      font-size: 0.95rem;
      margin-top: 1rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    &:nth-of-type(2) {
      margin-top: 1.2rem;
    }
  }
`
