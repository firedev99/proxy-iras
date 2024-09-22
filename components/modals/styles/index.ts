import { motion } from "framer-motion"
import styled from "styled-components"

// popup modal overlay
export const PopupModalOverlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  background: rgba(0, 0, 0, 0.25);
  -webkit-backdrop-filter: blur(6px) contrast(90%);
  backdrop-filter: blur(6px) contrast(90%);
`

// popup modal content wrapper
export const ToolsModalWrapper = styled(motion.div)`
  z-index: 200;
  background: #ebeff8;
  min-width: 768px;
  width: 768px;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  @media only screen and (max-width: 800px) {
    min-width: 92vw;
    width: 92vw;
    border-radius: 16px;
  }

  @media only screen and (max-width: 600px) {
    min-width: 95vw;
    width: 95vw;
  }

  @media only screen and (max-height: 636px) {
    position: unset;
    border-radius: unset;
    position: fixed;
    overflow-y: auto;
    width: 96vw;
    min-width: 96vw;
    min-height: 96vh;
    height: 96vh;
  }
`

// popup modal inner wrapper
export const ToolsModalInner = styled(motion.div)`
  width: 100%;
  border-radius: 20px;
  color: rgb(var(--background-base));
  display: flex;
  position: relative;

  @media only screen and (max-width: 800px) {
    border-radius: 16px;
  }

  @media only screen and (max-height: 636px) {
    height: 100%;
  }
`

// popup modal left portion
export const ToolsLeftPortion = styled.div`
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  padding: 2rem;

  @media only screen and (max-width: 800px) {
    padding: 1.2rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 1.2rem 1rem;
  }

  @media only screen and (max-width: 415px) {
    padding: 1.2rem 0.85rem;
  }
`

// popup modal empty status
export const EmptyRoutine = styled.div`
  display: flex;
  flex-direction: column;

  .empty_illustration {
    margin: 0 auto;
    position: relative;
    width: 156px;
    height: 156px;
  }

  .empty_illustration_all {
    margin: 0 auto;
    position: relative;
    width: 156px;
    height: 156px;
    margin-top: 96px;
  }

  h3 {
    text-align: center;
    margin-top: 1.2rem;
    margin-left: 2rem;
    font-weight: 500;
    font-size: 1rem;
    font-family: var(--font-josefin), sans-serif;
  }
`

// popup modal right portion
export const ToolsRightPortion = styled.div`
  display: flex;
  background: #ebeff8;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  padding: 2rem;

  .back_btn {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    display: grid;
    place-items: center;

    &:hover {
      background-color: rgba(var(--btn-color), 0.9);
      cursor: pointer;
      svg {
        path {
          stroke: rgba(235, 239, 248, 0.9);
        }
      }
    }
  }

  @media only screen and (max-width: 415px) {
    padding: 1rem;
  }

  @media only screen and (max-width: 338px) {
    padding: 1rem 0.6rem;
  }
`

// popup modal student information wrapper
export const ToolsStudentInformation = styled.div`
  font-family: var(--font-josefin);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: rgb(18, 18, 18);

  h4 {
    font-size: 18px;
    margin-bottom: 0.4rem;
  }

  span {
    line-height: 22px;
  }

  @media only screen and (max-width: 600px) {
    h4 {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.2rem;
    }

    span {
      font-size: 0.85rem;
      line-height: 1.2rem;
    }
  }

  @media only screen and (max-width: 338px) {
    h4 {
      font-size: 0.85rem;
      margin-bottom: 0.15rem;
    }

    span {
      font-size: 0.7rem;
      line-height: 1rem;
    }
  }
`

// popup modal control header styles
export const ToolsModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    transition: all ease 0.1s;

    &:hover {
      cursor: pointer;
    }
  }

  .close_control {
    background: rgba(var(--btn-color), 0.1);

    &:hover {
      background: rgba(var(--btn-color), 0.3);
    }
  }

  .calculator_control {
    background: rgba(32, 33, 36, 1);
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

    svg {
      path {
        stroke: rgb(235, 239, 248);
      }
    }
  }

  @media only screen and (max-width: 415px) {
    button {
      width: 40px;
      height: 40px;

      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
`

export const RoutinePreviewGrid = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px 40px;
  grid-template-rows: auto;
  grid-template-areas:
    "grid_1 grid_1 grid_2 grid_3"
    "grid_4 grid_5 grid_5 grid_5";
  width: 172px;
  height: 80px;
  gap: 4px;

  > div {
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }

  .grid_1 {
    grid-area: grid_1;
    background: rgba(83, 175, 255, 0.7);
  }

  .grid_2 {
    grid-area: grid_2;
    background: rgba(16, 236, 142, 0.7);
  }
  .grid_3 {
    grid-area: grid_3;
    background: rgba(242, 156, 152, 0.7);
  }
  .grid_4 {
    grid-area: grid_4;
    background: rgba(254, 206, 98, 0.7);
  }
  .grid_5 {
    grid-area: grid_5;
    background: rgba(255, 131, 55, 0.7);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 32px 32px 32px 32px;
    height: 64px;
    gap: 2px;

    > div {
      border-radius: 4px;
    }
  }
`

// routine tab styles

export const RoutineModalTabs = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1.2rem;
  margin-left: -0.2rem;

  .submit_routine {
    display: flex;
    font-size: 0.9rem;
    margin-left: auto;
    margin-top: 1.2rem;
    margin-right: 0.1rem;
    font-family: var(--font-josefin), sans-serif;
    padding: 0.6rem 1.75rem;
    border-radius: 0.2rem;
    border: none;
    background: rgb(var(--btn-color));
    color: rgb(235, 239, 248);

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.7;
    }
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: 0.6rem;
  }

  @media only screen and (max-width: 415px) {
    .submit_routine {
      padding: 0.7rem 1.5rem;
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 360px) {
    margin-bottom: 0.15rem;
  }
`
export const RoutineModalTabsInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  left: 0%;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export const RoutineTabCoursesWrapper = styled(motion.div)`
  width: 100%;
  min-width: 100%;
  height: 242px;
  overflow-y: auto;
  overflow-x: auto;

  .no_data {
    margin-top: 2rem;
    text-align: center;
  }

  @media only screen and (min-width: 800px) {
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0.2rem;
      margin-top: 1rem;
    }

    &::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;
      background: transparent;
      border-radius: 0.2rem;
    }

    &::-webkit-scrollbar-thumb {
      background: rgb(var(--btn-color));
      border-radius: 0.2rem;
      height: 4rem;
      display: none;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: 186px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .routine_tab_course {
    display: grid;
    width: 100%;
    grid-template-columns: 24px 60px 164px 32px 98px 68px 48px 124px;
    column-gap: 10px;
    row-gap: 16px;
    font-family: var(--font-josefin), sans-serif;
    color: rgb(18, 18, 18);

    h4 {
      font-weight: 600;
    }

    .center {
      text-align: center;
      margin-left: -4px;
    }

    label {
      margin-top: -2px;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        .checkmark {
          background-color: #ccc;
          cursor: pointer;
        }
      }

      .checkmark {
        position: absolute;
        width: 1rem;
        height: 1rem;
        margin-top: -1px;
        border-radius: 0.1rem;
        top: 0;
        left: 0;
        background-color: #d9d9d9;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

        &:after {
          content: "";
          position: absolute;
          display: none;
          left: 5px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid rgb(235, 239, 248);
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }

      input:checked ~ .checkmark {
        background-color: rgb(var(--btn-color));
      }

      input:checked ~ .checkmark:after {
        display: block;
      }

      /* hide the browser's default checkbox */
      input {
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
      }
    }

    .routine_el {
      font-size: 0.9rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: relative;
    }

    &:hover {
      visibility: visible;
    }
  }

  @media only screen and (max-width: 800px) {
    .routine_tab_course {
      grid-template-columns: 5% 7% 24% 4% 14% 10% 7% 20%;
      column-gap: 6px;

      h4 {
        font-size: 0.8rem;
      }

      .routine_el {
        font-size: 0.75rem;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .routine_tab_course {
      grid-template-columns: 20px 48px 164px 24px 86px 56px 42px 186px;
      column-gap: 4px;

      .center {
        margin-left: -6px;
      }
    }
  }

  @media only screen and (max-width: 415px) {
    .routine_tab_course {
      margin-left: 2px;
    }
  }
`

export const RoutineFilterControl = styled.div`
  width: 336px;
  height: 48px;
  border-radius: 2rem;
  margin-top: 1rem;
  margin-left: -0.5rem;

  input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    padding-left: 1.2rem;
    font-size: 0.85rem;
    font-family: var(--font-josefin), sans-serif;
    border: 2px solid rgba(var(--btn-color), 0.7);
    color: rgba(18, 18, 18, 0.7);
  }

  @media only screen and (max-width: 600px) {
    width: 336px;
    height: 40px;

    input {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 415px) {
    margin-top: 0.7rem;
    margin-left: 0;
    width: 264px;

    input {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 338px) {
    width: 236px;
  }
`

export const RoutineModalHeader = styled.div`
  display: flex;
  width: fit-content;
  margin-top: 1.5rem;
  margin-left: -0.3rem;

  .routine_nav_indicator {
    position: absolute;
    width: 100%;
    height: 0.2rem;
    border-radius: 0.1rem;
    background-color: rgba(var(--btn-color), 1);
    bottom: 0;
    left: 0;
  }

  @media only screen and (max-width: 800px) {
    margin-top: 1.2rem;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0.8rem;
    margin-left: -0.4rem;
    width: unset;
    width: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media only screen and (max-width: 415px) {
    margin-left: -0.2rem;
  }
`

export const RoutineSelectionStatus = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: right;
  top: 10rem;
  right: 2.4rem;
  font-family: var(--font-josefin), sans-serif;
  color: rgb(83, 175, 255);
  font-size: 0.9rem;

  .clash {
    color: rgb(242, 156, 152);
    margin-right: -0.25rem;
  }

  @media only screen and (max-width: 768px) {
    top: 7.4rem;
    font-size: 0.7rem;
    max-width: 200px;

    .clash {
      margin-top: 0.2rem;
    }
  }

  @media only screen and (max-width: 600px) {
    top: 6.4rem;
    font-size: 0.7rem;
    max-width: 156px;
    margin-right: -0.8rem;

    .clash {
      margin-right: 0;
      margin-top: 0.2rem;
    }
  }

  @media only screen and (max-width: 415px) {
    margin-right: -1rem;
    top: 6.6rem;
    font-size: 0.6rem;
    max-width: 124px;
  }

  @media only screen and (max-width: 338px) {
    margin-right: -1.5rem;
    top: 6.6rem;
    font-size: 0.55rem;

    .clash {
      line-height: 0.6rem;
    }
  }
`

export const RoutineModalNav = styled.div<{ $active: boolean }>`
  margin-right: 1.6rem;
  font-family: var(--font-josefin), sans-serif;
  font-size: 1.05rem;
  position: relative;
  color: rgb(18, 18, 18);
  background-color: ${(props) =>
    props.$active && `rgba(var(--btn-color), 0.05)`};
  opacity: ${(props) => (props.$active ? 1 : 0.7)};
  border-radius: 0.3rem;
  padding: 0.65rem 1.1rem;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  white-space: nowrap;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.9rem;
    margin-right: 1rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.7rem;
    margin-right: 0.4rem;
  }
`

// routine next page styling ** starts **

export const RoutineShareOption = styled.div`
  position: fixed;
  z-index: 5;
  right: 2rem;
  bottom: 2rem;

  button {
    background: transparent;
    border: none;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: rgba(var(--btn-color), 0.9);
      cursor: pointer;
      svg {
        path {
          stroke: rgba(235, 239, 248, 0.9);
        }
      }
    }
  }
`

export const RoutineDeleteOption = styled(RoutineShareOption)`
  right: 5.2rem;
  bottom: 2.1rem;
`

export const RoutineModalOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  -webkit-backdrop-filter: blur(12px) contrast(60%);
  backdrop-filter: blur(12px) contrast(60%);
`

export const RoutineNextPageHeading = styled.div`
  text-align: center;
  max-width: 548px;
  margin: 3rem auto 0rem auto;
  color: rgb(18, 18, 18);

  h3 {
    font-family: var(--font-josefin), sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 600px) {
    margin: 2rem auto 0rem auto;
  }

  @media only screen and (max-width: 415px) {
    h3 {
      font-size: 1.05rem;
    }
    p {
      max-width: 336px;
      font-size: 0.8rem;
    }
  }
`

export const RoutineNextPageWrapper = styled(motion.div)`
  position: relative;
  margin-top: 5rem;
  display: grid;
  place-content: center;
  color: rgba(18, 18, 18, 0.8);
  grid-template-columns: 120px 120px 120px 120px;
  grid-template-rows: auto;
  grid-template-areas:
    "grid_1 grid_1 grid_2 grid_3"
    "grid_4 grid_5 grid_5 grid_5";

  gap: 8px;

  > div {
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }

  .grid_1 {
    grid-area: grid_1;
    background: rgba(83, 175, 255, 0.7);
  }

  .grid_2 {
    grid-area: grid_2;
    background: rgba(16, 236, 142, 0.7);
  }
  .grid_3 {
    grid-area: grid_3;
    background: rgba(242, 156, 152, 0.7);
  }

  .grid_4 {
    grid-area: grid_4;
    background: rgba(254, 206, 98, 0.7);
  }

  .grid_5 {
    grid-area: grid_5;
    background: rgba(255, 131, 55, 0.7);
  }

  h4 {
    font-family: var(--font-josefin), sans-serif;
    font-weight: 500;
  }

  .item {
    cursor: pointer;
    padding: 10px;
    width: 100%;
    height: 100px;
    border-radius: 8px;
    opacity: 1;
    position: relative;

    span {
      position: absolute;
      bottom: 0.6rem;
      right: 0.6rem;
      font-family: var(--font-josefin), sans-serif;
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }

  .item:hover:not(.disabled) {
    filter: blur(1px) !important;
  }

  .details {
    height: unset !important;
    max-height: 476px;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    column-gap: 12px;
    row-gap: 16px;
    grid-template-columns: 56px 286px 32px 124px;
    height: 100%;
    left: 5rem;
    position: absolute;
    z-index: 5;
    padding-right: 1.5rem;

    .center {
      text-align: center;
    }

    @media only screen and (min-width: 600px) {
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
        background: transparent;
        border-radius: 0.2rem;
      }

      &::-webkit-scrollbar {
        width: 6px;
        background: transparent;
        border-radius: 0.2rem;
      }

      &::-webkit-scrollbar-thumb {
        background: rgb(var(--btn-color));
        border-radius: 0.2rem;
        height: 2.5rem;
      }
    }

    h5 {
      font-weight: 600;
    }

    span {
      font-size: 0.9rem;
    }

    button {
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      display: grid;
      place-content: center;
      transition: all ease 0.1s;

      &:hover {
        cursor: pointer;
      }
    }

    .close_control {
      background: rgba(48, 48, 48, 0.6);

      svg {
        fill: rgba(238, 238, 238, 0.6);
      }

      &:hover {
        background: rgba(238, 238, 238, 0.6);

        svg {
          fill: rgba(48, 48, 48, 0.6);
        }
      }
    }
  }

  .button {
    width: 56px;
    height: 32px;
    background-color: #007bff;
    color: #fff;
    border: none;
    position: fixed;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
  }

  .button:hover {
    background-color: #0056b3;
  }

  @media only screen and (max-width: 800px) {
    .details {
      left: 0;
    }

    .details {
      column-gap: 8px;
      row-gap: 10px;
      grid-template-columns: 56px 256px 32px 124px;

      h5 {
        font-size: 0.8rem;
      }

      span {
        font-size: 0.75rem;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 72px 72px 72px 72px;

    .item {
      height: 72px;

      h4 {
        font-size: 0.75rem;
        font-weight: 400;
      }

      span {
        font-size: 0.7rem;
        bottom: 0.4rem;
        right: 0.4rem;
      }
    }
  }

  @media only screen and (max-width: 535px) {
    .details {
      column-gap: 4px;
      row-gap: 8px;
      grid-template-columns: 42px 186px 24px 72px;

      h5 {
        font-size: 0.75rem;
      }

      span {
        font-size: 0.65rem;
      }
    }
  }

  @media only screen and (max-width: 415px) {
    .details {
      grid-template-columns: 42px 142px 24px 72px;
    }
  }

  @media only screen and (max-width: 338px) {
    grid-template-columns: 62px 62px 62px 62px;
    gap: 2px;

    .details {
      left: -0.2rem;
      grid-template-columns: 42px 132px 20px 52px;
    }

    .item {
      height: 62px;
      border-radius: 4px;

      h4 {
        font-size: 0.6rem;
      }

      span {
        font-size: 0.55rem;
      }
    }
  }
`

// routine next page styling ** ends **
