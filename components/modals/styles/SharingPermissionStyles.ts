import styled from "styled-components"

export const SharingPermissionWrapper = styled.div`
  .schedule_sharing_modal {
    padding: 2.5rem 1rem 1.8rem 1rem !important;
    min-width: 420px;
    text-align: center;
    font-family: var(--font-josefin), sans-serif;

    h3 {
      max-width: 386px;
      color: rgba(18, 18, 18, 0.9);
    }

    .close_control {
      display: none;
    }
  }

  .schedule_sharing_controls {
    margin-top: 1rem;

    button {
      background: rgba(var(--btn-color), 0.1);
      border: none;
      outline: none;
      padding: 0.75rem 1.8rem;
      border-radius: 8px;
      font-size: 0.9rem;
      margin-right: 1rem;
      font-family: var(--font-josefin), sans-serif;
      font-weight: 600;
      color: rgba(18, 18, 18, 0.8);
      transition: all ease 0.1s;
      user-select: none;

      &:hover {
        cursor: pointer;
        background: rgba(var(--btn-color), 0.15);
        color: rgba(18, 18, 18, 1);
      }
    }
  }

  @media only screen and (max-width: 486px) {
    .schedule_sharing_modal {
      padding: 2.2rem 1rem 1.5rem 1rem !important;
      min-width: 320px;

      h3 {
        font-size: 1rem;
      }

      .schedule_sharing_controls {
        margin-top: 0.8rem;

        button {
          border-radius: 6px;
          padding: 0.7rem 1.5rem;
          font-size: 0.8rem;
        }
      }
    }
  }

  @media only screen and (max-width: 338px) {
    .schedule_sharing_modal {
      padding: 1.8rem 0.75rem 1.25rem 0.75rem !important;
      min-width: 90%;

      h3 {
        font-size: 0.85rem;
      }

      .schedule_sharing_controls {
        margin-top: 0.6rem;

        button {
          padding: 0.6rem 1.1rem;
          font-size: 0.7rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`
