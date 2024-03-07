import styled from "styled-components"

export const AssignmentPreviewWrapper = styled.div<{ $expand?: boolean }>`
  min-height: ${(props) => (props.$expand ? "15rem" : "5rem")};
  width: 100%;
  margin: ${(props) =>
    props.$expand ? "5rem 0 2.2rem 0" : "1.1rem 0 2.2rem 0"};
  display: ${(props) => (props.$expand ? "grid" : "block")};
  place-items: ${(props) => (props.$expand ? "center" : "unset")};
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(var(--text-base), 0.7);
  box-shadow: 8px 8px rgba(242, 156, 152, 0.7);
  border-radius: 0.6rem;
  padding: 1rem;

  h2 {
    font-family: var(--font-mono);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.2px;
    text-align: center;
    margin-top: 0.8rem;
  }

  h4 {
    font-family: var(--font-mono);
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 768px) {
    margin-top: ${(props) => (props.$expand ? "5rem" : "1rem")};
    min-height: ${(props) => (props.$expand ? "6rem" : "4rem")};

    h2 {
      margin-top: 0.35rem;
      font-size: 0.9rem;
    }

    h4 {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-left: -0.1rem;
    h2 {
      margin-top: 0.3rem;
    }
  }

  @media only screen and (max-width: 415px) {
    padding: 0.8rem;
    margin-left: -0.3rem;

    h2 {
      margin-top: 0.45rem;
      font-size: 0.85rem;
    }

    h4 {
      font-size: 0.75rem;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 330px) {
    h2 {
      font-size: 0.8rem;
      margin-top: 0.45rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    border: 2px solid rgb(217, 217, 217);
  }
`

export const AssginmentPreviewElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 415px) {
    margin-bottom: 0.6rem;
  }
`
export const AssignmentPreviewMeta = styled.div`
  display: flex;

  h4 {
    margin-left: 0.4rem;
  }

  span {
    margin-top: -0.1rem;
  }

  @media only screen and (max-width: 768px) {
    h4 {
      margin-left: 0.2rem;
    }

    span {
      margin-top: -0.15rem;
      margin-left: -0.2rem;
    }
  }
`

export const AssginmentPreviewTime = styled.span`
  align-self: flex-end;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  white-space: nowrap;
  margin-left: 1rem;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    font-size: 0.7rem;
  }
`
