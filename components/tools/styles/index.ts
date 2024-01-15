import { motion } from "framer-motion"
import styled from "styled-components"

export const ToolStatus = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 110px;

  span {
    font-size: 0.7rem;
    font-weight: 500;
  }
`

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

export const ToolControl = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: red; */

  svg {
    path {
      fill: rgb(var(--text-base));
    }
  }

  input {
    height: 90%;
    width: 70%;
    background: transparent;
    border: none;
    padding-left: -0.6rem;
    color: rgb(var(--text-base));
    font-size: 0.95rem;
    font-weight: 500;

    &::placeholder {
      color: rgb(var(--text-base));

      /* color: rgb(var(--background-base)); */
      font-family: var(--font-mono);
      font-size: 0.9rem;
      /* text-indent: 0.6rem; */
      font-weight: 600;
    }

    /* overwrite the focus styling */

    :focus-visible {
      outline: 2px solid rgb(var(--btn-color)) !important;
      outline-offset: 1px !important;
    }
  }
`

export const ToolContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
    background: transparent;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(var(--btn-color));
    border-radius: 0.5rem;
    height: 2.5rem;

    /* border: 2px solid #555555; */
  }
`

export const ToolContent = styled.div`
  background: rgba(var(--background-base), 0.25);
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.7rem;
  position: relative;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:before {
    content: "";
    position: absolute;
    width: 0.5rem;
    height: 100%;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    left: 0;
    top: 0;
    background: rgb(var(--btn-color), 0.6);
  }

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
    margin-top: 0.2rem;
  }

  &:last-of-type {
    margin-bottom: 0.2rem;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 600;
  }

  span {
    font-size: 0.7rem;
    font-weight: 600;
  }

  &:hover {
    background-color: rgba(var(--background-base), 0.6);
    cursor: pointer;

    &:before {
      background: rgb(var(--btn-color), 0.9);
    }
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(var(--text-base), 0.25);
    margin-top: 0.5rem;

    span {
      font-weight: 500;
    }

    &:before {
      display: none;
    }

    &:hover {
      background-color: rgba(var(--text-base), 0.35);
      cursor: pointer;

      &:before {
        display: block;
        background: rgb(var(--btn-color), 0.9);
      }
    }
  }
`

export const EligibleCourseSchedule = styled(motion.div)<{ $expand: boolean }>`
  width: 80%;
  max-width: 600px;
  height: 48px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  margin-top: 3.5rem;
  border-radius: 0.5rem;
  padding: ${(props) => (props.$expand ? "1.25rem" : "0 1rem")};
  padding-right: ${(props) => props.$expand && "0.5rem"};
  display: flex;
  flex-direction: ${(props) => props.$expand && "column"};
  align-items: ${(props) => !props.$expand && "center"};
  justify-content: ${(props) => (props.$expand ? "unset" : "space-between")};
  /* transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); */

  span {
    font-family: var(--font-mono);

    svg {
      width: 1.6rem;
      height: 1.6rem;
      margin-top: 0.2rem;
      path {
        fill: rgb(var(--btn-color)) !important;
      }
    }
  }

  &:hover {
    cursor: ${(props) => !props.$expand && "pointer"};
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(var(--text-base), 0.35);
  }
`
