import Link from "next/link"
import styled from "styled-components"

export const MaterialInformation = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
  overflow: hidden;

  h4 {
    opacity: 0.7;
    font-weight: 500;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    opacity: 0.7;
    font-size: 0.8rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    padding: 0.8rem;

    h4 {
      font-size: 0.8rem;
    }

    .file_type {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 368px) {
    padding: 0.6rem 0.6rem;

    h4 {
      font-size: 0.7rem;
    }

    .file_type {
      font-size: 0.7rem;
    }
  }
`

export const PostMaterial = styled(Link)`
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-self: center;
  border-radius: 0.3rem;
  margin-top: 0.6rem;
  margin-bottom: 0.8rem;
  margin-right: 1rem;
  margin-left: -0.15rem;
  background: rgba(0, 0, 0, 0.05);

  &:not(:nth-child(1)) {
    margin-top: 0rem;
  }

  .material_thumb {
    min-width: 112px;
    height: 64px;
    position: relative;
    border-radius: 4px;
    margin-left: 0.3rem;

    img {
      object-fit: cover;
      border-radius: 4px;
    }
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(235, 239, 248, 0.05);

    &:hover {
      background: rgba(235, 239, 248, 0.1);
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0.4rem;
    margin-bottom: 0;

    .material_thumb {
      width: 86px;
      height: 52px;
    }

    &:not(:nth-child(1)) {
      margin-top: 0.5rem;
    }
  }

  @media only screen and (max-width: 368px) {
    max-width: 100%;
    border-radius: 0.2rem;
    margin-bottom: 0;
    margin-left: -0.1rem;
    margin-right: 0;

    .material_thumb {
      width: 64px;
      height: 48px;

      img {
        border-radius: 0.2rem;
        object-fit: cover;
      }
    }

    &:not(:nth-child(1)) {
      margin-top: 0.4rem;
    }
  }
`

export const PostMaterialWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CourseAnnouncementWrapper = styled.div`
  width: 100%;
  min-height: 4.5rem;
  background: rgba(217, 217, 217, 0.5);

  margin-bottom: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem 0.8rem 1.2rem;

  @media (prefers-color-scheme: dark) {
    background: rgba(235, 239, 248, 0.1);
  }

  span {
    margin-top: 1rem;
    text-align: right;
    font-size: 0.9rem;
    font-family: var(--font-josefin), sans-serif;
    white-space: pre;
  }

  .f {
    color: #2962ff;
    display: flex;
    width: 100% !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }

  @media screen and (max-width: 600px) {
    padding: 0.9rem 1rem 0.7rem 1rem;

    .text {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 338px) {
    padding: 0.8rem 0.7rem 0.65rem 0.7rem;

    .text {
      font-size: 0.8rem;
    }

    span {
      font-size: 0.7rem;
    }
  }
`
