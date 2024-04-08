import styled, {css} from "styled-components";

import UpThirdStep from "./up-third-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(UpThirdStep)`
  display: flex;
  flex-direction: column;

  .signup-third-body-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    height: 100%;
  }

  .back-image {
    justify-self: flex-start;
    width: fit-content;
    cursor: pointer;
    opacity: .3;
    padding: 3rem 0rem 0rem;

    :hover {
      opacity: unset;
    }
  }

  .signup-third {
    &-title{
      align-self: center;
      font-size: 3.5rem;
      margin: 0;
      display: flex;
      color: #fff;
    }

    &-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;

      ${props => props.lawyer && css`
        grid-template-columns: repeat(3, 1fr);
      `}
    }

    &-form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
    }

    &-selection {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &-account {
      font-size: 1.5rem;
      color: #fff;
      display: flex;
      gap: 1rem;

      &-link {
        text-decoration: unset;
        color: ${LuxuryColors.button};
        cursor: pointer;

        :hover {
          font-weight: 600;
        }
      }
    }

    &-btns {
      display: flex;
      gap: 3rem;
    }
  }

  @media (max-width: 600px) {
    height: fit-content;
    gap: 2rem;
    padding: 2rem 0rem;

    .back-image {
      padding: 1rem 0rem 0rem;
    }

    .signup-third-form {
      max-width: 37rem;
      align-self: center;
    }

    .signup-third-container {
      display: flex; 
      flex-direction: column;
      align-items: center;
    }

    .signup-third-title {
      font-size: 2.5rem;
    }

    .signup-third-body-container {
      align-items: center;
    }

    .signup-third-btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
      gap: 1rem;
    }
  }

  @media (max-width: 1200px) {
    gap: 2rem;

    .signup-third-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    .signup-third-body-container {
      gap: 8rem;
    }
  }
`