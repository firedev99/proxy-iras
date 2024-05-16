import styled from "styled-components"

export const ErrorPageWrapper = styled.div`
  min-height: calc(100vh - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.5rem;

    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  a {
    text-transform: uppercase;
    padding: 0.75rem 1.2rem;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    border: none;
    color: rgb(241, 245, 249);
    font-family: var(--font-mono);
    font-weight: 500;
    background: rgb(var(--btn-color));
  }

  .animation {
    width: 400px;
    margin-bottom: -2rem;
  }

  @media only screen and (max-width: 416px) {
    .animation {
      width: 224px;
      margin-bottom: -1.5rem;
    }

    a {
      font-size: 0.9rem;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`
