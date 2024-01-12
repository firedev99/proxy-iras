import styled from "styled-components"

export const HomePageWrapper = styled.div`
  width: 100%;
  padding: 2.625rem 0;

  @media only screen and (max-width: 768px) {
    padding: 1.5rem 0;
  }
`

export const UserInformationWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileAvatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;
  border-radius: 50%;

  img {
    border-radius: inherit !important;
  }

  @media only screen and (max-width: 768px) {
    width: 124px;
    height: 124px;
  }
`
export const UserDetails = styled.div`
  margin-left: 1.5rem;
  user-select: none;

  h3 {
    font-size: 2.4rem;
    margin-left: -0.08rem;
    font-family: var(--font-mono);
    font-weight: 900;
    line-height: 3rem;

    /* fading in hover effect */
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
    font-family: var(--font-mono);
    font-weight: 800;
    color: rgba(var(--text-base), 0.75);
    margin-top: -0.2rem;
    margin-left: -1px;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 1.5rem;

    h3 {
      font-size: 2.1rem;
      line-height: 2.7rem;
    }

    h5 {
      font-size: 1.2rem;
      margin-top: -0.3rem;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      font-size: 2rem;
      line-height: 2.8rem;
      margin-left: 0;
    }

    h5 {
      font-size: 1rem;
      margin-top: -0.3rem;
      font-weight: 600;
      color: rgba(var(--text-base), 0.8);
    }
  }

  @media only screen and (max-width: 600px) {
    h5 {
      font-size: 0.9rem;
    }

    h3 {
      text-align: center;
      font-size: 1.4rem;
      line-height: 2.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media only screen and (max-width: 415px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      font-size: 1.4rem;
      line-height: 2.2rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media only screen and (max-width: 338px) {
    h3 {
      font-size: 1.2rem;
      line-height: 2rem;
    }

    h5 {
      font-size: 0.8rem;
    }
  }
`

export const UserMetaDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 0.5rem;
  user-select: none;

  span {
    font-size: 1.1rem;
    letter-spacing: 0.3px;
    font-weight: 600;
    color: rgba(var(--text-base), 0.8);
  }

  @media only screen and (max-width: 1536px) {
    span {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
    align-items: center;

    span {
      font-size: 0.9rem;
      letter-spacing: 0.1px;
    }
  }

  @media only screen and (max-width: 415px) {
    padding: 0;
    margin-bottom: 1.5rem;
    align-items: center;

    span {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }
  }

  @media only screen and (max-width: 338px) {
    margin-bottom: 1rem;

    span {
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }
`
