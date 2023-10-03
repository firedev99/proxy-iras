import styled from "styled-components"

export const CalenderElement = styled.div`
  position: relative;
  border: 2px solid rgba(126, 134, 158, 0.2);
  border-radius: 0.4rem;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  min-height: 8rem;

  time {
    font-size: 1.2rem;
    font-weight: 600;
  }

  [data-title]:after {
    min-width: 10rem !important;
    white-space: unset !important;
    text-align: center !important;
  }

  @media only screen and (max-width: 1280px) {
    width: 5rem;
    height: 5rem;
    min-height: 5rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
`

export const AssignmentPreviewWrapper = styled.div`
  padding: 0.25rem;
  border-radius: 0.25rem;
  position: relative;
  background: rgb(24, 113, 172); /* fallback bg */
  margin-top: 0.5rem;

  .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .work_course_name {
    font-size: 0.75rem;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 1280px) {
    padding: unset;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;

    .work_course_name,
    .ellipsis {
      display: none;
    }
  }
`

export const CalenderControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CalenderControlsLeft = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
  }

  .control_wrappers {
    display: flex;
  }

  [data-title]:after {
    bottom: -1.8rem !important;
    left: 50% !important;
  }

  .prev_button[data-title]:after {
    left: unset !important;
    right: 50% !important;
  }

  .prev_button {
    margin-left: 1.2rem;
    margin-right: 0.8rem;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: rgba(126, 134, 158, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

    svg {
      width: 1.2rem;
      height: 1.2rem;
      margin-left: 0.2rem;
      path {
        stroke: rgba(var(--text-base), 0.6);
      }
    }

    &:hover {
      background-color: rgba(126, 134, 158, 0.35);
    }
  }

  @media only screen and (max-width: 1280px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 7.5rem;

    h2 {
      font-size: 1.5rem;
    }

    .prev_button {
      margin-left: 1rem;
    }
  }
`
export const CalenderControlsRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin: 1rem 0;
    font-size: 1.1rem;
    text-transform: uppercase;
  }
`

export const CalenderIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.3rem;

  .work_indicator_bg {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
    margin-right: 0.6rem;
  }

  span {
    font-size: 0.9rem;
  }

  &:first-of-type {
    margin-top: unset;
  }
`
