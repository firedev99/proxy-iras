import styled from "styled-components"

export const ProfileAvatarWrapper = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  border-radius: 50%;

  .share_control {
    opacity: 0;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    position: absolute;
    z-index: 5;
    display: grid;
    place-items: center;
    right: 0.2rem;
    bottom: 1rem;
    background-color: rgba(126, 134, 158, 0.5);
    -webkit-backdrop-filter: blur(10px) contrast(60%);
    backdrop-filter: blur(10px) contrast(60%);
    border: solid 3px rgb(var(--background-base));
    transition: all 0.3s ease-out;

    @media (prefers-color-scheme: dark) {
      border: solid 3px rgb(var(--background-base));

      svg {
        path {
          stroke: rgba(235, 239, 248, 0.7);
        }
      }
    }
  }

  img {
    border-radius: inherit !important;
  }

  &:hover {
    .share_control {
      opacity: 1;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 124px;
    height: 124px;

    .share_control {
      opacity: 0;
      width: 36px;
      height: 36px;
      right: 0;
      bottom: 0.2rem;

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`

export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const AvatarImg = styled.div<{ $selected: boolean }>`
  width: 86px;
  height: 86px;
  position: relative;
  margin: 0.5rem;
  border-radius: 4px;
  outline: ${(props) =>
    props.$selected && `4px solid rgba(var(--btn-color), 0.9)`};
  img {
    border-radius: 4px;
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 400px) {
    width: 64px;
    height: 64px;
  }
`
