import styled from "styled-components"

export const LoginPageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .login_warning {
    max-width: 420px;
    text-align: center;

    h4 {
      opacity: 0.8;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  footer {
    position: relative;
    bottom: 2rem;

    margin-top: auto;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-family: var(--font-mono);
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 768px) {
    footer {
      width: 100%;
      padding: 0 2rem;

      a {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    footer {
      padding: 0 1rem;

      a {
        font-size: 0.8rem;
      }
    }
  }

  @media only screen and (max-width: 380px) {
    footer {
      a {
        font-size: 0.7rem;
      }
    }
  }

  @media only screen and (max-width: 330px) {
    footer {
      display: none;
    }
  }
`

export const LoginBGSceneWrapper = styled.div`
  position: relative;
  width: 40rem;
  height: 40rem;
  /* margin-top: auto; */

  img {
    opacity: 0.15;
    z-index: -1;

    @media (prefers-color-scheme: dark) {
      opacity: 0.1 !important;
      filter: grayscale(1) !important;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 28rem;
    height: 28rem;
  }

  @media only screen and (max-width: 600px) {
    width: 25rem;
    height: 25rem;
  }

  @media only screen and (max-width: 415px) {
    width: 20rem;
    height: 20rem;
  }

  @media only screen and (max-width: 330px) {
    width: 16rem;
    height: 16rem;
    margin-top: 0;
  }
`
