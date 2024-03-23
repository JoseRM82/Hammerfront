import styled, {css} from "styled-components";

import UpThirdStep from "./up-third-step";
import { LuxuryColors } from "../../../utils/styles";

export default styled(UpThirdStep)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;

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
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
    }

    &-selection {
      display: flex;
      gap: 5rem;
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
      align-self: center;
      display: flex;
      gap: 3rem;
    }
  }
`