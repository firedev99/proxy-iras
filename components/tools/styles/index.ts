import { motion } from "framer-motion"
import styled from "styled-components"

export const EmptyWrapper = styled.div`
  max-width: 20rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: -2.25rem;
    margin-bottom: 1rem;
  }
`

export const FilteringOption = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.3rem;
  padding-right: 1.3rem;

  input {
    border-radius: 1rem;
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    padding-left: 2.6rem;
    color: rgb(var(--text-base));
    font-size: 0.95rem;
    font-weight: 500;
    outline: 1px solid rgb(var(--text-base));
    outline-offset: 6px;

    &::placeholder {
      color: rgb(var(--text-base));
      font-family: var(--font-josefin), sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
    }

    /* overwrite the focus styling */

    &:focus-visible {
      outline-style: solid;
      outline-color: rgb(var(--btn-color));
      outline-width: 2px;
    }
  }

  @media only screen and (max-width: 486px) {
    input {
      font-size: 0.8rem;
      outline-offset: 4px;

      &::placeholder {
        font-size: 0.8rem;
        font-weight: 500;
      }

      &:focus-visible {
        outline-width: 2px;
      }
    }
  }
`

export const ToolControls = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
  position: relative;

  .filter_icon {
    position: absolute;
    left: 1rem;
    top: 0.25rem;

    svg {
      width: 1.35rem;

      path {
        fill: rgb(var(--text-base));
      }
    }
  }
`

export const ToolContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
    background: transparent;
    border-radius: 0.2rem;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
    border-radius: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(var(--btn-color));
    border-radius: 0.2rem;
    height: 2.5rem;
  }
`

export const ToolContent = styled.div`
  background: rgba(var(--background-base), 0.25);
  box-shadow: inset 0 0 1px rgba(46, 46, 46, 0.8);
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  .course_status {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0.8rem;
    right: 0.8rem;
    text-align: right;
  }

  .not_allowed {
    position: absolute;
    top: 0.6rem;
    right: 0.7rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }

  &:first-of-type {
    margin-top: 0.1rem;
  }

  &:last-of-type {
    margin-bottom: 0.1rem;
  }

  h3 {
    font-family: var(--font-josefin), sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
  }

  span {
    font-size: 0.75rem;
    font-weight: 500;
    opacity: 0.85;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(var(--text-base), 0.25);

    &:hover {
      background-color: rgba(var(--text-base), 0.35);
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 768px) {
    border-radius: 0.3rem;
    padding: 0.8rem 0.7rem;

    &:before {
      width: 0.4rem;
      border-top-left-radius: 0.3rem;
      border-bottom-left-radius: 0.3rem;
    }

    .course_status {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0.5rem;
      right: 0.7rem;
      text-align: right;
    }

    .not_allowed {
      top: 0.4rem;
      right: 0.6rem;

      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    h3 {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.65rem;
    }
  }

  @media only screen and (max-width: 486px) {
    h3 {
      width: 90%;
    }
  }

  @media only screen and (max-width: 330px) {
    h3 {
      font-size: 0.65rem;
      font-weight: 400;
    }

    span {
      font-size: 0.55rem;
      width: 124px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`

export const OfferedCourseWrapper = styled(motion.div)`
  width: 80%;
  min-width: 586px;
  height: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  margin-top: 3.5rem;
  border-radius: 0.5rem;
  padding: 1.25rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;

  span {
    svg {
      width: 1.6rem;
      height: 1.6rem;
      margin-top: 0.2rem;
      path {
        fill: rgb(var(--btn-color)) !important;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(var(--text-base), 0.35);
  }

  @media only screen and (max-width: 1366px) {
    margin-top: 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0.75rem;
    padding-right: 0.5rem;
    height: 586px;
    min-width: 100%;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 4rem;
    height: 508px;
  }

  @media only screen and (max-width: 338px) {
    height: 492px;
    min-width: 256px;
  }
`

export const DummyControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 48px;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .red {
    background: #ff6058;
    border: 1.5px solid #e14942;
  }

  .yellow {
    background: #ffc130;
    border: 1.5px solid #e1a325;
  }

  .green {
    background: #27ca40;
    border: 1.5px solid #3eaf3f;
  }
`
