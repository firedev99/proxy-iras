import styled from "styled-components"

export const LoginFormWrapper = styled.form`
  max-width: 456px;
  margin-top: -2rem;

  h1 {
    font-family: var(--font-mono);
    font-size: 3.85rem;
    font-weight: 800;
    margin-left: -0.2rem;
  }

  span {
    font-size: 18px;
    opacity: 0.6;
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 3.8rem;
    border-radius: 0.75rem;
    margin-top: 1rem;
    border: none;
    color: rgb(241, 245, 249);
    font-family: var(--font-mono);
    font-size: 1.2rem;
    font-weight: 600;
    background: rgb(var(--btn-color));

    span {
      opacity: 1;
    }

    svg {
      margin-top: 0.2rem;
      fill: rgb(241, 245, 249);
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-height: 600px) {
    margin-top: -1rem;
  }

  @media only screen and (max-width: 486px) {
    max-width: 100%;
    width: 100%;

    h1 {
      font-size: 3rem;
      line-height: 3.7rem;
    }

    span:not(.btn) {
      font-size: 0.9rem;
    }

    button {
      height: 3.6rem;
      border-radius: 0.6rem;
      margin-top: 0.5rem;
    }
  }

  @media only screen and (max-width: 360px) {
    h1 {
      font-size: 2.7rem;
      line-height: 3.2rem;
      margin-left: -0.1rem;
    }

    span:not(.btn) {
      font-size: 0.85rem;
    }

    .btn {
      font-size: 1.1rem;
    }

    button {
      height: 3.4rem;
      border-radius: 0.4rem;
      margin-top: 0.4rem;
    }
  }

  @media only screen and (max-width: 320px) {
    h1 {
      font-size: 2.4rem;
      line-height: 2.6rem;
    }
    span:not(.btn) {
      font-size: 0.75rem;
    }
  }
`
