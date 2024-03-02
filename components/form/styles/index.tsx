import styled from "styled-components"

export const LoginFormWrapper = styled.form`
  max-width: 456px;
  /* margin-top: -2rem; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .permission_checkbox {
    display: flex;
    margin-top: -0.25rem;
    margin-bottom: 0.5rem;
    margin-left: 0.2rem;

    label {
      opacity: 0.8;
      font-weight: 500;

      a {
        color: #e35384;
        font-weight: 600;
      }
    }

    input {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      margin-top: 0.22rem;

      &::placeholder {
        font-family: var(--font-josefin), sans-serif;
      }
    }
  }

  h1 {
    font-family: var(--font-josefin), sans-serif;
    text-transform: uppercase;
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
    margin-top: 0.5rem;
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

  @media only screen and (max-height: 600px), (max-width: 768px) {
    margin-top: -0.5rem;
    max-width: 80%;
    width: 80%;

    .permission_checkbox {
      input {
        margin-top: 0.15rem;
      }

      label {
        font-size: 0.9rem;
      }
    }

    h1 {
      font-size: 3rem;
    }

    span:not(.btn) {
      font-size: 0.9rem;
    }

    button {
      height: 3.2rem;
      border-radius: 0.6rem;
      margin-top: 0.2rem;
    }
  }

  @media only screen and (max-width: 485px) {
    max-width: 100%;
    width: 100%;

    .permission_checkbox {
      input {
        margin-right: 0.4rem;
      }
    }

    h1 {
      font-size: 3rem;
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

  @media only screen and (max-width: 380px) {
    h1 {
      font-size: 2.7rem;
      margin-left: -0.2rem;
    }

    span:not(.btn) {
      font-size: 0.85rem;
    }

    .btn {
      font-size: 1rem;
    }

    button {
      height: 3.2rem;
      border-radius: 0.4rem;
    }
  }

  @media only screen and (max-width: 320px) {
    h1 {
      font-size: 2.4rem;
    }

    span:not(.btn) {
      font-size: 0.75rem;
    }
  }
`
