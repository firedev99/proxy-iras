import styled from "styled-components"

export const FriendsWrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 400px) {
    width: 100%;
    justify-content: center;
  }
`
export const FriendAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h4 {
    font-size: 0.9rem;
    font-size: 500;
  }

  @media only screen and (max-width: 400px) {
    h4 {
      font-size: 0.8rem;
      opacity: 0.8;
    }
  }
`

export const FriendAvatarImg = styled.div<{ $selected: boolean }>`
  width: 86px;
  height: 86px;
  position: relative;
  margin: 1rem;
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
