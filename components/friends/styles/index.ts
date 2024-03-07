import styled from "styled-components"

export const FriendsWrapper = styled.div`
  position: absolute;
  top: 8rem;
  right: 1.85rem;

  button {
    background: transparent;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }

  .no_class {
    text-align: center;
    height: 86px;
    display: grid;
    place-items: center;
    font-family: var(--font-josefin), sans-serif;
    opacity: 0.8;
    font-weight: 500;
  }

  .friends_ui {
    position: fixed;
    min-width: 420px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @media only screen and (max-height: 700px) {
      min-width: 90%;
      min-height: 90%;
      height: 90%;
      overflow: auto;
    }

    @media only screen and (max-width: 464px) {
      min-width: 90%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    left: 1.5rem;
    right: unset;
    top: 2.2rem;
  }

  @media only screen and (max-width: 600px) {
    left: 1rem;
    right: unset;
    top: 0.9rem;
  }

  @media only screen and (max-width: 600px) {
    left: 1rem;
    right: unset;
    top: 0.9rem;
  }
`

export const FriendIndicators = styled.div`
  padding: 0.4rem 1rem;
  position: absolute;
  z-index: 5;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  .friend {
    width: 36px;
    height: 36px;
    position: relative;
    border-radius: 50%;

    &:nth-child(2) {
      margin-left: -5px;
    }

    &:nth-child(3) {
      margin-left: 4px;
    }

    &:nth-child(4) {
      margin-left: 8px;
    }

    &:nth-child(5) {
      margin-left: 16px;
    }

    .friend_info {
      width: 124px;
      min-height: 42px;
      padding: 0.4rem 0.9rem;
      font-family: var(--font-josefin), sans-serif;
      position: absolute;
      z-index: 20;
      top: -42px;
      left: 10px;
      background: rgba(0, 0, 0, 0.5);
      -webkit-backdrop-filter: blur(8px) contrast(60%);
      backdrop-filter: blur(8px) contrast(60%);
      border-radius: 4px;
      font-size: 0.8rem;
      text-align: center;
      color: rgba(235, 239, 248, 1);
    }

    img {
      border-radius: 50%;
      border: 2px solid rgb(235, 239, 248);
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 464px) {
    margin-left: 0.5rem;

    .friend {
      .friend_info {
        width: 92px;
        font-size: 0.7rem;
        font-weight: 400;
      }
    }
  }

  @media only screen and (max-width: 380px) {
    .friend {
      .friend_info {
        width: 86px;
        font-size: 0.6rem;
        font-weight: 400;
        top: -32px;
      }
    }
  }

  @media only screen and (max-width: 338px) {
    padding: 0.4rem 0.8rem;
    .friend {
      width: 28px;
      height: 28px;

      &:nth-child(2) {
        margin-left: -4px;
      }

      &:nth-child(3) {
        margin-left: 6px;
      }

      &:nth-child(4) {
        margin-left: 12px;
      }

      &:nth-child(5) {
        margin-left: 20px;
      }

      .friend_info {
        width: 72px;
        font-size: 0.55rem;
        font-weight: 400;
        top: -42px;
        left: 4px;
      }
    }
  }
`

export const FriendClassTimes = styled.div`
  margin-top: 2.5rem;

  .class_time {
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--font-josefin), sans-serif;

    &:after {
      content: "";
      box-sizing: border-box;
      position: absolute;
      width: 80%;
      height: 1px;
      background: #d9d9d9;
      border: 1px dashed rgba(18, 18, 18, 0.1);
      top: 50%;
      left: 3.5rem;
      transform: translateY(-50%);
    }

    span {
      opacity: 0.7;
    }
  }

  @media only screen and (max-height: 700px) {
    .class_time {
      &:after {
        width: 90%;
      }
    }
  }

  @media only screen and (max-width: 468px) {
    margin-top: 2rem;

    .class_time {
      &:after {
        left: 2.5rem;
      }

      span {
        font-size: 0.8rem;
      }
    }
  }
`

export const FriendsHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  height: 64px;
  user-select: none;

  .friend_avatar {
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    position: absolute;

    img {
      border-radius: 50%;
    }
  }

  @media only screen and (max-width: 468px) {
    height: 56px;

    .friend_avatar {
      width: 48px;
      height: 48px;
    }
  }
`
