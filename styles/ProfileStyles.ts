import styled, { keyframes } from "styled-components"

export const ChangeNameWrapper = styled.div`
  .edit_name_modal {
    position: fixed;
    min-width: 420px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media only screen and (max-height: 700px) {
      min-height: 186px;
      height: 186px;
    }

    @media only screen and (max-width: 464px) {
      min-width: 90%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`
export const ChangeAvatarWrapper = styled.div`
  .change_avatar_modal {
    position: fixed;
    min-width: 420px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media only screen and (max-height: 600px) {
      min-height: 90%;
      height: 90%;
    }

    @media only screen and (max-width: 464px) {
      min-width: 90%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`
export const EditFriendWrapper = styled.div`
  .edit_friend_modal {
    position: fixed;
    min-width: 420px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media only screen and (max-height: 600px) {
      min-height: 92%;
      height: 92%;
      overflow: auto;
    }

    @media only screen and (max-width: 464px) {
      min-width: 90%;
      padding-left: 1rem;
      padding-right: 1rem;
      overflow: auto;
    }
  }
`

export const ProfilePageWrapper = styled.div`
  padding-top: 2rem;
  width: 100%;
  font-family: var(--font-josefin), sans-serif;

  .edit_friend_modal {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      text-align: center;
      opacity: 0.9;
      font-weight: 600;
      font-size: 1rem;
    }

    .delete_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      align-self: flex-end;
      width: 112px;
      height: 36px;
      font-family: var(--font-josefin), sans-serif;
      margin-left: auto;
      background: rgba(217, 217, 217, 0.7);
      outline: none;
      border: none;
      border-radius: 0.2rem;
      transition: all 0.3s ease-in-out;
      color: rgba(18, 18, 18, 0.8);
      font-weight: 500;

      &:hover {
        cursor: pointer;
        background: rgba(217, 217, 217, 1);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .change_avatar_modal {
    width: 768px;

    .save_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;
      align-self: flex-end;
      width: 112px;
      height: 36px;
      font-family: var(--font-josefin), sans-serif;
      margin-left: auto;
      background: rgba(217, 217, 217, 0.7);
      outline: none;
      border: none;
      border-radius: 0.2rem;
      transition: all 0.3s ease-in-out;
      color: rgba(18, 18, 18, 0.8);
      font-weight: 500;

      &:hover {
        cursor: pointer;
        background: rgba(217, 217, 217, 1);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  .edit_name_modal {
    min-width: 320px;

    input {
      padding-left: 0.2rem;
      padding-bottom: 0.2rem;
      margin-top: 1rem;
      font-weight: 600;
      color: rgba(18, 18, 18, 0.7);
      font-family: var(--font-josefin), sans-serif;
      font-size: 1.1rem;
      width: 100%;
      background: transparent;
      border: none;
      border-bottom: 2px solid rgba(var(--btn-color), 0.7);
      outline: none;

      &:focus {
        border-bottom: 2px solid rgba(var(--btn-color), 1);
      }
    }

    .back_og,
    .save_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      align-self: flex-end;
      width: 112px;
      height: 36px;
      font-family: var(--font-josefin), sans-serif;
      margin-left: auto;
      background: rgb(217, 217, 217, 0.8);
      color: rgb(18, 18, 18, 0.8);
      font-weight: 500;
      outline: none;
      border: none;
      border-radius: 0.2rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        background: rgb(217, 217, 217, 1);
      }
    }

    .back_og {
      width: 132px;
      margin-top: 0.6rem;
    }
  }
  @media only screen and (max-height: 768px) {
    .change_avatar_modal {
      max-width: 90%;
      height: 400px;
      overflow: auto;
    }
  }

  @media only screen and (max-width: 800px) {
    .change_avatar_modal {
      max-width: 90%;
    }
  }

  @media only screen and (max-width: 600px) {
    padding-top: 4rem;

    .edit_friend_modal {
      h3 {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .edit_friend_modal {
      min-width: 90%;
      width: 90%;
    }
  }

  @media only screen and (max-width: 360px) {
    .edit_friend_modal {
      h3 {
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
    .edit_name_modal {
      min-width: 90%;
    }
  }
`

// Specific Course Page Styling
const bgEffect = keyframes`
  from {
    background-size: 200%;
  }

  to {
    background-size: 100%;
  }
`

export const ProfileHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 3rem;
    letter-spacing: 1px;
    margin-top: 0.2rem;
    animation: ${bgEffect} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: -webkit-linear-gradient(
      74deg,
      #4285f4 0%,
      #9b72cb 10%,
      #d96570 25%,
      #d96570 45%,
      #9b72cb 60%,
      #4285f4 75%,
      #9b72cb 90%,
      #d96570 100%
    );
    background: linear-gradient(
      74deg,
      #4285f4 0%,
      #9b72cb 10%,
      #d96570 25%,
      #d96570 45%,
      #9b72cb 60%,
      #4285f4 75%,
      #9b72cb 90%,
      #d96570 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: rgb(0 0 0 / 20%);
  }

  .email,
  .school {
    margin-top: 0.2rem;
    opacity: 0.8;
    text-align: center;
  }

  .school {
    margin-top: 0.4rem;
    opacity: 0.8;
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2.4rem;
    }

    .email {
      font-size: 0.8rem;
    }

    .school {
      font-size: 0.75rem;
    }
  }

  @media only screen and (max-width: 416px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 0.3rem;
    }
  }
`

export const ProfileAvatarWrapper = styled.div`
  width: 17.875rem;
  height: 17.875rem;
  position: relative;
  border-radius: 3.125rem;
  margin-bottom: 1.2rem;

  img {
    border-radius: 3.125rem;
  }

  @media only screen and (max-width: 768px) {
    width: 15rem;
    height: 15rem;
    margin-bottom: 0.8rem;
  }
`

export const ProfileControls = styled.div`
  max-width: 286px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  button {
    display: flex;
    align-items: center;
    width: 100%;
    height: 52px;
    padding: 0.8rem 1rem;
    margin-bottom: 0.8rem;
    background: rgb(217, 217, 217, 0.7);
    outline: none;
    border: none;
    border-radius: 0.3rem;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      span {
        margin-left: 0.85rem;
      }
      svg {
        width: 20px !important;
      }
    }

    &:nth-child(4) {
      span {
        margin-left: 0.6rem;
      }

      svg {
        width: 22px;
      }
    }

    &:nth-child(5) {
      span {
        margin-left: 0.4rem;
      }

      svg {
        margin-top: -0.1rem;
        width: 26px;
      }
    }

    span {
      margin-left: 0.5rem;
      font-weight: 600;
      opacity: 0.7;
    }

    svg {
      width: 24px;

      path {
        stroke: rgba(var(--text-base), 0.7);
      }

      circle {
        stroke: rgba(var(--text-base), 0.7);
      }
    }

    &:hover {
      cursor: pointer;
      background: rgb(217, 217, 217, 1);
    }
  }

  @media only screen and (max-width: 338px) {
    max-width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    button {
      background: rgba(235, 239, 248, 0.1);
      &:hover {
        background: rgba(235, 239, 248, 0.15);
      }
    }
  }
`
