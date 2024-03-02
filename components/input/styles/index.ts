import styled from "styled-components"

export const PasswordIconWrapper = styled.div`
  @media (hover: hover) {
    cursor: pointer;
  }
`

export const InputWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  user-select: none;

  svg {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    height: 3.2rem;
    background: transparent;
    font-size: 15px;
    font-weight: 500;
    color: rgba(var(--text-base), 0.7);
    border: solid 2px rgba(var(--text-base), 0.4);
    border-radius: 0.5rem;
    padding-left: 1.2rem !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::placeholder {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.005rem;
      color: rgba(var(--text-base), 0.6);
    }

    &:focus {
      outline: none;
      border-color: rgba(4, 176, 255, 1) !important;
    }

    &:hover {
      background: rgba(var(--text-base), 0.1);
    }

    /* disables the backdround color while autofilling */
    :-webkit-autofill {
      transition: background-color 5000s ease-in-out !important;
      color: rgba(var(--text-base), 0.5) !important;
    }

    @media (prefers-color-scheme: dark) {
      border: solid 2px rgba(219, 219, 220, 0.5);

      &:focus {
        border-color: rgba(23, 58, 116, 0.7) !important;
      }

      &:hover {
        background: rgba(52, 152, 219, 0.15);
      }

      &::placeholder {
        color: rgba(var(--text-base), 0.5) !important;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    input {
      height: 3rem;
      font-size: 0.95rem;
      font-weight: 400;
      border-radius: 0.4rem;
      padding-left: 0.8rem !important;
    }
  }

  @media only screen and (max-width: 486px) {
    margin: 0.75rem 0;

    input {
      height: 2.8rem;
    }
  }
`
