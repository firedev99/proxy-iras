import styled from "styled-components"

export const HomePageWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0;
`

export const UserInformationWrapper = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const UserDetails = styled.div`
  margin-left: 1.5rem;
  user-select: none;

  h3 {
    font-size: 2.4rem;
    margin-left: -0.08rem;
    font-family: var(--font-josefin), sans-serif;
    font-weight: 900;

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
    font-size: 1.2rem;
    font-family: var(--font-josefin), sans-serif;
    font-weight: 500;
    color: rgba(var(--text-base), 0.7);
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 1.5rem;

    h3 {
      font-size: 2.1rem;
    }

    h5 {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 0.6rem;

    h3 {
      font-size: 2rem;
      margin-left: 0;
    }

    h5 {
      font-family: var(--text-base), sans-serif;
      font-size: 0.9rem;
      margin-top: -0.25rem;
      line-height: 1.1rem;
      font-weight: 500;
      color: rgba(var(--text-base), 0.8);
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0.5rem;

    h5 {
      margin-top: 0rem;
    }

    h3 {
      text-align: center;
      font-size: 1.8rem;
      /* line-height: 2.2rem; */
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media only screen and (max-width: 415px) {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      font-size: 1.6rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media only screen and (max-width: 338px) {
    h3 {
      font-size: 1.3rem;
    }

    h5 {
      font-size: 0.85rem;
    }
  }
`

export const UserMetaDataWrapper = styled.div<{
  $hideCg: boolean
  $hideCredits: boolean
}>`
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

    /* blur effect for cg */
    &:nth-child(1) {
      position: relative;
      width: fit-content;

      &:after {
        display: ${(props) => (props.$hideCg ? `inline-block` : `none`)};
        position: absolute;
        content: "";
        width: 102%;
        height: 100%;
        background: rgba(217, 217, 217, 0.1);
        -webkit-backdrop-filter: blur(4px) contrast(90%);
        backdrop-filter: blur(4px) contrast(90%);
        z-index: 2;
        border-radius: 2px;
        left: 0;
      }
    }

    /* blur effect for credits */
    &:nth-child(2) {
      position: relative;
      width: fit-content;
      margin-top: ${(props) => (props.$hideCredits ? `0.2rem` : `0`)};

      &:after {
        display: ${(props) => (props.$hideCredits ? `inline-block` : `none`)};
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(217, 217, 217, 0.1);
        -webkit-backdrop-filter: blur(4px) contrast(90%);
        backdrop-filter: blur(4px) contrast(90%);
        z-index: 2;
        border-radius: 2px;
        left: 0;
      }
    }
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
      font-weight: 500;
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
