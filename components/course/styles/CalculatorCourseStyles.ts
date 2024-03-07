import styled from "styled-components"

export const CalculatorCourseWrapper = styled.div`
  display: flex;
  align-items: center;

  select {
    padding: 0.2rem;
  }

  button {
    margin-top: 0.65rem;
    width: 28px;
    min-width: 28px;
    min-height: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    display: grid;
    place-items: center;
    background: rgba(var(--btn-color), 0.15);
    transition: all 0.3s ease-out;
    opacity: 0;

    svg {
      width: 1rem;
      height: 1rem;
      path {
        fill: rgba(18, 18, 18, 0.7);
      }
    }
  }

  &:hover {
    button {
      opacity: 1;
      cursor: pointer;
    }
  }
`
