import styled from "styled-components"

export const LoginFormWrapper = styled.form`
  max-width: 456px;

  h1 {
    font-size: 3.85rem;
    font-weight: 800;
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
    font-family: var(--font-base), sans-serif;
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
`
