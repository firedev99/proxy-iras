import styled from "styled-components"

export const HomePageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const UserInformationWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileAvatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  border-radius: 50%;

  img {
    border-radius: inherit !important;
  }
`
export const UserDetails = styled.div`
  margin-left: 2.5rem;
  user-select: none;

  h3 {
    font-size: 2.4rem;
    margin-left: -0.08rem;
    font-weight: 800;
    line-height: 3rem;

    /* hover effect */
    color: transparent;
    background-image: linear-gradient(
      90deg,
      rgba(var(--text-base), 1) 50%,
      rgba(var(--text-base), 0.8) 50%
    );
    background-position: 100%;
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    transition: background-position 0.5s ease;

    &:hover {
      background-position: 0;
    }
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 800;
    color: rgba(var(--text-base), 0.8);
  }
`

export const UserMetaDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2.5rem 1rem;
  margin-left: 0.3rem;
  user-select: none;

  span {
    font-size: 1.2rem;
    font-weight: 800;
    color: rgba(var(--text-base), 0.8);
  }
`

export const HomeFooterWrapper = styled.div``
