import styled, {css} from "styled-components";

import UpThirdStep from "./up-third-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(UpThirdStep)`
  display: flex;
  flex-direction: column;

  .signup-body-container {
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
`