import { motion } from "framer-motion"
import styled from "styled-components"

export const AssginmentPreviewTime = styled.div`
  text-align: right;

  span {
    font-size: 0.75rem !important;
    font-weight: 500;
    opacity: 0.7;
    font-family: var(--font-josefin), sans-serif;
  }
`

export const PreviewElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    overflow: hidden;
    flex-direction: row;
    margin-left: 0.1rem;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0.2rem;
    min-height: 4px;
    width: 20px;
  }

  @media only screen and (max-width: 478px) {
    margin-left: 0.1rem;
    min-height: 4px;
    width: 15px;
  }

  @media only screen and (max-width: 338px) {
    margin-left: 0.1rem;
    margin-top: -1px;
    min-height: 4px;
  }
`

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
    text-align: center !important;
    white-space: unset !important;
  }

  @media only screen and (max-width: 1280px) {
    width: 5rem;
    height: 5rem;
    min-height: 5rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  @media only screen and (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    min-height: 4rem;

    time {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 3.5rem;
    height: 3.5rem;
    min-height: 3.5rem;
  }

  @media only screen and (max-width: 478px) {
    width: 3rem;
    height: 3rem;
    min-height: 3rem;
    font-weight: 500;

    time {
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 416px) {
    width: 2.5rem;
    height: 2.5rem;
    min-height: 2.5rem;

    time {
      font-size: 0.65rem;
    }
  }

  @media only screen and (max-width: 338px) {
    width: 2.2rem;
    height: 2.2rem;
    min-height: 2.2rem;

    time {
      font-size: 0.6rem;
      font-family: 400;
    }
  }
`

export const CalenderHoverModal = styled(motion.div)`
  min-width: 12rem !important;
  text-align: center !important;
  position: absolute !important;
  background: rgb(241, 245, 249);

  padding: 0.55rem 0.8rem;
  border-radius: 0.25rem;
  bottom: -2.6rem;
  box-shadow: 1px 1px 4px rgba(18, 18, 18, 0.7);
  z-index: 99999;

  span {
    font-weight: 600;
    color: rgba(18, 18, 18, 0.7);
    font-size: 0.8rem;
  }
`

export const AssignmentPreviewWrapper = styled(motion.div)`
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
    margin-top: 2px;
    border-radius: 50%;
    width: 0.8rem;
    min-width: 0.8rem;
    height: 0.8rem;
    margin-right: 2px;

    .work_course_name,
    .ellipsis {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 0.5rem;
    min-width: 0.5rem;
    height: 0.5rem;
    margin-top: 0;
    margin-right: 1.5px;
  }

  @media only screen and (max-width: 600px) {
    width: 0.25rem;
    min-width: 0.25rem;
    height: 0.25rem;
    margin-right: 2.5px;
  }
  @media only screen and (max-width: 478px) {
    margin-right: 1px;
  }
`

export const CalenderControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CalenderMainControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.2rem;
  margin-top: 3rem;
  align-self: flex-end;
  margin-right: 0.2rem;

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: rgba(var(--text-base), 0.8);
  }

  .control_wrappers {
    display: flex;
  }

  /* hover data context */

  /* [data-title]:after {
    bottom: -1.8rem !important;
    left: 50% !important;
  }

  .prev_button[data-title]:after {
    left: unset !important;
    right: 50% !important;
  } */

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
    margin-left: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 6rem;

    h2 {
      font-size: 1.5rem;
    }

    .prev_button {
      margin-left: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    max-width: 28.5rem;
    justify-content: space-between;
    padding: 0 0.8rem;
    margin-top: 8rem;

    .prev_button {
      margin-left: 0;
      margin-right: 0.5rem;
    }

    button {
      width: 2.8rem;
      height: 2.8rem;

      svg {
        width: 0.9rem;
      }
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 478px) {
    max-width: 25rem;
    row-gap: 1.2rem;
    column-gap: 0.2rem;

    .calender_modal {
      min-height: 100%;
    }
  }

  @media only screen and (max-width: 416px) {
    max-width: 20.5rem;
  }

  @media only screen and (max-width: 338px) {
    max-width: 18rem;

    h2 {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`
export const CalenderIndicators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 0.85rem !important;
  }

  @media only screen and (max-width: 600px) {
    span {
      font-size: 0.75rem !important;
    }
  }
`

export const CalenderIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.3rem;

  .work_indicator_bg {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 0.2rem;
    margin-right: 0.6rem;
  }

  &:first-of-type {
    margin-top: unset;
  }

  @media only screen and (max-width: 1280px) {
    .work_indicator_bg {
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: 600px) {
    .work_indicator_bg {
      width: 0.9rem;
      height: 0.9rem;
      margin-right: 0.4rem;
    }
  }
`
