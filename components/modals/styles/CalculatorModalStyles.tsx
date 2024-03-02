import { motion } from "framer-motion"
import styled from "styled-components"

export const CalculatorResultWrapper = styled(motion.div)`
  position: fixed;
  right: 4rem;
  top: 14.4rem;
  display: flex;
  flex-direction: column;

  .close_result {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    top: 5.25rem;
    right: 2rem;
  }

  @media only screen and (max-width: 600px) {
    background-color: rgba(159, 141, 126, 1);
    padding: 1rem;
    top: 50%;
    left: 1rem;
    /* left: 1rem; */
    transform: translateY(-50%);
    /* top: 50%;
    left: 50%; */

    .close_result {
      position: absolute;
      right: -initial1rem;
      right: -1rem;
      top: -1rem;
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border: none;
      border-radius: 50%;
      background: rgba(var(--btn-color), 1);
      outline: none;

      svg {
        path {
          fill: rgb(235, 239, 248);
        }
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 338px) {
    left: 1.2rem;
  }
`
export const CalculatorCGPAWrapper = styled.div`
  h2 {
    font-size: 2rem !important;
    font-weight: 400 !important;
  }

  h3 {
    font-size: 1rem;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1.3rem !important;
      line-height: 1.5rem;
      margin-top: 0 !important;
    }

    h3 {
      font-size: 0.8rem;
    }
  }
`
export const CalculatorSelectedDetails = styled.div`
  display: flex;

  h5 {
    font-size: 0.7rem;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .status_credit {
    margin-right: 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    h5 {
      font-size: 0.6rem;
    }
    h4 {
      font-size: 1.1rem;
      margin-left: 0.5px;
    }
  }
`

export const CalculatorOptions = styled.div`
  button {
    width: 164px;
    height: 42px;
    padding: 0 1rem;
    display: flex;
    border-radius: 0.2rem;
    align-items: center;
    background: transparent;
    border: none;
    transition: all 0.3s ease-out;

    span {
      color: rgb(18, 18, 18);
      font-weight: 600;
      margin-top: 2px;
      margin-left: 0.6rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .calculator_bottom_control {
    margin-top: 1rem;

    .first_btn_bottom {
      font-weight: 600;
      color: rgb(235, 239, 248);
    }

    .lower_btns_wrapper {
      display: flex;

      button {
        margin-top: 0.6rem;
        margin-right: 0.7rem;
      }
    }
    .lower_btn {
      background: rgb(var(--btn-color));
      justify-content: center;

      svg {
        path {
          stroke: rgb(235, 239, 248);
        }
      }

      span {
        color: rgb(235, 239, 248);
      }
    }
  }

  @media only screen and (max-width: 800px) {
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: 0.5rem;

    .first_btn_bottom {
      font-size: 0.7rem;
      font-weight: 400;
    }

    .lower_btn {
      margin-right: 0.5rem !important;
    }

    .calculator {
      svg {
        path {
          stroke-width: 1px;
        }
      }
    }

    button {
      width: 120px;
      height: 32px;
      padding: 0 1rem;
      border-radius: 0.2rem;

      span {
        font-size: 0.7rem;
        font-weight: 600;
        opacity: 0.95;
        margin-top: 2px;
        margin-left: 0.4rem;
      }

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`

export const CalculatorSelectOptions = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 246px;
  overflow-y: auto;

  select {
    margin-right: 1rem;
    margin-top: 0.8rem;

    outline: none;
    width: 64px;
    height: 36px;
    border-radius: 4px;
    background-color: transparent;
    border: 2px solid #d9d9d9;
    color: rgb(18, 18, 18);
    font-family: var(--font-josefin), sans-serif;
    font-size: 0.8rem;

    &:nth-of-type(1) {
      width: 256px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:last-child() {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: 800px) {
    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 0.2rem;
      margin-top: -0.2rem;
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
    }
  }

  @media only screen and (max-width: 600px) {
    select {
      width: 42px;
      min-width: 42px;
      margin-right: 0.6rem;
      font-size: 0.75rem;

      &:nth-of-type(1) {
        width: 186px;
        min-width: 186px;
      }

      &:nth-of-type(3) {
        min-width: 60px;
      }
    }
  }
`

export const CalculatorModalWrapper = styled.div`
  font-family: var(--font-josefin), sans-serif;
  color: rgb(18, 18, 18);

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin: 0.8rem 0 1rem 0;
  }

  .calculator_courge_tags {
    display: flex;

    span {
      margin-right: 1rem;
      width: 64px;
      text-align: center;

      &:nth-of-type(1) {
        min-width: 256px;
        text-align: left;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1rem;
      margin: 0.5rem 0 0.75rem 0;
    }

    .calculator_courge_tags {
      span {
        margin-right: 0rem;
        font-size: 0.85rem;
        font-weight: 500;
        opacity: 0.9;

        &:nth-of-type(1) {
          min-width: 186px;
        }

        &:nth-of-type(3) {
          margin-left: -0.3rem;
        }
      }
    }
  }

  @media only screen and (max-width: 360px) {
    h2 {
      margin: 0.5rem 0 0 0;
    }

    .calculator_courge_tags {
      display: none;
    }
  }
`

// Calculator Next Page Styling

export const CalculatorNextPageWrapper = styled.div`
  padding-left: 0.6rem;

  @media only screen and (max-width: 686px) {
    margin-top: 1.6rem;
    padding-left: 1rem;
  }

  @media only screen and (max-width: 338px) {
    margin-top: 0.5rem;
  }
`
export const CalculatorNextPageHeading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .details {
    font-family: var(--font-josefin), sans-serif;

    h3 {
      font-size: 1.6rem;
    }

    span {
      margin-left: 1px;
    }

    h5 {
      margin-top: 1.2rem;
      font-size: 1.1rem;
    }

    ul {
      margin-top: 0.2rem;
      max-width: 386px;
      font-family: var(--font-display), sans-serif;
    }
  }

  @media only screen and (max-width: 800px) {
    .details {
      h3 {
        font-size: 1.2rem;
      }

      h5 {
        font-size: 1rem;
      }

      ul {
        max-width: 300px;

        li {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media only screen and (max-width: 686px) {
    .details {
      ul {
        max-width: 100%;
      }
    }
  }

  @media only screen and (max-width: 360px) {
    .details {
      h3 {
        font-size: 1.1rem;
      }

      h5 {
        font-size: 0.9rem;
      }

      ul {
        li {
          font-size: 0.8rem;
        }
      }
    }
  }
`
export const IubImage = styled.div`
  width: 324px;
  height: 386px;
  position: relative;
  -webkit-mask-image: url("https://res.cloudinary.com/firey/image/upload/v1708816763/iub/paint_splatter.svg");
  -webkit-mask-size: cover;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: bottom;
  mask-image: url("https://res.cloudinary.com/firey/image/upload/v1708816763/iub/paint_splatter.svg");
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: bottom;

  img {
    object-fit: cover;
  }

  @media only screen and (max-width: 800px) {
    width: 286px;
    height: 356px;
    margin-top: -2rem;
  }

  @media only screen and (max-width: 686px) {
    display: none;
  }
`
export const CalculatorNextPageContent = styled.div`
  margin-top: -4rem;

  @media only screen and (max-width: 800px) {
    margin-top: -3rem;

    ul {
      li {
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (max-width: 686px) {
    margin-top: 0;
  }

  @media only screen and (max-width: 360px) {
    ul {
      li {
        font-size: 0.8rem;
      }
    }
  }
`
