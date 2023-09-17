import styled from "styled-components"

export const InputWrapper = styled.div`
  margin: 1.4rem 0;

  input {
    width: 100%;
    height: 3.5rem;
    background: transparent;
    font-size: 17px;
    font-weight: 600;
    color: rgba(var(--text-base), 0.7);
    border: solid 2px rgba(var(--text-base), 0.4);
    border-radius: 0.75rem;
    padding-left: 1.2rem !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::placeholder {
      font-size: 17px;
      font-weight: 600;
      font-family: var(--font-base), sans-serif;
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
`